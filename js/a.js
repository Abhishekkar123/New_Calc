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
    
   eq= inputval.value +"=";
   eq1.push(eq);
   ans.push(eval(inputval.value));
  // console.log(eq1+" "+ans);
    inputEq.value=eq;
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
var hide=true;
function showHistory(){
   //Hist.style.visibility='visible';
  if(hide){
    document.querySelector(".button").style.display='block';
  }else{
      document.querySelector(".button").style.display='none';

  }
  hide=!hide;
    Hist.innerHTML="";
    for(let i=0;i<ans.length;i++)
    {
   Hist.innerHTML+="<div>"+eq1[i]+" "+ans[i]+"</div><br>"
    }

}
function removeVal(){
    var status=confirm("you want to delete history?");
    if(status)
     {
    Hist.innerHTML=""; 
    ans=[];
    eq1=[];
     }

}