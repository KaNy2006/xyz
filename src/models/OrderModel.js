const db=require("../config/LocalDatabase");
function normalizeOrder(r){return{id:r.id,customer:r.customer_name,total:Number(r.total),status:r.status,createdAt:String(r.created_at).slice(0,10),user_id:r.user_id};}
async function getAll(){return db.read().orders.slice().sort((a,b)=>b.id-a.id).map(normalizeOrder);}
async function create({user,cart}){
  const data=db.read();
  for(const item of cart){const p=data.products.find(x=>x.id===item.product.id);if(!p||p.stock<item.quantity)throw new Error(`${item.product.name} không đủ tồn kho.`);}
  const id=db.nextId(data,"orders"),total=cart.reduce((s,i)=>s+i.product.price*i.quantity,0);
  data.orders.push({id,user_id:user?.id||null,customer_name:user?.name||"Khách vãng lai",total,status:"Chờ duyệt",created_at:new Date().toISOString()});
  for(const item of cart){
    const p=data.products.find(x=>x.id===item.product.id);p.stock-=item.quantity;
    data.orderItems.push({id:db.nextId(data,"orderItems"),order_id:id,product_id:p.id,product_name:p.name,price:p.price,quantity:item.quantity});
  }
  db.save(data);return id;
}
async function updateStatus(id,status){const data=db.read(),o=data.orders.find(x=>x.id===Number(id));if(o){o.status=status;db.save(data);}return o||null;}
async function getRevenueSummary(){
  const orders=db.read().orders,active=orders.filter(o=>o.status!=="Đã hủy");
  return{revenue:active.reduce((s,o)=>s+Number(o.total),0),orders:orders.length,pending:orders.filter(o=>o.status==="Chờ duyệt").length};
}
module.exports={getAll,create,updateStatus,getRevenueSummary};
