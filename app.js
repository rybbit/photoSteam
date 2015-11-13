fs = require('fs');
var gpcounter = 0;
var config = require('./config.json');

start();

function getDetails(fileUri) {
  var jsonReply = "";
  if(fileUri) {
    fs.stat(fileUri, function(err, stats) {
      if (err) {
        console.log('\n' + err + '\n');
        return;
      }
      if (stats.isDirectory()) {
        return "Directory";
      }
      if (stats.isFile()) {
        return "Is File ";
      }
    });
  } else {
    return "File Type Not Found";
  }
  //return jsonReply;// {"fileType":"Not Found"};

};

function start() {
  for(var path in config.configs.inputPaths) {
    var topDir = config.configs.inputPaths[path].path;
    console.log("Directory: " + topDir);
    fs.readdir(topDir, function(err, files) {

      for(var item in files) {
        var fullFileLocation = topDir + "\\" + files[item];
        var fdetails = getDetails(fullFileLocation);

        console.log(fdetails + " - " + fullFileLocation);


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
