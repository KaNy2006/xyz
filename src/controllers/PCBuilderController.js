const ProductModel=require("../models/ProductModel");const PCBuilderModel=require("../models/PCBuilderModel");
const fields=["cpuId","mainboardId","ramId","gpuId","ssdId","psuId","caseId","coolerId"];
function selectedFrom(query={}){return Object.fromEntries(fields.map(k=>[k,Number(query[k])||null]));}
async function show(req,res){const selected=selectedFrom(req.query);const workload=req.query.workload||"gaming1440";res.render("client/pc-builder",{title:"PC Builder",products:await ProductModel.getAll(),selected,workload,builder:await PCBuilderModel.analyzeBuild(selected,workload)});}
async function compatible(req,res){res.json({mainboards:await PCBuilderModel.getOptions("Mainboard",{cpuId:Number(req.query.cpuId)}),rams:await PCBuilderModel.getOptions("RAM",{mainboardId:Number(req.query.mainboardId)})});}
module.exports={show,compatible};