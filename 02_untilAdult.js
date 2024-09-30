let i = prompt("What is your age?");
console.log("Age entered:" + i);
    if (i >= 18) {
        console.log(`You access!`);
        alert("You access!");
    }else{
       while(i<18){
            i = prompt("What is your age?");
        } 
    }  

const container = document.getElementById("container");
container.innerHTML = "<h1>Welcome to my awesome website for adult people</h1>";