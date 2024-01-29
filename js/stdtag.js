var stdtags_v1 = ["colume", "colime", "space", "code", "box", "text", "codesign", "value"];
var overwitre_v1 = ["button"];

function checkCodeTitleAndValue() {
  if (document.getElementsByTagName("title").length != document.getElementsByTagName("value").length) {
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
function Button_onClick(actions, args) {
  console.log(actions)
  if (actions == "$alert") {
    alert(args)
  }
}

checkCodeTitleAndValue()