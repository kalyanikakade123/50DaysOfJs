// const array = [
//     { field: "id", operator: "eq" },
//     { field: "cStatus", operator: "eq" },
//     { field: "money", operator: "eq" },
// ];
// const filterField = "money"
// const newArray = array.filter((item) =>item.field !== filterField);
// console.log(newArray)


const array = [
    { field: "id", operator: "eq" },
    { field: "cStatus", operator: "eq" },
    { field: "money", operator: "eq" },
];
const filterField = "money"; 
// let filteredArray = array
// .filter((item) => {
//     // console.log(item.field !== filterField)
//     return item.field !==filterField
// })
// console.log(filteredArray)


function removeArrayElement(FF) {
    var a =  array.filter((item) => item.field !== FF );
    return a ;
}
console.log(`filtered array: ${removeArrayElement(filterField)}`)

