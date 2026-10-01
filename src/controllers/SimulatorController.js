const OrderModel=require("../models/OrderModel");

async function index(req,res){
  const unlocked=await OrderModel.hasCompletedOrder(req.session.user.id);
  res.render("client/simulator-access",{
    title:"PC Simulator",
    unlocked
  });
}

module.exports={index};
