
//on click of next button
var repeat =0;
var a=[];
var surfaceroughnessarray=[];
var d,p,n,b,q,flag=0;
var values = [[0.5,21.94,24.43],[0.4,18.18,20.67],[0.3,14.42,16.91],[0.2,10.66,13.15],[0.1,6.9,9.38]]

p1="";
p2="";
p3="";
p4="";
p5="";
p6="";
p7="";
var i=0;
var x1=1.5;
var x2=0.75;
var t = 6;
var z,sw,v;
var svg= document.getElementById('specimen');
var svgNS = "http://www.w3.org/2000/svg";

function navNext()
{
	console.log('next button pressed');
  for (temp = 0; temp <= 4 ; temp++)
  {
      document.getElementById('canvas'+temp).style.visibility="hidden";
  }
  document.getElementById('step-2').setAttribute('class','step');
  document.getElementById('specimen').setAttribute('class','svg');
 simsubscreennum+=1;
 document.getElementById('canvas'+(simsubscreennum)).style.visibility="visible";
 document.getElementById('nextButton').style.visibility="hidden";
 magic();
}
var ca;
var questions=["The number of layers can be calculated</br> as ratio of specimen height to",
				"What is the typical range of layer<br> height(in &#181m) used in FDM?",
				"Layer height should be _______ the nozzle diameter."];

var options2=[["Raster width","Layer height","Feed rate"],//Layer height
			  ["50-500","10-100","1-1000"],//50-500
			  ["More than","Less than","Same as"]];//Less than

function validateAnswer(qn,ans,left,top)
{
	 $("#answer").empty();
	document.getElementById("a").innerHTML="";
	document.getElementById("questDiv").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:"+left+";top:"+top+";";
	document.getElementById("q").innerHTML=questions[qn];
	console.log('questions[qn] is',questions[qn]);
	el = document.createElement("option");
	el.textContent = " ";
	el.value = " ";
	answer.appendChild(el);

	for(j=0;j<options2[qn].length;j++)
	{
		console.log('options[qn] is',options2[qn]);
		opt = options2[qn][j];
		console.log('options2[qn][j] is',options2[qn][j]);
		el = document.createElement("option");
		el.textContent = opt;
		el.value = opt;
		answer.appendChild(el);
		$("#answer").change(function()
		{
			ca=$(this).children("option:selected").val();
			if(options2[qn][ans]==ca)
			{
				document.getElementById("a").innerHTML="Correct Answer!";
			}
			else
			{
				document.getElementById("a").innerHTML="Wrong! Answer is "+options2[qn][ans];
			}
			setTimeout(function()
			{
				document.getElementById("questDiv").style.visibility="hidden";
				if (repeat==1 || repeat==3 || repeat==4) {
					document.getElementById('nextButton').style.visibility="visible";
				}
			},1500);
		});
	}
}

for ( i = 0; i < 15; i=i+2) {
    if (((i+2)*2.75)<42.5) {
        p1 += "h2.75 l"+(i+1)*-2.75+" "+(i+1)*-2.75+ "v-2.75 l"+(i+2)*2.75+" "+(i+2)*2.75+"";
        p4 += "h2.75 l"+(i+1)*-2.75+" "+(i+1)*2.75+ "v2.75 l"+(i+2)*2.75+" "+(i+2)*-2.75+"";
    } else {
        p1 += "h2.75 l"+(i+1)*-2.75+" "+(i+1)*-2.75+"v-1.25";
        p4 += "h2.75 l"+(i+1)*-2.75+" "+(i+1)*2.75+"v1.25";
    }
}

for (j = 0; j < 64; j++) {
    if (j<63) {
        p2+="h"+x1+" l42.5 42.5 h2.75 l-42.5 -42.5";
        p5+="h"+x1+" l42.5 -42.5 h2.75 l-42.5 42.5";
        x1 =2.75;
    } else {
        p2+="h2.75 l42.5 42.5h2";
        p5+="h2.75 l42.5 -42.5h2";
    }
}

for ( k = 0; k < 16; k=k+2) {
    if (k<15) {
        p3 += "v-"+x2+" l"+(-(41.75-k*2.75))+" "+(-(41.75-k*2.75))+"h2.75 l"+(41.75-(k+1)*2.75)+" "+(41.75-(k+1)*2.75)+" ";
        p6 += "v"+x2+" l"+(-(41.75-k*2.75))+" "+(41.75-k*2.75)+"h2.75 l"+(41.75-(k+1)*2.75)+" "+(-(41.75-(k+1)*2.75))+" ";
        x2= 2.75;
    } else {
        p3 += "v-2.75l"+(-(41.75-k*2.75))+" "+(-(41.75-k*2.75))+" ";
        p6 += "v2.75l"+(-(41.75-k*2.75))+" "+(41.75-k*2.75)+" ";

    }
}

//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow()
{
   if (document.getElementById('arrow1').style.visibility=="hidden")
       document.getElementById('arrow1').style.visibility="visible";
   else
       document.getElementById('arrow1').style.visibility="hidden";
}

//stop blinking arrow
function myStopFunction()
{
console.log('mystopfunction is running');
clearInterval(myInt);
document.getElementById('arrow1').style.visibility="hidden";
}

//-------------------------------------function magic starts here----------------------------------------------------

function magic()
{

	if (simsubscreennum==1)
	{
		refresh2();
		refresh1();
		repeat+=1;
		if(flag==1)
		{
			console.log('flagis1');
		document.getElementById('canvas3').style.visibility="hidden";
		document.getElementById('probe2').style.visibility='hidden';
		document.getElementById('spec2').style.visibility='hidden';
		document.getElementById('arrow1').style.visibility='hidden';
		document.getElementById('nextButton').style.visibility="hidden";
		document.getElementById('can6-2').innerHTML="Layer height = " +values[repeat-1][0] +" mm";
		document.getElementById('lh').innerHTML= values[repeat-1][0];
		document.getElementById('can6-3').innerHTML="Infill density = " +100  +" %";
		document.getElementById('can6-4').innerHTML="Printing speed  = "+60  +" mm/s" ;
		document.getElementById('trial').style="visibility:visible;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
		document.getElementById('trial').innerHTML="Trial : " + repeat;
		document.getElementById("done").style.visibility= "hidden";
		document.getElementById("select").style.visibility= "hidden";
		if($("input[name='d']:checked").val()==0){	document.getElementById('can6-1').innerHTML="Material = ABS";		}
		if($("input[name='d']:checked").val()==1){	document.getElementById('can6-1').innerHTML="Material = PLA";		}
		document.getElementById('can6-1').style.visibility="visible";
		document.getElementById('nextButton').style.visibility="visible";
		}
	else{
		console.log('flagis0');
		document.getElementById('nextButton').style.visibility="hidden";
		document.getElementById('can6-2').innerHTML="Layer height = " +values[repeat-1][0] +" mm";
		document.getElementById('lh').innerHTML= values[repeat-1][0];
		document.getElementById('can6-3').innerHTML="Infill density = " +100 +" %";
		document.getElementById('can6-4').innerHTML="Printing speed  = "+60  +" mm/s" ;
		document.getElementById('trial').style="visibility:visible;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
		document.getElementById('trial').innerHTML="Trial : " + repeat;

		document.getElementById("done").onclick=function()
		{
			//console.log("lh value is",document.getElementById("lh").value);
			//console.log("mat value is",$("input[name='d']:checked").val());
			if($("input[name='d']:checked").val()!=0 && $("input[name='d']:checked").val()!=1 )
			{
				alert("Select material to proceed")
			}
			else
			{
				document.getElementById('nextButton').style.visibility="visible";


			//	console.log("mat value is",d);

			}
		}
	}
}

	else if (simsubscreennum==2)
	{

		refresh1();
		refresh3();
		if (repeat==1) {
			document.getElementById('step-2').style.visibility="visible";
			document.getElementById('base').setAttribute('d',"m15 "+(272.5+((values[repeat-1][0])*2.5)+(0.5/2))+"h420v10h-420v-10")
			//console.log(document.getElementById('base').getAttribute('d'));
			document.getElementById('base').style.strokeWidth = 0.5;
			document.getElementById('base').setAttribute('class','draw');
			myInt = setInterval(animatearrow, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; right: 730px; bottom: 147.5px; height: 40px; z-index: 10;";
	   		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
	   		//Code for IE9
	   		document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
	   		// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(180deg)";
			const anim1 = document.getElementById('drawlayer6');
			anim1.addEventListener("animationend",()=>{
				document.getElementById('nextButton').style.visibility="visible";
				document.getElementById('step-2').setAttribute('class','step2');
				document.getElementById('specimen').setAttribute('class','svg2');
				})

		}

		if (repeat>1) {
		document.getElementById('step-2').setAttribute('class','step2');
		document.getElementById('specimen').setAttribute('class','svg2');
		document.getElementById('step-2').style.visibility="visible";
		console.log('repeat greater than 1');
		myInt = setInterval(animatearrow, 500);
		console.log(myInt);
		document.getElementById('arrow1').style="position:absolute; left: 25px; bottom: 130px; height: 40px; z-index: 500;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('step-2').onmouseover =function ()
		{
			console.log('onmouseover is running');
			myStopFunction();
		};
		document.getElementById('base').setAttribute('d',"m15 "+(272.5+((values[repeat-1][0])*2.5)+(0.5/2))+"h420v10h-420v-10")
		//console.log(document.getElementById('base').getAttribute('d'));
		document.getElementById('base').style.strokeWidth = 0.5;
		document.getElementById('base').setAttribute('class','draw');
		document.getElementById('base').style.zIndex=repeat;
		//console.log('lkayer is',document.getElementById('base'));
		layerrepeat(0,repeat);
		document.getElementById('nextButton').style.visibility="visible";
	}
	}
	else if (simsubscreennum==3)
	{
		refresh1();
		document.getElementById('nextButton').style.visibility="hidden";
		myInt = setInterval(animatearrow, 500);
		console.log('myint in step3',myInt);
		document.getElementById('arrow1').style="position:absolute; right: 640px; top: 240px; height: 40px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
		//Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('probe1').style.visibility='visible';
		document.getElementById('spec1').style.visibility='visible';
		document.getElementById('sr1').style.visibility='visible';
		document.getElementById('spec1').onclick=function() { spec(); };
		if(repeat < 5 && repeat>0)
		 {
			 flag=1;
			 simsubscreennum=0;
		 }
	}
	else if (simsubscreennum==4)
	{
		refresh1();
		document.getElementById('sr2').style.visibility="hidden";
		document.getElementById('dispres').style.visibility="hidden";
		document.getElementById('display').style.visibility = "hidden";
		document.getElementById('spec2').style.visibility='hidden';
		document.getElementById('probe1').style.visibility = "hidden";
		document.getElementById('probe2').style.visibility = "hidden";
		document.getElementById('dispres').style.visibility="hidden";
		document.getElementById('trial').style.visibility='hidden';
		document.getElementById('1-1').innerHTML=values[0][0];
		document.getElementById('2-1').innerHTML=values[1][0];
		document.getElementById('3-1').innerHTML=values[2][0];
		document.getElementById('4-1').innerHTML=values[3][0];
		document.getElementById('5-1').innerHTML=values[4][0];
		if ($("input[name='d']:checked").val()==1) {
			document.getElementById('1-2').innerHTML=values[0][1];
			document.getElementById('2-2').innerHTML=values[1][1];
			document.getElementById('3-2').innerHTML=values[2][1];
			document.getElementById('4-2').innerHTML=values[3][1];
			document.getElementById('5-2').innerHTML=values[4][1];

		}
		if($("input[name='d']:checked").val()==0) {
			document.getElementById('1-2').innerHTML=values[0][2];
			document.getElementById('2-2').innerHTML=values[1][2];
			document.getElementById('3-2').innerHTML=values[2][2];
			document.getElementById('4-2').innerHTML=values[3][2];
			document.getElementById('5-2').innerHTML=values[4][2];
		}

		document.getElementById('inferenceDiv').style.visibility='visible';


	}

}

function spec(){
	myStopFunction();
	console.log('spec is runningand myintis',myInt);
    document.getElementById('spec1').style.visibility = "hidden";
	document.getElementById('spec2').style="visibility:visible ;position: absolute; left: 205px; top: 365px; height:20px;width:100px; z-index: 10;";
	myInt = setInterval(animatearrow, 500);
	document.getElementById('arrow1').style="position:absolute; left: 540px; top: 240px; height: 40px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)";
		// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(360deg)";
		// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(360deg)";
	document.getElementById('display').onclick=function() { ani1(); };
  }



function ani1(){
	myStopFunction();
	console.log('down is runningand myint is',myInt);
	document.getElementById('display').style.animation = "display_down 3s normal linear forwards";
	document.getElementById('probe1').style.animation = "probe_down 3s normal linear forwards";
	setTimeout(function(){
		document.getElementById('probe1').style.visibility="hidden";
		document.getElementById('probe2').style.visibility = "visible";
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="position:absolute; left: 300px; top: 320px; height: 40px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)";
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(270deg)";
		document.getElementById('probe2').onclick=function() { ani2(); };
		}, 3000);

  }
  function ani2(){
	myStopFunction();
	console.log('right is running and myint is',myInt);
	document.getElementById('probe2').style.animation = "probe_right 3s linear 2 forwards alternate";
	setTimeout(function(){
		if ($("input[name='d']:checked").val()==1) {
			document.getElementById('dispres').innerHTML =""+(values[repeat-1][1])+" &#181m";
			document.getElementById('dispres').style.visibility="visible";
			document.getElementById('sr1').style.visibility="hidden";
			document.getElementById('sr2').innerHTML ="Surface Roughness of specimen = "+values[repeat-1][1]+" &#181m";
			document.getElementById('sr2').style.visibility="visible";
		}
		if($("input[name='d']:checked").val()==0) {
			document.getElementById('dispres').innerHTML =""+(values[repeat-1][2])+" &#181m";
			document.getElementById('dispres').style.visibility="visible";
			document.getElementById('sr1').style.visibility="hidden";
			document.getElementById('sr2').innerHTML ="Surface Roughness of specimen = "+values[repeat-1][2]+" &#181m";
			document.getElementById('sr2').style.visibility="visible";
		}
		if (repeat==1) {
			setTimeout(function()
				{
					validateAnswer(0,1,"50px","100px");
				},500);
		}
		else if (repeat==3) {
			setTimeout(function()
			{
				validateAnswer(1,0,"50px","100px");
			},500);
		}
		else if (repeat==4){
			setTimeout(function()
			{
				validateAnswer(2,1,"50px","100px");
			},500);
		}
		else {
			document.getElementById('nextButton').style.visibility="visible";
		}
		}, 6000);	  }

function refresh1()
{
	if (repeat>1) {
		myStopFunction();
	}
	document.getElementById('arrow1').style.visibility='hidden';
	document.getElementById('base').setAttribute('class','');
	document.getElementById('step-2').style.visibility="hidden";
    document.getElementById('drawlayer1').style.animation = "";
    document.getElementById('drawlayer2').style.animation = "";
	document.getElementById('drawlayer5').style.animation = "";
	document.getElementById('can6-1').style.visibility="hidden";

}

function refresh2()
{
	document.getElementById('dispres').style.visibility='hidden';
	document.getElementById('dispres').innerHTML="";
	document.getElementById('sr2').innerHTML = "Surface Roughness of specimen =";
	document.getElementById('sr2').style.visibility='hidden';
	document.getElementById('display').style.animation = "";
	document.getElementById('probe1').style.animation = "";
	document.getElementById('probe2').style.animation = "";
	document.getElementById("can6-2").innerHTML = "";
	//document.getElementById('output').value="";
}
function refresh3()
{
	if (repeat>1)
	{
		for (let index = 0; index < (Math.round(4/(values[repeat-2][0]))); index++)
		{
			console.log(Math.round(4/(values[repeat-2][0])));
			if (repeat>2)
			{
				document.getElementById("layerrepeat"+(index+1)+""+(repeat-1)+"").style.visibility="hidden";
			}
			else
			{
				document.getElementById("layer"+(index+1)+"").style.visibility="hidden";
			}
		}

	}

}

function checkInference()
{
	document.getElementById("ans").style.visibility="visible";
	if($("input[name='inf']:checked").val()==1)
	{
		document.getElementById("ans").innerHTML="Correct answer!";
	}
	else
	{
		document.getElementById("ans").innerHTML="Wrong! Surface roughness increases with increase in layer height";
	}

	setTimeout(function()
	{
		document.getElementById("inference").style.visibility="hidden";
		document.getElementById("infAns").innerHTML="The smaller the layer height, the finer the layers will be. This leads to smoother surfaces, reducing the surface roughness.";
		$("#infAns").fadeIn(750);
	},1500);
}
