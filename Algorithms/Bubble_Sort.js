
function bubbleSort(arr) {
    let newArr = [...arr];
    let n = 0;
    for (let i = newArr.length - 1; i > 0 ; i--) {
        for (let j = 0; j < i  ; j++) {
            n = n + 1;
            if(newArr[j] > newArr[j + 1]) {
                [newArr[j] , newArr[j+1]] = [newArr[j+1] ,newArr[j]];
            }
        }
    }
    console.log(newArr)
}

bubbleSort([4,2,6,5,1,3,9,8,7])