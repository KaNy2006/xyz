const {products}=require("./seed-products");
const {validateCatalog}=require("../src/services/productSpecService");

const result=validateCatalog(products);

if(result.valid){
  const counts=products.reduce((acc,p)=>{
    acc[p.category]=(acc[p.category]||0)+1;
    return acc;
  },{});
  console.log(`✓ Product technical data valid: ${result.total} products.`);
  console.log(counts);
  process.exit(0);
}

console.error(`✗ Invalid product technical data: ${result.invalid.length} products.`);
for(const item of result.invalid){
  console.error(`- #${item.id} ${item.name} [${item.category}]: ${item.errors.join("; ")}`);
}
process.exit(1);
