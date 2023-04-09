function selectionSort (arr) {
    let newArr = [...arr];
    let min = 0;
    for (let i = 0; i < newArr.length; i++) {
        min = i ;
        for (let j = i + 1; j < newArr.length ; j++) {
            c = c + 1
            // console.log(i , newArr[i],j , newArr[j]);
            if(newArr[min] > newArr[j]) {
                min = j ;
                // break;
            }

        }
        if(min !== i) {
            [newArr[min] ,  newArr[i]] = [newArr[i] , newArr[min]]
        }
        
    }
    console.log(newArr)
}

selectionSort([4,2,6,5,1,3])