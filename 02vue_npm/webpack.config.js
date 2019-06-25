const fs=require('fs');
const path=require('path')
module.exports={
  'mode':'development',
  'entry':'./src/vm.js',
  'output':{
    'path':path.join(__dirname,'./dist'),
    'filename':'main.js'
  }
}