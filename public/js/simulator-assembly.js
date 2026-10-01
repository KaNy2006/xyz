(()=>{
  const startBtn=document.getElementById("startAssemblyBtn");
  const installBtn=document.getElementById("installMainboardBtn");
  const zone=document.getElementById("mainboardZone");
  const placeholder=document.getElementById("mainboardPlaceholder");
  const installed=document.getElementById("installedMainboard");
  const status=document.getElementById("assemblyStatus");
  const current=document.getElementById("assemblyCurrentStep");
  const hint=document.getElementById("assemblyHintText");
  const step=document.querySelector('.sim2d-progress-item[data-step-index="0"]');
  const part=document.querySelector('.sim2d-part[data-part="Mainboard"]');
  const cpuBtn=document.getElementById("installCpuBtn");
  const cpuSocket=document.getElementById("cpuSocket");
  const installedCpu=document.getElementById("installedCpu");
  const cpuStep=document.querySelector('.sim2d-progress-item[data-step-index="1"]');
  const cpuPart=document.querySelector('.sim2d-part[data-part="CPU"]');

  if(!startBtn||!installBtn||!zone||!status||!current||!hint)return;

  startBtn.addEventListener("click",()=>{
    startBtn.disabled=true;
    installBtn.hidden=false;
    zone.classList.add("is-active");
    step?.classList.add("is-active");
    part?.classList.add("is-active");
    status.textContent="Đang lắp";
    status.classList.add("is-active");
    current.textContent="Bước hiện tại: Lắp Mainboard";
    hint.innerHTML='Đặt <strong>Mainboard</strong> vào vùng được đánh dấu trong Case, sau đó bấm <strong>Lắp Mainboard</strong>.';
  });

  installBtn.addEventListener("click",()=>{
    installBtn.hidden=true;
    if(placeholder)placeholder.hidden=true;
    if(installed)installed.hidden=false;
    zone.classList.remove("is-active");
    zone.classList.add("is-done");
    step?.classList.remove("is-active");
    step?.classList.add("is-done");
    part?.classList.remove("is-active");
    status.textContent="Bước 1 hoàn tất";
    status.classList.remove("is-active");
    status.classList.add("is-done");
    current.textContent="Bước hiện tại: Mainboard đã lắp";
    if(cpuBtn)cpuBtn.hidden=false;
    cpuSocket?.classList.add("is-active");
    cpuStep?.classList.add("is-active");
    cpuPart?.classList.add("is-active");
    status.textContent="Đang lắp CPU";
    status.classList.remove("is-done");
    status.classList.add("is-active");
    current.textContent="Bước hiện tại: Lắp CPU";
    hint.innerHTML='Mainboard đã cố định. Đặt <strong>CPU</strong> vào đúng socket trên Mainboard rồi bấm <strong>Lắp CPU</strong>.';
  });

  cpuBtn?.addEventListener("click",()=>{
    cpuBtn.hidden=true;
    if(installedCpu)installedCpu.hidden=false;
    cpuSocket?.classList.remove("is-active");
    cpuSocket?.classList.add("is-done");
    cpuStep?.classList.remove("is-active");
    cpuStep?.classList.add("is-done");
    cpuPart?.classList.remove("is-active");
    status.textContent="Bước 2 hoàn tất";
    status.classList.remove("is-active");
    status.classList.add("is-done");
    current.textContent="Bước hiện tại: CPU đã lắp";
    hint.innerHTML='CPU đã được đặt đúng socket. Bước tiếp theo sẽ là <strong>lắp RAM</strong> ở S7.4.';
  });
})();