$.getJSON("features.json", function(data){
  renderData(data);
});

function renderData(data) {
  var i = 0;
  for (var feature in data) {
    if(i === 0 || (i % 25) === 0) {
      block = $("<div class='block'></div>");
      block.append(
        "<div class='row browser-labels'>" +
          "<div class='left-col'></div>" +
          "<label>IE</label>" +
          "<label>ED</label>" +
          "<label>FX</label>" +
          "<label>CH</label>" +
          "<label>SF</label>" +
          "<label>OP</label>" +
        "</div>");
      i = 0;
    }
    var row = $("<div class='row'></div>");
    row.append("<label class='left-col'>" + feature + "</label>");
    var arr = data[feature];
    for(var j=0; j<arr.length; j++) {
      row.append("<div class='point " + arr[j] + "' title='" + "'></div>");
    }
    block.append(row);
    $("#table").append(block);
    i++;
  }
}
