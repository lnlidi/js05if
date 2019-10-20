//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию
function solve(){alert(f(a,b,c,d,min1,min2,max)+' min1='+min1+' min2='+min2+' max='+max)}
var a=40;
var b=60;
var c=50;
var d=10;
var min1=0;
var min2=0;
var max=0;
function f(a,b,c,d,min1,min2,max){
 if (a<=b) 
   	{return min1=a}else{return min1=b}
 if (c<=d)
    {return min2=c}else{return min2=d}
 if (min1>=min2)
    {return max=min1}else{return max=min2}

}

