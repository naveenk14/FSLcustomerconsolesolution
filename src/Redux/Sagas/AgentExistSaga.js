import { takeLatest, put } from "redux-saga/effects";
import * as Types from "../ActionTypes";

function* handleAgentExist(action) {
    console.log(action)
  const { payload: agent_exist } = action;
  // Handle side effects here if needed, e.g., logging, storing in localStorage, etc.
  console.log("agent exist value received and stored in Redux:", agent_exist);
  // Example: yield call(api.storeSaasid, saasid);
  localStorage.setItem("is_agent",JSON.stringify(agent_exist))
}

export function* watchAgentExist() {
  yield takeLatest(Types.SET_AGENT_EXIST, handleAgentExist);
}