import axios from 'axios'
const API_KEY = 'f0bca41afd511e6a123ce6d62bf8a45a'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`
export FEATCH_WEATHER = 'FEATCH_WEATHER';
export function featchWether(city){
	const url = `${ROOT_URL}&q=${city},us`
	const request = axios.get(url)
	return{
		type:FEATCH_WEATHER,
		payload:request
	}
}