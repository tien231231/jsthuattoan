const increasingsubstri = (arr) =>{
    let count =0
    
    let temp = 0
        for(let j =0;j<arr.length;++){
            if(arr[j]<arr[j+1])
            {
                temp+=1
                
            }
            else if(arr[j]<arr[j+1])
            {
                temp+=1
                
            }
            else {
                if(temp>count){
                    count = temp
                    temp = 0
                }
            }
        }
    
    return count
}
console.log(increasingsubstri([5,4,5,2,3,4,5,6,7]));
