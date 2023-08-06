// for循环

//for循环逻辑
// for(AAA; BBB; CC) {
//  DDD
//  }

//  a ->b -> D -> C
//name 和salary后面跟:
let list = [
  { name: "11", salary: 22 },
  { name: "31", salary: 25 },
  { name: "41", salary: 21 },
  { name: "h1", salary: 20 },
  { name: "61", salary: 12 },
  { name: "91", salary: 62 },
];

// let maxValue = -1;
// let maxName = "";
// for (let i = 0; i < list.length; i++) {
//   if (list[i].salary > maxValue) {
//     maxValue = list[i].salary;
//     maxName = list[i].name;
//   }
// }

let maxsalary = -1;
let maxsalary_name = "";
for (let i = 0; i < list.length; i++) {
  if (list[i].salary > maxsalary) {
    maxsalary = list[i].salary;
    maxsalary_name = list[i].name;
  }
}
