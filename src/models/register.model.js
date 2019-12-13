import * as yup from 'yup';
let register = yup.object().shape({
	name: yup.string().min(2).max(30).required(),
	username: yup.string().min(2).max(30).required(),
    password: yup.string().min(6).max(16).required(),
    birthDate:yup.date().required(),
    gender:yup.string(),
    about:yup.string()
});

export default register;