import { SET_AGENT_EXIST } from '../ActionTypes'

const agentExist = JSON.parse(localStorage.getItem('is_agent'));

const initialState = {
  agent_exist: agentExist || null,
};

const agentexistReducer = (state = initialState, action) => {
    console.log(action)
  switch (action.type) {
    case SET_AGENT_EXIST:
      return {
        ...state,
        agent_exist: action.payload,
      };
    default:
      return state;
  }
};

export default agentexistReducer;