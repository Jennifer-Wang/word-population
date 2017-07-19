import moment from 'moment';

export const getToday = () =>{
	return moment().format('YYYY-MM-DD');
};