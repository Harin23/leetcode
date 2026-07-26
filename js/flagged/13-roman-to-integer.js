// this solultion is shit and needs to be improved
var romanToInt = function (s) {
    const map = {
      I: 1,
      IV: 4,
      V: 5,
      IX: 9,
      X: 10,
      XL: 40,
      L: 50,
      XC: 90,
      C: 100,
      CD: 400,
      D: 500,
      CM: 900,
      M: 1000,
    }
    const arr=s.split('');
    var sum=0;
    for(var i=0; i<arr.length; i++){
        var check2=map[arr[i]+arr[i+1]];
        if(check2){
            sum+=check2;
            i++;
        }else{
            sum+=map[arr[i]];
        }
    }
    return sum;
};
