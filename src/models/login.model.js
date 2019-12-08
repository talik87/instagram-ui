import * as yup from 'yup';
let login = yup.object().shape({
	username: yup.string().min(2).max(30).required(),
	password: yup.string().min(6).max(16).required()
});

export default login;