var browsers = ["ie", "edge", "firefox", "chrome", "safari", "opera"];

$(".loading").show();

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
    row.append("<label class='left-col'>" +
        "<a href='http://caniuse.com/#search=" + feature + "'" +
        "title='" + meta.features[feature].title + ": " + meta.features[feature].description + "'>" +
        meta.features[feature].title + "</a>" +
      "</label>");
    var arr = data[feature];
    for(var j=0; j<arr.length; j++) {
      var hover = meta.features[feature].title + " is " + support(arr[j]) + " in " + meta.browsers[browsers[j]].name + " " + meta.browsers[browsers[j]].version;
      row.append("<div class='point " + arr[j] + "' title='" + hover + "'></div>");
    }
    block.append(row);
    $("#table").append(block);
    i++;
  }
  $(".loading").hide();
}

function support(str) {
  var msg;
  if (contains(str, "y x"))
    msg = "supported, but prefixed";
  else if (contains(str, "y"))
    msg = "supported";
  else if (contains(str, "a x"))
    msg = "partially supported and prefixed";
  else if (contains(str, "a"))
    msg = "partially supported";
  else
    msg = "not supported";

  return msg;
}

function contains(a, b) {
  return a.indexOf(b) > -1;
}
