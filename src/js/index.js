import Location from './models/Location';
import Weather from './models/Weather';
import * as locationView from './views/locationView';
import * as weatherView from './views/weatherView';
import { elements} from './views/base';

const state = {};

window.s = state;


//Check if browser supports geolocation

if ("geolocation" in navigator) {

  navigator.geolocation.getCurrentPosition(setPosition, showError);

} else {
  elements.notificationElement.style.display = "block";
  elements.notificationElement.innerHTML = "<p>Browser Doesn't Support Geolocation.</p>"
}

//Set users position
let latitude;
let longitude;

function setPosition(position) {

  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  controlLocation(latitude, longitude);
    controlWeather(latitude, longitude);
}

function showError(error) {
  elements.notificationElement.style.display = "block";
  elements.notificationElement.innerHTML = `<p> ${error.message}</p>`;

}

const controlLocation = async () => {
//   create new location object and add it to state
  if (latitude, longitude){

  state.location = new Location(latitude, longitude);

  window.l = state.location

  try {

  await state.location.getLocation();

  locationView.renderLocation(state.location);


  }
  catch (err) {
      alert('Error processing location!')
    }
  }
}


const controlWeather = async () => {
  //create new weather object and save it to state
  if(latitude, longitude){
    state.weather = new Weather(latitude, longitude);
    window.w = state.weather;

      try {

      await state.weather.getWeather();


      weatherView.renderResults(state.weather)

      // weatherView.renderWeather(state)

      }
      catch (err) {
          alert('Error processing Weather!')
        }
  }
}
