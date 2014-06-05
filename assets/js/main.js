(function(){
	// $(".home-template .article").find(".hero-image").
	var transition = "transitionend webkitTransitionEnd oTransitionEnd otransitionend";
	var win = $(window);

	$("*").on(transition, function(){
		updateNavHeight();
	}).removeClass("exit");

	win.on("beforeunload", function(){
		win.scrollTop(0);
	}).scrollTop(0);

	$(".article").each(function(index, element){
		var element = $(element);
		var feature = element.find(".feature");
		var media = feature.find("img, iframe, video");
		var hasFeature = media.length > 0 ? "has-feature" : "";
		
		element.addClass(hasFeature);
		feature.find("a").empty().append(media);
	});

	$(".navigation-button").on("click", function(){
		$(".navigation-button").toggleClass("open"); 
		$(".site-navigation").toggleClass("open"); 
	})

	$("a").on("click", function(event){
		event.preventDefault();
		var link = $(this).attr("href");

		$("*").on(transition, function(){
			window.location = link;
		}).addClass("exit");
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