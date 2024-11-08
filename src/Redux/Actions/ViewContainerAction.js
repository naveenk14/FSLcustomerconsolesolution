import * as Types from '../ActionTypes'
export const ViewContainerAction = ({container_id}) => ({
    type: Types.VIEW_CONTAINER_REQUEST, 
    payload:{container_id} 
  });