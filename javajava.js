chrome.tabs.query({active:true,lastFocusedWindow:true},function(tab){
    var author = "著者名";
    var title = tab[0].title;
    var webSiteName = "ウェブサイトの名称";
    var url = tab[0].url;
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDate();
    var info = author + ". " + "\"" + title + "\"" + ". " + webSiteName + ". "
	+ url + " , " + "(参照 "+ year +"-" + month + "-" + day + ").";
    console.log(info);

    var dummy = document.createElement("textarea");
    dummy.textContent = info;

    var bodyElm = document.getElementsByTagName("body")[0];
    bodyElm.appendChild(dummy);

    dummy.select();
    document.execCommand('copy');
    bodyElm.removeChild(dummy);
});
