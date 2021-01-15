addDoggo = (url) =>
{
let newdoggo=document.createElement("div");
document.getElementById("container").appendChild(newdoggo);
newdoggo.classList.add("doggo-box");
let randomdoggo=document.createElement("img");
newdoggo.appendChild(randomdoggo);
randomdoggo.width=200;
randomdoggo.height=200;
function display(data){
    data = data.json();
    return data;
  }
const futureData = fetch('https://dog.ceo/api/breeds/image/random');
futureData.then(display).then(abc=>randomdoggo.src=abc.message);
}
deleteAllDoggos = () =>
{
    document.getElementById("container").innerHTML= "";
}