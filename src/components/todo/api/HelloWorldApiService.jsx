import axios from "axios"

export function retrieveHelloWorldBean() {
    return axios.get('http://localhost:8080/hello-world-bean')
}

// same as function above just this is arros function
// export const retrieveHelloWorldBean =  () => axios.get('http://localhost:8080/hello-world-bean')