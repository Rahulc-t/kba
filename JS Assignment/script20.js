let arr=["galaxy","dairy milk","kit kat","snickers","camdyman","twix","milkybar","gems","kinder joy"]
document.write("MY favorite candy is ",arr[2])
arr.push("amul")
console.log(arr)
arr.pop()
arr.splice(7,1)
console.log(arr)
delete arr[6]
arr.splice(6,1)
console.log(arr)
let a=arr.shift()
console.log("removed element=",a)
console.log("ARRAY=",arr)
let newarr=arr.slice(3,6)
console.log("new array=",newarr)
arr.includes("galaxy")?console.log("FOUND!!!"):console.log("NOT PRESENT!!")
let sortarr=arr.sort()
console.log("sorted array=",sortarr)
let revarr=arr.reverse()
console.log("reversed array=",revarr)