document.addEventListener('DOMContentLoaded',()=>{
  const person = {
    cr: "Current Score",
    img_src:"../images/other/head.png"
  };
  document.getElementById("head").src = person.img_src;
  document.getElementById("curnscore").innerHTML = person.cr;
  document.getElementById('restart').style.display="none";
})
