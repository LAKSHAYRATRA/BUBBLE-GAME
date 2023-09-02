var some=0;
var check;
var initialscore=0;
document.querySelector("#score1").textContent=initialscore;
function makebubble(){
    var clutter="";
for(var i=0;i<=63;i++){
    var number=Math.floor(Math.random()*10);
    clutter+=`<div class="bubb">${number}</div>`;
}
document.querySelector("#bottom").innerHTML=clutter;
}
makebubble();
var time=60;
function changetimer(){
    document.querySelector("#timer1").textContent=time;
    time--;
    if(time<0){
        clearInterval(timerrr);
        document.getElementById('bottom').style.display="flex";
        document.getElementById('bottom').style.justifyContent="center";
        document.getElementById('bottom').style.alignItems="center";
        document.getElementById('bottom').style.fontWeight="700";
        document.getElementById('bottom').style.fontSize="15vh";
        document.querySelector("#bottom").textContent="GAME OVER";
}
}
{
var timerrr=setInterval(changetimer, 1000);
}
function changehit(){
    some=Math.floor(Math.random()*10);
    document.querySelector("#hit1").textContent=some;
}
changehit();
function changescore(){
    initialscore+=10;
    document.querySelector("#score1").textContent=initialscore;
}
document.querySelector("#bottom").addEventListener("click",function(decs){
    check=Number(decs.target.textContent);
    if(check==some){
        changescore();
        changehit();
        makebubble();
    }
    else if(check!=some){
        clearInterval(timerrr);
    document.getElementById('bottom').style.display="flex";
        document.getElementById('bottom').style.justifyContent="center";
        document.getElementById('bottom').style.alignItems="center";
        document.getElementById('bottom').style.fontWeight="700";
        document.getElementById('bottom').style.fontSize="15vh";
        document.querySelector("#bottom").textContent="GAME OVER";
}
});
// if(check==some){
//     alert("chal raha hai");
//     changescore();
//     changehit();
//     makebubble();
// }
// else if(check!=some){
//     document.getElementById('bottom').style.display="flex";
//         document.getElementById('bottom').style.justifyContent="center";
//         document.getElementById('bottom').style.alignItems="center";
//         document.getElementById('bottom').style.fontWeight="700";
//         document.getElementById('bottom').style.fontSize="15vh";
//         document.querySelector("#bottom").textContent="GAME OVER";
// }
