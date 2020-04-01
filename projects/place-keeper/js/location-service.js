'use-strict'
var gLocations

const KEY = 'locations'

function createLocations() {
    var locations = loadFromStorage(KEY)
    if (!locations || !locations.length || locations === null) locations = [];
    gLocations = locations;
    _saveLocationsToStorage();
}

function getLocations() {
    return gLocations
}

function getLocationById(locationId) {
    return gLocations.find(location => locationId === location.id)
}

function addLocation(location) {
    gLocations.push(location)
    _saveLocationsToStorage();
}

function deleteLocation(locationId) {
    var location = getLocationById(locationId)
    gLocations.splice(location, 1)
    _saveLocationsToStorage()
}

function _saveLocationsToStorage() {
    saveToStorage(KEY, gLocations);
}