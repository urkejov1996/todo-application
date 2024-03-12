
import { apiClient } from "./ApiClient";


// same as function above just this is arros function
export const retrieveHelloWorldBean = () => apiClient.get("/hello-world-bean");

export const retrieveHelloWorldBeanPathVariable = (username, token) =>
  apiClient.get(`/hello-world/path-variable/${username}`
//   , {
//     headers: {
//       Authorization: token
//     }
//   }
  );

export const executeBasicAuthenticationService = (token) =>
  apiClient.get(`/basicauth`, {
    headers: {
      Authorization: token,
    },
  });
