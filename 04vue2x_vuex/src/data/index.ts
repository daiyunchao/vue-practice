import Vue from 'vue';
import Vuex from 'vuex';
import { IDataItem, IState,showStatus } from './dataStruct';
import actions from './action'
import mutations from './mutations';
const { Store } = Vuex;
Vue.use(Vuex);
let state: IState = {
  dataList: [],
  current_show_status:showStatus.allTask
}
export default new Store({
  strict: true,
  state,//数据存放处
  mutations: mutations,
  actions: actions,
})
