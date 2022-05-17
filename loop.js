// node myFile.js

// New timers, tasks, operations are recorded from myFile running
myFile.runContents();

const pendingTimers = [ ];
const pendingOsTasks = [ ];
const pendingOperations = [ ];

function shouldContinue() {
    // Check one: Any pending setTimeout, setInterval, setImmediate
    // Check two: Any pending OS tasks? (Like server listening on port)
    // Check three: Any pending long running operation ? (Like fs module)''

    return pendingTimers.length ||  pendingOsTasks.length || pendingOperations.length
}
// Entire body executes in one 'tick'
while(shouldContinue()) {
    // 1) Node looks at pendingTimers and sees if any function
    // are ready to be called. setTimeout setInterval

    // 2) Node looks at pendingOSTasks and pendingOperations
    // and calls relevant callbacks

    // 3) Pause execution. Continue when...
    // - a new PendingOSTask is done
    // -a new pendingOperation is done
    // -a timer is about to complete

    // 4) Look at pendingTimers. call any setImmediate

    // Handle any 'close' event



}


// exit back to terminal