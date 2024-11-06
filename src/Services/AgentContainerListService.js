import axios from "axios";
import { environment } from "../Environment/Environment";
import Cookies from "js-cookie";

const baseURL = environment.serverURL;

export function AgentContainerListService({ payload }) {
  
  const authToken = Cookies.get("jwtToken")
  
  return axios({
    method: "POST",
    url: baseURL + "container_list",
    headers: {
      auth_token: authToken, 
    },
    data: payload,
  });
}
