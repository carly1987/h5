/**
 * @author Mat Groves
 */

Voting = function()
{
	
}


Voting.constructor = Voting;

Voting.prototype.loadData = function(callback)
{
	this.callback = callback;
	
	$.getJSON('https://graph.facebook.com/fql?q=SELECT%20url,%20normalized_url,%20share_count,%20like_count,%20comment_count,%20total_count,commentsbox_count,%20comments_fbid,%20click_count%20FROM%20link_stat%20WHERE%20url="http://dev.waste-creative.com/waste/flashhtml/index.php?id=html"', function(data) 
	{
		console.log("Facebook HTML likes loaded");
		console.log(data);
	});
	
	$.getJSON('https://graph.facebook.com/fql?q=SELECT%20url,%20normalized_url,%20share_count,%20like_count,%20comment_count,%20total_count,commentsbox_count,%20comments_fbid,%20click_count%20FROM%20link_stat%20WHERE%20url="http://dev.waste-creative.com/waste/flashhtml/index.php?id=flash"', function(data) 
	{
		console.log("Facebook Flash likes loaded");
		console.log(data);
	});
}
