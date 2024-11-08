import { VIEW_CONTAINER_FAILURE, VIEW_CONTAINER_REQUEST, VIEW_CONTAINER_SUCCESS } from '../ActionTypes'
const initialState = {
  error: null,
  loading: false,
  viewContainerData: {},
};
function ViewContainerReducer(state = initialState, action) {
  switch (action.type) {
   
    case VIEW_CONTAINER_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case VIEW_CONTAINER_SUCCESS:
      console.log('VIEW_CONTAINER_SUCCESS payload:', action.payload);
      return {
        ...state,
        error: null,
        loading: false,
        viewContainerData: action.payload,
      };
    case VIEW_CONTAINER_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    
    default:
      return state;
  }
}
export default ViewContainerReducer;