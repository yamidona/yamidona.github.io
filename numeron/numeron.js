const btn= document.getElementById('btn');
var turn=1;
function ebJudge(eat,bite){
  var ebCombi=[[3,0],[1,2],[0,3],[2,0],[1,1],[1,0],[0,2],[0,0],[0,1]];
  for (let i=0;i<ebCombi.length;i++){
    console.log(ebCombi[i][0])
    console.log(ebCombi[i][1])
    if (eat==ebCombi[i][0] && bite==ebCombi[i][1]){
      return true;
    }
  }
  return false;
}
function buttonMake(idname,begin,end){
  var select = document.createElement("select");
  select.id=idname;
  select.className="numselect";
  
  for (let i=begin;i<end;i++){
    var option = document.createElement("option");
    option.text = String(i);
    option.value = String(i);
    select.appendChild(option);
  }
  return select;
}  


btn.addEventListener('click', function() {
  console.log("kita");
  if (turn===1){
    let hundred = document.getElementById('hundred').value;
    let ten = document.getElementById("ten").value;
    let one = document.getElementById("one").value;
    
    console.log(hundred);
    console.log(ten);
    console.log(one);
    if (!(hundred===ten ||ten===one ||hundred===one)){
      let textModMsg = document.getElementById("cpuarea");
      textModMsg.textContent = "";
      var select_list =document.getElementsByClassName("numselect");
      console.log(select_list[0]);
      console.log(select_list.length);
      let parent=document.getElementById("mynumberbutton");
      for (let i = 0; i <select_list.length; i++) {

            var e = select_list[i];
            e.parentNode.removeChild(e);
      }
      
      turn=0;
      let eat1=buttonMake('eat',0,4);
      let bite1=buttonMake('bite',0,4);
      parent.insertBefore(eat1, parent.lastElementChild);
      parent.insertBefore(bite1, parent.lastElementChild);
      
    }else{
      var textModMsg = document.getElementById("cpuarea");
      textModMsg.textContent =  "選択した数字に重複があります。";
    }
  }else{
    let eat = document.getElementById('eat').value;
    console.log(eat);
    let bite = document.getElementById('bite').value;
    console.log(bite);
    console.log([Number(eat),Number(bite)])
    if (!ebJudge(Number(eat),Number(bite))){
      var textModMsg = document.getElementById("cpuarea");
      textModMsg.textContent =  "入力が間違っています。";
    }else{
      console.log("kita1");
      var textModMsg = document.getElementById("cpuarea");
      console.log("kita2");
      textModMsg.textContent ="";
      console.log("kita3");
      let parent=document.getElementById("mynumberbutton");
      
      var select_list =document.getElementsByClassName("numselect");
      turn=1;
      for (let i = 0; i <select_list.length; i++) {
            var e = select_list[i];
            e.parentNode.removeChild(e);
      }
      
      let hundred=buttonMake('hundred',1,10);
      let ten=buttonMake('ten',1,10);
      let one=buttonMake('one',1,10);
      parent.insertBefore(hundred, parent.lastElementChild);
      parent.insertBefore(ten, parent.lastElementChild);
      parent.insertBefore(one, parent.lastElementChild);
      
    }
    
  }
  
  
});
