var arr = [
  {
    number: 1,
    name: "nhan",
    age: 12,
  },
  {
    number: 2,
    name: "aikadev",
    age: 165,
  },
];

// for (var ides in arr) {
//   console.log(arr[ides]);
// }

var arrfil = arr.filter((arr, index) => {
  return arr.age > 1;
});

console.log(arrfil);
