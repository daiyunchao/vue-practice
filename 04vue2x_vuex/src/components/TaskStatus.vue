<template>
  <div class="task-status">
    <span v-if="is_not_complate">
      <span class="task-status-count">{{not_complate_task_count}}</span>个任务未完成
    </span>
    <span v-if="is_all_task">
      总计
      <span class="task-status-count">{{all_task_count}}</span>个任务
    </span>
    <span v-if="is_complate_task">
      完成
      <span class="task-status-count">{{complate_task_count}}</span>个任务
    </span>
    <div class="taskStatusBtns">
      <button :class="all_task_cls()" @click="btn_all_task()">所有任务</button>
      <button :class="not_complate_task_cls()" @click="btn_not_complate_task()">未完成任务</button>
      <button :class="complate_task_cls()" @click="btn_complate_task()">完成任务</button>
    </div>
  </div>
</template>

<script lang="ts">
import { IDataItem, IState, showStatus } from "../data/dataStruct";
import Vue from "vue";
import Common from "../data/Common";
export default Vue.extend({
  methods: {
    all_task_cls(): string {
      return Common.isAllTaskStatus(this.$store)
        ? "btn_active"
        : "";
    },
    not_complate_task_cls(): string {
      return Common.isNotComplateStatus(this.$store)
        ? "btn_active"
        : "";
    },
    complate_task_cls(): string {
      return Common.isComplateStatus(this.$store)
        ? "btn_active"
        : "";
    },
    btn_all_task(): void {
      this.$store.dispatch("changeCurrentStatus", showStatus.allTask);
    },
    btn_not_complate_task(): void {
      this.$store.dispatch("changeCurrentStatus", showStatus.notComplate);
    },
    btn_complate_task(): void {
      this.$store.dispatch("changeCurrentStatus", showStatus.complate);
    }
  },
  computed: {
    is_not_complate(): boolean {
      return Common.isNotComplateStatus(this.$store);
    },
    is_all_task(): boolean {
      return Common.isAllTaskStatus(this.$store);
    },
    is_complate_task() {
      return Common.isComplateStatus(this.$store);
    },

    not_complate_task_count(): number {
      let count = 0;
      this.$store.state.dataList.forEach(item => {
        if (item["is_complate"] == false) {
          count += 1;
        }
      });
      return count;
    },
    all_task_count(): number {
      return this.$store.state.dataList.length;
    },
    complate_task_count(): number {
      let count = 0;
      this.$store.state.dataList.forEach(item => {
        if (item["is_complate"] == true) {
          count += 1;
        }
      });
      return count;
    }
  }
});
</script>
