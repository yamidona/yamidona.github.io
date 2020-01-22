const btn = document.getElementById('btn');
btn.addEventListener('click', function() {
  var name = document.getElementById('actor-name').value;
  var textModMsg = document.getElementById("output");
  var output1=action(name)
  textModMsg.textContent =  output1;
  
});


function UrlChecker(urlname00){
    fetch(urlname00)
        .then(response => {
            
            // エラーレスポンスが返されたことを検知する
            if (!response.ok) {
                return False
            } else {
               return True
               
            }
        }).catch(error => {
            return False
        });
}
function match_text_get(pattern1,pattern2,text){
    var text0=text.match(pattern1);
    var works2=[];
        if (text1!==[]){
            works2=text1[0].match(pattern2);
        }else{
            works2=[];
        }
        return work2;
}
function title_get(url){
    
    
    var request = new XMLHttpRequest();
 
    request.open('GET', url, true);
    request.responseType = 'json';
 
    request.onload = function () {
      var data = this.responseText ;
      console.log(data);
    };
 
    request.send();
  
    text.replace(pattern0,'');


    var works1=match_text_get(pattern1,pattern2,text);
    var works2=match_text_get(pattern3,pattern2,text);
    var works3=match_text_get(pattern4,pattern2,text);
    var works4=match_text_get(pattern5,pattern2,text);    
    works1.push(works2);
    works1.push(works3);
    works1.push(works4);

    for (let i=0;i<works1.length;i++){
        works9.append(work.replace('&.*?;','&'));
    }
    return works9;
}
function voice_works(voice_actor) {
    var pattern0='[\n\r]+';
    var pattern1='<span class=.*? id="テレビアニメ">テレビアニメ</span>(.*?)<h3>';
    var pattern3='<span class=.*? id="劇場アニメ">劇場アニメ</span>(.*?)<h3>';
    var pattern4='<span class=.*? id="OVA">OVA</span>(.*?)<h3>';
    var pattern5='<span class=.*? id="Webアニメ">Webアニメ</span>(.*?)<h3>';
    var pattern2='<li><a href=.*?>(.*?)</a>';
    var url='https://ja.wikipedia.org/wiki/'+encodeURIComponent(voice_actor);
    var url1='https://ja.wikipedia.org/wiki/'+encodeURIComponent(voice_actor)+'_'+encodeURIComponent('(声優)');
    var items = [1,2,3,4];
    var works=[]
    console.log("oppai");
    if  (UrlChecker(url1)) {
        works=title_get(url1);
        console.log(works)
    }else if  (UrlChecker(url)) {
        works=title_get(url);
   }
  console.log(works)
  return works
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
  
  var output=""
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
          actor_list=[]
          for (let k=0;k<voice_actor_anime_list.length;k++){
              if (voice_actor_anime_list[k].indexOf(title_list[i])){
                  actor_list.push(name_list[i])
              }
          }
          if (actor_list.length>=2) {
              output+=title_list[i]+'|n'+actor_list+'|n|n';
              
          }
      }
  }else{
      title_list0=voice_works(name_list[0]);
      title_list1=voice_works(name_list[1]);
      output+=Array.from(title_list0) & Array.from(title_list1);
  }
  return output;
}

