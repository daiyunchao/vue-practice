import Vue from 'vue';
import Vuex from 'vuex';
// import DataList from '../data/dataList';

const { Store } = Vuex;
Vue.use(Vuex);

interface IDataItem {
  taskId: string,
  name: string,
  is_complate: boolean
}

interface IState {
  dataList: Array<IDataItem>
}
let state: IState = {
  dataList: []
}
export default new Store({
  strict: true,
  state,//数据存放处
  mutations: {
    //修改数据的地方
    addTask(state, taskObj: IDataItem) {

    }
  },
  actions: {
    //UI调用的方法
    addTask({commit},taskName:string){

    }
  }
})
