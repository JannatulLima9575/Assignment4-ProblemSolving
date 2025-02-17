// # Problem-01 : Calculate the cash-out Charge 

function cashOut( money ) {
    if (typeof money !== "number" || money < 0) {
        return "Invalid";
    }
    let charge = (money * 1.75) / 100;
    return charge;
}

let result = cashOut(2000);
console.log(result);

// # Problem-02 : Detect email  valid or not
function  validEmail( email ) {
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
