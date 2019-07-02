import { IDataItem, IState, showStatus } from './dataStruct';
import Common from './Common'
export default {
  addTask(store, name: string) {
    let { commit } = store;
    let taskObj: IDataItem = {
      taskId: Common.randomString(16),
      name,
      is_complate: false
    }
    commit('addTask', taskObj);
    console.log("store",store);
    
    Common.syncDataToLocalStorage(store);
  },
  changeCurrentStatus(store, status: showStatus) {
    let { commit } = store;
    commit('changeCurrentStatus', status);
    Common.syncDataToLocalStorage(store);
  },
 

  
  setDataList({ commit }) {
    let List = Common.getDataFromLocalStorage();
    commit('setDataList', List);
  }



}