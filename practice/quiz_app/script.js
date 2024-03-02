let quest=[

{
question:"who is gandu",
answers:[
{
    answer:"hommod", valid:true
},
{
    answer:"sheikhupuri", valid:true
},
{
    answer:"Anda", valid:true
},
{
    answer:"Roll no: 85", valid:true
}
]
}
,
{
    question:"who is bonda",
    answers:[
    {
        answer:"hommod", valid:true
    },
    {
        answer:"sheikhupuri", valid:true
    },
    {
        answer:"Anda", valid:true
    },
    {
        answer:"Roll no: 85", valid:true
    }
    ]
    }
    ,

    {
        question:"who is Sheikh",
        answers:[
        {
            answer:"hommod", valid:false
        },
        {
            answer:"sheikhupuri", valid:false
        },
        {
            answer:"Anda", valid:false
        },
        {
            answer:"Farooq", valid:true
        }
        ]
        }
]
var j = 0;
let k=0;
function inde() {
    j++;
    return j;
}

function ks(){
    k++;
    return k;
}
let but = document.getElementsByClassName("submit")[0];

but.addEventListener("click", () => {
    inde();
    ks(); // Increment j when the button is clicked
    console.log(j); // Log the updated value of j to the console

    if(k<quest.length){
    let val = document.getElementsByClassName("ques")[0];
    val.textContent = quest[j].question;

    let ans = document.getElementsByClassName("answer");
    ans = Array.from(ans);

    ans.forEach((e, i) => {
        e.textContent = quest[j].answers[i].answer;
        e.style.backgroundColor = ""; // Reset background color
    }
    );
    }


});

let val=document.getElementsByClassName("ques")[0]
val.textContent=quest[j].question

let ans=document.getElementsByClassName("answer");

ans=Array.from(ans);

ans.forEach(
    (e,i)=>{
e.textContent=quest[j].answers[i].answer;
 }
)

ans.forEach(
(e,i)=>{
e.addEventListener("click"
,()=>{
if(quest[j].answers[i].valid==true){
    e.style.backgroundColor="green";
}
else{
    e.style.backgroundColor="red";
}
}
)
}
)




// console.log(val);