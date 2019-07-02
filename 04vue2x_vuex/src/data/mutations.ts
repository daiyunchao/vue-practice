import { IDataItem, IState, showStatus } from './dataStruct';
export default {
  addTask(state: IState, taskObj: IDataItem) {
    state.dataList.push(taskObj);
  },
  changeCurrentStatus(state: IState, status: showStatus) {
    state.current_show_status = status;
  },
  setDataList(state: IState, Data: Array<IDataItem>) {
    state.dataList = Data;
  }
}