
    var title = document.getElementById('title').innerText;
    var date_update = document.getElementById('date_update').innerText;
    var category = document.getElementById('category').innerText;
    var data_csv="";//ここに文字データとして値を格納していく

    date_update=date_update.replace('更新日:', '');
    var month = date_update.split('月');
    date_update = month[0]+"月";
    category=category.replace('カテゴリ:', '');

        data_csv += title;
        data_csv +=",";
        data_csv +=date_update;
        data_csv +=",";
        data_csv +=category;
        data_csv += "\n";

        console.log(data_csv);
        
