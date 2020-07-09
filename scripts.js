// Write your JavaScript code here.
// Remember to pay attention to page loading!
// let liftOff = null;
// let land = null;
// let abort = null;
// let status = null;
// let bg = null;
// let height = null;

window.addEventListener('load',function() {
    liftOff = document.getElementById("takeoff");
    land = document.getElementById("landing");
    abort = document.getElementById("missionAbort");
    status = document.getElementById("flightStatus");
    bg = document.getElementById("shuttleBackground");
    height = document.getElementById("spaceShuttleHeight").innerHTML;

    liftOff.onclick = function () {
        let outcome;
        outcome = window.confirm('Confirm that the shuttle is ready for takeoff.');
        if (outcome == true) {
            status.innerHtml = 'Shuttle in flight.';
            bg.style.background = 'blue';
            let newHeight = parseInt(height, 10) + 10000;
            document.getElementById("spaceShuttleHeight").innerHTML = newHeight;
        } else {
            return;
        }

    }

    land.onclick = function () {
        window.alert("The shuttle is landing. Landing gear engaged");
        status.innerHTML = 'The shuttle has landed.';
        bg.style.background = 'green';
        // height = '0';
        console.log(height);
        let newHeight = parseInt(height, 10) - 10000;
        console.log(newHeight);
        document.getElementById("spaceShuttleHeight").innerHtml = newHeight;
        console.log(document.getElementById("spaceShuttleHeight").innerHtml);
        console.log('after reassignment',newHeight);
    }

    // abort.onclick = function () {
    //     let outcome;
    //     let outcome = window.confirm('Confirm that you want to abort the mission.');
    //     if (outcome == true) {
    //         status.innerHTML = 'Mission aborted';
    //         bg.style.background = 'green';
    //         // height.innerHTML = '0';
    //     } else {
    //         return;
    //     }
    // }


});








