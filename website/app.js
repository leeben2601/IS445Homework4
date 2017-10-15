function myFunction() {
    const numInput = prompt('Please enter a number between 2 and 10')
    
    // alert('Your input is: ' + message)
    if (numInput >= 2 && numInput <=10) {
    const output = document.getElementById("output");
    output.innerHTML = 'Your input number is ' + numInput;
    
    //Function for Task 2 (Divide numInput by 2 and return the value for how many times it took to be less than .000001)
    function myFunction2() {
        let temp = numInput;
        let count = 0;
        while (temp >= .000001) {
            temp = temp/2;
            count = count + 1;
            document.getElementById("task").innerHTML = "The number of times to divide the number " +numInput + " by 2 to get a value less than one millionth is " + count;
        }
        
    }

    //Function for Task 3
    function myFunction3(){
        let text = "";
        let i;
        for (i = numInput; i > 0; i--) {
            for (j=1; j<=i;j++) {
            text += "*";
            }
            text += "<br>";
        }
        document.getElementById("task2").innerHTML = text;
        }

    myFunction2();
    myFunction3();
    } 	else {
            const output = document.getElementById("task3");
            output.innerHTML = 'Your input number is ' + numInput + ". The valid input number is between 2 and 10. Please reload this page and try again."
            document.getElementById("task2").style.display = "none";
        }
    }
myFunction();