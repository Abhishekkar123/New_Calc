
var game=true;
var rule=[1,0,1,0,1,0,0,1,0];
var p1,p2;
var p_1Count=p_2Count=0
document.querySelector(".cont").addEventListener("click",function(e1){
var i =e1.target.id;

     if(rule[i]==1||rule[i]==0)
       {
         if(game)
         {
    	    rule[i]=e1.target.innerText="X";
         }
         else
         {
    	  rule[i]=e1.target.innerText="O";
         }
     console.log(rule)
       getGameValue();
        game=!game;
    

     }
     else{

      }
})


  function getGameValue()
  {
     if(rule[0]==rule[1] &&rule[1]==rule[2] || rule[3]==rule[4] &&rule[4]==rule[5] || rule[6]==rule[7] &&rule[7]==rule[8] )
      {//row condition check i.e 1 2 3 4 5 6 7 8 9=>length not index
          // console.log(" row winner");
          getScore();

       }
     else if(rule[0]==rule[3] && rule[3]==rule[6] ||rule[1]==rule[4] && rule[4]==rule[7]||rule[2]==rule[5]&&rule[5]==rule[8])
       {//column condition check i.e 1 4 6 2 5 8 3 6 9=>length not index
             //     console.log("column winner");
             getScore();

       }
    else if(rule[0]==rule[4] && rule[4]==rule[8] ||rule[2]==rule[4] &&rule[4]==rule[6])
        {//diagonal condition check i.e 1 5 9  3 5 7=>length not index
        //  console.log(" diagonal winner");
        getScore();

        }
    // else{//if all three possible is not valid than we can do tie or start the game
    //             console.log("tie");
    // }
  }
  function getScore()
  {
    if(game)
    {
    	console.log(p1,"winner");
    	p_1Count++;
    	
    }
    else
    {
           console.log(p2,"winner");
           p_2Count++;

    }
document.querySelector("#score1").innerHTML="<strong>"+ p_1Count+ "</strong>";
  document.querySelector("#score2").innerHTML="<strong>"+ p_2Count+ "</strong>";
  }

  


  document.querySelector("#start").addEventListener('click',function()
  {
  	p1=document.querySelector("#user1").value;
  	p2=document.querySelector("#user2").value;
  	if(p1==""||p2=="")
  	{
  		alert("good Bye!");
  	}
  	else
  	{
  		document.querySelector(".gameDiv").style.visibility='visible';
         document.querySelector(".form").style.visibility='hidden';

          document.querySelector("#name1").innerHTML="<strong>"+p1+"</strong>";
          document.querySelector("#name2").innerHTML="<strong>"+p2+"</strong>";
  	}
  })

      document.querySelector("#reset").addEventListener('click',()=>
      {
  	   var divs=document.querySelectorAll(".d");
  	 for(let i=0;i<divs.length;i++)
  	  {
  		divs[i].innerHTML="";
  	 }
  	 flag=true;
  	 rule=[1,0,1,0,1,0,0,1,0];

  })
