let fruit = ['Alfalfa Sprouts', 'Apple', 'Apricot', 'Artichoke', 'Asian Pear', 'Asparagus', 'Atemoya', 'Avocado', 'Bamboo Shoots', 'Banana', 'Bean Sprouts', 'Beans', 'Beets', 'Belgian Endive', 'Bell Peppers', 'Bitter Melon', 'Blackberries', 'Blueberries', 'Bok Choy', 'Boniato', 'Boysenberries', 'Broccoflower', 'Broccoli', 'Brussels Sprouts', 'Cabbage', 'Cactus Pear', 'Cantaloupe', 'Carambola', 'Carrots', 'Casaba Melon', 'Cauliflower', 'Celery', 'Chayote', 'Cherimoya', 'Cherries', 'Coconuts', 'Collard Greens', 'Corn', 'Cranberries', 'Cucumber', 'Dates', 'Dried Plums', 'Eggplant', 'Endive', 'Escarole', 'Feijoa', 'Fennel', 'Figs', 'Garlic', 'Gooseberries', 'Grapefruit', 'Grapes', 'Green Beans', 'Green Onions', 'Greens', 'Guava', 'Hominy', 'Honeydew Melon', 'Horned Melon', 'Iceberg Lettuce', 'Jerusalem Artichoke', 'Jicama', 'Kale', 'Kiwi', 'Kohlrabi', 'Kumquat', 'Leeks', 'Lemons', 'Lettuce', 'Lima Beans', 'Limes', 'Longan', 'Loquat', 'Lychee', 'Madarins', 'Malanga', 'Mandarin Oranges', 'Mangos', 'Mulberries', 'Mushrooms', 'Napa', 'Nectarines', 'Okra', 'Onion', 'Oranges', 'Papayas', 'Parsnip', 'Passion Fruit', 'Peaches', 'Pears', 'Peas', 'Peppers', 'Persimmons', 'Pineapple', 'Plantains', 'Plums', 'Pomegranate', 'Potatoes', 'Prickly Pear', 'Prunes', 'Pummelo', 'Pumpkin', 'Quince', 'Radicchio', 'Radishes', 'Raisins', 'Raspberries', 'Red Cabbage', 'Rhubarb', 'Romaine Lettuce', 'Rutabaga', 'Shallots', 'Snow Peas', 'Spinach', 'Sprouts', 'Squash', 'Strawberries', 'String Beans', 'Sweet Potato', 'Tangelo', 'Tangerines', 'Tomatillo', 'Tomato', 'Turnip', 'Ugli Fruit', 'Water Chestnuts', 'Watercress', 'Watermelon', 'Waxed Beans', 'Yams', 'Yellow Squash', 'Yuca/Cassava', 'Zucchini Squash']

function binarySearch(item) {
  fruit.sort
  let min = 0
  let max = fruit.length - 1
  
  while (min <= max) {
    let midpoint = Math.floor((max + min) / 2)
    if (fruit[midpoint] > item) {
      max = midpoint - 1
    }
    else if (fruit[midpoint] < item) {
      min = midpoint + 1
    }
    else if (fruit[midpoint] == item) {
      return true
    }
  }
  return false
}

console.log("Plums is in the list", binarySearch('Plums')) // should be true
console.log("Grape is in the list", binarySearch('Grape')) // should be false

