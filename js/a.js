var inputEq=document.querySelector(".inputEq");
var inputval=document.querySelector(".input");
var Hist=document.querySelector(".history-div");
ans=[];
eq1=[];


function setVal(val){
    if(inputval.value==0)
        inputval.value=val;
    else
    inputval.value+=val
}

function getAns(){
    
   eq=inputval.value+"="
   eq1.push(eq);
   ans.push(eval(inputval.value));
  // console.log(eq1+" "+ans);
    inputEq.value=inputval.value;
    inputval.value=eval(inputval.value);
  
}
function clearVal(){
    inputEq.value="";
    inputval.value=0;
    
}
function backVal(){
    var str=inputval.value;
    if((str.length-1)>0){
        str=str.substr(0,str.length-1);
              inputval.value=str;
           }
           else{
              inputval.value=0;
           }
}

function showHistory(){
   //Hist.style.visibility='visible';

    Hist.innerHTML="";
    for(let i=0;i<ans.length;i++)
    {
   Hist.innerHTML+="<span>"+eq1[i]+" "+ans[i]+"</span><br>"
    }
}
removeVal=() =>{
    var status=confirm("you want to delete history?");
    if(status)
     {
    Hist.innerHTML=""; 
    ans=[];
    eq1=[];
     }
}