import React from 'react';

class Weather extends React.Component{
	constructor(props){
		super(props);
		this.api_key = 'cfad052616b088d0e6ad65726046a777'
		this.state = {temperature: null, city: "loading..."}
	}

//Invoked immediately after a component is mounted.
	componentDidMount(){

		// To grab the current location
		navigator.geolocation.getCurrentPosition((pos)=>{
			this.pos = {
				lat: pos.coords.latitude,
				long: pos.coords.longitude
				};
		// Find the weather using the current location
			$.ajax({
				method:'GET',
				url:`http://api.openweathermap.org/data/2.5/weather?lat=${this.pos.lat}&lon=${this.pos.long}&APPID=${this.api_key}`,
				dataType:'json',
				success: (weather) => {
					let temperature = Math.round(((weather.main.temp) * 1.8 - 459.67)*100)/100;
					let city = weather.name;

					this.setState({temperature, city});
				}

			})
		})
	}

	render(){

		return(
			<div className="widget col-1-2">

				<h1>Weather</h1>
				<div className="weather-box cf">
					<h2 className='weather-row'>{this.state.city}</h2>
					<h2 className="weather-row">{this.state.temperature}</h2>
				</div>
			</div>
			)
	}

}

export default Weather;