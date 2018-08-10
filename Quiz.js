var questionDetails={
	
	question :[
	{
		statement:"1)What is the Capital of India ??",
		options:[
		{
			value :["Delhi", "Mumbai", "Chennai", "Kolalta"],
      selected : true,
      correctAnswer : 0
		}
		]
		
  },
  {
		statement:"2)Who won the 2014 FIFA World cup?",
		options:[
		{
			value :["France", "Spain", "Germany", "Argentina"],
      selected : true,
      correctAnswer : 2
		}
		]
		
	}]
	
};
var next = true;
//ON Load Function
window.onload=function() {
	console.log("inside onload!");
      var fiveMinutes = 60 * 0.25,
        display = $('#time');
        
            startTimer(fiveMinutes, display);
            setQuestion();
}
function startTimer(duration, display) {
  if(next==true) {
      
  }
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
  $('#question').html(questionDetails.question[currentQuestion].statement);
  var choices=questionDetails.question[currentQuestion].options[0].value;
  console.log(questionDetails);
  var display = '';
  for (var i = 0; i < choices.length; i++) {
    display += '<div><input type="radio" name="option" value="' + i + '"><label for="' + i + '">' + choices[i] + '</label></div><br/>';
  }
  $('#form').html(display);
   $(function(){
    $("input[type='radio']").change(function(){
        $("input[type='submit']").prop("disabled", false);
    });	 
 });
}

function check() {
  if($("input[name=option]:checked").val() == questionDetails.question[currentQuestion].options[0].correctAnswer) {
    crctCount ++;
    console.log(crctCount);
  }
}

function result() {
    $('#result').html("You got "+ crctCount + " of them Correct !!");
    var marks=crctCount*10;
    var ctx = document.getElementById('mychart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Total"],
            datasets: [{
                label: "Total Marks",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [marks],
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
}
function next() {
	
  check();
  currentQuestion++;
  if(currentQuestion< questionDetails.question.length) {
      setQuestion();
  }
  if (currentQuestion == questionDetails.question.length){
      next=false;
      alert("Quiz Over");
      result();
  }
}
function submit() {
  var txt;
  if (confirm("Press a button!")) {
    check();
    result();
  }

}
function previous() {
  currentQuestion--;
  setQuestion();
}



