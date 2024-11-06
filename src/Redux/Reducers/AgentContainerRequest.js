import { AGENT_CONTAINERLIST_FAILURE, AGENT_CONTAINERLIST_REQUEST, AGENT_CONTAINERLIST_SUCCESS } from '../ActionTypes'
const initialState = {
  error: null,
  loading: false,
  agent_container_list: {},
};
function agentContainerReducer(state = initialState, action) {
  switch (action.type) {
   
    case AGENT_CONTAINERLIST_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case AGENT_CONTAINERLIST_SUCCESS:
      console.log('AGENT_BOOKING_SUCCESS payload:', action.payload);
      return {
        ...state,
        error: null,
        loading: false,
        agent_container_list: action.payload,
      };
    case AGENT_CONTAINERLIST_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    
    default:
      return state;
  }
}
export default agentContainerReducer;