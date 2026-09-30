function pushIssue(list,level,code,message){list.push({level,code,message});}
function analyze(parts={}){const issues=[];const{CPU:cpu,Mainboard:board,RAM:ram,GPU:gpu,Case:pcCase,Cooler:cooler,SSD:ssd}=parts;
if(cpu&&board&&cpu.specs.socket!==board.specs.socket)pushIssue(issues,"error","CPU_SOCKET",`CPU dùng socket ${cpu.specs.socket} nhưng mainboard dùng ${board.specs.socket}.`);
if(ram&&board&&ram.specs.type!==board.specs.ram)pushIssue(issues,"error","RAM_TYPE",`RAM ${ram.specs.type} không tương thích mainboard ${board.specs.ram}.`);
if(gpu&&pcCase&&Number(gpu.specs.length||0)>Number(pcCase.specs.maxGpuLength||0))pushIssue(issues,"error","GPU_CASE",`GPU dài ${gpu.specs.length}mm vượt giới hạn case ${pcCase.specs.maxGpuLength}mm.`);
if(board&&pcCase){const s=Array.isArray(pcCase.specs.forms)?pcCase.specs.forms:[];if(s.length&&!s.includes(board.specs.form))pushIssue(issues,"error","BOARD_CASE",`Case không hỗ trợ mainboard chuẩn ${board.specs.form}.`);}
if(cooler&&cpu){const s=Array.isArray(cooler.specs.sockets)?cooler.specs.sockets:[];if(s.length&&!s.includes(cpu.specs.socket))pushIssue(issues,"error","COOLER_SOCKET",`Tản nhiệt không hỗ trợ socket ${cpu.specs.socket}.`);}
if(cooler&&pcCase&&cooler.specs.height&&Number(cooler.specs.height)>Number(pcCase.specs.maxCoolerHeight||0))pushIssue(issues,"error","COOLER_CASE",`Tản nhiệt cao ${cooler.specs.height}mm vượt giới hạn case ${pcCase.specs.maxCoolerHeight}mm.`);
if(cooler&&pcCase&&cooler.specs.radiatorSize){const size=Number(String(pcCase.specs.radiator||"0").replace(/\D/g,""));if(Number(cooler.specs.radiatorSize)>size)pushIssue(issues,"error","AIO_CASE",`Radiator ${cooler.specs.radiatorSize}mm lớn hơn mức case hỗ trợ ${pcCase.specs.radiator}.`);}
if(ssd&&board&&ssd.specs.type==="NVMe"&&board.specs.m2!=="NVMe")pushIssue(issues,"error","SSD_BOARD","SSD NVMe cần mainboard có khe M.2 NVMe.");
if(!issues.length)pushIssue(issues,"success","OK","Các linh kiện đã chọn tương thích ở các tiêu chí cơ bản.");return{valid:!issues.some(x=>x.level==="error"),issues};}
module.exports={analyze};
