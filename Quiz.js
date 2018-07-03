
var questions = [{
    question: "1)What is the Capital of India?",
    choices: ["Delhi", "Mumbai", "Chennai", "Kolalta"],
    correctAnswer: 0
  },

  {
    question: "2)Who was the first Prime Minister of India?",
    choices: ["Modi Ji", "Jawahar Lal Nehru", "Indira Gandhi", "Rajendra Prasad"],
    correctAnswer: 1
  },
  {
    question: "3)Who won the 2014 FIFA World cup?",
    choices: ["France", "Spain", "Germany", "Argentina"],
    correctAnswer: 2
  },
    {
    question: "4)How many types of premitive datatypes does java have?",
    choices: ["5", "7", "8", "9"],
    correctAnswer: 2
  }               
];

//ON Load Function
window.onload=function() {
	console.log("inside onload!");
      var fiveMinutes = 60 * 2,
        display = $('#time');
    startTimer(fiveMinutes, display);
	setQuestion();
}
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
		display.text(minutes + ":" + seconds);

       
	if(minutes==0 && seconds==0 )
    {
		result();
      alert("Quiz is Over");
    }

        if (--timer < 0) {
            timer = duration;	
        }

    }, 1000);
	
}

var currentQuestion = 0;
var crctCount=0;
var isChecked=false;

function setQuestion() {
  $('#question').html(questions[currentQuestion].question);
  var options=questions[currentQuestion].choices;
  var display = '';
  for (var i = 0; i < options.length; i++) {
    display += '<div><input type="radio" name="option" value="' + i + '"><label for="' + i + '">' + options[i] + '</label></div><br/>';
  }
  $('#form').html(display);
  $(function(){
    $("input[type='radio']").change(function(){
        $("input[type='submit']").prop("disabled", false);
    });
});
  
}

function check() {
  if($("input[name=option]:checked").val()==questions[currentQuestion].correctAnswer) {
    crctCount ++;
  }
}

function result() {
	$('#result').html("You got "+ crctCount + " of them Correct !!");
}
function next() {
  check();
  currentQuestion++;
  if(currentQuestion< questions.length) {
      setQuestion();
  }
  if (currentQuestion == questions.length){
    
      $('#result').html("You got "+ crctCount + " of them Correct !!");
      alert("Quiz Over");
  }
}
