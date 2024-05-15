var cookie = 0
var clickers = 0
var clicker_value = 5
function cookie_click(){
    cookie +=1
    document.getElementById("cookie").innerHTML = cookie

}
function oneSecondTimer() {
    if (cookie >= clicker_value){
        clickers +=1
        document.getElementById("clicker").innerHTML = clickers
        // Set the initial time to 0
        let startTime = Date.now();
    
        // Start the timer loop
        setInterval(() => {
        // Get the current time
        let currentTime = Date.now();
    
        // Calculate the elapsed time in seconds
        let elapsedSeconds = Math.floor((currentTime - startTime) / 1000);
    
        // Log the elapsed time to the console
        console.log(`Elapsed time: ${elapsedSeconds} seconds`);
    
        // If the elapsed time is greater than or equal to 1 second, reset the timer
        if (elapsedSeconds >= 1) {
            cookie +=1
            startTime = currentTime;
            document.getElementById("cookie").innerHTML = cookie

        }
        }, 1000); // Set the interval to 1000 milliseconds (1 second)
    }
    
  }
  
  // Call the function to start the timer
