var cookie = 0
var clickers = 0
var clicker_value = 5

function cookie_update(){
    document.getElementById("cookie").innerHTML = cookie
    
}
function cookie_click(){
    console.log("cookie clicado")
    cookie +=1
    cookie_update()
    document.getElementById("cookie_img").setAttribute("width", "480px")
    setTimeout(() => {
        document.getElementById("cookie_img").setAttribute("width", "");
      }, "100");

}

function handler(e) {
    e = e || window.event;
    var pageX = e.pageX;
    var pageY = e.pageY;
    if (pageX === undefined) {
        pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    console.log(pageX, pageY);
    placeDiv(pageX - 100, pageY - 100)
}

//if (document.attachEvent) document.attachEvent('onclick', handler);
//else document.addEventListener('click', handler);
function placeDiv(x_pos, y_pos) {
    var d = document.getElementById("bola");
    d.style.position = "absolute";
    d.style.left = x_pos+'px';
    d.style.top = y_pos+'px';
}

function clicker_buy(){
    if (cookie >= clicker_value){
        clickers +=1
        cookie -= clicker_value
        cookie_update()
        clicker_value += Math.round(clickers*0.5)
        document.getElementById("clicker_botao").setAttribute("value", clicker_value + " - clicker " + clickers)
        clicker()
        }
  }
function second_timer(){
    window.setTimeout(second_timer, 1000)
}
function clicker(){
    setTimeout(() =>{
        cookie++
        cookie_update()
        clicker()
        console.log("+1 cookie")
    }, 1000)
}