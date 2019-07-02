const crypto = require('crypto');
import { IDataItem, IState, showStatus } from './dataStruct';
class Common {
  randomString(size: number): string {
    if (size == 0) {
      throw new Error('Zero-length randomString is useless.');
    }
    const chars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789';
    let objectId = '';
    // var bytes = (0, crypto.randomBytes)(size);
    console.log("crypto===>", crypto);

    let bytes = crypto.randomBytes(size);
    // console.log(bytes)
    for (let i = 0; i < bytes.length; ++i) {
      objectId += chars[bytes.readUInt8(i) % chars.length];
    }
    return objectId;
  }

  syncDataToLocalStorage({ state }): void {
    localStorage.setItem("vue_to_do_list", JSON.stringify(state.dataList));
  }

  getDataFromLocalStorage(): Array<IDataItem> {
    let listStr = localStorage.getItem("vue_to_do_list");
    let List: Array<IDataItem> = [];
    if (listStr) {
      let localList = JSON.parse(listStr);
      for (let index = 0; index < localList.length; index++) {
        const element = localList[index];
        let { id, name, is_complate } = element;
        let todolistItem: IDataItem = {
          taskId: id,
          name,
          is_complate
        }
        List.push(todolistItem);
      }
    }
    return List;
  }

  isAllTaskStatus({state}){
    if (state.current_show_status == showStatus.allTask) {
      return true;
    }
    return false;
  }
  
  isNotComplateStatus({state}) {
    if (state.current_show_status == showStatus.notComplate) {
      return true;
    }
    return false;
  }

  isComplateStatus({state}) {
    if (state.current_show_status == showStatus.complate) {
      return true;
    }
    return false;
  }
}

export default new Common();