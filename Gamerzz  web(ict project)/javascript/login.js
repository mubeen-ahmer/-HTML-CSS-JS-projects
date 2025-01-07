let heading = document.querySelector("form h1");
let buttonText = document.querySelector("button");
let text = document.querySelector(".text");
let link = document.querySelector("a p");
count =0;
function signin(){
    if(count%2==0){
        heading.innerHTML="sign in";
        buttonText.innerHTML="sign in";
        text.innerHTML="don't have an acount ?";
        link.innerHTML="click here to log in";
    }
    else{
        heading.innerHTML="log in";
        buttonText.innerHTML="log in";
        text.innerHTML="already have an account ?";
        link.innerHTML="click here to sign in";
    }
    count++;
}