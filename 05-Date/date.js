const getDaysDifference = (start, end) => {
    if(!start instanceof Date && !end instanceof Date){
        throw new Error("Inputs must be Date")
    }
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const diffInMilliseconds = end - start;
    const diffInDays = Math.floor(diffInMilliseconds / millisecondsPerDay);
    return diffInDays;
}
module.exports = {getDaysDifference}