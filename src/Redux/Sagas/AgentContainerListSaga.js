import { call, put, takeLatest } from 'redux-saga/effects';
import * as Types from "../ActionTypes";
import { AgentContainerListService } from '../../Services/AgentContainerListService';

function* AgentContainerSaga({ payload }) {
  try {
    console.log('payload',payload)
    const AgentCLResponse = yield call(AgentContainerListService, payload);
    const response = AgentCLResponse.data;
    console.log('Saga received response:', response);
    console.log(response)
    yield put({
      type: Types.AGENT_CONTAINERLIST_SUCCESS,
      payload: response})
  } catch (error) {
    yield put({ type: Types.BOOKING_FAILURE, error: alert.error(error.response.data.error.message) })
  };
}


function* watchContainerList() {

  yield takeLatest(Types.AGENT_CONTAINERLIST_REQUEST, AgentContainerSaga);
}
export default watchContainerList;
