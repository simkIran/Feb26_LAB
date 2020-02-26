

var mfunction={
whileloopadder:function a(startnumber, endnumber, stepnumber) {
sum = 0;

while ( startnumber >endnumber) {
startnumber -= stepnumber;
sum += startnumber;
// console.log(sum);
}
return sum;
}
};
module.exports = mfunction;

var myfunction={
    loopforadder:function a(startnumber1, endnumber1, stepnumber1) {
    sum1 = 0;
    
    for (; startnumber1 >endnumber1;) {
    startnumber1 -= stepnumbe1r;
    sum1 += startnumbe1r;
    // console.log(sum);
    }
    return sum1;
    }
    };
    module.exports = myfunction;
