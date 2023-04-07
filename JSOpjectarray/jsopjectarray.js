//1
/**
 * 
 * @param {Array} arr 
 * @returns 
 */
const reverse = (arr)=>{
    return(arr.reverse())}
    
//2
/**
 * 
 * @param {Array} arr 
 * @param {Number} index 
 */
const chuck=(arr,index) => {
    let kq =[]
    let temp = []
    for(let i=0;i<arr.length;i++){
        
        for(let j =0;j<index;i++){
            temp.push(arr[j])
        }
        
        kq.push(temp)
    }
    
        
}
//3
/**
 * 
 * @param {Array} arr 
 * @returns 
 */
const uniq = (arr) =>{
    return([...new Set(arr)])

}
//4
const uniqArrayObject = (arr) =>{
    return([...new Set(arr)])

}
//5
/**
 * 
 * @param {*} collection 
 * @param {*} field 
 * @returns 
 */
function groupBy(collection, field) {
    const result = {};
  
    collection.forEach(item => {
      const value = item[field];
      if (result[value]) {
        // Nếu đã tồn tại key trong object result, thêm object vào array tương ứng
        result[value].push(item);
      } else {
        // Nếu chưa tồn tại key trong object result, tạo mới array và thêm object vào array đó
        result[value] = [item];
      }
    });
  
    return result;
  }
  
// console.log(uniqArrayObject([{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }] ));
//6
/**
 * 
 * @param {String} str 
 * @returns 
 */
const trim = (str) =>{
    return(str.split("  ").join(" "))
}

//8
/**
 * 
 * @param {Array} arr 
 * @param {Number} id 
 * @param {Number} order 
 * @returns 
 */
const SwithOver = (arr, id,order) => {
    for(let i =0;i<arr.length;i++){
        if(arr[i].id=id)
        {
          let temp = arr[i].order 
            arr[i].order =order
            arr[order].order= temp
        }
    }
    return arr
}
module.exports = SwithOver,trim,groupBy,chuck,reverse,uniq
// console.log(SwithOver([{id: 10, order: 0}, {id: 12, order: 1}, {id: 9, order: 2}, {id: 11, order: 3}]
// , 9,1    ));