function iterateNumbers() {
    for (var i=0; i <=5 ; i++){
        console.log(i);
    }
    console.log(i);
}

iterateNumbers();

//var = function scope / Globle Scope (ex : function key word eka use krpu scope)
// let = block scope (block ekk athule define krla eliye accsess krnn ba)

// var use krno adui. globle variable ekak var wlin hduwoth window. kiyla ghla adala variable eka asccess krnn puluwan browser eke inspect krla consol eke.
// ethkot window ekth ekk link weno override wenn puluwan libraies ema add krma. api print krna eka newe smhr weleta print wenne

function addName() {
    let b = "cd"
    if (a='abc') {
        var a = "abc"
        console.log(b);
    }
    a = 'b'
    console.log(a);

}

addName(); // a is not defined error using initialize let in if condition
