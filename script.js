function sendMessage(){

let input = document.getElementById("userInput");

let message = input.value;


if(message === "") return;


addMessage(message,"user");


input.value="";


setTimeout(()=>{

let response = getResponse(message);

addMessage(response,"bot");


},500);


}



function addMessage(text,type){

let chat=document.getElementById("chat");


let div=document.createElement("div");

div.className="message "+type;

div.innerText=text;


chat.appendChild(div);


chat.scrollTop=chat.scrollHeight;

}




function getResponse(message){


message = message.toLowerCase();



if(message.includes("client")){

return "Try finding businesses with outdated websites and offer a free redesign idea.";

}



if(message.includes("website")){

return "A good business website needs trust, clear services, strong calls-to-action, and mobile design.";

}



if(message.includes("money")){

return "Focus on creating value. More customers and better solutions lead to more revenue.";

}



return "That's a great idea. Think about how you can turn that into a system for Forge Digital.";

}
