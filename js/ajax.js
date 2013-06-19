$(document).ready(function(){
	$.ajax({
	  url: "http://phloxblog.in/rss/?feed=1",
	  cache: false
	}).done(function( html ) {
	  $("#home").html('');
	  $("#home").append('<p style=\"padding-left:10px; padding-right:5px;\">'+html+'</p>');
	});
	$.ajax({
	  url: "http://phloxblog.in/rss/?feed=2",
	  cache: false
	}).done(function( html ) {
	  $("#profile").html('');
	  $("#profile").append('<p style=\"padding-left:10px; padding-right:5px;\">'+html+'</p>');
	});
	$.ajax({
	  url: "http://phloxblog.in/rss/?feed=3",
	  cache: false
	}).done(function( html ) {
	  $("#market").html('');
	  $("#market").append('<p style=\"padding-left:10px; padding-right:5px;\">'+html+'</p>');
	});
	$.ajax({
	  url: "http://phloxblog.in/rss/?feed=4",
	  cache: false
	}).done(function( html ) {
	  $("#pba").html('');
	  $("#pba").append('<p style=\"padding-left:10px; padding-right:5px;\">'+html+'</p>');
	});
	});