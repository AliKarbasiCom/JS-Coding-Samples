function getAverage(a,b) {

    var average = (a + b) / 2; //Local variable
    return average;

}

var myResult = getAverage(200,25); //global variable

function logResult() {

    console.log("The average is: " + myResult);

}

logResult();
