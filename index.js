// Code your solution here
function findMatching(drivers, name){
    const lowerCaseName = name.toLowerCase();
    return drivers.filter( driver => driver.toLowerCase() === lowerCaseName)
}

function fuzzyMatch(drivers, letters){
  return drivers.filter(driver => driver.startsWith(letters));
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name)
}
