const db=require("../config/DBConnection");
function safeUser(u){if(!u)return null;const{password:_p,...rest}=u;return rest;}
async function findByEmail(email){const[rows]=await db.execute("SELECT * FROM users WHERE email=? LIMIT 1",[email]);return rows[0]||null;}
async function create({name,email,password}){const[r]=await db.execute("INSERT INTO users (name,email,password,role) VALUES (?,?,?,'customer')",[name,email,password]);const[rows]=await db.execute("SELECT * FROM users WHERE id=? LIMIT 1",[r.insertId]);return safeUser(rows[0]);}
async function verify(email,password){const u=await findByEmail(email);if(!u||u.password!==password)return null;return safeUser(u);}
module.exports={findByEmail,create,verify};
