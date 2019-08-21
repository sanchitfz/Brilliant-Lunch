
function matchLunchEvent(input) {

    //logic
    var x = input[0].start;
    var y = input[0].end;
    var oldMeetTime = 0;
    var oldWaitTime = 0;
    var index = "No Match";

    for(var i = 1; i< input.length;i++){
        var a = input[i].start;
        var b = input[i].end;

        if( (a<y) & ((y-a)>=30) ){
            if(a<x){
                var waitTime = 0;
                var startTime = x;
                var endTime = smaller(y,b);
                var meetTime = endTime - startTime;
                if(meetTime >=30){
                    shouldFixMeeting(waitTime, meetTime, i);
                }                
            }
            else{
                var waitTime = a-x;
                var startTime = a;
                var endTime = smaller(y,b);
                var meetTime = endTime - startTime;
                if(meetTime>=30){
                    shouldFixMeeting(waitTime, meetTime, i);
                }
            }
        }
    }

    function smaller(y,b){
        if(y<b){
            return y;
        }
        else {
            return b;
        }
    }

    function shouldFixMeeting(waitTime, meetTime,i) {
        if(meetTime > oldMeetTime){
            oldMeetTime = meetTime;
            oldWaitTime = waitTime;
            index = i;
        }
        else if(meetTime == oldMeetTime){
            if(waitTime < oldWaitTime){
                oldMeetTime = meetTime;
                oldWaitTime = waitTime;
                index = i;
            }
        }

    }

    return index;
}

function returnHour(min){
    var tmp = 540 + min;
    return Math.floor(tmp/60);
}

function returnMin(min){
    var tmp = 540 + min;
    return tmp%60;
}
    