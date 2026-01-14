// Task 1: Declare The Task Array and The Interval ID
// TODO: Begin by declaring an array to hold your one-time tasks (`oneTimeTasks`) and variables for any interval IDs you'll need for continuous tasks (`monitoringTaskId`).
let oneTimeTasks = [];
let monitoringTaskId = null;

// Task 2: Add One-Time Task Function
function addOneTimeTask(func, delay) {
    oneTimeTasks.push({ func, delay });
}

// Task 3: Run One-Time Tasks Function
function runOneTimeTasks() {
    oneTimeTasks.forEach(task => {
        setTimeout(task.func, task.delay);
    });
}

// Task 4: Start Monitoring Function
function startMonitoring() {
    monitoringTaskId = setInterval(() => {
        console.log("Monitoring system is running.");
    }, 5000); // every 5 seconds
}

// Task 5: Stop Monitoring Function
function stopMonitoring() {
    clearInterval(monitoringTaskId);
    console.log("Monitoring system has been stopped.");
}

// Task 6: Start Countdown Function
function startCountdown(duration) {
    let countdown = duration;
    const countdownInterval = setInterval(() => {
        if (countdown > 0) {
            console.log(`Countdown: ${countdown} seconds remaining.`);
            countdown--;
        } else {
            clearInterval(countdownInterval);
            console.log("Liftoff!");
        }
    }, 1000);
}

// Task 7: Schedule Pre-Launch Activities and Launch
function scheduleMission() {
    // Schedule pre-launch system check
    addOneTimeTask(() => {
        console.log("Performing pre-launch system check...");
    }, 2000); // 2 seconds delay

    // Start monitoring after system check
    addOneTimeTask(() => {
        startMonitoring();
    }, 4000); // 4 seconds delay

    // Stop monitoring and start countdown
    addOneTimeTask(() => {
        stopMonitoring();
        startCountdown(10); // 10 seconds countdown
    }, 15000); // 15 seconds delay

    // Run all one-time tasks
    runOneTimeTasks();
}

scheduleMission(); // Starts the mission.
