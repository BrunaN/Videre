jQuery(function(){
	$elem = $("#teste-chrome-extension");

	if($elem.length){
		$elem.remove();
	}else{
		$.get(chrome.extension.getURL('/html1.html'), function(data) {
			$(data).appendTo('body');
		});
	}
});
