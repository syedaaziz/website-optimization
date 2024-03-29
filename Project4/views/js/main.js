/*
Welcome to the 60fps project! Your goal is to make Cam's Pizzeria website run
jank-free at 60 frames per second.

There are two major issues in this code that lead to sub-60fps performance. Can
you spot and fix both?


Built into the code, you'll find a few instances of the User Timing API
(window.performance), which will be console.log()ing frame rate data into the
browser console. To learn more about User Timing API, check out:
http://www.html5rocks.com/en/tutorials/webperformance/usertiming/

Creator:
Cameron Pittman, Udacity Course Developer
cameron *at* udacity *dot* com
*/

// As you may have realized, this website randomly generates pizzas.
// Here are arrays of all possible pizza ingredients.
var pizzaIngredients = {};
pizzaIngredients.meats = [
  "Pepperoni",
  "Sausage",
  "Fennel Sausage",
  "Spicy Sausage",
  "Chicken",
  "BBQ Chicken",
  "Chorizo",
  "Chicken Andouille",
  "Salami",
  "Tofu",
  "Bacon",
  "Canadian Bacon",
  "Proscuitto",
  "Italian Sausage",
  "Ground Beef",
  "Anchovies",
  "Turkey",
  "Ham",
  "Venison",
  "Lamb",
  "Duck",
  "Soylent Green",
  "Carne Asada",
  "Soppressata Picante",
  "Coppa",
  "Pancetta",
  "Bresola",
  "Lox",
  "Guanciale",
  "Chili",
  "Beef Jerky",
  "Pastrami",
  "Kielbasa",
  "Scallops",
  "Filet Mignon"
];
pizzaIngredients.nonMeats = [
  "White Onions",
  "Red Onions",
  "Sauteed Onions",
  "Green Peppers",
  "Red Peppers",
  "Banana Peppers",
  "Ghost Peppers",
  "Habanero Peppers",
  "Jalapeno Peppers",
  "Stuffed Peppers",
  "Spinach",
  "Tomatoes",
  "Pineapple",
  "Pear Slices",
  "Apple Slices",
  "Mushrooms",
  "Arugula",
  "Basil",
  "Fennel",
  "Rosemary",
  "Cilantro",
  "Avocado",
  "Guacamole",
  "Salsa",
  "Swiss Chard",
  "Kale",
  "Sun Dried Tomatoes",
  "Walnuts",
  "Artichoke",
  "Asparagus",
  "Caramelized Onions",
  "Mango",
  "Garlic",
  "Olives",
  "Cauliflower",
  "Polenta",
  "Fried Egg",
  "Zucchini",
  "Hummus"
];
pizzaIngredients.cheeses = [
  "American Cheese",
  "Swiss Cheese",
  "Goat Cheese",
  "Mozzarella Cheese",
  "Parmesean Cheese",
  "Velveeta Cheese",
  "Gouda Cheese",
  "Muenster Cheese",
  "Applewood Cheese",
  "Asiago Cheese",
  "Bleu Cheese",
  "Boursin Cheese",
  "Brie Cheese",
  "Cheddar Cheese",
  "Chevre Cheese",
  "Havarti Cheese",
  "Jack Cheese",
  "Pepper Jack Cheese",
  "Gruyere Cheese",
  "Limberger Cheese",
  "Manchego Cheese",
  "Marscapone Cheese",
  "Pecorino Cheese",
  "Provolone Cheese",
  "Queso Cheese",
  "Roquefort Cheese",
  "Romano Cheese",
  "Ricotta Cheese",
  "Smoked Gouda"
];
pizzaIngredients.sauces = [
  "Red Sauce",
  "Marinara",
  "BBQ Sauce",
  "No Sauce",
  "Hot Sauce"
];
pizzaIngredients.crusts = [
  "White Crust",
  "Whole Wheat Crust",
  "Flatbread Crust",
  "Stuffed Crust"
];

// Name generator pulled from http://saturdaykid.com/usernames/generator.html
// Capitalizes first letter of each word
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

// Pulls adjective out of array using random number sent from generator
function getAdj(x){
  var adjectives = [];
  switch(x) {
    case "dark": 
      var dark = ["dark","morbid", "scary", "spooky", "gothic", "deviant", "creepy", "sadistic", "black", "dangerous", "dejected", "haunted", 
      "morose", "tragic", "shattered", "broken", "sad", "melancholy", "somber", "dark", "gloomy", "homicidal", "murderous", "shady", "misty", 
      "dusky", "ghostly", "shadowy", "demented", "cursed", "insane", "possessed", "grotesque", "obsessed"];
      adjectives = dark;
    case "color": 
      var colors = ["blue", "green", "purple", "grey", "scarlet", "NeonGreen", "NeonBlue", "NeonPink", "HotPink", "pink", "black", "red", 
      "maroon", "silver", "golden", "yellow", "orange", "mustard", "plum", "violet", "cerulean", "brown", "lavender", "violet", "magenta",
      "chestnut", "rosy", "copper", "crimson", "teal", "indigo", "navy", "azure", "periwinkle", "brassy", "verdigris", "veridian", "tan", 
      "raspberry", "beige", "sandy", "ElectricBlue", "white", "champagne", "coral", "cyan"];
      adjectives = colors;
    case "whimsical": 
      var whimsy = ["whimsical", "silly", "drunken", "goofy", "funny", "weird", "strange", "odd", "playful", "clever", "boastful", "breakdancing",
      "hilarious", "conceited", "happy", "comical", "curious", "peculiar", "quaint", "quirky", "fancy", "wayward", "fickle", "yawning", "sleepy",
      "cockeyed", "dizzy", "dancing", "absurd", "laughing", "hairy", "smiling", "perplexed", "baffled", "cockamamie", "vulgar", "hoodwinked", 
      "brainwashed"];
      adjectives = whimsy;
    case "shiny":
      var shiny = ["sapphire", "opal", "silver", "gold", "platinum", "ruby", "emerald", "topaz", "diamond", "amethyst", "turquoise", 
      "starlit", "moonlit", "bronze", "metal", "jade", "amber", "garnet", "obsidian", "onyx", "pearl", "copper", "sunlit", "brass", "brassy",
      "metallic"];
      adjectives = shiny;
    case "noisy":
      var noisy = ["untuned", "loud", "soft", "shrieking", "melodious", "musical", "operatic", "symphonic", "dancing", "lyrical", "harmonic", 
      "orchestral", "noisy", "dissonant", "rhythmic", "hissing", "singing", "crooning", "shouting", "screaming", "wailing", "crying", "howling",
      "yelling", "hollering", "caterwauling", "bawling", "bellowing", "roaring", "squealing", "beeping", "knocking", "tapping", "rapping", 
      "humming", "scatting", "whispered", "whispering", "rasping", "buzzing", "whirring", "whistling", "whistled"];
      adjectives = noisy;
    case "apocalyptic":
      var apocalyptic = ["nuclear", "apocalyptic", "desolate", "atomic", "zombie", "collapsed", "grim", "fallen", "collapsed", "cannibalistic", 
      "radioactive", "toxic", "poisonous", "venomous", "disastrous", "grimy", "dirty", "undead", "bloodshot", "rusty", "glowing", "decaying",
      "rotten", "deadly", "plagued", "decimated", "rotting", "putrid", "decayed", "deserted", "acidic"];
      adjectives = apocalyptic;
    case "insulting":
      var insulting = ["stupid", "idiotic", "fat", "ugly", "hideous", "grotesque", "dull", "dumb", "lazy", "sluggish", "brainless", "slow", 
      "gullible", "obtuse", "dense", "dim", "dazed", "ridiculous", "witless", "daft", "crazy", "vapid", "inane", "mundane", "hollow", "vacuous",
      "boring", "insipid", "tedious", "monotonous", "weird", "bizarre", "backward", "moronic", "ignorant", "scatterbrained", "forgetful", "careless", 
      "lethargic", "insolent", "indolent", "loitering", "gross", "disgusting", "bland", "horrid", "unseemly", "revolting", "homely", "deformed",
      "disfigured", "offensive", "cowardly", "weak", "villainous", "fearful", "monstrous", "unattractive", "unpleasant", "nasty", "beastly", "snide", 
      "horrible", "syncophantic", "unhelpful", "bootlicking"];
      adjectives = insulting;
    case "praise":
      var praise = ["beautiful", "intelligent", "smart", "genius", "ingenious", "gorgeous", "pretty", "witty", "angelic", "handsome", "graceful",
      "talented", "exquisite", "enchanting", "fascinating", "interesting", "divine", "alluring", "ravishing", "wonderful", "magnificient", "marvelous",
      "dazzling", "cute", "charming", "attractive", "nifty", "delightful", "superior", "amiable", "gentle", "heroic", "courageous", "valiant", "brave", 
      "noble", "daring", "fearless", "gallant", "adventurous", "cool", "enthusiastic", "fierce", "awesome", "radical", "tubular", "fearsome", 
      "majestic", "grand", "stunning"];
      adjectives = praise;
    case "scientific":
      var scientific = ["scientific", "technical", "digital", "programming", "calculating", "formulating", "cyberpunk", "mechanical", "technological", 
      "innovative", "brainy", "chemical", "quantum", "astro", "space", "theoretical", "atomic", "electronic", "gaseous", "investigative", "solar", 
      "extinct", "galactic"];
      adjectives = scientific;
    default:
      var scientific_default = ["scientific", "technical", "digital", "programming", "calculating", "formulating", "cyberpunk", "mechanical", "technological", 
      "innovative", "brainy", "chemical", "quantum", "astro", "space", "theoretical", "atomic", "electronic", "gaseous", "investigative", "solar", 
      "extinct", "galactic"];
      adjectives = scientific_default;
  }

  // Moved calcuation to inside function so an array of values would not be returned. 
  randomAdjective = parseInt(Math.random() * adjectives.length);
  return adjectives[randomAdjective];
}

// Pulls noun out of array using random number sent from generator
function getNoun(y) {
  var nouns = [];
  switch(y) {
    case "animals": 
      var animals = ["flamingo", "hedgehog", "owl", "elephant", "pussycat", "alligator", "dachsund", "poodle", "beagle", "crocodile", "kangaroo", 
      "wallaby", "woodpecker", "eagle", "falcon", "canary", "parrot", "parakeet", "hamster", "gerbil", "squirrel", "rat", "dove", "toucan", 
      "raccoon", "vulture", "peacock", "goldfish", "rook", "koala", "skunk", "goat", "rooster", "fox", "porcupine", "llama", "grasshopper", 
      "gorilla", "monkey", "seahorse", "wombat", "wolf", "giraffe", "badger", "lion", "mouse", "beetle", "cricket", "nightingale", 
      "hawk", "trout", "squid", "octopus", "sloth", "snail", "locust", "baboon", "lemur", "meerkat", "oyster", "frog", "toad", "jellyfish", 
      "butterfly", "caterpillar", "tiger", "hyena", "zebra", "snail", "pig", "weasel", "donkey", "penguin", "crane", "buzzard", "vulture", 
      "rhino", "hippopotamus", "dolphin", "sparrow", "beaver", "moose", "minnow", "otter", "bat", "mongoose", "swan", "firefly", "platypus"];
      nouns = animals;
    case "profession": 
      var professions = ["doctor", "lawyer", "ninja", "writer", "samurai", "surgeon", "clerk", "artist", "actor", "engineer", "mechanic",
      "comedian", "fireman", "nurse", "RockStar", "musician", "carpenter", "plumber", "cashier", "electrician", "waiter", "president", "governor", 
      "senator", "scientist", "programmer", "singer", "dancer", "director", "mayor", "merchant", "detective", "investigator", "navigator", "pilot",
      "priest", "cowboy", "stagehand", "soldier", "ambassador", "pirate", "miner", "police"];
      nouns = professions; 
    case "fantasy": 
      var fantasy = ["centaur", "wizard", "gnome", "orc", "troll", "sword", "fairy", "pegasus", "halfling", "elf", "changeling", "ghost", 
      "knight", "squire", "magician", "witch", "warlock", "unicorn", "dragon", "wyvern", "princess", "prince", "king", "queen", "jester", 
      "tower", "castle", "kraken", "seamonster", "mermaid", "psychic", "seer", "oracle"];
      nouns = fantasy;
    case "music":
      var music = ["violin", "flute", "bagpipe", "guitar", "symphony", "orchestra", "piano", "trombone", "tuba", "opera", "drums", 
      "harpsichord", "harp", "harmonica", "accordion", "tenor", "soprano", "baritone", "cello", "viola", "piccolo", "ukelele", "woodwind", "saxophone",
      "bugle", "trumpet", "sousaphone", "cornet", "stradivarius", "marimbas", "bells", "timpani", "bongos", "clarinet", "recorder", "oboe", "conductor",
      "singer"];
      nouns = music;
    case "horror":
      var horror = ["murderer", "chainsaw", "knife", "sword", "murder", "devil", "killer", "psycho", "ghost", "monster", "godzilla", "werewolf", 
      "vampire", "demon", "graveyard", "zombie", "mummy", "curse", "death", "grave", "tomb", "beast", "nightmare", "frankenstein", "specter", 
      "poltergeist", "wraith", "corpse", "scream", "massacre", "cannibal", "skull", "bones", "undertaker", "zombie", "creature", "mask", "psychopath",
      "fiend", "satanist", "moon", "fullMoon"];
      nouns = horror;
    case "gross":
      var gross = ["slime", "bug", "roach", "fluid", "pus", "booger", "spit", "boil", "blister", "orifice", "secretion", "mucus", "phlegm", 
      "centipede", "beetle", "fart", "snot", "crevice", "flatulence", "juice", "mold", "mildew", "germs", "discharge", "toilet", "udder", "odor", "substance", 
      "fluid", "moisture", "garbage", "trash", "bug"];
      nouns = gross;
    case "everyday":
      var everyday = ["mirror", "knife", "fork", "spork", "spoon", "tupperware", "minivan", "suburb", "lamp", "desk", "stereo", "television", "TV",
      "book", "car", "truck", "soda", "door", "video", "game", "computer", "calender", "tree", "plant", "flower", "chimney", "attic", "kitchen",
      "garden", "school", "wallet", "bottle"];
      nouns = everyday;
    case "jewelry":
      var jewelry = ["earrings", "ring", "necklace", "pendant", "choker", "brooch", "bracelet", "cameo", "charm", "bauble", "trinket", "jewelry", 
      "anklet", "bangle", "locket", "finery", "crown", "tiara", "blingBling", "chain", "rosary", "jewel", "gemstone", "beads", "armband", "pin",
      "costume", "ornament", "treasure"];
      nouns = jewelry;
    case "places":
      var places = ["swamp", "graveyard", "cemetery", "park", "building", "house", "river", "ocean", "sea", "field", "forest", "woods", "neighborhood",
      "city", "town", "suburb", "country", "meadow", "cliffs", "lake", "stream", "creek", "school", "college", "university", "library", "bakery",
      "shop", "store", "theater", "garden", "canyon", "highway", "restaurant", "cafe", "diner", "street", "road", "freeway", "alley"];
      nouns = places;
    case "scifi":
      var scifi = ["robot", "alien", "raygun", "spaceship", "UFO", "rocket", "phaser", "astronaut", "spaceman", "planet", "star", "galaxy", 
      "computer", "future", "timeMachine", "wormHole", "timeTraveler", "scientist", "invention", "martian", "pluto", "jupiter", "saturn", "mars",
      "quasar", "blackHole", "warpDrive", "laser", "orbit", "gears", "molecule", "electron", "neutrino", "proton", "experiment", "photon", "apparatus",
      "universe", "gravity", "darkMatter", "constellation", "circuit", "asteroid"];
      nouns = scifi;
    default:
      var scifi_default = ["robot", "alien", "raygun", "spaceship", "UFO", "rocket", "phaser", "astronaut", "spaceman", "planet", "star", "galaxy", 
      "computer", "future", "timeMachine", "wormHole", "timeTraveler", "scientist", "invention", "martian", "pluto", "jupiter", "saturn", "mars",
      "quasar", "blackHole", "warpDrive", "laser", "orbit", "gears", "molecule", "electron", "neutrino", "proton", "experiment", "photon", "apparatus",
      "universe", "gravity", "darkMatter", "constellation", "circuit", "asteroid"];
      nouns = scifi_default;
  } 

  // Moved calculation to inside function so an array would not be returned
  randomNoun = parseInt(Math.random() * nouns.length);
  return nouns[randomNoun];
}

var adjectives = ["dark", "color", "whimsical", "shiny", "noise", "apocalyptic", "insulting", "praise", "scientific"];  // types of adjectives for pizza titles
var nouns = ["animals", "everyday", "fantasy", "gross", "horror", "jewelry", "places", "scifi"];                        // types of nouns for pizza titles

// Generates random numbers for getAdj and getNoun functions and returns a new pizza name
function generator(adj, noun) {
  var randomAdjective = getAdj(adj);
  var randomNoun = getNoun(noun);
  var name = "The " + randomAdjective.capitalize() + " " + randomNoun.capitalize();
  return name;
}

// Chooses random adjective and random noun
function randomName() {
  var randomNumberAdj = parseInt(Math.random() * adjectives.length);
  var randomNumberNoun = parseInt(Math.random() * nouns.length);
  return generator(adjectives[randomNumberAdj], nouns[randomNumberNoun]);
}

// These functions return a string of a random ingredient from each respective category of ingredients.
var selectRandomMeat = function() {
  var randomMeat = pizzaIngredients.meats[Math.floor((Math.random() * pizzaIngredients.meats.length))];
  return randomMeat;
};

var selectRandomNonMeat = function() {
  var randomNonMeat = pizzaIngredients.nonMeats[Math.floor((Math.random() * pizzaIngredients.nonMeats.length))];
  return randomNonMeat;
};

var selectRandomCheese = function() {
  var randomCheese = pizzaIngredients.cheeses[Math.floor((Math.random() * pizzaIngredients.cheeses.length))];
  return randomCheese;
};

var selectRandomSauce = function() {
  var randomSauce = pizzaIngredients.sauces[Math.floor((Math.random() * pizzaIngredients.sauces.length))];
  return randomSauce;
};

var selectRandomCrust = function() {
  var randomCrust = pizzaIngredients.crusts[Math.floor((Math.random() * pizzaIngredients.crusts.length))];
  return randomCrust;
};

var ingredientItemizer = function(string) {
  return "<li>" + string + "</li>";
};

// Returns a string with random pizza ingredients nested inside <li> tags
var makeRandomPizza = function() {
  var pizza = "";

  var numberOfMeats = Math.floor((Math.random() * 4));
  var numberOfNonMeats = Math.floor((Math.random() * 3));
  var numberOfCheeses = Math.floor((Math.random() * 2));

  for (var i = 0; i < numberOfMeats; i++) {
    pizza = pizza + ingredientItemizer(selectRandomMeat());
  }

  for (var j = 0; j < numberOfNonMeats; j++) {
    pizza = pizza + ingredientItemizer(selectRandomNonMeat());
  }

  for (var k = 0; k < numberOfCheeses; k++) {
    pizza = pizza + ingredientItemizer(selectRandomCheese());
  }

  pizza = pizza + ingredientItemizer(selectRandomSauce());
  pizza = pizza + ingredientItemizer(selectRandomCrust());

  return pizza;
};

// returns a DOM element for each pizza
var pizzaElementGenerator = function(i) {
  var pizzaContainer,             // contains pizza title, image and list of ingredients
      pizzaImageContainer,        // contains the pizza image
      pizzaImage,                 // the pizza image itself
      pizzaDescriptionContainer,  // contains the pizza title and list of ingredients
      pizzaName,                  // the pizza name itself
      ul;                         // the list of ingredients

  pizzaContainer  = document.createElement("div");
  pizzaImageContainer = document.createElement("div");
  pizzaImage = document.createElement("img");
  pizzaDescriptionContainer = document.createElement("div");

  pizzaContainer.classList.add("randomPizzaContainer");
  pizzaContainer.style.width = "33.33%";
  pizzaContainer.style.height = "325px";
  pizzaContainer.id = "pizza" + i;                // gives each pizza element a unique id
  pizzaImageContainer.classList.add("col-md-6");

  pizzaImage.src = "images/pizza.png";
  pizzaImage.src.height = "300px";
  pizzaImage.src.width = "232px";
  pizzaImage.classList.add("img-responsive");
  pizzaImageContainer.appendChild(pizzaImage);
  pizzaContainer.appendChild(pizzaImageContainer);


  pizzaDescriptionContainer.classList.add("col-md-6");

  pizzaName = document.createElement("h4");
  pizzaName.innerHTML = randomName();
  pizzaDescriptionContainer.appendChild(pizzaName);

  ul = document.createElement("ul");
  ul.innerHTML = makeRandomPizza();
  pizzaDescriptionContainer.appendChild(ul);
  pizzaContainer.appendChild(pizzaDescriptionContainer);

  return pizzaContainer;
};

// resizePizzas(size) is called when the slider in the "Our Pizzas" section of the website moves.
var resizePizzas = function(size) { 
  window.performance.mark("mark_start_resize");   // User Timing API function

  // Changes the value for the size of the pizza above the slider
  function changeSliderLabel(size) {
    switch(size) {
      case "1":
        document.getElementById("pizzaSize").innerHTML = "Small";
        return;
      case "2":
        document.getElementById("pizzaSize").innerHTML = "Medium";
        return;
      case "3":
        document.getElementById("pizzaSize").innerHTML = "Large";
        return;
      default:
        console.log("bug in changeSliderLabel");
    }
  }

  changeSliderLabel(size);

  // Returns the size difference to change a pizza element from one size to another. Called by changePizzaSlices(size).
  function determineDx (elem, size) {
    var oldwidth = elem.offsetWidth;
    var windowwidth = document.getElementById("randomPizzas").offsetWidth;
    var oldsize = oldwidth / windowwidth;

    // TODO: change to 3 sizes? no more xl?
    // Changes the slider value to a percent width
    function sizeSwitcher (size) {
      switch(size) {
        case "1":
          return 0.25;
        case "2":
          return 0.3333;
        case "3":
          return 0.5;
        default:
          console.log("bug in sizeSwitcher");
      }
    }

    var newsize = sizeSwitcher(size);
    var dx = (newsize - oldsize) * windowwidth;

    return dx;
  }

    // Iterates through pizza elements on the page and changes their widths
    // Removed the variables from the loop as they do not need to be in the loop
    // Also switched from querySelectorAll to getElementsByClassName to improve performance
    var randomPizzaContainer = document.getElementsByClassName('randomPizzaContainer')
    var dx = determineDx(randomPizzaContainer[0], size);
    var newWidth = (randomPizzaContainer[0].offsetWidth + dx) + 'px';
    var randomPizzaContainerLength = randomPizzaContainer.length;

  function changePizzaSizes(size) {
    for (var i = 0; i < randomPizzaContainerLength; i++) {
      randomPizzaContainer[i].style.width = newWidth;     
    }    
  }


  changePizzaSizes(size);

  // User Timing API is awesome
  window.performance.mark("mark_end_resize");
  window.performance.measure("measure_pizza_resize", "mark_start_resize", "mark_end_resize");
  var timeToResize = window.performance.getEntriesByName("measure_pizza_resize");
  console.log("Time to resize pizzas: " + timeToResize[0].duration + "ms");
};

window.performance.mark("mark_start_generating"); // collect timing data

// This for-loop actually creates and appends all of the pizzas when the page loads

// Creates the pizzas in memory
var generatedPizzas = document.createDocumentFragment();

var pizzasDiv = document.getElementById("randomPizzas");

function addPizza() {
  for (var i = 2; i < 100; i++) {
  generatedPizzas.appendChild(pizzaElementGenerator(i));
  }
  // Allows us to append once
  pizzasDiv.appendChild(generatedPizzas);
};

// User Timing API again. These measurements tell you how long it took to generate the initial pizzas
window.performance.mark("mark_end_generating");
window.performance.measure("measure_pizza_generation", "mark_start_generating", "mark_end_generating");
var timeToGenerate = window.performance.getEntriesByName("measure_pizza_generation");
console.log("Time to generate pizzas on load: " + timeToGenerate[0].duration + "ms");

// Iterator for number of times the pizzas in the background have scrolled.
// Used by updatePositions() to decide when to log the average time per frame
var frame = 0;

// Logs the average amount of time per 10 frames needed to move the sliding background pizzas on scroll.
function logAverageFrame(times) {   // times is the array of User Timing measurements from updatePositions()
  var numberOfEntries = times.length;
  var sum = 0;
  for (var i = numberOfEntries - 1; i > numberOfEntries - 11; i--) {
    sum = sum + times[i].duration;
  }
  console.log("Average time to generate last 10 frames: " + sum / 10 + "ms");
}

// The following code for sliding background pizzas was pulled from Ilya's demo found at:
// https://www.igvita.com/slides/2012/devtools-tips-and-tricks/jank-demo.html


// Set when page is loaded
var items = null;

// Set when page is loaded
var itemsLength = null;

// Moves the sliding background pizzas based on scroll position
function updatePositions() {
  frame++;
  window.performance.mark("mark_start_frame");
  
  // Took these items out of loop
  var lastScroll = document.body.scrollTop;
  var thisItem;
  var phase;

  for (var i = 0; i < itemsLength; i++) {
    phase = Math.sin((lastScroll / 1250) + (i % 5));
    thisItem = items[i];

    thisItem.style.left = thisItem.basicLeft + 100 * phase + 'px';
  }

  // User Timing API to the rescue again. Seriously, it's worth learning.
  // Super easy to create custom metrics.
  window.performance.mark("mark_end_frame");
  window.performance.measure("measure_frame_duration", "mark_start_frame", "mark_end_frame");
  if (frame % 10 === 0) {
    var timesToUpdatePosition = window.performance.getEntriesByName("measure_frame_duration");
    logAverageFrame(timesToUpdatePosition);
  }
}

// runs updatePositions on scroll
window.addEventListener('scroll', updatePositions);

// Create the pizzas in memory
var imageTree = document.createDocumentFragment();

function fillImageTree (i, cols, s, h) {
  var elem = document.createElement('img');
  elem.className = 'mover';
  elem.src = "data:image/png;base64,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";
  elem.style.height = "100px";
  elem.style.width = "73.333px";

  elem.style.left = ((i % cols) * s) + "px";
  elem.basicLeft = ((i % cols) * s);
  
  elem.style.top = (Math.floor(i / cols) * s) + 'px';
  imageTree.appendChild(elem);
}

// Generates the sliding pizzas when the page loads.
document.addEventListener('DOMContentLoaded', function() {
  var cols = 8;
  var s = 256;
  var h = screen.availHeight / 4;
  var pizzaNum = cols * 4;
  console.log(pizzaNum);


  var movingPizzas = document.getElementById("movingPizzas1")
  
  // Changed this loop to run for 30 pizzas rather than 200 because only a limited number are visible on the screen.
  for (var i = 0; i < 30; i++) {
    fillImageTree(i, cols, s, h);
  }

  // Adds all pizzas after load
  addPizza();
  movingPizzas.appendChild(imageTree);

  // Set as page is loaded
  items = document.getElementsByClassName('mover'); 

  // Set as page is loaded 
  itemsLength = items.length;

});
