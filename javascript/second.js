
var additems = document.querySelector(".aform");
additems.addEventListener("submit", runEvent);

function runEvent(e) {
  var list = document.createElement("li");
  e.preventDefault();
  console.log(e);

  var texts = document.querySelector("#text").value.toUpperCase();

  console.log(texts.length);
  if (texts.length === 0) {
    alert("please add some task to do ");

    list.className = "hidden";

  }
  console.log(texts);

  var unorderlist = document.querySelector("ul");
  unorderlist.appendChild(list);
  var createtextnode = document.createTextNode(texts);
  list.appendChild(createtextnode);

var button1 = document.createElement("button");
  console.log(button1);
  button1.classList.add("green");
  var button1text = document.createTextNode("✔");
  button1.appendChild(button1text);
  list.appendChild(button1);


  button1.addEventListener("click", buttonEvent1);

  function buttonEvent1() {
    list.classList.add("green");
    list.classList.remove("red");
  }


  var button2 = document.createElement("button");
  console.log(button2);
    button2.classList.add("yellow");
  var button2text = document.createTextNode("📝");

  button2.appendChild(button2text);
  list.appendChild(button2);

  button2.addEventListener("click", buttonEvent2);

  function buttonEvent2() {
    list.classList.remove("red");
    list.classList.remove("green");
    var promptvalue = prompt("Write your updated text here:-");
    console.log(promptvalue);
    var promptvaluetextnode = document.createTextNode(promptvalue.toUpperCase());
    createtextnode.replaceWith(promptvaluetextnode);
  }


  var button3 = document.createElement("button");
  console.log(button3);
  button3.classList.add("red");
  var button3text = document.createTextNode("✖");
  button3.appendChild(button3text);
  list.appendChild(button3);


  button3.addEventListener("click", buttonEvent3);

  function buttonEvent3() {
    list.classList.add("red");
    list.classList.remove("green");
  }


    document.querySelector("#text").value="";



}
