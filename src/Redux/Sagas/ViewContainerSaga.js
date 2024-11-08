import { call, put, takeLatest } from 'redux-saga/effects';
import * as Types from "../ActionTypes";
import { ViewContainerService } from '../../Services/ViewContainerService';

function* ViewContainerSaga({ payload }) {
  try {
    console.log('payload',payload)
    const ContainerResponse = yield call(ViewContainerService, payload);
    const response = ContainerResponse.data;
    console.log('Saga received response:', response);
    console.log(response)
    yield put({
      type: Types.VIEW_CONTAINER_SUCCESS,
      payload: response})
  } catch (error) {
    yield put({ type: Types.VIEW_CONTAINER_FAILURE, error: alert.error(error.response.data.error.message) })
  };
}


function* watchViewContainer() {
  yield takeLatest(Types.VIEW_CONTAINER_REQUEST, ViewContainerSaga);
}
export default watchViewContainer;