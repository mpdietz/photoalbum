$('gallery-img').hover(function ()
		{
        $('img').fadeIn('slow');
      },
      function(){
        $('img').fadeOut('slow');
      }
  )
	 $('#DisplayText h3').text($(this).parent().data('title'));  