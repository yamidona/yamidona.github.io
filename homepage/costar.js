
const btn = document.getElementById('btn');
btn.addEventListener('click', function() {
  var name = document.getElementById('actor-name').value;
  var textModMsg = document.getElementById("output");
  textModMsg.textContent = name;
});
