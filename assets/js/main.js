(function(){
	// $(".home-template .article").find(".hero-image").
	var transition = "transitionend webkitTransitionEnd oTransitionEnd otransitionend",
		win = $(window);

	$("*").on(transition, function(){
		updateNavHeight();
	}).removeClass("exit");

	win.on("beforeunload", function(){
		win.scrollTop(0);
	}).scrollTop(0);

	$(".article").each(function(index, element){
		var element = $(element),
			feature = element.find(".feature"),
			media = feature.find("img, iframe, video"),
			hasFeature = media.length > 0 ? "has-feature" : "";
		
		element.addClass(hasFeature);
		feature.find("a").empty().append(media);
	});

	$(".navigation-button").on("click", function(){
		$(".navigation-button").toggleClass("open"); 
		$(".site-navigation").toggleClass("open"); 
	})

	$("a").on("click", function(event){
		event.preventDefault();

		if(!$(this).parent().hasClass("nav-contact")){
			var link = $(this).attr("href");

			$("*").on(transition, function(){
				window.location = link;
			}).addClass("exit");
		}
		else{
			window.location = "mailto:mente@imkreative.com";
		}
	})

	win.resize(function(){
		if(win.width() > 768){
			updateNavHeight();
		}
	})

	function updateNavHeight(){
		$(".site-navigation").css("height", win.height());
	}

})();