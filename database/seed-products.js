const P=[];
const add=(name,category,brand,price,stock,performance,specs,featured=0)=>P.push({name,category,brand,price,stock,performance,specs,featured});

// CPU: 18 model tieu bieu, chia deu Intel / AMD.
[
["Intel Core i3-12100F","Intel",2190000,24,56,{socket:"LGA1700",cores:4,threads:8,tdp:58,ram:"DDR4/DDR5"}],
["Intel Core i5-12400F","Intel",3190000,25,68,{socket:"LGA1700",cores:6,threads:12,tdp:65,ram:"DDR4/DDR5"}],
["Intel Core i5-12600K","Intel",4690000,16,77,{socket:"LGA1700",cores:10,threads:16,tdp:125,ram:"DDR4/DDR5"}],
["Intel Core i5-13400F","Intel",4490000,20,75,{socket:"LGA1700",cores:10,threads:16,tdp:65,ram:"DDR4/DDR5"}],
["Intel Core i5-13600K","Intel",6290000,16,86,{socket:"LGA1700",cores:14,threads:20,tdp:125,ram:"DDR4/DDR5"}],
["Intel Core i5-14400F","Intel",4990000,18,78,{socket:"LGA1700",cores:10,threads:16,tdp:65,ram:"DDR4/DDR5"}],
["Intel Core i5-14600KF","Intel",6990000,16,87,{socket:"LGA1700",cores:14,threads:20,tdp:125,ram:"DDR4/DDR5"}],
["Intel Core i7-14700KF","Intel",9290000,12,94,{socket:"LGA1700",cores:20,threads:28,tdp:125,ram:"DDR4/DDR5"}],
["Intel Core i9-14900K","Intel",13990000,8,99,{socket:"LGA1700",cores:24,threads:32,tdp:125,ram:"DDR4/DDR5"}],
["AMD Ryzen 5 3600","AMD",1890000,18,52,{socket:"AM4",cores:6,threads:12,tdp:65,ram:"DDR4"}],
["AMD Ryzen 5 5500","AMD",2090000,22,57,{socket:"AM4",cores:6,threads:12,tdp:65,ram:"DDR4"}],
["AMD Ryzen 5 5600","AMD",2690000,30,64,{socket:"AM4",cores:6,threads:12,tdp:65,ram:"DDR4"}],
["AMD Ryzen 7 5700X3D","AMD",5590000,18,82,{socket:"AM4",cores:8,threads:16,tdp:105,ram:"DDR4"}],
["AMD Ryzen 5 7500F","AMD",3790000,24,76,{socket:"AM5",cores:6,threads:12,tdp:65,ram:"DDR5"}],
["AMD Ryzen 5 7600","AMD",4790000,20,80,{socket:"AM5",cores:6,threads:12,tdp:65,ram:"DDR5"}],
["AMD Ryzen 7 7700","AMD",6990000,15,88,{socket:"AM5",cores:8,threads:16,tdp:65,ram:"DDR5"}],
["AMD Ryzen 7 7800X3D","AMD",10490000,12,96,{socket:"AM5",cores:8,threads:16,tdp:120,ram:"DDR5"}],
["AMD Ryzen 9 7900X","AMD",10990000,10,95,{socket:"AM5",cores:12,threads:24,tdp:170,ram:"DDR5"}]
].forEach((x,i)=>add(x[0],"CPU",x[1],x[2],x[3],x[4],x[5],[1,5,7,11,13,16].includes(i)?1:0));

// GPU: 20 model tieu bieu, co ca NVIDIA va AMD.
[
["GeForce GTX 1660 Super 6GB","NVIDIA",4490000,10,45,{vram:6,tdp:125,length:230,pcie:"3.0"}],
["GeForce RTX 2060 6GB","NVIDIA",5290000,8,50,{vram:6,tdp:160,length:229,pcie:"3.0"}],
["GeForce RTX 3060 12GB","NVIDIA",7990000,22,58,{vram:12,tdp:170,length:242,pcie:"4.0"}],
["GeForce RTX 3060 Ti 8GB","NVIDIA",8990000,12,64,{vram:8,tdp:200,length:242,pcie:"4.0"}],
["GeForce RTX 3070 Ti 8GB","NVIDIA",9990000,8,69,{vram:8,tdp:290,length:267,pcie:"4.0"}],
["GeForce RTX 4060 8GB","NVIDIA",8490000,25,66,{vram:8,tdp:115,length:240,pcie:"4.0"}],
["GeForce RTX 4060 Ti 16GB","NVIDIA",11990000,16,75,{vram:16,tdp:165,length:272,pcie:"4.0"}],
["GeForce RTX 4070 Super 12GB","NVIDIA",16990000,16,84,{vram:12,tdp:220,length:300,pcie:"4.0"}],
["GeForce RTX 5060 8GB","NVIDIA",9990000,20,72,{vram:8,tdp:145,length:245,pcie:"5.0"}],
["GeForce RTX 5060 Ti 16GB","NVIDIA",13990000,16,79,{vram:16,tdp:180,length:280,pcie:"5.0"}],
["GeForce RTX 5070 12GB","NVIDIA",18990000,14,88,{vram:12,tdp:250,length:304,pcie:"5.0"}],
["GeForce RTX 5080 16GB","NVIDIA",35990000,6,99,{vram:16,tdp:360,length:330,pcie:"5.0"}],
["Radeon RX 6600 8GB","AMD",5490000,18,52,{vram:8,tdp:132,length:269,pcie:"4.0"}],
["Radeon RX 6650 XT 8GB","AMD",6490000,14,58,{vram:8,tdp:176,length:269,pcie:"4.0"}],
["Radeon RX 6700 XT 12GB","AMD",8490000,12,66,{vram:12,tdp:230,length:267,pcie:"4.0"}],
["Radeon RX 7600 8GB","AMD",7290000,20,63,{vram:8,tdp:165,length:240,pcie:"4.0"}],
["Radeon RX 7700 XT 12GB","AMD",11990000,14,76,{vram:12,tdp:245,length:267,pcie:"4.0"}],
["Radeon RX 7800 XT 16GB","AMD",14990000,12,83,{vram:16,tdp:263,length:280,pcie:"4.0"}],
["Radeon RX 7900 GRE 16GB","AMD",16990000,10,86,{vram:16,tdp:260,length:320,pcie:"4.0"}],
["Radeon RX 9070 XT 16GB","AMD",23990000,10,91,{vram:16,tdp:304,length:320,pcie:"5.0"}]
].forEach((x,i)=>add(x[0],"GPU",x[1],x[2],x[3],x[4],x[5],[2,5,7,10,12,17,19].includes(i)?1:0));

// Mainboard: 15 model, phu cac nen tang CPU hien co.
[
["ASUS Prime H610M-K D4","ASUS",1890000,20,55,{socket:"LGA1700",ram:"DDR4",form:"mATX",chipset:"H610",m2:"NVMe"}],
["Gigabyte H610M H V2 DDR4","Gigabyte",1790000,18,53,{socket:"LGA1700",ram:"DDR4",form:"mATX",chipset:"H610",m2:"NVMe"}],
["MSI PRO B660M-A DDR4","MSI",2890000,18,65,{socket:"LGA1700",ram:"DDR4",form:"mATX",chipset:"B660",m2:"NVMe"}],
["ASUS Prime B760M-A WiFi D4","ASUS",3490000,16,72,{socket:"LGA1700",ram:"DDR4",form:"mATX",chipset:"B760",m2:"NVMe"}],
["MSI MAG B760 Tomahawk WiFi DDR5","MSI",4890000,16,80,{socket:"LGA1700",ram:"DDR5",form:"ATX",chipset:"B760",m2:"NVMe"}],
["ASUS TUF Gaming Z790-Plus WiFi","ASUS",7490000,10,90,{socket:"LGA1700",ram:"DDR5",form:"ATX",chipset:"Z790",m2:"NVMe"}],
["ASUS Prime B450M-A II","ASUS",1690000,16,52,{socket:"AM4",ram:"DDR4",form:"mATX",chipset:"B450",m2:"NVMe"}],
["MSI B450M Mortar Max","MSI",1890000,12,56,{socket:"AM4",ram:"DDR4",form:"mATX",chipset:"B450",m2:"NVMe"}],
["MSI MAG B550 Tomahawk","MSI",3490000,18,72,{socket:"AM4",ram:"DDR4",form:"ATX",chipset:"B550",m2:"NVMe"}],
["ASUS TUF Gaming X570-Plus WiFi","ASUS",4990000,10,82,{socket:"AM4",ram:"DDR4",form:"ATX",chipset:"X570",m2:"NVMe"}],
["ASUS Prime A620M-K","ASUS",2390000,20,62,{socket:"AM5",ram:"DDR5",form:"mATX",chipset:"A620",m2:"NVMe"}],
["MSI PRO B650M-B","MSI",2990000,18,68,{socket:"AM5",ram:"DDR5",form:"mATX",chipset:"B650",m2:"NVMe"}],
["Gigabyte B650 Aorus Elite AX","Gigabyte",5790000,15,84,{socket:"AM5",ram:"DDR5",form:"ATX",chipset:"B650",m2:"NVMe"}],
["ASUS TUF Gaming X670E-Plus WiFi","ASUS",7990000,9,92,{socket:"AM5",ram:"DDR5",form:"ATX",chipset:"X670E",m2:"NVMe"}],
["MSI MAG X870 Tomahawk WiFi","MSI",8990000,8,95,{socket:"AM5",ram:"DDR5",form:"ATX",chipset:"X870",m2:"NVMe"}]
].forEach((x,i)=>add(x[0],"Mainboard",x[1],x[2],x[3],x[4],x[5],[0,4,8,12,14].includes(i)?1:0));

// RAM: tap trung 8 / 16 / 32 / 64GB va ca DDR4 / DDR5.
[
["Kingston Fury Beast 8GB DDR4 3200","Kingston",590000,34,45,{type:"DDR4",capacity:8,speed:3200}],
["Corsair Vengeance LPX 8GB DDR4 3200","Corsair",650000,30,46,{type:"DDR4",capacity:8,speed:3200}],
["Kingston Fury Beast 16GB DDR4 3200","Kingston",990000,30,55,{type:"DDR4",capacity:16,speed:3200}],
["Corsair Vengeance LPX 16GB DDR4 3200","Corsair",1090000,28,57,{type:"DDR4",capacity:16,speed:3200}],
["G.Skill Ripjaws V 32GB DDR4 3600","G.Skill",1790000,24,68,{type:"DDR4",capacity:32,speed:3600}],
["Kingston Fury Beast 64GB DDR4 3200","Kingston",3290000,12,78,{type:"DDR4",capacity:64,speed:3200}],
["Kingston Fury Beast 8GB DDR5 5200","Kingston",790000,28,53,{type:"DDR5",capacity:8,speed:5200}],
["Kingston Fury Beast 16GB DDR5 5200","Kingston",1390000,30,65,{type:"DDR5",capacity:16,speed:5200}],
["Corsair Vengeance 16GB DDR5 6000","Corsair",1690000,24,71,{type:"DDR5",capacity:16,speed:6000}],
["Corsair Vengeance 32GB DDR5 5600","Corsair",2490000,24,76,{type:"DDR5",capacity:32,speed:5600}],
["G.Skill Trident Z5 Neo 32GB DDR5 6000","G.Skill",3290000,16,86,{type:"DDR5",capacity:32,speed:6000}],
["Corsair Vengeance 64GB DDR5 6000","Corsair",5290000,10,94,{type:"DDR5",capacity:64,speed:6000}]
].forEach((x,i)=>add(x[0],"RAM",x[1],x[2],x[3],x[4],x[5],[2,4,7,10,11].includes(i)?1:0));

// SSD: chi giu du cac muc SATA / NVMe va dung luong pho bien.
[
["Crucial BX500 500GB","Crucial",890000,30,50,{type:"SATA",capacity:500,read:540,pcie:"SATA"}],
["Samsung 870 EVO 1TB","Samsung",1890000,20,62,{type:"SATA",capacity:1000,read:560,pcie:"SATA"}],
["WD Blue SN570 500GB","Western Digital",1090000,25,60,{type:"NVMe",capacity:500,read:3500,pcie:"3.0"}],
["Kingston NV2 1TB","Kingston",1490000,28,68,{type:"NVMe",capacity:1000,read:3500,pcie:"4.0"}],
["WD Black SN770 1TB","Western Digital",1990000,22,77,{type:"NVMe",capacity:1000,read:5150,pcie:"4.0"}],
["Samsung 990 Pro 1TB","Samsung",2990000,20,90,{type:"NVMe",capacity:1000,read:7450,pcie:"4.0"}],
["WD Black SN850X 2TB","Western Digital",4290000,14,92,{type:"NVMe",capacity:2000,read:7300,pcie:"4.0"}]
].forEach((x,i)=>add(x[0],"SSD",x[1],x[2],x[3],x[4],x[5],i>=5?1:0));

// PSU: du cac moc cong suat de powerService canh bao / de xuat.
[
["Cooler Master MWE 550 Bronze V2","Cooler Master",1290000,22,55,{power:550,rating:"80 Plus Bronze"}],
["Corsair CX650","Corsair",1690000,20,62,{power:650,rating:"80 Plus Bronze"}],
["Cooler Master MWE Gold 750 V2","Cooler Master",2390000,18,75,{power:750,rating:"80 Plus Gold"}],
["MSI MAG A850GL PCIE5","MSI",2990000,15,84,{power:850,rating:"80 Plus Gold"}],
["Seasonic Focus GX-1000","Seasonic",4490000,10,92,{power:1000,rating:"80 Plus Gold"}],
["be quiet! Straight Power 12 1200W","be quiet!",6990000,6,99,{power:1200,rating:"80 Plus Platinum"}]
].forEach((x,i)=>add(x[0],"PSU",x[1],x[2],x[3],x[4],x[5],i>=3?1:0));

// Case: giu du mATX / ATX va nhieu muc gioi han GPU / cooler.
[
["DeepCool Matrexx 40 3FS","DeepCool",1090000,18,55,{forms:["mATX","Mini-ITX"],maxGpuLength:320,maxCoolerHeight:165,radiator:"280mm"}],
["Montech Air 100 ARGB","Montech",1390000,18,62,{forms:["mATX","Mini-ITX"],maxGpuLength:330,maxCoolerHeight:161,radiator:"280mm"}],
["NZXT H5 Flow","NZXT",2190000,16,72,{forms:["ATX","mATX","Mini-ITX"],maxGpuLength:365,maxCoolerHeight:165,radiator:"280mm"}],
["Corsair 4000D Airflow","Corsair",2290000,16,75,{forms:["ATX","mATX","Mini-ITX"],maxGpuLength:360,maxCoolerHeight:170,radiator:"360mm"}],
["Lian Li Lancool 216","Lian Li",2490000,14,80,{forms:["E-ATX","ATX","mATX","Mini-ITX"],maxGpuLength:392,maxCoolerHeight:180,radiator:"360mm"}],
["NZXT H7 Flow","NZXT",3290000,10,86,{forms:["E-ATX","ATX","mATX","Mini-ITX"],maxGpuLength:400,maxCoolerHeight:185,radiator:"360mm"}]
].forEach((x,i)=>add(x[0],"Case",x[1],x[2],x[3],x[4],x[5],i>=4?1:0));

// Cooler: chi can du Air / AIO cho cac socket dang su dung.
[
["DeepCool AG400","DeepCool",690000,25,58,{type:"Air",sockets:["LGA1700","AM4","AM5"],height:150,coolingCapacity:180}],
["Cooler Master Hyper 212 Halo","Cooler Master",1090000,20,65,{type:"Air",sockets:["LGA1700","AM4","AM5"],height:154,coolingCapacity:190}],
["Thermalright Peerless Assassin 120 SE","Thermalright",1390000,18,78,{type:"Air",sockets:["LGA1700","AM4","AM5"],height:155,coolingCapacity:240}],
["DeepCool AK620","DeepCool",1790000,16,82,{type:"Air",sockets:["LGA1700","AM4","AM5"],height:160,coolingCapacity:260}],
["Arctic Liquid Freezer III 240","Arctic",2590000,12,86,{type:"AIO",sockets:["LGA1700","AM4","AM5"],radiatorSize:240,coolingCapacity:300}],
["Arctic Liquid Freezer III 360","Arctic",3490000,10,94,{type:"AIO",sockets:["LGA1700","AM4","AM5"],radiatorSize:360,coolingCapacity:350}]
].forEach((x,i)=>add(x[0],"Cooler",x[1],x[2],x[3],x[4],x[5],i>=4?1:0));

const image={CPU:"/uploads/cpu.svg",GPU:"/uploads/gpu.svg",Mainboard:"/uploads/mainboard.svg",RAM:"/uploads/ram.svg",SSD:"/uploads/ssd.svg",PSU:"/uploads/psu.svg",Case:"/uploads/case.svg",Cooler:"/uploads/cooler.svg"};

module.exports={products:P.map((p,i)=>({...p,id:i+1,image:image[p.category]})),image};
