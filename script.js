let counter=0;
let hr=0,min=0,sec=0,min_sec=0;
var start;
function play(){

    if(counter%2===0){ //starting the counter
        console.log("Play button clicked")
        document.getElementById('play_pause').className="fas fa-pause";
        document.getElementById('play_pause').title = "Pause"
        start=setInterval(start_button,10)
        
    }
    else{
        document.getElementById('play_pause').className="fas fa-play";
        document.getElementById('play_pause').title = "Play"
        console.log("Pause button clciked")
        // start_button().pause_button();
        clearInterval(start)
    }
    counter++;

}

function stop(){
    console.log("Stop button clicked")
    clearInterval(start)
    hr=0,min=0,sec=0,min_sec=0
    document.getElementById("minsec").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("hr").innerHTML = "00";

    document.getElementById('play_pause').className="fas fa-play";

    counter=0;
}

// function start
let start_button = () => {
        // console.log("timer clicked wthout anything")
        min_sec++;
        
        if(min_sec===100){
            sec++;
            min_sec=0;

            if(sec<10)  document.getElementById("sec").innerHTML = "0"+sec;
            else document.getElementById("sec").innerHTML = sec;
        }
    
        if(sec===60){
            min++;
            sec=0;

            if(min<10)  document.getElementById("min").innerHTML = "0"+min;
            else document.getElementById("min").innerHTML = min;
        }
    
        if(min===60){
            hr++;
            min=0;

            if(hr<10)  document.getElementById("hr").innerHTML = "0"+hr;
            else document.getElementById("hr").innerHTML = hr;
        }
    
        if(min_sec<10)  document.getElementById("minsec").innerHTML = "0"+min_sec;
        else document.getElementById("minsec").innerHTML = min_sec;
        
}


// let pause = clearInterval(start);