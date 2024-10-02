import chowhubImg from './assets/chowhub.png';
import burgershotImg from './assets/burgershot.png';
import uwuImg from './assets/uwu.png';
import pizzathisImg from './assets/pizzathis.png';
import bahamaImg from './assets/bahama.png';
import beanmachineImg from './assets/beanmachine.png';
import hornysImg from './assets/hornys.png';
import koiImg from './assets/koi.png';
import pearlsImg from './assets/pearls.png';
import upnatomsImg from './assets/upnatom.png';
import cluckinImg from './assets/cluckin.png';
import logoImg from './assets/logo.png';
import vanillaImg from './assets/vanilla.png';

export const DANK_SCRIPTS = [
    {
        image: logoImg,
        title: 'Dank_Utils',
        description: 'Dank Utils is a versatile framework and utility script designed for my projects. It automatically detects supported frameworks, inventory systems, and banking systems. Required for my scripts.',
        githubLink: 'https://github.com/DankLife-Studios/Dank_Utils',
    },
    {
        image: chowhubImg,
        title: 'Chowhub - Addon - Free With Purchase of any Restaurant',
        description: 'Chowhub revolutionizes food ordering in your city. With customizable menus and seamless integration, satisfy your cravings with ease.',
        escrowLink: "https://danklife-gaming-studios-script.tebex.io/package/5917886",
        opensourceLink: 'https://danklife-gaming-studios-script.tebex.io/package/6140060',
    },
    {
        image: burgershotImg,
        title: 'Burgershot',
        description: 'Welcome to Burgershot, where you craft more than just burgers, you build a culinary empire. Manage every aspect of your restaurant and become the burger tycoon of your dreams.',
        escrowLink: 'https://danklife-gaming-studios-script.tebex.io/package/4579084',
        opensourceLink: 'https://danklife-gaming-studios-script.tebex.io/package/6140046',
    },
    {
        image: uwuImg,
        title: 'Uwu Cafe',
        description: 'Indulge in the cozy ambiance of Uwu Cafe, where every sip and bite is infused with warmth and comfort. Join us for a delightful experience thats as unique as you are.',
        escrowLink: 'https://danklife-gaming-studios-script.tebex.io/package/6140049',
        opensourceLink: 'https://danklife-gaming-studios-script.tebex.io/package/4868360',
    },
    {
        image: pizzathisImg,
        title: 'Pizza This',
        description: 'Pizza This isn\'t just about pizza its about crafting memories one slice at a time. Join our team and deliver happiness to every doorstep in the city.',
        escrowLink: 'https://danklife-gaming-studios-script.tebex.io/package/4778617',
        opensourceLink: 'https://danklife-gaming-studios-script.tebex.io/package/6140052',
    },
    {
        image: pearlsImg,
        title: 'Pearls',
        description: 'Dive into the exquisite world of Pearls, where each dish is a masterpiece and every customer is treated like royalty. Experience culinary elegance like never before.',
        escrowLink: 'https://danklife-gaming-studios-script.tebex.io/package/4835786',
        opensourceLink: 'https://danklife-gaming-studios-script.tebex.io/package/6140059',
    },
    {
        image: upnatomsImg,
        title: 'Up N Atoms',
        description: 'Fuel up your day with Up N Atoms, the ultimate destination for quick bites and energy-packed meals. Join us in serving the city with a dose of vitality and flavor.',
        escrowLink: 'https://danklife-gaming-studios-script.tebex.io/package/5929387',
        opensourceLink: 'https://danklife-gaming-studios-script.tebex.io/package/6140054',
    },
    {
        image: hornysImg,
        title: 'Hornys',
        description: 'At Hornys, we\'re passionate about good food and good times. Join our team and be a part of the excitement as we redefine the dining experience in your city.',
        escrowLink: 'https://danklife-gaming-studios-script.tebex.io/package/6140047',
        opensourceLink: 'https://danklife-gaming-studios-script.tebex.io/package/5933696',
    },
    {
        image: bahamaImg,
        title: 'Bahama Mama',
        description: 'Escape to paradise at Bahama Mama, where tropical flavors and laid-back vibes transport you to a world of relaxation. Join us in spreading the spirit of aloha to all.',
        escrowLink: 'https://danklife-gaming-studios-script.tebex.io/package/5317284',
        opensourceLink: 'https://danklife-gaming-studios-script.tebex.io/package/6140056',
    },
    {
        image: beanmachineImg,
        title: 'BeanMachine',
        description: 'BeanMachine isn\'t just a coffee shop, its a community hub where connections are brewed over steaming cups of joe. Join us in fostering camaraderie and caffeine-fueled conversations.',
        escrowLink: 'https://danklife-gaming-studios-script.tebex.io/package/5082251',
        opensourceLink: 'https://danklife-gaming-studios-script.tebex.io/package/6140058',
    },
    {
        image: koiImg,
        title: 'Koi',
        description: 'Immerse yourself in the tranquil oasis of Koi, where every dish is a work of art and every moment is savored. Join us in creating unforgettable dining experiences for all who visit.',
        escrowLink: 'https://danklife-gaming-studios-script.tebex.io/package/6140061',
        opensourceLink: 'https://danklife-gaming-studios-script.tebex.io/package/6140062',
    },
    {
        image: cluckinImg,
        title: 'Cluckin Bell - Coming soon',
        description: 'Immerse yourself in the tranquil oasis of Koi, where every dish is a work of art and every moment is savored. Join us in creating unforgettable dining experiences for all who visit.',
        comingSoon: true,

    },
    {
        image: vanillaImg,
        title: 'Vanilla Unicorn - Coming soon',
        description: 'Immerse yourself in the vibrant atmosphere of Vanilla Unicorn, where every drink is crafted to perfection, every dish is a culinary delight, and every moment is unforgettable. Join us in creating unforgettable nightlife and dining experiences for all who visit.',
        comingSoon: true,
    },
];

export const INSTALLGUIDE = {
    bahama: {
        title: 'Place all images into qb-inventory images folder',
        textOne: 'You need these to add the items into qb-core shared.lua',
        codeOne: `['bahama_milk'] = {
    name = 'bahama_milk',
    label = 'Milk',
    weight = 30,
    type = 'item',
    image = 'bahama_milk.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A refreshing bottle of milk.'
},
['bahama_vanillaextract'] = {
    name = 'bahama_vanillaextract',
    label = 'Vanilla Extract',
    weight = 30,
    type = 'item',
    image = 'bahama_vanillaextract.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Concentrated vanilla flavor for baking and cooking.'
},
['bahama_tomatosauce'] = {
    name = 'bahama_tomatosauce',
    label = 'Tomato Sauce',
    weight = 300,
    type = 'item',
    image = 'bahama_tomatosauce.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Rich and flavorful tomato sauce for various dishes.'
},
['bahama_garlic'] = {
    name = 'bahama_garlic',
    label = 'Garlic',
    weight = 30,
    type = 'item',
    image = 'bahama_garlic.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A key ingredient for flavoring, indispensable in cooking.'
},
['bahama_butter'] = {
    name = 'bahama_butter',
    label = 'Butter',
    weight = 30,
    type = 'item',
    image = 'bahama_butter.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Creamy butter for cooking and baking.'
},
['bahama_soysauce'] = {
    name = 'bahama_soysauce',
    label = 'Soy Sauce',
    weight = 30,
    type = 'item',
    image = 'bahama_soysauce.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Salty and rich, perfect for Asian cuisine.'
},
['bahama_cashews'] = {
    name = 'bahama_cashews',
    label = 'Cashews',
    weight = 0,
    type = 'item',
    image = 'bahama_cashews.png',
    unique = false,
    useable = false,
    shouldClose = false,
    combinable = nil,
    description = 'Crunchy cashews, great for snacking or garnishing.'
},
['bahama_maliburum'] = {
    name = 'bahama_maliburum',
    label = 'Malibu Rum',
    weight = 0,
    type = 'item',
    image = 'bahama_maliburum.png',
    unique = false,
    useable = false,
    shouldClose = false,
    combinable = nil,
    description = 'Caribbean rum with coconut flavor.'
},
['bahama_grenadinesyrup'] = {
    name = 'bahama_grenadinesyrup',
    label = 'Grenadine Syrup',
    weight = 0,
    type = 'item',
    image = 'bahama_grenadinesyrup.png',
    unique = false,
    useable = false,
    shouldClose = false,
    combinable = nil,
    description = 'Sweet and deep red syrup for cocktails and sodas.'
},
['bahama_orangejuice'] = {
    name = 'bahama_orangejuice',
    label = 'Orange Juice',
    weight = 0,
    type = 'item',
    image = 'bahama_orangejuice.png',
    unique = false,
    useable = false,
    shouldClose = false,
    combinable = nil,
    description = 'Freshly squeezed orange juice.'
},
['bahama_pineapplejuice'] = {
    name = 'bahama_pineapplejuice',
    label = 'Pineapple Juice',
    weight = 0,
    type = 'item',
    image = 'bahama_pineapplejuice.png',
    unique = false,
    useable = false,
    shouldClose = false,
    combinable = nil,
    description = 'Tropical pineapple juice, sweet and tart.'
},
['bahama_apricotbrandy'] = {
    name = 'bahama_apricotbrandy',
    label = 'Apricot Brandy',
    weight = 0,
    type = 'item',
    image = 'bahama_apricotbrandy.png',
    unique = false,
    useable = false,
    shouldClose = false,
    combinable = nil,
    description = 'Smooth brandy with a hint of apricot flavor.'
},
['bahama_darkrum'] = {
    name = 'bahama_darkrum',
    label = 'Dark Rum',
    weight = 0,
    type = 'item',
    image = 'bahama_darkrum.png',
    unique = false,
    useable = false,
    shouldClose = false,
    combinable = nil,
    description = 'Rich and molasses flavored rum for cocktails.'
},
['bahama_hibiscussyrup'] = {
    name = 'bahama_hibiscussyrup',
    label = 'Hibiscus Syrup',
    weight = 0,
    type = 'item',
    image = 'bahama_hibiscussyrup.png',
    unique = false,
    useable = false,
    shouldClose = false,
    combinable = nil,
    description = 'Floral and slightly tangy syrup for exotic drinks.'
},
['bahama_limejuice'] = {
    name = 'bahama_limejuice',
    label = 'Lime Juice',
    weight = 0,
    type = 'item',
    image = 'bahama_limejuice.png',
    unique = false,
    useable = false,
    shouldClose = false,
    combinable = nil,
    description = 'Acidic lime juice, essential for cocktails and cooking.'
},
['bahama_agavesyrup'] = {
    name = 'bahama_agavesyrup',
    label = 'Agave Syrup',
    weight = 0,
    type = 'item',
    image = 'bahama_agavesyrup.png',
    unique = false,
    useable = false,
    shouldClose = false,
    combinable = nil,
    description = 'Sweet syrup made from agave, perfect for sweetening.'
},
['bahama_tequila'] = {
    name = 'bahama_tequila',
    label = 'Tequila',
    weight = 0,
    type = 'item',
    image = 'bahama_tequila.png',
    unique = false,
    useable = false,
    shouldClose = false,
    combinable = nil,
    description = 'Mexican spirit made from blue agave.'
},
['bahama_vodka'] = {
    name = 'bahama_vodka',
    label = 'Vodka',
    weight = 0,
    type = 'item',
    image = 'bahama_vodka.png',
    unique = false,
    useable = false,
    shouldClose = false,
    combinable = nil,
    description = 'Clear distilled alcoholic beverage.'
},
['bahama_grandmarnier'] = {
    name = 'bahama_grandmarnier',
    label = 'Grand Marnier',
    weight = 0,
    type = 'item',
    image = 'bahama_grandmarnier.png',
    unique = false,
    useable = false,
    shouldClose = false,
    combinable = nil,
    description = 'French orange flavored liqueur.'
},
['bahama_passionfruitliqueur'] = {
    name = 'bahama_passionfruitliqueur',
    label = 'Passion Fruit Liqueur',
    weight = 0,
    type = 'item',
    image = 'bahama_passionfruitliqueur.png',
    unique = false,
    useable = false,
    shouldClose = false,
    combinable = nil,
    description = 'Sweet liqueur with a tropical passion fruit flavor.'
},
['bahama_champagne'] = {
    name = 'bahama_champagne',
    label = 'Champagne',
    weight = 0,
    type = 'item',
    image = 'bahama_champagne.png',
    unique = false,
    useable = false,
    shouldClose = false,
    combinable = nil,
    description = 'Sparkling wine for celebrations.'
},
['bahama_whiterum'] = {
    name = 'bahama_whiterum',
    label = 'White Rum',
    weight = 0,
    type = 'item',
    image = 'bahama_whiterum.png',
    unique = false,
    useable = false,
    shouldClose = false,
    combinable = nil,
    description = 'Light and versatile rum, perfect for cocktails.'
},
['bahama_orangecuracao'] = {
    name = 'bahama_orangecuracao',
    label = 'Orange Curacao',
    weight = 0,
    type = 'item',
    image = 'bahama_orangecuracao.png',
    unique = false,
    useable = false,
    shouldClose = false,
    combinable = nil,
    description = 'Orange flavored liqueur for adding a citrus kick.'
},
['bahama_orgeatsyrup'] = {
    name = 'bahama_orgeatsyrup',
    label = 'Orgeat Syrup',
    weight = 0,
    type = 'item',
    image = 'bahama_orgeatsyrup.png',
    unique = false,
    useable = false,
    shouldClose = false,
    combinable = nil,
    description = 'Sweet syrup made from almonds and sugar.'
},
['bahama_almonds'] = {
    name = 'bahama_almonds',
    label = 'Almonds',
    weight = 0,
    type = 'item',
    image = 'bahama_almonds.png',
    unique = false,
    useable = false,
    shouldClose = false,
    combinable = nil,
    description = 'Nutritious almonds, great for snacking or cooking.'
},
['bahama_peanuts'] = {
    name = 'bahama_peanuts',
    label = 'Peanuts',
    weight = 0,
    type = 'item',
    image = 'bahama_peanuts.png',
    unique = false,
    useable = false,
    shouldClose = false,
    combinable = nil,
    description = 'Popular legumes with a crunchy texture.'
},
['bahama_walnuts'] = {
    name = 'bahama_walnuts',
    label = 'Walnuts',
    weight = 0,
    type = 'item',
    image = 'bahama_walnuts.png',
    unique = false,
    useable = false,
    shouldClose = false,
    combinable = nil,
    description = 'Rich in omega 3, walnuts are perfect for a healthy snack.'
},
['bahama_bread'] = {
    name = 'bahama_bread',
    label = 'Bread',
    weight = 0,
    type = 'item',
    image = 'bahama_bread.png',
    unique = false,
    useable = false,
    shouldClose = false,
    combinable = nil,
    description = 'Staple food prepared from a dough of flour and water.'
},
['bahama_mustard'] = {
    name = 'bahama_mustard',
    label = 'Mustard',
    weight = 0,
    type = 'item',
    image = 'bahama_mustard.png',
    unique = false,
    useable = false,
    shouldClose = false,
    combinable = nil,
    description = 'Condiment made from the seeds of a mustard plant.'
},
['bahama_ham'] = {
    name = 'bahama_ham',
    label = 'Ham',
    weight = 0,
    type = 'item',
    image = 'bahama_ham.png',
    unique = false,
    useable = false,
    shouldClose = false,
    combinable = nil,
    description = 'Salty and savory, ham is a versatile meat.'
},
['bahama_pickles'] = {
    name = 'bahama_pickles',
    label = 'Pickles',
    weight = 0,
    type = 'item',
    image = 'bahama_pickles.png',
    unique = false,
    useable = false,
    shouldClose = false,
    combinable = nil,
    description = 'Cucumbers that have been pickled in a brine or vinegar.'
},
['bahama_pulledpork'] = {
    name = 'bahama_pulledpork',
    label = 'Pulled Pork',
    weight = 0,
    type = 'item',
    image = 'bahama_pulledpork.png',
    unique = false,
    useable = false,
    shouldClose = false,
    combinable = nil,
    description = 'Slow cooked pork that is shredded for sandwiches or plates.'
},
['bahama_cheese'] = {
    name = 'bahama_cheese',
    label = 'Cheese',
    weight = 0,
    type = 'item',
    image = 'bahama_cheese.png',
    unique = false,
    useable = false,
    shouldClose = false,
    combinable = nil,
    description = 'Dairy product derived from milk, available in many flavors.'
},
['bahama_bahamamama'] = {
    name = 'bahama_bahamamama',
    label = 'Bahama Mama',
    weight = 0,
    type = 'item',
    image = 'bahama_bahamamama.png',
    unique = false,
    useable = false,
    shouldClose = false,
    combinable = nil,
    description = 'Tropical cocktail that is a blend of sweet rums and fruit juices.'
},
['bahama_goombaysmash'] = {
    name = 'bahama_goombaysmash',
    label = 'Goombay Smash',
    weight = 0,
    type = 'item',
    image = 'bahama_goombaysmash.png',
    unique = false,
    useable = false,
    shouldClose = false,
    combinable = nil,
    description = 'Bahamian cocktail known for its fruity flavor.'
},
['bahama_hibiscusmargarita'] = {
    name = 'bahama_hibiscusmargarita',
    label = 'Hibiscus Margarita',
    weight = 0,
    type = 'item',
    image = 'bahama_hibiscusmargarita.png',
    unique = false,
    useable = false,
    shouldClose = false,
    combinable = nil,
    description = 'A unique twist on the classic margarita with hibiscus flavor.'
},
['bahama_rebelliousfish'] = {
    name = 'bahama_rebelliousfish',
    label = 'Rebellious Fish',
    weight = 0,
    type = 'item',
    image = 'bahama_rebelliousfish.png',
    unique = false,
    useable = false,
    shouldClose = false,
    combinable = nil,
    description = 'Vibrant cocktail with a mix of fruity flavors.'
},
['bahama_maitai'] = {
    name = 'bahama_maitai',
    label = 'Mai Tai',
    weight = 0,
    type = 'item',
    image = 'bahama_maitai.png',
    unique = false,
    useable = false,
    shouldClose = false,
    combinable = nil,
    description = 'Classic cocktail with rum, lime juice, and orgeat syrup.'
},
['bahama_mixednuts'] = {
    name = 'bahama_mixednuts',
    label = 'Mixed Nuts',
    weight = 0,
    type = 'item',
    image = 'bahama_mixednuts.png',
    unique = false,
    useable = false,
    shouldClose = false,
    combinable = nil,
    description = 'Assorted nuts for snacking.'
},
['bahama_cubansandwich'] = {
    name = 'bahama_cubansandwich',
    label = 'Cuban Sandwich',
    weight = 0,
    type = 'item',
    image = 'bahama_cubansandwich.png',
    unique = false,
    useable = false,
    shouldClose = false,
    combinable = nil,
    description = 'Pressed sandwich with ham, cheese, pickles, and mustard.'
},
['bahama_pallet'] = {
    name = 'bahama_pallet',
    label = 'Bahama Mama Pallet',
    weight = 0,
    type = 'item',
    image = 'bahama_pallet.png',
    unique = false,
    useable = false,
    shouldClose = false,
    combinable = nil,
    description = 'A pallet full of Bahama Mama ingredients and products.'
},
['bahama_pallettwo'] = {
    name = 'bahama_pallettwo',
    label = 'Second Bahama Mama Pallet',
    weight = 0,
    type = 'item',
    image = 'bahama_pallet.png',
    unique = false,
    useable = false,
    shouldClose = false,
    combinable = nil,
    description = 'Additional pallet for Bahama Mama supplies.'
},
['bahama_orange'] = {
    name = 'bahama_orange',
    label = 'Orange',
    weight = 0,
    type = 'item',
    image = 'bahama_orange.png',
    unique = false,
    useable = false,
    shouldClose = false,
    combinable = nil,
    description = 'Fresh orange, perfect for juicing or as a snack.'
},`,
        textTwo: 'Now add this to the qb-core/shared/job.lua',
        codeTwo: `['bahama'] = {
    label = 'bahama Mama',
    defaultDuty = true,
    grades = {
        ['0'] = {
          name = 'Recruit',
          payment = 150
        },
        ['1'] = {
          name = 'Crew Member',
          payment = 165
        },
        ['2'] = {
          name = 'Shift Manager',
          payment = 175
        },
        ['3'] = {
          name = 'Manager',
          payment = 185
        },
        ['4'] = {
          name = 'Owner',
          isboss = true,
          payment = 200
        },
    },
},`,
        textThree: 'You need add these to ConsumableEat in qb-smallresources',
        codeThree: `['bahama_mixednuts'] = math.random(15, 25),  
['bahama_cubansandwich'] = math.random(15, 25),`,
        textFour: 'You need add these to ConsumeablesDrink in qb-smallresources/config.lua',
        codeFour: `['bahama_orangejuice'] = math.random(15, 25),
['bahama_pineapplejuice'] = math.random(15, 25),`,
        textFive: 'You need add these to ConsumeablesAlcohol in qb-smallresources/config.lua',
        codeFive: `['bahama_bahamamama'] = math.random(15, 25),
['bahama_goombaysmash'] = math.random(15, 25),
['bahama_hibiscusmargarita'] = math.random(15, 25),
['bahama_rebelliousfish'] = math.random(15, 25),
['bahama_maitai'] = math.random(15, 25),
['bahama_maliburum'] = math.random(15, 25),
['bahama_apricotbrandy'] = math.random(15, 25),
['bahama_darkrum'] = math.random(15, 25),
['bahama_passionfruitliqueur'] = math.random(15, 25),
['bahama_whiterum'] = math.random(15, 25),`,
        textSix: 'You need add this in qb-management/client/cl_config.lua under Config.BossMenus and you also have to add the job to the qb-management database table.',
        codeSix: `['bahama'] = {
  vector3(-1370.42, -626.93, 30.35),
},`,
        textSeven: 'You need add this in qb-management/client/cl_config.lua under Config.BossMenuszone',
        codeSeven: `['bahama'] = {
  { coords = vector3(-1370.26, -625.84, 30.35), length = 1.0, width = 0.45, heading = 32, minZ = 30.15, maxZ = 30.87 },
},
`,
        textEight: undefined,
        codeEight: undefined,
        textNine: undefined,
        codeNine: undefined,
        textTen: undefined,
        codeTen: undefined,
        textEleven: undefined,
        codeEleven: undefined,
        textTwelve: undefined,
        codeTwelve: undefined,
        textThirteen: undefined,
        codeThirteen: undefined,
        textFourteen: undefined,
        codeFourteen: undefined,
        textFifteen: undefined,
        codeFifteen: undefined,
        textSixteen: undefined,
        codeSixteen: undefined,
        textSeventeen: undefined,
        codeSeventeen: undefined,
        textEighteen: undefined,
        codeEighteen: undefined,
        textNineteen: undefined,
        codeNineteen: undefined,
        textTwenty: undefined,
        codeTwenty: undefined,
    },
    beanmachine: {
        title: 'Place all images into qb-inventory images folder',
        textOne: 'You need these to add the items into qb-core shared.lua',
        codeOne: `['beanmachine_milk'] = {
    name = 'beanmachine_milk',
    label = 'Milk',
    weight = 30,
    type = 'item',
    image = 'beanmachine_milk.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Fresh milk, perfect for your coffee or tea.'
},
['beanmachine_vanillaextract'] = {
    name = 'beanmachine_vanillaextract',
    label = 'Vanilla Extract',
    weight = 30,
    type = 'item',
    image = 'beanmachine_vanillaextract.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A dash of vanilla extract to sweeten your beverages.'
},
['beanmachine_tomatosauce'] = {
    name = 'beanmachine_tomatosauce',
    label = 'Tomato Sauce',
    weight = 300,
    type = 'item',
    image = 'beanmachine_tomatosauce.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Rich tomato sauce, a versatile kitchen staple.'
},
['beanmachine_garlic'] = {
    name = 'beanmachine_garlic',
    label = 'Garlic',
    weight = 30,
    type = 'item',
    image = 'beanmachine_garlic.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Fresh garlic to add a punch of flavor.'
},
['beanmachine_butter'] = {
    name = 'beanmachine_butter',
    label = 'Butter',
    weight = 30,
    type = 'item',
    image = 'beanmachine_butter.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Creamy butter, essential for baking and cooking.'
},
['beanmachine_soysauce'] = {
    name = 'beanmachine_soysauce',
    label = 'Soy Sauce',
    weight = 30,
    type = 'item',
    image = 'beanmachine_soysauce.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Soy sauce for adding depth and umami to dishes.'
},
['beanmachine_cashews'] = {
    name = 'beanmachine_cashews',
    label = 'Cashews',
    weight = 0,
    type = 'item',
    image = 'beanmachine_cashews.png',
    unique = false,
    useable = false,
    shouldClose = false,
    combinable = nil,
    description = 'Crunchy cashews, great as a snack or in recipes.'
},
['beanmachine_coffeebeans'] = {
    name = 'beanmachine_coffeebeans',
    label = 'Coffee Beans',
    weight = 30,
    type = 'item',
    image = 'beanmachine_coffeebeans.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Premium coffee beans for the perfect brew.'
},
['beanmachine_brewedespresso'] = {
    name = 'beanmachine_brewedespresso',
    label = 'Brewed Espresso',
    weight = 30,
    type = 'item',
    image = 'beanmachine_brewedespresso.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Richly brewed espresso, strong and invigorating.'
},
['beanmachine_caramelsauce'] = {
    name = 'beanmachine_caramelsauce',
    label = 'Caramel Sauce',
    weight = 30,
    type = 'item',
    image = 'beanmachine_caramelsauce.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Sweet and sticky caramel sauce, perfect for desserts.'
},
['beanmachine_ice'] = {
    name = 'beanmachine_ice',
    label = 'Ice',
    weight = 30,
    type = 'item',
    image = 'beanmachine_ice.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Chilled ice to cool down your favorite drink.'
},
['beanmachine_coffeefrappuccinosyrup'] = {
    name = 'beanmachine_coffeefrappuccinosyrup',
    label = 'Coffee Frappuccino Syrup',
    weight = 30,
    type = 'item',
    image = 'beanmachine_coffeefrappuccinosyrup.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'The key ingredient for a delicious Coffee Frappuccino.'
},
['beanmachine_whippedcream'] = {
    name = 'beanmachine_whippedcream',
    label = 'Whipped Cream',
    weight = 30,
    type = 'item',
    image = 'beanmachine_whippedcream.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Fluffy whipped cream to top off any sweet treat.'
},
['beanmachine_mochasauce'] = {
    name = 'beanmachine_mochasauce',
    label = 'Mocha Sauce',
    weight = 30,
    type = 'item',
    image = 'beanmachine_mochasauce.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Decadent mocha sauce, a blend of chocolate and coffee.'
},
['beanmachine_frappuccinochips'] = {
    name = 'beanmachine_frappuccinochips',
    label = 'Frappuccino Chips',
    weight = 30,
    type = 'item',
    image = 'beanmachine_frappuccinochips.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Chocolatey chips to add texture to your Frappuccino.'
},
['beanmachine_chocolatecookiegrindtopping'] = {
    name = 'beanmachine_chocolatecookiegrindtopping',
    label = 'Chocolate Cookie Grind Topping',
    weight = 30,
    type = 'item',
    image = 'beanmachine_chocolatecookiegrindtopping.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Crumbled chocolate cookie topping for an extra crunch.'
},
['beanmachine_darkcaramelsauce'] = {
    name = 'beanmachine_darkcaramelsauce',
    label = 'Dark Caramel Sauce',
    weight = 30,
    type = 'item',
    image = 'beanmachine_darkcaramelsauce.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A richer, deeper caramel sauce for a bold flavor.'
},
['beanmachine_caramelsugartopping'] = {
    name = 'beanmachine_caramelsugartopping',
    label = 'Caramel Sugar Topping',
    weight = 30,
    type = 'item',
    image = 'beanmachine_caramelsugartopping.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Sweet caramel sugar to sprinkle over your beverages.'
},
['beanmachine_vanillabeanpowder'] = {
    name = 'beanmachine_vanillabeanpowder',
    label = 'Vanilla Bean Powder',
    weight = 30,
    type = 'item',
    image = 'beanmachine_vanillabeanpowder.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Finely ground vanilla beans for a sweet, aromatic flavor.'
},
['beanmachine_caramelsyrup'] = {
    name = 'beanmachine_caramelsyrup',
    label = 'Caramel Syrup',
    weight = 30,
    type = 'item',
    image = 'beanmachine_caramelsyrup.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Smooth caramel syrup for sweetening your favorite drinks.'
},
['beanmachine_cremefrappuccinosyrup'] = {
    name = 'beanmachine_cremefrappuccinosyrup',
    label = 'Creme Frappuccino Syrup',
    weight = 30,
    type = 'item',
    image = 'beanmachine_cremefrappuccinosyrup.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'The base syrup for all Creme Frappuccinos.'
},
['beanmachine_strawberrypureesauce'] = {
    name = 'beanmachine_strawberrypureesauce',
    label = 'Strawberry Puree Sauce',
    weight = 30,
    type = 'item',
    image = 'beanmachine_strawberrypureesauce.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Sweet strawberry puree, perfect for drinks and desserts.'
},
['beanmachine_classicsyrup'] = {
    name = 'beanmachine_classicsyrup',
    label = 'Classic Syrup',
    weight = 30,
    type = 'item',
    image = 'beanmachine_classicsyrup.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A versatile syrup for adding a touch of sweetness.'
},
['beanmachine_matchateablend'] = {
    name = 'beanmachine_matchateablend',
    label = 'Matcha Tea Blend',
    weight = 30,
    type = 'item',
    image = 'beanmachine_matchateablend.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Finely ground matcha for vibrant green tea beverages.'
},
['beanmachine_kiwistarfruitbase'] = {
    name = 'beanmachine_kiwistarfruitbase',
    label = 'Kiwi Starfruit Base',
    weight = 30,
    type = 'item',
    image = 'beanmachine_kiwistarfruitbase.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A tropical blend of kiwi and starfruit flavors.'
},
['beanmachine_coconutmilk'] = {
    name = 'beanmachine_coconutmilk',
    label = 'Coconut Milk',
    weight = 30,
    type = 'item',
    image = 'beanmachine_coconutmilk.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Creamy coconut milk for dairy free options.'
},
['beanmachine_freezedriedkiwi'] = {
    name = 'beanmachine_freezedriedkiwi',
    label = 'Freeze Dried Kiwi',
    weight = 30,
    type = 'item',
    image = 'beanmachine_freezedriedkiwi.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Crunchy, tangy kiwi pieces for a burst of flavor.'
},
['beanmachine_mangodragonfruitrefreshersbase'] = {
    name = 'beanmachine_mangodragonfruitrefreshersbase',
    label = 'Mango Dragonfruit Refreshers Base',
    weight = 30,
    type = 'item',
    image = 'beanmachine_mangodragonfruitrefreshersbase.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'The base for creating vibrant Mango Dragonfruit Refreshers.'
},
['beanmachine_freezedrieddragonfruit'] = {
    name = 'beanmachine_freezedrieddragonfruit',
    label = 'Freeze Dried Dragonfruit',
    weight = 30,
    type = 'item',
    image = 'beanmachine_freezedrieddragonfruit.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Dried dragonfruit pieces, adding a pop of color and flavor.'
},
['beanmachine_strawberryacaibase'] = {
    name = 'beanmachine_strawberryacaibase',
    label = 'Strawberry Acai Base',
    weight = 30,
    type = 'item',
    image = 'beanmachine_strawberryacaibase.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A refreshing base for Strawberry Acai beverages.'
},
['beanmachine_lemonade'] = {
    name = 'beanmachine_lemonade',
    label = 'Lemonade',
    weight = 30,
    type = 'item',
    image = 'beanmachine_lemonade.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Classic lemonade, perfect for mixing or enjoying as is.'
},
['beanmachine_freezedriedstrawberries'] = {
    name = 'beanmachine_freezedriedstrawberries',
    label = 'Freeze Dried Strawberries',
    weight = 30,
    type = 'item',
    image = 'beanmachine_freezedriedstrawberries.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Sweet, freeze dried strawberries for a fruity addition.'
},
['beanmachine_verandablend'] = {
    name = 'beanmachine_verandablend',
    label = 'Veranda Blend Coffee',
    weight = 30,
    type = 'item',
    image = 'beanmachine_coffee.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A light roast with mellow and soft flavors.'
},
['beanmachine_caffemisto'] = {
    name = 'beanmachine_caffemisto',
    label = 'Caffe Misto',
    weight = 30,
    type = 'item',
    image = 'beanmachine_coffee.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A one to one mix of brewed coffee and steamed milk.'
},
['beanmachine_darkroast'] = {
    name = 'beanmachine_darkroast',
    label = 'Dark Roast Coffee',
    weight = 30,
    type = 'item',
    image = 'beanmachine_coffee.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A bold, full bodied dark roast coffee.'
},
['beanmachine_pikeplaceroast'] = {
    name = 'beanmachine_pikeplaceroast',
    label = 'Pike Place Roast',
    weight = 30,
    type = 'item',
    image = 'beanmachine_coffee.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A smooth, well rounded blend of coffee.'
},
['beanmachine_cappuccino'] = {
    name = 'beanmachine_cappuccino',
    label = 'Cappuccino',
    weight = 30,
    type = 'item',
    image = 'beanmachine_coffee.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A classic cappuccino with rich foam and strong espresso.'
},
['beanmachine_caffelatte'] = {
    name = 'beanmachine_caffelatte',
    label = 'Caffe Latte',
    weight = 30,
    type = 'item',
    image = 'beanmachine_coffee.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A warm, comforting latte with steamed milk and a light foam.'
},
['beanmachine_caramelmacchiato'] = {
    name = 'beanmachine_caramelmacchiato',
    label = 'Caramel Macchiato',
    weight = 30,
    type = 'item',
    image = 'beanmachine_coffee.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A sweet treat, layered with milk, espresso, and caramel.'
},
['beanmachine_mochacookiecrumblefrappuccino'] = {
    name = 'beanmachine_mochacookiecrumblefrappuccino',
    label = 'Mocha Cookie Crumble Frappuccino',
    weight = 30,
    type = 'item',
    image = 'beanmachine_frappuccino.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A delightful blend of chocolate, coffee, and cookie pieces.'
},
['beanmachine_caramelribboncrunchfrappuccino'] = {
    name = 'beanmachine_caramelribboncrunchfrappuccino',
    label = 'Caramel Ribbon Crunch Frappuccino',
    weight = 30,
    type = 'item',
    image = 'beanmachine_frappuccino.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A caramel lovers dream with crunchy sugar toppings.'
},
['beanmachine_caffevanillafrappuccino'] = {
    name = 'beanmachine_caffevanillafrappuccino',
    label = 'Caffe Vanilla Frappuccino',
    weight = 30,
    type = 'item',
    image = 'beanmachine_frappuccino.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A creamy blend of coffee and vanilla flavor.'
},
['beanmachine_caramelfrappuccino'] = {
    name = 'beanmachine_caramelfrappuccino',
    label = 'Caramel Frappuccino',
    weight = 30,
    type = 'item',
    image = 'beanmachine_frappuccino.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Rich caramel blended with coffee and milk.'
},
['beanmachine_javachipfrappuccino'] = {
    name = 'beanmachine_javachipfrappuccino',
    label = 'Java Chip Frappuccino',
    weight = 30,
    type = 'item',
    image = 'beanmachine_frappuccino.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A chocolatey coffee delight with crunchy java chips.'
},
['beanmachine_strawberrycremefrappuccino'] = {
    name = 'beanmachine_strawberrycremefrappuccino',
    label = 'Strawberry Creme Frappuccino',
    weight = 30,
    type = 'item',
    image = 'beanmachine_frappuccino.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A fruity and refreshing strawberry blended beverage.'
},
['beanmachine_matchacremefrappuccino'] = {
    name = 'beanmachine_matchacremefrappuccino',
    label = 'Matcha Creme Frappuccino',
    weight = 30,
    type = 'item',
    image = 'beanmachine_frappuccino.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A smooth and creamy matcha green tea frappuccino.'
},
['beanmachine_doublechocolatychipcremefrappuccino'] = {
    name = 'beanmachine_doublechocolatychipcremefrappuccino',
    label = 'Double Chocolaty Chip Creme Frappuccino',
    weight = 30,
    type = 'item',
    image = 'beanmachine_frappuccino.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Double the chocolate, double the fun, with chocolate chips.'
},
['beanmachine_stardrink'] = {
    name = 'beanmachine_stardrink',
    label = 'Star Drink',
    weight = 30,
    type = 'item',
    image = 'beanmachine_stardrink.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A stellar blend of starfruit and kiwi, a refreshing choice.'
},
['beanmachine_kiwistarfruit'] = {
    name = 'beanmachine_kiwistarfruit',
    label = 'Kiwi Starfruit',
    weight = 30,
    type = 'item',
    image = 'beanmachine_kiwistarfruit.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Tropical flavors of kiwi and starfruit in one delightful drink.'
},
['beanmachine_dragondrink'] = {
    name = 'beanmachine_dragondrink',
    label = 'Dragon Drink',
    weight = 30,
    type = 'item',
    image = 'beanmachine_dragondrink.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A mythical blend of mango and dragonfruit flavors.'
},
['beanmachine_strawberryacailemonade'] = {
    name = 'beanmachine_strawberryacailemonade',
    label = 'Strawberry Acai Lemonade',
    weight = 30,
    type = 'item',
    image = 'beanmachine_strawberryacailemonade.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A tangy and sweet combination of strawberry, acai, and lemonade.'
},
['beanmachine_kiwiStarfruitrefresherbase'] = {
    name = 'beanmachine_kiwiStarfruitrefresherbase',
    label = 'Kiwi Starfruit Refresher Base',
    weight = 30,
    type = 'item',
    image = 'beanmachine_kiwiStarfruitrefresherbase.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'The perfect base for creating kiwi starfruit refreshers.'
},
['beanmachine_pinkdrink'] = {
    name = 'beanmachine_pinkdrink',
    label = 'Pink Drink',
    weight = 30,
    type = 'item',
    image = 'beanmachine_pinkdrink.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A refreshing blend of strawberry, acai, and coconut milk.'
},
['beanmachine_strawberryacai'] = {
    name = 'beanmachine_strawberryacai',
    label = 'Strawberry Acai',
    weight = 30,
    type = 'item',
    image = 'beanmachine_strawberryacai.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = ''
},
['beanmachine_mangodragonfruit'] = {
    name = 'beanmachine_mangodragonfruit',
    label = 'Mango Dragon Fruit',
    weight = 30,
    type = 'item',
    image = 'beanmachine_mangodragonfruit.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = ''
},
['beanmachine_mangodragonfruitlemonade']  = {
    name = 'beanmachine_mangodragonfruitlemonade',
    label = 'Mango Dragon Fruit Lemonade',
    weight = 30,
    type = 'item',
    image = 'beanmachine_mangodragonfruitlemonade.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil, 
    description = ''
},
['beanmachine_pallet'] = {
    name = 'beanmachine_pallet',
    label = 'Pallet of Ingredients',
    weight = 10000,
    type = 'item',
    image = 'beanmachine_pallet.png',
    unique = true,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'This box is filled with bean machine ingredients.'
},
['beanmachine_pallet2'] = {
    name = 'beanmachine_pallet2',
    label = 'Pallet of Ingredients',
    weight = 10000,
    type = 'item',
    image = 'beanmachine_pallet.png',
    unique = true,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'This box is filled with bean machine ingredients.'
},
['beanmachine_ticket'] = {
    name = 'beanmachine_ticket',
    label = 'Receipt',
    weight = 150,
    type = 'item',
    image = 'beanmachine_beanmachine_ticket.png',
    unique = false,
    useable = false, 
    shouldClose = true,
    combinable = nil,
    description = ''
},
['beanmachine_bag'] = {
    name = 'beanmachine_bag',
    label = 'Bean Machine Delivery Bag',
    weight = 500,
    type = 'item',
    image = 'beanmachine_beanmachine_bag.png',
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = 'A delivery bag ensuring your order reaches you hot and fresh.'
},`,
        textTwo: 'Now add this to the qb-core/shared/job.lua',
        codeTwo: `['beanmachine'] = {
  label = 'Bean Machine',
  defaultDuty = true,
  offDutyPay = true,
  grades = {
    ['0'] = {
      name = 'Recruit',
      payment = 175
    },
    ['1'] = {
      name = 'Crew Member',
      payment = 185
    },
    ['2'] = {
      name = 'Shift Manager',
      payment = 195
    },
    ['3'] = {
      name = 'Manager',
      payment = 205
    },
    ['4'] = {
      name = 'Owner',
      isboss = true,
      payment = 215
    },
  },
},`,
        textThree: 'You need add these to ConsumablesCoffee in qb-smallresources/config.lua',
        codeThree: `["beanmachine_verandablend"] = math.random(15, 22),
["beanmachine_caffemisto"] = math.random(15, 22),
["beanmachine_darkroast"] = math.random(15, 22),
["beanmachine_pikeplaceroast"] = math.random(15, 22),
["beanmachine_cappuccino"] = math.random(15, 22),
["beanmachine_caffelatte"] = math.random(15, 22),
["beanmachine_caramelmacchiato"] = math.random(15, 22),
["beanmachine_mochacookiecrumblefrappuccino"] = math.random(15, 22),
["beanmachine_caramelribboncrunchfrappuccino"] = math.random(15, 22),
["beanmachine_caffevanillafrappuccino"] = math.random(15, 22),
["beanmachine_caramelfrappuccino"] = math.random(15, 22),
["beanmachine_javachipfrappuccino"] = math.random(15, 22),
["beanmachine_strawberrycremefrappuccino"] = math.random(15, 22),
["beanmachine_matchacremefrappuccino"] = math.random(15, 22),
["beanmachine_doublechocolatychipcremefrappuccino"] = math.random(15, 22),`,
        textFour: 'You need add these to ConsumablesDrink in qb-smallresources/config.lua',
        codeFour: `["beanmachine_stardrink"] = math.random(15, 22),
["beanmachine_kiwistarfruit"] = math.random(15, 22),
["beanmachine_dragondrink"] = math.random(15, 22),
["beanmachine_strawberryacailemonade"] = math.random(15, 22),
["beanmachine_pinkdrink"] = math.random(15, 22),
["beanmachine_strawberryacai"] = math.random(15, 22),
["beanmachine_mangodragonfruit"] = math.random(15, 22),
["beanmachine_mangodragonfruitlemonade"] = math.random(15, 22),`,
        textFive: 'You need add this in qb-management/client/cl_config.lua under Config.BossMenus and you also have to add the job to the qb-management database table.',
        codeFive: `['beanmachine'] = {
  vector3(126.71, -1033.64, 29.28),
},`,
        textSix: 'You need add this in qb-management/client/cl_config.lua under Config.BossMenuszone',
        codeSix: `['beanmachine'] = {
  { coords = vector3(126.71, -1033.64, 29.28), length = 0.35, width = 0.45, heading = 351.0, minZ = 12.58, maxZ = 14.68 },
},`,
        textSeven: undefined,
        codeSeven: undefined,
        textEight: undefined,
        codeEight: undefined,
        textNine: undefined,
        codeNine: undefined,
        textTen: undefined,
        codeTen: undefined,
        textEleven: undefined,
        codeEleven: undefined,
        textTwelve: undefined,
        codeTwelve: undefined,
        textThirteen: undefined,
        codeThirteen: undefined,
        textFourteen: undefined,
        codeFourteen: undefined,
        textFifteen: undefined,
        codeFifteen: undefined,
        textSixteen: undefined,
        codeSixteen: undefined,
        textSeventeen: undefined,
        codeSeventeen: undefined,
        textEighteen: undefined,
        codeEighteen: undefined,
        textNineteen: undefined,
        codeNineteen: undefined,
        textTwenty: undefined,
        codeTwenty: undefined,
    },
    burgershot: {
        title: 'Place all images into qb-inventory images folder',
        textOne: 'You need these to add the items into qb-core shared.lua',
        codeOne: `['burger_bleeder'] = {
    name = 'burger_bleeder',
    label = 'Bleeder',
    weight = 600,
    type = 'item',
    image = 'burger_bleeder.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A juicy burger with a tantalizing taste that leaves you craving for more.'
},
['burger_moneyshot'] = {
    name = 'burger_moneyshot',
    label = 'Moneyshot',
    weight = 600,
    type = 'item',
    image = 'burger_moneyshot.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A rich and flavorful burger that feels like a jackpot in every bite.'
},
['burger_torpedo'] = {
    name = 'burger_torpedo',
    label = 'Torpedo',
    weight = 600,
    type = 'item',
    image = 'burger_torpedo.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A deep dive into flavors with this explosive burger.'
},
['burger_heartstopper'] = {
    name = 'burger_heartstopper',
    label = 'Heartstopper',
    weight = 600,
    type = 'item',
    image = 'burger_heartstopper.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A burger so delicious, it might just skip a heartbeat.'
},
['burger_meatfree'] = {
    name = 'burger_meatfree',
    label = 'MeatFree',
    weight = 525,
    type = 'item',
    image = 'burger_meatfree.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A vegetarian delight packed with flavors, minus the meat.'
},
['burger_softdrink'] = {
    name = 'burger_softdrink',
    label = 'Soft Drink',
    weight = 425,
    type = 'item',
    image = 'burger_softdrink.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A refreshing drink to quench your thirst and complement your meal.'
},
['burger_coffee'] = {
    name = 'burger_coffee',
    label = 'Hot Coffee',
    weight = 325,
    type = 'item',
    image = 'burger_coffee.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A hot cup of coffee to energize your day.'
},
['burger_milkshake'] = {
    name = 'burger_milkshake',
    label = 'Vanilla Milkshake',
    weight = 325,
    type = 'item',
    image = 'burger_milkshake.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A creamy and cold milkshake, perfect for any time of the day.'
},
['burger_fries'] = {
    name = 'burger_fries',
    label = 'Large Fries',
    weight = 325,
    type = 'item',
    image = 'burger_fries.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Crispy golden fries, a perfect side to any burger.'
},
['burger_bun'] = {
    name = 'burger_bun',
    label = 'Buns',
    weight = 125,
    type = 'item',
    image = 'burger_bun.png',
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = 'Freshly baked buns, soft on the inside and crispy on the outside.'
},
['burger_meat'] = {
    name = 'burger_meat',
    label = 'Cooked Meat',
    weight = 125,
    type = 'item',
    image = 'burger_meat.png',
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = 'Perfectly cooked meat, seasoned to perfection.'
},
['burger_lettuce'] = {
    name = 'burger_lettuce',
    label = 'Lettuce',
    weight = 125,
    type = 'item',
    image = 'burger_lettuce.png',
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = 'Fresh and crunchy lettuce to add a refreshing touch to your burger.'
},
['burger_raw'] = {
    name = 'burger_raw',
    label = 'Raw Meat',
    weight = 125,
    type = 'item',
    image = 'burger_raw.png',
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = 'Raw meat, ready to be seasoned and cooked to your liking.'
},
['burger_potato'] = {
    name = 'burger_potato',
    label = 'Raw Potatoes',
    weight = 125,
    type = 'item',
    image = 'burger_potato.png',
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = 'Fresh potatoes, ready to be transformed into delicious fries.'
},
['burger_ticket'] = {
    name = 'burger_ticket',
    label = 'Receipt',
    weight = 150,
    type = 'item',
    image = 'burger_ticket.png',
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = 'An order ticket detailing the delicious meal awaiting preparation.'
},
['burger_box'] = {
    name = 'burger_box',
    label = 'Burger Box',
    weight = 1000,
    type = 'item',
    image = 'burger_box.png',
    unique = true,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A box filled with delicious burger essentials.'
},
['burger_pallet'] = { 
    name = 'burger_pallet',
    label = 'Pallet of Ingredients',
    weight = 10000,
    type = 'item',
    image = 'burger_pallet.png',
    unique = true,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A pallet loaded with fresh ingredients for the perfect burger.'
},
['burger_cheese'] = {
    name = 'burger_cheese',
    label = 'Cheese',
    weight = 125,
    type = 'item',
    image = 'burger_cheese.png',
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = 'Melt in your mouth cheese, the perfect addition to any burger.'
},
['burger_bag'] = {
    name = 'burger_bag',
    label = 'Burgershot Delivery Bag',
    weight = 500,
    type = 'item',
    image = 'burger_bag.png',
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = 'A delivery bag ensuring your order reaches you hot and fresh.'
},
['heartstopper_meal'] = {
    name = 'heartstopper_meal',
    label = 'Heartstopper Meal',
    weight = 2000,
    type = 'item',
    image = 'heartstopper_meal.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A complete meal with the iconic Heartstopper burger and a surprise toy.'
},
['moneyshot_meal'] = {
    name = 'moneyshot_meal',
    label = 'Money Shot Meal',
    weight = 2000,
    type = 'item',
    image = 'moneyshot_meal.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'An Amazing Meal with a chance of a toy.'
},
['torpedo_meal'] = {
    name = 'torpedo_meal',
    label = 'Torpedo Meal',
    weight = 2000,
    type = 'item',
    image = 'torpedo_meal.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'An Amazing Meal with a chance of a toy.'
},
['meatfree_meal'] = {
    name = 'meatfree_meal',
    label = 'Meat Free Meal',
    weight = 2000,
    type = 'item',
    image = 'meatfree_meal.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'An Amazing Meal with a chance of a toy.'
},
['bleeder_meal'] = {
    name = 'bleeder_meal',
    label = 'Bleeder Meal',
    weight = 2000,
    type = 'item',
    image = 'bleeder_meal.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'An Amazing Meal with a chance of a toy.'
},
['heartstopper_meal_shake'] = {
    name = 'heartstopper_meal_shake',
    label = 'Heart Stopper Shake Meal',
    weight = 2000,
    type = 'item',
    image = 'heartstopper_meal.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'An Amazing Meal with a chance of a toy.'
},
['moneyshot_meal_shake'] = {
    name = 'moneyshot_meal_shake',
    label = 'Money Shot Shake Meal',
    weight = 2000,
    type = 'item',
    image = 'moneyshot_meal.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'An Amazing Meal with a chance of a toy.'
},
['torpedo_meal_shake'] = {
    name = 'torpedo_meal_shake',
    label = 'Torpedo Shake Meal',
    weight = 2000,
    type = 'item',
    image = 'torpedo_meal.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'An Amazing Meal with a chance of a toy.'
},
['meatfree_meal_shake'] = {
    name = 'meatfree_meal_shake',
    label = 'Meat Free Shake Meal',
    weight = 2000,
    type = 'item',
    image = 'meatfree_meal.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'An Amazing Meal with a chance of a toy.'
},
['bleeder_meal_shake'] = {
    name = 'bleeder_meal_shake',
    label = 'Bleeder Shake Meal',
    weight = 2000,
    type = 'item',
    image = 'bleeder_meal.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'An Amazing Meal with a chance of a toy.'
},
['burger_milk'] = {
    name = 'burger_milk',
    label = '2% White Milk',
    weight = 125,
    type = 'item',
    image = 'burger_milk.png',
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = 'Fresh 2% milk, a wholesome drink for all ages.'
},
['burger_cream'] = {
    name = 'burger_cream',
    label = 'Ice Cream Cream',
    weight = 125,
    type = 'item',
    image = 'burger_cream.png',
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = 'Rich and creamy ice cream base, waiting to be churned into deliciousness.'
},
['burger_syrup'] = {
    name = 'burger_syrup',
    label = 'High Fructose Syrup',
    weight = 125,
    type = 'item',
    image = 'burger_syrup.png',
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = 'Sweet high fructose syrup, perfect for adding a sugary touch.'
},
['burger_icecream'] = {
    name = 'burger_icecream',
    label = 'Ice Cream',
    weight = 200,
    type = 'item',
    image = 'burger_icecream.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Creamy and cold ice cream, a delightful treat for a hot day.'
},
['burger_donut'] = {
    name = 'burger_donut',
    label = 'Strawberry Sprinkles Donut',
    weight = 200,
    type = 'item',
    image = 'burger_donut.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A soft donut topped with strawberry sprinkles, a sweet indulgence.'
},
['burger_icecreamcone'] = {
    name = 'burger_icecreamcone',
    label = 'Ice Cream Cone',
    weight = 100,
    type = 'item',
    image = 'burger_icecreamcone.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A crispy cone, ready to be filled with your favorite ice cream.'
},
['burger_donutchoc'] = {
    name = 'burger_donutchoc',
    label = 'Chocolate Glaze Donut',
    weight = 200,
    type = 'item',
    image = 'burger_donutchoc.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A delicious donut!'
},
['burger_donutcherry'] = {
    name = 'burger_donutcherry',
    label = 'Cherry Glaze Donut',
    weight = 200,
    type = 'item',
    image = 'burger_donutcherry.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A delicious donut!'
},
['burger_donutlemon'] = {
    name = 'burger_donutlemon',
    label = 'Lemon Glaze Donut',
    weight = 200,
    type = 'item',
    image = 'burger_donutlemon.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A delicious donut!'
},
['burger_donutglaze'] = {
    name = 'burger_donutglaze',
    label = 'Glaze Donut',
    weight = 200,
    type = 'item',
    image = 'burger_donutglazed.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A delicious donut!'
},
['burger_slicedonion'] = {
    name = 'burger_slicedonion',
    label = 'Sliced Onion',
    weight = 1000,
    type = 'item',
    image = 'burger_slicedonion.png',
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = 'Freshly sliced onions, adding a zesty flavor to your meal.'
},
['burger_creampie'] = {
    name = 'burger_creampie',
    label = 'Slice of Cream Pie',
    weight = 1000,
    type = 'item',
    image = 'burger_creampie.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A slice of creamy pie, a sweet end to a meal.'
},
['burger_chickennuggets'] = {
    name = 'burger_chickennuggets',
    label = 'Chicken Nuggets',
    weight = 2500,
    type = 'item',
    image = 'burger_chickennuggets.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Golden and crispy chicken nuggets, a favorite among all ages.'
},
['burger_onionrings'] = {
    name = 'burger_onionrings',
    label = 'Onion Rings',
    weight = 2500,
    type = 'item',
    image = 'burger_onionrings.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Crispy onion rings, a delightful crunch with every bite.'
},
['burger_frozennuggets'] = {
    name = 'burger_frozennuggets',
    label = 'Frozen Chicken Nuggets',
    weight = 1000,
    type = 'item',
    image = 'burger_frozennuggets.png',
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = 'Frozen Chicken Nuggets!'
},
['burger_tomato'] = {
    name = 'burger_tomato',
    label = 'Tamato',
    weight = 200,
    type = 'item',
    image = 'burger_tomato.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Fresh and juicy tomatoes, adding a tangy flavor to your burger.'
},
['burger_tomatoslices'] = {
    name = 'burger_tomatoslices',
    label = 'Tamato Slices',
    weight = 200,
    type = 'item',
    image = 'burger_tomatoslice.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Sliced tomatoes, ready to be layered in your burger.'
},
['burger_milk'] = {
    name = 'burger_milk',
    label = '2% White Milk',
    weight = 125,
    type = 'item',
    image = 'burger_milk.png',
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = 'Hmm nice fresh milk. I hope you keep this cold'
},
['burger_onions'] = {
    name = 'burger_onions',
    label = 'Onions',
    weight = 125,
    type = 'item',
    image = 'burger_onions.png',
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = 'Hmm nice fresh onions'
},
['burger_tomatosauce'] = {
    name = 'burger_tomatosauce',
    label = 'Tomato Sauce',
    weight = 300,
    type = 'item',
    image = 'burger_tomatosauce.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Rich tomato sauce, perfect for adding depth to your dishes.',
},`,
        textTwo: 'Now add this to the qb-core/shared/job.lua',
        codeTwo: `['burgershot'] = {
  label = 'BurgerShot',
  defaultDuty = true,
  offDutyPay = true,
  grades = {
    ['0'] = {
      name = 'Recruit',
      payment = 175
    },
    ['1'] = {
      name = 'Crew Member',
      payment = 185
    },
    ['2'] = {
      name = 'Shift Manager',
      payment = 195
    },
    ['3'] = { 
      name = 'Manager',
      payment = 205
    },
    ['4'] = {
      name = 'Owner',
      isboss = true,
      payment = 215
    },
  },
},`,
        textThree: 'You need add these to ConsumableEat in qb-smallresources/config.lua',
        codeThree: `["burger_bleeder"] = math.random(34, 54),
["burger_moneyshot"] = math.random(37, 56),
["burger_heartstopper"] = math.random(45, 65), 
["burger_meatfree"] = math.random(30, 50),
["burger_torpedo"] = math.random(35, 52),
["burger_chickennuggets"] = math.random(15, 25),
["burger_onionrings"] = math.random(15, 25),
["burger_icecream"] = math.random(7,10),`,
        textFour: 'You need add these in qb-smallresources/config.lua',
        codeFour: `Config.ConsumablesFries = {
  ["burger_fries"] = math.random(15, 25),
}

Config.ConsumableCoffee = {
    ["burger_coffee"] = math.random(40, 65),
}

Config.ConsumablesDonuts = {
  ["burger_donut"] = math.random(6, 10),
  ["burger_donutchoc"] = math.random(6, 10),
  ["burger_donutcherry"] = math.random(6, 10),
  ["burger_donutlemon"] = math.random(6, 10),
  ["burger_donutglaze"] = math.random(6, 10),
  ["burger_creampie"] = math.random(6, 10),
}

Config.ConsumableSoftDrink = {
  ["burger_softdrink"] = math.random(40, 65),
  ["burger_milkshake"] = math.random(40, 65),
}`,
        textFive: 'Now add the following code to qb-smallresources/server/consumables.lua',
        codeFive: `for k,_ in pairs(Config.ConsumablesDonuts) do
  QBCore.Functions.CreateUseableItem(k, function(source, item)
    local Player = QBCore.Functions.GetPlayer(source)
    if not Player.Functions.RemoveItem(item.name, 1, item.slot) then return end
    TriggerClientEvent("consumables:client:Donut", source, item.name)
  end)
end
  
for k,_ in pairs(Config.ConsumablesFries) do
  QBCore.Functions.CreateUseableItem(k, function(source, item)
    local Player = QBCore.Functions.GetPlayer(source)
    if not Player.Functions.RemoveItem(item.name, 1, item.slot) then return end
    TriggerClientEvent("consumables:client:Fries", source, item.name)
  end)
end
  
for k,_ in pairs(Config.ConsumableSoftDrink) do
  QBCore.Functions.CreateUseableItem(k, function(source, item)
    local Player = QBCore.Functions.GetPlayer(source)
    if not Player.Functions.RemoveItem(item.name, 1, item.slot) then return end
    TriggerClientEvent("consumables:client:DrinkSoda", source, item.name)
  end)
end
  
for k,_ in pairs(Config.ConsumableCoffee) do
  QBCore.Functions.CreateUseableItem(k, function(source, item)
    local Player = QBCore.Functions.GetPlayer(source)
    if not Player.Functions.RemoveItem(item.name, 1, item.slot) then return end
    TriggerClientEvent("consumables:client:DrinkCoffee", source, item.name)
  end)
end`,
        textSix: 'Now add the following code to qb-smallresources/client/consumables.lua',
        codeSix: `RegisterNetEvent('consumables:client:Fries', function(itemName)
  TriggerEvent('animations:client:EmoteCommandStart', {"fries"})
  QBCore.Functions.Progressbar("eat_something", "Eating..", 5000, false, true, {
    disableMovement = false,
    disableCarMovement = false,
  disableMouse = false,
  disableCombat = true,
  }, {}, {}, {}, function() -- Done
    TriggerEvent("inventory:client:ItemBox", QBCore.Shared.Items[itemName], "remove")
    TriggerEvent('animations:client:EmoteCommandStart', {"c"})
    TriggerServerEvent("consumables:server:addHunger", QBCore.Functions.GetPlayerData().metadata["hunger"] + Config.ConsumablesFries[itemName])
    TriggerServerEvent('hud:server:RelieveStress', math.random(2, 4))
  end)
end)
  
RegisterNetEvent('consumables:client:Donut', function(itemName)
  TriggerEvent('animations:client:EmoteCommandStart', {"donut"})
  QBCore.Functions.Progressbar("eat_something", "Eating..", 5000, false, true, {
    disableMovement = false,
    disableCarMovement = false,
  disableMouse = false,
  disableCombat = true,
  }, {}, {}, {}, function() -- Done
    TriggerEvent("inventory:client:ItemBox", QBCore.Shared.Items[itemName], "remove")
    TriggerEvent('animations:client:EmoteCommandStart', {"c"})
    TriggerServerEvent("consumables:server:addHunger", QBCore.Functions.GetPlayerData().metadata["hunger"] + Config.ConsumablesDonuts[itemName])
    TriggerServerEvent('hud:server:RelieveStress', math.random(2, 4))
  end)
end)
  
RegisterNetEvent('consumables:client:DrinkSoda', function(itemName)
  TriggerEvent('animations:client:EmoteCommandStart', {"cup"})
  QBCore.Functions.Progressbar("drink_something", "Drinking..", 5000, false, true, {
    disableMovement = false,
    disableCarMovement = false,
  disableMouse = false,
  disableCombat = true,
  }, {}, {}, {}, function() -- Done
    TriggerEvent("inventory:client:ItemBox", QBCore.Shared.Items[itemName], "remove")
    TriggerEvent('animations:client:EmoteCommandStart', {"c"})
    TriggerServerEvent("consumables:server:addThirst", QBCore.Functions.GetPlayerData().metadata["thirst"] + Config.ConsumableSoftDrink[itemName])
  end)
end)

RegisterNetEvent('consumables:client:DrinkCoffee', function(itemName)
  TriggerEvent('animations:client:EmoteCommandStart', {"coffee"})
  QBCore.Functions.Progressbar("drink_something", "Drinking..", 5000, false, true, {
    disableMovement = false,
    disableCarMovement = false,
  disableMouse = false,
  disableCombat = true,
  }, {}, {}, {}, function() -- Done
    TriggerEvent("inventory:client:ItemBox", QBCore.Shared.Items[itemName], "remove")
    TriggerEvent('animations:client:EmoteCommandStart', {"c"})
    TriggerServerEvent("consumables:server:addThirst", QBCore.Functions.GetPlayerData().metadata["thirst"] + Config.consumablesCoffee[itemName])
  end)
end)`,
        textSeven: 'You need add these prop emotes to either rpemotes/client/animationlist.lua under RP.PropEmotes = { ',
        codeSeven: `["donut"] = {"mp_player_inteat@burger", "mp_player_int_eat_burger", "Donut", AnimationOptions = {
  Prop = 'prop_amb_donut',
  PropBone = 18905,
  PropPlacement = {0.13, 0.05, 0.02, -50.0, 16.0, 60.0},
  EmoteMoving = true,
}},
["fries"] = {"mp_player_inteat@burger", "mp_player_int_eat_burger_fp", "Eat", AnimationOptions = {
  Prop = "prop_food_bs_chips",
  PropBone = 18905,
  PropPlacement = {0.12, 0.028, 0.001, 10.0, 175.0},
  EmoteMoving = true,
  EmoteLoop = true,
}},
["coffee"] = {"amb@world_human_drinking@coffee@male@idle_a", "idle_c", "Coffee", AnimationOptions = {
  Prop = 'p_amb_coffeecup_01',
  PropBone = 28422,
  PropPlacement = {0.0, 0.0, 0.0, 0.0, 0.0, 0.0},
  EmoteLoop = true,
  EmoteMoving = true,
}},
["cup"] = {"amb@world_human_drinking@coffee@male@idle_a", "idle_c", "Cup", AnimationOptions = {
  Prop = 'prop_food_bs_juice02',
  PropBone = 28422,
  PropPlacement = {0.0, 0.0, 0.0, 0.0, 0.0, 0.0},
  EmoteLoop = true,
  EmoteMoving = true,
}},`,
        textEight: 'You need add this in qb-management/client/cl_config.lua under Config.BossMenus  and you also have to add the job to the qb-management database table.',
        codeEight: `['burgershot'] = {
  vector3(-1198.14, -897.63, 13.79),
},`,
        textNine: 'You need add this in qb-management/client/cl_config.lua under Config.BossMenuszone',
        codeNine: `['burgershot'] = {
  { coords = vector3(-1198.46, -898.48, 13.79), length = 1.0, width = 1.0, heading = 351.0, minZ = 13.61, maxZ = 14.08 },
},`,
        textTen: undefined,
        codeTen: undefined,
        textEleven: undefined,
        codeEleven: undefined,
        textTwelve: undefined,
        codeTwelve: undefined,
        textThirteen: undefined,
        codeThirteen: undefined,
        textFourteen: undefined,
        codeFourteen: undefined,
        textFifteen: undefined,
        codeFifteen: undefined,
        textSixteen: undefined,
        codeSixteen: undefined,
        textSeventeen: undefined,
        codeSeventeen: undefined,
        textEighteen: undefined,
        codeEighteen: undefined,
        textNineteen: undefined,
        codeNineteen: undefined,
        textTwenty: undefined,
        codeTwenty: undefined,
    },
    chowhub: {
        title: 'You need these to add the items into qb-cores shared items.lua',
        textOne: undefined,
        codeOne: `['chowhub_tablet'] = {
    name = 'chowhub_tablet',
    label = 'Chowhub Tablet',
    weight = 700,
    type = 'item',
    image = 'chowhub_tablet.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Chowhub tablet'
},`,
        textTwo: 'You need these to add the chowhub.sql to your database.',
        codeTwo: undefined,
        textThree: 'Please go thru the configs folder.',
        codeThree: undefined,
        textFour: 'Add new stores by copying one of the stores and replacing the information.',
        codeFour: undefined,
        textFive: 'In config.lua storeNames is the job name in the shared.lua',
        codeFive: undefined,
        textSix: undefined,
        codeSix: undefined,
        textSeven: undefined,
        codeSeven: undefined,
        textEight: undefined,
        codeEight: undefined,
        textNine: undefined,
        codeNine: undefined,
        textTen: undefined,
        codeTen: undefined,
        textEleven: undefined,
        codeEleven: undefined,
        textTwelve: undefined,
        codeTwelve: undefined,
        textThirteen: undefined,
        codeThirteen: undefined,
        textFourteen: undefined,
        codeFourteen: undefined,
        textFifteen: undefined,
        codeFifteen: undefined,
        textSixteen: undefined,
        codeSixteen: undefined,
        textSeventeen: undefined,
        codeSeventeen: undefined,
        textEighteen: undefined,
        codeEighteen: undefined,
        textNineteen: undefined,
        codeNineteen: undefined,
        textTwenty: undefined,
        codeTwenty: undefined,
    },
    hornys: {
        title: 'Place all images into your inventory images folder',
        textOne: 'You need these to add the items into qb-core shared.lua',
        codeOne: `["hornys_baconroll"] = {
    name = "hornys_baconroll",
    label = "Bacon Rolls",
    weight = 250,
    type = "item",
    image = "hb_baconroll.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Bacon wrapped around cheese!"
},
["hornys_breakfast"] = {
    name = "hornys_breakfast",
    label = "Breakfast Plate",
    weight = 250,
    type = "item",
    image = "hb_breakfast.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Freshly Made Eggs"
},
["hornys_eggsbacon"] = {
    name = "hornys_eggsbacon",
    label = "Eggs N Bacon With Toast",
    weight = 250,
    type = "item",
    image = "hb_eggsbacon.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Yummy Bacon N Eggs!"
},
["hornys_eggs_benedict"] = {
    name = "hornys_eggs_benedict",
    label = "Eggs Benedict",
    weight = 250,
    type = "item",
    image = "hb_eggs_benedict.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Eggs Benedict"
},
["hornys_frenchtoast"] = {
    name = "hornys_frenchtoast",
    label = "French Toast",
    weight = 250,
    type = "item",
    image = "hb_frenchtoast.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Yummy French Toast"
},
["hornys_french_toast_bacon"] = {
    name = "hornys_french_toast_bacon",
    label = "French Toast N Bacon",
    weight = 250,
    type = "item",
    image = "hb_french_toast_bacon.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Yummy French Toast WITH BACON..."
},
["hornys_hashbrowns"] = {
    name = "hornys_hashbrowns",
    label = "Hashbrowns",
    weight = 150,
    type = "item",
    image = "hb_hashbrowns.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Once a potato and now a hashbrown"
},
["hornys_sausages"] = {
    name = "hornys_sausages",
    label = "Sausages",
    weight = 150,
    type = "item",
    image = "hb_sausages.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Pork Sausages"
},
["hornys_chicken_burger"] = {
    name = "hornys_chicken_burger",
    label = "Chicken Burger",
    weight = 250,
    type = "item",
    image = "hb_chicken_burger.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Classic Chicken Burger"
},
["hornys_dblchicken_burger"] = {
    name = "hornys_dblchicken_burger",
    label = "DBL Chicken Burger",
    weight = 250,
    type = "item",
    image = "hb_dblchicken_burger.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Big Chicken Burger"
},
["hornys_dblhorn_burger"] = {
    name = "hornys_dblhorn_burger",
    label = "DBL Horn Burger",
    weight = 300,
    type = "item",
    image = "hb_dblhorn_burger.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "3 Stack Burger!"
},
["hornys_hornburger"] = {
    name = "hornys_hornburger",
    label = "Horn Burger",
    weight = 250,
    type = "item",
    image = "hb_hornburger.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Classic Burger"
},
["hornys_hornburger_bacon"] = {
    name = "hornys_hornburger_bacon",
    label = "Bacon Horn Burger",
    weight = 250,
    type = "item",
    image = "hb_hornburger_bacon.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Classic Burger with Bacon!"
},
["hornys_hornburger_pickle"] = {
    name = "hornys_hornburger_pickle",
    label = "Pickle Horn Burger",
    weight = 175,
    type = "item",
    image = "hb_hornburger_pickle.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Idk what Management was thinking..."
},
["hornys_horn_sandwich"] = {
    name = "hornys_horn_sandwich",
    label = "Horn Sandwich",
    weight = 175,
    type = "item",
    image = "hb_horn_sandwich.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "A classic Sandwich"
},
["hornys_chicken_fillet"] = {
    name = "hornys_chicken_fillets",
    label = "Chicken Fillets",
    weight = 200,
    type = "item",
    image = "hb_chicken_fillets.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Plenty of Fillets"
},
["hornys_chicken_hornstars"] = {
    name = "hornys_chicken_hornstars",
    label = "Chicken Hornstars",
    weight = 100,
    type = "item",
    image = "hb_chicken_hornstars.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Little Hornstars"
},
["hornys_chicken_salad"] = {
    name = "hornys_chicken_salad",
    label = "Chicken Salad",
    weight = 100,
    type = "item",
    image = "hb_chicken_salad.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Fresh Chicken Salad"
},
["hornys_chicken_sandwich"] = {
    name = "hornys_chicken_sandwich",
    label = "Chicken Sandwich",
    weight = 125,
    type = "item",
    image = "hb_chicken_sandwich.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Why it look like a burger tho?"
},
["hornys_hunks_o_hen"] = {
    name = "hornys_hunks_o_hen",
    label = "Hunks O Hen",
    weight = 300,
    type = "item",
    image = "hb_hunks_o_hen.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Hunky Bunky Chunky"
},
["hornys_cherry_float"] = {
    name = "hornys_cherry_float",
    label = "Cherry Float",
    weight = 150,
    type = "item",
    image = "hb_cherry_float.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Love you with a cherry on top"
},
["hornys_cherrypopper"] = {
    name = "hornys_cherrypopper",
    label = "Cherry Popper",
    weight = 150,
    type = "item",
    image = "hb_cherrypopper.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Wanna lick my Cherry Pop?"
},
["hornys_icecream_cake"] = {
    name = "hornys_icecream_cake",
    label = "Icecream Cake",
    weight = 200,
    type = "item",
    image = "hb_icecream_cake.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Love me some Icecream cake!"
},
["hornys_icecream_cone"] = {
    name = "hornys_icecream_cone",
    label = "Vanilla Cone",
    weight = 25,
    type = "item",
    image = "hb_icecream_cone.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Classic Vanilla Cone"
},
["hornys_icecream_nuggets"] = {
    name = "hornys_icecream_nuggets",
    label = "Icecream Nuggets",
    weight = 125,
    type = "item",
    image = "hb_icecream_nuggets.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "I like nuggets and I like icecream..."
},
["hornys_hercules"] = {
    name = "hornys_hercules",
    label = "Hercules",
    weight = 180,
    type = "item",
    image = "hb_hercules.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Yummy"
},
["hornys_junk"] = {
    name = "hornys_junk",
    label = "Junk",
    weight = 180,
    type = "item",
    image = "hb_junk.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "ENERGY!!!"
},
["hornys_orangotang"] = {
    name = "hornys_orangotang",
    label = "Orang O Tang",
    weight = 180,
    type = "item",
    image = "hb_orangotang.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Orang O Tang"
},
["hornys_pepsi"] = {
    name = "hornys_pepsi",
    label = "Pepsi",
    weight = 180,
    type = "item",
    image = "hb_pepsi.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Pepsi!"
},
["hornys_raine"] = {
    name = "hornys_raine",
    label = "Raine",
    weight = 180,
    type = "item",
    image = "hb_raine.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Good ol water"
},
["hornys_sprunk"] = {
    name = "hornys_sprunk",
    label = "Sprunk",
    weight = 180,
    type = "item",
    image = "hb_sprunk.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Nothing like an ice cold Sprunk"
},
["hornys_water_bottle"] = {
    name = "hornys_water_bottle",
    label = "Water Bottle",
    weight = 180,
    type = "item",
    image = "hb_water_bottle.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Good ol water"
},
["hornys_bacon"] = {
    name = "hornys_bacon",
    label = "Bacon",
    weight = 150,
    type = "item",
    image = "hb_bacon.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Ingredient"
},
["hornys_bun"] = {
    name = "hornys_bun",
    label = "Buns",
    weight = 150,
    type = "item",
    image = "hb_bun.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Ingredient"
},
["hornys_patty_raw"] = {
    name = "hornys_patty_raw",
    label = "Raw Patty",
    weight = 210,
    type = "item",
    image = "hb_patty_raw.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Ingredient"
},
["hornys_cherrys"] = {
    name = "hornys_cherrys",
    label = "Cherrys",
    weight = 150,
    type = "item",
    image = "hb_cherrys.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Ingredient"
},
["hornys_chicken"] = {
    name = "hornys_chicken",
    label = "Chicken",
    weight = 150,
    type = "item",
    image = "hb_chicken.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Ingredient"
},
["hornys_pickle"] = {
    name = "hornys_pickle",
    label = "Pickles",
    weight = 150,
    type = "item",
    image = "hb_pickle.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Ingredient"
},
["hornys_sausage"] = {
    name = "hornys_sausage",
    label = "Sausage",
    weight = 150,
    type = "item",
    image = "hb_sausage.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Ingredient"
},
["hornys_bread"] = {
    name = "hornys_bread",
    label = "Bread",
    weight = 125,
    type = "item",
    image = "hb_bread.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Ingredient"
},
["hornys_icecream_mix"] = {
    name = "hornys_icecream_mix",
    label = "Icecream Mix",
    weight = 150,
    type = "item",
    image = "hb_icecream_mix.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Ingredient"
},
["hornys_cheddar"] = {
    name = "hornys_cheddar",
    label = "Cheddar Cheese",
    weight = 125,
    type = "item",
    image = "hb_cheddar.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Ingredient"
},
["hornys_chicken_strips_raw"] = {
    name = "hornys_chicken_strips_raw",
    label = "Chicken Strips Raw",
    weight = 180,
    type = "item",
    image = "hb_chicken_strips_raw.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Ingredient"
},
["hornys_eggs"] = {
    name = "hornys_eggs",
    label = "Eggs",
    weight = 150,
    type = "item",
    image = "hb_eggs.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Ingredient"
},
["hornys_gratedcheese"] = {
    name = "hornys_gratedcheese",
    label = "Grated Cheese",
    weight = 150,
    type = "item",
    image = "hb_gratedcheese.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Ingredient"
},
["hornys_hot_sauce"] = {
    name = "hornys_hot_sauce",
    label = "Hot Sauce",
    weight = 125,
    type = "item",
    image = "hb_hot_sauce.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Ingredient"
},
["hornys_lettuce"] = {
    name = "hornys_lettuce",
    label = "Lettuce",
    weight = 100,
    type = "item",
    image = "hb_lettuce.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Ingredient"
},
["hornys_potatoes"] = {
    name = "hornys_potatoes",
    label = "Potatoes",
    weight = 100,
    type = "item",
    image = "hb_potatoes.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Ingredient"
},
["hornys_tomato"] = {
    name = "hornys_tomato",
    label = "Tomato",
    weight = 100,
    type = "item",
    image = "hb_tomato.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Ingredient"
},
["hornys_wraps"] = {
    name = "hornys_wraps",
    label = "Wraps",
    weight = 100,
    type = "item",
    image = "hb_wraps.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Ingredient"
},
["hornys_chicken_burger_meal"] = {
    name = "hornys_chicken_burger_meal",
    label = "Chicken Burger Meal",
    weight = 500,
    type = "item",
    image = "hb_chicken_burger_meal.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Contains a burger, chicken hornstars and a drink"
},
["hornys_dblchicken_burger_meal"] = {
    name = "hornys_dblchicken_burger_meal",
    label = "DBL Chicken Burger Meal",
    weight = 500,
    type = "item",
    image = "hb_dblchicken_burger_meal.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Contains a burger, chicken hornstars and a drink"
},
["hornys_dblhorn_burger_meal"] = {
    name = "hornys_dblhorn_burger_meal",
    label = "DBL Horn Burger Meal",
    weight = 500,
    type = "item",
    image = "hb_dblhorn_burger_meal.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Contains a burger, chicken hornstars and a drink"
},
["hornys_horn_burger_meal"] = {
    name = "hornys_horn_burger_meal",
    label = "Horn Burger Meal",
    weight = 500,
    type = "item",
    image = "hb_horn_burger_meal.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Contains a burger, chicken hornstars and a drink"
},
["hornys_baconhorn_burger_meal"] = {
    name = "hornys_baconhorn_burger_meal",
    label = "Bacon Horn Burger Meal",
    weight = 500,
    type = "item",
    image = "hb_baconhorn_burger_meal.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Contains a burger, chicken hornstars and a drink"
},
["hornys_picklehorn_burger_meal"] = {
    name = "hornys_picklehorn_burger_meal",
    label = "Pickle Horn Burger Meal",
    weight = 500,
    type = "item",
    image = "hb_picklehorn_burger_meal.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Contains a burger, chicken hornstars and a drink"
},
["hornys_horn_sandwich_meal"] = {
    name = "hornys_horn_sandwich_meal",
    label = "Horn Sandwich Meal",
    weight = 500,
    type = "item",
    image = "hb_horn_sandwich_meal.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Contains a sandwich, chicken hornstars and a drink"
},
["hornys_chicken_sandwich_meal"] = {
    name = "hornys_chicken_sandwich_meal",
    label = "Chicken Sandwich Meal",
    weight = 500,
    type = "item",
    image = "hb_chicken_sandwich_meal.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Contains a sandwich, chicken hornstars and a drink"
},
["hornys_pallet"] = {
    name = "hornys_pallet",
    label = "Pallet of Ingredients",
    weight = 10000,
    type = "item",
    image = "hornys_pallet.png",
    unique = true,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "A pallet loaded with fresh ingredients."
},
["hornys_ticket"] = {
    name = "hornys_ticket",
    label = "Receipt",
    weight = 150,
    type = "item",
    image = "hornys_ticket.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "An order ticket detailing the delicious meal awaiting preparation."
},
["hornys_bag"] = {
    name = "hornys_bag",
    label = "Hornys Delivery Bag",
    weight = 500,
    type = "item",
    image = "hornys_bag.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "A delivery bag ensuring your order reaches you hot and fresh."
},`,
        textTwo: 'Now add this to the qb-core/shared/job.lua',
        codeTwo: `['hornys'] = {
  label = 'Hornys Employee',
  defaultDuty = true,
      offDutyPay = true,
      grades = {
          ['0'] = {name = 'New Hire', payment = 500},
          ['1'] = {name = 'Crew Member', payment = 600},
          ['2'] = {name = 'Shift Manager', payment = 700},
          ['3'] = {name = 'Manager', payment = 800},
          ['4'] = {name = 'Owner', isboss = true, payment = 1000}
      }
},`,
        textThree: 'You need add these to ConsumableEat in qb-smallresources/config.lua',
        codeThree: `["hb-baconroll"] = math.random(45, 65),
["hb-breakfast"] = math.random(45, 65),
["hb-eggs_benedict"] = math.random(45, 65),
["hb-eggsbacon"] = math.random(45, 65),
["hb-frenchtoast"] = math.random(45, 65),
["hb-french_toast_bacon"] = math.random(45, 65),
["hb-hashbrowns"] = math.random(45, 65),
["hb-sausages"] = math.random(45, 65),
["hb-chicken-burger"] = math.random(45, 65),
["hb-dblchicken-burger"] = math.random(45, 65),
["hb-dblhorn-burger"] = math.random(45, 65),
["hb-horn-sandwich"] = math.random(45, 65),
["hb-hornburger-bacon"] = math.random(45, 65),
["hb-hornburger-pickle"] = math.random(45, 65),
["hb-hornburger"] = math.random(45, 65),
["hb-chicken-fillets"] = math.random(45, 65),
["hb-chicken-hornstars"] = math.random(45, 65),
["hb-chicken-salad"] = math.random(45, 65),
["hb-chicken-sandwich"] = math.random(45, 65),
["hb-hunks-o-hen"] = math.random(45, 65),
["hb-cherry-float"] = math.random(15, 30),
["hb-cherrypopper"] = math.random(15, 30),
["hb-icecream-cake"] = math.random(25, 50),
["hb-icecream-cone"] = math.random(5, 10),
["hb-icecream-nuggets"] = math.random(30, 60),`,
        textFour: 'You need add these to ConsumableDrink in qb-smallresources/config.lua',
        codeFour: `["hb-hercules"] = math.random(45, 65),
["hb-junk"] = math.random(45, 65),
["hb-orangotang"] = math.random(45, 65),
["hb-pepsi"] = math.random(45, 65),
["hb-raine"] = math.random(45, 65),
["hb-sprunk"] = math.random(45, 65),
["hb-water-bottle"] = math.random(45, 65),
["hb-cherry-float"] = math.random(20, 40),
["hb-cherrypopper"] = math.random(15, 30),`,
        textFive: 'You need add this in qb-management/client/cl_config.lua under Config.BossMenus  and you also have to add the job to the qb-management database table.',
        codeFive: `['hornys'] = {
  vector3(1238.41, -348.82, 69.08),
},`,
        textSix: 'You need add this in qb-management/client/cl_config.lua under Config.BossMenuszone',
        codeSix: `['hornys'] = {
  { coords = vector3(81.09, 297.31, 109.99), length = 0.35, width = 0.45, heading = 340.0, minZ = 109.96, maxZ = 111.01 },
},`,
        textSeven: undefined,
        codeSeven: undefined,
        textEight: undefined,
        codeEight: undefined,
        textNine: undefined,
        codeNine: undefined,
        textTen: undefined,
        codeTen: undefined,
        textEleven: undefined,
        codeEleven: undefined,
        textTwelve: undefined,
        codeTwelve: undefined,
        textThirteen: undefined,
        codeThirteen: undefined,
        textFourteen: undefined,
        codeFourteen: undefined,
        textFifteen: undefined,
        codeFifteen: undefined,
        textSixteen: undefined,
        codeSixteen: undefined,
        textSeventeen: undefined,
        codeSeventeen: undefined,
        textEighteen: undefined,
        codeEighteen: undefined,
        textNineteen: undefined,
        codeNineteen: undefined,
        textTwenty: undefined,
        codeTwenty: undefined,
    },
    koi: {
        title: 'Place all images into your inventory images folder',
        textOne: 'You need these to add the items into qb-core shared.lua',
        codeOne: `["koi_pekingduckrolls"] = {
    name = "koi_pekingduckrolls",
    label = "Peking Duck Rolls",
    weight = 500,
    type = "item",
    image = "koi_pekingduckrolls.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Delicious roast duck wrapped in pancakes with hoisin sauce, cucumber, and scallions."
},
["koi_szechuanspicywontons"] = {
    name = "koi_szechuanspicywontons",
    label = "Szechuan Spicy Wontons",
    weight = 500,
    type = "item",
    image = "koi_szechuanspicywontons.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Spicy pork dumplings in chili oil, garnished with garlic, soy sauce, and green onions."
},
["koi_crispyspringrolls"] = {
    name = "koi_crispyspringrolls",
    label = "Crispy Spring Rolls",
    weight = 500,
    type = "item",
    image = "koi_crispyspringrolls.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Crispy spring rolls filled with shrimp, pork, carrots, cabbage, and rice paper."
},
["koi_steameddimsumplatter"] = {
    name = "koi_steameddimsumplatter",
    label = "Steamed Dim Sum Platter",
    weight = 500,
    type = "item",
    image = "koi_steameddimsumplatter.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "A delightful assortment of dumplings with shrimp, pork, vegetables, and ginger."
},
["koi_edamamewithseasalt"] = {
    name = "koi_edamamewithseasalt",
    label = "Edamame with Sea Salt",
    weight = 250,
    type = "item",
    image = "koi_edamamewithseasalt.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Fresh edamame steamed and lightly seasoned with sea salt."
},
["koi_hotandsoursoup"] = {
    name = "koi_hotandsoursoup",
    label = "Hot and Sour Soup",
    weight = 500,
    type = "item",
    image = "koi_hotandsoursoup.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "A flavorful soup made with chicken broth, tofu, bamboo shoots, mushrooms, and vinegar."
},
["koi_wontonsoup"] = {
    name = "koi_wontonsoup",
    label = "Wonton Soup",
    weight = 500,
    type = "item",
    image = "koi_wontonsoup.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Savory pork wontons in a rich chicken broth with bok choy and green onions."
},
["koi_eggdropsoup"] = {
    name = "koi_eggdropsoup",
    label = "Egg Drop Soup",
    weight = 500,
    type = "item",
    image = "koi_eggdropsoup.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "A comforting soup made with chicken broth, beaten eggs, cornstarch, and green onions."
},
["koi_kungpaochicken"] = {
    name = "koi_kungpaochicken",
    label = "Kung Pao Chicken",
    weight = 500,
    type = "item",
    image = "koi_kungpaochicken.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Stir fried chicken with peanuts, dried red chilies, soy sauce, and Sichuan peppercorns."
},
["koi_generaltsostofu"] = {
    name = "koi_generaltsostofu",
    label = "General Tsos Tofu",
    weight = 500,
    type = "item",
    image = "koi_generaltsostofu.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Crispy tofu tossed in a tangy sauce with garlic, ginger, and dried chili peppers."
},
["koi_szechuanbeef"] = {
    name = "koi_szechuanbeef",
    label = "Szechuan Beef",
    weight = 500,
    type = "item",
    image = "koi_szechuanbeef.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Tender beef and broccoli in a spicy Szechuan sauce with garlic and ginger."
},
["koi_lobsterwithgingerandscallions"] = {
    name = "koi_lobsterwithgingerandscallions",
    label = "Lobster with Ginger and Scallions",
    weight = 500,
    type = "item",
    image = "koi_lobsterwithgingerandscallions.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Succulent lobster tail wok tossed with ginger, scallions, soy sauce, and Shaoxing wine."
},
["koi_honeywalnutshrimp"] = {
    name = "koi_honeywalnutshrimp",
    label = "Honey Walnut Shrimp",
    weight = 500,
    type = "item",
    image = "koi_honeywalnutshrimp.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Crispy shrimp glazed in honey and served with candied walnuts, mayonnaise, and condensed milk."
},
["koi_mongolianlamb"] = {
    name = "koi_mongolianlamb",
    label = "Mongolian Lamb",
    weight = 500,
    type = "item",
    image = "koi_mongolianlamb.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Sliced lamb stir_fried with green onions, hoisin sauce, soy sauce, and garlic."
},
["koi_mapotofu"] = {
    name = "koi_mapotofu",
    label = "Mapo Tofu",
    weight = 500,
    type = "item",
    image = "koi_mapotofu.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Spicy tofu and ground pork cooked in a flavorful sauce with fermented black bean and chili paste."
},
["koi_crispyduckwithplumsauce"] = {
    name = "koi_crispyduckwithplumsauce",
    label = "Crispy Duck with Plum Sauce",
    weight = 500,
    type = "item",
    image = "koi_crispyduckwithplumsauce.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Roast duck with a sweet and tangy plum sauce, served with bok choy and rice."
},
["koi_shrimpandbroccolistirfry"] = {
    name = "koi_shrimpandbroccolistirfry",
    label = "Shrimp and Broccoli Stir Fry",
    weight = 500,
    type = "item",
    image = "koi_shrimpandbroccolistirfry.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Shrimp and broccoli stir fried in garlic, oyster sauce, and soy sauce."
},
["koi_sesamechicken"] = {
    name = "koi_sesamechicken",
    label = "Sesame Chicken",
    weight = 500,
    type = "item",
    image = "koi_sesamechicken.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Crispy chicken with sesame seeds, honey, soy sauce, and sesame oil."
},
["koi_sizzlingszechuanshrimp"] = {
    name = "koi_sizzlingszechuanshrimp",
    label = "Sizzling Szechuan Shrimp",
    weight = 500,
    type = "item",
    image = "koi_sizzlingszechuanshrimp.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Shrimp and bell peppers in a sizzling Szechuan sauce with onions and garlic."
},
["koi_vegetablelomein"] = {
    name = "koi_vegetablelomein",
    label = "Vegetable Lo Mein",
    weight = 500,
    type = "item",
    image = "koi_vegetablelomein.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Egg noodles tossed with assorted vegetables in a savory soy sauce with a hint of sesame oil."
},
["koi_lycheemartini"] = {
    name = "koi_lycheemartini",
    label = "Lychee Martini",
    weight = 250,
    type = "item",
    image = "koi_lycheemartini.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "A refreshing lychee martini, perfect for a classy evening."
},
["koi_oolongicedtea"] = {
    name = "koi_oolongicedtea",
    label = "Oolong Iced Tea",
    weight = 250,
    type = "item",
    image = "koi_oolongicedtea.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "A cool and soothing oolong iced tea, a delightful choice to quench your thirst."
},
["koi_jasmineblossomgreentea"] = {
    name = "koi_jasmineblossomgreentea",
    label = "Jasmine Blossom Green Tea",
    weight = 250,
    type = "item",
    image = "koi_jasmineblossomgreentea.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "A fragrant and soothing jasmine blossom green tea, perfect to unwind with."
},
["koi_plumwine"] = {
    name = "koi_plumwine",
    label = "Plum Wine",
    weight = 250,
    type = "item",
    image = "koi_plumwine.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "A sweet and fruity plum wine, a delightful choice to complement your meal."
},
["koi_sake"] = {
    name = "koi_sake",
    label = "Sake",
    weight = 250,
    type = "item",
    image = "koi_sake.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "A traditional Japanese sake, perfect for celebrating or enjoying with your meal."
},
["koi_roastduck"] = {
    name = "koi_roastduck",
    label = "Roast Duck",
    weight = 250,
    type = "item",
    image = "koi_roastduck.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Tender and succulent roast duck, a key ingredient in several dishes."
},
["koi_hoisinsauce"] = {
    name = "koi_hoisinsauce",
    label = "Hoisin Sauce",
    weight = 100,
    type = "item",
    image = "koi_hoisinsauce.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "A savory and slightly sweet hoisin sauce, perfect for enhancing flavors."
},
["koi_cucumber"] = {
    name = "koi_cucumber",
    label = "Cucumber",
    weight = 50,
    type = "item",
    image = "koi_cucumber.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Fresh cucumber, crisp and refreshing, used in various dishes."
},
["koi_scallions"] = {
    name = "koi_scallions",
    label = "Scallions",
    weight = 50,
    type = "item",
    image = "koi_scallions.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Fresh scallions, also known as green onions, used as a garnish in many dishes."
},
["koi_pancakes"] = {
    name = "koi_pancakes",
    label = "Pancakes",
    weight = 50,
    type = "item",
    image = "koi_pancakes.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Thin pancakes used to wrap ingredients, often served with Peking duck."
},
["koi_porkdumplings"] = {
    name = "koi_porkdumplings",
    label = "Pork Dumplings",
    weight = 50,
    type = "item",
    image = "koi_porkdumplings.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Delicious dumplings filled with seasoned pork, a classic Chinese appetizer."
},
["koi_chilioil"] = {
    name = "koi_chilioil",
    label = "Chili Oil",
    weight = 50,
    type = "item",
    image = "koi_chilioil.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Spicy chili oil, adds heat and flavor to various dishes."
},
["koi_soysauce"] = {
    name = "koi_soysauce",
    label = "Soy Sauce",
    weight = 50,
    type = "item",
    image = "koi_soysauce.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Salty and savory soy sauce, used for seasoning and marinating."
},
["koi_greenonions"] = {
    name = "koi_greenonions",
    label = "Green Onions",
    weight = 50,
    type = "item",
    image = "koi_greenonions.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Fresh green onions, used as a garnish and for added flavor in dishes."
},
["koi_shrimp"] = {
    name = "koi_shrimp",
    label = "Shrimp",
    weight = 100,
    type = "item",
    image = "koi_shrimp.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Tender and succulent shrimp, a popular seafood choice in various cuisines."
},
["koi_pork"] = {
    name = "koi_pork",
    label = "Pork",
    weight = 100,
    type = "item",
    image = "koi_pork.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Fresh pork, a versatile meat used in many dishes."
},
["koi_carrots"] = {
    name = "koi_carrots",
    label = "Carrots",
    weight = 50,
    type = "item",
    image = "koi_carrots.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Fresh carrots, often used in stir fries and as a side vegetable."
},
["koi_cabbage"] = {
    name = "koi_cabbage",
    label = "Cabbage",
    weight = 50,
    type = "item",
    image = "koi_cabbage.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Fresh cabbage, a versatile vegetable used in various dishes."
},
["koi_ricepaper"] = {
    name = "koi_ricepaper",
    label = "Rice Paper",
    weight = 50,
    type = "item",
    image = "koi_ricepaper.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Thin rice paper used for making spring rolls and other dishes."
},
["koi_edamame"] = {
    name = "koi_edamame",
    label = "Edamame",
    weight = 50,
    type = "item",
    image = "koi_edamame.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Fresh edamame, young soybeans in the pod, lightly seasoned with sea salt."
},
["koi_seasalt"] = {
    name = "koi_seasalt",
    label = "Sea Salt",
    weight = 50,
    type = "item",
    image = "koi_seasalt.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Pure sea salt, used for seasoning and enhancing flavors."
},
["koi_chickenbroth"] = {
    name = "koi_chickenbroth",
    label = "Chicken Broth",
    weight = 250,
    type = "item",
    image = "koi_chickenbroth.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "A flavorful chicken broth, a base for soups and sauces."
},
["koi_tofu"] = {
    name = "koi_tofu",
    label = "Tofu",
    weight = 100,
    type = "item",
    image = "koi_tofu.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Silken tofu, a protein rich ingredient used in various vegetarian and vegan dishes."
},
["koi_bambooshoots"] = {
    name = "koi_bambooshoots",
    label = "Bamboo Shoots",
    weight = 50,
    type = "item",
    image = "koi_bambooshoots.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Sliced bamboo shoots, often used in Asian stir fries and soups."
},
["koi_mushrooms"] = {
    name = "koi_mushrooms",
    label = "Mushrooms",
    weight = 50,
    type = "item",
    image = "koi_mushrooms.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Fresh mushrooms, a versatile ingredient used in a wide range of dishes."
},
["koi_vinegar"] = {
    name = "koi_vinegar",
    label = "Vinegar",
    weight = 50,
    type = "item",
    image = "koi_vinegar.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "A tangy vinegar, often used for seasoning and in dipping sauces."
},
["koi_porkwontons"] = {
    name = "koi_porkwontons",
    label = "Pork Wontons",
    weight = 50,
    type = "item",
    image = "koi_porkwontons.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Delicate pork wontons, perfect for soups and dumpling dishes."
},
["koi_bokchoy"] = {
    name = "koi_bokchoy",
    label = "Bok Choy",
    weight = 50,
    type = "item",
    image = "koi_bokchoy.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Fresh bok choy, a leafy green vegetable often used in stir fries and soups."
},
["koi_beateneggs"] = {
    name = "koi_beateneggs",
    label = "Beaten Eggs",
    weight = 50,
    type = "item",
    image = "koi_beateneggs.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Beaten eggs, used in various dishes to add texture and flavor."
},
["koi_cornstarch"] = {
    name = "koi_cornstarch",
    label = "Cornstarch",
    weight = 50,
    type = "item",
    image = "koi_cornstarch.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Cornstarch, a thickening agent used in sauces and gravies."
},
["koi_chicken"] = {
    name = "koi_chicken",
    label = "Chicken",
    weight = 100,
    type = "item",
    image = "koi_chicken.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Fresh chicken, a versatile and lean meat used in a wide range of dishes."
},
["koi_peanuts"] = {
    name = "koi_peanuts",
    label = "Peanuts",
    weight = 50,
    type = "item",
    image = "koi_peanuts.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Crunchy and nutty peanuts, often used in stir fries and as garnish."
},
["koi_driedredchilies"] = {
    name = "koi_driedredchilies",
    label = "Dried Red Chilies",
    weight = 50,
    type = "item",
    image = "koi_driedredchilies.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Spicy dried red chilies, used to add heat and flavor to dishes."
},
["koi_sichuanpeppercorns"] = {
    name = "koi_sichuanpeppercorns",
    label = "Sichuan Peppercorns",
    weight = 50,
    type = "item",
    image = "koi_sichuanpeppercorns.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Aromatic Sichuan peppercorns, known for their unique numbing and spicy flavor."
},
["koi_tofuginger"] = {
    name = "koi_tofuginger",
    label = "Tofu with Ginger",
    weight = 50,
    type = "item",
    image = "koi_tofuginger.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Tofu marinated with ginger, a tasty and vegetarian option."
},
["koi_driedchilipeppers"] = {
    name = "koi_driedchilipeppers",
    label = "Dried Chili Peppers",
    weight = 50,
    type = "item",
    image = "koi_driedchilipeppers.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Dried chili peppers, used to add heat and spice to dishes."
},
["koi_beef"] = {
    name = "koi_beef",
    label = "Beef",
    weight = 100,
    type = "item",
    image = "koi_beef.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Fresh beef, a hearty and flavorful meat used in various beef dishes."
},
["koi_broccoli"] = {
    name = "koi_broccoli",
    label = "Broccoli",
    weight = 50,
    type = "item",
    image = "koi_broccoli.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Fresh broccoli, a nutritious vegetable often used in stir fries."
},
["koi_szechuansauce"] = {
    name = "koi_szechuansauce",
    label = "Szechuan Sauce",
    weight = 50,
    type = "item",
    image = "koi_szechuansauce.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Spicy and flavorful Szechuan sauce, used to add heat to dishes."
},
["koi_lobstertail"] = {
    name = "koi_lobstertail",
    label = "Lobster Tail",
    weight = 100,
    type = "item",
    image = "koi_lobstertail.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Delicate lobster tail, a premium seafood choice."
},
["koi_gingerscallions"] = {
    name = "koi_gingerscallions",
    label = "Ginger with Scallions",
    weight = 50,
    type = "item",
    image = "koi_gingerscallions.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Fresh ginger and scallions, used to infuse flavor in various dishes."
},
["koi_shaoxingwine"] = {
    name = "koi_shaoxingwine",
    label = "Shaoxing Wine",
    weight = 100,
    type = "item",
    image = "koi_shaoxingwine.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Shaoxing wine, a traditional Chinese cooking wine, used for flavoring and marinating."
},
["koi_honey"] = {
    name = "koi_honey",
    label = "Honey",
    weight = 50,
    type = "item",
    image = "koi_honey.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Sweet and sticky honey, used as a natural sweetener and glaze."
},
["koi_walnuts"] = {
    name = "koi_walnuts",
    label = "Walnuts",
    weight = 50,
    type = "item",
    image = "koi_walnuts.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Crunchy and nutritious walnuts, often used in desserts and savory dishes."
},
["koi_mayonnaise"] = {
    name = "koi_mayonnaise",
    label = "Mayonnaise",
    weight = 50,
    type = "item",
    image = "koi_mayonnaise.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Creamy mayonnaise, used as a condiment and ingredient in various recipes."
},
["koi_condensedmilk"] = {
    name = "koi_condensedmilk",
    label = "Condensed Milk",
    weight = 50,
    type = "item",
    image = "koi_condensedmilk.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Sweet and thick condensed milk, used in desserts and coffee."
},
["koi_lamb"] = {
    name = "koi_lamb",
    label = "Lamb",
    weight = 100,
    type = "item",
    image = "koi_lamb.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Tender and flavorful lamb, a popular meat in various cuisines."
},
["koi_garlic"] = {
    name = "koi_garlic",
    label = "Garlic",
    weight = 50,
    type = "item",
    image = "koi_garlic.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Fresh garlic cloves, a staple ingredient in many savory dishes."
},
["koi_ginger"] = {
    name = "koi_ginger",
    label = "Ginger",
    weight = 50,
    type = "item",
    image = "koi_ginger.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Fresh ginger root, known for its aromatic and spicy flavor."
},
["koi_tofugroundpork"] = {
    name = "koi_tofugroundpork",
    label = "Tofu with Ground Pork",
    weight = 50,
    type = "item",
    image = "koi_tofugroundpork.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Tofu and ground pork, a flavorful combination in many Chinese dishes."
},
["koi_fermentedblackbeansauce"] = {
    name = "koi_fermentedblackbeansauce",
    label = "Fermented Black Bean Sauce",
    weight = 50,
    type = "item",
    image = "koi_fermentedblackbeansauce.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Salty and pungent fermented black bean sauce, used to add depth to dishes."
},
["koi_chilibeanpaste"] = {
    name = "koi_chilibeanpaste",
    label = "Chili Bean Paste",
    weight = 50,
    type = "item",
    image = "koi_chilibeanpaste.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Spicy chili bean paste, a key ingredient in Sichuan cuisine."
},
["koi_plumsauce"] = {
    name = "koi_plumsauce",
    label = "Plum Sauce",
    weight = 50,
    type = "item",
    image = "koi_plumsauce.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Sweet and tangy plum sauce, often used as a dipping sauce."
},
["koi_rice"] = {
    name = "koi_rice",
    label = "Rice",
    weight = 100,
    type = "item",
    image = "koi_rice.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Steamed white rice, a staple side dish in Chinese cuisine."
},
["koi_oystersauce"] = {
    name = "koi_oystersauce",
    label = "Oyster Sauce",
    weight = 50,
    type = "item",
    image = "koi_oystersauce.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Savory oyster sauce, used to enhance the umami flavor in dishes."
},
["koi_sesameseeds"] = {
    name = "koi_sesameseeds",
    label = "Sesame Seeds",
    weight = 50,
    type = "item",
    image = "koi_sesameseeds.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Toasted sesame seeds, often used as a garnish and flavor enhancer."
},
["koi_sesameoil"] = {
    name = "koi_sesameoil",
    label = "Sesame Oil",
    weight = 50,
    type = "item",
    image = "koi_sesameoil.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Aromatic sesame oil, used to add depth and flavor to dishes."
},
["koi_bellpeppers"] = {
    name = "koi_bellpeppers",
    label = "Bell Peppers",
    weight = 50,
    type = "item",
    image = "koi_bellpeppers.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Colorful bell peppers, often used to add sweetness and crunch to dishes."
},
["koi_onions"] = {
    name = "koi_onions",
    label = "Onions",
    weight = 50,
    type = "item",
    image = "koi_onions.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Fresh onions, a versatile ingredient used in many savory dishes."
},
["koi_eggnoodles"] = {
    name = "koi_eggnoodles",
    label = "Egg Noodles",
    weight = 50,
    type = "item",
    image = "koi_eggnoodles.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Fresh egg noodles, a versatile choice for stir fries and noodle dishes."
},
["koi_assortedvegetables"] = {
    name = "koi_assortedvegetables",
    label = "Assorted Vegetables",
    weight = 50,
    type = "item",
    image = "koi_assortedvegetables.png",
    unique = false, 
    useable = false, 
    shouldClose = true,
    combinable = nil,
    description = "A medley of assorted vegetables, perfect for stir fries and vegetable dishes."
},
['koi_palletOne'] = {
    name = 'koi_palletOne',
    label = 'Koi Ingredient pallet',
    weight = 30,
    type = 'item',
    image = 'koi_pallet.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = '',
},
['koi_palletTwo'] = {
    name = 'koi_palletTwo',
    label = 'Koi Ingredient pallet',
    weight = 30,
    type = 'item',
    image = 'koi_pallet.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = '',
},
['koi_palletThree'] = {
    name = 'koi_palletThree',
    label = 'Koi Ingredient pallet',
    weight = 30,
    type = 'item',
    image = 'koi_pallet.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = '',
},
['koi_palletFour'] = {
    name = 'koi_palletFour',
    label = 'Koi beverage pallet',
    weight = 30,
    type = 'item',
    image = 'koi_pallet.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = '',
},
['koi_ticket'] = {
    name = 'koi_ticket',
    label = 'Ticket',
    weight = 30,
    type = 'item',
    image = 'koi_ticket.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = '',
},
['koi_takeoutbag'] = {
    name = 'koi_takeoutbag',
    label = 'Takeout Bag',
    weight = 30,
    type = 'item',
    image = 'koi_takeoutbag.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = '',
},`,
        textTwo: 'Now add this to the qb-core/shared/job.lua',
        codeTwo: `['koi'] = {
  label = 'Koi Employee',
  defaultDuty = true,
  offDutyPay = true,
  grades = {
    ['0'] = {name = 'New Hire', payment = 500},
    ['1'] = {name = 'Crew Member', payment = 600},
    ['2'] = {name = 'Shift Manager', payment = 700},
    ['3'] = {name = 'Manager', payment = 800},
    ['4'] = {name = 'Owner', isboss = true, payment = 1000}
  }
},`,
        textThree: 'You need add these to ConsumableEat in qb-smallresources/config.lua',
        codeThree: `['koi_pekingduckrolls'] = math.random(45, 65),
['koi_szechuanspicywontons'] = math.random(45, 65),
['koi_crispyspringrolls'] = math.random(45, 65),
['koi_steameddimsumplatter'] = math.random(45, 65),
['koi_edamamewithseasalt'] = math.random(45, 65),
['koi_hotandsoursoup'] = math.random(45, 65),
['koi_wontonsoup'] = math.random(45, 65),
['koi_eggdropsoup'] = math.random(45, 65),
['koi_kungpaochicken'] = math.random(45, 65),
['koi_generaltsostofu'] = math.random(45, 65),
['koi_szechuanbeef'] = math.random(45, 65),
['koi_lobsterwithgingerandscallions'] = math.random(45, 65),
['koi_honeywalnutshrimp'] = math.random(45, 65),
['koi_mongolianlamb'] = math.random(45, 65),
['koi_mapotofu'] = math.random(45, 65),
['koi_crispyduckwithplumsauce'] = math.random(45, 65),
['koi_shrimpandbroccolistirfry'] = math.random(45, 65),
['koi_sesamechicken'] = math.random(45, 65),
['koi_sizzlingszechuanshrimp'] = math.random(45, 65),
['koi_vegetablelomein'] = math.random(45, 65),`,
        textFour: 'You need add these to ConsumableDrink in qb-smallresources/config.lua',
        codeFour: `['koi_lycheemartini'] = math.random(45, 65),
['koi_oolongicedtea'] = math.random(45, 65),
['koi_jasmineblossomgreentea'] = math.random(45, 65),
['koi_plumwine'] = math.random(45, 65),
['koi_sake'] = math.random(45, 65),`,
        textFive: 'You need add this in qb-management/client/cl_config.lua under Config.BossMenus  and you also have to add the job to the qb-management database table.',
        codeFive: `['koi'] = {
  vector3(-1053.71, -1440.46, -1.38),
},`,
        textSix: 'You need add this in qb-management/client/cl_config.lua under Config.BossMenuszone',
        codeSix: `['koi'] = {
  { coords = vector3(-1054.44, -1440.97, -1.57), length = 0.35, width = 0.45, heading = 340.0, minZ = -1.57, maxZ = -1.16 },
},`,
        textSeven: undefined,
        codeSeven: undefined,
        textEight: undefined,
        codeEight: undefined,
        textNine: undefined,
        codeNine: undefined,
        textTen: undefined,
        codeTen: undefined,
        textEleven: undefined,
        codeEleven: undefined,
        textTwelve: undefined,
        codeTwelve: undefined,
        textThirteen: undefined,
        codeThirteen: undefined,
        textFourteen: undefined,
        codeFourteen: undefined,
        textFifteen: undefined,
        codeFifteen: undefined,
        textSixteen: undefined,
        codeSixteen: undefined,
        textSeventeen: undefined,
        codeSeventeen: undefined,
        textEighteen: undefined,
        codeEighteen: undefined,
        textNineteen: undefined,
        codeNineteen: undefined,
        textTwenty: undefined,
        codeTwenty: undefined,
    },
    pearls: {
        title: 'Place all images into qb-inventory images folder',
        textOne: 'You need these to add the items into qb-core shared.lua',
        codeOne: `['pearls_steak'] = {
    name = 'pearls_steak',
    label = 'Steak',
    weight = 30,
    type = 'item',
    image = 'pearls_steak.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = '',
},
['pearls_garlic'] = {
    name = 'pearls_garlic',
    label = 'garlic',
    weight = 200,
    type = 'item',
    image = 'pearls_garlic.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'garlic'
},
['pearls_lobster'] = {
    name = 'pearls_lobster',
    label = 'Lobster',
    weight = 30,
    type = 'item',
    image = 'pearls_lobster.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = '',
},
['pearls_mashpotatoes'] = {
    name = 'pearls_mashpotatoes',
    label = 'Mashed Potatoes',
    weight = 30,
    type = 'item',
    image = 'pearls_mashpotatoes.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = '',
},
['pearls_butter'] = {
    name = 'pearls_butter',
    label = 'Butter',
    weight = 30,
    type = 'item',
    image = 'pearls_butter.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = '',
},
['pearls_bluefintuna'] = {
    name = 'pearls_bluefintuna',
    label = 'Bluefin Tuna',
    weight = 30,
    type = 'item',
    image = 'pearls_bluefintuna.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = '',
},
['pearls_sesameseeds'] = {
    name = 'pearls_sesameseeds',
    label = 'Sesame Seeds',
    weight = 30,
    type = 'item',
    image = 'pearls_sesameseeds.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = '',
},
['pearls_asparagus'] = {
    name = 'pearls_asparagus',
    label = 'Asparagus',
    weight = 30,
    type = 'item',
    image = 'pearls_asparagus.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = '',
},
['pearls_soysauce'] = {
    name = 'pearls_soysauce',
    label = 'Soy Sauce',
    weight = 30,
    type = 'item',
    image = 'pearls_soysauce.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = '',
},
['pearls_lemon'] = {
    name = 'pearls_lemon',
    label = 'Lemon',
    weight = 30,
    type = 'item',
    image = 'pearls_lemon.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = '',
},
['pearls_kingcrablegs'] = {
    name = 'pearls_kingcrablegs',
    label = 'King Crab Legs',
    weight = 30,
    type = 'item',
    image = 'pearls_kingcrablegs.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = '',
},
['pearls_cookedrice'] = {
    name = 'pearls_cookedrice',
    label = 'Cooked Rice',
    weight = 30,
    type = 'item',
    image = 'pearls_cookedrice.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = '',
},
['pearls_vegetables'] = {
    name = 'pearls_vegetables',
    label = 'Vegetables',
    weight = 30,
    type = 'item',
    image = 'pearls_vegetables.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = '',
},
['pearls_cream'] = {
    name = 'pearls_cream',
    label = 'Heavy Cream',
    weight = 30,
    type = 'item',
    image = 'pearls_cream.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = '',
},
['pearls_spices'] = {
    name = 'pearls_spices',
    label = 'Spices',
    weight = 30,
    type = 'item',
    image = 'pearls_spices.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = '',
},
['pearls_mint'] = {
    name = 'pearls_mint',
    label = 'Mint',
    weight = 30,
    type = 'item',
    image = 'pearls_mint.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = '',
},
['pearls_oliveoil'] = {
    name = 'pearls_oliveoil',
    label = 'Olive Oil',
    weight = 30,
    type = 'item',
    image = 'pearls_oliveoil.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = '',
},
['pearls_rum'] = {
    name = 'pearls_rum',
    label = 'Rum',
    weight = 30,
    type = 'item',
    image = 'pearls_rum.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = '',
},
['pearls_honey'] = {
    name = 'pearls_honey',
    label = 'Honey',
    weight = 30,
    type = 'item',
    image = 'pearls_honey.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = '',
},
['pearls_mojito'] = {
    name = 'pearls_mojito',
    label = 'Mojito',
    weight = 30,
    type = 'item',
    image = 'pearls_mojito.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = '',
},
['pearls_cokecola'] = {
    name = 'pearls_cokecola',
    label = 'Coke Cola',
    weight = 30,
    type = 'item',
    image = 'pearls_cokecola.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = '',
},
['pearls_shrimp'] = {
    name = 'pearls_shrimp',
    label = 'Shrimp',
    weight = 30,
    type = 'item',
    image = 'pearls_shrimp.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = '',
},
['pearls_dijonmustard'] = {
    name = 'pearls_dijonmustard',
    label = 'Dijon Mustard',
    weight = 30,
    type = 'item',
    image = 'pearls_dijonmustard.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = '',
},
['pearls_pasta'] = {
    name = 'pearls_pasta',
    label = 'Pasta',
    weight = 30,
    type = 'item',
    image = 'pearls_pasta.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = '',
},
['pearls_rawsteak'] = {
    name = 'pearls_rawsteak',
    label = 'Raw Steak',
    weight = 30,
    type = 'item',
    image = 'pearls_rawsteak.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = '',
},
['pearls_freshlobster'] = {
    name = 'pearls_freshlobster',
    label = 'Fresh Lobster',
    weight = 30,
    type = 'item',
    image = 'pearls_freshlobster.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = '',
},
['pearls_potatoes'] = {
    name = 'pearls_potatoes',
    label = 'Potatoes',
    weight = 30,
    type = 'item',
    image = 'pearls_potatoes.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = '',
},
['pearls_rawbluefintuna'] = {
    name = 'pearls_rawbluefintuna',
    label = 'Raw Bluefin Tuna',
    weight = 30,
    type = 'item',
    image = 'pearls_rawbluefintuna.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = '',
},
['pearls_uncookedasparagus'] = {
    name = 'pearls_uncookedasparagus',
    label = 'Uncooked Asparagus',
    weight = 30,
    type = 'item',
    image = 'pearls_uncookedasparagus.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = '',
},
['pearls_rawkingcrab'] = {
    name = 'pearls_rawkingcrab',
    label = 'Raw King Crab Legs',
    weight = 30,
    type = 'item',
    image = 'pearls_rawkingcrab.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = '',
},
['pearls_uncookedrice'] = {
    name = 'pearls_uncookedrice',
    label = 'Uncooked Rice',
    weight = 30,
    type = 'item',
    image = 'pearls_uncookedrice.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = '',
},
['pearls_uncookedvegetables'] = {
    name = 'pearls_uncookedvegetables',
    label = 'Uncooked Vegetables',
    weight = 30,
    type = 'item',
    image = 'pearls_uncookedvegetables.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = '',
},
['pearls_rawshrimp'] = {
    name = 'pearls_rawshrimp',
    label = 'Raw Shrimp',
    weight = 30,
    type = 'item',
    image = 'pearls_rawshrimp.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = '',
},
['pearls_freshsalmon'] = {
    name = 'pearls_freshsalmon',
    label = 'fresh salmon fish',
    weight = 30,
    type = 'item',
    image = 'pearls_freshsalmon.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = '',
},
['pearls_salmon'] = {
    name = 'pearls_salmon',
    label = 'Cooked Salmon',
    weight = 30,
    type = 'item',
    image = 'pearls_salmon.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = '',
},
['pearls_uncookedpasta'] = {
    name = 'pearls_uncookedpasta',
    label = 'Uncooked Pasta',
    weight = 30,
    type = 'item',
    image = 'pearls_uncookedpasta.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = '',
},
['pearls_coconutmilk'] = {
    name = 'pearls_coconutmilk',
    label = 'Uncooked Pasta',
    weight = 30,
    type = 'item',
    image = 'pearls_coconutmilk.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = '',
},
['pearls_beveragepallet'] = {
    name = 'pearls_beveragepallet',
    label = 'Pearls beverage pallet',
    weight = 30,
    type = 'item',
    image = 'pearls_pallet.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = '',
},
['pearls_ingredientpallet'] = {
    name = 'pearls_ingredientpallet',
    label = 'Pearls ingredient pallet',
    weight = 30,
    type = 'item',
    image = 'pearls_pallet.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = '',
},
['pearls_ticket'] = {
    name = 'pearls_ticket',
    label = 'Ticket',
    weight = 30,
    type = 'item',
    image = 'pearls_ticket.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = '',
},
['pearls_takeoutbag'] = {
    name = 'pearls_takeoutbag',
    label = 'Takeout Bag',
    weight = 30,
    type = 'item',
    image = 'pearls_takeoutbag.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = '',
},
['pearls_meal_honeyglazedsalmonwithriceandvegetables'] = {
    name = 'pearls_meal_honeyglazedsalmonwithriceandvegetables',
    label = 'Honey Glazed Salmon with Rice and Vegetables',
    weight = 30,
    type = 'item',
    image = 'pearls_meal_honeyglazedsalmonwithriceandvegetables.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Delight in our succulent honey glazed salmon, served with a side of fluffy rice and perfectly grilled vegetables.',
},
['pearls_meal_kingcrablegs'] = {
    name = 'pearls_meal_kingcrablegs',
    label = 'King Crab Legs',
    weight = 30,
    type = 'item',
    image = 'pearls_meal_kingcrablegs.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Indulge in the exquisite flavor of our king crab legs, a true delicacy of the sea.',
},
['pearls_meal_sesamesearedtunawithgrilledvegetables'] = {
    name = 'pearls_meal_sesamesearedtunawithgrilledvegetables',
    label = 'Sesame Seared Tuna with Grilled Vegetables',
    weight = 30,
    type = 'item',
    image = 'pearls_meal_sesamesearedtunawithgrilledvegetables.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Experience the perfect sear on our sesame crusted tuna, complemented by a medley of grilled vegetables.',
},
['pearls_meal_lobsterwithmashtatersandasparagus'] = {
    name = 'pearls_meal_lobsterwithmashtatersandasparagus',
    label = 'Lobster with Mashed Potatoes and Asparagus',
    weight = 30,
    type = 'item',
    image = 'pearls_meal_lobsterwithmashtatersandasparagus.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Savor the best of sea with our tender lobster, creamy mashed potatoes, and perfectly roasted asparagus.',
},
['pearls_meal_salmonwithlemonbuttersauce'] = {
    name = 'pearls_meal_salmonwithlemonbuttersauce',
    label = 'Salmon with Lemon Butter Sauce',
    weight = 30,
    type = 'item',
    image = 'pearls_meal_salmonwithlemonbuttersauce.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Enjoy a taste of luxury with our perfectly cooked salmon, drizzled with a luscious lemon butter sauce.',
},
['pearls_meal_lobsterbisque'] = {
    name = 'pearls_meal_lobsterbisque',
    label = 'Lobster Bisque',
    weight = 30,
    type = 'item',
    image = 'pearls_meal_lobsterbisque.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Delve into the rich and creamy world of our lobster bisque, a velvety delight for the senses.',
},
['pearls_meal_mintymojitosalmonshrimp'] = {
    name = 'pearls_meal_mintymojitosalmonshrimp',
    label = 'Minty Mojito Shrimp',
    weight = 30,
    type = 'item',
    image = 'pearls_meal_mintymojitosalmonshrimp.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Embark on a culinary adventure with our minty mojito infused shrimp, served with fragrant rice and fresh vegetables.',
},
['pearls_meal_butterygarlickingcrab'] = {
    name = 'pearls_meal_butterygarlickingcrab',
    label = 'Buttery Garlic King Crab',
    weight = 30,
    type = 'item',
    image = 'pearls_meal_butterygarlickingcrab.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Satisfy your cravings with our succulent king crab legs, drenched in a buttery garlic sauce.',
},
['pearls_meal_coconutinfusedkingcrabsoup'] = {
    name = 'pearls_meal_coconutinfusedkingcrabsoup',
    label = 'Coconut Infused King Crab Soup',
    weight = 30,
    type = 'item',
    image = 'pearls_meal_coconutinfusedkingcrabsoup.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Warm your soul with our creamy coconut infused king crab soup, brimming with delicate flavors.',
},
['pearls_meal_sesamecrustedsalmon'] = {
    name = 'pearls_meal_sesamecrustedsalmon',
    label = 'Sesame Crusted Salmon',
    weight = 30,
    type = 'item',
    image = 'pearls_meal_sesamecrustedsalmon.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Experience the perfect blend of textures with our sesame crusted salmon, served with soy sauce and fresh vegetables.',
},
['pearls_meal_lemonbutterlobstertail'] = {
    name = 'pearls_meal_lemonbutterlobstertail',
    label = 'Lemon Butter Lobster Tail',
    weight = 30,
    type = 'item',
    image = 'pearls_meal_lemonbutterlobstertail.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Delight in the tender perfection of our lobster tail, bathed in a zesty lemon butter sauce.',
},
['pearls_meal_spicytunasashimi'] = {
    name = 'pearls_meal_spicytunasashimi',
    label = 'Spicy Tuna Sashimi',
    weight = 30,
    type = 'item',
    image = 'pearls_meal_spicytunasashimi.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Embark on a fiery adventure with our spicy tuna sashimi, served with soy sauce for a kick of flavor.',
},
['pearls_meal_cokecolaglazedsalmon'] = {
    name = 'pearls_meal_cokecolaglazedsalmon',
    label = 'Coke Cola Glazed Salmon',
    weight = 30,
    type = 'item',
    image = 'pearls_meal_cokecolaglazedsalmon.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Experience a unique twist with our Coke Cola glazed salmon, paired with creamy mashed potatoes and seasonal vegetables.',
},
['pearls_meal_lobsterandshrimpscampi'] = {
    name = 'pearls_meal_lobsterandshrimpscampi',
    label = 'Lobster and Shrimp Scampi',
    weight = 30,
    type = 'item',
    image = 'pearls_meal_lobsterandshrimpscampi.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Savor the delightful combination of lobster and shrimp in our garlic infused scampi sauce, served with pasta.',
},
['pearls_meal_honeydijonglazedtuna'] = {
    name = 'pearls_meal_honeydijonglazedtuna',
    label = 'Honey Dijon Glazed Tuna',
    weight = 30,
    type = 'item',
    image = 'pearls_meal_honeydijonglazedtuna.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Satisfy your palate with our sweet and tangy honey dijon glazed tuna, served with creamy mashed potatoes.',
},
['pearls_meal_ruminfusedlobstertail'] = {
    name = 'pearls_meal_ruminfusedlobstertail',
    label = 'Rum Infused Lobster Tail',
    weight = 30,
    type = 'item',
    image = 'pearls_meal_ruminfusedlobstertail.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Take a culinary journey with our rum infused lobster tail, served with creamy mashed potatoes and asparagus.',
},
['pearls_meal_classicsurfandturf'] = {
    name = 'pearls_meal_classicsurfandturf',
    label = 'Classic Surf and Turf',
    weight = 30,
    type = 'item',
    image = 'pearls_meal_classicsurfandturf.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Experience the timeless combination of a perfectly cooked steak and succulent lobster tail, accompanied by a side of mashed potatoes and asparagus.',
},
['pearls_meal_searedtunasteak'] = {
    name = 'pearls_meal_searedtunasteak',
    label = 'Seared Tuna Steak',
    weight = 30,
    type = 'item',
    image = 'pearls_meal_searedtunasteak.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Savor the exquisite flavor and texture of our seared tuna steak, served with a delicate lemon butter sauce and grilled vegetables.',
},
['pearls_meal_honeyglazedkingcrab'] = {
    name = 'pearls_meal_honeyglazedkingcrab',
    label = 'Honey Glazed King Crab',
    weight = 30,
    type = 'item',
    image = 'pearls_meal_honeyglazedkingcrab.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Delight in the sweet and savory flavors of our honey glazed king crab, a true indulgence from the sea.',
},
['pearls_meal_mojitoinfusedtuna'] = {
    name = 'pearls_meal_mojitoinfusedtuna',
    label = 'Mojito Infused Tuna',
    weight = 30,
    type = 'item',
    image = 'pearls_meal_mojitoinfusedtuna.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Treat your taste buds to the refreshing flavors of our mojito infused tuna, served with a side of coconut infused rice and fresh vegetables.',
},
['pearls_signaturemartini'] = {
    name = 'pearls_signaturemartini',
    label = "Pearls Signature Martini",
    weight = 30,
    type = 'item',
    image = 'pearls_signaturemartini.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Indulge in the timeless elegance of Pearls Signature Martini, expertly crafted with premium gin or vodka and garnished with a twist of lemon or a briny olive."
},
['pearls_champagneroyale'] = {
    name = 'pearls_champagneroyale',
    label = 'Champagne Royale',
    weight = 30,
    type = 'item',
    image = 'pearls_champagneroyale.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Experience the opulence of Champagne Royale, a luxurious champagne cocktail featuring a sugar cube soaked in Angostura bitters, topped with chilled champagne and a lemon twist."
},
['pearls_coastalbreeze'] = {
    name = 'pearls_coastalbreeze',
    label = "Pearls Coastal Breeze",
    weight = 30,
    type = 'item',
    image = 'pearls_coastalbreeze.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Relax with Pearls' Coastal Breeze, a refreshing blend of top shelf vodka, coconut water, and a splash of fresh pineapple juice, served over ice."
},
['pearls_cucumberbasilgimlet'] = {
    name = 'pearls_cucumberbasilgimlet',
    label = 'Cucumber Basil Gimlet',
    weight = 30,
    type = 'item',
    image = 'pearls_cucumberbasilgimlet.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Savor the sophistication of the Cucumber Basil Gimlet, a twist on the classic gimlet made with gin, muddled cucumber, basil leaves, and a hint of lime juice."
},
['pearls_oceanselixir'] = {
    name = 'pearls_oceanselixir',
    label = "Pearls Oceans Elixir",
    weight = 30,
    type = 'item',
    image = 'pearls_oceanselixir.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Embark on a unique seafood inspired journey with Oceans Elixir, a cocktail featuring premium gin, elderflower liqueur, fresh lime juice, and a hint of sea salt."
},
['pearls_smokyoldfashioned'] = {
    name = 'pearls_smokyoldfashioned',
    label = "Pearls Smoky Old Fashioned",
    weight = 30,
    type = 'item',
    image = 'pearls_smokyoldfashioned.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Experience the allure of Pearls Smoky Old Fashioned, crafted with single malt scotch, a sugar cube, and a dash of orange bitters for a smoky and rich flavor."
},
['pearls_sapphirebluemargarita'] = {
    name = 'pearls_sapphirebluemargarita',
    label = 'Pearls Sapphire Blue Margarita',
    weight = 30,
    type = 'item',
    image = 'pearls_sapphirebluemargarita.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Dive into the vibrancy of the Sapphire Blue Margarita, a stunning blue cocktail made with top shelf tequila, blue curaçao, fresh lime juice, and a salted rim."
},
['pearls_blackberrysagespritz'] = {
    name = 'pearls_blackberrysagespritz',
    label = 'Pearls Blackberry Sage Spritz',
    weight = 30,
    type = 'item',
    image = 'pearls_blackberrysagespritz.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Elevate your senses with the Blackberry Sage Spritz, a sophisticated cocktail featuring blackberry infused vodka, sage leaves, sparkling wine, and a twist of lemon."
},
['pearls_mintjuleproyale'] = {
    name = 'pearls_mintjuleproyale',
    label = 'Pearls Mint Julep Royale',
    weight = 30,
    type = 'item',
    image = 'pearls_mintjuleproyale.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Experience the Kentucky Derby classic, the Mint Julep Royale, elevated with premium bourbon, fresh mint leaves, and a splash of champagne."
},
['pearls_espressomartini'] = {
    name = 'pearls_espressomartini',
    label = "Pearls  Espresso Martini",
    weight = 30,
    type = 'item',
    image = 'pearls_espressomartini.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Indulge in the richness of Pearls' Espresso Martini, crafted with top_quality coffee liqueur, vodka, and a shot of freshly brewed espresso, garnished with coffee beans."
},`,
        textTwo: 'Now add this to the qb-core/shared/job.lua',
        codeTwo: `['pearls'] = {
  label = 'pearls',
  defaultDuty = true,
  grades = {
    ['0'] = {
      name = 'Recruit',
      payment = 150
    },
    ['1'] = {
      name = 'Crew Member',
      payment = 165
    },
    ['2'] = {
      name = 'Shift Manager',
      payment = 175
    },
    ['3'] = {
      name = 'Manager',
      payment = 185
    },
    ['4'] = {
      name = 'Owner',
      isboss = true,
      payment = 200
    },
  },
}
    `,
        textThree: 'You need add these to ConsumableEat in qb-smallresources/config.lua',
        codeThree: `["pearls_meal_honeyglazedsalmonwithriceandvegetables"] = math.random(35, 54),
["pearls_meal_kingcrablegs"] = math.random(35, 54),
["pearls_meal_sesamesearedtunawithgrilledvegetables"] = math.random(35, 54),
["pearls_meal_steakandlobsterwithmashtatersandasparagus"] = math.random(35, 54),
["pearls_meal_salmonwithlemonbuttersauce"] = math.random(35, 54),
["pearls_meal_lobsterbisque"] = math.random(35, 54),
["pearls_meal_mintymojitosalmonshrimp"] = math.random(35, 54),
["pearls_meal_butterygarlickingcrab"] = math.random(35, 54),
["pearls_meal_coconutinfusedkingcrabsoup"] = math.random(35, 54),
["pearls_meal_sesamecrustedsalmon"] = math.random(35, 54),
["pearls_meal_lemonbutterlobstertail"] = math.random(35, 54),
["pearls_meal_spicytunasashimi"] = math.random(35, 54),
["pearls_meal_cokecolaglazedsalmon"] = math.random(35, 54),
["pearls_meal_lobsterandshrimpscampi"] = math.random(35, 54),
["pearls_meal_honeydijonglazedtuna"] = math.random(35, 54),
["pearls_meal_ruminfusedlobstertail"] = math.random(35, 54),
["pearls_meal_classicsurfandturf"] = math.random(35, 54),
["pearls_meal_searedtunasteak"] = math.random(35, 54),
["pearls_meal_honeyglazedkingcrab"] = math.random(35, 54),
["pearls_meal_mojitoinfusedtuna"] = math.random(35, 54),`,
        textFour: 'You need add these to ConsumableDrink in qb-smallresources/config.lua',
        codeFour: `["pearls_cokecola"] = math.random(35, 54),
["pearls_mojito"] = math.random(35, 54),
["pearls_rum"] = math.random(35, 54),
["pearls_signaturemartini"] = math.random(35, 54),
["pearls_champagneroyale"] = math.random(35, 54),
["pearls_coastalbreeze"] = math.random(35, 54),
["pearls_cucumberbasilgimlet"] = math.random(35, 54),
["pearls_oceanselixir"] = math.random(35, 54),
["pearls_smokyoldfashioned"] = math.random(35, 54),
["pearls_sapphirebluemargarita"] = math.random(35, 54),
["pearls_blackberrysagespritz"] = math.random(35, 54),
["pearls_mintjuleproyale"] = math.random(35, 54),
["pearls_espressomartini"] = math.random(35, 54),`,
        textFive: 'You need add this in qb-management/client/cl_config.lua under Config.BossMenus  and you also have to add the job to the qb-management database table.',
        codeFive: `['pearls'] = {
  vector3(-1840.11, -1182.93, 14.31),
},`,
        textSix: 'You need add this in qb-management/client/cl_config.lua under Config.BossMenuszone',
        codeSix: `['pearls'] = {
  { coords = vector3(-1840.11, -1183.89, 14.20), length = 0.35, width = 0.45, heading = 351.0, minZ = 14.21, maxZ = 14.70 },
},`,
        textSeven: undefined,
        codeSeven: undefined,
        textEight: undefined,
        codeEight: undefined,
        textNine: undefined,
        codeNine: undefined,
        textTen: undefined,
        codeTen: undefined,
        textEleven: undefined,
        codeEleven: undefined,
        textTwelve: undefined,
        codeTwelve: undefined,
        textThirteen: undefined,
        codeThirteen: undefined,
        textFourteen: undefined,
        codeFourteen: undefined,
        textFifteen: undefined,
        codeFifteen: undefined,
        textSixteen: undefined,
        codeSixteen: undefined,
        textSeventeen: undefined,
        codeSeventeen: undefined,
        textEighteen: undefined,
        codeEighteen: undefined,
        textNineteen: undefined,
        codeNineteen: undefined,
        textTwenty: undefined,
        codeTwenty: undefined,
    },
    pizzathis: {
        title: 'Place all images into your inventory\'s images folder',
        textOne: 'Qbcore & Qbox will both work with this format. You need these to add the items into the core\'s shared/items.lua',
        codeOne: `['pizzathis_milk'] 						= {['name'] = 'pizzathis_milk', 			 	['label'] = 'Milk',                             ['weight'] = 30, 		['type'] = 'item', 		['image'] = 'pizzathis_milk.png', 				    ['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'milk'},
['pizzathis_vanillaextract'] 			= {['name'] = 'pizzathis_vanillaextract', 		['label'] = 'Vanilla Extract',                  ['weight'] = 30, 		['type'] = 'item', 		['image'] = 'pizzathis_vanillaextract.png',         ['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = ''},
['pizzathis_tomatosauce'] 				= {['name'] = 'pizzathis_tomatosauce', 	    	['label'] = 'Tomato Sauce',                     ['weight'] = 30, 		['type'] = 'item', 		['image'] = 'pizzathis_tomatosauce.png', 	        ['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'Its tomato sauce'},
['pizzathis_garlic'] 					= {['name'] = 'pizzathis_garlic', 			 	['label'] = 'Garlic',                           ['weight'] = 30, 		['type'] = 'item', 		['image'] = 'pizzathis_garlic.png', 		        ['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = ''},
['pizzathis_butter'] 					= {['name'] = 'pizzathis_butter', 			 	['label'] = 'Butter',                           ['weight'] = 30, 		['type'] = 'item', 		['image'] = 'pizzathis_butter.png', 		        ['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = ''},
['pizzathis_soysauce'] 					= {['name'] = 'pizzathis_soysauce', 			['label'] = 'Soy Sauce',                        ['weight'] = 30, 		['type'] = 'item', 		['image'] = 'pizzathis_soysauce.png', 	            ['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = ''},
['pizzathis_cashews'] 					= {['name'] = 'pizzathis_cashews',             	['label'] = 'Cashews',                          ['weight'] = 30,        ['type'] = 'item',      ['image'] = 'pizzathis_cashews.png',                ['unique'] = false,     ['useable'] = true,     ['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = ''},
['pizzathis_tomato'] 					= {['name'] = 'pizzathis_tomato',              	['label'] = 'Tamato',                           ['weight'] = 30,        ['type'] = 'item',      ['image'] = 'pizzathis_tomato.png',                 ['unique'] = false,     ['useable'] = true,     ['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'Tomato'},
['pizzathis_apple'] 					= {['name'] = 'pizzathis_apple',               	['label'] = 'Apple',                            ['weight'] = 30,        ['type'] = 'item',      ['image'] = 'pizzathis_apple.png',                  ['unique'] = false,     ['useable'] = true,     ['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'Apple'},
['pizzathis_orange'] 					= {['name'] = 'pizzathis_orange',              	['label'] = 'orange',                           ['weight'] = 30,        ['type'] = 'item',      ['image'] = 'pizzathis_orange.png',                 ['unique'] = false,     ['useable'] = true,     ['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'orange'},
['pizzathis_mozzarella'] 				= {['name'] = 'pizzathis_mozzarella', 			['label'] = 'Mozzarella', 					    ['weight'] = 30, 		['type'] = 'item', 		['image'] = 'pizzathis_mozzarella.png', 		    ['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'Its mozzarella cheese'},
['pizzathis_basil'] 					= {['name'] = 'pizzathis_basil', 			 	['label'] = 'Basil', 						    ['weight'] = 30, 		['type'] = 'item', 		['image'] = 'pizzathis_basil.png', 		            ['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'Its basil herb'},
['pizzathis_oregano'] 		 			= {['name'] = 'pizzathis_oregano', 				['label'] = 'Oregano', 					        ['weight'] = 30, 		['type'] = 'item', 		['image'] = 'pizzathis_oregano.png', 		        ['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'Its oregano herb'},
['pizzathis_mushroom'] 					= {['name'] = 'pizzathis_mushroom', 			['label'] = 'Mushrooms',     				    ['weight'] = 30, 		['type'] = 'item', 		['image'] = 'pizzathis_mushroom.png', 	            ['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'Its the non trippy mushroom kind'},
['pizzathis_chilli'] 					= {['name'] = 'pizzathis_chilli', 				['label'] = 'chilli', 			                ['weight'] = 20, 		['type'] = 'item', 		['image'] = 'pizzathis_chilli.png',                 ['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'its chilli'},
['pizzathis_spicysalami'] 				= {['name'] = 'pizzathis_spicysalami', 			['label'] = 'Spicy Salami', 				    ['weight'] = 30, 		['type'] = 'item', 		['image'] = 'pizzathis_spicysalami.png', 		    ['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'Its Spicy Salami'},
['pizzathis_parmesan'] 					= {['name'] = 'pizzathis_parmesan', 			['label'] = 'parmesan', 					    ['weight'] = 30, 		['type'] = 'item', 		['image'] = 'pizzathis_parmesan.png', 		        ['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'Nice parmesan cheese'},
['pizzathis_onions'] 					= {['name'] = 'pizzathis_onions', 			 	['label'] = 'Onions', 						    ['weight'] = 30, 		['type'] = 'item', 		['image'] = 'pizzathis_onions.png', 		        ['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'onions'},
['pizzathis_prosciutto'] 				= {['name'] = 'pizzathis_prosciutto', 			['label'] = 'Prosciutto', 					    ['weight'] = 30, 		['type'] = 'item', 		['image'] = 'pizzathis_prosciutto.png', 		    ['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'Hmm nice juicy italian ham.'},
['pizzathis_artichokes'] 				= {['name'] = 'pizzathis_artichokes', 			['label'] = 'Artichokes',                       ['weight'] = 30, 		['type'] = 'item', 		['image'] = 'pizzathis_artichokes.png', 	        ['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'Artichokes'},
['pizzathis_olives'] 					= {['name'] = 'pizzathis_olives', 			 	['label'] = 'Olives', 					        ['weight'] = 30, 		['type'] = 'item', 		['image'] = 'pizzathis_olives.png', 	            ['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'its chopped up olives'},
['pizzathis_aubergines'] 				= {['name'] = 'pizzathis_aubergines', 			['label'] = 'Eggplant', 				        ['weight'] = 30, 		['type'] = 'item', 		['image'] = 'pizzathis_aubergines.png', 	        ['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'Its aubergines Aka eggplant'},
['pizzathis_zucchini'] 					= {['name'] = 'pizzathis_zucchini',            	['label'] = 'Chopped Zucchini',                 ['weight'] = 30, 		['type'] = 'item', 		['image'] = 'pizzathis_zucchini.png', 	            ['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'its chopped zucchini'},
['pizzathis_roastedvegetables'] 		= {['name'] = 'pizzathis_roastedvegetables',   	['label'] = 'Roasted Vegetables',               ['weight'] = 30, 		['type'] = 'item', 		['image'] = 'pizzathis_roastedvegetables.png', 	    ['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'Its Roasted Vegetables'},
['pizzathis_italianbelognese'] 			= {['name'] = 'pizzathis_italianbelognese',    	['label'] = 'Italian Belognese Sauce',          ['weight'] = 30, 		['type'] = 'item', 		['image'] = 'pizzathis_italianbelognese.png', 	    ['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'Its Italian belognese sauce'},
['pizzathis_pasta'] 					= {['name'] = 'pizzathis_pasta', 				['label'] = 'Pasta', 			                ['weight'] = 30, 		['type'] = 'item', 		['image'] = 'pizzathis_pasta.png',                  ['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'its pasta'},
['pizzathis_squidrings'] 				= {['name'] = 'pizzathis_squidrings',          	['label'] = 'Squid Rings', 					    ['weight'] = 30, 		['type'] = 'item', 		['image'] = 'pizzathis_squidrings.png', 		    ['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'Its Squid Rings'},
['pizzathis_meatballs'] 				= {['name'] = 'pizzathis_meatballs',           	['label'] = 'HomeMade Meatballs', 			    ['weight'] = 30, 		['type'] = 'item', 		['image'] = 'pizzathis_meatballs.png', 		        ['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'Nice homemade meatballs'},
['pizzathis_vodkasauce'] 				= {['name'] = 'pizzathis_vodkasauce',          	['label'] = 'Vodka Sauce', 					    ['weight'] = 30, 		['type'] = 'item', 		['image'] = 'pizzathis_vodkasauce.png', 	        ['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'Its special Vodka Sauce'},
['pizzathis_shrimps'] 					= {['name'] = 'pizzathis_shrimps',             	['label'] = 'Shrimp', 					        ['weight'] = 30, 		['type'] = 'item', 		['image'] = 'pizzathis_shrimps.png', 	            ['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'its shrimp'},
['pizzathis_calamari'] 					= {['name'] = 'pizzathis_calamari', 		    ['label'] = 'Fresh Calamari', 				    ['weight'] = 30, 		['type'] = 'item', 		['image'] = 'pizzathis_calamari.png', 	            ['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'Its calamari'},
['pizzathis_clams']						= {['name'] = 'pizzathis_clams', 			 	['label'] = 'Fresh Clams', 	                    ['weight'] = 30, 		['type'] = 'item', 		['image'] = 'pizzathis_clams.png', 	                ['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'its clams'},
['pizzathis_margherita'] 				= {['name'] = 'pizzathis_margherita', 			['label'] = 'Margherita Pizza',                 ['weight'] = 750, 		['type'] = 'item', 		['image'] = 'pizzathis_margherita.png', 	        ['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'Its a margherita Pizza'},
['pizzathis_prosciuttoefunghi'] 		= {['name'] = 'pizzathis_prosciuttoefunghi', 	['label'] = 'Prosciutto e Funghi Pizza',        ['weight'] = 750, 		['type'] = 'item', 		['image'] = 'pizzathis_prosciuttoefunghi.png',      ['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'Its a Prosciutto Pizza'},
['pizzathis_marinara'] 					= {['name'] = 'pizzathis_marinara', 			['label'] = 'marinara Pizza', 				    ['weight'] = 750, 		['type'] = 'item', 		['image'] = 'pizzathis_marinara.png', 	            ['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'Its a marinara Pizza'},
['pizzathis_diavola'] 					= {['name'] = 'pizzathis_diavola', 				['label'] = 'Diavola Pizza', 				    ['weight'] = 750, 		['type'] = 'item', 		['image'] = 'pizzathis_diavola.png', 	            ['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'Its a diavola pizza'},
['pizzathis_capricciosa'] 				= {['name'] = 'pizzathis_capricciosa', 			['label'] = 'Capricciosa Pizza', 			    ['weight'] = 750, 		['type'] = 'item', 		['image'] = 'pizzathis_capricciosa.png', 	        ['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'Its a capricciosa Pizza'},
['pizzathis_vegetariana'] 				= {['name'] = 'pizzathis_vegetariana', 			['label'] = 'Vegetariana Pizza', 			    ['weight'] = 750, 		['type'] = 'item', 		['image'] = 'pizzathis_vegetariana.png', 	        ['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'Its a vegetariana pizza'},
['pizzathis_bolognese'] 				= {['name'] = 'pizzathis_bolognese', 			['label'] = 'Bolognese Pasta', 				    ['weight'] = 750, 		['type'] = 'item', 		['image'] = 'pizzathis_bolognese.png', 	            ['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'Its a bolognese pasta'},
['pizzathis_calamarimarinara'] 			= {['name'] = 'pizzathis_calamarimarinara', 	['label'] = 'Calamari Marinara Pasta', 		    ['weight'] = 750, 		['type'] = 'item', 		['image'] = 'pizzathis_calamarimarinara.png',       ['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'Its a calamari marinara pasta'},
['pizzathis_homemademeatball'] 			= {['name'] = 'pizzathis_homemademeatball', 	['label'] = 'Homemade Meatball Pasta', 		    ['weight'] = 750, 		['type'] = 'item', 		['image'] = 'pizzathis_homemademeatball.png',       ['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'Its a homemade meatball pasta'},
['pizzathis_allavodka'] 				= {['name'] = 'pizzathis_allavodka', 			['label'] = 'Alla Vodka Pasta', 			    ['weight'] = 750, 		['type'] = 'item', 		['image'] = 'pizzathis_allavodka.png', 	            ['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'Its a alla vodka pasta'},
['pizzathis_pescatore'] 				= {['name'] = 'pizzathis_pescatore', 			['label'] = 'Pescatore Pasta', 				    ['weight'] = 750, 		['type'] = 'item', 		['image'] = 'pizzathis_pescatore.png', 	            ['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'Its a pescatore pasta'},
['pizzathis_tiramisu'] 					= {['name'] = 'pizzathis_tiramisu', 			['label'] = 'Tiramisu Dessert',                 ['weight'] = 350, 		['type'] = 'item', 		['image'] = 'pizzathis_tiramisu.png', 	            ['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'Its tiramisu'},
['pizzathis_chocolategelato'] 			= {['name'] = 'pizzathis_chocolategelato',     	['label'] = 'Chocolate Gelato on a Cone',       ['weight'] = 300, 		['type'] = 'item', 		['image'] = 'pizzathis_chocolategelato.png', 	    ['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'Its Chocolate Gelato on a Cone'},
['pizzathis_vanillagelato'] 			= {['name'] = 'pizzathis_vanillagelato',       	['label'] = 'Vanilla Gelato on a Cone',         ['weight'] = 300, 		['type'] = 'item', 		['image'] = 'pizzathis_vanillagelato.png', 	        ['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'Its Vanilla Gelato on a Cone'},
['pizzathis_freshfruits'] 				= {['name'] = 'pizzathis_freshfruits',         	['label'] = 'Fresh Fruit Cup', 				    ['weight'] = 30, 		['type'] = 'item', 		['image'] = 'pizzathis_freshfruits.png', 	        ['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'A healthy snack!'},
['pizzathis_ticket'] 					= {['name'] = 'pizzathis_ticket', 			 	['label'] = 'Receipt', 	     				    ['weight'] = 150, 		['type'] = 'item', 		['image'] = 'pizzathis_ticket.png', 	            ['unique'] = false,   	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'Here is an order that needs to be made quickly!'},
['pizzathis_pizzapallet'] 				= {['name'] = 'pizzathis_pizzapallet',         	['label'] = 'Pizza Ingredients Pallet',         ['weight'] = 500, 	    ['type'] = 'item', 		['image'] = 'pizzathis_pallet.png', 	            ['unique'] = false,   	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'This box is filled with Pizza This ingredients.'},
['pizzathis_pastapallet'] 				= {['name'] = 'pizzathis_pastapallet',         	['label'] = 'Pasta Ingredients Pallet',         ['weight'] = 500, 	    ['type'] = 'item', 		['image'] = 'pizzathis_pallet.png', 	            ['unique'] = false,   	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'This box is filled with Pizza This ingredients.'},
['pizzathis_emptybag'] 	 				= {['name'] = 'pizzathis_emptybag', 	        ['label'] = 'Empty Delivery Bag', 		        ['weight'] = 500, 		['type'] = 'item', 		['image'] = 'pizzathis_emptybag.png',       		['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'Empty Pizza This delivery bag'},
['pizzathis_deliverybag'] 				= {['name'] = 'pizzathis_deliverybag', 	    	['label'] = 'Pizza This Delivery Bag', 		    ['weight'] = 500, 		['type'] = 'item', 		['image'] = 'pizzathis_deliverybag.png',    		['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'Pizza This delivery bag'},
['pizzathis_capricciosaslices'] 		= {['name'] = 'pizzathis_capricciosaslices',   	['label'] = 'Capriccosa Slices',	 		    ['weight'] = 100, 		['type'] = 'item', 		['image'] = 'pizzathis_capricciosaslices.png', 	    ['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'Capriccosa Slices'},
['pizzathis_diavolaslices'] 			= {['name'] = 'pizzathis_diavolaslices',       	['label'] = 'Diavola Slices',	 			    ['weight'] = 100, 		['type'] = 'item', 		['image'] = 'pizzathis_diavolaslices.png', 		    ['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'Diavola Slices'},
['pizzathis_marinaraslices'] 			= {['name'] = 'pizzathis_marinaraslices',      	['label'] = 'Marinara Slices',	 			    ['weight'] = 100, 		['type'] = 'item', 		['image'] = 'pizzathis_marinaraslices.png', 		['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'Marinara Slices'},
['pizzathis_margheritaslices']			= {['name'] = 'pizzathis_margheritaslices',    	['label'] = 'Margherita Slices',	 		    ['weight'] = 100, 		['type'] = 'item', 		['image'] = 'pizzathis_margheritaslices.png', 	    ['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = ''},
['pizzathis_prosciuttioslices'] 		= {['name'] = 'pizzathis_prosciuttioslices',   	['label'] = 'Prosciuttio E Funghi Slices',	    ['weight'] = 100, 		['type'] = 'item', 		['image'] = 'pizzathis_proscuttioslices.png', 	    ['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = ''},
['pizzathis_vegetarianaslices'] 		= {['name'] = 'pizzathis_vegetarianaslices',   	['label'] = 'Vegetariana Slices',			    ['weight'] = 100, 		['type'] = 'item', 		['image'] = 'pizzathis_vegetarianaslices.png', 	    ['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = ''},
`,
        textTwo: 'Now add this to the cores\'s shared/jobs.lua',
        codeTwo: `THIS IS FOR QBCORE:
['pizzathis'] = {
    label = 'Pizza This',
    defaultDuty = true,
    offDutyPay = true,
    grades = {
        ['0'] = {
            name = 'Recruit',
            payment = 175
        },
        ['1'] = {
            name = 'Crew Member',
            payment = 185
        },
        ['2'] = {
            name = 'Shift Manager',
            payment = 195
        },
        ['3'] = {
            name = 'Manager',
            payment = 205
        },
        ['4'] = {
            name = 'Owner',
            isboss = true,
            payment = 215
        },
    },
},


THIS IS FOR QBOX:
['pizzathis'] = {
    label = 'Pizza This Pizzeria',
    defaultDuty = true,
    offDutyPay = true,
    grades = {
        [0] = { name = 'Recruit', payment = 500 },
        [1] = { name = 'Crew Member', payment = 750 },
        [2] = { name = 'Shift Manager', payment = 1000 },
        [3] = { name = 'Manager', payment = 1100 },
        [4] = { name = 'Owner', isboss = true, bankAuth = true, payment = 1200 },
    },
},
`,
        textThree: 'FOR QBCORE ONLY: You need add these to ConsumableEat in qb-smallresources/config.lua',
        codeThree: `['tiramisu'] = math.random(15, 22),
['pizzathis_chocolategelato'] = math.random(7,10),
['pizzathis_vanillagelato'] = math.random(7,10),
['pizzathis_freshfruits'] = math.random(15, 22),
['pizzathis_bolognese'] = math.random(30, 42),
['pizzathis_calamarimarinara'] = math.random(30, 42),
['pizzathis_homemademeatball'] = math.random(30, 42),
['pizzathis_allavodka'] = math.random(30, 42),
['pizzathis_pescatore'] = math.random(30, 42), `,
        textFour: 'FOR QBCORE ONLY: You need add these in qb-smallresources/config.lua',
        codeFour: `Config.ConsumablesPizzaThisSlices = {
    ['pizzathis_margheritaslices'] = math.random(30, 54),
    ['pizzathis_marinaraslices'] = math.random(35, 54),
    ['pizzathis_prosciuttioslices'] = math.random(35, 54),
    ['pizzathis_diavolaslices'] = math.random(35, 54),
    ['pizzathis_capricciosaslices'] = math.random(35, 54),
    ['pizzathis_vegetarianaslices'] = math.random(35, 54),
}

Config.ConsumablesPizzaThisPizza = {
    ['pizzathis_margherita'] = math.random(30, 54),
    ['pizzathis_marinara'] = math.random(35, 54),
    ['pizzathis_prosciuttoefunghi'] = math.random(35, 54),
    ['pizzathis_diavola'] = math.random(35, 54),
    ['pizzathis_capricciosa'] = math.random(35, 54),
    ['pizzathis_vegetariana'] = math.random(35, 54),
}`,
        textFive: 'FOR QBCORE ONLY: Add the following code to qb-smallresources/server/consumables.lua',
        codeFive: `for k,_ in pairs(Config.ConsumablesPizzaThisSlices) do
    QBCore.Functions.CreateUseableItem(k, function(source, item)
      local Player = QBCore.Functions.GetPlayer(source)
      if not Player.Functions.RemoveItem(item.name, 1, item.slot) then return end
      TriggerClientEvent('consumables:client:EatPizzaSlice', source, item.name)
    end)
end

for k,_ in pairs(Config.ConsumablesPizzaThisPizza) do
    QBCore.Functions.CreateUseableItem(k, function(source, item)
      local Player = QBCore.Functions.GetPlayer(source)
      if not Player.Functions.RemoveItem(item.name, 1, item.slot) then return end
      TriggerClientEvent('consumables:client:EatFullPizza', source, item.name)
    end)
end`,
        textSix: 'FOR QBCORE ONLY: Add the following code to qb-smallresources/client/consumables.lua',
        codeSix: `RegisterNetEvent('consumables:client:EatPizzaSlice', function(itemName)
    EatItem(itemName, false, 'pizzaslice')
end)
  
RegisterNetEvent('consumables:client:EatFullPizza', function(itemName)
  EatItem(itemName, true, 'pizza')
end)
  
local function EatItem(itemName, isFullPizza, animation)
    local hungerValue = isFullPizza and Config.ConsumablesPizzaThisPizza[itemName] or Config.ConsumablesPizzaThisSlices[itemName]
    TriggerEvent('animations:client:EmoteCommandStart', {animation})
    QBCore.Functions.Progressbar('eat_something', 'Eating..', 5000, false, true, {
        disableMovement = false,
        disableCarMovement = false,
        disableMouse = false,
        disableCombat = true,
    }, {}, {}, {}, function() -- Done
        TriggerEvent('animations:client:EmoteCommandStart', {'c'})
        TriggerServerEvent('consumables:server:addHunger', QBCore.Functions.GetPlayerData().metadata['hunger'] + hungerValue)
    end, function() -- Cancel
        TriggerEvent('animations:client:EmoteCommandStart', {'c'})
        QBCore.Functions.Notify('Cancelled..', 'error')
    end, 'fa-solid fa-burger')
end`,
        textSeven: 'FOR QBCORE ONLY: You need add this in qb-management/client/cl_config.lua under Config.BossMenus  and you also have to add the job to the qb-management database table.',
        codeSeven: `['pizzathis'] = {
    vector3(796.52215, -749.3094, 31.265884),
},`,
        textEight: 'FOR QBCORE ONLY: You need add this in qb-management/client/cl_config.lua under Config.BossMenuszone',
        codeEight: `['pizzathis'] = {
    { coords = vector3(796.46, -748.94, 31.265884), length = 0.38, width = 0.55, heading = 351.0, minZ = 30.58, maxZ = 31.68 }, -- DONE
},`,
        textNine: 'FOR QBCORE ONLY: Add this under qb-shop/config.lua under products -- this is for the drinks',
        codeNine: `['pizzathis'] = {
    [1] = {
        name = 'coffee',
        price = 5,
        amount = 500,
        info = {},
        type = 'item',
        slot = 1,
    },
    [2] = {
        name = 'water_bottle',
        price = 3,
        amount = 50,
        info = {},
        type = 'item',
        slot = 2,
    },
    [3] = {
        name = 'kurkakola',
        price = 3,
        amount = 50,
        info = {},
        type = 'item',
        slot = 3,
    },
    [4] = {
        name = 'beer',
        price = 7,
        amount = 50,
        info = {},
        type = 'item',
        slot = 4,
    },
    [5] = {
        name = 'whiskey',
        price = 10,
        amount = 50,
        info = {},
        type = 'item',
        slot = 5,
    },
    [6] = {
        name = 'vodka',
        price = 10,
        amount = 50,
        info = {},
        type = 'item',
        slot = 6,
    },
    [7] = {
        name = 'pizzathis_emptybag',
        price = 50,
        amount = 50,
        info = {},
        type = 'item',
        slot = 7,
    },
    [8] = {
        name = 'pizzathis_pizzabox',
        price = 10,
        amount = 1000,
        info = {},
        type = 'item',
        slot = 8,
    },
},
    `,
        textTen: 'FOR QBCORE ONLY: Add this under qb-shop/config.lua under Config.Locations',
        codeTen: `['pizzathis'] = {
    label = 'Pizza This',
    type = 'pizzathis',
    ['coords'] = vector3(813.5108, -749.3524, 26.780836),
    ['ped'] = '',
    ['scenario'] = '',
    ['radius'] = 1.5,
    ['targeticon'] = 'fas fa-shopping-basket',
    ['targetLabel'] = 'Open Shop',
    ['products'] = Config.Products['pizzathis'],
    ['showblip'] = false,
    ['blipsprite'] = 267,
    ['blipcolor'] = 25
},`,
    textEleven: 'FOR QBOX ONLY: You need add this in qbx_management config/server.lua',
    codeEleven: `pizzathis = {
    coords = vec3(796.46, -748.94, 31.26),
    size = vec3(1.5, 1.5, 1.5),
    rotation = 351.0,
    type = 'job',
},`,

    textTwelve: 'FOR OX INVENTORY ONLY: in /modules/items/containers.lua add this code',
    codeTwelve: `setContainerProperties('pizzathis_pizzabox', {
	slots = 6,
	maxWeight = 1000,
	whitelist = { 'pizzathis_margheritaslices', 'pizzathis_marinaraslices', 'pizzathis_prosciuttioslices', 'pizzathis_diavolaslices', 'pizzathis_capricciosaslices', 'pizzathis_vegetarianaslices'}
})`,

    textThirteen: 'FOR OX INVENTORY ONLY: Add this in data/items.lua',
    codeThirteen: `["pizzathis_marinara"] = {
    label = "marinara Pizza",
    weight = 750,
    stack = true,
    close = true,
    description = "Its a marinara Pizza",
    client = {
        image = "pizzathis_marinara.png",
    }
},

["pizzathis_prosciuttoefunghi"] = {
    label = "Prosciutto e Funghi Pizza",
    weight = 750,
    stack = true,
    close = true,
    description = "Its a Prosciutto Pizza",
    client = {
        image = "pizzathis_prosciuttoefunghi.png",
    }
},

["pizzathis_diavola"] = {
    label = "Diavola Pizza",
    weight = 750,
    stack = true,
    close = true,
    description = "Its a diavola pizza",
    client = {
        image = "pizzathis_diavola.png",
    }
},

["pizzathis_margherita"] = {
    label = "Margherita Pizza",
    weight = 750,
    stack = true,
    close = true,
    description = "Its a margherita Pizza",
    client = {
        image = "pizzathis_margherita.png",
    }
},

["pizzathis_vegetariana"] = {
    label = "Vegetariana Pizza",
    weight = 750,
    stack = true,
    close = true,
    description = "Its a vegetariana pizza",
    client = {
        image = "pizzathis_vegetariana.png",
    }
},

["pizzathis_capricciosa"] = {
    label = "Capricciosa Pizza",
    weight = 750,
    stack = true,
    close = true,
    description = "Its a capricciosa Pizza",
    client = {
        image = "pizzathis_capricciosa.png",
    }
},

["pizzathis_prosciuttioslices"] = {
    label = "Prosciuttio E Funghi Slices",
    weight = 100,
    stack = true,
    close = true,
    description = "",
    client = {
        image = "pizzathis_proscuttioslices.png",
        status = { hunger = 100000},
        anim = { dict = 'mp_player_inteat@burger', clip = 'mp_player_int_eat_burger_fp' },
        prop = { model = 'dl_pizzslice1', pos = { x = 0.02, y = 0.02, y = -0.02}, rot = { x = 0.0, y = 0.0, y = 0.0} },
        usetime = 5000,
        cancel = true,
        notification = 'You ate a Prosciuttio E Funghi Slice'
    }
},

["pizzathis_marinaraslices"] = {
    label = "Marinara Slices",
    weight = 100,
    stack = true,
    close = true,
    description = "",
    client = {
        image = "pizzathis_marinaraslices.png",
        status = { hunger = 100000},
        anim = { dict = 'mp_player_inteat@burger', clip = 'mp_player_int_eat_burger_fp' },
        prop = { model = 'dl_pizzslice2', pos = { x = 0.02, y = 0.02, y = -0.02}, rot = { x = 0.0, y = 0.0, y = 0.0} },
        usetime = 5000,
        cancel = true,
        notification = 'You ate a Marinara Slice'
    }
},

["pizzathis_vegetarianaslices"] = {
    label = "Vegetariana Slices",
    weight = 100,
    stack = true,
    close = true,
    description = "",
    client = {
        image = "pizzathis_vegetarianaslices.png",
        status = { hunger = 100000},
        anim = { dict = 'mp_player_inteat@burger', clip = 'mp_player_int_eat_burger_fp' },
        prop = { model = 'dl_pizzslice3', pos = { x = 0.02, y = 0.02, y = -0.02}, rot = { x = 0.0, y = 0.0, y = 0.0} },
        usetime = 5000,
        cancel = true,
        notification = 'You ate a Vegetariana Slice'
    }
},

["pizzathis_capricciosaslices"] = {
    label = "Capriccosa Slices",
    weight = 100,
    stack = true,
    close = true,
    description = "",
    client = {
        image = "pizzathis_capricciosaslices.png",
        status = { hunger = 100000},
        anim = { dict = 'mp_player_inteat@burger', clip = 'mp_player_int_eat_burger_fp' },
        prop = { model = 'dl_pizzslice4', pos = { x = 0.02, y = 0.02, y = -0.02}, rot = { x = 0.0, y = 0.0, y = 0.0} },
        usetime = 5000,
        cancel = true,
        notification = 'You ate a Capriccosa Slice'
    }
},

["pizzathis_margheritaslices"] = {
    label = "Margherita Slices",
    weight = 100,
    stack = true,
    close = true,
    description = "",
    client = {
        image = "pizzathis_margheritaslices.png",
        status = { hunger = 100000},
        anim = { dict = 'mp_player_inteat@burger', clip = 'mp_player_int_eat_burger_fp' },
        prop = { model = 'dl_pizzslice5', pos = { x = 0.02, y = 0.02, y = -0.02}, rot = { x = 0.0, y = 0.0, y = 0.0} },
        usetime = 5000,
        cancel = true,
        notification = 'You ate a Margherita Slice'
    }
},

["pizzathis_diavolaslices"] = {
    label = "Diavola Slices",
    weight = 100,
    stack = true,
    close = true,
    description = "",
    client = {
        image = "pizzathis_diavolaslices.png",
        status = { hunger = 100000},
        anim = { dict = 'mp_player_inteat@burger', clip = 'mp_player_int_eat_burger_fp' },
        prop = { model = 'dl_pizzslice5', pos = { x = 0.02, y = 0.02, y = -0.02}, rot = { x = 0.0, y = 0.0, y = 0.0} },
        usetime = 5000,
        cancel = true,
        notification = 'You ate a Diavola Slice'
    }
},

["pizzathis_pescatore"] = {
    label = "Pescatore Pasta",
    weight = 750,
    stack = true,
    close = true,
    description = "Its a pescatore pasta",
    client = {
        image = "pizzathis_pescatore.png",
        status = { hunger = 300000},
        anim = { dict = 'mp_player_inteat@burger', clip = 'mp_player_int_eat_burger_fp' },
        prop = { model = 'prop_cs_burger_01', pos = { x = 0.02, y = 0.02, y = -0.02}, rot = { x = 0.0, y = 0.0, y = 0.0} },
        usetime = 5000,
        cancel = true,
        notification = 'You ate a pescatore pasta'
    }
},

["pizzathis_tiramisu"] = {
    label = "Tiramisu Dessert",
    weight = 350,
    stack = true,
    close = true,
    description = "Its tiramisu",
    client = {
        image = "pizzathis_tiramisu.png",
        status = { hunger = 150000},
        anim = { dict = 'mp_player_inteat@burger', clip = 'mp_player_int_eat_burger_fp' },
        prop = { model = 'prop_cs_burger_01', pos = { x = 0.02, y = 0.02, y = -0.02}, rot = { x = 0.0, y = 0.0, y = 0.0} },
        usetime = 5000,
        cancel = true,
        notification = 'You ate a tiramisu'
    }
},

["pizzathis_vanillagelato"] = {
    label = "Vanilla Gelato on a Cone",
    weight = 300,
    stack = true,
    close = true,
    description = "Its Vanilla Gelato on a Cone",
    client = {
        image = "pizzathis_vanillagelato.png",
        status = { hunger = 150000},
        anim = { dict = 'mp_player_inteat@burger', clip = 'mp_player_int_eat_burger_fp' },
        prop = { model = 'prop_cs_burger_01', pos = { x = 0.02, y = 0.02, y = -0.02}, rot = { x = 0.0, y = 0.0, y = 0.0} },
        usetime = 5000,
        cancel = true,
        notification = 'You ate a Vanilla Gelato on a Cone'
    }
},

["pizzathis_chocolategelato"] = {
    label = "Chocolate Gelato on a Cone",
    weight = 300,
    stack = true,
    close = true,
    description = "Its Chocolate Gelato on a Cone",
    client = {
        image = "pizzathis_chocolategelato.png",
        status = { hunger = 150000},
        anim = { dict = 'mp_player_inteat@burger', clip = 'mp_player_int_eat_burger_fp' },
        prop = { model = 'prop_cs_burger_01', pos = { x = 0.02, y = 0.02, y = -0.02}, rot = { x = 0.0, y = 0.0, y = 0.0} },
        usetime = 5000,
        cancel = true,
        notification = 'You ate a Chocolate Gelato on a Cone'
    }
},

["pizzathis_bolognese"] = {
    label = "Bolognese Pasta",
    weight = 750,
    stack = true,
    close = true,
    description = "Its a bolognese pasta",
    client = {
        image = "pizzathis_bolognese.png",
        status = { hunger = 300000},
        anim = { dict = 'mp_player_inteat@burger', clip = 'mp_player_int_eat_burger_fp' },
        prop = { model = 'prop_cs_burger_01', pos = { x = 0.02, y = 0.02, y = -0.02}, rot = { x = 0.0, y = 0.0, y = 0.0} },
        usetime = 5000,
        cancel = true,
        notification = 'You ate a Bolognese pasta'
    }
},

["pizzathis_homemademeatball"] = {
    label = "Homemade Meatball Pasta",
    weight = 750,
    stack = true,
    close = true,
    description = "Its a homemade meatball pasta",
    client = {
        image = "pizzathis_homemademeatball.png",
        status = { hunger = 300000},
        anim = { dict = 'mp_player_inteat@burger', clip = 'mp_player_int_eat_burger_fp' },
        prop = { model = 'prop_cs_burger_01', pos = { x = 0.02, y = 0.02, y = -0.02}, rot = { x = 0.0, y = 0.0, y = 0.0} },
        usetime = 5000,
        cancel = true,
        notification = 'You ate a Homemade Meatball pasta'
    }
},

["pizzathis_allavodka"] = {
    label = "Alla Vodka Pasta",
    weight = 750,
    stack = true,
    close = true,
    description = "Its a alla vodka pasta",
    client = {
        image = "pizzathis_allavodka.png",
        status = { hunger = 300000},
        anim = { dict = 'mp_player_inteat@burger', clip = 'mp_player_int_eat_burger_fp' },
        prop = { model = 'prop_cs_burger_01', pos = { x = 0.02, y = 0.02, y = -0.02}, rot = { x = 0.0, y = 0.0, y = 0.0} },
        usetime = 5000,
        cancel = true,
        notification = 'You ate a Alla Vodka pasta'
    }
},

["pizzathis_calamarimarinara"] = {
    label = "Calamari Marinara Pasta",
    weight = 750,
    stack = true,
    close = true,
    description = "Its a calamari marinara pasta",
    client = {
        image = "pizzathis_calamarimarinara.png",
        status = { hunger = 300000},
        anim = { dict = 'mp_player_inteat@burger', clip = 'mp_player_int_eat_burger_fp' },
        prop = { model = 'prop_cs_burger_01', pos = { x = 0.02, y = 0.02, y = -0.02}, rot = { x = 0.0, y = 0.0, y = 0.0} },
        usetime = 5000,
        cancel = true,
        notification = 'You ate a Calamari Marinara pasta'
    }
},

["pizzathis_freshfruits"] = {
    label = "Fresh Fruit Cup",
    weight = 30,
    stack = true,
    close = true,
    description = "A healthy snack!",
    client = {
        image = "pizzathis_freshfruits.png",
        status = { hunger = 100000},
        anim = { dict = 'mp_player_inteat@burger', clip = 'mp_player_int_eat_burger_fp' },
        prop = { model = 'prop_cs_burger_01', pos = { x = 0.02, y = 0.02, y = -0.02}, rot = { x = 0.0, y = 0.0, y = 0.0} },
        usetime = 5000,
        cancel = true,
        notification = 'You ate a fresh fruit cup'
    }
},

['pizzathis_pizzabox'] = {
    label = 'Pizza This Pizza Box',
    weight = 1,
    stack = false,
    close = false,
    consume = 0
},

["pizzathis_pizzapallet"] = {
    label = "Pizza Ingredients Pallet",
    weight = 500,
    stack = true,
    close = true,
    description = "This pallet is filled with Pizza This ingredients.",
    client = {
        image = "pizzathis_pallet.png",
    },
    server = {
        export = 'Dank_Pizza_This_Pizzeria.pizzathis_pizzapallet',
    }
},

["pizzathis_pastapallet"] = {
    label = "Pasta Ingredients Pallet",
    weight = 500,
    stack = true,
    close = true,
    description = "This pallet is filled with Pizza This ingredients.",
    client = {
        image = "pizzathis_pallet.png",
    },
    server = {
        export = 'Dank_Pizza_This_Pizzeria.pizzathis_pastapallet',
    }
},

["pizzathis_emptybag"] = {
    label = "Empty Delivery Bag",
    weight = 500,
    stack = true,
    close = true,
    description = "Empty Pizza This delivery bag",
    client = {
        image = "pizzathis_pizzathis_emptybag.png",
    }
},

["pizzathis_ticket"] = {
    label = "Receipt",
    weight = 150,
    stack = true,
    close = true,
    description = "Here is an order that needs to be made quickly!",
    client = {
        image = "pizzathis_ticket.png",
    }
},

["pizzathis_vodkasauce"] = {
    label = "Vodka Sauce",
    weight = 30,
    stack = true,
    close = true,
    description = "Its special Vodka Sauce",
    client = {
        image = "pizzathis_vodkasauce.png",
    }
},

["pizzathis_tomatosauce"] = {
    label = "Tomato Sauce",
    weight = 30,
    stack = true,
    close = true,
    description = "Its tomato sauce",
    client = {
        image = "pizzathis_tomatosauce.png",
    }
},

["pizzathis_mushroom"] = {
    label = "Mushrooms",
    weight = 30,
    stack = true,
    close = true,
    description = "Its the non trippy mushroom kind",
    client = {
        image = "pizzathis_mushroom.png",
    }
},

["pizzathis_onions"] = {
    label = "Onions",
    weight = 30,
    stack = true,
    close = true,
    description = "onions",
    client = {
        image = "pizzathis_onions.png",
    }
},

["pizzathis_artichokes"] = {
    label = "Artichokes",
    weight = 30,
    stack = true,
    close = true,
    description = "Artichokes",
    client = {
        image = "pizzathis_artichokes.png",
    }
},

["pizzathis_shrimps"] = {
    label = "Shrimp",
    weight = 30,
    stack = true,
    close = true,
    description = "its shrimp",
    client = {
        image = "pizzathis_shrimps.png",
    }
},

["pizzathis_clams"] = {
    label = "Fresh Clams",
    weight = 30,
    stack = true,
    close = true,
    description = "its clams",
    client = {
        image = "pizzathis_clams.png",
    }
},

["pizzathis_calamari"] = {
    label = "Fresh Calamari",
    weight = 30,
    stack = true,
    close = true,
    description = "Its calamari",
    client = {
        image = "pizzathis_calamari.png",
    }
},

["pizzathis_garlic"] = {
    label = "Garlic",
    weight = 30,
    stack = true,
    close = true,
    description = "",
    client = {
        image = "pizzathis_garlic.png",
    }
},

["pizzathis_tomato"] = {
    label = "Tamato",
    weight = 30,
    stack = true,
    close = true,
    description = "Tomato",
    client = {
        image = "pizzathis_tomato.png",
    }
},

["pizzathis_zucchini"] = {
    label = "Chopped Zucchini",
    weight = 30,
    stack = true,
    close = true,
    description = "its chopped zucchini",
    client = {
        image = "pizzathis_zucchini.png",
    }
},

["pizzathis_aubergines"] = {
    label = "Eggplant",
    weight = 30,
    stack = true,
    close = true,
    description = "Its aubergines Aka eggplant",
    client = {
        image = "pizzathis_aubergines.png",
    }
},

["pizzathis_orange"] = {
    label = "orange",
    weight = 30,
    stack = true,
    close = true,
    description = "orange",
    client = {
        image = "pizzathis_orange.png",
    }
},

["pizzathis_squidrings"] = {
    label = "Squid Rings",
    weight = 30,
    stack = true,
    close = true,
    description = "Its Squid Rings",
    client = {
        image = "pizzathis_squidrings.png",
    }
},

["pizzathis_deliverybag"] = {
    label = "Pizza This Delivery Bag",
    weight = 500,
    stack = true,
    close = true,
    description = "Pizza This delivery bag",
    client = {
        image = "pizzathis_pizzathis_deliverybag.png",
    }
},

["pizzathis_vanillaextract"] = {
    label = "Vanilla Extract",
    weight = 30,
    stack = true,
    close = true,
    description = "",
    client = {
        image = "pizzathis_vanillaextract.png",
    }
},

["pizzathis_pasta"] = {
    label = "Pasta",
    weight = 30,
    stack = true,
    close = true,
    description = "its pasta",
    client = {
        image = "pizzathis_pasta.png",
    }
},

["pizzathis_cashews"] = {
    label = "Cashews",
    weight = 30,
    stack = true,
    close = true,
    description = "",
    client = {
        image = "pizzathis_cashews.png",
    }
},

["pizzathis_parmesan"] = {
    label = "parmesan",
    weight = 30,
    stack = true,
    close = true,
    description = "Nice parmesan cheese",
    client = {
        image = "pizzathis_parmesan.png",
    }
},

["pizzathis_milk"] = {
    label = "Milk",
    weight = 30,
    stack = true,
    close = true,
    description = "milk",
    client = {
        image = "pizzathis_milk.png",
    }
},

["pizzathis_meatballs"] = {
    label = "HomeMade Meatballs",
    weight = 30,
    stack = true,
    close = true,
    description = "Nice homemade meatballs",
    client = {
        image = "pizzathis_meatballs.png",
    }
},

["pizzathis_prosciutto"] = {
    label = "Prosciutto",
    weight = 30,
    stack = true,
    close = true,
    description = "Hmm nice juicy italian ham.",
    client = {
        image = "pizzathis_prosciutto.png",
    }
},

["pizzathis_basil"] = {
    label = "Basil",
    weight = 30,
    stack = true,
    close = true,
    description = "Its basil herb",
    client = {
        image = "pizzathis_basil.png",
    }
},

["pizzathis_apple"] = {
    label = "Apple",
    weight = 30,
    stack = true,
    close = true,
    description = "Apple",
    client = {
        image = "pizzathis_apple.png",
    }
},

["pizzathis_spicysalami"] = {
    label = "Spicy Salami",
    weight = 30,
    stack = true,
    close = true,
    description = "Its Spicy Salami",
    client = {
        image = "pizzathis_spicysalami.png",
    }
},

["pizzathis_butter"] = {
    label = "Butter",
    weight = 30,
    stack = true,
    close = true,
    description = "",
    client = {
        image = "pizzathis_butter.png",
    }
},

["pizzathis_soysauce"] = {
    label = "Soy Sauce",
    weight = 30,
    stack = true,
    close = true,
    description = "",
    client = {
        image = "pizzathis_soysauce.png",
    }
},

["pizzathis_chilli"] = {
    label = "chilli",
    weight = 20,
    stack = true,
    close = true,
    description = "its chilli",
    client = {
        image = "pizzathis_chilli.png",
    }
},

["pizzathis_oregano"] = {
    label = "Oregano",
    weight = 30,
    stack = true,
    close = true,
    description = "Its oregano herb",
    client = {
        image = "pizzathis_oregano.png",
    }
},

["pizzathis_mozzarella"] = {
    label = "Mozzarella",
    weight = 30,
    stack = true,
    close = true,
    description = "Its mozzarella cheese",
    client = {
        image = "pizzathis_mozzarella.png",
    }
},

["pizzathis_olives"] = {
    label = "Olives",
    weight = 30,
    stack = true,
    close = true,
    description = "its chopped up olives",
    client = {
        image = "pizzathis_olives.png",
    }
},

["pizzathis_roastedvegetables"] = {
    label = "Roasted Vegetables",
    weight = 30,
    stack = true,
    close = true,
    description = "Its Roasted Vegetables",
    client = {
        image = "pizzathis_roastedvegetables.png",
    }
},

["pizzathis_italianbelognese"] = {
    label = "Italian Belognese Sauce",
    weight = 30,
    stack = true,
    close = true,
    description = "Its Italian belognese sauce",
    client = {
        image = "pizzathis_italianbelognese.png",
    }
},`,
    textFourteen: 'FOR QBOX ONLY: Add these to your core\'s vehicle shared',
    codeFourteen: `
foodcar4 = {
    name = 'The Perfect Pizza Delivery Panto',
    brand = 'Panto',
    class = 'Compact',
    model = 'foodcar4',
    price = 1000, -- Adjust as needed
    category = 'pizza_delivery',
    hash = \`foodcar4\`,
},

foodcar5 = {
    name = 'The Perfect Pizza Delivery Car',
    brand = 'Generic',
    class = 'Sedan',
    model = 'foodcar5',
    price = 1200, -- Adjust as needed
    category = 'pizza_delivery',
    hash = \`foodcar5\`,
},

foodcar6 = {
    name = '1978 Gyoza Mark VII Lite Hauler pickup',
    brand = 'Gyoza',
    class = 'Pickup',
    model = 'foodcar6',
    price = 1500, -- Adjust as needed
    category = 'pizza_delivery',
    hash = \`foodcar6\`,
},

foodbike = {
    name = 'The Perfect Pizza Delivery Bike',
    brand = 'Faggio',
    class = 'Motorcycle',
    model = 'foodbike',
    price = 500, -- Adjust as needed
    category = 'pizza_delivery',
    hash = \`foodbike\`,
},`,
    textFifteen: 'FOR QBCORE ONLY: Add these to your core\'s vehicle shared',
    codeFifteen: `{ model = 'foodcar', name = 'Food Delivery Delivery Blista', brand = 'Dinka', price = 1000, category = 'pizza_delivery', type = 'automobile', shop = 'pdm' },
{ model = 'foodcar2', name = 'Food Delivery Delivery Blista Compact', brand = 'Dinka', price = 1000, category = 'pizza_delivery', type = 'automobile', shop = 'pdm' },
{ model = 'foodcar3', name = 'Food Delivery Blista Compact', brand = 'Panto', price = 1000, category = 'pizza_delivery', type = 'automobile', shop = 'pdm' },
{ model = 'foodcar4', name = 'Food Delivery Delivery Panto', brand = 'Panto', price = 1000, category = 'pizza_delivery', type = 'automobile', shop = 'pdm' },
{ model = 'foodcar5', name = 'Food Delivery Delivery Lokus', brand = 'Emperor', price = 1200, category = 'pizza_delivery', type = 'automobile', shop = 'pdm' },
{ model = 'foodcar6', name = 'Food Delivery 1978 Mark VII', brand = 'Rebel', price = 1500, category = 'pizza_delivery', type = 'automobile', shop = 'pdm' },
{ model = 'foodbike', name = 'Food Delivery Moped', brand = 'Faggio', price = 500, category = 'pizza_delivery', type = 'motorcycle', shop = 'pdm' },
{ model = 'foodbike2', name = 'Food Delivery Moped Classic', brand = 'Faggio', price = 1000, category = 'pizza_delivery', type = 'motorcycle', shop = 'pdm' },
`,
    textSixteen: undefined,
    codeSixteen: undefined,
    textSeventeen: undefined,
    codeSeventeen: undefined,
    textEighteen: undefined,
    codeEighteen: undefined,
    textNineteen: undefined,
    codeNineteen: undefined,
    textTwenty: undefined,
    codeTwenty: undefined,
    },
    upnatom: {
        title: 'Place all images into your inventory images folder',
        textOne: 'You need these to add the items into qb-core shared.lua',
        codeOne: `["upnatoms_bacon_eggs"] = {
    name = "upnatoms_bacon_eggs",
    label = "Up N Atoms Bacon n Eggs",
    weight = 250,
    type = "item",
    image = "upnatoms_bacon_eggs.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Cooked Bacon n Eggs with Toast"
},
["upnatoms_bacon_rolls"] = {
    name = "upnatoms_bacon_rolls",
    label = "Up N Atoms Bacon Rolls",
    weight = 250,
    type = "item",
    image = "upnatoms_bacon_rolls.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Cooked Bacon Rolls"
},
["upnatoms_eggs_benedict"] = {
    name = "upnatoms_eggs_benedict",
    label = "Up N Atoms Egg Benedict",
    weight = 250,
    type = "item",
    image = "upnatoms_eggs_benedict.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Cooked Eggs Benedict"
},
["upnatoms_eggs_florentine"] = {
    name = "upnatoms_eggs_florentine",
    label = "Up N Atoms Egg Florentine",
    weight = 250,
    type = "item",
    image = "upnatoms_eggs_florentine.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Cooked Eggs Florentine"
},
["upnatoms_french_toast_bacon"] = {
    name = "upnatoms_french_toast_bacon",
    label = "Up N Atoms French Toast & Bacon",
    weight = 250,
    type = "item",
    image = "upnatoms_french_toast_bacon.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Cooked French Toast With Bacon"
},
["upnatoms_french_toast"] = {
    name = "upnatoms_french_toast",
    label = "Up N Atoms French Toast",
    weight = 250,
    type = "item",
    image = "upnatoms_french_toast.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Cooked French Toast"
},
["upnatoms_hashbrown"] = {
    name = "upnatoms_hashbrown",
    label = "Up N Atoms Hashbrowns",
    weight = 250,
    type = "item",
    image = "upnatoms_hashbrown.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Cooked Hashbrowns"
},
["upnatoms_sausages"] = {
    name = "upnatoms_sausages",
    label = "Up N Atoms Sausages",
    weight = 250,
    type = "item",
    image = "upnatoms_sausages.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Cooked Sausages"
},
["upnatoms_bacon_burger"] = {
    name = "upnatoms_bacon_burger",
    label = "Up N Atoms Bacon Burger",
    weight = 250,
    type = "item",
    image = "upnatoms_bacon_burger.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Grilled Bacon Burger"
},
["upnatoms_burger"] = {
    name = "upnatoms_burger",
    label = "Up N Atoms Cheese Burger",
    weight = 250,
    type = "item",
    image = "upnatoms_burger.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Grilled Classic Cheese Burger"
},
["upnatoms_chicken_burger"] = {
    name = "upnatoms_chicken_burger",
    label = "Up N Atoms Chicken Burger",
    weight = 250,
    type = "item",
    image = "upnatoms_chicken_burger.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Grilled Chicken Burger"
},
["upnatoms_db_burger"] = {
    name = "upnatoms_db_burger",
    label = "Up N Atoms Double Cheese Burger",
    weight = 250,
    type = "item",
    image = "upnatoms_db_burger.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Grilled Double Cheese Burger"
},
["upnatoms_db_chicken_burger"] = {
    name = "upnatoms_db_chicken_burger",
    label = "Up N Atoms Double Chicken Burger",
    weight = 250,
    type = "item",
    image = "upnatoms_db_chicken_burger.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Grilled Double Chicken Burger"
},
["upnatoms_pickle_burger"] = {
    name = "upnatoms_pickle_burger",
    label = "Up N Atoms Pickle Burger",
    weight = 250,
    type = "item",
    image = "upnatoms_pickle_burger.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Grilled Pickle Burger"
},
["upnatoms_sandwich"] = {
    name = "upnatoms_sandwich",
    label = "Up N Atoms Ham Sandwich",
    weight = 250,
    type = "item",
    image = "upnatoms_sandwich.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Classic Ham Sandwich"
},
["upnatoms_chicken_fillets"] = {
    name = "upnatoms_chicken_fillets",
    label = "Up N Atoms Chicken Fillets",
    weight = 250,
    type = "item",
    image = "upnatoms_chicken_fillets.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Chicken Fillets"
},
["upnatoms_chicken_salad"] = {
    name = "upnatoms_chicken_salad",
    label = "Up N Atoms Chicken Salad",
    weight = 250,
    type = "item",
    image = "upnatoms_chicken_salad.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Chicken Salad"
},
["upnatoms_chicken_sandwich"] = {
    name = "upnatoms_chicken_sandwich",
    label = "Up N Atoms Chicken Sandwich",
    weight = 250,
    type = "item",
    image = "upnatoms_chicken_sandwich.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Classic Chicken Sandwich"
},
["upnatoms_chicken_stars"] = {
    name = "upnatoms_chicken_stars",
    label = "Up N Atoms Chicken Stars",
    weight = 250,
    type = "item",
    image = "upnatoms_chicken_stars.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Chicken Nuggets In The Shape Of A Star"
},
["upnatoms_grilled_chicken"] = {
    name = "upnatoms_grilled_chicken",
    label = "Up N Atoms Grilled Chicken",
    weight = 250,
    type = "item",
    image = "upnatoms_grilled_chicken.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Grilled Chicken Fillets"
},
["upnatoms_hunk_o_hen"] = {
    name = "upnatoms_hunk_o_hen",
    label = "Up N Atoms Hunks O Hen",
    weight = 250,
    type = "item",
    image = "upnatoms_hunk_o_hen.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Chicken Chunks"
},
["upnatoms_ecola"] = {
    name = "upnatoms_ecola",
    label = "Up N Atoms Ecola",
    weight = 250,
    type = "item",
    image = "upnatoms_ecola.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Ecola!"
},
["upnatoms_hercules"] = {
    name = "upnatoms_hercules",
    label = "Up N Atoms Hercules",
    weight = 250,
    type = "item",
    image = "upnatoms_hercules.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Hercules!"
},
["upnatoms_junk"] = {
    name = "upnatoms_junk",
    label = "Up N Atoms Junk Energy!",
    weight = 250,
    type = "item",
    image = "upnatoms_junk.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Junk Energy!!!"
},
["upnatoms_orangtang"] = {
    name = "upnatoms_orangtang",
    label = "Up N Atoms Orang O Tang",
    weight = 250,
    type = "item",
    image = "upnatoms_orangtang.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "OrangTang!"
},
["upnatoms_raine"] = {
    name = "upnatoms_raine",
    label = "Up N Atoms Raine Water",
    weight = 250,
    type = "item",
    image = "upnatoms_raine.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Ice Cold Water Bottle"
},
["upnatoms_sprunk"] = {
    name = "upnatoms_sprunk",
    label = "Up N Atoms Sprunk",
    weight = 250,
    type = "item",
    image = "upnatoms_sprunk.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Spunk!"
},
["upnatoms_water"] = {
    name = "upnatoms_water",
    label = "Up N Atoms Water Bottle",
    weight = 250,
    type = "item",
    image = "upnatoms_water.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Ice Cold Water Bottle"
},
["upnatoms_bacon"] = {
    name = "upnatoms_bacon",
    label = "Up N Atoms Cooked Bacon",
    weight = 250,
    type = "item",
    image = "upnatoms_bacon.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Ingredient!"
},
["upnatoms_beef_patty"] = {
    name = "upnatoms_beef_patty",
    label = "Up N Atoms Cooked Beef Patty",
    weight = 250,
    type = "item",
    image = "upnatoms_beef_patty.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Ingredient!"
},
["upnatoms_bread"] = {
    name = "upnatoms_bread",
    label = "Up N Atoms Fresh Bread",
    weight = 250,
    type = "item",
    image = "upnatoms_bread.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Ingredient!"
},
["upnatoms_bun"] = {
    name = "upnatoms_bun",
    label = "Up N Atoms Fresh Bun",
    weight = 250,
    type = "item",
    image = "upnatoms_bun.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Ingredient!"
},
["upnatoms_cheddar_cheese_slices"] = {
    name = "upnatoms_cheddar_cheese_slices",
    label = "Up N Atoms Fresh Cheddar Cheese",
    weight = 250,
    type = "item",
    image = "upnatoms_cheddar_cheese_slices.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Ingredient!"
},
["upnatoms_chicken_patty"] = {
    name = "upnatoms_chicken_patty",
    label = "Up N Atoms Cooked Chicken Patty",
    weight = 250,
    type = "item",
    image = "upnatoms_chicken_patty.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Ingredient!"
},
["upnatoms_chicken_slices"] = {
    name = "upnatoms_chicken_slices",
    label = "Up N Atoms Fresh Chicken Slices",
    weight = 250,
    type = "item",
    image = "upnatoms_chicken_slices.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Ingredient!"
},
["upnatoms_chicken"] = {
    name = "upnatoms_chicken",
    label = "Up N Atoms Cooked Chicken",
    weight = 250,
    type = "item",
    image = "upnatoms_chicken.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Ingredient!"
},
["upnatoms_eggs"] = {
    name = "upnatoms_eggs",
    label = "Up N Atoms Fresh Eggs",
    weight = 250,
    type = "item",
    image = "upnatoms_eggs.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Ingredient!"
},
["upnatoms_english_muffin"] = {
    name = "upnatoms_english_muffin",
    label = "Up N Atoms English Muffin",
    weight = 250,
    type = "item",
    image = "upnatoms_english_muffin.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Ingredient!"
},
["upnatoms_frozen_sausages"] = {
    name = "upnatoms_frozen_sausages",
    label = "Up N Atoms Frozen Sausages",
    weight = 250,
    type = "item",
    image = "upnatoms_frozen_sausages.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Ingredient!"
},
["upnatoms_ham_slices"] = {
    name = "upnatoms_ham_slices",
    label = "Up N Atoms Fresh Ham Slices",
    weight = 250,
    type = "item",
    image = "upnatoms_ham_slices.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Ingredient!"
},
["upnatoms_lettuce"] = {
    name = "upnatoms_lettuce",
    label = "Up N Atoms Fresh Lettuce",
    weight = 250,
    type = "item",
    image = "upnatoms_lettuce.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Ingredient!"
},
["upnatoms_mozzarella_cheese_slices"] = {
    name = "upnatoms_mozzarella_cheese_slices",
    label = "Up N Atoms Fresh Mozzarella Cheese",
    weight = 250,
    type = "item",
    image = "upnatoms_mozzarella_cheese_slices.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Ingredient!"
},
["upnatoms_pickles"] = {
    name = "upnatoms_pickles",
    label = "Up N Atoms Fresh Pickles",
    weight = 250,
    type = "item",
    image = "upnatoms_pickles.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Ingredient!"
},
["upnatoms_potatos"] = {
    name = "upnatoms_potatos",
    label = "Up N Atoms Fresh Potatos",
    weight = 250,
    type = "item",
    image = "upnatoms_potatos.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Ingredient!"
},
["upnatoms_raw_bacon"] = {
    name = "upnatoms_raw_bacon",
    label = "Up N Atoms Frozen Bacon",
    weight = 250,
    type = "item",
    image = "upnatoms_raw_bacon.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Ingredient!"
},
["upnatoms_raw_beef_patty"] = {
    name = "upnatoms_raw_beef_patty",
    label = "Up N Atoms Frozen Beef Patty",
    weight = 250,
    type = "item",
    image = "upnatoms_raw_beef_patty.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Ingredient!"
},
["upnatoms_raw_chicken_patty"] = {
    name = "upnatoms_raw_chicken_patty",
    label = "Up N Atoms Frozen Chicken Patty",
    weight = 250,
    type = "item",
    image = "upnatoms_raw_chicken_patty.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Ingredient!"
},
["upnatoms_raw_chicken"] = {
    name = "upnatoms_raw_chicken",
    label = "Up N Atoms Frozen Chicken",
    weight = 250,
    type = "item",
    image = "upnatoms_raw_chicken.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Ingredient!"
},
["upnatoms_spinach"] = {
    name = "upnatoms_spinach",
    label = "Up N Atoms Fresh Spinach",
    weight = 250,
    type = "item",
    image = "upnatoms_spinach.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Ingredient!"
},
["upnatoms_tomato"] = {
    name = "upnatoms_tomato",
    label = "Up N Atoms Fresh Tomato",
    weight = 250,
    type = "item",
    image = "upnatoms_tomato.png",
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = "Ingredient!"
},
["upnatoms_bacon_burger_meal"] = {
    name = "upnatoms_bacon_burger_meal",
    label = "Up N Atoms Bacon Burger Meal",
    weight = 300,
    type = "item",
    image = "upnatoms_bacon_burger_meal.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Contains A Bacon Burger, Hashbrown and a Drink"
},
["upnatoms_burger_meal"] = {
    name = "upnatoms_burger_meal",
    label = "Up N Atoms Burger Meal",
    weight = 300,
    type = "item",
    image = "upnatoms_burger_meal.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Contains A Classic Burger, Hashbrown and a Drink"
},
["upnatoms_chicken_burger_meal"] = {
    name = "upnatoms_chicken_burger_meal",
    label = "Up N Atoms Chicken Burger Meal",
    weight = 300,
    type = "item",
    image = "upnatoms_chicken_burger_meal.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Contains A Classic Chicken Burger, Hashbrown and a Drink"
},
["upnatoms_db_burger_meal"] = {
    name = "upnatoms_db_burger_meal",
    label = "Up N Atoms Double Burger Meal",
    weight = 450,
    type = "item",
    image = "upnatoms_db_burger_meal.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Contains A Double Burger, Hashbrown and a Drink"
},
["upnatoms_db_chicken_burger_meal"] = {
    name = "upnatoms_db_chicken_burger_meal",
    label = "Up N Atoms Double Chicken Burger Meal",
    weight = 450,
    type = "item",
    image = "upnatoms_db_chicken_burger_meal.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Contains A Double Chicken Burger, Hashbrown and a Drink"
},
["upnatoms_pickle_burger_meal"] = {
    name = "upnatoms_pickle_burger_meal",
    label = "Up N Atoms Pickle Burger Meal",
    weight = 300,
    type = "item",
    image = "upnatoms_pickle_burger_meal.png",
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = "Contains A Pickle Burger, Hashbrown and a Drink"
},
['upnatoms_pallet'] = {
    name = 'upnatoms_pallet',
    label = 'Pallet of Ingredients',
    weight = 10000,
    type = 'item',
    image = 'upnatoms_pallet.png',
    unique = true,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A pallet loaded with fresh ingredients.'
},
['upnatoms_ticket'] = {
    name = 'upnatoms_ticket',
    label = 'Receipt',
    weight = 150,
    type = 'item',
    image = 'upnatoms_ticket.png',
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = 'An order ticket detailing the delicious meal awaiting preparation.'
},
['upnatoms_bag'] = {
    name = 'upnatoms_bag',
    label = 'Up N Atoms Delivery Bag',
    weight = 500,
    type = 'item',
    image = 'upnatoms_bag.png',
    unique = false,
    useable = false,
    shouldClose = true,
    combinable = nil,
    description = 'A delivery bag ensuring your order reaches you hot and fresh.'
},`,
        textTwo: 'Now add this to the qb-core/shared/job.lua',
        codeTwo: `
['upnatoms'] = {
  label = 'Up-N-Atoms Employee',
  defaultDuty = true,
  offDutyPay = true,
  grades = {
    ['0'] = {name = 'New Hire', payment = 500},
    ['1'] = {name = 'Crew Member', payment = 600},
    ['2'] = {name = 'Shift Manager', payment = 700},
    ['3'] = {name = 'Manager', payment = 800},
    ['4'] = {name = 'Owner', isboss = true, payment = 1000}
  }
},`,
        textThree: 'You need add these to ConsumableEat in qb-smallresources/config.lua',
        codeThree: `["upnatoms_bacon-eggs"] = math.random(80, 100),
["upnatoms_bacon_rolls"] = math.random(50, 75),
["upnatoms_eggs_benedict"] = math.random(80, 100),
["upnatoms_eggs_florentine"] = math.random(80, 100),
["upnatoms_french_toast_bacon"] = math.random(80, 100),
["upnatoms_hashbrown"] = math.random(50, 75),
["upnatoms_sausages"] = math.random(50, 75),
["upnatoms_bacon_burger"] = math.random(60, 90),
["upnatoms_burger"] = math.random(60, 90),
["upnatoms_chicken_burger"] = math.random(60, 90),
["upnatoms_db_burger"] = math.random(60, 90),
["upnatoms_db_chicken_burger"] = math.random(60, 90),
["upnatoms_pickle_burger"] = math.random(60, 90),
["upnatoms_sandwich"] = math.random(60, 90),
["upnatoms_chicken_fillets"] = math.random(80, 100),
["upnatoms_chicken_salad"] = math.random(45, 70),
["upnatoms_chicken_sandwich"] = math.random(60, 90),
["upnatoms_chicken_stars"] = math.random(55, 80),
["upnatoms_grilled_chicken"] = math.random(80, 100),
["upnatoms_hunk_o_hen"] = math.random(80, 100),`,
        textFour: 'You need add these to ConsumableDrink in qb-smallresources/config.lua',
        codeFour: `["upnatoms_ecola"] = math.random(75, 100),
["upnatoms_hercules"] = math.random(75, 100),
["upnatoms_junk"] = math.random(75, 100),
["upnatoms_orangtang"] = math.random(75, 100),
["upnatoms_raine"] = math.random(75, 100),
["upnatoms_sprunk"] = math.random(75, 100),
["upnatoms_water"] = math.random(75, 100),`,
        textFive: 'Now add the following code to qb-smallresources/client/consumables.lua',
        codeFive: `RegisterNetEvent('qb-upnatoms:client:EatPlate', function(itemName)
  TriggerEvent('animations:client:EmoteCommandStart', {"dinner"})
  QBCore.Functions.Progressbar("eat_something", "Eating Dinner Plate", 5000, false, false, {
      disableMovement = false,
      disableCarMovement = false,
      disableMouse = false,
      disableCombat = true,
  }, {}, {}, {}, function()
      TriggerEvent("inventory:client:ItemBox", QBCore.Shared.Items[itemName], "remove")
      TriggerEvent('animations:client:EmoteCommandStart', {"c"})
      TriggerServerEvent("consumables:server:addHunger", QBCore.Functions.GetPlayerData().metadata["hunger"] + Config.ConsumablesEat[itemName])
  end)
end)
RegisterNetEvent('qb-upnatoms:client:EatBurger', function(itemName)
  TriggerEvent('animations:client:EmoteCommandStart', {"eat"})
  QBCore.Functions.Progressbar("eat_something", "Eating Burger", 3000, false, false, {
      disableMovement = false,
      disableCarMovement = false,
      disableMouse = false,
      disableCombat = true,
  }, {}, {}, {}, function()
      TriggerEvent("inventory:client:ItemBox", QBCore.Shared.Items[itemName], "remove")
      TriggerEvent('animations:client:EmoteCommandStart', {"c"})
      TriggerServerEvent("consumables:server:addHunger", QBCore.Functions.GetPlayerData().metadata["hunger"] + Config.ConsumablesEat[itemName])
  end)
end)
RegisterNetEvent('qb-upnatoms:client:EatSandwich', function(itemName)
  TriggerEvent('animations:client:EmoteCommandStart', {"sandwich"})
  QBCore.Functions.Progressbar("eat_something", "Eating Sandwich", 3000, false, false, {
      disableMovement = false,
      disableCarMovement = false,
      disableMouse = false,
      disableCombat = true,
  }, {}, {}, {}, function()
      TriggerEvent("inventory:client:ItemBox", QBCore.Shared.Items[itemName], "remove")
      TriggerEvent('animations:client:EmoteCommandStart', {"c"})
      TriggerServerEvent("consumables:server:addHunger", QBCore.Functions.GetPlayerData().metadata["hunger"] + Config.ConsumablesEat[itemName])
  end)
end)
RegisterNetEvent('qb-upnatoms:client:Eat', function(itemName)
  TriggerEvent('animations:client:EmoteCommandStart', {"eat"})
  QBCore.Functions.Progressbar("eat_something", "Eating", 3000, false, false, {
      disableMovement = false,
      disableCarMovement = false,
      disableMouse = false,
      disableCombat = true,
  }, {}, {}, {}, function()
      TriggerEvent("inventory:client:ItemBox", QBCore.Shared.Items[itemName], "remove")
      TriggerEvent('animations:client:EmoteCommandStart', {"c"})
      TriggerServerEvent("consumables:server:addHunger", QBCore.Functions.GetPlayerData().metadata["hunger"] + Config.ConsumablesEat[itemName])
  end)
end)
RegisterNetEvent('qb-upnatoms:client:DrinkEcola', function(itemName)
  TriggerEvent('animations:client:EmoteCommandStart', {"soda"})
  QBCore.Functions.Progressbar("drink_something", "Drinking Ecola", 2000, false, true, {
      disableMovement = false,
      disableCarMovement = false,
      disableMouse = false,
      disableCombat = true,
  }, {}, {}, {}, function()
      TriggerEvent("inventory:client:ItemBox", QBCore.Shared.Items[itemName], "remove")
      TriggerEvent('animations:client:EmoteCommandStart', {"c"})
      TriggerServerEvent("consumables:server:addThirst", QBCore.Functions.GetPlayerData().metadata["thirst"] + Config.ConsumablesDrink[itemName])
  end)
end)
RegisterNetEvent('qb-upnatoms:client:DrinkSprunk', function(itemName)
  TriggerEvent('animations:client:EmoteCommandStart', {"soda2"})
  QBCore.Functions.Progressbar("drink_something", "Drinking Sprunk", 2000, false, true, {
      disableMovement = false,
      disableCarMovement = false,
      disableMouse = false,
      disableCombat = true,
  }, {}, {}, {}, function()
      TriggerEvent("inventory:client:ItemBox", QBCore.Shared.Items[itemName], "remove")
      TriggerEvent('animations:client:EmoteCommandStart', {"c"})
      TriggerServerEvent("consumables:server:addThirst", QBCore.Functions.GetPlayerData().metadata["thirst"] + Config.ConsumablesDrink[itemName])
  end)
end)
RegisterNetEvent('qb-upnatoms:client:DrinkOrangTang', function(itemName)
  TriggerEvent('animations:client:EmoteCommandStart', {"soda9"})
  QBCore.Functions.Progressbar("drink_something", "Drinking Orang Tang", 2000, false, true, {
      disableMovement = false,
      disableCarMovement = false,
      disableMouse = false,
      disableCombat = true,
  }, {}, {}, {}, function()
      TriggerEvent("inventory:client:ItemBox", QBCore.Shared.Items[itemName], "remove")
      TriggerEvent('animations:client:EmoteCommandStart', {"c"})
      TriggerServerEvent("consumables:server:addThirst", QBCore.Functions.GetPlayerData().metadata["thirst"] + Config.ConsumablesDrink[itemName])
  end)
end)
RegisterNetEvent('qb-upnatoms:client:DrinkWater', function(itemName)
  TriggerEvent('animations:client:EmoteCommandStart', {"drink"})
  QBCore.Functions.Progressbar("drink_something", "Drinking Water", 2000, false, true, {
      disableMovement = false,
      disableCarMovement = false,
      disableMouse = false,
      disableCombat = true,
  }, {}, {}, {}, function()
      TriggerEvent("inventory:client:ItemBox", QBCore.Shared.Items[itemName], "remove")
      TriggerEvent('animations:client:EmoteCommandStart', {"c"})
      TriggerServerEvent("consumables:server:addThirst", QBCore.Functions.GetPlayerData().metadata["thirst"] + Config.ConsumablesDrink[itemName])
  end)
end)
RegisterNetEvent('qb-upnatoms:client:DrinkWater2', function(itemName)
  TriggerEvent('animations:client:EmoteCommandStart', {"water"})
  QBCore.Functions.Progressbar("drink_something", "Drinking Raine", 2000, false, true, {
      disableMovement = false,
      disableCarMovement = false,
      disableMouse = false,
      disableCombat = true,
  }, {}, {}, {}, function()
      TriggerEvent("inventory:client:ItemBox", QBCore.Shared.Items[itemName], "remove")
      TriggerEvent('animations:client:EmoteCommandStart', {"c"})
      TriggerServerEvent("consumables:server:addThirst", QBCore.Functions.GetPlayerData().metadata["thirst"] + Config.ConsumablesDrink[itemName])
  end)
end)
RegisterNetEvent('qb-upnatoms:client:DrinkJunk', function(itemName)
  TriggerEvent('animations:client:EmoteCommandStart', {"edrink2"})
  QBCore.Functions.Progressbar("drink_something", "Drinking Junk", 2000, false, true, {
      disableMovement = false,
      disableCarMovement = false,
      disableMouse = false,
      disableCombat = true,
  }, {}, {}, {}, function()
      TriggerEvent("inventory:client:ItemBox", QBCore.Shared.Items[itemName], "remove")
      TriggerEvent('animations:client:EmoteCommandStart', {"c"})
      TriggerServerEvent("consumables:server:addThirst", QBCore.Functions.GetPlayerData().metadata["thirst"] + Config.ConsumablesDrink[itemName])
  end)
end)
RegisterNetEvent('qb-upnatoms:client:DrinkHercules', function(itemName)
  TriggerEvent('animations:client:EmoteCommandStart', {"drink"})
  QBCore.Functions.Progressbar("drink_something", "Drinking Hercules", 2000, false, true, {
      disableMovement = false,
      disableCarMovement = false,
      disableMouse = false,
      disableCombat = true,
  }, {}, {}, {}, function()
      TriggerEvent("inventory:client:ItemBox", QBCore.Shared.Items[itemName], "remove")
      TriggerEvent('animations:client:EmoteCommandStart', {"c"})
      TriggerServerEvent("consumables:server:addThirst", QBCore.Functions.GetPlayerData().metadata["thirst"] + Config.ConsumablesDrink[itemName])
  end)
end)`,
        textSix: 'You need add this in qb-management/client/cl_config.lua under Config.BossMenus  and you also have to add the job to the qb-management database table.',
        codeSix: `['upnatoms'] = {
  vector3(81.37, 296.46, 110.25),
},`,
        textSeven: 'You need add this in qb-management/client/cl_config.lua under Config.BossMenuszone',
        codeSeven: `['upnatoms'] = {
  { coords = vector3(81.09, 297.31, 109.99), length = 0.35, width = 0.45, heading = 340.0, minZ = 109.96, maxZ = 111.01 },
},`,
        textEight: undefined,
        codeEight: undefined,
        textNine: undefined,
        codeNine: undefined,
        textTen: undefined,
        codeTen: undefined,
        textEleven: undefined,
        codeEleven: undefined,
        textTwelve: undefined,
        codeTwelve: undefined,
        textThirteen: undefined,
        codeThirteen: undefined,
        textFourteen: undefined,
        codeFourteen: undefined,
        textFifteen: undefined,
        codeFifteen: undefined,
        textSixteen: undefined,
        codeSixteen: undefined,
        textSeventeen: undefined,
        codeSeventeen: undefined,
        textEighteen: undefined,
        codeEighteen: undefined,
        textNineteen: undefined,
        codeNineteen: undefined,
        textTwenty: undefined,
        codeTwenty: undefined,
    },
    uwu: {
        title: 'Place all images into qb-inventory images folder',
        textOne: 'You need these to add the items into qb-core shared.lua',
        codeOne: `['uwububbleteablueberry'] = {
    name = 'uwububbleteablueberry',
    label = 'uWu Berry Blue B_T',
    weight = 200,
    type = 'item',
    image = 'uwububbleteablueberry.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Lavender Tea with Blueberry Boba.'
},
['uwububbletearose'] = {
    name = 'uwububbletearose',
    label = 'uWu Rosey B_T',
    weight = 200,
    type = 'item',
    image = 'uwububbletearose.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Sakura Rose Tea with Vanilla Boba.'
},
['uwububbleteamint'] = {
    name = 'uwububbleteamint',
    label = 'uWu Minty B_T',
    weight = 200,
    type = 'item',
    image = 'uwububbleteamint.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Matcha Tea with Mint Boba.'
},
['uwupancake'] = {
    name = 'uwupancake',
    label = 'uWu Savory Pancake',
    weight = 200,
    type = 'item',
    image = 'uwupancake.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Korean savory pancake made with scallions.'
},
['uwucupcake'] = {
    name = 'uwucupcake',
    label = 'uWu Cupcake',
    weight = 200,
    type = 'item',
    image = 'uwucupcake.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Sugar Kitty Cupcake!'
},
['uwuvanillasandy'] = {
    name = 'uwuvanillasandy',
    label = 'uWu Vanilla Marshmallows Sandy',
    weight = 200,
    type = 'item',
    image = 'uwuvanillasandy.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Sweet Vanilla Biscuit with kitty marshmallows!'
},
['uwuchocsandy'] = {
    name = 'uwuchocsandy',
    label = 'uWu Chocolate Marshmallows Sandy',
    weight = 200,
    type = 'item',
    image = 'uwuchocsandy.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Sweet Chocolate Biscuit with kitty marshmallows!'
},
['uwupancakebatter'] = {
    name = 'uwupancakebatter',
    label = 'uWu Savory Pancake batter',
    weight = 200,
    type = 'item',
    image = 'uwubatter.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Korean savory pancake made with scallions Batter.'
},
['uwucupcakebatter'] = {
    name = 'uwucupcakebatter',
    label = 'uWu Cupcake batter',
    weight = 200,
    type = 'item',
    image = 'uwubatter.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Sugar Kitty Cupcake Batter!'
},
['uwuvanillasandybatter'] = {
    name = 'uwuvanillasandybatter',
    label = 'uWu Vanilla Marshmallows Sandy batter',
    weight = 200,
    type = 'item',
    image = 'uwubatter.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Sweet Vanilla Biscuit with kitty marshmallows batter!'
},
['uwuchocsandybatter'] = {
    name = 'uwuchocsandybatter',
    label = 'uWu Chocolate Marshmallows Sandy batter',
    weight = 200,
    type = 'item',
    image = 'uwubatter.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Sweet Chocolate Biscuit with kitty marshmallows batter!'
},
['uwubudhabowl'] = {
    name = 'uwubudhabowl',
    label = 'uWu Buddha Bowl',
    weight = 200,
    type = 'item',
    image = 'uwubudhabowl.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Bowl of nourishment and balance.'
},
['uwusushi'] = {
    name = 'uwusushi',
    label = 'uWu Sushi',
    weight = 200,
    type = 'item',
    image = 'uwusushi.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Designed as a window to your soul.'
},
['uwumisosoup'] = {
    name = 'uwumisosoup',
    label = 'uWu Miso Soup',
    weight = 200,
    type = 'item',
    image = 'uwumisosoup.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Fungus never tasted so good!'
},
['uwubentobox'] = {
    name = 'uwubentobox',
    label = 'uWu Bento Box',
    weight = 200,
    type = 'item',
    image = 'uwubentobox.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'An uWu Selection with a surprise!'
},
['uwu_flour'] = {
    name = 'uwu_flour',
    label = 'Flour',
    weight = 200,
    type = 'item',
    image = 'uwu_flour.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Flour for baking.'
},
['uwu_butter'] = {
    name = 'uwu_butter',
    label = 'Butter',
    weight = 200,
    type = 'item',
    image = 'uwu_butter.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'I can\'t believe its not butter!'
},
['uwu_sugar'] = {
    name = 'uwu_sugar',
    label = 'Sugar',
    weight = 200,
    type = 'item',
    image = 'uwu_sugar.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Sugar for sweetening.'
},
['uwu_egg'] = {
    name = 'uwu_egg',
    label = 'Eggs',
    weight = 200,
    type = 'item',
    image = 'uwu_egg.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Fresh eggs for cooking and baking.'
},
['uwu_vanillaextract'] = {
    name = 'uwu_vanillaextract',
    label = 'Vanilla Extract',
    weight = 200,
    type = 'item',
    image = 'uwu_vanillaextract.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Vanilla extract for flavoring.'
},
['uwu_bakingpowder'] = {
    name = 'uwu_bakingpowder',
    label = 'Baking Powder',
    weight = 200,
    type = 'item',
    image = 'uwu_bakingpowder.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Baking powder for rising your bakes.'
},
['uwu_cocoapowder'] = {
    name = 'uwu_cocoapowder',
    label = 'Cocoa Powder',
    weight = 200,
    type = 'item',
    image = 'uwu_cocoapowder.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Cocoa powder for chocolatey goodness.'
},
['uwu_milk'] = {
    name = 'uwu_milk',
    label = 'Milk',
    weight = 200,
    type = 'item',
    image = 'uwu_milk.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Milk for your cooking and baking needs.'
},
['uwu_matchapowder'] = {
    name = 'uwu_matchapowder',
    label = 'Matcha Powder',
    weight = 200,
    type = 'item',
    image = 'uwu_matchapowder.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Matcha powder for that green tea flavor.'
},
['uwu_kittymarshmallows'] = {
    name = 'uwu_kittymarshmallows',
    label = 'Uwu Kitty Marshmallows',
    weight = 200,
    type = 'item',
    image = 'uwu_kittymarshmallows.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Uwu Kitty Marshmallows for a cute touch.'
},
['uwu_dashigranules'] = {
    name = 'uwu_dashigranules',
    label = 'Dashi Granules',
    weight = 200,
    type = 'item',
    image = 'uwu_dashigranules.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Dashi granules for that umami flavor.'
},
['uwu_misopaste'] = {
    name = 'uwu_misopaste',
    label = 'Miso Paste',
    weight = 200,
    type = 'item',
    image = 'uwu_misopaste.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Miso paste for soups and marinades.'
},
['uwu_dicedsilkentofu'] = {
    name = 'uwu_dicedsilkentofu',
    label = 'Diced Silken Tofu',
    weight = 200,
    type = 'item',
    image = 'uwu_dicedsilkentofu.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Diced silken tofu for soft and silky texture in dishes.'
},
['uwu_onions'] = {
    name = 'uwu_onions',
    label = 'Onions',
    weight = 200,
    type = 'item',
    image = 'uwu_onions.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Fresh onions for cooking.'
},
['uwu_whipcream'] = {
    name = 'uwu_whipcream',
    label = 'Whip Cream',
    weight = 200,
    type = 'item',
    image = 'uwu_whipcream.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Whip cream for desserts and beverages.'
},
['uwu_blueberrylavendertea'] = {
    name = 'uwu_blueberrylavendertea',
    label = 'Blueberry Lavender Tea',
    weight = 200,
    type = 'item',
    image = 'uwu_blueberrylavendertea.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Blueberry lavender tea for a relaxing beverage.'
},
['uwu_heavycream'] = {
    name = 'uwu_heavycream',
    label = 'Heavy Cream',
    weight = 200,
    type = 'item',
    image = 'uwu_heavycream.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Heavy cream for rich and creamy recipes.'
},
['uwu_tapiocapearls'] = {
    name = 'uwu_tapiocapearls',
    label = 'Tapioca Pearls',
    weight = 200,
    type = 'item',
    image = 'uwu_tapiocapearls.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Tapioca pearls for bubble tea and desserts.'
},
['uwu_sakurarosetea'] = {
    name = 'uwu_sakurarosetea',
    label = 'Sakura Rose Tea',
    weight = 200,
    type = 'item',
    image = 'uwu_sakurarosetea.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Sakura rose tea for a floral and aromatic drink.'
},
['uwu_scallions'] = {
    name = 'uwu_scallions',
    label = 'Scallions',
    weight = 200,
    type = 'item',
    image = 'uwu_scallions.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Scallions for adding a mild onion flavor to dishes.'
},
['uwu_salt'] = {
    name = 'uwu_salt',
    label = 'Salt',
    weight = 200,
    type = 'item',
    image = 'uwu_salt.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Salt for seasoning and enhancing the flavor of food.'
},
['uwu_soysauce'] = {
    name = 'uwu_soysauce',
    label = 'Soy Sauce',
    weight = 200,
    type = 'item',
    image = 'uwu_soysauce.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Soy sauce for a rich, savory taste in dishes.'
},
['uwu_whiterice'] = {
    name = 'uwu_whiterice',
    label = 'White Rice',
    weight = 200,
    type = 'item',
    image = 'uwu_whiterice.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'White rice, a staple food for many meals.'
},
['uwu_vinegar'] = {
    name = 'uwu_vinegar',
    label = 'Vinegar',
    weight = 200,
    type = 'item',
    image = 'uwu_vinegar.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Vinegar for cooking, pickling, and dressing salads.'
},
['uwu_seaweed'] = {
    name = 'uwu_seaweed',
    label = 'Seaweed',
    weight = 200,
    type = 'item',
    image = 'uwu_seaweed.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Seaweed for sushi, soups, and salads.'
},
['uwu_crabmeat'] = {
    name = 'uwu_crabmeat',
    label = 'Crabmeat',
    weight = 200,
    type = 'item',
    image = 'uwu_crabmeat.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Fresh crab meat for sushi, salads, and dishes.'
},
['uwu_broccoli'] = {
    name = 'uwu_broccoli',
    label = 'Broccoli',
    weight = 200,
    type = 'item',
    image = 'uwu_broccoli.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Fresh broccoli for healthy and delicious meals.'
},
['uwu_cauliflower'] = {
    name = 'uwu_cauliflower',
    label = 'Cauliflower',
    weight = 200,
    type = 'item',
    image = 'uwu_cauliflower.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Fresh cauliflower for a variety of dishes.'
},
['uwu_chickpeas'] = {
    name = 'uwu_chickpeas',
    label = 'Chickpeas',
    weight = 200,
    type = 'item',
    image = 'uwu_chickpeas.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Fresh chickpeas for salads, hummus, and more.'
},
['uwu_cashews'] = {
    name = 'uwu_cashews',
    label = 'Cashews',
    weight = 200,
    type = 'item',
    image = 'uwu_cashews.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Cashews for snacking or adding to dishes.'
},
['uwu_lemonjuice'] = {
    name = 'uwu_lemonjuice',
    label = 'Lemon Juice',
    weight = 200,
    type = 'item',
    image = 'uwu_lemonjuice.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Lemon juice for cooking, baking, and beverages.'
},
['uwu_garlic'] = {
    name = 'uwu_garlic',
    label = 'Garlic',
    weight = 200,
    type = 'item',
    image = 'uwu_garlic.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'Garlic for enhancing the flavor of various dishes.'
},
['uwu_drinkpallet'] = {
    name = 'uwu_drinkpallet',
    label = 'Uwu Drink Pallet',
    weight = 200,
    type = 'item',
    image = 'uwu_drinkpallet.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A pallet full of uWu cafe drinks.'
},
['uwu_bakingpallet'] = {
    name = 'uwu_bakingpallet',
    label = 'Uwu Baking Pallet',
    weight = 200,
    type = 'item',
    image = 'uwu_bakingpallet.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A pallet full of baking ingredients from uWu cafe.'
},
['uwu_bakingpallet2'] = {
    name = 'uwu_bakingpallet2',
    label = 'Uwu Baking Pallet #2',
    weight = 200,
    type = 'item',
    image = 'uwu_bakingpallet2.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'An additional pallet full of baking goods from uWu cafe.'
},
['uwu_bentopallet'] = {
    name = 'uwu_bentopallet',
    label = 'Uwu Bento Pallet',
    weight = 200,
    type = 'item',
    image = 'uwu_bakingpallet2.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A pallet full of uWu cafe bento boxes.'
},
['uwu_ticket'] = {
    name = 'uwu_ticket',
    label = 'Uwu Ticket',
    weight = 200,
    type = 'item',
    image = 'uwu_ticket.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A ticket for uWu cafe orders.'
},
['uwu_waterbottle'] = {
    name = 'uwu_waterbottle',
    label = 'Uwu Water Bottle',
    weight = 200,
    type = 'item',
    image = 'uwu_waterbottle.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A water bottle from uWu cafe.'
},
['uwu_bag'] = {
    name = 'uwu_bag',
    label = 'Uwu Bag',
    weight = 200,
    type = 'item',
    image = 'uwu_bag.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A delivery bag from uWu cafe.'
},
['uwupurpleplush'] = {
    name = 'uwupurpleplush',
    label = 'UWu Purple Plush',
    weight = 200,
    type = 'item',
    image = 'uwupurpleplush.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A cute uWu purple plush toy.'
},
['uwugreenplush'] = {
    name = 'uwugreenplush',
    label = 'UWu Green Plush',
    weight = 200,
    type = 'item',
    image = 'uwugreenplush.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A cute uWu green plush toy.'
},
['uwublueplush'] = {
    name = 'uwublueplush',
    label = 'UWu Blue Plush',
    weight = 200,
    type = 'item',
    image = 'uwublueplush.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A cute uWu blue plush toy.'
},
['uwubrownplush'] = {
    name = 'uwubrownplush',
    label = 'UWu Brown Plush',
    weight = 200,
    type = 'item',
    image = 'uwubrownplush.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A cute uWu brown plush toy.'
},
['uwuyellowplush'] = {
    name = 'uwuyellowplush',
    label = 'UWu Yellow Plush',
    weight = 200,
    type = 'item',
    image = 'uwuyellowplush.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A cute uWu yellow plush toy.'
},
['uwuredplush'] = {
    name = 'uwuredplush',
    label = 'UWu Red Plush',
    weight = 200,
    type = 'item',
    image = 'uwuredplush.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A cute uWu red plush toy.'
},
['uwugreenrareplush'] = {
    name = 'uwugreenrareplush',
    label = 'UWu Rare Green Plush',
    weight = 200,
    type = 'item',
    image = 'uwugreenrareplush.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A rare uWu green plush toy.'
},
['uwupinkrareplush'] = {
    name = 'uwupinkrareplush',
    label = 'UWu Rare Pink Plush',
    weight = 200,
    type = 'item',
    image = 'uwupinkrareplush.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'A rare uWu pink plush toy.'
},`,
        textTwo: 'Now add this to the qb-core/shared/job.lua',
        codeTwo: `
['uwu'] = {
  label = 'Uwu Cafe',
  defaultDuty = true,
  offDutyPay = false,
  grades = {
    ['0'] = {
        name = 'Recruit',
        payment = 150
    },
    ['1'] = {
        name = 'Crew Member',
        payment = 165
    },
    ['2'] = {
        name = 'Shift Manager',
        payment = 175
    },
    ['3'] = {
        name = 'Manager',
        payment = 185
    },
    ['4'] = {
        name = 'Owner',
        isboss = true,
        payment = 200
    },
  },
},`,
        textThree: 'You need add these to Config in qb-smallresources/config.lua',
        codeThree: `Config.ConsumablesUwuCupcake = {
    ["uwucupcake"] = math.random(40, 45),
}
  
Config.ConsumablesUwuBowl = {                         
  ["uwubudhabowl"] = math.random(50, 60),
}
  
Config.ConsumablesUwuSandy = {
  ["uwuvanillasandy"] = math.random(50, 65),
  ["uwuchocsandy"] = math.random(50, 65),
}
  
Config.ConsumablesUwuSoup = {
  ["uwumisosoup"] = math.random(80, 90),
}

Config.ConsumablesTea = {
  ["uwububbleteablueberry"] = math.random(55, 60),
  ["uwububbletearose"] = math.random(55, 60),
  ["uwububbleteamint"] = math.random(55, 60),
}`,
        textFive: 'Now add the following code to qb-smallresources/server/consumables.lua',
        codeFive: `for k,_ in pairs(Config.ConsumablesTea) do
    QBCore.Functions.CreateUseableItem(k, function(source, item)
        local Player = QBCore.Functions.GetPlayer(source)
        if not Player.Functions.RemoveItem(item.name, 1, item.slot) then return end
        TriggerClientEvent("consumables:client:Uwububbleteablueberry", source, item.name)
    end)
end

for k,_ in pairs(Config.ConsumablesUwuBowl) do
    QBCore.Functions.CreateUseableItem(k, function(source, item)
        local Player = QBCore.Functions.GetPlayer(source)
        if not Player.Functions.RemoveItem(item.name, 1, item.slot) then return end
        TriggerClientEvent("consumables:client:Uwubudhabowl", source, item.name)
    end)
end

for k,_ in pairs(Config.ConsumablesUwuSandy) do
    QBCore.Functions.CreateUseableItem(k, function(source, item)
        local Player = QBCore.Functions.GetPlayer(source)
        if not Player.Functions.RemoveItem(item.name, 1, item.slot) then return end
        TriggerClientEvent("consumables:client:Uwusandy", source, item.name)
    end)
end

for k,_ in pairs(Config.ConsumablesUwuSoup) do
    QBCore.Functions.CreateUseableItem(k, function(source, item)
        local Player = QBCore.Functions.GetPlayer(source)
        if not Player.Functions.RemoveItem(item.name, 1, item.slot) then return end
        TriggerClientEvent("consumables:client:uwumisosoup", source, item.name)
    end)
end

for k,_ in pairs(Config.ConsumablesUwuCupcake) do
    QBCore.Functions.CreateUseableItem(k, function(source, item)
        local Player = QBCore.Functions.GetPlayer(source)
        if not Player.Functions.RemoveItem(item.name, 1, item.slot) then return end
        TriggerClientEvent("consumables:client:UwuCupcake", source, item.name)
    end)
end`,
        textSix: 'Now add the following code to qb-smallresources/client/consumables.lua',
        codeSix: `RegisterNetEvent('consumables:client:uwumisosoup', function(itemName)
    QBCore.Functions.Progressbar('drink_something', Lang:t('consumables.drink_progress'), 5000, false, true, {
        disableMovement = false,
        disableCarMovement = false,
        disableMouse = false,
        disableCombat = true
    }, {
        animDict = 'amb@world_human_drinking@coffee@male@idle_a',
        anim = 'idle_c',
        flags = 49
    }, {
        model = 'v_ret_247_noodle1',
        bone = 28422,
        coords = vec3(0.0, 0.0, -0.05),
        rotation = vec3(0.0, 0.0, -40),
    }, {}, function() -- Done
        TriggerEvent('inventory:client:ItemBox', QBCore.Shared.Items[itemName], 'remove')
        TriggerServerEvent('consumables:server:addHunger', QBCore.Functions.GetPlayerData().metadata.hunger + Config.ConsumablesUwuSoup[itemName])
        TriggerServerEvent('hud:server:RelieveStress', math.random(2, 4))
    end)
end)

RegisterNetEvent('consumables:client:Uwububbleteablueberry', function(itemName)
    QBCore.Functions.Progressbar('drink_something', Lang:t('consumables.drink_progress'), 5000, false, true, {
        disableMovement = false,
        disableCarMovement = false,
        disableMouse = false,
        disableCombat = true
    }, {
        animDict = 'amb@world_human_drinking@coffee@male@idle_a',
        anim = 'idle_c',
        flags = 49
    }, {
        model = 'apa_prop_cs_plastic_cup_01',
        bone = 28422,
        coords = vec3(0.0, 0.0, -0.05),
        rotation = vec3(0.0, 0.0, -40),
    }, {}, function() -- Done
        TriggerEvent('inventory:client:ItemBox', QBCore.Shared.Items[itemName], 'remove')
        TriggerServerEvent('consumables:server:addHunger', QBCore.Functions.GetPlayerData().metadata.hunger + Config.ConsumablesTea[itemName])
        TriggerServerEvent('hud:server:RelieveStress', math.random(2, 4))
    end)
end)

RegisterNetEvent('consumables:client:Uwusandy', function(itemName)
    QBCore.Functions.Progressbar('eat_something', Lang:t('consumables.eat_progress'), 5000, false, true, {
        disableMovement = false,
        disableCarMovement = false,
        disableMouse = false,
        disableCombat = true
    }, {
        animDict = 'mp_player_inteat@burger',
        anim = 'mp_player_int_eat_burger',
        flags = 49
    }, {
        model = 'ng_proc_food_ornge1a',
        bone = 60309,
        coords = vec3(0.0, 0.0, -0.02),
        rotation = vec3(30, 0.0, 0.0),
    }, {}, function() -- Done
        TriggerEvent('inventory:client:ItemBox', QBCore.Shared.Items[itemName], 'remove')
        TriggerServerEvent('consumables:server:addHunger', QBCore.Functions.GetPlayerData().metadata.hunger + Config.ConsumablesUwuSandy[itemName])
        TriggerServerEvent('hud:server:RelieveStress', math.random(2, 4))
    end)
end)

RegisterNetEvent('consumables:client:Uwubudhabowl', function(itemName)
    QBCore.Functions.Progressbar('eat_something', Lang:t('consumables.eat_progress'), 5000, false, true, {
        disableMovement = false,
        disableCarMovement = false,
        disableMouse = false,
        disableCombat = true
    }, {
        animDict = 'anim@scripted@island@special_peds@pavel@hs4_pavel_ig5_caviar_p1',
        anim = 'base_idle',
        flags = 49
    }, {
        model = 'prop_cs_bowl_01b',
        bone = 60309,
        coords = vec3(0.0, 0.0, -0.02),
        rotation = vec3(30, 0.0, 0.0),
    }, {}, function() -- Done
        TriggerEvent('inventory:client:ItemBox', QBCore.Shared.Items[itemName], 'remove')
        TriggerServerEvent('consumables:server:addHunger', QBCore.Functions.GetPlayerData().metadata.hunger + Config.ConsumablesUwuBowl[itemName])
        TriggerServerEvent('hud:server:RelieveStress', math.random(2, 4))
    end)
end)

RegisterNetEvent('consumables:client:UwuCupcake', function(itemName)
    QBCore.Functions.Progressbar('eat_something', Lang:t('consumables.eat_progress'), 5000, false, true, {
        disableMovement = false,
        disableCarMovement = false,
        disableMouse = false,
        disableCombat = true
    }, {
        animDict = 'mp_player_inteat@burger',
        anim = 'mp_player_int_eat_burger',
        flags = 49
    }, {
        model = 'prop_amb_donut',
        bone = 60309,
        coords = vec3(0.0, 0.0, -0.02),
        rotation = vec3(30, 0.0, 0.0),
    }, {}, function() -- Done
        TriggerEvent('inventory:client:ItemBox', QBCore.Shared.Items[itemName], 'remove')
        TriggerServerEvent('consumables:server:addHunger', QBCore.Functions.GetPlayerData().metadata.hunger + Config.ConsumablesUwuCupcake[itemName])
        TriggerServerEvent('hud:server:RelieveStress', math.random(2, 4))
    end)
end)`,
        textSeven: 'You need add this in qb-management/client/cl_config.lua under Config.BossMenus  and you also have to add the job to the qb-management database table.',
        codeSeven: `['uwu'] = {
    vector3(-577.5565, -1067.565, 26.614078),
},`,
        textEight: 'You need add this in qb-management/client/cl_config.lua under Config.BossMenuszone',
        codeEight: `['uwu'] = {
    { coords = vector3(-578.36, -1066.95, 26.614078), length = 0.35, width = 0.45, heading = 351.0, minZ = 26.33, maxZ = 27.38 },
},`,
        textNine: undefined,
        codeNine: undefined,
        textTen: undefined,
        codeTen: undefined,
        textEleven: undefined,
        codeEleven: undefined,
        textTwelve: undefined,
        codeTwelve: undefined,
        textThirteen: undefined,
        codeThirteen: undefined,
        textFourteen: undefined,
        codeFourteen: undefined,
        textFifteen: undefined,
        codeFifteen: undefined,
        textSixteen: undefined,
        codeSixteen: undefined,
        textSeventeen: undefined,
        codeSeventeen: undefined,
        textEighteen: undefined,
        codeEighteen: undefined,
        textNineteen: undefined,
        codeNineteen: undefined,
        textTwenty: undefined,
        codeTwenty: undefined,
    },
    cluckin: {
        title: 'Place all images into qb-inventory images folder',
        textOne: 'You need these to add the items into qb-core shared.lua',
        codeOne: `--Clukin Bell
cluckin_bigcluck        = {name = 'cluckin_bigcluck',       label = 'Big Cluck Burger',     weight = 350, type = 'item', image = 'cluckin_bigcluck.png',        unique = false, useable = true, shouldClose = true, combinable = nil, description = 'The ultimate chicken burger for the hungriest souls.'},
cluckin_littlepecker    = {name = 'cluckin_littlepecker',   label = 'Little Pecker Wrap',   weight = 250, type = 'item', image = 'cluckin_littlepecker.png',    unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A small but mighty tasty chicken wrap.'},
cluckin_fowlburger      = {name = 'cluckin_fowlburger',     label = 'Fowl Burger',          weight = 300, type = 'item', image = 'cluckin_fowlburger.png',      unique = false, useable = true, shouldClose = true, combinable = nil, description = 'Deliciously wicked chicken burger.'},
cluckin_wings           = {name = 'cluckin_wings',          label = 'Cluckin Wings',        weight = 200, type = 'item', image = 'cluckin_wings.png',           unique = false, useable = true, shouldClose = true, combinable = nil, description = 'Crispy wings with a side of heaven.'},
cluckin_nuggets         = {name = 'cluckin_nuggets',        label = 'Chicken Nuggets',      weight = 150, type = 'item', image = 'cluckin_nuggets.png',         unique = false, useable = true, shouldClose = true, combinable = nil, description = 'Bite-sized joy, perfect for snacking.'},
cluckin_fries           = {name = 'cluckin_fries',          label = 'Large Fries',          weight = 325, type = 'item', image = 'cluckin_fries.png',           unique = false, useable = true, shouldClose = true, combinable = nil, description = 'Crispy golden fries, a perfect side to any burger.' },
cluckin_lettuce         = {name = 'cluckin_lettuce',        label = 'Fresh Lettuce',        weight = 100, type = 'item', image = 'cluckin_lettuce.png',         unique = false, useable = true, shouldClose = true, combinable = nil, description = 'Crisp, fresh lettuce for that perfect crunch.'},
cluckin_chicken         = {name = 'cluckin_chicken',        label = 'Raw Chicken',          weight = 500, type = 'item', image = 'cluckin_chicken.png',         unique = false, useable = true, shouldClose = true, combinable = nil, description = 'The base of all our cluckin good meals.'},
cluckin_fried_chicken   = {name = 'cluckin_fried_chicken',  label = 'Cooked Chicken',       weight = 500, type = 'item', image = 'cluckin_fried_chicken.png',  unique = false, useable = true, shouldClose = true, combinable = nil, description = 'Cooked chicken for our cluckin good meals.'},
cluckin_potato          = {name = 'cluckin_potato',         label = 'Potatoes',             weight = 300, type = 'item', image = 'cluckin_potato.png',          unique = false, useable = true, shouldClose = true, combinable = nil, description = 'For making the best fries or mashed potatoes.'},
cluckin_bun             = {name = 'cluckin_bun',            label = 'Burger Buns',          weight = 50, type = 'item', image = 'cluckin_bun.png',              unique = false, useable = true, shouldClose = true, combinable = nil, description = 'Soft, fluffy buns for our signature sandwiches.'},
cluckin_cheese          = {name = 'cluckin_cheese',         label = 'Cheese Slices',        weight = 20, type = 'item', image = 'cluckin_cheese.png',           unique = false, useable = true, shouldClose = true, combinable = nil, description = 'Melty cheese to top off any burger or wrap.'},
cluckin_frozenwings     = {name = 'cluckin_frozenwings',    label = 'Frozen Wings',         weight = 400, type = 'item', image = 'cluckin_frozenwings.png',     unique = false, useable = true, shouldClose = true, combinable = nil, description = 'Ready to be fried to crispy perfection.'},
cluckin_onions          = {name = 'cluckin_onions',         label = 'Onions',               weight = 150, type = 'item', image = 'cluckin_onions.png',          unique = false, useable = true, shouldClose = true, combinable = nil, description = 'For adding a bit of sharpness to any dish.'},
cluckin_slicedonion     = {name = 'cluckin_slicedonion',    label = 'Sliced Onions',        weight = 150, type = 'item', image = 'cluckin_slicedonion.png',     unique = false, useable = true, shouldClose = true, combinable = nil, description = 'For adding a bit of sharpness to any dish.'},
cluckin_tomato          = {name = 'cluckin_tomato',         label = 'Tomatoes',             weight = 200, type = 'item', image = 'cluckin_tomato.png',          unique = false, useable = true, shouldClose = true, combinable = nil, description = 'Fresh tomatoes for the juiciest burgers.'},
cluckin_tomatoslices    = {name = 'cluckin_tomatoslices',   label = 'Tomatoe Slices',       weight = 200, type = 'item', image = 'cluckin_tomatoslices.png',    unique = false, useable = true, shouldClose = true, combinable = nil, description = 'Fresh tomatoes slices for the juiciest burgers.'},
cluckin_milk            = {name = 'cluckin_milk',           label = 'Milk',                 weight = 1000, type = 'item', image = 'cluckin_milk.png',           unique = false, useable = true, shouldClose = true, combinable = nil, description = 'For milkshakes and other dairy delights.'},
cluckin_wing            = {name = 'cluckin_wing',           label = 'Chicken Wing',         weight = 10, type = 'item', image = 'cluckin_wing.png',             unique = false, useable = true, shouldClose = true, combinable = nil, description = 'Fried to crispy perfection.'},
cluckin_nugget          = {name = 'cluckin_nugget',         label = 'Chicken Nugget',       weight = 10, type = 'item', image = 'cluckin_nugget.png',           unique = false, useable = true, shouldClose = true, combinable = nil, description = 'Fried to crispy perfection.'},
cluckin_hercules  	    = {name = 'cluckin_hercules', 		label = 'Hercules', 			weight = 180, type = 'item', image = 'cluckin_hercules.png',        unique = false, useable = true, shouldClose = true, combinable = nil, description = 'Yummy'},
cluckin_junk  		    = {name = 'cluckin_junk', 			label = 'Junk', 			    weight = 180, type = 'item', image = 'cluckin_junk.png',            unique = false, useable = true, shouldClose = true, combinable = nil, description = 'ENERGRY!!!'},
cluckin_orangotang      = {name = 'cluckin_orangotang', 	label = 'Orang O Tang', 		weight = 180, type = 'item', image = 'cluckin_orangotang.png', 		unique = false, useable = true, shouldClose = true, combinable = nil, description = 'Orang O Tang'},
cluckin_pepsi  	        = {name = 'cluckin_pepsi', 			label = 'Pepsi', 				weight = 180, type = 'item', image = 'cluckin_pepsi.png', 			unique = false, useable = true, shouldClose = true, combinable = nil, description = 'Pepsi!'},
cluckin_raine  		    = {name = 'cluckin_raine', 		    label = 'Raine', 			    weight = 180, type = 'item', image = 'cluckin_raine.png', 		    unique = false, useable = true, shouldClose = true, combinable = nil, description = 'Good ol water'},
cluckin_sprunk  	    = {name = 'cluckin_sprunk', 		label = 'Sprunk', 				weight = 180, type = 'item', image = 'cluckin_sprunk.png', 			unique = false, useable = true, shouldClose = true, combinable = nil, description = 'Nothing like an ice cold Sprunk'},
cluckin_pallet          = {name = 'cluckin_pallet',         label = 'Cluckin Pallet',       weight = 10000, type = 'item', image = 'cluckin_pallet.png',        unique = false, useable = true, shouldClose = true, combinable = nil, description = 'All the ingredients for a Cluckin feast.'},
cluckin_ticket          = {name = 'cluckin_ticket',         label = 'Discount Ticket',      weight = 10, type = 'item', image = 'cluckin_ticket.png',           unique = false, useable = true, shouldClose = true, combinable = nil, description = 'Redeem for a special meal at Cluckin Bell.'},
cluckin_bag             = {name = 'cluckin_bag',            label = 'Cluckin To Go Bag',    weight = 180, type = 'item', image = 'cluckin_bag.png',             unique = false, useable = true, shouldClose = true, combinable = nil, description = 'To Go Order from Cluckin Bell.'},
cluckin_box             = {name = 'cluckin_box',            label = 'Cluckin Meal Box',     weight = 1000, type = 'item', image = 'cluckin_box.png',            unique = true, useable = true, shouldClose = true, combinable = nil, description = 'A box filled with delicious cluckin essentials.' },`,
        textTwo: 'Now add this to the qb-core/shared/job.lua',
        codeTwo: `cluckin = {
    label = 'Cluckin Bell',
    defaultDuty = true,
    offDutyPay = false,
    grades = {
        ['0'] = { name = 'Recruit', payment = 600},
        ['1'] = { name = 'Crew Member', payment = 700},
        ['2'] = { name = 'Shift Manager', payment = 800},
        ['3'] = { name = 'Manager', payment = 900},
        ['4'] = { name = 'Owner', isboss = true, payment = 1000},
    },
},`,
        textThree: 'You need add these to ConsumableEat in qb-smallresources/config.lua',
        codeThree: `['cluckin_bigcluck '] = math.random(45, 65),
['cluckin_littlepecker'] = math.random(45, 65),
['cluckin_fowlburger'] = math.random(45, 65),
['cluckin_wings'] = math.random(45, 65),
['cluckin_nuggets'] = math.random(45, 65),
['cluckin_fries'] = math.random(45, 65),`,
        textFour: 'You need add these to ConsumableDrink in qb-smallresources/config.lua',
        codeFour: `['cluckin_hercules'] = math.random(45, 65),
['cluckin_junk'] = math.random(45, 65),
['cluckin_orangotang'] = math.random(45, 65),
['cluckin_pepsi'] = math.random(45, 65),
['cluckin_raine'] = math.random(45, 65),
['cluckin_sprunk'] = math.random(45, 65),
      `,
        textFive: 'You need add this in qb-management/client/cl_config.lua under Config.BossMenus and you also have to add the job to the qb-management database table.',
        codeFive: `['cluckin'] = {
  vector3(-1198.14, -897.63, 13.79),
},`,
        textSix: 'You need add this in qb-management/client/cl_config.lua under Config.BossMenuszone',
        codeSix: `['cluckin'] = {
    { coords = vector3(-1198.46, -898.48, 13.79), length = 1.0, width = 1.0, heading = 351.0, minZ = 13.61, maxZ = 14.08 },
},`,
        textSeven: undefined,
        codeSeven: undefined,
        textEight: undefined,
        codeEight: undefined,
        textNine: undefined,
        codeNine: undefined,
        textTen: undefined,
        codeTen: undefined,
        textEleven: undefined,
        codeEleven: undefined,
        textTwelve: undefined,
        codeTwelve: undefined,
        textThirteen: undefined,
        codeThirteen: undefined,
        textFourteen: undefined,
        codeFourteen: undefined,
        textFifteen: undefined,
        codeFifteen: undefined,
        textSixteen: undefined,
        codeSixteen: undefined,
        textSeventeen: undefined,
        codeSeventeen: undefined,
        textEighteen: undefined,
        codeEighteen: undefined,
        textNineteen: undefined,
        codeNineteen: undefined,
        textTwenty: undefined,
        codeTwenty: undefined,
    },
};