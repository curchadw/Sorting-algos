//bubble sort

//merge sorting

//1. Loop over collection
//2.setup a condition to compare two values
//3. swap values based on conditon
//4. return the new list

// const arr = [3,6,2,1,8,4]



// const bubbleSort = (array) =>{

//     for (let i = 0; i < array.length; i++){
        
        
//         if (array[i] > array[i + 1]){
//            swap(array,i, i+1)
//            console.log('hi')
//         }
//     }

//     return array
// }


// console.log(bubbleSort(arr))


//--------------------------------------------------------------------
let arr2 = [7,1,5,3,6,4,2,8]

// const merge =(array, start, mid, end)=>{
//     let temp = end - start + 1

//     let i = start
//     let j = mid + 1
//     let k = 0

//     while(i <= mid && j <= end){
//         if(array[i] <= array[j]){
//             temp[k] = array[i]
//             k ++
//             i ++
//         }else{
//             temp[k] = array[j]
//             k ++
//             i++ 
//         }
//     }

//     while(i <= mid){
//         temp[k] = array[i]
//         k++
//         i++
//     }

//     while(j <= end){
//         temp[k] = array[j]
//         k++
//         j++
//     }

//     for (let i = start; i <= end; i++){
//         array[i] = temp[i -start]
//     }
// }

// //1

// const mergeSort = (array, start=0, end=array.length-1)=>{
//     if(end > start){
//     let mid =  (start + end)/2
//     mergeSort(array,start,mid)
//     mergeSort(array,mid + 1,end)
//     merge(array,start,mid,end)
//     }
// }

// console.log(mergeSort(arr2))


const merge = (left,right)=>{
    let someArray = []
    while(left.length && right.length){
        if (left[0] < right[0]){
            someArray.push(left.shift())
        }else{
            someArray.push(right.shift())
        }
    }

    return[...someArray,...left,...right]
}

const mergeSort = (array) =>{
    const mid = Math.floor(array.length/2)

    if(array.length < 2){
        return array
    }

    const left = array.splice(0,mid)
    return merge(mergeSort(left),mergeSort(array))
}

console.log(mergeSort(arr2))








