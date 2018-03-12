module.exports = function longestConsecutiveLength(array) {
  // your solution here
    var max=0, count=1;
    array.sort(function (a,b) {
        return a-b;
    });
    for(let i=0;i<array.length; i++){
        if(array[i]== array[i-1]) {
            continue;}
        if(array[i]==(array[i-1]+1)){
            count++;}
        else{
            if(count > max){
                max = count;}
            count = 1;
        }
    }
    return max;
}
