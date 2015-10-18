
var wordsArray = ["Afghanistan","Albania","Algeria", "Andorra", "Angola","Argentina","Armenia",
"Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin",
"Bhutan","Bolivia","Botswana","Brazil","Brunei","Bulgaria","Burundi","Cambodia","Cameroon",
"Canada","Chad","Chile","China","Colombia","Comoros","Croatia","Cuba","Cyprus","Denmark",
"Djibouti","Ecuador","Egypt","Eritrea","Estonia","Ethiopia","Fiji","Finland","France","Gabon",
"Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guyana","Haiti",
"Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica",
"Japan","Jordan","Kazakhstan","Kenya","Kuwait","Laos","Latvia","Lebanon","Lesotho","Liberia",
"Libya","Liechtenstein","Lithuania","Luxembourg","Macedonia","Madagascar","Malawi","Malaysia",
"Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco",
"Mongolia","Montenegro","Morocco","Mozambique","Namibia","Nauru","Nepal","Netherlands",
"Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama",
"Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Samoa",
"Senegal","Serbia","Singapore","Slovakia","Slovenia","Somalia","Spain","Sudan","Suriname",
"Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Tonga","Tunisia",
"Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","Uruguay","Uzbekistan","Vanuatu",
"Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"];

var guessCount = 0;
var guessesLeft = 10;
var guessedArray =[];
var wordToGuess = "";
var underscores = ""; 


$('#letterButtons').children().hide();
$('.getAnswerButton').hide();
$('#newGame').hide();
$('.guessedLetters').hide();

if(guessCount === 0){
  $('.1, .2, .3, .4, .5, .6, .7, .8, .9, .10').hide();
}

function init(){
  $('.newWordButton').click(function(){
    $('.letter').css({"background-color" : "white"});
    $('#newGame').show();
    $('#letterButtons').children().show();
    $('.guessedLetters').show();
    $('.newWordButton').hide();
    $('.getAnswerButton').show();
    wordToGuess = wordsArray[Math.floor(Math.random() * wordsArray.length)].toUpperCase();
    underscores = wordToGuess.replace(/\w/g, "-"); 
    $('.empty').append(underscores);
  });       
  $('.getAnswerButton').click(function(){
    $('.answer').append("The word was: " + wordToGuess);
    $('#letterButtons').children().attr('disabled', 'disabled');
    $('.getAnswerButton').attr('disabled', 'disabled');
  });            
  $('.letter').click(function(e){
    var pressedLetter = e.target.innerHTML;  //change to this for keypress: var pressedLetter = String.fromCharCode(e.which);            
    $(this).css({"background-color" : "lightblue"});
    var doesLetterMatch = wordToGuess.indexOf(pressedLetter);
    if (doesLetterMatch === -1){
      guessCount++;
      guessesLeft--;
      guessedArray.push(pressedLetter);
      $('.guessedLetters').append(pressedLetter);
    }else{               
      underscores = underscores.split('').map(function(char, index){
          return wordToGuess[index] === pressedLetter ? pressedLetter : char;
      }).join('');
      $('.empty').text(underscores);              
    }
    $('h5').text('You have ' + guessesLeft + ' guesses left');
    //change hangman photos based on incorrect answer
    if(guessCount === 1){
      $('.1').show();
      $('.0, .2, .3, .4, .5, .6, .7, .8, .9, .10').hide();
    }else if(guessCount === 2){
      $('.2').show();
      $('.0, .1, .3, .4, .5, .6, .7, .8, .9, .10').hide();
    }else if(guessCount === 3){
      $('.3').show();
      $('.0, .1, .2, .4, .5, .6, .7, .8, .9, .10').hide();
    }else if(guessCount === 4){
      $('.4').show();
      $('.0, .1, .2, .3, .5, .6, .7, .8, .9, .10').hide();
    }else if(guessCount === 5){
      $('.5').show();
      $('.0, .1, .2, .3, .4, .6, .7, .8, .9, .10').hide();
    }else if(guessCount === 6){
      $('.6').show();
      $('.0, .1, .2, .3, .4, .5, .7, .8, .9, .10').hide();
    }else if(guessCount === 7){
      $('.7').show();
      $('.0, .1, .2, .3, .4, .5, .6, .8, .9, .10').hide();
    }else if(guessCount === 8){
      $('.8').show();
      $('.0, .1, .2, .3, .4, .5, .6, .7, .9, .10').hide();
    }else if(guessCount === 9){
      $('.9').show();
      $('.0, .1, .2, .3, .4, .5, .6, .7, .8, .10').hide();
    }
    if (guessCount === 10){
      confirm("Sorry, you have lost the game! The word you were trying to guess was: " + wordToGuess + "! Do you want to play again?");
      $('.answer').append("The word was: " + wordToGuess);
      $('#letterButtons').children().attr('disabled', 'disabled');
      $('.getAnswerButton').attr('disabled', 'disabled');
      //edit photo
      $('.10').show();
      $('.0, .1, .2, .3, .4, .5, .6, .7, .8, .9').hide();           
    }
    if(wordToGuess === underscores){
      alert("Congratulations! You guessed the word! I bet you want to play again!")
      $('#letterButtons').children().attr('disabled', 'disabled');
      $('.getAnswerButton').attr('disabled', 'disabled');
     }            
  });  
}
$(document).ready(init);


