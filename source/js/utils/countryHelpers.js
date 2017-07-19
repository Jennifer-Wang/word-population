export const shortestCountryNames = (countries)=>{
	let result = [];
	countries.forEach((el, i)=>{
		if(el.toUpperCase() === el){
			return;
		}
		if(i === 0 || result[0].length === el.length){
			result.push(el);
		} else if (result[0].length > el.length){
			result = [el];
		}
	});
	return result;
};