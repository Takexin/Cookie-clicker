var click = 0
function click(){
    click++

    return click
}
function timer(){
    console.log("START")
    window.setTimeout(() =>{
        click = click/5
        alert(click)
    }, 5000)

}
