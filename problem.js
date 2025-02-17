// # Problem-01 : Calculate the cash-out Charge 

function cashOut(money) {
    if (typeof money !== "number" || money < 0) {
        return "Invalid";
    }
    let charge = (money * 1.75) / 100;
    return charge;
}

let result = cashOut(2000);
console.log(result);

console.log("--------------------");


// # Problem-02 : Detect email  valid or not
function validEmail(email) {
    if (typeof email !== "string") {
        return "Invalid";
    }

    if (/^[.\-+_@]/.test(email)) {
        return false;
    }
    else if (!email.includes("@")) {
        return false;
    }
    else if (email.includes(" ")) {
        return false;
    }
    else if (!email.endsWith(".com")) {
        return false;
    }
    return true;
}

let emailResult = validEmail("lima@gmail.com");
console.log(emailResult);

console.log("--------------------");


// # Problem-03 : Who will Win  ( Mango / Banana ) 
function electionResult(votes) {
    if (!Array.isArray(votes)) {
        return "Invalid";
    }

    let mangoCount = 0;
    let bananaCount = 0;

    for (let vote of votes) {
        if (vote === "mango") {
            mangoCount++;
        }
        else if (vote === "banana") {
            bananaCount++;
        }
    }

    if (mangoCount > bananaCount) {
        return "Mango";
    }
    else if (bananaCount > mangoCount) {
        return "Banana";
    } else {
        return "Draw";
    }
}

let finalResult = electionResult(["mango", "banana", "mango", "banana", "mango"]);
console.log(finalResult);

console.log("--------------------");


// # Problem-04: Detect The Perfect Best Friend

function isBestFriend(f1, f2) {

    if (typeof f1 !== "object" || typeof f2 !== "object") {
        return "Invalid";
    }

    if (f1.bestFriend === f2.roll && f2.bestFriend === f1.roll) {
        return true;
    } 
    else {
        return false;
    }
}

let bestFriend = isBestFriend(
    { name: "Lima", roll: 1, bestFriend: 2 },
    { name: "Sultana", roll: 2, bestFriend: 1 }
);
console.log(bestFriend);

console.log("--------------------");


// # Problem-05: Let’s Calculate Video watch Time
function calculateWatchTime(times) {
    if (!Array.isArray(times)) {
        return "Invalid";
    }

    for (let time of times ) {
        if (typeof time !== "number" || time < 0) {
            return "Invalid";
        }
    }

    let totalSeconds = times .reduce((sum, time) => sum + time, 0);

    let hour = Math.floor(totalSeconds / 3600);
    let minute = Math.floor((totalSeconds % 3600) / 60);
    let second = totalSeconds % 60;

    return { hour, minute, second };
}

let watchingTime = calculateWatchTime([100, 99, 119, 300]);
console.log(watchingTime);


