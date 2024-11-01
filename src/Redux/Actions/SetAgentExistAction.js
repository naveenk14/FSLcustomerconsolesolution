import * as Types from '../ActionTypes'
export const setAgentexist = ({is_agent}) => (
    {
    type: Types.SET_AGENT_EXIST,
    payload: is_agent,
  });