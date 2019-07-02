<template>
  <div class="add_task">
    <h3>添加任务:</h3>
    <input
      type="text"
      class="add_task_input"
      placeholder="请输入任务名称,回车添加"
      v-model="taskName"
      @keydown.enter="addTask()"
    />
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      taskName: ""
    };
  },
  methods: {
    addTask(): void {
      this.$store.dispatch("addTask", this.taskName);
    }
  }
});
</script>

