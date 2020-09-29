//var cardNumber = ["Мирный житель", "Мирный житель", "Мафия", "Мирный житель", "Мирный житель", "Мафия", "Мирный житель", "Мирный житель"]; //Мафия это 3 и 6 элемент
var cardNumber = [1, 2, 3, 4, 5, 6, 7, 8]; //Мафия это 3 и 6 элемент
var mafGolos = [0, 1, 3, 4, 6, 7];
let yourRole;
let yourChoice;
let yourChoiceDead;
let yourCardNum;
var numerLog = 3;
var counterRound = 1;


var round = [];
   round[0] = " Мафия познакомилась.";
   round[1] = " Наступил день. После бурных дебатов...";
   round[2] = " ... выберите за кого голосовать";
   
      function compareRandom() {
      return Math.random() - 0.5;
    }
    //cardNumber.sort(compareRandom);

      function getMaxOfArray() {
      return Math.max.apply(null, );
    }
   
    function start(){
      document.getElementById ('wraphome').style.display="none";
      document.getElementById ('wrapstart').style.display="flex";
      cardNumber.sort(compareRandom);
      console.log (cardNumber);
    }
    function Civilian(cardNum){
      document.getElementById('sc'+(cardNum)).className = "cardmir";
      document.getElementById('rol').innerHTML = "Поздравляем! Ваша роль в этой игре Мирный житель";
      document.getElementById ('startButton').style.display="flex";
   }

    function choiceRole(choice, cardNum){
      //cardNumber.sort(compareRandom);
      if (choice == 3){
         document.getElementById('sc'+(cardNum)).className = "cardmaf";
         let tooMaf = cardNumber.indexOf(6);
         console.log("tooMaf "+tooMaf);
         document.getElementById('sc'+(tooMaf+1)).className = "cardmaf";
         document.getElementById('sc'+(tooMaf+1)).style.border = "0px solid red";
         document.getElementById('rol').innerHTML = "Поздравляем! Ваша роль в этой игре Мафия. А это ваш напарник";
         document.getElementById ('startButton').style.display="flex";
      }
     
      if (choice == 6){
         document.getElementById('sc'+(cardNum)).className = "cardmaf";
         let tooMaf = cardNumber.indexOf(3);
         console.log("tooMaf "+tooMaf);
         document.getElementById('sc'+(tooMaf+1)).className = "cardmaf";
         document.getElementById('sc'+(tooMaf+1)).style.border = "0px solid red";
         document.getElementById('rol').innerHTML = "Поздравляем! Ваша роль в этой игре Мафия. А это ваш напарник";
         document.getElementById ('startButton').style.display="flex"; 
      };
           yourCardNum = cardNum;             
         switch(choice) { 
            case 1 : Civilian(yourCardNum);
                     break;
            case 2 : Civilian(yourCardNum);
                     break;
            case 4 : Civilian(yourCardNum);
                     break;
            case 5 : Civilian(yourCardNum);
                     break;
            case 7 : Civilian(yourCardNum);
                     break;
            case 8 : Civilian(yourCardNum);
                     break;
         }
       
         yourChoice = choice;
         yourCardNum = cardNum;
         yourChoiceDead = choice;
         console.log (cardNumber);
 }
   
    function startGame(){
      document.getElementById ('wrapstart').style.display="none";
      document.getElementById ('wrap').style.display="flex";
      console.log ("yourChoice "+yourChoice);
      console.log ("yourCardNum "+yourCardNum);
      console.log (cardNumber);
      if (yourChoice == 3 || yourChoice == 6){
         document.getElementById('c'+(yourCardNum)).className = "cardmaf";
         } else {
            document.getElementById('c'+(yourCardNum)).className = "cardmir";
       };
      document.getElementById ('logi').style.display="flex";
      let outRound = document.getElementById('outRound');
   let str = ' ';      
   for (let i = 0; i< round.length; i++  ) {
if (round[i]!==undefined) str +=i+'. '+round[i]+'<br>';
}
 outRound.innerHTML = str;
    }

    function endGame(){
      document.getElementById ('wrap').style.display="none";
      document.getElementById ('wraphome').style.display="flex";
      document.location.reload();
    }

    function cardNub(choice, cardNum) {
      document.getElementById('c'+(cardNum)).style.border = "3px solid green"; //Нужно что-то придумать с подсветкой выбираеой карты
      yourChoice = choice;
      yourCardNum = cardNum;
       setTimeout(delayVisibility, 0);
       setTimeout(delayInvisibility, 2500);
       setTimeout(game, 2700);
   }
   
function delayVisibility(){
   document.getElementById ('delay').style.display="flex";
   document.getElementById ('logi').style.display="none";
}

function delayInvisibility(){
   document.getElementById ('delay').style.display="none";
   document.getElementById ('logi').style.display="flex";
}
   
function game(){
   var cardGolos = [];
   var resultGolosFull = [0,0,0,0,0,0,0,0];

      //   resultGolosClear = cardNumber.filter(function (x) {
      //    return x !== null;
      //    });

      // console.log ("cardNumber "+cardNumber);
      // for (i=0; i<8; i++){
      //    if (cardNumber[i] !== null){
      //      var golos = Math.ceil(Math.random()*resultGolosClear.length);
      //       cardGolos[i] = resultGolosClear[golos];
      //    } else {
      //       cardGolos[i] = 0;
      //    }                                            
      //  }
                                    //---------Это блок для рассчета индивидуального голосования каждого "игрока"
      //  cardGolos[yourRole] = +yourChoice;
      // console.log ("cardGolos "+cardGolos);
      
      // console.log ("resultGolosClear "+resultGolosClear);
      // for (i=0; i<8; i++){
      //    for (j=0; j<8; j++){
      //   if (cardNumber[i] == cardGolos[j]){
      //    resultGolosFull[i]++;
      //   } 
      // }
      // }
      // console.log ("resultGolosFull "+resultGolosFull);
      // var cardKill = resultGolosFull.indexOf(Math.max.apply(Math, resultGolosFull));
      
      
      
      
         var cardKill = Math.ceil(Math.random()*8);
         let cardKillNum = cardNumber.indexOf(cardKill);
       while (cardNumber[cardKillNum] == null){
         cardKill = Math.ceil(Math.random()*8);
         cardKillNum = cardNumber.indexOf(cardKill);
       }

      
      
      console.log ("cardKill "+cardKill);
      //let cardKillNum = cardNumber.indexOf(cardKill)+1;
      console.log("cardKillNum "+cardKillNum);
      round[numerLog] = "При голосовании убили игрока №" + (cardKillNum+1) + ". Наступила ночь.";
      console.log(cardNumber[cardKillNum]);
      
      
      numerLog++;
           
      if (cardNumber[cardKillNum] == 3 || cardNumber[cardKillNum] == 6){
      //let cardKillNum = cardNumber.indexOf(cardKill)+1;
      console.log ("cardKillNum "+cardKillNum);
      document.getElementById('c'+(cardKillNum+1)).className = "cardmafdead";
      document.getElementById('c'+(cardKillNum+1)).style.border = "0px solid red";
      } else {
         //let cardKillNum = cardNumber.indexOf(cardKill)+1;
         console.log ("cardKillNum "+cardKillNum);
         document.getElementById('c'+(cardKillNum+1)).className = "cardmirdead"
         document.getElementById('c'+(cardKillNum+1)).style.border = "0px solid red";
      }
    
      cardNumber[cardKillNum] = null;
      
      if ((cardKill) == yourChoiceDead){
         round[numerLog] = "К сожалению Вас убили";
         numerLog++;
         //let cardKillNum = cardNumber.indexOf(cardKill)+1;
         document.getElementById('c'+(cardKillNum)).style.border = "3px solid red";
         let endGame = confirm("К сожалению Вас убили. Хотите продолжить?");
            if (endGame == false) {
               document.getElementById ('wrap').style.display="none";
               document.getElementById ('wraphome').style.display="flex";
               document.location.reload();
               return;
         }
      }
         console.log ("cardNumber2 "+cardNumber);
         let cardKillMafNum = -1;
         while (cardKillMafNum == -1 || cardNumber[cardKillMafNum] == 3 || cardNumber[cardKillMafNum] == 6){   
         var mafGolos1 = Math.ceil(Math.random()*8);
            console.log("mafGolos1 "+mafGolos1);
            cardKillMafNum = cardNumber.indexOf(mafGolos1);
            console.log("cardKillMafNum "+cardKillMafNum);
            console.log("cardNumber[cardKillMafNum] "+cardNumber[cardKillMafNum]);
            if (counterRound == 5) break;
            }
      
      
         //    do {
      //    var mafGolos1 = Math.ceil(Math.random()*8);
      //    console.log("mafGolos1 "+mafGolos1);
      //    let cardKillMafNum = cardNumber.indexOf(mafGolos1);
      //    console.log("cardKillMafNum "+cardKillMafNum);
      //    if (counterRound == 5) break; 
      // }  while (cardNumber[cardKillMafNum] == null || cardNumber[cardKillMafNum] == 3 || cardNumber[cardKillMafNum] == 6);
      //           console.log ("mafGolos "+mafGolos1);
      //                                                                      //Скорее всего ошибка где-то здесь!!!
      //        console.log ("cardNumber[mafGolos1] "+cardNumber[mafGolos1-1]);
             
      
      round[numerLog] = "Ночью мафия убила игрока №" + (cardKillMafNum+1);
      
      cardNumber[cardKillMafNum] = null;
      numerLog++;
      
      
      document.getElementById('c'+(cardKillMafNum+1)).className = "cardmirdead";
      document.getElementById('c'+(cardKillMafNum+1)).style.border = "0px solid red";

      if ((mafGolos1) == yourChoiceDead){
         round[numerLog] = "К сожалению Вас убили";
         numerLog++;
         document.getElementById('c'+(cardKillMafNum+1)).style.border = "3px solid red";
         let endGame = confirm("К сожалению Вас убили. Хотите продолжить?");
         if (endGame == false) {
               document.getElementById ('wrap').style.display="none";
               document.getElementById ('wraphome').style.display="flex";
               document.location.reload();
               return;
         }
      }
         
      round[numerLog] = " Наступил день. После бурных дебатов...";
      numerLog++;
      round[numerLog] = " ... выберите за кого голосовать";
      numerLog++;
      
      result = cardNumber.filter(function (x) {
               return x !== null;
               });
               console.log ("result "+result);
      
               if (counterRound == 3){
      round[numerLog] = (result[0] == 3) ? "Выиграла МАФИЯ":
                        (result[0] == 6) ? "Выиграла МАФИЯ":
                        (result[1] == 3) ? "Выиграла МАФИЯ":
                        (result[1] == 6) ? "Выиграла МАФИЯ":
                        "Выиграли МИРНЫЕ ЖИТЕЛИ";
          }
      yourChoiceClick = yourCardNum;
      document.getElementById('c'+(yourCardNum)).style.border = "0px solid green";
   
   let outRound = document.getElementById('outRound');
   let str = ' ';      
   for (let i = 0; i< round.length; i++  ) {
if (round[i]!==undefined) str +=i+'. '+round[i]+'<br>';
}
 outRound.innerHTML = str;

   counterRound++;
}   