function loadScript(url){
	var v = document.createElement('script');
	v.src=url;
	v.type='text/javascript';
	(document.head||document.documentElement).appendChild(v);
}

document.onreadystatechange = function () {
    if (document.readyState == "complete") {
		 if (window !== window.top) 
			return;
        loadScript('jquery-1.11.1.min.js');
		var des = $('meta[name="description"]').attr('content');
		var keywords = $('meta[name="keywords"]').attr('content');
		if (des == undefined)
			des = "";
		if (keywords == undefined)
			keywords = "";
			
		des = des.toLowerCase();
		keywords = keywords.toLowerCase();
		retrictedString = "pháp luật";
		if (-1 != des.indexOf(retrictedString) ||  -1 != keywords.indexOf(retrictedString))
		{
			document.location = 'http://google.com';
		}
    }
}