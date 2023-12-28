document.getElementById("btn").onclick = function () {
  const input = document.getElementById("input").value;
  
  let sqrt = Math.sqrt(input);

  document.getElementById("answer").innerText = "(" + sqrt + ")²";
}