'use strict'

var loading = true

function onInit() {
    createLocations()
    renderLocations()
}

function handleLocation(location) {
    addLocation(location)
    renderLocations()
}

function onAddLocation(e) {
    e.preventDefault()
    geocode()
}

function onDeleteLocation(locationId) {
    deleteLocation(locationId)
    renderLocations()
}

function renderLocations() {
    var locations = getLocations()
    var strHTML = locations.map(location =>
        `
                <tr>
                    <td>${location.fullName}</td>
                    <td>${location.area}</td>
                    <td>${location.country}</td>
                    <td><strong>Lat:</strong>${location.lat}<strong> Lng:</strong>${location.lng}</td>
                    <td>
                        <button class="btn btn-danger" onclick="onDeleteLocation('${location.id}')">Delete</button>
                    </td>
                </tr>
        `
    )
    document.querySelector('.locations-list').innerHTML = strHTML.join('')
}

