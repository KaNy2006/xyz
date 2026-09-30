const db=require("../config/LocalDatabase");
const CompatibilityService=require("../services/compatibilityService");
const PowerService=require("../services/powerService");
const PerformanceService=require("../services/performanceService");
const BottleneckService=require("../services/bottleneckService");
const RecommendationService=require("../services/recommendationService");
const SLOT_CATEGORIES=["CPU","Mainboard","RAM","GPU","SSD","PSU","Case","Cooler"];

async function createFromCompletedOrder(orderId){
  const data=db.read(),order=data.orders.find(o=>o.id===Number(orderId));
  if(!order||order.status!=="Hoàn tất"||!order.user_id)return null;
  const existing=data.pcBuilds.find(b=>b.order_id===Number(orderId));if(existing)return existing.id;
  const items=data.orderItems.filter(i=>i.order_id===Number(orderId));
  const chosen=new Map();
  for(const item of items){
    const p=data.products.find(x=>x.id===item.product_id);
    if(p&&SLOT_CATEGORIES.includes(p.category)&&!chosen.has(p.category))chosen.set(p.category,p.id);
  }
  if(!SLOT_CATEGORIES.every(c=>chosen.has(c)))return null;
  const buildId=db.nextId(data,"pcBuilds");
  data.pcBuilds.push({id:buildId,user_id:order.user_id,order_id:order.id,name:`PC #${order.id}`,status:"owned",created_at:new Date().toISOString()});
  for(const category of SLOT_CATEGORIES)data.pcBuildItems.push({id:db.nextId(data,"pcBuildItems"),build_id:buildId,product_id:chosen.get(category),category});
  db.save(data);return buildId;
}

async function getByUser(userId){
  return db.read().pcBuilds.filter(b=>b.user_id===Number(userId)).sort((a,b)=>b.id-a.id);
}

async function getOne(id,userId){
  const data=db.read(),build=data.pcBuilds.find(b=>b.id===Number(id)&&b.user_id===Number(userId));if(!build)return null;
  const parts={};
  for(const item of data.pcBuildItems.filter(i=>i.build_id===build.id)){
    const p=data.products.find(x=>x.id===item.product_id);if(p)parts[item.category]=JSON.parse(JSON.stringify(p));
  }
  const compatibility=CompatibilityService.analyze(parts);
  const power=PowerService.estimate(parts);
  const performance=PerformanceService.calculate(parts,"gaming1440");
  const bottleneck=BottleneckService.analyze(parts,"gaming1440");
  const recommendations=await RecommendationService.getUpgradeSuggestions(parts,3);
  return{...build,parts,compatibility,power,performance,bottleneck,recommendations};
}

async function markAssembled(id,userId){
  const data=db.read(),build=data.pcBuilds.find(b=>b.id===Number(id)&&b.user_id===Number(userId));
  if(build){build.status="assembled";db.save(data);}return build||null;
}

module.exports={SLOT_CATEGORIES,createFromCompletedOrder,getByUser,getOne,markAssembled};