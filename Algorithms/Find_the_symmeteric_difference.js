// Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).

function sym(...args) {
    return (args.reduce((acc , cv) =>  {
        return [...getSymDiff(cv , acc) , ...getSymDiff(acc , cv)]
     }, []));
}

function getSymDiff(array1, array2) {
    array1 = [...new Set(array1)]
    array2 = [...new Set(array2)]
    let result = [];
    for (let i = 0; i < array1.length; i++) {
        if(array2.includes(array1[i])) {
            continue;
        } else {
            result.push(array1[i]);
        }
    }
    return result;
}

sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);