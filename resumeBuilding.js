const button = document.createElement("button");
button.innerText = "click here";
console.log(button);

async function display(){
    try{
        div.appendChild(button);
    }
    catch(e){
        console.log("Error is:" + e);
    }
    finally{
div.removeChild(button);
    }
}
button.addEventListener('click',display);
