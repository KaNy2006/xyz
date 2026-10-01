const fs=require("fs");
const path=require("path");
const {products}=require("../../database/seed-products");

const dataDir=path.join(__dirname,"..","..","data");
const dataFile=path.join(dataDir,"store.json");

function defaultData(){
  return{
    users:[
      {id:1,name:"Admin",email:"admin@store.test",password:"admin123",role:"admin",created_at:new Date().toISOString()},
      {id:2,name:"Khách hàng",email:"user@store.test",password:"user123",role:"customer",created_at:new Date().toISOString()}
    ],
    products:products.map(p=>({...p,created_at:new Date().toISOString(),updated_at:new Date().toISOString()})),
    orders:[],
    orderItems:[],
    pcBuilds:[],
    pcBuildItems:[],
    counters:{users:2,products:products.length,orders:0,orderItems:0,pcBuilds:0,pcBuildItems:0}
  };
}

function ensure(){
  if(!fs.existsSync(dataDir))fs.mkdirSync(dataDir,{recursive:true});
  if(!fs.existsSync(dataFile)){
    fs.writeFileSync(dataFile,JSON.stringify(defaultData(),null,2),"utf8");
    console.log(`✓ Local database initialized with ${products.length} products.`);
  }
}

function read(){
  ensure();
  try{return JSON.parse(fs.readFileSync(dataFile,"utf8"));}
  catch(err){
    console.error("Local database corrupted, recreating:",err.message);
    const fresh=defaultData();save(fresh);return fresh;
  }
}

function save(data){
  if(!fs.existsSync(dataDir))fs.mkdirSync(dataDir,{recursive:true});
  fs.writeFileSync(dataFile,JSON.stringify(data,null,2),"utf8");
  return data;
}

function nextId(data,key){
  data.counters[key]=(Number(data.counters[key])||0)+1;
  return data.counters[key];
}

function reset(){
  const fresh=defaultData();save(fresh);return fresh;
}

ensure();
module.exports={read,save,nextId,reset,dataFile};
