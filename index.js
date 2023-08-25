// 1 :
// print contohObj dengan key name ambil dari index 2 contohArr
// print contohObj dengan key age ambil dari index 3 contohArr
// print contohObj dengan key id ambil dari index 1 contohArr

const contohArray = [1, "imam", 28];
// console.log(arr)

// console.log(`ini index kedua dari array arr ${arr[1]}`)

for (let i = 0; i < contohArray.length; i++) {
    // console.log(`ini index ke ${i} dari contohArray yaitu : ${contohArray[i]}`)
}

const contohObj = {
    name: "imam",
    age: 28,
    id: 1
}

contohObj.name = contohArray[1];
contohObj.age = contohArray[2];
contohObj.id = contohArray[0];

console.log(`Ini contohObj key name = ${contohObj.name}`);
console.log(`Ini contohObj key age = ${contohObj.age}`);
console.log(`Ini contohObj key id = ${contohObj.id}`);
console.log(`==========================================`);

