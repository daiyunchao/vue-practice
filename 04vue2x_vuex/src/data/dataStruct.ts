//数据项
interface IDataItem {
  taskId: string,
  name: string,
  is_complate: boolean
}

//显示状态:
enum showStatus { allTask = 1, notComplate = 2, complate = 3 };

//state:
interface IState {
  dataList: Array<IDataItem>,
  current_show_status: showStatus
}

export {
  IDataItem,
  IState,
  showStatus
}