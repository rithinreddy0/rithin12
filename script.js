let btn;
btn = document.getElementsByTagName('svg');
btn = btn[0];
function function1(){
    let nav = document.getElementsByClassName("mobnav");
    nav = nav[0];
    nav.style.display = "flex";
    document.getElementsByClassName("close")[0].style.display = "flex";
    document.getElementsByClassName("open")[0].style.display = "none";
    let x = document.getElementsByClassName("x");
    for(xi of x){
        xi.style.display="none";
    }
    
}
function function2(){
    document.getElementsByClassName("mobnav")[0].style.display = 'none';
    document.getElementsByClassName("open")[0].style.display = "flex";
    document.getElementsByClassName("close")[0].style.display = "none";
    let x = document.getElementsByClassName("x");
    for(xi of x){
        xi.style.display="block";
    }
}
