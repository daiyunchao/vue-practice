class GD {
  list = [];
  show_type = { "type": 1 };//1:全部任务 2:未完成任务 3:已完成任务

  constructor() {
    this.getListFromLocal();
  }

  getListFromLocal() {
    let listStr = localStorage.getItem("vue_to_do_list");
    if (listStr) {
      this.list = JSON.parse(listStr);
    } else {
      this.list = [];
    }
  }

  syncLocalList() {
    localStorage.setItem("vue_to_do_list", JSON.stringify(this.list))
  }
}
export default new GD();