function shift(){
  var list = document.querySelectorAll("img");
  var randomImg = list[Math.floor(Math.random() * list.length)];
  document.getElementById("two").append(randomImg)
}
