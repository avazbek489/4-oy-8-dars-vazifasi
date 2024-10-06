// // // For va ternary operatorga oid
// // 1-MASALA JAVOBI
// for (let i = 1; i <= 50; i++){
//   i % 3 == 0 ? console.log(`3ga bolinadi ` + i) : console.log();
//   i % 5 == 0 ? console.log(`5ga bolinadi ` + i) : console.log();
//   i % 3 == 0 && i % 5 == 0 ? console.log(`3ga va 5ga bolinadi ` + i) : console.log();
// }

// // 2-MASALA JAVOBI
// let sum = 0;
// for(let i = 0; i <= 100; i += 2){
// i >= 30 && i <= 70 ? sum += i : console.log();
// }
// alert(sum);

// // 3-MASALA JAVOBI
// let count = 0;
// let neg = 0;
// for (let i = -20; i <= 20; i++){
// i % 2 == 0 ? count++ : neg++;
// }
// alert(`\nJuftlar soni ` + count + `\nToqlar soni ` + neg);

// // 4-MASALA JAVOBI
// for (let i = 1; i <= 100; i++) {
//   i % 2 == 0 || i % 7 == 0 ? console.log(`Maxsus son ` + i) : ``;
// }

// // // Break continue ga oid

// // 1-MASALA JAVOBI
// for (let i = 1; i <= 100; i++) {
//   if (i === 25) {
//     break;
//   }
//   console.log(i);
// }

// // 2-MASALA JAVOBI
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 == 0) {
//     continue;
//   }
//   console.log(i);
// }

// // 3-MASALA JAVOBI
// for (let i = 1; i <= 50; i++) {
//   if (i >= 30) {
//     break;
//   }
//   if (i < 10 || i > 30) {
//     continue;
//   }
//   console.log(i);
// }

// // // Switch case ga oid

// // 1-MASALA JAVOBI
// let day = +prompt("Hafta kunini kiriting");
// switch (day) {
//   case 1:
//     alert("Dushanba");
//     break;
//   case 2:
//     alert("Seshanba");
//     break;
//   case 3:
//     alert("Chorshanba");
//     break;
//   case 4:
//     alert("Payshanba");
//     break;
//   case 5:
//     alert("Juma");
//     break;
//   case 6:
//     alert("Shanba");
//     break;
//   case 7:
//     alert("Yakshanba");
//     break;
//   default:
//     alert("Ushbu hafta kuni yoq");
//     break;
// }

// // 2-MASALA JAVOBI
// let month = +prompt("Hafta kunini kiriting");
// switch (month) {
//   case 1:
//   case 2:
//   case 12:
//     alert("Qish");
//     break;
//   case 3:
//   case 4:
//   case 5:
//     alert("Bahor");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     alert(`Yoz`);
//   case 9:
//   case 10:
//   case 11:
//     alert("Kuz");
//     break;
//   default:
//     alert("Ushbu oy umuman yoq");
//     break;
// }

// // 3-MASALA JAVOBI
// let price = +prompt("Oquvchini baholang");
// switch (price) {
//   case 1:
//     alert("Juda yomon");
//     break;
//   case 2:
//     alert("Yomon");
//     break;
//   case 3:
//     alert("Qoniqarli");
//     break;
//   case 4:
//     alert("Yaxshi");
//     break;
//   case 5:
//     alert("A'lo");
//     break;
//   default:
//     alert("Ushbu kiritilgan son baho emas");
//     break;
// }

// // 4-SAVOL JAVOBI
// let def = +prompt("1dan 3gacha bolgan ta'rifni kiriting");
// switch (def) {
//   case 1:
//     alert("Ekonom");
//     break;
//   case 2:
//     alert("Standart");
//     break;
//   case 3:
//     alert("Premium");
//     break;
//   default:
//     alert("Bunday ta'rif umuman yoq");
//     break;
// }

// // 5-SAVOL JAVOBI
// let fruit = +prompt("1dan 4gacha bolgan meva raqamini kiriting");
// switch (fruit) {
//   case 1:
//     alert("Olma");
//     break;
//   case 2:
//     alert("Apelsin");
//     break;
//   case 3:
//     alert("Banan");
//     break;
//   case 4:
//     alert("Uva");
//     break;
//   default:
//     alert("Bunday meva raqami umuman yoq");
//     break;
// }

// // 6-SAVOL JAVOBI
// let password = +prompt("Parol variantini kiriting");
// switch (password) {
//   case 1:
//     alert("Parolni tiklash");
//     break;
//   case 2:
//     alert("Parolni o'zgartirish");
//     break;
//   case 3:
//     alert("Chiqish");
//     break;
//   default:
//     alert("Bunday parol varianti yoq");
//     break;
// }

// // // While, do…while. Ushbu masalalarni har ikki operator orqali ishlansin
// // 1-SAVOL JAVOBI
// let C = 1;
// while (C <= 10) {
//   console.log(C);
//   C++;
// }

// // 2-MASALA
// let C = 10;
// while (C >= 1) {
//   console.log(C);
//   C--;
// }

// // 3-MASALA JAVOBI
// let C = +prompt("Son kiriting");
// while (C < 0) {
//   alert("Musbat son kiriting");
//   C = +prompt("Son kiriting");
//   console.log(C);
// }

// // 4-MASALA JAVOBI
// let C = 0;
// while (C <= 20) {
//   console.log(C);
//   C += 2;
// }
// // 5-SAVOL JAVOBI
// let num = +prompt("Son kiriting");
// let sum = "";
// let res;
// while (num > 0) {
//   res = num % 10;
//   sum += res;
//   num = Math.floor(num / 10);
// }
// alert(sum);
// // 6-SAVOL JAVOBI
// let num = +prompt("Son kiriting");
// while (num > 1) {
//   console.log(Math.trunc(num));
//   num /= 2;
// }
// // 7-SAVOL JAVOBI
// let num = +prompt("Son kiriting");
// let res;

// while (num > 0) {
//   res = num % 10;
//   if (res % 2 == 1) {
//     console.log(res);
//   }
//   num = Math.trunc(num / 10);
// }
// // 8-SAVOL JAVOBI
// let num1 = +prompt("1-sonni kiriting");
// let num2 = +prompt("2-sonni kiriting");

// if (num1 > num2) {
//   while (num2 < num1) {
//     if (num2 % 3 == 0) {
//       console.log(num2);
//     }
//     num2++;
//   }
// } else {
//   while (num1 < num2) {
//     if (num1 % 3 == 0) {
//       console.log(num1);
//     }
//     num1++;
//   }
// }
// // 9-SAVOL JAVOBI
// let num = +prompt("Son kiriting");
// let rev = "";
// let res;

// while (num > 0) {
//   res = num % 10;
//   rev += res;
//   num = Math.floor(num / 10);
// }
// alert(rev);
// // 10-SAVOL JAVOBI
// let num = +prompt("Fibonachchi tartib raqamini kiriting");
// let a = 0,
//   res = 1,
//   fib = 0,
//   g = 0;
// while (g < num) {
//   fib = sum;
//   sum = res;
//   res = fib + res;
//   g++;
// }
// alert(fib);
// // 11-SAVOL JAVOBI
// let num = +prompt("Sonni kiriting:");
// let rev = ``;

// let i = num.length - 1;
// while (i >= 0) {
//   rev += num[i];
//   i--;
// }
// console.log(rev);
// let num = prompt("Sonni kiriting:");
// let rev = 0;

// let i = num.length - 1;
// while (i >= 0) {
//   rev += num;
//   i--;
// }

// alert(rev);
