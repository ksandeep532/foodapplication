 let Cart=document.getElementById("Cartshow");
let cartb=document.getElementById("cartbox");


Cart.addEventListener('click',()=>{
    if(cartb.style.display==="none"){
        cartb.style.display="block";
    }else{
        cartb.style.display="none";
    }
})