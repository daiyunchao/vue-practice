import Vue from 'vue/dist/vue.esm';
import gd from '../data/gd'

Vue.component('TaskList', {
  template: `
  <div class="task_list"><h3>任务列表:</h3>

  <ul class="task_ul" v-if="all_task">
    <li v-for="task,index in list" :key="task.id">
      <input type="checkbox" :checked="task.is_complate"  @change="status_change(task.id,!task.is_complate)"/>
      <span class="task_item_not_complate" v-if="!task.is_complate">{{task.name}}</span>
      <span class="task_item_complate" v-if="task.is_complate">{{task.name}}</span>
    </li>
  </ul>

  <ul class="task_ul" v-if="not_compate_task">
    <li v-for="task,index in not_complate_list" :key="task.id">
    <input type="checkbox" :checked="task.is_complate" @change="status_change(task.id,!task.is_complate)"/>
      <span class="task_item_not_complate" v-if="!task.is_complate">{{task.name}}</span>
      <span class="task_item_complate" v-if="task.is_complate">{{task.name}}</span>
    </li>
  </ul>

  <ul class="task_ul" v-if="complate_task">
  <li v-for="task,index in complate_list" :key="task.id">
  <input type="checkbox" :checked="task.is_complate" @change="status_change(task.id,!task.is_complate)"/>
      <span class="task_item_not_complate" v-if="!task.is_complate">{{task.name}}</span>
      <span class="task_item_complate" v-if="task.is_complate">{{task.name}}</span>
  </li>
  </ul>
  </div>`,

  data: function () {
    return {
      list: gd.list,
      show_type: gd.show_type
    }
  },
  methods: {
    status_change(id, new_status) {
      for (let index = 0; index < this.list.length; index++) {
        const item = this.list[index];
        if (item["id"] == id) {
          item["is_complate"] = new_status;
          break;
        }
      }
      //同步数据
      gd.syncLocalList();
    }
  },
  computed: {
    all_task() {
      if (this.show_type.type == 1) {
        return true;
      }
      return false;
    },
    not_compate_task() {
      if (this.show_type.type == 2) {
        return true;
      }
      return false;
    },

    complate_task() {
      if (this.show_type.type == 3) {
        return true;
      }
      return false;
    },

    not_complate_list() {
      return this.list.filter(item => {
        return item.is_complate == false
      })
    },
    complate_list() {
      return this.list.filter(item => {
        return item.is_complate == true
      })
    }
  }
});

export default {
  name: "TaskList"
}