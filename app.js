$.getJSON("features.json", function(data){
  $.getJSON("meta.json", function(meta){
    renderData(data, meta);
  });
});

function renderData(data, meta) {
  var i = 0;
  for (var feature in data) {
    if(i === 0 || (i % 25) === 0) {
      block = $("<div class='block'></div>");
      block.append(
        "<div class='row browser-labels'>" +
          "<div class='left-col'></div>" +
          "<img src='img/ie.png' title='Internet Explorer'>" +
          "<img src='img/edge.png' title='Microsoft Edge'>" +
          "<img src='img/firefox.png' title='Firefox'>" +
          "<img src='img/chrome.png' title='Google Chrome'>" +
          "<img src='img/safari.png' title='Safari'>" +
          "<img src='img/opera.png' title='Opera'>" +
        "</div>");
      i = 0;
    }
    var row = $("<div class='row'></div>");
    row.append("<label class='left-col' title='" +
        meta[feature].title + ": " + meta[feature].description + "'>" +
        "<a href='http://caniuse.com/#search=" + feature +"'>" +
        meta[feature].title + "</a>" +
      "</label>");
    var arr = data[feature];
    for(var j=0; j<arr.length; j++) {
      row.append("<div class='point " + arr[j] + "' title='" + "'></div>");
    }
    block.append(row);
    $("#table").append(block);
    i++;
  }
}
