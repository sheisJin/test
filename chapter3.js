//3장 연산자와 구문

someValue = 34;
var iValue = -someValue;
iValue++;
document.writeln(iValue);

var iValue = 3.0;
var iValue2 = ++iValue; //iValue 4.0 된 다음, iValue2 4.0
var iValue3 = iValue++; //iValue3 값이 4.0 된 다음, iValues 5.0;


//복합 배정 연산자

nValue = nValue + 30;
nValue += 3.0;

nValue %= 3;
nValue -= 3;
nValue *= 3;
nValue += 3;


//동등 연산자와

var sValue = "3.0";
var nValue = 3.0;

if (sValue != 3.0) {
    console.log('!=');
}
if (sValue !== 3.0) {
    console.log('!=='); //console 찍힘
}


//반복문, 조건문
