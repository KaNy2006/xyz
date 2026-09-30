function analyze(parts={},workload="gaming1440"){
  const cpu=Number(parts.CPU?.performance||0),gpu=Number(parts.GPU?.performance||0);
  const ramGB=Number(parts.RAM?.specs?.capacity||0);
  const results=[];
  if(cpu&&gpu){
    const diff=cpu-gpu;
    const threshold=workload==="gaming1080"?10:workload==="gaming4k"?18:14;
    if(diff<=-threshold)results.push({level:Math.abs(diff)>=25?"high":"medium",target:"CPU",message:`CPU thấp hơn GPU ${Math.abs(diff)} điểm; có thể giới hạn GPU trong một số tác vụ.`});
    else if(diff>=threshold)results.push({level:Math.abs(diff)>=25?"high":"medium",target:"GPU",message:`GPU thấp hơn CPU ${Math.abs(diff)} điểm; nâng GPU sẽ cải thiện gaming rõ hơn.`});
    else results.push({level:"good",target:"CPU/GPU",message:"CPU và GPU đang ở mức tương đối cân bằng."});
  }
  if(ramGB&&ramGB<16)results.push({level:"high",target:"RAM",message:"Dung lượng RAM dưới 16GB có thể gây thiếu bộ nhớ trong game và đa nhiệm."});
  else if(ramGB===16)results.push({level:"light",target:"RAM",message:"16GB vẫn dùng tốt, nhưng 32GB là hướng nâng cấp hợp lý cho game và đa nhiệm mới."});
  return{results,hasProblem:results.some(r=>["medium","high"].includes(r.level))};
}
module.exports={analyze};