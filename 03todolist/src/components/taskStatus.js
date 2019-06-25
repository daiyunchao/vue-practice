import Vue from 'vue/dist/vue.esm';
import gd from '../data/gd'

Vue.component('TaskStatus', {
  template: `
  <div class="task-status">
  <span v-if="is_not_complate"><span class="task-status-count">{{not_complate_task_count}}</span>个任务未完成</span>
  <span v-if="is_all_task">总计<span class="task-status-count">{{all_task_count}}</span>个任务</span>
  <span v-if="is_complate_task">完成<span class="task-status-count">{{complate_task_count}}</span>个任务</span>
    <div class="taskStatusBtns">
      <button :class="all_task_cls()" @click="btn_all_task()">所有任务</button>
      <button :class="not_complate_task_cls()" @click="btn_not_complate_task()">未完成任务</button>
      <button :class="complate_task_cls()" @click="btn_complate_task()">完成任务</button>
    </div>
  </div>
  `,
  data() {
    return {
      show_type: gd.show_type,
      list: gd.list,
    }

  },
  methods: {
    all_task_cls() {
      return this.show_type.type == 1 ? "btn_active" : ""
    },
    not_complate_task_cls() {
      return this.show_type.type == 2 ? "btn_active" : ""
    },
    complate_task_cls() {
      return this.show_type.type == 3 ? "btn_active" : ""
    },
    btn_all_task(){
      this.show_type.type=1;
      gd.show_type.type=1;
    },
    btn_not_complate_task(){
      this.show_type.type=2;
      gd.show_type.type=2;
    },
    btn_complate_task(){
      this.show_type.type=3;
      gd.show_type.type=3;
    }

  },
  computed: {
    is_not_complate() {
      if (this.show_type.type == 2) {
        return true;
      }
      return false;
    },
    is_all_task() {
      if (this.show_type.type == 1) {
        return true;
      }
      return false;
    },
    is_complate_task() {
      if (this.show_type.type == 3) {
        return true;
      }
      return false;
    },
    not_complate_task_count() {
      let count = 0;
      this.list.forEach(item => {
        if (item["is_complate"] == false) {
          count += 1;
        }
      });
      return count;
    },
    all_task_count() {
      return this.list.length;
    },
    complate_task_count() {
      let count = 0;
      this.list.forEach(item => {
        if (item["is_complate"] == true) {
          count += 1;
        }
      });
      return count;
    }
  }
})

export default {
  name: "TaskStatus"
}