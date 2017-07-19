import axios from 'axios';


class ApiHelpers {
	constructor(){
		this.instance = axios.create({
			headers : {'Content-type' : 'application/json'}
		})
	}

	get(url, options={}){
		return this.instance.get(url)
	}

	post(url, body, options={}){
		return this.instance.post(url, body)
	}

}

export default new ApiHelpers();