var fs = require('fs');
var data = require("./caniuse/data.json");

// ie edge firefox chrome safari opera
var current_features = {}; //{apng: [y,n,n,y,p], video: [] ...};
var meta = {features: {}, browsers: {}};

var current_version_no = data.agents.ie.versions.length - 4;
var current_versions = [];

for (var agent in data.agents) {
  var name = (data.agents[agent].browser).toLowerCase();
  var version = data.agents[agent].versions[current_version_no];
  current_versions[name] = version;
  meta.browsers[name] = {"name": data.agents[agent].browser, "version": version};
}

var features = data.data;

for (var f in features) {
  var feature = features[f].stats;
  current_features[f] = [];
  for (var browser in feature) {
    for (var version in feature[browser]) {
      if (version === current_versions[browser]) {
        current_features[f].push(feature[browser][version]);
        meta.features[f] = {};
        meta.features[f].title = removeChar(features[f].title);
        meta.features[f].description = removeChar(features[f].description);
      }
    }
  }

}

writeFile(current_features, "features.json");
writeFile(meta, "meta.json");

function writeFile(data, filename) {
  stream = fs.createWriteStream(filename);
  stream.write(JSON.stringify(data, null, 1));
  //stream.write(JSON.stringify(data));
  stream.end();
}

function removeChar(string) {
   var s = string.replace("\`","");
   s = s.replace("\'","");
   return s;
}
