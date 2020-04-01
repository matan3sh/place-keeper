'use-strict';

function initMap() {
    var options = {
        zoom: 13,
        center: { lat: 29.55805, lng: 34.94821 }
    };
    var map = new google.maps.Map(document.querySelector('#map'), options);
}

async function geocode(e) {
    var location = document.querySelector('#location-input').value;
    axios
        .get('https://maps.googleapis.com/maps/api/geocode/json', {
            params: {
                address: location,
                key: 'AIzaSyAu4wgjOGVqaz0cBDpsLy8EX2hp-uCh4lE'
            }
        })
        .then(function (response) {
            var fullName = response.data.results[0].formatted_address;
            var area = response.data.results[0].address_components[2].long_name;
            var country = response.data.results[0].address_components[3]
                ? response.data.results[0].address_components[3].long_name
                : response.data.results[0].address_components[2].long_name;
            var lat = response.data.results[0].geometry.location.lat;
            var lng = response.data.results[0].geometry.location.lng;
            var location = {
                id: makeId(),
                fullName,
                area,
                country,
                lat,
                lng
            };
            handleLocation(location);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function setLocationAtMap(lng, lat) {
    var options = {
        zoom: 13,
        center: { lat, lng }
    };
    var map = new google.maps.Map(document.querySelector('#map'), options);
}