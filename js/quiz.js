var qno = 0;
var answers = [];
var temp="";
var qVar = quiz.topics[localStorage.getItem('topicNo')];
renderQ();
function nextQ(){
  if(qno<qVar.questions.length-1){
    qno++;
    renderQ();
  }
}
function prevQ(){
  if(qno>0){
    qno--;
    renderQ();
  }
}
function renderQ(){
  temp = '<div class="well"><h2 class="text-center">'+qVar.questions[qno].q+'</h2></div><div class="row">';
  for (var i = 0; i < qVar.questions[qno].options.length; i++) {
    // temp+='<div class="col-md-6"><p class="text-center"><label class="btn btn-default btn-lg"><input type="radio" value="'+qVar.questions[qno].options[i]+'" name="options" onClick="selectOption(this)"> '+qVar.questions[qno].options[i]+'</input></label></p></div>';
    temp+='<div class="col-md-6"><p class="text-center"><input class="btn btn-default btn-lg" value="'+qVar.questions[qno].options[i]+'" onClick="selectOption(this)"></p></div>';
  }
  temp+="</div>";
  document.getElementById("question").innerHTML=temp;
  if(qno == 0) {
    document.getElementById("previous").disabled = true;
  } else if (qno==qVar.questions.length-1){
    document.getElementsByClassName("next")[0].style.display = "none";
    document.getElementById("submit").style.display = "block";
  }
  else {
    document.getElementsByClassName("next")[0].style.display = "block";
    document.getElementById("submit").style.display = "none";
    document.getElementById("previous").disabled = false;
  }
}

function selectOption(obj){
  answers[qno] = obj.value;
  // document.getElementById("skip").disabled = true;

}
// var i;
// function skipQ(){
//   i = qno;
//   while(true){
//     if(i<qVar.questions.length-1 && answers[i] === undefined ){nextQ(); break;}
//     else if (qno==0){break;}
//     else {qno=0; renderQ();}

//     // if (i==qno && ){ console.log("last question"); break;}
//   }
// }


//   $('.btn-default').on('click', 'label.btn', function(e) {
//     if ($(this).hasClass('active')) {
//       setTimeout(function() {
//         $(this).removeClass('active').find('input').prop('checked', false);
//       }.bind(this), 10);
//     }
//   });