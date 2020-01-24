const btn = document.getElementById('btn');
var turn=1;
function buttonMake(idname){
  var select = document.createElement("select");
  select.idName=idname;
  for (let i=1;i<10;i++){
    var option = document.createElement("option");
    option.text = String(i);
    option.value = String(i);
    select.appendChild(option);
  }
  return select;
}  


btn.addEventListener('click', function() {
  if (turn===1){
    var hundred = document.getElementById('hundred').value;
    var ten = document.getElementById("ten").value;
    var one = document.getElementById("one").value;
    console.log(hundred);
    console.log(ten);
    console.log(one);
    if (!(hundred===ten ||ten===one ||hundred===one)){
      var child = document.getElementById("mynumberbutton");
      var parent=document.getElementById("myarea");
      parent.removeChild(child);
      turn=0;
      var buttonArea = document.createElement('div');
      buttonArea.className = 'button1';
      buttonArea.idName = 'mynumberbutton';
      console.log(buttonArea);
      parent.appendChild(buttonArea);
      var eat1=buttonMake('mynumberbutton','eat');
      var bite1=buttonMake('mynumberbutton','bite');
      buttonArea.appendChild(eat1);
      buttonArea.appendChild(bite1);
      var button = document.createElement('button');
      button.idName='btn';
      button.value='決定';
      buttonArea.appendChild(button);
     
      
      
      
      
    }else{
      var textModMsg = document.getElementById("cpuarea");
      textModMsg.textContent =  "選択した数字に重複があります。";
    }
  }else{
    
  }
  
  
});




