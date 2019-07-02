<template>
  <div class="con">
    <Header />
    <AddTask />
    <TaskStatus />
    <TastList />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import AddTask from "./AddTask.vue";
import Header from "./Header.vue";
import TaskStatus from "./TaskStatus.vue";
import TastList from "./TaskList.vue";
export default Vue.extend({
  components: {
    AddTask,
    Header,
    TaskStatus,
    TastList
  },
  created() {
    //初始化时,将值从填充数据
    this.$store.dispatch("setDataList");
  }
});
</script>
