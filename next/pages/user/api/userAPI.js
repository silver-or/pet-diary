import axios from "axios";
const SERVER = `http://localhost:8080`
export const userSignIn = signinRequest => axios.post(`${SERVER}/user/sign-in`, signinRequest)
export const userSignUp = signupRequest => axios.post(`${SERVER}/user/sign-up`, signupRequest)