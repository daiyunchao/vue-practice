import Vue from 'vue/dist/vue.esm';
import gd from '../data/gd';
import Common from '../data/common';
Vue.component('AddTask', {
  template: `
  <div class="add_task">
  <h3>添加任务:</h3>
  <input type="text" class="add_task_input" placeholder="请输入任务名称,回车添加" v-model="taskName" @keydown.enter="addTask()"/>
  </div>
  `,
  data() {
    return {
      taskName: ""
    }
  },
  methods: {
    addTask() {
      console.log("task name==>", this.taskName);
      let taskId = Common.randomString(16);
      gd.list.push({ id: taskId, name: this.taskName, is_complate: false });
      //同步数据
      gd.syncLocalList();
      this.taskName = "";
    }
  }
});

export default {
  name: "AddTask"
}