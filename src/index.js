// https://app.contentstack.com/#!/stack/bltf78c1746a268811c/content-type/homepage/en-us/entry/blt4e4c896e02c1bd84/edit
import "./styles.css";
import $ from "jquery";

$.ajax({
  type: "GET",
  url:
    "https://cdn.contentstack.io/v3/content_types/homepage/entries?&environment=production",
  //'https://cdn.contentstack.io/v3/content_types/homepage/entries?query={"title":"Libby!"}&environment=production',
  headers: {
    "Content-Type": "application/json",
    api_key: "bltf78c1746a268811c",
    access_token: "csfc35ee63ceb90a5a0a004a17"
  },
  dataType: "json",
  success: processData,
  error: function() {
    alert("failed");
  }
});

function processData(data) {
  $("#title").append(data.entries[0].title);
  $("#short_description").append(data.entries[0].short_description);
  $("#long_description").append(data.entries[0].long_description);
  $("#caption").append(data.entries[0].caption);
  $("#footer").append(data.entries[0].footer);
  $("#text").append(data.entries[0].text);
  $("#image").attr("src", data.entries[0].image.url);
}
