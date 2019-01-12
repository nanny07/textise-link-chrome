chrome.contextMenus.create({
  title: 'Textise this link',
  id: 'textisedLink',
  contexts: ['link']
});

chrome.contextMenus.onClicked.addListener(function(itemData) {
	if (itemData.menuItemId == "textisedLink") {
		var urlToTextise = itemData.linkUrl;
		if(new URL(urlToTextise).hostname.endsWith('rep.repubblica.it') && urlToTextise.includes('/pwa/'))
		{
			urlToTextise = urlToTextise.replace('/pwa/', '/ws/detail/');
		}
		chrome.tabs.create({  
			url: 'http://www.textise.net/showText.aspx?strURL='+escape(urlToTextise),
			active: false
		});
	}
});