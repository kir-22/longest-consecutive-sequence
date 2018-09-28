module.exports = function longestConsecutiveLength(array) {
  // your solution here
  function sortArr(a,b){
      return a-b
    }
    let max=0, count=1;
    const arr = array.sort(sortArr);
    for(let i=0, len=arr.length; i<len; i++){
        if(arr[i] === arr[i-1]) {
            continue;}
        if(arr[i] === (arr[i-1]+1)){
            count++;}
        else{
            if(count > max){
                max = count;
            }
            count = 1;
        }
    }
    return max;

}

