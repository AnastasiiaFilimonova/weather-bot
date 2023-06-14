const WEATHER_API = "3b06ee73b3b48f15aeef25493a5ac92d";
var weather = require("openweather-apis");
weather.setAPPID(WEATHER_API);
weather.setLang("ru");
weather.setUnits("metric");

const getWeather = async (city) => {
  weather.setCity(city);
  return new Promise((resolve,reject) => {
    weather.getAllWeather(function (err, JSONObj) {
      if (err){
        return reject(err)
      }
      const {
        main: { temp },
        weather: [{ description }],
        wind: { speed },
        name,
      } = JSONObj;
      resolve(
        `Город: ${name}, Температура: ${temp}, ${description}, скорость ветра: ${speed} м/с`
      );
    });
  });
};
module.exports={getWeather}