
  	// scripts for fixing the static header
	  jQuery("document").ready(function($) {
	      var nav = $('.header-outer');
	      var pos = nav.offset().top
	  
	      $(window).scroll(function() {
	          var fix = ($(this).scrollTop() > pos) ? true : false;
	  
	          nav.toggleClass("header-outer", fix);
	          $('body').toggleClass("fix-body", fix);
	      });
	  
	      function removeMargin() {
	          var $stripMargin = $('#virtual-home-remodeler');
	          if ($(window).scrollTop() > 0)
	              $stripMargin.css({
	                  'margin-top': '0px'
	              });
	          else
	              $stripMargin.css({
	                  'margin-top': '250px'
	              });
	      }
	      $(window).scroll(removeMargin);
	      removeMargin();
	  });
	  