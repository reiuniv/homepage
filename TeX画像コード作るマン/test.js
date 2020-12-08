function addText_url(){
	//テキストエリアと挿入する文字列を取得
	var area = document.getElementById('writetext');
  var text1 = "<a class=\"url-link\" href=\""+area.value.substr(area.selectionStart, area.selectionEnd - area.selectionStart)+"\">";
  var text2 = "</a>\n";

	//カーソルの位置を基準に前後を分割して、その間に文字列を挿入
	area.value = area.value.substr(0, area.selectionStart)
			+ text1
			+ area.value.substr(area.selectionStart, area.selectionEnd - area.selectionStart)
			+ text2
			+ area.value.substr(area.selectionEnd);
}

  function showradio() {
    var title = document.getElementById("title").value;
    var category = document.getElementById("category").value;
    var writetext = document.getElementById("writetext").value;
    var dt = new Date();
    var Year =dt.getFullYear();
    var Month =dt.getMonth()+1;
    var Day =dt.getDate();
    dateT = ["日","月","火","水","木","金","土"];
    var day = dateT[dt.getDay()];
    var out = "";
        //console.log(out);
       writetext = writetext.replace(/\r?\n/g, '<br>'+'\n\t');

    out+="<div id=\"title\">\n<h3>"+title+"</h3><!--ブログのタイトル-->\n</div>\n"
            +"<div id=\"honbun\"><!--ここから本文-->\n\t"
            +writetext+"\n"
            +"</div>\n"
            +"<hr id=\"kugiri\">\n"
            +"<div class=\"blog_head\"><!--更新日とカテゴリ-->\n<div id=\"date_update\">\n\t"
            +"更新日:"+Year+"年"+Month+"月"+Day+"日"+"("+day+")"+"\n"
            +"</div>\n"
            +"<div id=\"category\">\n\t"
            +"カテゴリ:"+category+"\n"
            +"</div>\n</div>"

        document.output.textbox.value = out;
}