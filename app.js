fs = require('fs');
var gpcounter = 0;
var config = require('./config.json');

start();

function start() {
  for(var path in config.configs.inputPaths) {
    var topDir = config.configs.inputPaths[path].path;
    console.log("Directory: " + topDir);
    fs.readdir(topDir, function(err, files) {

      for(var item in files) {
        console.log(files[item]);
      }
    });
  // fs.stat(topDir, function(err, stats) {
  //   if (!stats.isDirectory()){
  //     console.log(stats.name)
  //   }
  // })
  }
  //function processFileList()
  // function addToList(fileObj) {
  //
  //   fs.stat(fileObj, function(err, stats) {
  //      gpcounter++;
  //      if (!stats.isDirectory()){
  //        console.log("File: " + fileObj + " -- " + stats.name)
  //
  //      } else {
  //        console.log("Item: " + fileObj);
  //      }
  //    })
  //
  //
  // }
}
