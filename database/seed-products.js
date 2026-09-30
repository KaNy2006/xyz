const db=require("../src/config/DBConnection");

const P=[];
const add=(name,category,brand,price,stock,performance,specs,featured=0)=>P.push({name,category,brand,price,stock,performance,specs,featured});

[
["Intel Core i5-12400F","Intel",3190000,25,68,{socket:"LGA1700",cores:6,threads:12,tdp:65,ram:"DDR4/DDR5"}],
["Intel Core i5-13400F","Intel",4490000,20,75,{socket:"LGA1700",cores:10,threads:16,tdp:65,ram:"DDR4/DDR5"}],
["Intel Core i5-14400F","Intel",4990000,18,78,{socket:"LGA1700",cores:10,threads:16,tdp:65,ram:"DDR4/DDR5"}],
["Intel Core i5-14600KF","Intel",6990000,16,87,{socket:"LGA1700",cores:14,threads:20,tdp:125,ram:"DDR4/DDR5"}],
["Intel Core i7-14700KF","Intel",9290000,12,94,{socket:"LGA1700",cores:20,threads:28,tdp:125,ram:"DDR4/DDR5"}],
["AMD Ryzen 5 5600","AMD",2690000,30,64,{socket:"AM4",cores:6,threads:12,tdp:65,ram:"DDR4"}],
["AMD Ryzen 7 5700X3D","AMD",5590000,18,82,{socket:"AM4",cores:8,threads:16,tdp:105,ram:"DDR4"}],
["AMD Ryzen 5 7500F","AMD",3790000,24,76,{socket:"AM5",cores:6,threads:12,tdp:65,ram:"DDR5"}],
["AMD Ryzen 5 7600","AMD",4790000,20,80,{socket:"AM5",cores:6,threads:12,tdp:65,ram:"DDR5"}],
["AMD Ryzen 7 7800X3D","AMD",10490000,12,96,{socket:"AM5",cores:8,threads:16,tdp:120,ram:"DDR5"}]
].forEach((x,i)=>add(x[0],"CPU",x[1],x[2],x[3],x[4],x[5],i===0||i>=6?1:0));

[
["GeForce RTX 3060 12GB","NVIDIA",7990000,22,58,{vram:12,tdp:170,length:242,pcie:"4.0"}],
["GeForce RTX 3070 Ti 8GB","NVIDIA",9990000,8,69,{vram:8,tdp:290,length:267,pcie:"4.0"}],
["GeForce RTX 4060 8GB","NVIDIA",8490000,25,66,{vram:8,tdp:115,length:240,pcie:"4.0"}],
["GeForce RTX 4070 Super 12GB","NVIDIA",16990000,16,84,{vram:12,tdp:220,length:300,pcie:"4.0"}],
["GeForce RTX 5060 8GB","NVIDIA",9990000,20,72,{vram:8,tdp:145,length:245,pcie:"5.0"}],
["GeForce RTX 5060 Ti 16GB","NVIDIA",13990000,16,79,{vram:16,tdp:180,length:280,pcie:"5.0"}],
["GeForce RTX 5070 12GB","NVIDIA",18990000,14,88,{vram:12,tdp:250,length:304,pcie:"5.0"}],
["GeForce RTX 5070 Ti 16GB","NVIDIA",25990000,10,93,{vram:16,tdp:300,length:320,pcie:"5.0"}],
["GeForce RTX 5080 16GB","NVIDIA",35990000,6,99,{vram:16,tdp:360,length:330,pcie:"5.0"}],
["Radeon RX 9070 XT 16GB","AMD",23990000,10,91,{vram:16,tdp:304,length:320,pcie:"5.0"}]
].forEach((x,i)=>add(x[0],"GPU",x[1],x[2],x[3],x[4],x[5],i!==1));

[
["ASUS Prime H610M-K D4","ASUS",1890000,20,55,{socket:"LGA1700",ram:"DDR4",form:"mATX",chipset:"H610",m2:"NVMe"}],
["MSI PRO B660M-A DDR4","MSI",2890000,18,65,{socket:"LGA1700",ram:"DDR4",form:"mATX",chipset:"B660",m2:"NVMe"}],
["MSI MAG B760 Tomahawk WiFi DDR5","MSI",4890000,16,80,{socket:"LGA1700",ram:"DDR5",form:"ATX",chipset:"B760",m2:"NVMe"}],
["ASUS TUF Gaming Z790-Plus WiFi","ASUS",7490000,10,90,{socket:"LGA1700",ram:"DDR5",form:"ATX",chipset:"Z790",m2:"NVMe"}],
["Gigabyte Z790 Aorus Elite AX","Gigabyte",7990000,9,92,{socket:"LGA1700",ram:"DDR5",form:"ATX",chipset:"Z790",m2:"NVMe"}],
["MSI B450M Mortar Max","MSI",1890000,12,56,{socket:"AM4",ram:"DDR4",form:"mATX",chipset:"B450",m2:"NVMe"}],
["MSI MAG B550 Tomahawk","MSI",3490000,18,72,{socket:"AM4",ram:"DDR4",form:"ATX",chipset:"B550",m2:"NVMe"}],
["ASUS Prime A620M-K","ASUS",2390000,20,62,{socket:"AM5",ram:"DDR5",form:"mATX",chipset:"A620",m2:"NVMe"}],
["Gigabyte B650 Aorus Elite AX","Gigabyte",5790000,15,84,{socket:"AM5",ram:"DDR5",form:"ATX",chipset:"B650",m2:"NVMe"}],
["MSI MAG X870 Tomahawk WiFi","MSI",8990000,8,95,{socket:"AM5",ram:"DDR5",form:"ATX",chipset:"X870",m2:"NVMe"}]
].forEach((x,i)=>add(x[0],"Mainboard",x[1],x[2],x[3],x[4],x[5],i===2||i>=6));

[
["Kingston Fury Beast 16GB DDR4 3200","Kingston",990000,30,55,{type:"DDR4",capacity:16,speed:3200}],
["Corsair Vengeance LPX 16GB DDR4 3200","Corsair",1090000,28,57,{type:"DDR4",capacity:16,speed:3200}],
["G.Skill Ripjaws V 32GB DDR4 3600","G.Skill",1790000,24,68,{type:"DDR4",capacity:32,speed:3600}],
["Kingston Fury Beast 32GB DDR4 3200","Kingston",1690000,26,66,{type:"DDR4",capacity:32,speed:3200}],
["Kingston Fury Beast 16GB DDR5 5200","Kingston",1390000,30,65,{type:"DDR5",capacity:16,speed:5200}],
["Corsair Vengeance 32GB DDR5 5600","Corsair",2490000,24,76,{type:"DDR5",capacity:32,speed:5600}],
["Corsair Vengeance 32GB DDR5 6000","Corsair",2890000,22,82,{type:"DDR5",capacity:32,speed:6000}],
["G.Skill Trident Z5 Neo 32GB DDR5 6000","G.Skill",3290000,16,86,{type:"DDR5",capacity:32,speed:6000}],
["Kingston Fury Renegade 48GB DDR5 6400","Kingston",4290000,12,90,{type:"DDR5",capacity:48,speed:6400}],
["Corsair Vengeance 64GB DDR5 6000","Corsair",5290000,10,94,{type:"DDR5",capacity:64,speed:6000}]
].forEach((x,i)=>add(x[0],"RAM",x[1],x[2],x[3],x[4],x[5],i>=6));

[
["Crucial BX500 500GB","Crucial",890000,30,50,{type:"SATA",capacity:500,read:540,pcie:"SATA"}],
["Samsung 870 EVO 1TB","Samsung",1890000,20,62,{type:"SATA",capacity:1000,read:560,pcie:"SATA"}],
["WD Blue SN570 500GB","Western Digital",1090000,25,60,{type:"NVMe",capacity:500,read:3500,pcie:"3.0"}],
["Kingston NV2 1TB","Kingston",1490000,28,68,{type:"NVMe",capacity:1000,read:3500,pcie:"4.0"}],
["WD Black SN770 1TB","Western Digital",1990000,22,77,{type:"NVMe",capacity:1000,read:5150,pcie:"4.0"}],
["Lexar NM790 1TB","Lexar",2190000,20,82,{type:"NVMe",capacity:1000,read:7400,pcie:"4.0"}],
["Samsung 990 Pro 1TB","Samsung",2990000,20,90,{type:"NVMe",capacity:1000,read:7450,pcie:"4.0"}],
["WD Black SN850X 2TB","Western Digital",4290000,14,92,{type:"NVMe",capacity:2000,read:7300,pcie:"4.0"}],
["Samsung 990 Pro 2TB","Samsung",4890000,12,94,{type:"NVMe",capacity:2000,read:7450,pcie:"4.0"}],
["Crucial T705 2TB Gen5","Crucial",7990000,8,99,{type:"NVMe",capacity:2000,read:14500,pcie:"5.0"}]
].forEach((x,i)=>add(x[0],"SSD",x[1],x[2],x[3],x[4],x[5],i>=6));

[
["Cooler Master MWE 550 Bronze V2","Cooler Master",1290000,22,55,{power:550,rating:"80 Plus Bronze"}],
["Corsair CX650","Corsair",1690000,20,62,{power:650,rating:"80 Plus Bronze"}],
["MSI MAG A650BN","MSI",1490000,24,60,{power:650,rating:"80 Plus Bronze"}],
["Cooler Master MWE Gold 750 V2","Cooler Master",2390000,18,75,{power:750,rating:"80 Plus Gold"}],
["Corsair RM750e","Corsair",2790000,16,80,{power:750,rating:"80 Plus Gold"}],
["MSI MAG A850GL PCIE5","MSI",2990000,15,84,{power:850,rating:"80 Plus Gold"}],
["Corsair RM850x","Corsair",3590000,12,88,{power:850,rating:"80 Plus Gold"}],
["Seasonic Focus GX-1000","Seasonic",4490000,10,92,{power:1000,rating:"80 Plus Gold"}],
["Corsair RM1000x Shift","Corsair",5290000,8,95,{power:1000,rating:"80 Plus Gold"}],
["be quiet! Straight Power 12 1200W","be quiet!",6990000,6,99,{power:1200,rating:"80 Plus Platinum"}]
].forEach((x,i)=>add(x[0],"PSU",x[1],x[2],x[3],x[4],x[5],i>=6));

[
["DeepCool Matrexx 40 3FS","DeepCool",1090000,18,55,{forms:["mATX","Mini-ITX"],maxGpuLength:320,maxCoolerHeight:165,radiator:"280mm"}],
["Montech Air 100 ARGB","Montech",1390000,18,62,{forms:["mATX","Mini-ITX"],maxGpuLength:330,maxCoolerHeight:161,radiator:"280mm"}],
["NZXT H5 Flow","NZXT",2190000,16,72,{forms:["ATX","mATX","Mini-ITX"],maxGpuLength:365,maxCoolerHeight:165,radiator:"280mm"}],
["Corsair 4000D Airflow","Corsair",2290000,16,75,{forms:["ATX","mATX","Mini-ITX"],maxGpuLength:360,maxCoolerHeight:170,radiator:"360mm"}],
["Lian Li Lancool 216","Lian Li",2490000,14,80,{forms:["E-ATX","ATX","mATX","Mini-ITX"],maxGpuLength:392,maxCoolerHeight:180,radiator:"360mm"}],
["Fractal Design Pop Air","Fractal Design",2590000,12,79,{forms:["ATX","mATX","Mini-ITX"],maxGpuLength:405,maxCoolerHeight:170,radiator:"280mm"}],
["NZXT H7 Flow","NZXT",3290000,10,86,{forms:["E-ATX","ATX","mATX","Mini-ITX"],maxGpuLength:400,maxCoolerHeight:185,radiator:"360mm"}],
["Corsair 5000D Airflow","Corsair",3890000,10,89,{forms:["E-ATX","ATX","mATX","Mini-ITX"],maxGpuLength:400,maxCoolerHeight:170,radiator:"360mm"}],
["Lian Li O11 Dynamic EVO","Lian Li",4290000,8,93,{forms:["E-ATX","ATX","mATX","Mini-ITX"],maxGpuLength:426,maxCoolerHeight:167,radiator:"360mm"}],
["Fractal Design North XL","Fractal Design",5190000,6,97,{forms:["E-ATX","ATX","mATX","Mini-ITX"],maxGpuLength:413,maxCoolerHeight:185,radiator:"420mm"}]
].forEach((x,i)=>add(x[0],"Case",x[1],x[2],x[3],x[4],x[5],i>=6));

[
["DeepCool AG400","DeepCool",690000,25,58,{type:"Air",sockets:["LGA1700","AM4","AM5"],height:150,coolingCapacity:180}],
["Thermalright Assassin X 120","Thermalright",790000,22,60,{type:"Air",sockets:["LGA1700","AM4","AM5"],height:148,coolingCapacity:180}],
["Cooler Master Hyper 212 Halo","Cooler Master",1090000,20,65,{type:"Air",sockets:["LGA1700","AM4","AM5"],height:154,coolingCapacity:190}],
["DeepCool AK400 Digital","DeepCool",1290000,18,70,{type:"Air",sockets:["LGA1700","AM4","AM5"],height:156,coolingCapacity:200}],
["Thermalright Peerless Assassin 120 SE","Thermalright",1390000,18,78,{type:"Air",sockets:["LGA1700","AM4","AM5"],height:155,coolingCapacity:240}],
["DeepCool AK620","DeepCool",1790000,16,82,{type:"Air",sockets:["LGA1700","AM4","AM5"],height:160,coolingCapacity:260}],
["Arctic Liquid Freezer III 240","Arctic",2590000,12,86,{type:"AIO",sockets:["LGA1700","AM4","AM5"],radiatorSize:240,coolingCapacity:300}],
["Corsair H100i Elite 240","Corsair",3290000,10,88,{type:"AIO",sockets:["LGA1700","AM4","AM5"],radiatorSize:240,coolingCapacity:310}],
["Arctic Liquid Freezer III 360","Arctic",3490000,10,94,{type:"AIO",sockets:["LGA1700","AM4","AM5"],radiatorSize:360,coolingCapacity:350}],
["NZXT Kraken Elite 360","NZXT",6990000,6,98,{type:"AIO",sockets:["LGA1700","AM4","AM5"],radiatorSize:360,coolingCapacity:360}]
].forEach((x,i)=>add(x[0],"Cooler",x[1],x[2],x[3],x[4],x[5],i>=7));

const image={CPU:"/uploads/cpu.svg",GPU:"/uploads/gpu.svg",Mainboard:"/uploads/mainboard.svg",RAM:"/uploads/ram.svg",SSD:"/uploads/ssd.svg",PSU:"/uploads/psu.svg",Case:"/uploads/case.svg",Cooler:"/uploads/cooler.svg"};

(async()=>{
  for(const p of P){
    await db.execute(`INSERT INTO products(name,category,brand,price,stock,image,featured,performance,specs)
      VALUES(?,?,?,?,?,?,?,?,?)
      ON DUPLICATE KEY UPDATE category=VALUES(category),brand=VALUES(brand),price=VALUES(price),stock=VALUES(stock),image=VALUES(image),featured=VALUES(featured),performance=VALUES(performance),specs=VALUES(specs)`,
      [p.name,p.category,p.brand,p.price,p.stock,image[p.category],p.featured,p.performance,JSON.stringify(p.specs)]);
  }
  console.log(`Seeded ${P.length} products (10 per category).`);
  await db.end();
})().catch(async e=>{console.error(e);await db.end();process.exit(1);});
