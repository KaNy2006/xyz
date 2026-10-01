const OrderModel=require("../models/OrderModel");
const ProductModel=require("../models/ProductModel");
const CompatibilityService=require("../services/compatibilityService");

const slots=["CPU","Mainboard","RAM","GPU","SSD","PSU","Case","Cooler"];
const fields={
  CPU:"cpuId",
  Mainboard:"mainboardId",
  RAM:"ramId",
  GPU:"gpuId",
  SSD:"ssdId",
  PSU:"psuId",
  Case:"caseId",
  Cooler:"coolerId"
};

function readSelected(query={}){
  return Object.fromEntries(
    Object.values(fields).map(key=>[key,Number(query[key])||null])
  );
}

async function resolveSelectedParts(selected){
  const entries=await Promise.all(slots.map(async slot=>{
    const id=selected[fields[slot]];
    const product=id?await ProductModel.getById(id):null;
    return[slot,product&&product.category===slot?product:null];
  }));
  return Object.fromEntries(entries);
}

async function index(req,res){
  const unlocked=await OrderModel.hasCompletedOrder(req.session.user.id);
  if(!unlocked){
    return res.render("client/simulator-access",{
      title:"PC Simulator",
      unlocked:false,
      slots,
      fields,
      products:[],
      selected:{},
      parts:{},
      selectedCount:0,
      compatibility:null
    });
  }

  const products=await ProductModel.getAll();
  const selected=readSelected(req.query);
  const parts=await resolveSelectedParts(selected);
  const selectedCount=Object.values(parts).filter(Boolean).length;
  const compatibility=CompatibilityService.analyze(parts);

  res.render("client/simulator-access",{
    title:"PC Simulator",
    unlocked:true,
    slots,
    fields,
    products,
    selected,
    parts,
    selectedCount,
    compatibility
  });
}

module.exports={index};
