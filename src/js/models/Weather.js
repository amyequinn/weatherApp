export default class Weather {
  constructor(latitude, longitude) {
    this.latitude = latitude;
    this.longitude = longitude;


  }


  async getWeather() {

    const key = "f6b43829a6dea90e8fcf07d58ccf2766";

    const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${this.latitude}&lon=${this.longitude}&appid=${key}`;

    await fetch(api)

      .then(response => response.json())

      .then(data => {
        window.results = data
        this.results = data.daily


      })

      .catch(err => {
        alert(err);
      });

  }

}
