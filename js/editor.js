document.querySelector("#md").value = `# Welcome to Markdown Editor!
### This editor was made by Ashish Agarwal on Github for you!
Not sure what to do?
* Change this Markdown Code!
* Try a emoji by surrounding with : colons

Happy Programming! :smile: :computer:`;
function toHTML(markdown){
  var converter = new showdown.Converter();
  converter.setOption('completeHTMLDocument', true);
  converter.setOption('simpleLineBreaks', true);
  converter.setOption('smoothLivePreview', true);
  converter.setOption('splitAdjacentBlockquotes', true);
  converter.setOption('strikethrough', true);
  converter.setOption('tasklists', true);
  converter.setOption('tables', true);
  converter.setOption('underline', true);
  showdown.setFlavor('github');
  text = markdown;
  html = converter.makeHtml(text);
  return html;
}

function updateResult(){
  md = document.querySelector("#md").value;
  result = document.querySelector("#result").contentWindow.document;
  code = toHTML(md);
  result.open();
  result.write(code);
  result.close();
}
updateResult();