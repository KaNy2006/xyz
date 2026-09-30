const express=require("express");
const session=require("express-session");
const path=require("path");
const fs=require("fs");

const envPath=path.join(__dirname,".env");
if(fs.existsSync(envPath)){
  fs.readFileSync(envPath,"utf8").split(/\r?\n/).forEach(line=>{
    const trimmed=line.trim();
    if(!trimmed||trimmed.startsWith("#")||!trimmed.includes("="))return;
    const [key,...valueParts]=trimmed.split("=");
    if(!process.env[key])process.env[key]=valueParts.join("=").trim();
  });
}

// Initialize local demo database automatically on first start.
require("./src/config/LocalDatabase");

const webRoutes=require("./src/routes/web");
const adminRoutes=require("./src/routes/admin");
const app=express();
const PORT=Number(process.env.PORT||3000);

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"src","views"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));
app.use(session({
  secret:process.env.SESSION_SECRET||"computer-component-store-secret",
  resave:false,
  saveUninitialized:false
}));
app.use((req,res,next)=>{
  res.locals.user=req.session.user||null;
  res.locals.cart=req.session.cart||[];
  res.locals.flash=req.session.flash||null;
  delete req.session.flash;
  next();
});

app.use("/",webRoutes);
app.use("/admin",adminRoutes);
app.use((req,res)=>res.status(404).render("client/404",{title:"Không tìm thấy trang"}));
app.use((err,req,res,next)=>{
  console.error(err);
  req.session.flash={type:"error",message:"Có lỗi xảy ra khi xử lý dữ liệu. Hãy thử lại."};
  res.redirect(req.get("Referrer")||"/");
});

app.listen(PORT,"0.0.0.0",()=>{
  console.log("");
  console.log("✓ PC Upgrade Store is running.");
  console.log(`✓ Local URL: http://localhost:${PORT}`);
  if(process.env.CODESPACE_NAME&&process.env.GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN){
    console.log(`✓ Codespaces URL: https://${process.env.CODESPACE_NAME}-${PORT}.${process.env.GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN}`);
  }else{
    console.log("✓ In Codespaces, open the forwarded Port 3000.");
  }
  console.log("");
});