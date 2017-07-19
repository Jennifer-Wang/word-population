import routes from './routes.js';
const baseUrl = routes.baseUrl;

Object.keys(routes).forEach((key)=>{
	routes[key] = baseUrl + routes[key]
});

export default routes;