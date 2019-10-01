import axios from 'axios';

export default axios.create({
    baseURL: `http://127.0.0.1:6001/`,
    headers: {
        //'Content-Type': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': "JWT " + localStorage.getItem('token')
    },
    xsrfCookieName: 'csrftoken',
    xsrfHeaderName: 'X-CSRFToken',
    withCredentials: true
});

export const Auth = {
    login(email, pw) {
      return new Promise((resolve, reject) => {
        if (email !== 'test@test.com' || pw !== '123') return reject("err")
        const token = Math.random().toString(36).substring(2)
        localStorage.token = token
        this.onChange(true)
        console.log("api/Auth Promise");
        resolve({token})        
      })
    },
    logout() {
      return new Promise((resolve, reject) => {
        if (!this.loggedIn()) return reject("not login");
        delete localStorage.token
        this.onChange(false)
        console.log("logout", !!localStorage.token, !localStorage.token, localStorage.token);
        resolve('')
      })
    },
    loggedIn () {
        console.log("loggendIn", !!localStorage.token, !localStorage.token, localStorage.token);
        return !!localStorage.token
    },
    onChange() {}
}