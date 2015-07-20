var fs = require('fs');
var data = require("./caniuse/data.json");

var current_version_no = data.agents.ie.versions.length - 4;
var current_versions = [];

for (var agent in data.agents) {
  var name = (data.agents[agent].browser).toLowerCase();
  current_versions[name] = data.agents[agent].versions[current_version_no];
}

console.log(current_versions);

var features = data.data;

// ie edge firefox chrome safari opera
var current_features = {}; //{apng: [y,n,n,y,p], video: [] ...};
for (var f in features) {
  var feature = features[f].stats;
  console.log("-----------------\nfeature",f);

  //current_features.f = [];
  current_features[f] = [];
  for (var browser in feature) {
    for (var version in feature[browser]) {
      if (version === current_versions[browser]) {
        //console.log(browser + " " + version + "   " + feature[browser][version]);
        current_features[f].push(feature[browser][version]);
      }
    }
  }

}

writeFile(current_features, "features.json");

function writeFile(data, filename) {
  stream = fs.createWriteStream(filename);
  //stream.write(JSON.stringify(data, null, 1));
  stream.write(JSON.stringify(data));
  stream.end();
}
