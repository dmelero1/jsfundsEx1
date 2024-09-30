let now = new Date();
let endCourse = new Date(2025, 2, 20, 0); 

let diffSeconds; 

if (now >= endCourse) {
    console.log("Course is over");
} else {
    let diff = endCourse - now;
    diffSeconds = Math.floor(diff / 1000);

    console.log(`Initial seconds remaining to the end of the course: ${diffSeconds}`);

    const showRemainingSeconds = () => {
        console.log(`Seconds remaining to the end of the course: ${diffSeconds}`);
        
        diffSeconds--;

        if (diffSeconds < 0) {
            clearInterval(intervalId);
            console.log("The course has ended.");
        }
    };

    const intervalId = setInterval(showRemainingSeconds, 1000);
}
