const PCBuildModel=require("../models/PCBuildModel");
async function list(req,res){res.render("client/my-pc",{title:"PC của tôi",builds:await PCBuildModel.getByUser(req.session.user.id)});}
async function detail(req,res){const build=await PCBuildModel.getOne(req.params.id,req.session.user.id);if(!build)return res.status(404).render("client/404",{title:"Không tìm thấy PC"});res.render("client/my-pc-detail",{title:build.name,build});}
async function assembled(req,res){await PCBuildModel.markAssembled(req.params.id,req.session.user.id);req.session.flash={type:"success",message:"PC đã được đánh dấu lắp ráp hoàn tất."};res.redirect(`/my-pc/${req.params.id}`);}
module.exports={list,detail,assembled};