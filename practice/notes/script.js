let dos= document.getElementsByClassName("create")[0];
console.log(dos);

const func=()=>{

let s=document.createElement("div");
s.classList.add("nes");

let tx=document.createElement("textarea");
tx.cols=30
tx.rows=10;
tx.classList.add("ch");

s.appendChild(tx);

let btn=document.createElement("button");
btn.classList.add("bottomleft");
btn.innerText="delete";

s.appendChild(btn);


let mas=document.getElementsByClassName("rice")[0];
mas.appendChild(s);

func2();
}

dos.addEventListener("click",func);

const func2=()=>{
let sd=document.getElementsByClassName("nes");
sd=Array.from(sd);

sd.forEach(
(e)=>{
let del= e.getElementsByClassName("bottomleft")[0];
del.addEventListener("click",()=>{
e.remove();

}
)
}
)


};


