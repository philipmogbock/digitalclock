// define variables
const hourEl = document.getElementsByClassName("hour")[0];
const minEl = document.getElementsByClassName("minute")[0];
const secEl = document.getElementsByClassName("second")[0];
const ampmEl = document.getElementsByClassName("ampm")[0];

// define function
function updateClock() {
    // use date contructor to get current time values
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    //use logic to get AM or PM
    let ampm = "AM"
    //first check basically makes sure were using a 12 hr clock not a 24 hr one
    if (h > 12){
        h = h - 12;
        ampm = "PM";
    }
    //logic for adding a 0 infront of single digit numbers 
    if (h < 10){
        h="0"+h;
    }
    //ternary operator, does the same thing as if logic above
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    // change the time texts to reflect what theyre called in our logic
    hourEl.innerText = h;
    minEl.innerText = m;
    secEl.innerText = s;
    ampm.innerText = ampmEl;

    //update the clock every 1000
    //setTimeout exectutes a function everytime the timer expires, so in this case every 1000ms/1s
    //so itll execcute everything until the line before you call it
    setTimeout(()=>{updateClock()}, 1000) ;
}
// call function to update the clock
updateClock()