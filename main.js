addDoggo = () =>
{
let newdoggo=document.createElement("div");
document.getElementById("container").appendChild(newdoggo);
newdoggo.classList.add("doggo-box");
let randomdoggo=document.createElement("img");
newdoggo.appendChild(randomdoggo);
randomdoggo.src='https://picsum.photos/200/200';
}
deleteAllDoggos = () =>
{
    document.getElementById("container").innerHTML= "";
}