function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        for(j = i-1; j > -1; j--) {
            if(arr[j+1] < arr[j]){
                [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
            }
        }

    }
     return arr  
}
console.log(insertionSort([28, 5, 11, 15, 3]))