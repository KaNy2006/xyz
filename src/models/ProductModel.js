const db=require("../config/LocalDatabase");

function clone(p){return p?JSON.parse(JSON.stringify(p)):null;}

async function getAll(filters={}){
  let products=db.read().products.slice();
  if(filters.keyword){
    const k=String(filters.keyword).toLowerCase();
    products=products.filter(p=>p.name.toLowerCase().includes(k)||p.brand.toLowerCase().includes(k));
  }
  if(filters.category)products=products.filter(p=>p.category===filters.category);
  if(filters.minPerformance)products=products.filter(p=>Number(p.performance)>=Number(filters.minPerformance));
  return products.sort((a,b)=>b.id-a.id).map(clone);
}
async function getFeatured(){
  return db.read().products.filter(p=>p.featured).sort((a,b)=>b.id-a.id).slice(0,8).map(clone);
}
async function getById(id){return clone(db.read().products.find(p=>p.id===Number(id))||null);}
async function getCategories(){return [...new Set(db.read().products.map(p=>p.category))].sort();}
async function create(product){
  const data=db.read(),id=db.nextId(data,"products");
  const row={id,name:product.name,category:product.category,brand:product.brand,price:Number(product.price)||0,stock:Number(product.stock)||0,image:product.image||"/uploads/component.svg",featured:Boolean(product.featured),performance:Number(product.performance)||70,specs:product.specs||{},created_at:new Date().toISOString(),updated_at:new Date().toISOString()};
  data.products.push(row);db.save(data);return clone(row);
}
async function update(id,changes){
  const data=db.read(),p=data.products.find(x=>x.id===Number(id));if(!p)return null;
  Object.assign(p,{name:changes.name,brand:changes.brand,category:changes.category,price:Number(changes.price)||0,stock:Number(changes.stock)||0,performance:Number(changes.performance)||70,updated_at:new Date().toISOString()});
  db.save(data);return clone(p);
}
async function remove(id){
  const data=db.read(),before=data.products.length;data.products=data.products.filter(p=>p.id!==Number(id));db.save(data);return data.products.length<before;
}
async function updateStock(productId,amount){
  const data=db.read(),p=data.products.find(x=>x.id===Number(productId));if(!p)throw new Error("Không tìm thấy sản phẩm.");
  const qty=Number(amount)||0;if(qty>p.stock)throw new Error(`Không đủ tồn kho cho ${p.name}.`);
  p.stock=Math.max(0,p.stock-qty);p.updated_at=new Date().toISOString();db.save(data);
}
module.exports={getAll,getFeatured,getById,getCategories,create,update,remove,updateStock};
