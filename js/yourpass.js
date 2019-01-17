//main
$('input').on('keydown', function(e){
  if ((e.wich && e.wich === 13) || (e.keyCode && e.keyCode === 13)) {
    return false
  } else {
    return true
  }
})
function onButtonClick() {
    var text = document.getElementById('id_textBox1').value;
    var stringCount = text.length;
    var ok1, alphabet, day, number, Bal, Sal, kigou, notpass, kiken, renzoku;
    var notday = text.replace( /0230|(0(2|4|6|9)|11)31/g , "" ) ;
    if (/[A-Za-z0-9]+/.test(text)) {ok1 = 1;}else{ok1 = 0;}
    if (/[A-Za-z]+/.test(text)) {alphabet = 1;}else{alphabet = 0;}
    if (/(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])/.test(notday)) {day = 1;}else{day = 0;}
    if (/[0-9]+/.test(text)) {number = 1;}else{number = 0;}
    if (/[A-Z]+/.test(text)) {Bal = 1;}else{Bal = 0;}
    if (/[a-z]+/.test(text)) {Sal = 1;}else{Sal = 0;}
    if (/[!\"#$%&'()\*\+\-.\/:;<=>?@\[\\\]\^_`{|}]+/.test(text)) {kigou = 1;}else{kigou = 0;}
    if (/[^A-Za-z0-9!\"#$%&'()\*\+\-.\/:;<=>?@\[\\\]\^_`{|}]+/.test(text)) {notpass = 1;}else{notpass = 0;}
    if (/123|password|football|qwerty|princess|login|welcome|solo|abc|admin|1212|flower|passw0rd|dragon|sunshine|master|hottie|love|zaq1|mynoob|18atcskd2w|1q2w3e4r|3rjs1la7qe|google|1q2w3e4r5t|zxcvbnm|1q2w3e|012|123|234|345|456|567|678|789|890/i.test(text)) {kiken = 1;}else{kiken = 0;}
    if (/(.)\1\1/i.test(text)) {renzoku = 1;}else{renzoku = 0;}
    var al1 = Bal + Sal + number;
          if ( !text ) {
            text = "エラー：入力してください。";
        } else if ( text.match(/ /) || text.match(/　/) ) {
            text = "エラー：空白が含まれています";
        } else if ( notpass == 1 ) {
            text = "エラー：使用できない文字が含まれています";
        } else if ( kiken == 1 ) {
            text = "セキュリティレベル：最低\n危険な文字例が含まれています。";
        } else if ( renzoku == 1 ) {
            text = "セキュリティレベル：低\n同じ文字は3つ以上連続させないでください。";
        } else if ( stringCount <= 7 ) {
            text = "セキュリティレベル：低\n8文字以上にしてください";
        } else if ( alphabet == 0 || number == 0 ) {
            text = "セキュリティレベル：低\nアルファベットと数字の両方を含ませてください";
        } else if ( day == 1 ) {
            text = "セキュリティレベル：中\n誕生日などの日付は含まないでください。";
        } else if ( al1 < 3 ) {
            text = "セキュリティレベル：中\n大文字・小文字アルファベットと数字の全てを含ませてください";
        } else if ( kigou == 0 ) {
            text = "セキュリティレベル：高\n大文字・小文字アルファベットと数字、記号の全てを含ませてください";
        } else {
            text = "セキュリティレベル：最高\n安全です。";
        }
            window.alert (text);
            //target = document.getElementById("output");
            //target.innerHTML = text;
    }