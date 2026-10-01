const SPEC_SCHEMAS={
  CPU:{
    required:["socket","cores","threads","tdp","ram"],
    numeric:["cores","threads","tdp"]
  },
  GPU:{
    required:["vram","tdp","length","pcie"],
    numeric:["vram","tdp","length"]
  },
  Mainboard:{
    required:["socket","ram","form","chipset","m2"],
    numeric:[]
  },
  RAM:{
    required:["type","capacity","speed"],
    numeric:["capacity","speed"]
  },
  SSD:{
    required:["type","capacity","read","pcie"],
    numeric:["capacity","read"]
  },
  PSU:{
    required:["power","rating"],
    numeric:["power"]
  },
  Case:{
    required:["forms","maxGpuLength","maxCoolerHeight","radiator"],
    numeric:["maxGpuLength","maxCoolerHeight"],
    arrays:["forms"]
  },
  Cooler:{
    required:["type","sockets","coolingCapacity"],
    numeric:["coolingCapacity"],
    arrays:["sockets"],
    oneOf:["height","radiatorSize"]
  }
};

function validateSpecs(product){
  const schema=SPEC_SCHEMAS[product?.category];
  if(!schema)return{valid:false,errors:[`Danh mục không hỗ trợ: ${product?.category||"unknown"}`]};
  const specs=product?.specs||{};
  const errors=[];

  for(const key of schema.required){
    if(specs[key]===undefined||specs[key]===null||specs[key]==="")errors.push(`Thiếu specs.${key}`);
  }
  for(const key of schema.numeric||[]){
    if(specs[key]!==undefined&&!Number.isFinite(Number(specs[key])))errors.push(`specs.${key} phải là số`);
  }
  for(const key of schema.arrays||[]){
    if(specs[key]!==undefined&&!Array.isArray(specs[key]))errors.push(`specs.${key} phải là mảng`);
  }
  if(schema.oneOf&&!schema.oneOf.some(key=>specs[key]!==undefined&&specs[key]!==null&&specs[key]!=="")){
    errors.push(`Cần ít nhất một trong: ${schema.oneOf.map(k=>`specs.${k}`).join(", ")}`);
  }

  return{valid:errors.length===0,errors};
}

function validateCatalog(products=[]){
  const invalid=[];
  for(const product of products){
    const result=validateSpecs(product);
    if(!result.valid)invalid.push({id:product.id,name:product.name,category:product.category,errors:result.errors});
  }
  return{
    valid:invalid.length===0,
    total:products.length,
    invalid
  };
}

module.exports={SPEC_SCHEMAS,validateSpecs,validateCatalog};
