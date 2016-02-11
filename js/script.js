$(function () {

        $('.gallery img').hover(function() {
           $(this).fadeTo(500,.2)

        }, 
        function() {
           $(this).fadeTo(500,1)

        });

         $('#DisplayText h3').text($(this).parent().data('title')); 

    });


// $('img[src]').hover(function()
// 		{
// 		$(this.data[src]).fadeIn("slow");
// 		},
// 		function ()
// 			{
// 		$(this.data[src]).fadeOut();		
// 			});
// });
