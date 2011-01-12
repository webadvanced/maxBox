#maxBox a Jquery based textarea limiter and counter

[**Usage**]

*Sample Markup:*
	<fiendset>
	<legend>About you...</legend>
	<textarea id="about" name="about"></textarea>
	</fiendset>

*Simple:*

	$(function() {
	    $('#about').maxBox({maxLength : 200});
	});

*With options*

	$(function() {
	    $('#about').maxBox({maxLength : 200, cssClass : 'foo', displayText : 'Characters Remaining:'});
	});

[**options**]

* maxLength - Number of characters you wan to limit the textarea to. [required]
* cssClass - Class name(s) (string) to be added to the span tag that holds the counter. [<span class="foo">200</span>]
* displayText - Text (string) to be prepended to the count. [<span>Characters Remaining: 200</span>]
