var stdtags_v1 = ["colume"];

function STDTag(tagName, fn){
    Array
      .from(document.getElementsByTagName(tagName))
      .forEach(fn);
  }
  
  function columeHandler(element) {
    element.innerHTML = 'colume-test';
  } 


// Handle Tags
for(var i=0; i<stdtags_v1.length; i++) {
    STDTag(stdtags_v1[i], eval(stdtags_v1[i]+"Handler"));
};