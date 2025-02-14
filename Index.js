$(document).ready(function() {
	var url = 'https://hn.algolia.com/api/v1/search?query=javascript';
	$.getJSON(url,function(data){

		var currentQuote = '';
		var quotes = data.hits;
		
		$('.read').on('click', function(){
			//data is only loaded when this button is clicked
			currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
			//console.log(currentQuote);
			//$('.quoteBody').html(currentQuote.title);

			$('.quoteBody').hide();

			$('.quoteBodyLink').html(currentQuote.title);
			$('.quoteBodyLink').attr('href', currentQuote.url).attr('target', '_blank'); //goes to new tab
			$('.quoteAuthor').html(currentQuote.author);

			$('.tweetQuote')
			.attr('href', 'https://X.com/intent/tweet?text= ' + currentQuote.title + ' ' + currentQuote.author)
			.attr('target', '_blank') 
			.attr('disabled', false); 
			//target blank opens new window and disabled enables the button

			$('.read').html('Show me one more');


		});

		console.log(quotes[0].title);
		console.log(data);

	});
});
