let geolocatebtn = $("#geolocatebtn");
let clearbtn = $("#Clearbtn");
let Hospitalsbtn = $("#Hospitalsbtn");
let FireStationsbtn = $("#FireStationsbtn");
let Schoolsbtn = $("#Schoolsbtn");
let Waterfallsbtn = $("#Waterfallsbtn");
var detailedAlerts = document.getElementById('detailedAlerts')

let map;
let multiplemarkers = [];

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 43.251658, lng: -79.8315 },
    zoom: 13,
  });
}

function foundPosition(position)
{
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: { lat: parseFloat(position.coords.latitude), lng: parseFloat(position.coords.longitude) },
      });
    
      const infoWindow = new google.maps.InfoWindow({
        content: "Current Location",
    });
    const marker = new google.maps.Marker({
        position: { lat: parseFloat(position.coords.latitude), lng: parseFloat(position.coords.longitude) },
        icon: {url: "http://maps.google.com/mapfiles/ms/icons/purple-dot.png"},      
        map: map,
    });

    marker.addListener("click", () => {
        infoWindow.open({
        anchor: marker,
        shouldFocus: false,
        });
    });


    map.setCenter( { lat: parseFloat(position.coords.latitude), lng: parseFloat(position.coords.longitude) } );

    multiplemarkers.push(marker);


}
function geolocate() {
  
    navigator.geolocation.getCurrentPosition(foundPosition,showerros);
}

function showerros()
{
  detailedAlerts.innerHTML = '<div class="alert alert-danger" role="alert">' +'Error: Location could not be found' +'</div>'


  }


markersclicks = function () {
  infowindow.close();
  infowindow.setContent(this.NAME);
  infowindow.open(map, this);
};

function populateallmydata(datapass)
{

  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 43.252239, lng: -79.8315 },
    zoom: 12,
  });

  newinfomap = new google.maps.InfoWindow();
  Markerclickedinformation = function()
  {
    newinfomap.close;
    newinfomap.setContent(this.NAME)
    newinfomap.open(map,this)
  }
  for(let i = 0; i < datapass.features.length; ++i) {

    allmarker = new google.maps.Marker({
        position: { lat: parseFloat(datapass.features[i].properties.LATITUDE), 
                    lng: parseFloat(datapass.features[i].properties.LONGITUDE)},
    });

    allmarker.setMap(map);
    allmarker.NAME = datapass.features[i].properties.NAME;
    allmarker.addListener("click", Markerclickedinformation);
 
    multiplemarkers.push(allmarker);
}

}

function clear() {

  console.log("clear my data")

      for(let i = 0; i < multiplemarkers.length; ++i) {
        multiplemarkers[i].setMap(null);
      }
      multiplemarkers = [];
  }

  function fireStationsall() {

    populateallmydata(firstationdatas);
  }
  
  function hospitallsall() {
    populateallmydata(hospitalsdata);
  }
  
  function schoolsall() {
    populateallmydata(schollsdata);
  }
  
  function waterfallsall() {
    populateallmydata(waterfallsdata);
  }



geolocatebtn.click(geolocate);
clearbtn.click(clear)
FireStationsbtn.click(fireStationsall);
Hospitalsbtn.click(hospitallsall)
Schoolsbtn.click(schoolsall)
Waterfallsbtn.click(waterfallsall)

