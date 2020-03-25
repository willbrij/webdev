var num1 = 0 
var num2 = 0 
function generateNum() {
  var x = document.getElementById("demo1")
  num1 = x.innerHTML = Math.floor((Math.random() * 20) + 1);

  var y = document.getElementById("demo2")
  num2 = y.innerHTML = Math.floor((Math.random() * 20) + 1);

};

function checkAnswer() {
	var userAnswer = document.getElementById("answer").value;
	//var x = document.getElementById("demo1").value;
	//var y = document.getElementById("demo2").value;
	var final_sum = num1 + num2;
	console.log(final_sum);
	console.log(userAnswer);
	if (parseInt(userAnswer) === final_sum) {
		alert("Hurray, Good Job!");
		}
	else {
		alert("Try Again, Get your numbers right!");
		document.getElementById("answer").value = ""
		}
		
};

