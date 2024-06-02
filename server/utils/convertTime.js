function calculateTotalHours(startTime, endTime) {

    // Parse the date strings into Date objects

    let startDate = new Date(startTime)

    let endDate = new Date(endTime)

 

    // Calculate the difference in milliseconds

    let timeDifference = endDate - startDate;

 

    // Convert milliseconds to hours

    let totalHours = timeDifference / (1000 * 60 * 60);

 

    return totalHours;

}

 

module.exports = {
    
    calculateTotalHours
    
}