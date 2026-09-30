const UserModel=require("../models/UserModel");
function showLogin(req,res){res.render("client/login",{title:"Đăng nhập"});}
async function login(req,res){const user=await UserModel.verify(req.body.email,req.body.password);if(!user){req.session.flash={type:"error",message:"Email hoặc mật khẩu chưa đúng."};return res.redirect("/login");}req.session.user=user;req.session.flash={type:"success",message:`Xin chào ${user.name}.`};res.redirect(user.role==="admin"?"/admin":"/");}
function showRegister(req,res){res.render("client/register",{title:"Đăng ký"});}
async function register(req,res){if(await UserModel.findByEmail(req.body.email)){req.session.flash={type:"error",message:"Email đã được sử dụng."};return res.redirect("/register");}const user=await UserModel.create(req.body);req.session.user={id:user.id,name:user.name,email:user.email,role:user.role};req.session.flash={type:"success",message:"Tạo tài khoản thành công."};res.redirect("/");}
function logout(req,res){req.session.destroy(()=>res.redirect("/"));}
module.exports={showLogin,login,showRegister,register,logout};