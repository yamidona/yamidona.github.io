function multiple_list(list1,list2){
    var list=[];
    for (let i=0;i<list1.length;i++){
        if (list2.indexOf(list1[i])!=-1){
          list.push(list1[i]);
        }
    }
    return list;
}

class State {
    const eat_bite_combi=[[3,0],[1,2],[0,3],[2,0],[1,1],[1,0],[0,2],[0,0],[0,1]];
    constructor(state) {
        this.state = state;
    }
    state_change(state){
        this.state = state;
    }
    eat_bite_compute(a,b,c){
      let eat=0;
      let bite=0;
      let compute=this.state;
      let dec=[a,b,c];
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
      if (dec.indexOf(compute.charAt(2))!=-1){
          if (compute.charAt(2)==c){
              eat+=1;
          }else{
              bite+=1;
          }
      }
      return {eat, bite};
    }
    eat_bite_compute_list(value,mylist,ss){
      let current_count=0;
      for current_num in mylist :
      for (let i=0;i<mylist.length;i++){
          let value0=mylist[i].charAt(0);
          let value1 = mylist[i].charAt(1);
          let value2=mylist[i].charAt(2);
          let {eat,bite}=eat_bite_compute(value, value0, value1, value2)

          if (ss[0]==eat && ss[1]==bite){
              current_count+=1;
          }
      return current_count;
    }
    evaluate_calcu(list1,select_list){
      let evaluation_value_list=[];
      for (let i=0;i<select_list.length;i++){
        let evaluation_value=0;
        value=select_list[i]
        for (let j=0;j<eat_bite_combi.length;j++){
          evaluation_value+=(eat_bite_compute_list(value,list1,eat_bite_combi[j])*(len(candidate_list_calcu(list1,eat_bite_combi[j][0],eat_bite_combi[j][1],value))));
        }
        evaluation_value_list.push([value,evaluation_value]);
      }
      evaluation_value_list.sort(function(a,b){return(b[1] - a[1]);});
      let max_score_list=[];
      maxsocre==evaluation_value_list[0][1]
      for (let i=0;i<evaluation_value_list.length;i++){
        if (maxsocre==evaluation_value_list[i][1]){
            max_score_list.push(evaluation_value_list[i]);
        }else{
            break;
        } 
      }
      return (max_score_list[Math.floor(Math.random() * max_score_list.length)]]);
    }
    
    candidate_list_calcu(eat,bite,declare) {
            if (eat==1 && bite==2){
                    var candidate2=[String(declare[0])+String(declare[2])+String(declare[1]),
                    String(declare[1])+String(declare[0])+String(declare[2]),
                    String(declare[2])+String(declare[1])+String(declare[0])];
                    return multiple_list(candidate2,this.state);
            }elif (eat==0 && bite==3){
                var candidate2 = [String(declare[2]) + String(declare[0]) + String(declare[1]),
                              String(declare[1]) + String(declare[2]) + String(declare[0])];
                return multiple_list(candidate2,this.state);
            }elif (eat==2 && bite==0){
                const v=[[0,1],[1,2],[0,2]];
                var candidate2=[];
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
                return multiple_list(candidate2,this.state);
            }elif (eat==0 && bite==2){
                candidate2 = [];
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
                return multiple_list(candidate2,this.state);
            }elif (eat==1 && bite==1){
                var candidate2 = [];
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
                return multiple_list(candidate2,this.state);

            }elif (eat==1 && bite==0){
                var candidate2 = [];
                for (let i=0;i<3;i++){ 
                    if (i==0){
                        for (let j=1;j<10;j++){
                            for (let k=1;k<10;k++){
                                if ! (declare.indexOf(String(j))!=-1 || declare.indexOf(String(k))!=-1) {
                                    candidate2.push(String(declare[i])+String(j)+String(k));
                                }
                            }
                        }
                    }else if (i==1) {
                        for (let j=1;j<10;j++){
                            for (let k=1;k<10;k++){
                                if ! (declare.indexOf(String(j))!=-1 || declare.indexOf(String(k))!=-1){
                                    candidate2.push(String(j)+String(declare[i])+String(k));
                                }
                            }
                        }
                    }else if (i==2) {
                         for (let j=1;j<10;j++){
                            for (let k=1;k<10;k++){
                                if ! (declare.indexOf(String(j))!=-1 || declare.indexOf(String(k))!=-1){
                                    candidate2.push(String(j)+String(k)+String(declare[i]));
                                }
                            }
                         }
                    }
                }
                return multiple_list(candidate2,this.state);

            }elif (eat==0 && bite==1) {
                var candidate2 = [];
                for (let i=0;i<3;i++){ 
                    if (i == 0){
                        for (let j=1;j<10;j++){
                            for (let k=1;k<10;k++){
                                if !(declare[i] == String(j) || declare[i] == String(k) || j == k){
                                    candidate2.push(String(j) + String(declare[i]) + String(k));
                                    candidate2.push(String(j) + String(k) + String(declare[i]));
                                }
                            }
                        }
                    }else if (i == 1){
                        for (let j=1;j<10;j++){
                            for (let k=1;k<10;k++){
                                if !(declare[i] == String(j) || declare[i] == String(k) || j == k){
                                    candidate2.push(String(declare[i]) + String(j) + String(k));
                                    candidate2.push(String(j) + String(k) + String(declare[i]));
                                }
                            }
                        }
                                 
                    }else if (i == 2){
                        for (let j=1;j<10;j++){
                            for (let k=1;k<10;k++){
                                if !(declare[i] == String(j) || declare[i] == String(k) || j == k){
                                    candidate2.push(String(declare[i]) + String(j) + String(k));
                                    candidate2.push(String(j) + String(declare[i]) + String(k));
                                }
                            }
                        }
                    }
              }

              return multiple_list(candidate2,this.state);

            }else if (eat == 0 && bite == 0){

                var candidate2 = []；
                for (let i=1;i<10;i++){
                    for (let j=1;j<10;j++){
                        for (let k=1;k<10;k++){
                            if (! (i == j || i == k || j == k || declare.indexOf(String(i))!=-1\
                                    || declare.indexOf(String(j))!=-1 || declare.indexOf(String(k))!=-1)){
                                candidate2.push(String(i) + String(j) + String(k));
                            }
                        }
                    }
                }  
                              

                return multiple_list(candidate2,this.state);

            }else if (eat == 3 && bite == 0){
                return [declare];
       }
   }
}

module.exports = State;
