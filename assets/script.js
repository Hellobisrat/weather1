const apiKey="0823ca51bb98d1335fedc9d8d2f1f04c"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?q=";
const Url5day="https://api.openweathermap.org/data/2.5/forecast?q=";
const temp =document.querySelector('#temp');
const wind =document.querySelector('#Wind');
const Hum =document.querySelector('#Hum');
const Name =document.querySelector('#city1')
const input = document.querySelector('#input');
const button =document.querySelector('#button');
const display = document.querySelector('.display')
function checkWeather(city){

  fetch(apiUrl+city+`&appid=${apiKey}`)
  .then(function(response){
    return response.json()
  })
  .then(function(data){
    console.log(data)
  
   console.log(data.main.name)
   
   // city1.innerHTML= data.name
   
   temp.innerHTML='temp: '+data.main.temp
   wind.innerHTML='speed:'+data.wind.speed
   Hum.innerHTML='humidity:'+data.main.humidity
   

  })
}


function nextdaysweather(city) {
  fetch(Url5day+city+`&appid=${apiKey}`)
  .then(function(response){
    return response.json()
  })
  .then(function(data){

    console.log(data)
    const forecast = data.list
    console.log(forecast)
    const today = new Date()


     
    for(var i=7;i<forecast.length;i=i+8){
      today.setDate(today.getDate()+1)
      console.log(today)
      var day=Math.floor(i/8)
      document.querySelector("#temp"+day).innerHTML='Temp: '+forecast[i].main.temp + ""
     document.querySelector('#wind'+day).innerHTML='speed:'+forecast[i].wind.speed + " km/hr"
     document.querySelector('#hum'+day).innerHTML='Humd:'+forecast[i].main.humidity + " %"
   

    }
    
  })
  
}

button.addEventListener('click',function(){
  const city = input.value
  Name.innerHTML='city: '+ city
  checkWeather(city);
  nextdaysweather(city);
  localStorage.setItem('list'+Math.floor(Math.random() * 10), input.value);
  var newbutton =document.createElement('button')
  newbutton.innerHTML=localStorage.getItem('list'+Math.floor(Math.random() * 10))
  display.appendChild(newbutton)
 
 })






