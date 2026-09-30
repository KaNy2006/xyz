const db=require("../config/LocalDatabase");
function safeUser(u){if(!u)return null;const{password:_p,...rest}=u;return JSON.parse(JSON.stringify(rest));}
async function findByEmail(email){return db.read().users.find(u=>u.email===email)||null;}
async function create({name,email,password}){
  const data=db.read();if(data.users.some(u=>u.email===email))throw new Error("Email đã được sử dụng.");
  const user={id:db.nextId(data,"users"),name,email,password,role:"customer",created_at:new Date().toISOString()};
  data.users.push(user);db.save(data);return safeUser(user);
}
async function verify(email,password){const u=await findByEmail(email);return u&&u.password===password?safeUser(u):null;}
module.exports={findByEmail,create,verify};
