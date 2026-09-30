const db=require("../config/DBConnection");
const CompatibilityService=require("../services/compatibilityService");
const PowerService=require("../services/powerService");
const PerformanceService=require("../services/performanceService");
const BottleneckService=require("../services/bottleneckService");
const RecommendationService=require("../services/recommendationService");
const SLOT_CATEGORIES=["CPU","Mainboard","RAM","GPU","SSD","PSU","Case","Cooler"];

async function createFromCompletedOrder(orderId){
  const [orders]=await db.execute("SELECT * FROM orders WHERE id=? LIMIT 1",[Number(orderId)]);
  const order=orders[0];
  if(!order||order.status!=="Hoàn tất"||!order.user_id)return null;
  const [existing]=await db.execute("SELECT id FROM pc_builds WHERE order_id=? LIMIT 1",[Number(orderId)]);
  if(existing[0])return existing[0].id;
  const [items]=await db.execute(`SELECT oi.product_id,p.category FROM order_items oi JOIN products p ON p.id=oi.product_id WHERE oi.order_id=?`,[Number(orderId)]);
  const chosen=new Map();
  for(const item of items){if(SLOT_CATEGORIES.includes(item.category)&&!chosen.has(item.category))chosen.set(item.category,item.product_id);}
  if(!SLOT_CATEGORIES.every(c=>chosen.has(c)))return null;
  const c=await db.getConnection();
  try{
    await c.beginTransaction();
    const [r]=await c.execute("INSERT INTO pc_builds(user_id,order_id,name,status) VALUES(?,?,?,'owned')",[order.user_id,order.id,`PC #${order.id}`]);
    for(const category of SLOT_CATEGORIES)await c.execute("INSERT INTO pc_build_items(build_id,product_id,category) VALUES(?,?,?)",[r.insertId,chosen.get(category),category]);
    await c.commit();return r.insertId;
  }catch(e){await c.rollback();throw e;}finally{c.release();}
}

async function getByUser(userId){
  const[rows]=await db.execute("SELECT * FROM pc_builds WHERE user_id=? ORDER BY id DESC",[Number(userId)]);
  return rows;
}

async function getOne(id,userId){
  const[rows]=await db.execute("SELECT * FROM pc_builds WHERE id=? AND user_id=? LIMIT 1",[Number(id),Number(userId)]);
  if(!rows[0])return null;
  const[items]=await db.execute(`SELECT bi.category,p.* FROM pc_build_items bi JOIN products p ON p.id=bi.product_id WHERE bi.build_id=?`,[Number(id)]);
  const parts={};
  for(const row of items){
    parts[row.category]={...row,price:Number(row.price),stock:Number(row.stock),performance:Number(row.performance),specs:typeof row.specs==="string"?JSON.parse(row.specs||"{}"):row.specs||{}};
  }
  const compatibility=CompatibilityService.analyze(parts);
  const power=PowerService.estimate(parts);
  const performance=PerformanceService.calculate(parts,"gaming1440");
  const bottleneck=BottleneckService.analyze(parts,"gaming1440");
  const recommendations=await RecommendationService.getUpgradeSuggestions(parts,3);
  return{...rows[0],parts,compatibility,power,performance,bottleneck,recommendations};
}

async function markAssembled(id,userId){
  await db.execute("UPDATE pc_builds SET status='assembled' WHERE id=? AND user_id=?",[Number(id),Number(userId)]);
}

module.exports={SLOT_CATEGORIES,createFromCompletedOrder,getByUser,getOne,markAssembled};