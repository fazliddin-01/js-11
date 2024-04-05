// Foydalanuvchidan tasodifiy raqamlarni kiritishni so'raymiz
var input = prompt("Iltimos, tasodifiy raqamlarni vergul orqali kiriting:");

// Foydalanuvchi kiritgan raqamlarni vergul orqali ajratib, massivga o'tkazamiz
var numbers = input.split(",");

// Massivni tartiblab, eng katta 2 ta raqamni topamiz
numbers.sort(function(a, b) {
  return b - a;
});

// Eng katta 2 ta raqamni console-da chiqaramiz
console.log("Eng katta 2 ta raqam:", numbers[0], "va", numbers[1]);