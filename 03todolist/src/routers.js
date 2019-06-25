import VueRouter from 'vue-router';
import Header from './components/header';
import AddTask from './components/addTask';
import TaskList from './components/taskList';
import TaskStatus from './components/taskStatus';
export default new VueRouter({
  routes: [
    {
      path: '/',
      name: '',
      components: {
        default: {
          template: `<div class="con">
          <Header></Header>
          <AddTask></AddTask>
          <TaskStatus></TaskStatus>
          <TaskList></TaskList>
          </div>`
        }
      }
    }
  ]
})