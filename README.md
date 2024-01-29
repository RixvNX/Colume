# Colume
Some Html5 tags are beautified and Colume defines some new tags.

## New Tags?
Below are the new tags that are currently defined in beta:
NEW:
| tag | desc |
|:----------|:----------|
| colume | Colume's main tag, all tags modified by Colume must be used within this.
| space | Similar to Div in Html,Create it for use in the Box Tag selection box or other subtag.
| code | The tag is used to display the code, but for some reason, the tag cannot be added at this time (No Language Title).
| box | The tag used to install the tag may be invalid due to omissions.
| text | Text tag, used to display text, the difference is that the color of the text will change under the different theme.
| title | A definition tag used inside code, Define the code language for the code tag (Do not use it alone as it is unsightly and will trigger checker's warnings).
| value | A definition tag used inside code, Define the code topic for the code tag (Do not use it alone as it is unsightly and will trigger checker's warnings).
| array | To display the list of item tags, pending.

OVERWRITE:
| tag | desc |
|:----------|:----------|
| button | After beautifying the button, you can use the sttag.js action in onclick.
| hr | The beautified dividing line will lengthen laterally when moved up.

## what's stdtag?
stdtag has stdtag.css and stdtag.js, which are stored in /css/stdtag.css and /js/stdtag.js respectively.
Sttag. css is used to beautify the Colume Tag,Sttag.js is used to support some functions of Colume Tag.

## what about stdtag.js?
Sttag.js has some functional support built in, The following are the available values for action in the Clicked function:
| action | args | desc |
|:----------|:----------|:----------|
| $alert | Message[string] | A pop-up warning box displays the contents of the Message parameter |
| ... | ...[...] | ...
