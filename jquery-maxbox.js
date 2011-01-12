(function($) {
    $.fn.maxBox = function(options) {
          if(typeof(options.maxLength) === "number") {
          var inquery = {};
          var box = this;
          var c = (typeof(options.cssClass) === "string") ? options.cssClass : '';
          var t = (typeof(options.displayText) === "string") ? options.displayText + ' ' : '';
          $('<span>', {
                  id: 'maxLength',
                  text: t + options.maxLength,
                  class: c
          }).insertAfter(box);
              
          box.keyup(function (evt) {
              inquery.count = this.value.length;
              inquery.value = this.value;
              $(inquery).trigger('restrictInput');
          });
          box.keydown(function (evt) {
              inquery.count = this.value.length;
              inquery.value = this.value;
              $(inquery).trigger('restrictInput');
          });
          box.blur(function (evt) {
              inquery.count = this.value.length;
              inquery.value = this.value;
              $(inquery).trigger('restrictInput');
          });
          function restrictInp() {
              if (inquery.count > options.maxLength)
                  box.val(inquery.value.substring(0, options.maxLength));
              else
                  $('#maxLength').text(t + (options.maxLength - inquery.count));

          }
          $(inquery).bind('restrictInput', restrictInp);
      }
    };
  })(jQuery);
