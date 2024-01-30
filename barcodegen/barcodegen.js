
document.getElementById('genbtn').onclick = function(){
    alert('Hello!!');
    // 追加するHTML要素を作成
const newElement = document.createElement('p');
newElement.textContent = '追加するテキスト';

// id="sample"の要素を取得する
const target = document.getElementById('button');

// afterメソッドを使用する
target.after(newElement);
}

function genbtn(){

    const EAN13_first_numset = [[0,0,0,0,0,0],//0
                                [0,0,1,0,1,1],//1
                                [0,0,1,1,0,1],//2
                                [0,0,1,1,1,0],//3
                                [0,1,0,0,1,1],//4
                                [0,1,1,0,0,1],//5
                                [0,1,1,1,0,0],//6
                                [0,1,0,1,0,1],//7
                                [0,1,0,1,1,0],//8
                                [0,1,1,0,1,0]]//9
                            
    const EAN_numset_all = [[
                        [0,0,0,1,1,0,1],//0 A
                        [0,0,1,1,0,0,1],//1
                        [0,0,1,0,0,1,1],//2
                        [0,1,1,1,1,0,1],//3
                        [0,1,0,0,0,1,1],//4
                        [0,1,1,0,0,0,1],//5
                        [0,1,0,1,1,1,1],//6
                        [0,1,1,1,0,1,1],//7
                        [0,1,1,0,1,1,1],//8
                        [0,0,0,1,0,1,1] //9
                    ],[
                        [0,1,0,0,1,1,1],//0 B
                        [0,1,1,0,0,1,1],//1
                        [0,0,1,1,0,1,1],//2
                        [0,1,0,0,0,0,1],//3
                        [0,0,1,1,1,0,1],//4
                        [0,1,1,1,0,0,1],//5
                        [0,0,0,0,1,0,1],//6
                        [0,0,1,0,0,0,1],//7
                        [0,0,0,1,0,0,1],//8
                        [0,0,1,0,1,1,1] //9
                    ],[
                        [1,1,1,0,0,1,0],//0 C
                        [1,1,0,0,1,1,0],//1
                        [1,1,0,1,1,0,0],//2
                        [1,0,0,0,0,1,0],//3
                        [1,0,1,1,1,0,0],//4
                        [1,0,0,1,1,1,0],//5
                        [1,0,1,0,0,0,0],//6
                        [1,0,0,0,1,0,0],//7
                        [1,0,0,1,0,0,0],//8
                        [1,1,1,0,1,0,0] //9
                        ]]

    const EAN_numset = [[
                        [3,2,1,1],//0 A SBSB
                        [2,2,2,1],//1
                        [2,1,2,2],//2
                        [1,4,1,1],//3
                        [1,1,3,2],//4
                        [1,2,3,1],//5
                        [1,1,1,4],//6
                        [1,3,1,2],//7
                        [1,2,1,3],//8
                        [3,1,1,2],//9
                    ],[
                        [1,1,2,3],//0 B SBSB
                        [1,2,2,2],//1
                        [2,2,1,2],//2
                        [1,1,4,1],//3
                        [2,3,1,1],//4
                        [1,3,2,1],//5
                        [4,1,1,1],//6
                        [2,1,3,1],//7
                        [3,1,2,1],//8
                        [2,1,1,3],//9
                    ],[
                        [3,2,1,1],//0 C BSBS
                        [2,2,2,1],//1
                        [2,1,2,2],//2
                        [1,4,1,1],//3
                        [1,1,3,2],//4
                        [1,2,3,1],//5
                        [1,1,1,4],//6
                        [1,3,1,2],//7
                        [1,2,1,3],//8
                        [3,1,1,2],//9
                    ]]


                    
let jancode_element = document.getElementById('jancode');
console.log(jancode_element.value);
var jancode = jancode_element.value.toString();

let checkdigit_element = document.getElementById('checkdigit');
console.log(checkdigit_element.checked);


let codetype_elements = document.getElementsByName('codetype');
var EAN13 = 0;
if(codetype_elements[0].checked){
EAN13=1;
}else{
EAN13 = 0;
}
console.log(codetype_elements[0].checked);

let hozyo_element = document.getElementById('hozyo');
console.log(hozyo_element.checked);

let book_element = document.getElementById('book');
console.log(book_element.checked);

let hozyo_haba_element = document.getElementById('hozyohaba');
console.log(hozyo_haba_element.value);

let bairitu_element = document.getElementById('bairitu');
console.log(bairitu_element.value);

let fontsize_element = document.getElementById('fontsize');
console.log(fontsize_element.value);

let yohaku_x_element = document.getElementById('yohaku_x');
console.log(yohaku_x_element.value);

let yohaku_y_element = document.getElementById('yohaku_y');
console.log(yohaku_y_element.value);

let fontkankaku_element = document.getElementById('fontkankaku');
console.log(fontkankaku_element.value);

let haba_element = document.getElementById('haba');
console.log(haba_element.value);

let takasa_element = document.getElementById('takasa');
console.log(takasa_element.value);

let gado_color_element = document.getElementById('gadocolor');
console.log(gado_color_element.value);

let suuzi_color_element = document.getElementById('suuzicolor');
console.log(suuzi_color_element.value);

let hozyo_color_element = document.getElementById('hozyocolor');
console.log(hozyo_color_element.value);

let kugiri_color_element = document.getElementById('kugiricolor');
console.log(kugiri_color_element.value);

let num_color_element = document.getElementById('numcolor');
console.log(num_color_element.value);

let kugiri_element = document.getElementById('kugiri');
console.log(kugiri_element.checked);

let touka_element = document.getElementById('touka');
console.log(touka_element.checked);

let suuzikesu_element = document.getElementById('suuzikesu');
console.log(suuzikesu_element.checked);


console.log("---------------------------------------");

var errortxt= document.getElementById("errortxt");  
errortxt.innerHTML= '';  

var jancodetxt= document.getElementById("jancodetxt");  
jancodetxt.innerHTML= ''; 

if(checkdigit_element.checked){
if((EAN13==1&&jancode.length<12)||(EAN13==0&&jancode.length<7)){
    var errortxt= document.getElementById("errortxt");  
    errortxt.innerHTML= '文字数が不足しています。';  
}
}else{
    if((EAN13==1&&jancode.length<13)||(EAN13==0&&jancode.length<8)){
        var errortxt= document.getElementById("errortxt");  
        errortxt.innerHTML= '文字数が不足しています。';  
    }
}

var svg1 = document.getElementById("svgField");
while (svg1.lastChild) {
    svg1.removeChild(svg1.lastChild);
}

var bairitu =bairitu_element.value;

var width_buf = 0;
var height_buf = 0;
var checknum=0;
 var haba= haba_element.value
var takasa = takasa_element.value;

var fontsize = fontsize_element.value;

var senhaba = 8*hozyo_haba_element.value/100;

var fontkankaku = fontkankaku_element.value;
console.log(fontkankaku);
let gadobarcolor = gado_color_element.value;
let barcolor = suuzi_color_element.value;
let wakucolor = hozyo_color_element.value;
let kugiricolor = kugiri_color_element.value;
let numcolor = num_color_element.value;

var gardbar = 1.65;

if(book_element.checked){
    gardbar=0;
}

if(EAN13){
    width_buf = 3.63;
    height_buf = 22.85;
    var checkbuf1=(parseInt(jancode.charAt(0))+parseInt(jancode.charAt(2))+parseInt(jancode.charAt(4))+parseInt(jancode.charAt(6))+parseInt(jancode.charAt(8))+parseInt(jancode.charAt(10)));
    var checkbuf2=(parseInt(jancode.charAt(1))+parseInt(jancode.charAt(3))+parseInt(jancode.charAt(5))+parseInt(jancode.charAt(7))+parseInt(jancode.charAt(9))+parseInt(jancode.charAt(11)));
    console.log(checkbuf1.toString());
    console.log(checkbuf2.toString());
    checkbuf2 *= 3;
    console.log(checkbuf2.toString());
    checknum = checkbuf1+checkbuf2;
    console.log(checknum.toString());
    checknum %= 10;
    console.log(checknum.toString());
    if(checknum>0){
        checknum = 10 - checknum;
        console.log(checknum.toString());
        }
        if(checkdigit_element.checked){
    jancode = jancode.substr(0,12);
    jancode +=checknum.toString();
    }else{
        jancode = jancode.substr(0,13);
    }
}else{
    width_buf = 2.31;
    height_buf = 18.23;
    var checkbuf1=(parseInt(jancode.charAt(0))+parseInt(jancode.charAt(2))+parseInt(jancode.charAt(4))+parseInt(jancode.charAt(6)));
    var checkbuf2=(parseInt(jancode.charAt(1))+parseInt(jancode.charAt(3))+parseInt(jancode.charAt(5)));
    console.log(checkbuf1.toString());
    console.log(checkbuf2.toString());
    checkbuf1 *= 3;
    console.log(checkbuf1.toString());
    checknum = checkbuf1+checkbuf2;
    console.log(checknum.toString());
    checknum %= 10;
    console.log(checknum.toString());
    if(checknum>0){
    checknum = 10 - checknum;
    console.log(checknum.toString());
    }
    if(checkdigit_element.checked){
    jancode = jancode.substr(0,7);
    jancode +=checknum.toString();
    }else{
        jancode = jancode.substr(0,8);
    }
}

var point_y = yohaku_y_element.value*bairitu;
var quiet = yohaku_x_element.value*bairitu;

if(EAN13){
    var width_all = quiet*2+width_buf*2*bairitu+32*bairitu*haba/100;
    var height_all = point_y+28*bairitu-(100-takasa)*height_buf/100*bairitu;
    var barcode = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg1.setAttribute("width",width_all);
svg1.setAttribute("height",height_all);
if(touka_element.checked){
    svg1.style.backgroundColor = "transparent";
    console.log("透過したよ");
}else{
    svg1.style.backgroundColor = "white";
    console.log("透過してないよ");
}
//svg1.style.backgroundColor = "white";

svg1.appendChild(barcode);
}else{
    var width_all = quiet*2+width_buf*2*bairitu+22*bairitu*haba/100;
    var height_all = point_y+23*bairitu-(100-takasa)*height_buf/100*bairitu;
    var barcode = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg1.setAttribute("width",width_all);
svg1.setAttribute("height",height_all);
if(touka_element.checked){
    svg1.style.backgroundColor = "transparent";
    console.log("透過したよ");
}else{
    svg1.style.backgroundColor = "white";
    console.log("透過してないよ");
}

svg1.appendChild(barcode);

}


var point_x= width_buf*bairitu;
point_x +=quiet;

for(let i=0;i<2;i++){
    var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    point_x += 0.66*i*bairitu*haba/100;
    var width = 0.33*bairitu*haba/100;
    var height = (height_buf*takasa/100+gardbar) * bairitu;


rect.setAttribute( 'x', point_x);
rect.setAttribute( 'y', point_y);
rect.setAttribute('width', width);
rect.setAttribute('height', height);
rect.setAttribute('fill', gadobarcolor);

svg1.appendChild(rect);
}
point_x += 0.33*bairitu*haba/100;

if(EAN13){
    for(let i=0;i<6;i++){
        for(let j=0;j<2;j++){
        var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        var width = 33*bairitu*haba/100;
        var height = height_buf * bairitu*takasa/100;

        var firstnum = parseInt(jancode.charAt(0));
        console.log("first "+firstnum.toString());
        var thisnum = parseInt(jancode.charAt(1+i));
        console.log("this "+thisnum.toString());
        bufnum1 = EAN_numset[EAN13_first_numset[firstnum][i]][thisnum][0+2*j];
        bufnum2 = EAN_numset[EAN13_first_numset[firstnum][i]][thisnum][1+2*j];
        point_x += (bufnum1*width)/100;
        console.log(point_x.toString());
        console.log("ABC "+EAN13_first_numset[firstnum][i].toString());
        console.log("numset"+(0+2*j).toString()+" "+bufnum1.toString());
        console.log("numset"+(1+2*j).toString()+" "+bufnum2.toString());
        rect.setAttribute( 'x', point_x);
        rect.setAttribute( 'y', point_y);
        rect.setAttribute('width', bufnum2*width/100);
        point_x += (bufnum2*width)/100;
        console.log(point_x.toString());
        rect.setAttribute('height', height);
        rect.setAttribute('fill', barcolor);
    
    svg1.appendChild(rect);
    console.log("---------------------------------------");
        }
    }
}else{
    for(let i=0;i<4;i++){
        for(let j=0;j<2;j++){
        var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        var width = 33*bairitu/100*haba/100;
        var height = height_buf * bairitu*takasa/100;

        var firstnum = parseInt(jancode.charAt(0));
        console.log("first "+firstnum.toString());
        var thisnum = parseInt(jancode.charAt(0+i));
        console.log("this "+thisnum.toString());
        bufnum1 = EAN_numset[0][thisnum][0+2*j];
        bufnum2 = EAN_numset[0][thisnum][1+2*j];
        point_x += bufnum1*width;
        console.log("numset"+(0+2*j).toString()+" "+bufnum1.toString());
        console.log("numset"+(1+2*j).toString()+" "+bufnum2.toString());
        rect.setAttribute( 'x', point_x);
        rect.setAttribute( 'y', point_y);
        rect.setAttribute('width', bufnum2*width);
        point_x += bufnum2*width;
        rect.setAttribute('height', height);
        rect.setAttribute('fill', barcolor);
    
    svg1.appendChild(rect);
    console.log("---------------------------------------");
}
}
}
point_x += 0.33*bairitu*haba/100;
for(let i=0;i<2;i++){
    var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    point_x +=0.66*i*bairitu*haba/100;
    var width = 0.33*bairitu*haba/100;
    var height = (height_buf*takasa/100+gardbar) * bairitu;

rect.setAttribute( 'x', point_x);
rect.setAttribute( 'y', point_y);
rect.setAttribute('width', width);
rect.setAttribute('height', height);
rect.setAttribute('fill', gadobarcolor);

svg1.appendChild(rect);
}
point_x += 0.66*bairitu*haba/100;

if(EAN13){
    for(let i=0;i<6;i++){
        for(let j=0;j<2;j++){
        var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        var width = 0.33*bairitu*haba/100;
        var height = height_buf * bairitu*takasa/100;

        var firstnum = parseInt(jancode.charAt(0));
        console.log("first "+firstnum.toString());
        var thisnum = parseInt(jancode.charAt(7+i));
        console.log("this "+thisnum.toString());
        bufnum1 = EAN_numset[2][thisnum][0+2*j];
        bufnum2 = EAN_numset[2][thisnum][1+2*j];
        console.log("numset"+(0+2*j).toString()+" "+bufnum1.toString());
        console.log("numset"+(1+2*j).toString()+" "+bufnum2.toString());
        rect.setAttribute( 'x', point_x);
        rect.setAttribute( 'y', point_y);
        rect.setAttribute('width', bufnum1*width);
        point_x += (bufnum1+bufnum2)*width;
        console.log(point_x);
        rect.setAttribute('height', height);
        rect.setAttribute('fill', barcolor);
    
    svg1.appendChild(rect);
    console.log("---------------------------------------");
        }
    }
}else{
    for(let i=0;i<4;i++){
        for(let j=0;j<2;j++){
        var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        var width = 0.33*bairitu*haba/100;
        var height = height_buf * bairitu*takasa/100;
        Math.round(width * 1000) / 1000;
        Math.round(height * 1000) / 1000;

        var firstnum = parseInt(jancode.charAt(0));
        console.log("first "+firstnum.toString());
        var thisnum = parseInt(jancode.charAt(4+i));
        console.log("this "+thisnum.toString());
        bufnum1 = EAN_numset[2][thisnum][0+2*j];
        bufnum2 = EAN_numset[2][thisnum][1+2*j];
        console.log("numset"+(0+2*j).toString()+" "+bufnum1.toString());
        console.log("numset"+(1+2*j).toString()+" "+bufnum2.toString());
        rect.setAttribute( 'x', point_x);
        rect.setAttribute( 'y', point_y);
        rect.setAttribute('width', bufnum1*width);
        point_x += bufnum1*width;
        point_x += bufnum2*width;
        Math.round(point_x * 1000) / 1000;
        rect.setAttribute('height', height);
        rect.setAttribute('fill', barcolor);
    
    svg1.appendChild(rect);
    console.log("---------------------------------------");
        }
    }
}

for(let i=0;i<2;i++){
    var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    point_x +=0.66*i*bairitu*haba/100;
    var width = 0.33*bairitu*haba/100;
    var height = (height_buf*takasa/100+gardbar) * bairitu;
    Math.round(point_x * 1000) / 1000;
    Math.round(width * 1000) / 1000;
    Math.round(height * 1000) / 1000;

rect.setAttribute( 'x', point_x);
rect.setAttribute( 'y', point_y);
rect.setAttribute('width', width);
rect.setAttribute('height', height);
rect.setAttribute('fill', gadobarcolor);

svg1.appendChild(rect);
}

svg1.appendChild(rect);

var linenum = 0;
if(EAN13){
linenum = 96;
}else{
linenum = 68;
}

if(hozyo_element.checked){

for(let i=0;i<2;i++){
const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
var y_line = point_y+(height_buf)*bairitu*takasa/100+1.65*bairitu;
var hosei = 0;
if(EAN13){
hosei=30.36*bairitu*haba/100;
}else{
hosei=21.12*bairitu*haba/100;
}
line.setAttribute('x1',width_buf*bairitu+quiet+hosei*i);
line.setAttribute('y1',y_line);
line.setAttribute('x2',width_buf*bairitu+quiet+0.33*bairitu*3*haba/100+hosei*i);
line.setAttribute('y2',y_line);
line.setAttribute('stroke', wakucolor );
line.setAttribute('stroke-width', senhaba*bairitu/100*haba/100);
line.setAttribute('stroke-dasharray', "10en");

svg1.appendChild(line);
}

for(let i=0;i<2;i++){
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    var y_line = point_y+(height_buf)*bairitu*takasa/100;
    var hosei = 0;
    if(EAN13){
    hosei=15.51*bairitu*haba/100;
    }else{
    hosei=10.89*bairitu*haba/100;
    }
    line.setAttribute('x1',(width_buf+0.99*haba/100)*bairitu+quiet+hosei*i);
    line.setAttribute('y1',y_line);
    if(EAN13){
        line.setAttribute('x2',(width_buf+0.99*haba/100)*bairitu+quiet+13.86*bairitu*haba/100+hosei*i);
    }else{
        line.setAttribute('x2',(width_buf+0.99*haba/100)*bairitu+quiet+9.24*bairitu*haba/100+hosei*i);
    }
    line.setAttribute('y2',y_line);
    line.setAttribute('stroke', wakucolor );
    line.setAttribute('stroke-width', senhaba*bairitu/100*haba/100);
    line.setAttribute('stroke-dasharray', "10en");
    
    svg1.appendChild(line);
    }

    for(let i=0;i<1;i++){
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        var y_line = point_y;
        var hosei = 0;
        line.setAttribute('x1',width_buf*bairitu+quiet);
        line.setAttribute('y1',y_line);
        if(EAN13){
            line.setAttribute('x2',width_buf*bairitu+quiet+31.35*bairitu*haba/100);
        }else{
            line.setAttribute('x2',width_buf*bairitu+quiet+22.11*bairitu*haba/100);
        }
        line.setAttribute('y2',y_line);
        line.setAttribute('stroke', wakucolor );
        line.setAttribute('stroke-width', senhaba*bairitu/100*haba/100);
        line.setAttribute('stroke-dasharray', "10en");
        
        svg1.appendChild(line);
        }

        for(let i=0;i<1;i++){
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            var y_line = point_y+(height_buf)*bairitu*takasa/100+1.65*bairitu;
            var hosei = 0;
            if(EAN13){
                line.setAttribute('x1',(width_buf+14.85*haba/100)*bairitu+quiet);
                line.setAttribute('y1',y_line);
                line.setAttribute('x2',(width_buf+14.85*haba/100)*bairitu+quiet+1.65*bairitu*haba/100);
            }else{
                line.setAttribute('x1',(width_buf+10.23*haba/100)*bairitu+quiet);
                line.setAttribute('y1',y_line);
                line.setAttribute('x2',(width_buf+10.23*haba/100)*bairitu+quiet+1.65*bairitu*haba/100);
            }
            line.setAttribute('y2',y_line);
            line.setAttribute('stroke', wakucolor );
            line.setAttribute('stroke-width', senhaba*bairitu/100*haba/100);
            line.setAttribute('stroke-dasharray', "10en");
            
            svg1.appendChild(line);
            }

            for(let i=0;i<linenum;i++){
                const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                var x_line = width_buf*bairitu+quiet+0.33*bairitu*i*haba/100;
                line.setAttribute('x1',x_line);
                line.setAttribute('y1',point_y);
                line.setAttribute('x2',x_line);
                line.setAttribute('stroke-width', senhaba*bairitu/100*haba/100);
                if(EAN13){
                    if(i<4||(44<i&&i<51)||91<i){
                        line.setAttribute('y2',point_y+(height_buf)*bairitu*takasa/100+1.65*bairitu);
                    }else{
                    line.setAttribute('y2',point_y+height_buf*bairitu*takasa/100);
                    }
                    if((i==0||i==3||i==10||i==17||i==24||i==31||i==38||i==45||i==50||i==57||i==64||i==71||i==78||i==85||i==92||i==95)&&kugiri_element.checked){
                        line.setAttribute('stroke', kugiricolor );
                        line.setAttribute('stroke-width', senhaba*1.5*bairitu/100*haba/100);
                    }else{
                    line.setAttribute('stroke', wakucolor );
                    }
                }else{
                    if(i<4||(30<i&&i<37)||63<i){
                        line.setAttribute('y2',point_y+(height_buf)*bairitu*takasa/100+1.65*bairitu);
                    }else{
                    line.setAttribute('y2',point_y+height_buf*bairitu*takasa/100);
                    }
                    if((i==0||i==3||i==10||i==17||i==24||i==31||i==36||i==43||i==50||i==57||i==64||i==67)&&kugiri_element.checked){
                        line.setAttribute('stroke', kugiricolor );
                        line.setAttribute('stroke-width', senhaba*1.5*bairitu/100*haba/100);
                    }else{
                    line.setAttribute('stroke', wakucolor );
                    }
                }
                line.setAttribute('stroke-dasharray', "10en");
            
                svg1.appendChild(line);
            }
        }
if(suuzikesu_element.checked){

if(EAN13){
    if(book_element.checked){
        console.log("ean13 text");
var jancode_full = jancode.substring( 0, 13 );
console.log( jancode_front );
console.log( point_y+(height_buf*takasa/100) * bairitu );
var textobj = document.createTextNode(jancode_full);
var textele = document.createElementNS("http://www.w3.org/2000/svg", "text");
textele.appendChild(textobj);
textele.setAttributeNS(null, "x", quiet+(width_buf*haba/100)*bairitu);
textele.setAttributeNS(null, "y", point_y+(height_buf*takasa/100) * bairitu+fontkankaku* bairitu);
textele.setAttributeNS(null, "textLength", 31 *bairitu*haba/100);
textele.setAttributeNS(null, "font-family", "OCRB","Arial");
textele.setAttributeNS(null, "font-size", fontsize*bairitu);
textele.setAttributeNS(null, "lengthAdjust", "spacing");
textele.setAttributeNS(null, "fill", numcolor);
svg1.appendChild(textele);
    }else{
    console.log("ean13 text");
var jancode_front = jancode.substring( 1, 7 );
var jancode_back = jancode.substring( 7, 13 );
console.log( jancode_front );
console.log( point_y+(height_buf*takasa/100) * bairitu );
var textobj = document.createTextNode(jancode.charAt(0));
var textele = document.createElementNS("http://www.w3.org/2000/svg", "text");
textele.appendChild(textobj);
textele.setAttributeNS(null, "x", quiet+(1)*bairitu);
textele.setAttributeNS(null, "y", point_y+(height_buf*takasa/100) * bairitu+fontkankaku* bairitu);
textele.setAttributeNS(null, "font-family", "OCRB","Arial");
textele.setAttributeNS(null, "font-size", fontsize*bairitu);
textele.setAttributeNS(null, "fill", numcolor);
svg1.appendChild(textele);

var textobj = document.createTextNode(jancode_front);
var textele = document.createElementNS("http://www.w3.org/2000/svg", "text");
textele.appendChild(textobj);
textele.setAttributeNS(null, "x", quiet+(width_buf+1*haba/100)*bairitu);
textele.setAttributeNS(null, "y", point_y+(height_buf*takasa/100) * bairitu+fontkankaku* bairitu);
textele.setAttributeNS(null, "textLength", 13.86*bairitu*haba/100);
textele.setAttributeNS(null, "font-family", "OCRB","Arial");
textele.setAttributeNS(null, "font-size", fontsize*bairitu);
textele.setAttributeNS(null, "lengthAdjust", "spacing");
textele.setAttributeNS(null, "fill", numcolor);
svg1.appendChild(textele);

var textobj = document.createTextNode(jancode_back);
var textele = document.createElementNS("http://www.w3.org/2000/svg", "text");
textele.appendChild(textobj);
textele.setAttributeNS(null, "x", quiet+(width_buf+16.4*haba/100)*bairitu);
textele.setAttributeNS(null, "y", point_y+(height_buf*takasa/100) * bairitu+fontkankaku* bairitu);
textele.setAttributeNS(null, "textLength", 13.86*bairitu*haba/100);
textele.setAttributeNS(null, "font-family", "OCRB","Arial");
textele.setAttributeNS(null, "font-size", fontsize*bairitu);
textele.setAttributeNS(null, "lengthAdjust", "spacing");
textele.setAttributeNS(null, "fill", numcolor);
svg1.appendChild(textele);
}
}else{
    console.log("ean8 text");
    var jancode_front = jancode.substring( 0, 4 );
    var jancode_back = jancode.substring( 4, 8 );
    console.log( jancode_front );
    
    var textobj = document.createTextNode(jancode_front);
    var textele = document.createElementNS("http://www.w3.org/2000/svg", "text");
    textele.appendChild(textobj);
    textele.setAttributeNS(null, "x", quiet+(width_buf+1*haba/100)*bairitu);
    textele.setAttributeNS(null, "y", point_y+(height_buf*takasa/100) * bairitu+fontkankaku* bairitu);
    textele.setAttributeNS(null, "textLength", 9.24*bairitu*haba/100);
    textele.setAttributeNS(null, "font-family", "OCRB","Arial");
    textele.setAttributeNS(null, "font-size", fontsize*bairitu);
    textele.setAttributeNS(null, "lengthAdjust", "spacing");
    textele.setAttributeNS(null, "fill", numcolor);
    svg1.appendChild(textele);
    
    var textobj = document.createTextNode(jancode_back);
    var textele = document.createElementNS("http://www.w3.org/2000/svg", "text");
    textele.appendChild(textobj);
    textele.setAttributeNS(null, "x", quiet+(width_buf+12*haba/100)*bairitu);
    textele.setAttributeNS(null, "y", point_y+(height_buf*takasa/100) * bairitu+fontkankaku* bairitu);
    textele.setAttributeNS(null, "textLength", 9.24*bairitu*haba/100);
    textele.setAttributeNS(null, "font-family", "OCRB","Arial");
    textele.setAttributeNS(null, "font-size", fontsize*bairitu);
    textele.setAttributeNS(null, "lengthAdjust", "spacing");
    textele.setAttributeNS(null, "fill", numcolor);
    svg1.appendChild(textele);
}
}
var jancodetxt= document.getElementById("jancodetxt");  
jancodetxt.innerHTML= jancode;  
}

function svgdown(){

const form = document.getElementById('form');
const input = document.getElementById('input');
const svg = document.getElementById('svgField');

var jancodetxt= document.getElementById("jancodetxt");  
console.log(jancodetxt);
console.log(jancodetxt.textContent);

if(input.value==""){
    let codetype_elements = document.getElementsByName('codetype');
    if(codetype_elements[0].checked){
        downloadSvg(svg, "EAN13-"+jancodetxt.textContent+`.svg`);
    }else{
        downloadSvg(svg, "EAN8-"+jancodetxt.textContent+`.svg`);
    }
}else{
downloadSvg(svg, `${input.value}.svg`);
}
}

function pngdown(){

    const form = document.getElementById('form');
    const input = document.getElementById('input');
    const svg = document.getElementById('svgField');
    let kaizoudo_element = document.getElementById('kaizoudo');
    console.log(kaizoudo_element.value);
    let kaizoudo = kaizoudo_element.value;
    
    var jancodetxt= document.getElementById("jancodetxt");  
    console.log(jancodetxt);
    console.log(jancodetxt.textContent);
    
    if(input.value==""){
        let codetype_elements = document.getElementsByName('codetype');
        if(codetype_elements[0].checked){
            downloadPng(svg, "EAN13-"+jancodetxt.textContent+`.png`,kaizoudo);
        }else{
            downloadPng(svg, "EAN8-"+jancodetxt.textContent+`.png`,kaizoudo);
        }
    }else{
    downloadPng(svg, `${input.value}.png`,kaizoudo);
    }
    }

function downloadSvg(svgNode, filename) {
    const svgText = new XMLSerializer().serializeToString(svgNode);
    const svgBlob = new Blob([svgText], { type: 'image/svg+xml' });
    const svgUrl = URL.createObjectURL(svgBlob);
  
    const a = document.createElement('a');
    a.href = svgUrl;
    a.download = filename;
  
    document.body.appendChild(a);
    a.click();
  
    document.body.removeChild(a);
    URL.revokeObjectURL(svgUrl);
  }

  function downloadPng(svgNode, filename, scale) {
    const svgText = new XMLSerializer().serializeToString(svgNode);

    // SVGノードから幅と高さを取得
    const svgWidth = svgNode.clientWidth || svgNode.viewBox.baseVal.width;
    const svgHeight = svgNode.clientHeight || svgNode.viewBox.baseVal.height;

    const svgBlob = new Blob([svgText], { type: 'image/svg+xml' });
    const svgUrl = URL.createObjectURL(svgBlob);

    var canvas = document.createElement("canvas");
    // SVGのサイズに基づいてキャンバスのサイズを設定し、解像度を上げる
    canvas.width = svgWidth * scale;
    canvas.height = svgHeight * scale;

    var ctx = canvas.getContext("2d");

        // キャンバスの背景を透過に設定
        ctx.fillStyle = "rgba(0, 0, 0, 0)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

    // キャンバスに描画する際のスケールを調整
    ctx.scale(scale, scale);

    var image = new Image();
    image.onload = function(){
        ctx.drawImage(image, 0, 0);
        var a = document.createElement("a");
        a.href = canvas.toDataURL("image/png");
        a.setAttribute("download", filename || "image.png");
        a.dispatchEvent(new MouseEvent("click"));
    }
    image.src = "data:image/svg+xml;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(svgText))); 
  }
