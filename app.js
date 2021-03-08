const getRandom = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
}

const countries = [
  'Canada', 'America', 'Mexico', 'England', 'Ireland', 'Scandinavia', 'France', 'Germany', 'Iceland', 'Venezuela', 'Netherlands', 'Switzerland', 'Italy', 'Syria', 'Greece', 'Colombia', 'Brazil', 'Chile', 'Argentina', 'Austria', 'Kazakhstan', 'Iraq', 'Russia', 'Turkey', 'India', 'China', 'Japan', 'Malaysia', 'Saudi Arabia', 'Egypt', 'Somalia', 'Nigeria', 'Morocco', 'Madagascar', 'South Africa', 'Australia', 'Romania', 'Thailand', 'Greenland', 'Antarctica'
]
const stereotypes = [
  'fur trappers', '"land of awesome"', 'housekeeping', 'St. Patrick', 'Royalty', 'smelly armpits', 'dirty porn', 'cash', 'godfathers', 'bombs', 'crisis', 'chocolate', 'Dracula', 'poultry', 'commies', 'WTF?', 'Borat', 'savages', 'sushi ninjas', 'satan', 'terrorists', 'fuck yeah', 'Al Quaeda', 'yoga', 'alpinists', 'sex slaves', 'flip flops', "Obama's schoolmates", 'war', 'cocaine', 'Stalin', 'jungle', 'bananas', 'dwarfs', 'llamas', 'drama queens', '"chili con karnay"', 'democracy', 'fucking desert', 'hunger & stuff', 'pirates', 'African Americans', 'AIDS', 'diamonds', 'penguins', 'reggae', 'greasers', 'kangaroo riders'
]
const generateMessage = () => {
  return `You should visit ${getRandom(countries)}, there's a lot of ${getRandom(stereotypes)} over there!`
}


const handleClick = () => {
  document.getElementById('output').innerHTML = generateMessage()
}

// document.querySelector('.btn-success').addEventListener('click', handleClick)
document.getElementById('suggestion').onclick = handleClick;