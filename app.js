// // MASALA-1
// let R = prompt("Doira radiusini kiriting:");

// if (R === "" || isNaN(R) || R <= 0) {
//     console.log("Iltimos, to'g'ri radius kiriting!");
// } else {
//     R = parseFloat(R);

//     const pi = Math.PI;

//     let L = 2 * pi * R;

//     let S = pi * Math.pow(R, 2);

//     console.log("Doira uzunligi (L): " + L.toFixed(2));
//     console.log("Doira yuzasi (S): " + S.toFixed(2));
// }

// //MASALA-2

// let a = prompt("Birinchi sonni kiriting (a):");
// let b = prompt("Ikkinchi sonni kiriting (b):");

// a = parseFloat(a);
// b = parseFloat(b);

// if (a < 0 || b < 0 || isNaN(a) || isNaN(b)) {
//     console.log("Iltimos, faqat manfiy bo'lmagan sonlarni kiriting!");
// } else {
//     let G = Math.sqrt(a * b);

//     console.log("O'rtacha geometriya (G): " + G.toFixed(2));
// }

// //MASALA-3

// let x = prompt("x ning qiymatini kiriting:");

// x = parseFloat(x);

// if (isNaN(x)) {
//     console.log("Iltimos, to'g'ri son kiriting!");
// } else {
//     let y = 3 * Math.pow(x, 6) - 6 * Math.pow(x, 2) - 7;

//     console.log("y ning qiymati: " + y);
// }

// //MASALA-4

// let X = prompt("X (konfetning kilogram miqdorini) kiriting:");
// let A = prompt("A (X kilogramm konfetning narxini) kiriting:");
// let Y = prompt("Y (so'ralgan kilogramni) kiriting:");

// X = parseFloat(X);
// A = parseFloat(A);
// Y = parseFloat(Y);

// if (isNaN(X) || isNaN(A) || isNaN(Y) || X <= 0 || A <= 0 || Y <= 0) {
//     console.log("Iltimos, to'g'ri va musbat sonlar kiriting!");
// } else {
//     let pricePerKg = A / X;

//     let totalPrice = pricePerKg * Y;

//     console.log(`${Y} kilogramm konfetning narxi: ${totalPrice.toFixed(2)} so'm`);
// }
//MASALA-5

// let A = prompt("A sonini kiriting:");
// let B = prompt("B sonini kiriting:");

// // A va B ni son sifatida olish
// A = parseFloat(A);
// B = parseFloat(B);

// if (isNaN(A) || isNaN(B)) {
//     console.log("Iltimos, to'g'ri sonlar kiriting!");
// } else {
//     let temp = A;
//     A = B;
//     B = temp;

//     console.log("Yangi A qiymati: " + A);
//     console.log("Yangi B qiymati: " + B);
// }

//Integer1
// let N = prompt("Ikki xonali sonni kiriting:");

// N = parseInt(N);

// if (isNaN(N) || N < 10 || N > 99) {
//     console.log("Iltimos, ikki xonali son kiriting!");
// } else {
//     let tens = Math.floor(N / 10);

//     let ones = N % 10;

//     let sum = tens + ones;

//     console.log("O'nliklar xonasidagi raqam: " + tens);
//     console.log("Birlar xonasidagi raqam: " + ones);
//     console.log("Yig'indisi: " + sum);
// }

//Integer2

// let N = prompt("Ikki xonali sonni kiriting:");

// N = parseInt(N);

// if (isNaN(N) || N < 10 || N > 99) {
//     console.log("Iltimos, ikki xonali son kiriting!");
// } else {
//     let tens = Math.floor(N / 10);

//     let ones = N % 10;

//     let swappedNumber = ones * 10 + tens;

//     console.log("Raqamlar o'rnini almashtirgandan keyin son: " + swappedNumber);
// }

//Integer3

// let N = prompt("Uch xonali sonni kiriting:");

// N = parseInt(N);

// if (isNaN(N) || N < 100 || N > 999) {
//   console.log("Iltimos, uch xonali son kiriting!");
// } else {
//   let hundreds = Math.floor(N / 100);

//   console.log("Yuzlar xonasidagi raqam: " + hundreds);
// }

//Integer4

// let N = prompt("999 dan katta sonni kiriting:");

// N = parseInt(N);

// if (isNaN(N) || N <= 999) {
//   console.log("Iltimos, 999 dan katta son kiriting!");
// } else {
//   let hundredsPart = Math.floor(N / 100);

//   let hundredsDigit = Math.floor(hundredsPart / 10);

//   console.log("Berilgan sonning yuzliklar xonasidagi raqam: " + hundredsDigit);
// }

//Boolean1

// let A = prompt("A sonini kiriting:");

// // A ni son sifatida olish
// A = parseInt(A);

// // Jumlani tekshirish: A musbatmi?
// if (A > 0) {
//     console.log("A soni musbat: Rost.");
// } else {
//     console.log("A soni musbat: Yolg'on.");
// }

//Boolean2

// let A = prompt("A sonini kiriting:");

// // A ni son sifatida olish
// A = parseInt(A);

// // Jumlani tekshirish: A toq sonmi?
// if (A % 2 !== 0) {
//   console.log("A soni toq: Rost.");
// } else {
//   console.log("A soni toq: Yolg'on.");
// }

//Boolean3

// let A = prompt("A sonini kiriting:");
// let B = prompt("B sonini kiriting:");

// A = parseInt(A);
// B = parseInt(B);

// if (A > 2 && B <= 3) {
//   console.log("A > 2 va B <= 3: Rost.");
// } else {
//   console.log("A > 2 va B <= 3: Yolg'on.");
// }

//Boolean4

// let A = prompt("A sonini kiriting:");
// let B = prompt("B sonini kiriting:");
// let C = prompt("C sonini kiriting:");

// A = parseInt(A);
// B = parseInt(B);
// C = parseInt(C);

// if (A <= B && B <= C) {
//   console.log("A <= B <= C: Rost.");
// } else {
//   console.log("A <= B <= C: Yolg'on.");
// }

//Boolean5
// let A = prompt("A sonini kiriting:");
// let B = prompt("B sonini kiriting:");

// A = parseInt(A);
// B = parseInt(B);

// if ((A % 2 === 0 && B % 2 === 0) || (A % 2 !== 0 && B % 2 !== 0)) {
//   console.log(
//     "A va B sonlarining har ikkalasi ham yoki toq son yoki juft son: Rost."
//   );
// } else {
//   console.log(
//     "A va B sonlarining har ikkalasi ham yoki toq son yoki juft son: Yolg'on."
//   );
// }

//Boolean6

// let A = prompt("A sonini kiriting:");
// let B = prompt("B sonini kiriting:");
// let C = prompt("C sonini kiriting:");

// A = parseInt(A);
// B = parseInt(B);
// C = parseInt(C);

// if (A > 0 || B > 0 || C > 0) {
//   console.log("A, B, C sonlarning hech bo'lmaganda bittasi musbat: Rost.");
// } else {
//   console.log("A, B, C sonlarning hech bo'lmaganda bittasi musbat: Yolg'on.");
// }

//Boolean7

// let A = prompt("Uch xonali sonni kiriting:");

// A = parseInt(A);

// if (A >= 100 && A <= 999) {
//   let ones = A % 10; // Birlar xonasi
//   let tens = Math.floor(A / 10) % 10; // O'nliklar xonasi
//   let hundreds = Math.floor(A / 100); // Yuzliklar xonasi

//   if (hundreds !== tens && tens !== ones && hundreds !== ones) {
//     console.log("Ushbu sonning barcha raqamlari har xil: Rost.");
//   } else {
//     console.log("Ushbu sonning barcha raqamlari har xil: Yolg'on.");
//   }
// } else {
//   console.log("Iltimos, uch xonali son kiriting.");
// }

//Boolean8
// let A = prompt("A sonini kiriting:");
// let B = prompt("B sonini kiriting:");
// let C = prompt("C sonini kiriting:");

// A = parseInt(A);
// B = parseInt(B);
// C = parseInt(C);

// if (A === B || B === C || A === C) {
//   console.log(
//     "Berilgan uchta butun sonlarning hech bo'lmaganda 2 tasi bir biriga teng: Rost."
//   );
// } else {
//   console.log(
//     "Berilgan uchta butun sonlarning hech bo'lmaganda 2 tasi bir biriga teng: Yolg'on."
//   );
// }

//Boolean9

// let x1 = prompt("Birinchi maydonning x koordinatasini kiriting (1-8):");
// let y1 = prompt("Birinchi maydonning y koordinatasini kiriting (1-8):");
// let x2 = prompt("Ikkinchi maydonning x koordinatasini kiriting (1-8):");
// let y2 = prompt("Ikkinchi maydonning y koordinatasini kiriting (1-8):");

// x1 = parseInt(x1);
// y1 = parseInt(y1);
// x2 = parseInt(x2);
// y2 = parseInt(y2);

// if (Math.abs(x1 - x2) <= 1 && Math.abs(y1 - y2) <= 1) {
//   console.log(
//     "Farzin bir yurishda bir maydondan ikkinchisiga o'ta oladi: Rost."
//   );
// } else {
//   console.log(
//     "Farzin bir yurishda bir maydondan ikkinchisiga o'ta oladi: Yolg'on."
//   );
// }
