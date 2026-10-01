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
    hint.innerHTML='Mainboard đã được cố định vào Case. Bước tiếp theo sẽ là <strong>lắp CPU</strong> ở S7.3.';
  });
})();