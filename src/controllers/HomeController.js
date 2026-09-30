const ProductModel=require("../models/ProductModel");
async function index(req,res){res.render("client/home",{title:"Bán linh kiện & mô phỏng PC",featuredProducts:await ProductModel.getFeatured(),categories:await ProductModel.getCategories()});}
module.exports={index};