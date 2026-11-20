var lg="" ; 
var s="";var i;

function log(){

lg +="<table border=1 style='border-collapse: collapse;font-size:10px'>"
for(j=0;j<10;j++){
lg +=""

}for(j=1;j<10;j++){
//lg +="<th bgcolor='pink'>"+j+"</th>"

}
lg +="</tr>";
for(i=10;i<100;i++){

var a =(Math.log(i+'0')/Math.log(10)).toFixed(4).substring(2,7);
var b =(Math.log(i+'1')/Math.log(10)).toFixed(4).substring(2,7);
var c =(Math.log(i+'2')/Math.log(10)).toFixed(4).substring(2,7);
var d =(Math.log(i+'3')/Math.log(10)).toFixed(4).substring(2,7);
var e =(Math.log(i+'4')/Math.log(10)).toFixed(4).substring(2,7);
var f =(Math.log(i+'5')/Math.log(10)).toFixed(4).substring(2,7);
var g =(Math.log(i+'6')/Math.log(10)).toFixed(4).substring(2,7);
var h =(Math.log(i+'7')/Math.log(10)).toFixed(4).substring(2,7);
var l =(Math.log(i+'8')/Math.log(10)).toFixed(4).substring(2,7);
var m =(Math.log(i+'9')/Math.log(10)).toFixed(4).substring(2,7);


var aa =(Math.log(i+'0'+'1')/Math.log(10)).toFixed(4).substring(2,7);
var bb =(Math.log(i+'1'+'2')/Math.log(10)).toFixed(4).substring(2,7);
var cc =(Math.log(i+'2'+'3')/Math.log(10)).toFixed(4).substring(2,7);
var dd =(Math.log(i+'3'+'4')/Math.log(10)).toFixed(4).substring(2,7);
var ee =(Math.log(i+'4'+'5')/Math.log(10)).toFixed(4).substring(2,7);
var ff =(Math.log(i+'5'+'6')/Math.log(10)).toFixed(4).substring(2,7);
var gg =(Math.log(i+'6'+'7')/Math.log(10)).toFixed(4).substring(2,7);
var hh =(Math.log(i+'7'+'8')/Math.log(10)).toFixed(4).substring(2,7);
var ll =(Math.log(i+'8'+'9')/Math.log(10)).toFixed(4).substring(2,7);

var aaa=aa-a;
var bbb=bb-b;
var ccc=cc-c;
var ddd=dd-d;
var eee=ee-e;
var fff=ff-f;
var ggg=gg-g;
var hhh=hh-h;
var lll=ll-l;
lg +="<tr id='r"+i+"'><th onclick='test(this)' style='cursor:pointer'>"+i+"</th><td id='coa"+i+"'>"+a+"</td><td id='cob"+i+"'>"+b+"</td><td id='coc"+i+"'>"+c+"</td><td id='cod"+i+"'>"+d+"</td><td id='coe"+i+"'>"+e+"</td><td id='cof"+i+"'>"+f+"</td><td id='cog"+i+"'>"+g+"</td><td id='coh"+i+"'>"+h+"</td><td id='col"+i+"'>"+l+"</td><td id='com"+i+"'>"+m+"</td><td bgcolor='pink'>"+aaa+"</td><td bgcolor='pink'>"+bbb+"</td><td bgcolor='pink'>"+ccc+"</td><td bgcolor='pink'>"+ddd+"</td><td bgcolor='pink'>"+eee+"</td><td bgcolor='pink'>"+fff+"</td><td bgcolor='pink'>"+ggg+"</td><td bgcolor='pink'>"+hhh+"</td><td bgcolor='pink'>"+lll+"</td></tr>"
}

lg +="</table>";

box.innerHTML=lg;
}

function cls(){
var trall1,trall2,trall3,trall4,trall5,trall6,trall7,trall8,trall9,trall10;
for(n=10;n<100;n++){
trall1 =eval("coa"+n);
trall2 =eval("cob"+n);
trall3 =eval("coc"+n);
trall4 =eval("cod"+n);
trall5 =eval("coe"+n);
trall6 =eval("cof"+n);
trall7 =eval("cog"+n);
trall8 =eval("coh"+n);
trall9 =eval("col"+n);
trall10 =eval("com"+n);
trall1.bgColor="white";
trall2.bgColor="white";
trall3.bgColor="white";
trall4.bgColor="white";
trall5.bgColor="white";
trall6.bgColor="white";
trall7.bgColor="white";
trall8.bgColor="white";
trall9.bgColor="white";
trall10.bgColor="white";


}
}




var rw="";
var colma="";var t="";var colmb="";
var colmc="";var colmd="";var colme="";var colmf="";
var colmg="";var colmh="";var colml="";var colmm="";

function test(n){

t=n.innerHTML;
rw.bgColor="white";
rw=eval("r"+ t);
rw.bgColor="skyblue";


}

var me="";var inme="";

function col(a){

inme.bgColor="white";
colma.bgColor="white";
colmb.bgColor="white";
colmc.bgColor="white";
colmd.bgColor="white";
colme.bgColor="white";
colmf.bgColor="white";
colmg.bgColor="white";
colmh.bgColor="white";
colml.bgColor="white";
colmm.bgColor="white";

me=a.innerHTML;
inme=eval("cm"+me);
inme.bgColor="skyblue";
if(me==0){cls();
colma.bgColor="white";
colma =eval("coa"+t);
colma.bgColor="yellow";
 
}
if(me==1){cls();
colmb.bgColor="white";
colmb =eval("cob"+t);
colmb.bgColor="yellow";}
if(me==2){cls();
colmc.bgColor="white";
colmc =eval("coc"+t);
colmc.bgColor="yellow";}
if(me==3){cls();
colmd.bgColor="white";
colmd =eval("cod"+t);
colmd.bgColor="yellow";}
if(me==4){cls();
colme.bgColor="white";
colme =eval("coe"+t);
colme.bgColor="yellow";}
if(me==5){cls();
colmf.bgColor="white";
colmf =eval("cof"+t);
colmf.bgColor="yellow";}
if(me==6){cls();
colmg.bgColor="white";
colmg =eval("cog"+t);
colmg.bgColor="yellow";}
if(me==7){cls();
colmh.bgColor="white";
colmh =eval("coh"+t);
colmh.bgColor="yellow";}
if(me==8){cls();
colml.bgColor="white";
colml =eval("col"+t);
colml.bgColor="yellow";}
if(me==9){cls();
colmm.bgColor="white";
colmm =eval("com"+t);
colmm.bgColor="yellow";}
}
         