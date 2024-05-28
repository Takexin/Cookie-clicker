var cookie = 0
var clickers = 0
var clicker_value = 5
function cookie_click(){
    cookie +=1
    document.getElementById("cookie").innerHTML = cookie
    document.getElementById("cookie_img").setAttribute("width", "480px")
    setTimeout(() => {
        document.getElementById("cookie_img").setAttribute("width", "");
      }, "100");

}
function oneSecondTimer() {
    if (cookie >= clicker_value){
        clickers +=1
        cookie -= clicker_value
        clicker_value += Math.round(clickers*0.5)
        document.getElementById("clicker_botao").setAttribute("value", clicker_value + " - clicker " + clickers)
        
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

function handler(e) {
    e = e || window.event;

    var pageX = e.pageX;
    var pageY = e.pageY;

    // IE 8
    if (pageX === undefined) {
        pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    console.log(pageX, pageY);
    placeDiv(pageX - 100, pageY - 100)
}

// attach handler to the click event of the document
if (document.attachEvent) document.attachEvent('onclick', handler);
else document.addEventListener('click', handler);
function placeDiv(x_pos, y_pos) {
    var d = document.createElement("img").setAttribute("src", "img/Baking_delicious_chocolate_chip_cookies_top_view_-1-removebg-preview.png");
    d.style.position = "absolute";
    d.style.left = x_pos+'px';
    d.style.top = y_pos+'px';
  }