var stdtags_v1 = ["colume", "colime", "space", "code", "box", "text", "title", "value", "array", "item"];
var overwitre_v1 = ["button", "hr"];

function checkCodeTitleAndValue() {
  if (document.getElementsByTagName("title").length-1 != document.getElementsByTagName("value").length) {
    console.log("[From stdtag] Checker: Missing Code_Title or Code_Value? lenght of AssemblyCodeTag is OOD!");
  }
}

function STDTag(tagName){
    Array
      .from(document.getElementsByTagName(tagName));
  }

// print to console
for(var i=0; i<stdtags_v1.length; i++) {
    STDTag(stdtags_v1[i]);
    console.log("[From stdtag] Included Tags: " + stdtags_v1[i]);
};
for(var i=0; i<overwitre_v1.length; i++) {
  console.log("[From stdtag] Overwite Tags: " + overwitre_v1[i]);
};

// Script
function Clicked(actions, args) {
  console.log(actions)
  if (actions == "$alert") {
    alert(args)
  }
}

checkCodeTitleAndValue()