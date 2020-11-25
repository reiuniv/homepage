function combobox(){
    let combo = document.getElementById('picmaisuu');

    for(let i = 1; i <= 20; i++){
      var option = document.createElement("option");
      option.vakue=i;
      option.innerText = i;
      combo.appendChild(option);
    };
  }
  
  function getradio(){
    var element = document.getElementById( "maisuu" ) ;
    var radioNodeList = element.hoge ;
    var a = radioNodeList.value ;

    if (a=="") {
        return null;
    } else {
        return a;
    }
  }
  var hozon =0;
  function maketextbox(){
      //console.log("hozon"+hozon);
    const zudai = document.getElementById("zudai");
    if(hozon!=document.getElementById("picmaisuu").value){
    var maisuu = document.getElementById("picmaisuu").value;
    hozon = maisuu;
    //console.log(hozon);
    //console.log(maisuu);
    if (zudai.hasChildNodes()){
        for(let i=zudai.childNodes.length-1;i>=0;i--){
            zudai.removeChild(zudai.childNodes[i]);
        }
    }
    var count =0;
        for(let i=1;i<=maisuu;i++){
            count++;
            const input = document.createElement("input");
            const input1 = document.createElement("input");
            const text1 = document.createTextNode("図題"+count);
            const br = document.createElement("br");
		    zudai.appendChild(text1);
            input.setAttribute("type","text"); 
            input.setAttribute("id","zudai"+count);
            //input.setAttribute("value","test");
            zudai.appendChild(input);
            zudai.appendChild(br);
        }
    }
    }
  

  function showradio() {
    var namae = document.getElementById("picturenonamae").value;
    var maisuu = document.getElementById("picmaisuu").value;
    var picwidth = document.getElementById("picwidth").value;
    var a = getradio();
    var text="";
    var out = "";
    var zudai = "";
    var zudai2 = "";
    var zudainum = 0;
    const str = document.getElementById("pic").value;
    if(namae==""){
        text="ファイル名を入力してください";
        document.getElementById("radiobutton").innerHTML = text;
    }else if(picwidth==""){
        text="widthを入力してください。";
        document.getElementById("radiobutton").innerHTML = text;
    }else{
        text="";
        document.getElementById("radiobutton").innerHTML = text;

        if(a=="single"){
    for(let i=1;i<=maisuu;i++){
        zudai ="zudai"+i;
        //console.log(zudai);
        var ireruzudai = document.getElementById(zudai).value;
      out +="\\begin{figure}[H]\n\t\\centering\n\t\\includegraphics[width="+picwidth+"mm]{pic/" +namae+"_"+i+"."+str+"}\n\t\\caption{"+ireruzudai+"}\n\\end{figure}\n\n";  
    }
    //console.log(out);
    document.output.textbox.value = out;
    }else{
        if(maisuu%2==1){
            text="枚数を偶数枚にしてください。";
            document.getElementById("radiobutton").innerHTML = text;
        }else{
            var cap=0;
            for(let i=1;i<=maisuu;i+=2){
                zudai = "zudai"+i;
                zudainum = i+1;
                zudai2 = "zudai"+zudainum;
                cap=i+1;
                var ireruzudai = document.getElementById(zudai).value;
                var ireruzudai2 = document.getElementById(zudai2).value;
                out +="\\begin{figure}[H]\n\t\\begin{minipage}{0.5\\hsize}\n\t\\begin{center}\n\t\\includegraphics[width="+picwidth+"mm]{pic/" +namae+"_"+i+"."+str+"}\n\t\\end{center}\n\t\\caption{"+ireruzudai+"}\n\t\\label{fig:one}\n\t\\end{minipage}\n\t\\begin{minipage}{0.5\\hsize}\n\t\\begin{center}\n\t\\includegraphics[width="+picwidth+"mm]{pic/" +namae+"_"+cap+"."+str+"}\n\t\\end{center}\n\t\\caption{"+ireruzudai2+"}\n\t\\label{fig:two}\n\t\\end{minipage}\n\\end{figure}\n\n";  
              }   
        //console.log(out);
        document.output.textbox.value = out;
    }
    }
}
}