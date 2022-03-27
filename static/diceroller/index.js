function generateNumber() {
    
    let firstnumber = Math.floor(Math.random() * 6) + 1; 
    let secondnumber = Math.floor(Math.random() * 6) + 1;
    let thirdnumber = Math.floor(Math.random() * 6) + 1; 
    let fourthnumber = Math.floor(Math.random() * 6) + 1;  
    let fifthnumber = Math.floor(Math.random() * 6) + 1;  

    //console.log("You rolled " + number); 
    document.getElementById('diceoneresult').innerHTML = firstnumber;
    document.getElementById('dicetworesult').innerHTML = secondnumber;
    document.getElementById('dicethreeresult').innerHTML = thirdnumber;
    document.getElementById('dicefourresult').innerHTML = fourthnumber;
    document.getElementById('dicefiveresult').innerHTML = fifthnumber;
    document.getElementById('totalresult').innerHTML = firstnumber + secondnumber + thirdnumber + fourthnumber + fifthnumber;
    document.getElementById('demo').innerHTML = "You rolled a " + firstnumber + ", a " + secondnumber + ", a " + thirdnumber + ", a " + fourthnumber + ", and a " + fifthnumber; 
    
}

function myFunction() {
    var x = document.getElementById("buttonid").autofocus;
    document.getElementById("buttonid").innerHTML = x;
  }