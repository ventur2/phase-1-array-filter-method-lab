function findMatching(drivers,string){
return drivers.filter(function(element){
    return element.toUpperCase() === string.toUpperCase()
})
}

function fuzzyMatch (drivers,string){
    return drivers.filter(function(element){
        return element.toUpperCase().substring(0,2) === string.toUpperCase()
    })
}
function matchName(drivers,string){
return drivers.filter(function(driver){return driver.name === string})
}

