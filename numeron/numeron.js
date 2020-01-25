const btn= document.getElementById('btn');

const num_candidate_list=[];
for (let i=1;i<10;i++){
    for (let j=1;j<10;j++){
        for (let k=1;k<10;k++){
            if !(i==j || j==k || k==i){
                num_candidate_list.push(String(i)+String(j)+String(k));
            }
        }
    }
}

let State = require('./state');
let yourState = new State(num_candidate_list);
let CPUState = new State(num_candidate_list);
let CPUnum=num_candidate_list[Math.floor(Math.random() * num_candidate_list.length)]];

var turn=1;

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
let parent=document.getElementById("mynumberbutton");
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
      let {eat_num,bite_num}=CPUState.eat_bite_compute(CPUnum,hundred,ten,one);
      if (!(eat_num==3 &&bite_num==0)){
        var number1=yourState.evaluate_calcu_max(num_candidate_list);
        textModMsg.textContent = String(eat_num) + 'eat' + String(bite_num) + 'biteです。\n' + number1 + 'はどうですか？';
        CPUState.state_change(CPUState.candidate_list_calcu(eat_num,bite_num,[hundred,ten,one]));
        let procedure = document.getElementById("procedure");
        let option = document.createElement("option");
        option.text = "あなた宣言:"+hundred+ten+one+" CPU返答:"+String(eat_num) + 'eat' + String(bite_num) + 'bite';
        option.value= "あなた宣言:"+hundred+ten+one+" CPU返答:"+String(eat_num) + 'eat' + String(bite_num) + 'bite';
        procedure.appendChild(option);
        
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
        
        textModMsg.textContent = String(eat_num) + 'eat' + String(bite_num) + 'biteです。\nあなたの勝ちです';
      } 
      
      
      
      
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
      yourState.state_change(yourState.candidate_list_calcu(eat_num,bite_num,[hundred,ten,one]));
      let procedure = document.getElementById("procedure");
      let option = document.createElement("option");
      option.text = "CPU宣言:"+number1+" あなた返答:"+eat + 'eat' + bite + 'bite;
      procedure.appendChild(option);
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

