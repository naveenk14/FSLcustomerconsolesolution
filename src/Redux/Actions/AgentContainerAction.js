//BookingAction

import * as Types from '../ActionTypes'
export const agentCLRequest = ({payload}) => ({
    type: Types.AGENT_CONTAINERLIST_REQUEST,
    payload:{payload}
  });