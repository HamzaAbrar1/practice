let d=document.getElementsByClassName('buttoncont')[0];
console.log(d);
// addEventListener("")
d.addEventListener("click",()=>{

let val=document.getElementById('mytext');

let d1= document.createElement("div");
d1.classList.add('showbar');



let d2= document.createElement("div");
d2.classList.add('done');
d2.innerText="done";

let d3= document.createElement("div");
d3.classList.add('content');
d3.innerText=val.value;


let d4= document.createElement("div");
d4.classList.add('done1');
d4.innerText="remove";

d1.appendChild(d2);
d1.appendChild(d3);
d1.appendChild(d4);


let sd=document.getElementsByClassName("maincontent")[0];
sd.appendChild(d1);
meth();
// console.log(sd);

})

function  meth(){

let sd1=document.getElementsByClassName("showbar");
sd1=Array.from(sd1);

console.log(sd1);
sd1.forEach(

(
    e
)=>{


 let qw= e.getElementsByClassName("done")[0];
 let qw1= e.getElementsByClassName("done1")[0];
 let text=e.getElementsByClassName("content")[0];
qw.addEventListener("click",()=>{
    text.style.textDecoration = 'line-through';
})

qw1.addEventListener("click",()=>{
e.remove();

})

}
)

};