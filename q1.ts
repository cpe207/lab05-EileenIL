// define interface for Hero and Shop objects
interface Hero {
 items: string[]; 
 gold : number;
}

interface Shop {
 item: string;
 price: number;
}

// assign interface/type to the function definition properly
function buyItem(hero, shop) {
  if(hero.gold>=shop.price) {
    hero.items.push(shop.item);
    hero.gold-=shop.price;
  }
  return hero;
}
//Test cases : assign proper type/interface to all objects
const hero1 = {
  items: ["sword", "potion"],
  gold: 50,
};

const shop1 = {
  item: "armor",
  price: 20,
};

const hero2 = {
  items: ["sword", "potion"],
  gold: 50,
};

const shop2 = {
  item: "legendary armor",
  price: 200,
};

console.log(buyItem(hero1, shop1));
console.log(buyItem(hero2, shop2));

module.exports = buyItem;


//รหัส นศ.: 660610795

//ชื่อ-สกุล : ศดานันท์ ลักษณะอารีย์