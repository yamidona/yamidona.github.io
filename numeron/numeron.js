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

let hundred=buttonMake('hundred',1,10);
let ten=buttonMake('ten',1,10);
let one=buttonMake('one',1,10);
let　parent=document.getElementById("mynumberbutton");
parent.appendChild(hundred);
parent.appendChild(ten);
parent.appendChild(one);

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
      let buttonarea =document.getElementById("mynumberbutton");
      buttonarea.parentNode.removeChild(buttonarea);
      
      
      turn=0;
      let eat1=buttonMake('eat',0,4);
      let bite1=buttonMake('bite',0,4);
      let parent =document.createElement("div");
      let parentparent =document.getElementById("myarea");
      parent.id="mynumberbutton";
      parent.class="button1";
      parentparent.insertBefore(parent, parentparent.lastElementChild);
      parent.appendChild(eat1);
      parent.appendChild(bite1);
      
      
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
      let buttonarea =document.getElementById("mynumberbutton");
      buttonarea.parentNode.removeChild(buttonarea);
      turn=1;
      let hundred=buttonMake('hundred',1,10);
      let ten=buttonMake('ten',1,10);
      let one=buttonMake('one',1,10);
      let parent =document.createElement("div");
      let parentparent =document.getElementById("myarea");
      parent.id="mynumberbutton";
      parent.class="button1";
      parentparent.insertBefore(parent, parentparent.lastElementChild);
      parent.appendChild(hundred);
      parent.appendChild(ten);
      parent.appendChild(one);
      
    }
    
  }
  
  
});
