window.addEventListener("load", () => {
  let long;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const proxy = `http://cors-anywhere.herokuapp.com/`;
      const api = `${proxy}https://api.openweathermap.org/data/2.5/weather?q=London&appid=d45f2d14ebbbd97840c1bfb5cdd96da4`;

      fetch(api)
        .then (response => {
          return response.json();
        })
        .then(data => {
          console.log(data);
        });
    });
    //   } else { 
    //     h1.textContent = "No, no, no";
    //   }
    // fetch(api)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   });
  }
});
