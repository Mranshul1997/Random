let getColor = () => 
{
    //* HEX CODE
    let randomNumber = Math.floor(Math.random() * 16777315);
    let randomCode = "#" + randomNumber.toString(16);
    document.body.style.background = randomCode;
    document.getElementById("colorCode").innerText = randomCode
    // console.log((randomCode )); 

    // navigator.clipboard.writeText(randomCode)

}
//EVENT CALL RUNS ON 'CLICK' EVENT
document.getElementById("Btn").addEventListener(
    "click",getColor
)
//INITIAL CALL RUNS ON EVERYTIME WHEN PAGE GOT REFRESH 
getColor()