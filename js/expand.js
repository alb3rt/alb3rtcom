<!--//---------------------------------+
//  Developed by Roshan Bhattarai 
//  Visit http://roshanbh.com.np for this script and more.
//  This notice MUST stay intact for legal use
// --------------------------------->
$(document).ready(function()
{
	$(".expand_link").click(function()
    {
		$(this).prev(".expand_copy").slideToggle(500).siblings.slideUp("slow");
	});
});
