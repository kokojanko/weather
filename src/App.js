import React from 'react'
import Info from './components/info'
import Form from './components/form'
import Weather from './components/weather'

const Api_key = "c5aab48683fa35d6ef2c16e16f0506bf";


class App extends React.Component{

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_key}&units=metric`);

    // var sinset = data.sys.sunset;
    // var date = new Date();
    // date.setTime(sinset);
    // var sunset_date = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    
    if(city){
      const api_url = await 
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_key}&units=metric`);
      const data = await api_url.json();

    this.setState({
      temp: data.main.temp,
      city: data.name,
      country: data.sys.country,
      pressure: data.main.pressure,
      sunset: data.sys.sunset,
      error: undefined

    });
  } else{
    this.setState({
      temp: undefined,
      city: undefined,
      country: undefined,
      pressure: undefined,
      sunset: undefined,
      error: 'Введите название города'});
  }
}

  render(){
    return(
      <div>
        <div className='wrapper'>
          <div className='main'>
            <div className="container">
              <div className="row">
                <div className='col-xs-5 info'>
                  <Info />

                  <div className='col-sm-7 form'>
                    <Form weatherMethod={this.gettingWeather} />
                    <Weather
            
                    temp ={this.state.temp}
                    city ={this.state.city}
                    country ={this.state.country}
                    pressure ={this.state.pressure}
                    sunset ={this.state.sunset}
                    error ={this.state.error}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;