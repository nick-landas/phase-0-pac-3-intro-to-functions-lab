function shout(string) {
    return string.toUpperCase();
  }
  
function whisper(string) {
    return string.toLowerCase();
  }  
function logShout(_string) {
    console.log(_string.toUpperCase());
}
function logWhisper(_string) {
    console.log(_string.toLowerCase());
}



function sayHiToHeadphonedRoommate(string) {
    const checkForLowerCase = string === string.toLowerCase();
    const checkForUpperCase = string === string.toUpperCase();
    if (checkForLowerCase) {
        return "I can't hear you!"
    }
    
    else if (checkForUpperCase) {
        return "YES INDEED!";

    } 
    
    else if (string === "Let's have dinner together!") {
        return "I would love to!";

    }
    }