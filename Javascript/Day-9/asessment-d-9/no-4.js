function shoppingTime(memberId, money) {
  let result = {};

  if (!memberId) {
    return "Mohon maaf, toko X hanya berlaku untuk member saja";
  }

  if (money < 2500) {
    return "Mohon maaf, uang tidak cukup";
  }

  const items = [
    ["Gula Pasir", 15000],
    ["Beras", 12000],
    ["Mie Instan", 2500],
    ["Minyak Goreng", 18500],
    ["Telor Ayam", 24600],
  ];

  for (let i = 0; i < items.length - 1; i++) {
    for (let j = 0; j < items.length - i - 1; j++) {
      if (items[j][1] < items[j + 1][1]) {
        const temp = items[j];
        items[j] = items[j + 1];
        items[j + 1] = temp;
      }
    }
  }

  let remainingMoney = money;
  let listPurchased = [];

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (remainingMoney >= item[1]) {
      listPurchased.push(item[0]);
      remainingMoney -= item[1];
    }
  }

  result["memberId"] = memberId;
  result["money"] = money;
  result["listPurchased"] = listPurchased;
  result["changeMoney"] = remainingMoney;

  return result;
}

// TEST CASE
console.log(shoppingTime("12kTsasdAl", 75000));
console.log(shoppingTime("13KasdfG3D", 30000));
console.log(shoppingTime("", 25700));
console.log(shoppingTime("234JdRxa53", 1500));
console.log(shoppingTime());
