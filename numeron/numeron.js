// Hello.
//
// This is JSHint, a tool that helps to detect errors and potential
// problems in your JavaScript code.
//
// To start, simply enter some JavaScript anywhere on this page. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.
function multiple_list(list1,list2){
    var list=[];
    for (let i=0;i<list1.length;i++){
        if (list2.indexOf(list1[i])!=-1){
          list.push(list1[i]);
        }
    }
    console.log("リスト"+list);
    return list;
   
}
const eat_bite_combi=[[3,0],[1,2],[0,3],[2,0],[1,1],[1,0],[0,2],[0,0],[0,1]];

    
    
function eat_bite_compute(compute,a,b,c){
  let eat=0;
  let bite=0;
  let dec=[a,b,c];
  console.log(compute);
  console.log(a+b+c);
  if (dec.indexOf(compute.charAt(0))!=-1){
    if (compute.charAt(0)==a){
      eat+=1;
    }else{
      bite+=1;
    }
  }
  
  if (dec.indexOf(compute.charAt(1))!=-1) {
    if (compute.charAt(1)==b){
      eat+=1;
    }else{
      bite+=1;
    }
  }
  
  if (dec.indexOf(compute.charAt(2))!=-1){
    if (compute.charAt(2)==c){
      eat+=1;
    }else{
      bite+=1;
    }
  }
 
  return [eat, bite];
 }
 

function multiple_list(list1,list2){
    var list=[];
    for (let i=0;i<list1.length;i++){
        if (list2.indexOf(list1[i])!=-1){
          list.push(list1[i]);
        }
    }
    return list;
}
 function eat_bite_compute_list(value,mylist,ss){
 	let current_count=0;
 	for (let i=0;i<mylist.length;i++){
  	let value0=mylist[i].charAt(0);
    let value1 = mylist[i].charAt(1);
    let value2=mylist[i].charAt(2);
    let eatbite=eat_bite_compute(value, value0, value1, value2);
    if (ss[0]==eatbite[0] && ss[1]==eatbite[1]){
        current_count+=1;
    }
  }
  return current_count;
 }

function evaluate_calcu_max(list1,select_list){
      let evaluation_value_list=[];
      
      for (let i=0;i<select_list.length;i++){
        
        let evaluation_value=0;
        let value=select_list[i];
        
        for (let j=0;j<eat_bite_combi.length;j++){
          evaluation_value+=(eat_bite_compute_list(value,list1,eat_bite_combi[j])*(candidate_list_calcu(list1,eat_bite_combi[j][0],eat_bite_combi[j][1],value).length));
        }
                                          evaluation_value_list.push([value,evaluation_value]);
      }
      evaluation_value_list.sort(function(a,b){return(b[1] - a[1]);});
      
      let max_score_list=[];
      let maxscore=evaluation_value_list[0][1];
      
      for (let i=0;i<evaluation_value_list.length;i++){
        if (maxscore==evaluation_value_list[i][1]){
            max_score_list.push(evaluation_value_list[i]);
        }else{
            break;
        }
      }
      
      return (max_score_list[Math.floor(Math.random() * max_score_list.length)][0]);
    }

    function candidate_list_calcu(list1,eat,bite,declare) {
      
            if (eat==1 && bite==2){
                    let candidate2=[String(declare[0])+String(declare[2])+String(declare[1]),
                    String(declare[1])+String(declare[0])+String(declare[2]),
                    String(declare[2])+String(declare[1])+String(declare[0])];
                    return multiple_list(candidate2,list1);
            }else if (eat==0 && bite==3){
                let candidate2 = [String(declare[2]) + String(declare[0]) + String(declare[1]),
                              String(declare[1]) + String(declare[2]) + String(declare[0])];
                return multiple_list(candidate2,list1);
            }else if (eat==2 && bite==0){
                const v=[[0,1],[1,2],[0,2]];
                let candidate2=[];
                for (let i=0;i<v.length;i++){
                    for (let j=1;j<10;j++){
                        if (declare.indexOf(String(j))==-1){
                            if (v[i].indexOf(2)==-1){
                                candidate2.push(String(declare[0])+String(declare[1])+String(j));
                            }else if (v[i].indexOf(1)==-1){
                                candidate2.push(String(declare[0])+String(j)+String(declare[2]));
                            }else if (v[i].indexOf(0)==-1){
                                candidate2.push(String(j) + String(declare[1]) + String(declare[2]));
                            }
                        }
                    }
                }
                return multiple_list(candidate2,list1);
            }else if (eat==0 && bite==2){
                let candidate2 = [];
                const v=[[0,1],[1,2],[0,2]];
                for (let i=0;i<v.length;i++){
                    for (let j=1;j<10;j++){
                        if (declare.indexOf(String(j))==-1){
                            if (v[i].indexOf(2)==-1){
                                candidate2.push(String(declare[1])+String(declare[0])+String(j));
                                candidate2.push(String(declare[1]) + String(j) + String(declare[0]));
                                candidate2.push(String(j)+String(declare[0])+String(declare[1]));
                            }else if (v[i].indexOf(1)==-1){
                                candidate2.push(String(declare[2])+String(j)+String(declare[0]));
                                candidate2.push(String(declare[2])+String(declare[0])+String(j));
                                candidate2.push(String(j) + String(declare[2])+ String(declare[0]));
                            }else if (v[i].indexOf(0)==-1){

                                candidate2.push(String(declare[2]) + String(j) + String(declare[1]));
                                candidate2.push(String(declare[1]) + String(declare[2]) + String(j));
                                candidate2.push(String(j) + String(declare[2]) + String(declare[1]));
                            }
                        }
                    }
                }
                return multiple_list(candidate2,list1);
            }else if (eat==1 && bite==1){
                let candidate2 = [];
                for (let i=0;i<3;i++){
                    for (let j=1;j<10;j++){
                        if (i==0){
                            if (declare.indexOf(String(j))==-1){
                                candidate2.push(String(declare[i])+String(declare[2])+String(j));
                                candidate2.push(String(declare[i]) + String(j) + String(declare[1]));
                            }

                        }else if (i==1){
                            if (declare.indexOf(String(j))==-1){
                                candidate2.push(String(j)+String(declare[i])+String(declare[0]));
                                candidate2.push(String(declare[2])+ String(declare[i])+String(j));
                                }
                        }else if (i==2){
                            if (declare.indexOf(String(j))==-1){
                                candidate2.push(String(j) + String(declare[0]) + String(declare[i]));
                                candidate2.push(String(declare[1]) + String(j)+ String(declare[i]));
                            }
                        }
                    }
                }
                return multiple_list(candidate2,list1);

            }else if (eat==1 && bite==0){
                let candidate2 = [];
                for (let i=0;i<3;i++){
                    if (i==0){
                        for (let j=1;j<10;j++){
                            for (let k=1;k<10;k++){
                                if (! (declare.indexOf(String(j))!=-1 || declare.indexOf(String(k))!=-1)) {
                                    candidate2.push(String(declare[i])+String(j)+String(k));
                                }
                            }
                        }
                    }else if (i==1) {
                        for (let j=1;j<10;j++){
                            for (let k=1;k<10;k++){
                                if( ! (declare.indexOf(String(j))!=-1 || declare.indexOf(String(k))!=-1)){
                                    candidate2.push(String(j)+String(declare[i])+String(k));
                                }
                            }
                        }
                    }else if (i==2) {
                         for (let j=1;j<10;j++){
                            for (let k=1;k<10;k++){
                                if (! (declare.indexOf(String(j))!=-1 || declare.indexOf(String(k))!=-1)){
                                    candidate2.push(String(j)+String(k)+String(declare[i]));
                                }
                            }
                         }
                    }
                }
                return multiple_list(candidate2,list1);

            }else if (eat==0 && bite==1) {
                let candidate2 = [];
                for (let i=0;i<3;i++){
                    if (i == 0){
                        for (let j=1;j<10;j++){
                            for (let k=1;k<10;k++){
                                if (!(declare[i] == String(j) || declare[i] == String(k) || j == k)){
                                    candidate2.push(String(j) + String(declare[i]) + String(k));
                                    candidate2.push(String(j) + String(k) + String(declare[i]));
                                }
                            }
                        }
                    }else if (i == 1){
                        for (let j=1;j<10;j++){
                            for (let k=1;k<10;k++){
                                if (!(declare[i] == String(j) || declare[i] == String(k) || j == k)){
                                    candidate2.push(String(declare[i]) + String(j) + String(k));
                                    candidate2.push(String(j) + String(k) + String(declare[i]));
                                }
                            }
                        }

                    }else if (i == 2){
                        for (let j=1;j<10;j++){
                            for (let k=1;k<10;k++){
                                if (!(declare[i] == String(j) || declare[i] == String(k) || j == k)){
                                    candidate2.push(String(declare[i]) + String(j) + String(k));
                                    candidate2.push(String(j) + String(declare[i]) + String(k));
                                }
                            }
                        }
                    }
              }

              return multiple_list(candidate2,list1);

            }else if (eat == 0 && bite == 0){

                let candidate2 = [];
                for (let i=1;i<10;i++){
                    for (let j=1;j<10;j++){
                        for (let k=1;k<10;k++){
                            if (! (i == j || i == k || j == k || declare.indexOf(String(i))!=-1 || declare.indexOf(String(j))!=-1 || declare.indexOf(String(k))!=-1)){
                                candidate2.push(String(i) + String(j) + String(k));
                            }
                        }
                    }
                }


                return multiple_list(candidate2,list1);

            }else if (eat == 3 && bite == 0){
                return [declare];
       }else{
         console.log("oppai1");
         
       }
    
   


}
const btn= document.getElementById('btn');
const num_candidate_list=[];
for (let i=1;i<10;i++){
    for (let j=1;j<10;j++){
        for (let k=1;k<10;k++){
            if (!(i==j || j==k || k==i)){
                num_candidate_list.push(String(i)+String(j)+String(k));
            }
        }
    }
}
let CPUnum=num_candidate_list[Math.floor(Math.random() * num_candidate_list.length)];
let yourState =num_candidate_list;
let CPUState = num_candidate_list;

var turn=1;
function ebJudge(eat,bite){
  var ebCombi=[[3,0],[1,2],[0,3],[2,0],[1,1],[1,0],[0,2],[0,0],[0,1]];
  for (let i=0;i<ebCombi.length;i++){
    
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
    let option = document.createElement("option");
    option.text = String(i);
    option.value = String(i);
    select.appendChild(option);
  }
  return select;
}
function buttonBlock(text,idname,begin,end){
  var select = document.createElement("div");
  var buttontext=document.createElement("div");
  buttontext.innerHTML=text;
  document.createElement("select");
  select.className="buttonblock";
  select.appendChild(buttontext); 
  select.appendChild(buttonMake(idname,begin,end));
  
  return select;
}
function textMake(text){
  var select = document.createElement("div");
  select.className="buttonblock";
  
  return select;
}
let hundred=buttonBlock('百','hundred',1,10);
let ten=buttonBlock('十','ten',1,10);
let one=buttonBlock('一','one',1,10);

let declarenumber1;
let parent1=document.getElementById("mynumberbutton");

parent1.appendChild(hundred);


parent1.appendChild(ten);

parent1.appendChild(one);
console.log("");
console.log(parent1);
let Flag=true
btn.addEventListener('click', function() {
  
  if (turn===1){
    let hundrednum = document.getElementById('hundred').value;
    let tennum = document.getElementById("ten").value;
    let onenum = document.getElementById("one").value;
    
    if (!(hundrednum===tennum ||tennum===onenum ||hundrednum===onenum)){
      let textModMsg = document.getElementById("cpuarea");
      textModMsg.textContent = "";
      let buttonarea =document.getElementById("mynumberbutton");
      let parentarea =document.getElementById("myarea");
      parentarea.removeChild(buttonarea);
      
      console.log("コンピュータの数"+CPUnum);
      let eatbite=eat_bite_compute(CPUnum,hundrednum,tennum,onenum);
      eat_num=eatbite[0];
      bite_num=eatbite[1];
      
			if (!(eat_num==3 &&bite_num==0)){
        
        if (Flag=false){
          declarenumber1=evaluate_calcu_max(yourState,num_candidate_list);
        }else if(yourState.length<4){
          declarenumber1=evaluate_calcu_max(yourState,yourState);
        }else{
          declarenumber1=num_candidate_list[Math.floor(Math.random() * num_candidate_list.length)];
        }
        Flag=false;
        textModMsg.textContent = String(eat_num) + 'eat' + String(bite_num) + 'biteです。\n' + declarenumber1 + 'はどうですか？';
        CPUState=candidate_list_calcu(CPUState,Number(eat_num),Number(bite_num),[hundrednum,tennum,onenum]);
        let procedure = document.getElementById("procedure");
        let option1 = document.createElement("option");
        option1.text = "あなた宣言:"+hundrednum+tennum+onenum+" CPU返答:"+String(eat_num) + 'eat' + String(bite_num) + 'bite';
        
        procedure.appendChild(option1);

        turn=0;
        let eat1=buttonBlock('EAT','eat',0,4);
        let bite1=buttonBlock('BITE','bite',0,4);
        let parent =document.createElement("div");
        
        parent.id="mynumberbutton";
        parent.className="button1";
        parent.appendChild(eat1);
        parent.appendChild(bite1);
        parentarea.insertBefore(parent, parentarea.lastElementChild);
        
        
        
      }else{
        textModMsg.textContent = String(eat_num) + 'eat' + String(bite_num) + 'biteです。\nあなたの勝ちです';
        let parentarea =document.getElementById("myarea");
        parentarea.removeChild(buttonarea);
      
      }


    }else{
      let textModMsg = document.getElementById("cpuarea");
      textModMsg.textContent =  "選択した数字に重複があります。";
    }
  }else{
    let eat = document.getElementById('eat').value;
    
    let bite = document.getElementById('bite').value;
    
    if (!ebJudge(Number(eat),Number(bite))){
      let textModMsg = document.getElementById("cpuarea");
      textModMsg.textContent =  "入力が間違っています。";
    }else if(eat=="3"&&  bite=="0"){
       let textModMsg = document.getElementById("cpuarea");
      textModMsg.textContent ="あなたの負けです。";
      let parentarea =document.getElementById("myarea");
      parentarea.removeChild(buttonarea);
      
    }else{
        yourState=candidate_list_calcu(yourState,Number(eat),Number(bite),[declarenumber1.charAt(0),declarenumber1.charAt(1),declarenumber1.charAt(2)]);
    if (yourState.length!=0){
      let textModMsg = document.getElementById("cpuarea");
      
      textModMsg.textContent ="宣言する数を入力してください。";
      
      
      let buttonarea =document.getElementById("mynumberbutton");
      buttonarea.parentNode.removeChild(buttonarea);
      turn=1;
      let hundred=buttonBlock('百','hundred',1,10);
      let ten=buttonBlock('十','ten',1,10);
      let one=buttonBlock('一','one',1,10);
      let parent =document.createElement("div");
      let parentparent =document.getElementById("myarea");
      parent.id="mynumberbutton";
      parent.className="button1";
      parentparent.insertBefore(parent, parentparent.lastElementChild);
      parent.appendChild(hundred);
      parent.appendChild(ten);
      parent.appendChild(one);
      let procedure = document.getElementById("procedure");
      let option1 = document.createElement("option");
        option1.text = "CPU宣言:"+declarenumber1+" あなた返答:"+String(eat) + 'eat' + String(bite) + 'bite';
        console.log("CPU");
        console.log(CPUState);
        console.log("あなた");
        console.log(yourState);
        procedure.appendChild(option1);
    }else{
      let textModMsg = document.getElementById("cpuarea");
      textModMsg.textContent ="選ぶ候補がありません。eat、biteの宣言をどこかで間違えたと思われます。最初からやり直してください";
      let parentarea =document.getElementById("myarea");
      parentarea.removeChild(buttonarea);
    }

    }

  }


});

btn1.addEventListener('click', function() {
  window.location.href = 'https://yamidona.github.io/numeron/'; 
});

