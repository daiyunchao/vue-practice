<template lang="html">
  <div class="task_list">
    <h3>任务列表:</h3>
    <ul class="task_ul" v-if="all_task">
      <li v-for="task,index in list" :key="task.id">
        <input
          type="checkbox"
          :checked="task.is_complate"
          @change="status_change(task.id,!task.is_complate)"
        />
        <span class="task_item_not_complate" v-if="!task.is_complate">{{task.name}}</span>
        <span class="task_item_complate" v-if="task.is_complate">{{task.name}}</span>
      </li>
    </ul>

    <ul class="task_ul" v-if="not_compate_task">
      <li v-for="task,index in not_complate_list" :key="task.id">
        <input
          type="checkbox"
          :checked="task.is_complate"
          @change="status_change(task.id,!task.is_complate)"
        />
        <span class="task_item_not_complate" v-if="!task.is_complate">{{task.name}}</span>
        <span class="task_item_complate" v-if="task.is_complate">{{task.name}}</span>
      </li>
    </ul>

    <ul class="task_ul" v-if="complate_task">
      <li v-for="task,index in complate_list" :key="task.id">
        <input
          type="checkbox"
          :checked="task.is_complate"
          @change="status_change(task.id,!task.is_complate)"
        />
        <span class="task_item_not_complate" v-if="!task.is_complate">{{task.name}}</span>
        <span class="task_item_complate" v-if="task.is_complate">{{task.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Common from "../data/Common";
import { showStatus, IDataItem } from "../data/dataStruct";
export default Vue.extend({
  data() {
    return {
      list: this.$store.state.dataList
    };
  },
  methods: {
    status_change(id: string, new_status: boolean): void {
      let list = this.$store.state.dataList;
      for (let index = 0; index < this.list.length; index++) {
        const item = this.list[index];
        if (item["id"] == id) {
          item["is_complate"] = new_status;
          break;
        }
      }
      //同步数据
      //gd.syncLocalList();
    }
  },
  computed: {
    all_task(): boolean {
      return Common.isAllTaskStatus(this.$store);
    },
    not_compate_task(): boolean {
      return Common.isNotComplateStatus(this.$store);
    },

    complate_task(): boolean {
       return Common.isComplateStatus(this.$store);
    },

    not_complate_list(): Array<IDataItem> {
      let list = this.$store.state.dataList;
      return this.list.filter((item: IDataItem) => {
        return item.is_complate == false;
      });
    },
    complate_list(): Array<IDataItem> {
      let list = this.$store.state.dataList;
      return this.list.filter((item: IDataItem) => {
        return item.is_complate == true;
      });
    }
  }
});
</script>

