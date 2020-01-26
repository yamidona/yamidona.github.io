
const pattern0='[\n\r]+';
const  pattern1='<span class=.*? id="テレビアニメ">テレビアニメ</span>(.*?)<h3>';
const  pattern3='<span class=.*? id="劇場アニメ">劇場アニメ</span>(.*?)<h3>';
const  pattern4='<span class=.*? id="OVA">OVA</span>(.*?)<h3>';
const pattern5='<span class=.*? id="Webアニメ">Webアニメ</span>(.*?)<h3>';
const pattern2='<li><a href=.*?>(.*?)</a>';
function UrlChecker(urlname00){
    fetch(urlname00)
        .then(response => {
            
            // エラーレスポンスが返されたことを検知する
            if (!response.ok) {
                return false;
            } else {
               return true;
               
            }
        }).catch(error => {
            return false;
        });
}
function match_text_get(pattern1,pattern2,text){
    var text1=text.match(pattern1);
    var works2=[];
        if (text1!==[]){
            works2=text1[0].match(pattern2);
        }else{
            works2=[];
        }
        return works2;
}
function title_get(url){
    
    console.log("ソース")
    var request = new XMLHttpRequest();
    var works9=[];
    /*request.open('GET', url, true);
    request.responseType = 'json';
 
    request.onload = function () {
      var data = this.responseText ;
      console.log(data);
    };
 
    request.send();*/
    console.log("ソース");
    var text=requestsorce(url);
  　　console.log("ソース"+text);
    text.replace(pattern0,'');

  
    var works1=match_text_get(pattern1,pattern2,text);
    var works2=match_text_get(pattern3,pattern2,text);
    var works3=match_text_get(pattern4,pattern2,text);
    var works4=match_text_get(pattern5,pattern2,text);    
    works1.push(works2);
    works1.push(works3);
    works1.push(works4);

    for (let i=0;i<works1.length;i++){
        works9.append(works1[i].replace('&.*?;','&'));
    }
    return works9;
}
function createhttprequest(){

var request=null;

if("XMLHttpRequest" in window){

	request= new XMLHttpRequest();
        


}
else if("ActiveXObject" in window){

	try{

	request=new ActiveXobject("Msxml2.XMLHTTP");
	


	}catch(e){
	

		try{

		request=new ActiveXObject("Microsoft.XMLHTTP");
		

		}catch(e){
}

	}

}
return request;
}

var request;

function requestsorce(url){

request=createhttprequest();

request.open("GET",url,true);
request.onreadystatechange=sorceget;
request.send(null);
}

function sorceget(){


if (request.readyState == 4 && request.status == 200){
	
document.form1.sorce.value=request.responseText;
}
else{

}
}
function voice_works(voice_actor) {
    
    var url='https://ja.wikipedia.org/wiki/'+encodeURIComponent(voice_actor);
    var url1='https://ja.wikipedia.org/wiki/'+encodeURIComponent(voice_actor)+'_'+encodeURIComponent('(声優)');
    var items = [1,2,3,4];
    var works=[];
    console.log("oppai");
    if  (UrlChecker(url1)) {
        works=title_get(url1);
        console.log(works);
    }else if  (UrlChecker(url)) {
        works=title_get(url);
   }else{
     console.log("oppai1");
   }
  console.log(works);
  return works;
 }
 
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

//import requests

//import urllib.request, urllib.error,urllib.parse
let voice_actor_list0=['南條愛乃','渕上舞','小倉唯','Machico','小原莉子','森嶋優花','厚木那奈美','林鼓子'];
let voice_actor_list1=['茅原実里','中島由貴','相羽あいな','櫻川めぐ','工藤晴香','飯田里穂','石原夏織','伊藤美来','鈴木みのり'];
let voice_actor_list2=['大橋彩香','田所あずさ','中島愛','伊藤彩沙','相羽あいな','芹澤優','久保田未夢','畠中祐','寺島拓篤','木戸衣吹','茜屋日海夏','谷山紀章','南條愛乃'];
let voice_actor_list3=['東山奈央','早見沙織','内田真礼','竹達彩奈'];
let voice_actor_list4=['小松未可子','安済知佳','黒沢ともよ','豊田萌絵','朝井彩加','大橋彩香','水瀬いのり','伊藤美来','小倉唯','石原夏織','三森すずこ','竹達彩奈','佐倉綾音','花澤香菜','内田真礼'];
let voice_actor_list5=['竹達彩奈','沼倉愛美'];
let voice_actor_list6=['戸田めぐみ','井上麻里奈','喜多村英梨'];
let voice_actor_list=voice_actor_list6;
function action(name_list1){
  
  var name_list = name_list1.split(",");
  console.log(name_list);
  
  var output="";
  var title_list=[];
  var voice_actor_anime_list=[];
  if (name_list.length>=3) {
      for (let i=0;i<name_list.length;i++){
          var title_list0=voice_works(name_list[i]);
          voice_actor_anime_list.push(title_list0);
          for (let k=0;k<title_list0.length;k++){
              if (title_list.indexOf(title_list[k]==-1)){
                  title_list.push(title_list[k]);
              }
          }
      }
      for (let i=0;i<title_list.length;i++){
          var actor_list=[];
          for (let k=0;k<voice_actor_anime_list.length;k++){
              if (voice_actor_anime_list[k].indexOf(title_list[i])==-1){
                  actor_list.push(name_list[k]);
              }
          }
      }
      for (let i=0;i<title_list.length;i++){
          var actor_list=[];
          for (let k=0;k<voice_actor_anime_list.length;k++){
              if (voice_actor_anime_list[k].indexOf(title_list[i])){
                  actor_list.push(name_list[i]);
              }
          }
          if (actor_list.length>=2) {
              output+=title_list[i]+'|n'+actor_list+'|n|n';
              
          }
      }
  }else{
      let title_list0=voice_works(name_list[0]);
      let title_list1=voice_works(name_list[1]);
      output+=multiple_list(title_list0,title_list1);
  }
  return output;
}


const btn = document.getElementById('btn');
btn.addEventListener('click', function() {
  var name = document.getElementById('actor-name').value;
  var textModMsg = document.getElementById("output");
  var output1=action(name);
  textModMsg.textContent =  output1;
  
});
