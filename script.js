$(document).ready(function() {

	function numDisplay () {

		var n = prompt("Enter a number", "0");	

		if (isNaN(n)){
				alert('The value supplied is not a number');
				console.log('N ISNT a Number');
				numDisplay();
		} else if(n % 1 != 0){
				console.log('N IS a Decimal');
				alert('The value supplied cannot be a decimal');
				numDisplay();
		} else {
				console.log('Else Command');
				
				function FB() {
	
					for (var i = 1; i <= n; i++) {
		
						var counter = i

						if ((counter % 3 === 0) && (counter % 5 === 0)){
							document.write("FizzBuzz <br />");
						} else if (counter % 3 === 0){
							document.write("Fizz <br />");
						} else if (counter % 5 === 0){
							document.write("Buzz <br />");
						} else{
							document.write(i + "<br />");
						}
					}
				}
				
				FB();
		};


	};

	numDisplay ();

});