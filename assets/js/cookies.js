$(document).ready(function() {
	
	var content = "<div id=\'cookiesCondition\' style=\'font-family: \"Helvetica\";font-size: 11px;background: #ddd;text-align:center;cursor:pointer;padding: 5px;position: fixed; bottom: 0;right:0;left: 0;z-index: 999999;\'>En poursivant votre navigation, vous acceptez l'utilisation des cookies sur ce site. <a id=\'accepted\'>J'accepte</a> - <a id=\'refused\'>Je refuse</a></div>";

	if (Cookies.get('cookiesAccept') != "true") {
		$("body").append(content);
	};

	$('#accepted').click(function (){
		$('#cookiesCondition').fadeOut('slow');
		Cookies.set('cookiesAccept', "true", { expires: 365 });
	});

	$('#refused').click(function (){
		location.href = "http://www.google.fr";
		Cookies.remove('cookiesAccept');
	})
});
