const div = document.getElementById('container');
const button = document.getElementById('btn');
const h1 = document.createElement('h1');
h1.innerText = "data is loading...";
h1.style.textAlign = 'center';
let obj= {
    "Name" : "Kuldeep",
    "Roll" : 111,
    "Branch" :"AIML",
    "CLg" : "ABES",
    "TechStack" : "DSA in C++",
};

function display(){
    div.appendChild(h1);
 
    setTimeout(()=>{
        let table = `<table style = "margin:auto">
        <tr><th colspan=2 style = "font-size:40px">Resume</th></tr>
        <tr><th style = "font-size:35px">Name</th><td style = "font-size:35px">${obj.Name}</td></tr>
        <tr><th style = "font-size:35px">Branch</th><td style = "font-size:35px">${obj.Branch}</td></tr>
        <tr><th style = "font-size:35px">Rollno</th><td style = "font-size:35px">${obj.Roll}</td></tr>
        <tr><th style = "font-size:35px">College</th><td style = "font-size:35px">${obj.CLg}</td></tr>
        <tr><th style = "font-size:35px">TechStack</th><td style = "font-size:35px">${obj.TechStack}</td></tr>
        </table>`;
        div.innerHTML = table;
    },1000)
}
button.addEventListener('click',display);
