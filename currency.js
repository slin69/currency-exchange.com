function fn1(){
    var amount=document.getElementById("amount").value;
    var c1=document.getElementById("countries").value;
    var c2=document.getElementById("countries2").value;
    amount=parseInt(amount);
    if(c2=="us dollars"&&  c1=="yuan" ){
        alert(amount*0.16+" us dollars");
    } else if(c1=="yuan" && c2=="euros"){
        alert(amount*0.13+"euros");
    }else if(c1=="yuan" && c2=="pounds"){
        alert(amount*0.11+" pounds");
    }else if(c1=="yuan" && c2=="yen"){
        alert(amount*16.95+" yens");
    }else if(c1=="yuan" && c2=="yuan"){
        alert(amount+" yuan");
    }
    if(c1=="us dollars"&&  c2=="yuan" ){
        alert(amount*6.4+" yuan");
    } else if(c1=="us dollars" && c2=="euros"){
        alert(amount*0.82+"euros");
    }else if(c1=="us dollars" && c2=="pounds"){
        alert(amount*0.71+" pounds");
    }else if(c1=="us dollars" && c2=="yen"){
        alert(amount*108.80+" yens");
    }else if(c1=="us dollars" && c2=="us dollars"){
        alert(amount+" us dollars");
    }
    if(c1=="euros"&&  c2=="yuan" ){
        alert(amount*7.79+"yuan");
    } else if(c1=="euros" && c2=="us dollars"){
        alert(amount*1.21+"us dollars");
    }else if(c1=="euros" && c2=="pounds"){
        alert(amount*0.86+" pounds");
    }else if(c1=="euros" && c2=="yen"){
        alert(amount*132.09+" yens");
    }else if(c1=="euros" && c2=="euros"){
        alert(amount+" euros");
    }
    if(c1=="pounds"&&  c2=="yuan" ){
        alert(amount*9.06+" yuan");
    } else if(c1=="pounds" && c2=="euros"){
        alert(amount*1.16+"euros");
    }else if(c1=="pounds" && c2=="us dollars"){
        alert(amount*1.41+" us dollars")
    }else if(c1=="pounds" && c2=="yen"){
        alert(amount*153.70+" yens");
    }else if(c1=="pounds" && c2=="pounds"){
        alert(amount+" pounds");

    }
    if(c2=="yen"&&  c1=="yuan" ){
        alert(amount*0.059+" yuan");
    } else if(c1=="yen" && c2=="euros"){
        alert(amount*0.0076+"euros");
    }else if(c1=="yen" && c2=="pounds"){
        alert(amount*0.0065+" pounds");
    }else if(c1=="yen" && c2=="us dollars"){
        alert(amount*0.0092+" us dollars");
    }else if(c1=="yen" && c2=="yen"){
        alert(amount+" yen");
    }
    
    
    
    
    
}