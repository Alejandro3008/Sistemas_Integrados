function verifyString(value){
    if(!value) return false;
    if(typeof value !== "string") false;
    return true;
}

function verifyNumber(value){
    if(!value) return false;
    if(typeof value !== 'number') return false;
    return true;
}

function checkLength(size,value){
    if(value.length<=size) return false;
    return true;
}

module.exports = {verifyString,verifyNumber,checkLength}