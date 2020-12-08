function header(){
    $.ajax({
    url: "Header.html",
    cache: false,
    async: false,
    success: function(html){
    document.write(html);
    }
    });
    }