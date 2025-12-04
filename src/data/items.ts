import type { Item } from './types'

export const items: Array<Item> = [
  {
    "id": 1,
    "name": "Advanced ARC Powercell",
    "category": "Topside Material",
    "sellPrice": 640,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 16,
        "amount": 2
      }
    ],
    "salvagesTo": [
      {
        "id": 16,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/3/31/Advanced_ARC_Powercell.png/348px-Advanced_ARC_Powercell.png.webp",
    "description": "Advanced ARC Powercell is a rare item used to craft other items.",
    "maxStackSize": 5,
    "weight": 0.5,
    "canBeFoundIn": "ARC"
  },
  {
    "id": 2,
    "name": "Advanced Electrical Components",
    "category": "Refined Material",
    "sellPrice": 1750,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 60,
        "amount": 1
      },
      {
        "id": 192,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 60,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/9/9b/Advanced_Electrical_Components.png/348px-Advanced_Electrical_Components.png.webp",
    "description": "Advanced Electrical Components is a rare item used to craft other items.",
    "maxStackSize": 5,
    "weight": 1,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Recycling"
      }
    ],
    "canBeFoundIn": "Electrical",
    "crafting": [
      {
        "amount": 1,
        "workstation": "Refiner",
        "workstationLevel": 2,
        "items": [
          {
            "id": 192,
            "amount": 3
          },
          {
            "id": 60,
            "amount": 2
          }
        ]
      }
    ]
  },
  {
    "id": 3,
    "name": "Advanced Mechanical Components",
    "category": "Refined Material",
    "sellPrice": 1750,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 171,
        "amount": 1
      },
      {
        "id": 100,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 100,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/2/25/Advanced_Mechanical_Components.png/348px-Advanced_Mechanical_Components.png.webp",
    "description": "Advanced Mechanical Components is a rare item used to craft other items.",
    "maxStackSize": 5,
    "weight": 1,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Recycling"
      }
    ],
    "canBeFoundIn": "Mechanical",
    "crafting": [
      {
        "amount": 1,
        "workstation": "Refiner",
        "workstationLevel": 2,
        "items": [
          {
            "id": 171,
            "amount": 2
          },
          {
            "id": 100,
            "amount": 2
          }
        ]
      }
    ]
  },
  {
    "id": 4,
    "name": "Agave",
    "category": "Nature",
    "sellPrice": 1000,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 19,
        "amount": 3
      }
    ],
    "salvagesTo": [
      {
        "id": 19,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/4/47/Agave.png/348px-Agave.png.webp",
    "description": "Agave is a nice refreshing snack that'll help you heal in a pinch.",
    "maxStackSize": 10,
    "weight": 0.2,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Nature",
    "meta": {
      "healing": 1,
      "use time": 1,
      "duration": 10
    }
  },
  {
    "id": 5,
    "name": "Agave Juice",
    "category": "Quick Use",
    "sellPrice": 1800,
    "rarity": "Common",
    "recyclesTo": [
      {
        "id": 61,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "name": "?",
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/a/a8/Agave_Juice.png/348px-Agave_Juice.png.webp",
    "maxStackSize": 5,
    "weight": 0.2,
    "sources": [
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Inventory",
        "workstationLevel": 1,
        "items": [
          {
            "id": 4,
            "amount": 1
          },
          {
            "id": 61,
            "amount": 1
          }
        ]
      }
    ],
    "meta": {
      "stamina": 5,
      "damage": 5,
      "use time": 1,
      "duration": 10
    }
  },
  {
    "id": 6,
    "name": "Air Freshener",
    "category": "Trinket",
    "sellPrice": 2000,
    "rarity": "Uncommon",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/0/03/Air_Freshener.png/348px-Air_Freshener.png.webp",
    "description": "Air Freshener is a terrible gift to give to another Raider down in Speranza.",
    "maxStackSize": 5,
    "weight": 0.3,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Mechanical"
  },
  {
    "id": 7,
    "name": "Alarm Clock",
    "category": "Recyclable",
    "sellPrice": 1000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 127,
        "amount": 1
      },
      {
        "id": 116,
        "amount": 6
      }
    ],
    "salvagesTo": [
      {
        "id": 127,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/9/95/Alarm_Clock.png/348px-Alarm_Clock.png.webp",
    "description": "The Alarm Clock is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 2,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Residential"
  },
  {
    "id": 8,
    "name": "Antiseptic",
    "category": "Refined Material",
    "sellPrice": 1000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 35,
        "amount": 10
      }
    ],
    "salvagesTo": [
      {
        "id": 35,
        "amount": 5
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/f/f5/Antiseptic.png/348px-Antiseptic.png.webp",
    "description": "Antiseptic is a rare item used to craft medical items that can also be recycled into crafting materials.",
    "maxStackSize": 5,
    "weight": 1,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Recycling"
      }
    ],
    "canBeFoundIn": "Medical",
    "crafting": [
      {
        "amount": 1,
        "workstation": "Refiner",
        "workstationLevel": 2,
        "items": [
          {
            "id": 35,
            "amount": 10
          },
          {
            "id": 78,
            "amount": 2
          }
        ]
      }
    ]
  },
  {
    "id": 9,
    "name": "Apricot",
    "category": "Nature",
    "sellPrice": 640,
    "rarity": "Uncommon",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/f/fc/Apricot.png/348px-Apricot.png.webp",
    "description": "Apricots are a nice refreshing snack that will give your Raider a burst of energy.",
    "maxStackSize": 10,
    "weight": 0.2,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Nature",
    "meta": {
      "stamina": 20,
      "use time": 1
    }
  },
  {
    "id": 10,
    "name": "ARC Alloy",
    "category": "Topside Material",
    "sellPrice": 200,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 103,
        "amount": 2
      }
    ],
    "salvagesTo": [
      {
        "id": 103,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/a/a6/ARC_Alloy.png/348px-ARC_Alloy.png.webp",
    "description": "ARC Alloy is found on almost every destroyed ARC and is used to craft a variety of items.",
    "maxStackSize": 15,
    "weight": 0.25,
    "sources": [
      {
        "type": "Recycling"
      }
    ],
    "canBeFoundIn": "ARC"
  },
  {
    "id": 11,
    "name": "ARC Circuitry",
    "category": "Topside Material",
    "sellPrice": 1000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 10,
        "amount": 2
      }
    ],
    "salvagesTo": [
      {
        "id": 10,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/d/dc/ARC_Circuitry.png/348px-ARC_Circuitry.png.webp",
    "description": "ARC Circuitry is found on lots of destroyed ARC and is used to craft higher end items.",
    "maxStackSize": 5,
    "weight": 0.3,
    "sources": [
      {
        "type": "Crafting"
      },
      {
        "type": "Recycling"
      }
    ],
    "canBeFoundIn": "ARC",
    "crafting": [
      {
        "amount": 1,
        "workstation": "Refiner",
        "workstationLevel": 2,
        "items": [
          {
            "id": 10,
            "amount": 8
          }
        ]
      }
    ]
  },
  {
    "id": 12,
    "name": "ARC Coolant",
    "category": "Recyclable",
    "sellPrice": 1000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 35,
        "amount": 16
      }
    ],
    "salvagesTo": [
      {
        "id": 35,
        "amount": 9
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/e/e9/ARC_Coolant.png/348px-ARC_Coolant.png.webp",
    "description": "ARC Coolant is a rare item found by destroying ARC and is recycled down for basic materials.",
    "maxStackSize": 3,
    "weight": 1,
    "canBeFoundIn": "ARC"
  },
  {
    "id": 13,
    "name": "ARC Flex Rubber",
    "category": "Recyclable",
    "sellPrice": 1000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 145,
        "amount": 16
      }
    ],
    "salvagesTo": [
      {
        "id": 145,
        "amount": 9
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/2/29/ARC_Flex_Rubber.png/348px-ARC_Flex_Rubber.png.webp",
    "description": "ARC Flex Rubber is a rare item found by destroying ARC that is recycled down for basic materials.",
    "maxStackSize": 3,
    "weight": 1,
    "canBeFoundIn": "ARC"
  },
  {
    "id": 14,
    "name": "ARC Motion Core",
    "category": "Topside Material",
    "sellPrice": 1000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 10,
        "amount": 2
      }
    ],
    "salvagesTo": [
      {
        "id": 10,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/a/ad/ARC_Motion_Core.png/348px-ARC_Motion_Core.png.webp",
    "description": "An ARC Motion Core can be found on some destroyed ARC and is used to craft higher end items.",
    "maxStackSize": 5,
    "weight": 0.3,
    "sources": [
      {
        "type": "Recycling"
      },
      {
        "type": "Crafting"
      }
    ],
    "canBeFoundIn": "ARC",
    "crafting": [
      {
        "amount": 1,
        "workstation": "Refiner",
        "workstationLevel": 2,
        "items": [
          {
            "id": 10,
            "amount": 8
          }
        ]
      }
    ]
  },
  {
    "id": 15,
    "name": "ARC Performance Steel",
    "category": "Recyclable",
    "sellPrice": 1000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 103,
        "amount": 12
      }
    ],
    "salvagesTo": [
      {
        "id": 103,
        "amount": 7
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/0/02/ARC_Performance_Steel.png/348px-ARC_Performance_Steel.png.webp",
    "description": "ARC Performance Steel can be found on some ARC and is recycled down to basic materials.",
    "maxStackSize": 3,
    "weight": 1,
    "canBeFoundIn": "ARC"
  },
  {
    "id": 16,
    "name": "ARC Powercell",
    "category": "Topside Material",
    "sellPrice": 270,
    "rarity": "Common",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/d/df/ARC_Powercell.png/348px-ARC_Powercell.png.webp",
    "description": "The ARC Powercell is dropped by every ARC and can be used to repair shields in a pinch.",
    "maxStackSize": 5,
    "weight": 0.5,
    "canBeFoundIn": "ARC",
    "meta": {
      "shield": 20,
      "use time": 3,
      "duration": 10,
      "recharge": 2
    }
  },
  {
    "id": 17,
    "name": "ARC Synthetic Resin",
    "category": "Recyclable",
    "sellPrice": 1000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 116,
        "amount": 14
      }
    ],
    "salvagesTo": [
      {
        "id": 116,
        "amount": 8
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/7/72/ARC_Synthetic_Resin.png/348px-ARC_Synthetic_Resin.png.webp",
    "description": "ARC Synthetic Resin is a rare item found on destroyed ARC that can be recycled down for basic materials.",
    "maxStackSize": 3,
    "weight": 1,
    "canBeFoundIn": "ARC"
  },
  {
    "id": 18,
    "name": "ARC Thermo Lining",
    "category": "Recyclable",
    "sellPrice": 1000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 66,
        "amount": 16
      }
    ],
    "salvagesTo": [
      {
        "id": 66,
        "amount": 9
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/0/0f/ARC_Thermo_Lining.png/348px-ARC_Thermo_Lining.png.webp",
    "description": "ARC Thermo Lining is a rare item that can be found on destroyed ARC and is recycled down for basic materials.",
    "maxStackSize": 3,
    "weight": 1,
    "canBeFoundIn": "ARC"
  },
  {
    "id": 19,
    "name": "Assorted Seeds",
    "category": "Nature",
    "sellPrice": 100,
    "rarity": "Common",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/5/51/Assorted_Seeds.png/348px-Assorted_Seeds.png.webp",
    "description": "Assorted Seeds are the currency used to trade with Celeste.",
    "maxStackSize": 100,
    "weight": 0.05,
    "canBeFoundIn": "Nature"
  },
  {
    "id": 20,
    "name": "Bastion Cell",
    "category": "Recyclable",
    "sellPrice": 5000,
    "rarity": "Epic",
    "recyclesTo": [
      {
        "id": 3,
        "amount": 2
      },
      {
        "id": 10,
        "amount": 2
      }
    ],
    "salvagesTo": [
      {
        "id": 3,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/0/06/Bastion_Cell.png/348px-Bastion_Cell.png.webp",
    "description": "The Bastion Cell is an epic item only found by destroying a Bastion.",
    "maxStackSize": 3,
    "weight": 1,
    "canBeFoundIn": "ARC"
  },
  {
    "id": 21,
    "name": "Battery",
    "category": "Topside Material",
    "sellPrice": 250,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 103,
        "amount": 2
      }
    ],
    "salvagesTo": [
      {
        "id": 103,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/6/6d/Battery.png/348px-Battery.png.webp",
    "description": "The Battery is an uncommon item used to repair shields or can be recycled down for basic materials.",
    "maxStackSize": 15,
    "weight": 0.25,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Recycling"
      },
      {
        "type": "Sold",
        "traderId": 1
      }
    ],
    "canBeFoundIn": "Technological,Electrical"
  },
  {
    "id": 22,
    "name": "Bicycle Pump",
    "category": "Recyclable",
    "sellPrice": 2000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 33,
        "amount": 4
      },
      {
        "id": 103,
        "amount": 10
      }
    ],
    "salvagesTo": [
      {
        "id": 33,
        "amount": 3
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/f/fa/Bicycle_Pump.png/348px-Bicycle_Pump.png.webp",
    "description": "The Bicycle Pump is a rare item that can be recycled down for scraps.",
    "maxStackSize": 3,
    "weight": 3,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Residential"
  },
  {
    "id": 23,
    "name": "Bloated Tuna Can",
    "category": "Trinket",
    "sellPrice": 1000,
    "rarity": "Common",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/0/01/Bloated_Tuna_Can.png/348px-Bloated_Tuna_Can.png.webp",
    "description": "The Bloated Tuna Can is a \"refreshing\" snack that will give your Raider a burst of energy.",
    "maxStackSize": 15,
    "weight": 0.2,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Commercial,Residential",
    "meta": {
      "stamina": 25,
      "use time": 1
    }
  },
  {
    "id": 24,
    "name": "Bombardier Cell",
    "category": "Recyclable",
    "sellPrice": 5000,
    "rarity": "Epic",
    "recyclesTo": [
      {
        "id": 10,
        "amount": 2
      },
      {
        "id": 3,
        "amount": 2
      }
    ],
    "salvagesTo": [
      {
        "name": "?",
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/4/46/Bombardier_Cell.png/348px-Bombardier_Cell.png.webp",
    "description": "The Bombardier Cell is an epic item only found by destroying a Bombardier.",
    "maxStackSize": 3,
    "weight": 1,
    "canBeFoundIn": "ARC"
  },
  {
    "id": 25,
    "name": "Breathtaking Snow Globe",
    "category": "Trinket",
    "sellPrice": 7000,
    "rarity": "Epic",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/6/63/Breathtaking_Snow_Globe.png/348px-Breathtaking_Snow_Globe.png.webp",
    "description": "The Breathtaking Snow Globe is a valuable trinket.",
    "maxStackSize": 1,
    "weight": 0.2,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Residential,Old World,Commercial"
  },
  {
    "id": 26,
    "name": "Broken Flashlight",
    "category": "Recyclable",
    "sellPrice": 1000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 21,
        "amount": 2
      },
      {
        "id": 103,
        "amount": 6
      }
    ],
    "salvagesTo": [
      {
        "id": 103,
        "amount": 7
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/1/17/Broken_Flashlight.png/348px-Broken_Flashlight.png.webp",
    "description": "The Broken Flashlight is a rare item that can be recycled down into crafting materials.",
    "maxStackSize": 3,
    "weight": 2,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Security"
  },
  {
    "id": 27,
    "name": "Broken Guidance System",
    "category": "Recyclable",
    "sellPrice": 2000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 127,
        "amount": 4
      }
    ],
    "salvagesTo": [
      {
        "id": 127,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/9/93/Broken_Guidance_System.png/348px-Broken_Guidance_System.png.webp",
    "description": "Broken Guidance System is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 3,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Industrial"
  },
  {
    "id": 28,
    "name": "Broken Handheld Radio",
    "category": "Recyclable",
    "sellPrice": 2000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 158,
        "amount": 3
      },
      {
        "id": 192,
        "amount": 2
      }
    ],
    "salvagesTo": [
      {
        "name": "?",
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/3/3b/Broken_Handheld_Radio.png/348px-Broken_Handheld_Radio.png.webp",
    "description": "The Broken Handheld Radio is a rare item that can be recycled down into crafting materials.",
    "maxStackSize": 3,
    "weight": 3,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Security"
  },
  {
    "id": 29,
    "name": "Broken Taser",
    "category": "Recyclable",
    "sellPrice": 1000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 21,
        "amount": 2
      },
      {
        "id": 192,
        "amount": 2
      }
    ],
    "salvagesTo": [
      {
        "name": "?",
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/1/18/Broken_Taser.png/348px-Broken_Taser.png.webp",
    "description": "The Broken Taser is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 2,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Security"
  },
  {
    "id": 30,
    "name": "Burned ARC Circuitry",
    "category": "Recyclable",
    "sellPrice": 640,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 10,
        "amount": 2
      }
    ],
    "salvagesTo": [
      {
        "id": 10,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/3/35/Burned_ARC_Circuitry.png/348px-Burned_ARC_Circuitry.png.webp",
    "maxStackSize": 5,
    "weight": 0.25,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "ARC"
  },
  {
    "id": 31,
    "name": "Camera Lens",
    "category": "Recyclable",
    "sellPrice": 640,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 116,
        "amount": 8
      }
    ],
    "salvagesTo": [
      {
        "id": 116,
        "amount": 4
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/a/a6/Camera_Lens.png/348px-Camera_Lens.png.webp",
    "description": "The Camera Lens is an uncommon item that can be recycled into crafting materials.",
    "maxStackSize": 5,
    "weight": 0.8,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Security"
  },
  {
    "id": 32,
    "name": "Candle Holder",
    "category": "Recyclable",
    "sellPrice": 640,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 103,
        "amount": 8
      }
    ],
    "salvagesTo": [
      {
        "id": 103,
        "amount": 4
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/5/58/Candle_Holder.png/348px-Candle_Holder.png.webp",
    "description": "The Candle Holder is an uncommon item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 2,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Residential"
  },
  {
    "id": 33,
    "name": "Canister",
    "category": "Topside Material",
    "sellPrice": 300,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 116,
        "amount": 3
      }
    ],
    "salvagesTo": [
      {
        "id": 116,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/5/5f/Canister.png/348px-Canister.png.webp",
    "description": "The Canister is an uncommon item that can be recycled into crafting materials.",
    "maxStackSize": 15,
    "weight": 0.25,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Recycling"
      },
      {
        "type": "Sold",
        "traderId": 1
      }
    ],
    "canBeFoundIn": "Commercial"
  },
  {
    "id": 34,
    "name": "Cat Bed",
    "category": "Trinket",
    "sellPrice": 1000,
    "rarity": "Uncommon",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/8/82/Cat_Bed.png/348px-Cat_Bed.png.webp",
    "description": "The Cat Bed is an adorable little trinket.",
    "maxStackSize": 3,
    "weight": 0.5,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Commercial,Residential"
  },
  {
    "id": 35,
    "name": "Chemicals",
    "category": "Basic Material",
    "sellPrice": 50,
    "rarity": "Common",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/9/92/Chemicals.png/348px-Chemicals.png.webp",
    "description": "Chemicals are a common item that is an essential part of every Raider's stash. Used to craft all the ammo and explosives they'll use to destroy ARC... or other Raiders.",
    "maxStackSize": 50,
    "weight": 0.1,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Recycling"
      },
      {
        "type": "Sold",
        "traderId": 1
      }
    ],
    "canBeFoundIn": "Mechanical,Residential,Medical"
  },
  {
    "id": 36,
    "name": "Coffee Pot",
    "category": "Trinket",
    "sellPrice": 1000,
    "rarity": "Common",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/3/33/Coffee_Pot.png/348px-Coffee_Pot.png.webp",
    "description": "The Coffee Pot is a trinket that you sadly can't use to brew coffee.",
    "maxStackSize": 3,
    "weight": 0.3,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Residential"
  },
  {
    "id": 37,
    "name": "Complex Gun Parts",
    "category": "Topside Material",
    "sellPrice": 3000,
    "rarity": "Epic",
    "recyclesTo": [
      {
        "id": 163,
        "amount": 3
      }
    ],
    "salvagesTo": [
      {
        "id": 163,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/3/3d/Complex_Gun_Parts.png/348px-Complex_Gun_Parts.png.webp",
    "description": "Complex Gun Parts are used to craft more advanced weaponry and can be recycled down to crafting materials.",
    "maxStackSize": 3,
    "weight": 1,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Recycling"
      },
      {
        "type": "Sold",
        "traderId": 1
      }
    ],
    "canBeFoundIn": "Security",
    "crafting": [
      {
        "amount": 1,
        "workstation": "Refiner",
        "workstationLevel": 3,
        "items": [
          {
            "id": 94,
            "amount": 2
          },
          {
            "id": 101,
            "amount": 2
          },
          {
            "id": 80,
            "amount": 2
          }
        ]
      }
    ]
  },
  {
    "id": 38,
    "name": "Coolant",
    "category": "Recyclable",
    "sellPrice": 1000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 35,
        "amount": 5
      },
      {
        "id": 113,
        "amount": 2
      }
    ],
    "salvagesTo": [
      {
        "id": 113,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/4/40/Coolant.png/348px-Coolant.png.webp",
    "description": "Coolant is a rare item that is recycled for parts.",
    "maxStackSize": 3,
    "weight": 2,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Mechanical"
  },
  {
    "id": 39,
    "name": "Cooling Coil",
    "category": "Recyclable",
    "sellPrice": 1000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 35,
        "amount": 6
      },
      {
        "id": 171,
        "amount": 2
      }
    ],
    "salvagesTo": [
      {
        "id": 171,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/7/7f/Cooling_Coil.png/348px-Cooling_Coil.png.webp",
    "description": "The Cooling Coil is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 2,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Industrial"
  },
  {
    "id": 40,
    "name": "Cooling Fan",
    "category": "Recyclable",
    "sellPrice": 2000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 192,
        "amount": 4
      },
      {
        "id": 116,
        "amount": 14
      }
    ],
    "salvagesTo": [
      {
        "id": 192,
        "amount": 4
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/1/13/Cooling_Fan.png/348px-Cooling_Fan.png.webp",
    "description": "The Cooling Fan is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 3,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Technological"
  },
  {
    "id": 41,
    "name": "Cracked Bioscanner",
    "category": "Recyclable",
    "sellPrice": 1000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 145,
        "amount": 3
      },
      {
        "id": 21,
        "amount": 3
      }
    ],
    "salvagesTo": [
      {
        "id": 21,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/9/9a/Cracked_Bioscanner.png/348px-Cracked_Bioscanner.png.webp",
    "description": "The Cracked Bioscanner is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 2,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Medical"
  },
  {
    "id": 42,
    "name": "Crude Explosives",
    "category": "Refined Material",
    "sellPrice": 270,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 35,
        "amount": 3
      }
    ],
    "salvagesTo": [
      {
        "id": 35,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/f/fc/Crude_Explosives.png/348px-Crude_Explosives.png.webp",
    "description": "Crude Explosives is an uncommon item that can be recycled into crafting materials or thrown to create a small explosion.",
    "maxStackSize": 10,
    "weight": 2,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Industrial,Security",
    "crafting": [
      {
        "amount": 1,
        "workstation": "Refiner",
        "workstationLevel": 1,
        "items": [
          {
            "id": 35,
            "amount": 6
          }
        ]
      }
    ],
    "meta": {
      "damage": 15,
      "radius": 1.5
    }
  },
  {
    "id": 43,
    "name": "Crumpled Plastic Bottle",
    "category": "Recyclable",
    "sellPrice": 270,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 116,
        "amount": 4
      }
    ],
    "salvagesTo": [
      {
        "id": 116,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/8/8e/Crumpled_Plastic_Bottle.png/348px-Crumpled_Plastic_Bottle.png.webp",
    "description": "The Crumpled Plastic Bottle is an uncommon item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 0.8,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Residential"
  },
  {
    "id": 44,
    "name": "Damaged ARC Motion Core",
    "category": "Recyclable",
    "sellPrice": 640,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 10,
        "amount": 2
      }
    ],
    "salvagesTo": [
      {
        "id": 10,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/9/9e/Damaged_ARC_Motion_Core.png/348px-Damaged_ARC_Motion_Core.png.webp",
    "description": "The Damaged ARC Motion Core is an uncommon item that can be recycled into crafting materials.",
    "maxStackSize": 5,
    "weight": 0.25,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "ARC"
  },
  {
    "id": 45,
    "name": "Damaged ARC Powercell",
    "category": "Recyclable",
    "sellPrice": 293,
    "rarity": "Common",
    "recyclesTo": [
      {
        "id": 10,
        "amount": 2
      }
    ],
    "salvagesTo": [
      {
        "id": 103,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/5/58/Damaged_ARC_Powercell.png/348px-Damaged_ARC_Powercell.png.webp",
    "description": "The Damaged ARC Powercell is an uncommon item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 0.25,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "ARC"
  },
  {
    "id": 46,
    "name": "Damaged Fireball Burner",
    "category": "Recyclable",
    "sellPrice": 270,
    "rarity": "Common",
    "recyclesTo": [
      {
        "id": 10,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "name": "?",
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/d/d8/Damaged_Fireball_Burner.png/348px-Damaged_Fireball_Burner.png.webp",
    "description": "Damaged Fireball Burner is a common item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 1,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "ARC"
  },
  {
    "id": 47,
    "name": "Damaged Heat Sink",
    "category": "Recyclable",
    "sellPrice": 1000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 192,
        "amount": 2
      },
      {
        "id": 103,
        "amount": 6
      }
    ],
    "salvagesTo": [
      {
        "id": 192,
        "amount": 3
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/1/1f/Damaged_Heat_Sink.png/348px-Damaged_Heat_Sink.png.webp",
    "description": "The Damaged Heat Sink is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 2,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Technological"
  },
  {
    "id": 48,
    "name": "Damaged Hornet Driver",
    "category": "Recyclable",
    "sellPrice": 640,
    "rarity": "Common",
    "recyclesTo": [
      {
        "id": 10,
        "amount": 2
      }
    ],
    "salvagesTo": [
      {
        "id": 10,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/9/96/Damaged_Hornet_Driver.png/348px-Damaged_Hornet_Driver.png.webp",
    "description": "The Damaged Hornet Driver is a common item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 0.3,
    "canBeFoundIn": "ARC"
  },
  {
    "id": 49,
    "name": "Damaged Rocketeer Driver",
    "category": "Recyclable",
    "sellPrice": 2000,
    "rarity": "Common",
    "recyclesTo": [
      {
        "id": 10,
        "amount": 3
      }
    ],
    "salvagesTo": [
      {
        "id": 10,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/3/3a/Damaged_Rocketeer_Driver.png/348px-Damaged_Rocketeer_Driver.png.webp",
    "description": "The Damaged Rocketeer Driver is a common item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 0.25,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "ARC"
  },
  {
    "id": 50,
    "name": "Damaged Tick Pod",
    "category": "Recyclable",
    "sellPrice": 270,
    "rarity": "Common",
    "recyclesTo": [
      {
        "id": 10,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 103,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/d/d6/Damaged_Tick_Pod.png/348px-Damaged_Tick_Pod.png.webp",
    "description": "The Damaged Tick Pod is a common item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 0.25,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "ARC"
  },
  {
    "id": 51,
    "name": "Damaged Wasp Driver",
    "category": "Recyclable",
    "sellPrice": 270,
    "rarity": "Common",
    "recyclesTo": [
      {
        "id": 10,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 103,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/e/e6/Damaged_Wasp_Driver.png/348px-Damaged_Wasp_Driver.png.webp",
    "description": "The Damaged Wasp Driver is a common item that can be recycled into crafting materials.",
    "weight": 0.25,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "ARC"
  },
  {
    "id": 52,
    "name": "Dart Board",
    "category": "Trinket",
    "sellPrice": 2000,
    "rarity": "Uncommon",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/4/4d/Dart_Board.png/348px-Dart_Board.png.webp",
    "description": "The Dart Board is a trinket that your Raider hasn't quite figured out how to \"repurpose\" from the bar in Speranza.",
    "maxStackSize": 3,
    "weight": 1,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Commercial,Residential"
  },
  {
    "id": 53,
    "name": "Deflated Football",
    "category": "Recyclable",
    "sellPrice": 1000,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 145,
        "amount": 9
      },
      {
        "id": 66,
        "amount": 9
      }
    ],
    "salvagesTo": [
      {
        "id": 145,
        "amount": 9
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/7/7c/Deflated_Football.png/348px-Deflated_Football.png.webp",
    "description": "The Deflated Football is an uncommon item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 0.8,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Residential"
  },
  {
    "id": 54,
    "name": "Degraded ARC Rubber",
    "category": "Recyclable",
    "sellPrice": 640,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 145,
        "amount": 11
      }
    ],
    "salvagesTo": [
      {
        "id": 145,
        "amount": 5
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/3/37/Degraded_ARC_Rubber.png/348px-Degraded_ARC_Rubber.png.webp",
    "description": "Degraded ARC Rubber is an uncommon item found on destroyed ARC that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 1,
    "canBeFoundIn": "ARC"
  },
  {
    "id": 55,
    "name": "Diving Goggles",
    "category": "Recyclable",
    "sellPrice": 640,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 145,
        "amount": 12
      }
    ],
    "salvagesTo": [
      {
        "id": 145,
        "amount": 5
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/1/1a/Diving_Goggles.png/348px-Diving_Goggles.png.webp",
    "description": "Diving Goggles is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 2,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Residential"
  },
  {
    "id": 56,
    "name": "Dog Collar",
    "category": "Recyclable",
    "sellPrice": 640,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 66,
        "amount": 8
      },
      {
        "id": 103,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 66,
        "amount": 5
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/c/c5/Dog_Collar.png/348px-Dog_Collar.png.webp",
    "description": "The Dog Collar is a rare item that Scrappy enjoys or can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 0.8,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Residential"
  },
  {
    "id": 57,
    "name": "Dried-Out ARC Resin",
    "category": "Recyclable",
    "sellPrice": 640,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 116,
        "amount": 9
      }
    ],
    "salvagesTo": [
      {
        "name": "?",
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/0/0b/Dried-Out_ARC_Resin.png",
    "description": "Dried-Out ARC Resin is an uncommon item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 1,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "ARC"
  },
  {
    "id": 58,
    "name": "Duct Tape",
    "category": "Topside Material",
    "sellPrice": 300,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 66,
        "amount": 3
      }
    ],
    "salvagesTo": [
      {
        "id": 66,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/4/4e/Duct_Tape.png/348px-Duct_Tape.png.webp",
    "description": "Duct Tape is an uncommon item that is used to craft underbarrel mods and can be recycled into crafting materials.",
    "maxStackSize": 15,
    "weight": 0.25,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Recycling"
      },
      {
        "type": "Sold",
        "traderId": 1
      }
    ],
    "canBeFoundIn": "Commercial,Residential"
  },
  {
    "id": 59,
    "name": "Durable Cloth",
    "category": "Refined Material",
    "sellPrice": 640,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 66,
        "amount": 6
      }
    ],
    "salvagesTo": [
      {
        "id": 66,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/2/25/Durable_Cloth.png/348px-Durable_Cloth.png.webp",
    "description": "Durable Cloth is an uncommon item that is used to craft medical supplies or can be recycled into crafting materials.",
    "maxStackSize": 10,
    "weight": 0.25,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Recycling"
      }
    ],
    "canBeFoundIn": "Medical,Commercial",
    "crafting": [
      {
        "amount": 1,
        "workstation": "Refiner",
        "workstationLevel": 1,
        "items": [
          {
            "id": 66,
            "amount": 14
          }
        ]
      }
    ]
  },
  {
    "id": 60,
    "name": "Electrical Components",
    "category": "Refined Material",
    "sellPrice": 640,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 145,
        "amount": 3
      },
      {
        "id": 116,
        "amount": 3
      }
    ],
    "salvagesTo": [
      {
        "id": 116,
        "amount": 3
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/0/06/Electrical_Components.png/348px-Electrical_Components.png.webp",
    "description": "Electrical Components is an uncommon item that is used to craft utility items and can be recycled into crafting materials.",
    "maxStackSize": 10,
    "weight": 0.5,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Recycling"
      }
    ],
    "canBeFoundIn": "Electrical",
    "crafting": [
      {
        "amount": 1,
        "workstation": "Refiner",
        "workstationLevel": 1,
        "items": [
          {
            "id": 116,
            "amount": 8
          },
          {
            "id": 145,
            "amount": 4
          }
        ]
      }
    ]
  },
  {
    "id": 61,
    "name": "Empty Wine Bottle",
    "category": "Trinket",
    "sellPrice": 1000,
    "rarity": "Common",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/e/e1/Empty_Wine_Bottle.png/348px-Empty_Wine_Bottle.png.webp",
    "description": "The Empty Wine Bottle wasn't always empty.",
    "maxStackSize": 5,
    "weight": 0.2,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Commercial,Residential"
  },
  {
    "id": 62,
    "name": "Exodus Modules",
    "category": "Topside Material",
    "sellPrice": 2750,
    "rarity": "Epic",
    "recyclesTo": [
      {
        "id": 127,
        "amount": 2
      },
      {
        "id": 96,
        "amount": 2
      }
    ],
    "salvagesTo": [
      {
        "id": 127,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/1/1b/Exodus_Modules.png/348px-Exodus_Modules.png.webp",
    "description": "Exodus Modules are an epic item used to craft items and can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 1,
    "sources": [
      {
        "type": "Recycling"
      },
      {
        "type": "Scavenging"
      },
      {
        "type": "Sold",
        "traderId": 1
      }
    ],
    "canBeFoundIn": "Exodus"
  },
  {
    "id": 63,
    "name": "Expired Pasta",
    "category": "Trinket",
    "sellPrice": 1000,
    "rarity": "Common",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/9/91/Expired_Pasta.png/348px-Expired_Pasta.png.webp",
    "description": "Expired Pasta shouldn't be consumed, but can be in a pinch for some healing.",
    "maxStackSize": 15,
    "weight": 0.1,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Commercial,Residential",
    "meta": {
      "healing": 15,
      "use time": 1
    }
  },
  {
    "id": 64,
    "name": "Expired Respirator",
    "category": "Recyclable",
    "sellPrice": 640,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 145,
        "amount": 8
      },
      {
        "id": 66,
        "amount": 4
      }
    ],
    "salvagesTo": [
      {
        "id": 145,
        "amount": 5
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/b/ba/Expired_Respirator.png/348px-Expired_Respirator.png.webp",
    "description": "Expired Respirator is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 2,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Medical"
  },
  {
    "id": 65,
    "name": "Explosive Compound",
    "category": "Refined Material",
    "sellPrice": 1000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 42,
        "amount": 2
      }
    ],
    "salvagesTo": [
      {
        "id": 42,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/1/11/Explosive_Compound.png/348px-Explosive_Compound.png.webp",
    "description": "Explosive Compound is a rare item used to craft explosives and can be recycled into crafting materials.",
    "maxStackSize": 5,
    "weight": 0.3,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "canBeFoundIn": "Industrial,Security",
    "crafting": [
      {
        "amount": 1,
        "workstation": "Refiner",
        "workstationLevel": 2,
        "items": [
          {
            "id": 42,
            "amount": 2
          },
          {
            "id": 113,
            "amount": 2
          }
        ]
      }
    ]
  },
  {
    "id": 66,
    "name": "Fabric",
    "category": "Basic Material",
    "sellPrice": 50,
    "rarity": "Common",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/2/2b/Fabric.png/348px-Fabric.png.webp",
    "description": "Fabric is a common item that can be used to craft various medical items. It can also be used on its own to restore a small amount of health over time.",
    "maxStackSize": 50,
    "weight": 0.1,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Recycling"
      },
      {
        "type": "Sold",
        "traderId": 1
      }
    ],
    "canBeFoundIn": "Commercial,Residential,Medical",
    "meta": {
      "healing": 0.4,
      "use time": 1,
      "duration": 25
    }
  },
  {
    "id": 67,
    "name": "Faded Photograph",
    "category": "Trinket",
    "sellPrice": 640,
    "rarity": "Common",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/0/0c/Faded_Photograph.png",
    "description": "The Faded Photograph contains an image lost to the sands of time and literal sand. I mean really, who leaves a picture with no glass covering it out in Buried City of all places.",
    "maxStackSize": 15,
    "weight": 0.3,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Residential"
  },
  {
    "id": 68,
    "name": "Fertilizer",
    "category": "Nature",
    "sellPrice": 1000,
    "rarity": "Uncommon",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/2/25/Fertilizer.png/348px-Fertilizer.png.webp",
    "description": "Fertilizer is just special dirt, change my mind.",
    "maxStackSize": 5,
    "weight": 0.4,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Nature"
  },
  {
    "id": 69,
    "name": "Film Reel",
    "category": "Trinket",
    "sellPrice": 2000,
    "rarity": "Rare",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/4/44/Film_Reel.png/348px-Film_Reel.png.webp",
    "description": "I remember back when you could watch things on Film Reel but now they've been erased by the sun's rays.",
    "maxStackSize": 3,
    "weight": 0.2,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Residential,Old World"
  },
  {
    "id": 70,
    "name": "Fine Wristwatch",
    "category": "Trinket",
    "sellPrice": 3000,
    "rarity": "Rare",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/9/94/Fine_Wristwatch.png",
    "description": "The Fine Wristwatch is from a more civilized era.",
    "maxStackSize": 3,
    "weight": 0.2,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Commercial,Residential"
  },
  {
    "id": 71,
    "name": "Fireball Burner",
    "category": "Recyclable",
    "sellPrice": 640,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 35,
        "amount": 1
      },
      {
        "id": 10,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 10,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/8/8b/Fireball_Burner.png/348px-Fireball_Burner.png.webp",
    "description": "The Fireball Burner is an uncommon item dropped by Fireballs that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 0.5,
    "canBeFoundIn": "ARC",
    "meta": {
      "damage": 5,
      "duration": 10,
      "radius": 2
    }
  },
  {
    "id": 72,
    "name": "Flow Controller",
    "category": "Recyclable",
    "sellPrice": 3000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 158,
        "amount": 1
      },
      {
        "id": 3,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 100,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/b/b6/Flow_Controller.png/348px-Flow_Controller.png.webp",
    "maxStackSize": 3,
    "weight": 1.5,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Exodus"
  },
  {
    "id": 73,
    "name": "Frequency Modulation Box",
    "category": "Recyclable",
    "sellPrice": 3000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 165,
        "amount": 1
      },
      {
        "id": 2,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 60,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/3/36/Frequency_Modulation_Box.png/348px-Frequency_Modulation_Box.png.webp",
    "description": "Frequency Modulation Box is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 1.5,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Exodus"
  },
  {
    "id": 74,
    "name": "Fried Motherboard",
    "category": "Recyclable",
    "sellPrice": 2000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 60,
        "amount": 2
      },
      {
        "id": 116,
        "amount": 5
      }
    ],
    "salvagesTo": [
      {
        "id": 192,
        "amount": 5
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/2/29/Fried_Motherboard.png/348px-Fried_Motherboard.png.webp",
    "description": "The Fried Motherboard is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 3,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Technological"
  },
  {
    "id": 75,
    "name": "Frying Pan",
    "category": "Recyclable",
    "sellPrice": 640,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 103,
        "amount": 8
      }
    ],
    "salvagesTo": [
      {
        "id": 103,
        "amount": 4
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/7/74/Frying_Pan.png/348px-Frying_Pan.png.webp",
    "description": "The Frying Pan is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 2,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Residential"
  },
  {
    "id": 76,
    "name": "Garlic Press",
    "category": "Recyclable",
    "sellPrice": 1000,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 103,
        "amount": 12
      }
    ],
    "salvagesTo": [
      {
        "id": 103,
        "amount": 7
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/8/88/Garlic_Press.png/348px-Garlic_Press.png.webp",
    "description": "The Garlic Press is an uncommon item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 0.8,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Commercial,Residential"
  },
  {
    "id": 77,
    "name": "Geiger Counter",
    "category": "Recyclable",
    "sellPrice": 3500,
    "rarity": "Epic",
    "recyclesTo": [
      {
        "id": 21,
        "amount": 3
      },
      {
        "id": 62,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 21,
        "amount": 3
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/3/37/Geiger_Counter.png/348px-Geiger_Counter.png.webp",
    "description": "Geiger Counter is an epic item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 1.5,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Exodus"
  },
  {
    "id": 78,
    "name": "Great Mullein",
    "category": "Topside Material",
    "sellPrice": 300,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 19,
        "amount": 2
      }
    ],
    "salvagesTo": [
      {
        "id": 19,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/0/0d/Great_Mullein.png/348px-Great_Mullein.png.webp",
    "description": "The Great Mullein is an uncommon item that is used for medical supplies and can be recycled into Assorted Seeds.",
    "maxStackSize": 15,
    "weight": 0.25,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Recycling"
      },
      {
        "type": "Sold",
        "traderId": 1
      }
    ],
    "canBeFoundIn": "Nature"
  },
  {
    "id": 79,
    "name": "Headphones",
    "category": "Recyclable",
    "sellPrice": 1000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 145,
        "amount": 7
      },
      {
        "id": 165,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 165,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/0/0f/Headphones.png/348px-Headphones.png.webp",
    "description": "Headphones are a rare item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 2,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Commercial,Residential"
  },
  {
    "id": 80,
    "name": "Heavy Gun Parts",
    "category": "Topside Material",
    "sellPrice": 700,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 163,
        "amount": 2
      }
    ],
    "salvagesTo": [
      {
        "id": 163,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/3/33/Heavy_Gun_Parts.png/348px-Heavy_Gun_Parts.png.webp",
    "description": "Heavy Gun Parts are used to upgrade, craft, and repair weapons that shoot heavy ammo and shotgun ammo.",
    "maxStackSize": 5,
    "weight": 0.5,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Recycling"
      },
      {
        "type": "Sold",
        "traderId": 1
      }
    ],
    "canBeFoundIn": "Raider,Security",
    "crafting": [
      {
        "amount": 1,
        "workstation": "Refiner",
        "workstationLevel": 2,
        "items": [
          {
            "id": 163,
            "amount": 4
          }
        ]
      }
    ]
  },
  {
    "id": 81,
    "name": "Hornet Driver",
    "category": "Recyclable",
    "sellPrice": 2000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 60,
        "amount": 2
      },
      {
        "id": 10,
        "amount": 2
      }
    ],
    "salvagesTo": [
      {
        "id": 60,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/b/bb/Hornet_Driver.png/348px-Hornet_Driver.png.webp",
    "description": "The Hornet Driver is a rare item is dropped by Hornets that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 0.75,
    "canBeFoundIn": "ARC",
    "meta": {
      "arc stun": 10,
      "raider stun": 0.5,
      "radius": 6
    }
  },
  {
    "id": 82,
    "name": "Household Cleaner",
    "category": "Recyclable",
    "sellPrice": 640,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 35,
        "amount": 11
      }
    ],
    "salvagesTo": [
      {
        "id": 35,
        "amount": 5
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/3/36/Household_Cleaner.png/348px-Household_Cleaner.png.webp",
    "description": "Household Cleaner is an uncommon item that can be recycled into crafting materials.",
    "maxStackSize": 5,
    "weight": 0.8,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Residential"
  },
  {
    "id": 83,
    "name": "Humidifier",
    "category": "Recyclable",
    "sellPrice": 1000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 33,
        "amount": 2
      },
      {
        "id": 192,
        "amount": 2
      }
    ],
    "salvagesTo": [
      {
        "id": 33,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/4/4b/Humidifier.png/348px-Humidifier.png.webp",
    "description": "The Humidifier is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 2,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Residential"
  },
  {
    "id": 84,
    "name": "Ice Cream Scooper",
    "category": "Recyclable",
    "sellPrice": 640,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 103,
        "amount": 7
      }
    ],
    "salvagesTo": [
      {
        "id": 103,
        "amount": 3
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/c/c9/Ice_Cream_Scooper.png/348px-Ice_Cream_Scooper.png.webp",
    "description": "The Ice Cream Scooper is an uncommon item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 0.8,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Commercial"
  },
  {
    "id": 85,
    "name": "Impure ARC Coolant",
    "category": "Recyclable",
    "sellPrice": 640,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 35,
        "amount": 12
      }
    ],
    "salvagesTo": [
      {
        "name": "?",
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/a/a0/Impure_ARC_Coolant.png/348px-Impure_ARC_Coolant.png.webp",
    "description": "Impure ARC Coolant is an uncommon item that can found on destroyed ARC and can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 1,
    "canBeFoundIn": "ARC"
  },
  {
    "id": 86,
    "name": "Industrial Battery",
    "category": "Recyclable",
    "sellPrice": 1000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 35,
        "amount": 7
      },
      {
        "id": 21,
        "amount": 2
      }
    ],
    "salvagesTo": [
      {
        "id": 21,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/c/c9/Industrial_Battery.png/348px-Industrial_Battery.png.webp",
    "description": "The Industrial Battery is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 2,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Industrial"
  },
  {
    "id": 87,
    "name": "Industrial Charger",
    "category": "Recyclable",
    "sellPrice": 1000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 188,
        "amount": 1
      },
      {
        "id": 103,
        "amount": 5
      }
    ],
    "salvagesTo": [
      {
        "id": 188,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/6/66/Industrial_Charger.png/348px-Industrial_Charger.png.webp",
    "description": "The Industrial Charger is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 2,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Industrial"
  },
  {
    "id": 88,
    "name": "Industrial Magnet",
    "category": "Recyclable",
    "sellPrice": 1000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 103,
        "amount": 4
      },
      {
        "id": 96,
        "amount": 2
      }
    ],
    "salvagesTo": [
      {
        "id": 96,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/3/38/Industrial_Magnet.png/348px-Industrial_Magnet.png.webp",
    "description": "The Industrial Magnet is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 2,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Industrial"
  },
  {
    "id": 89,
    "name": "Ion Sputter",
    "category": "Recyclable",
    "sellPrice": 6000,
    "rarity": "Epic",
    "recyclesTo": [
      {
        "id": 62,
        "amount": 1
      },
      {
        "id": 188,
        "amount": 4
      }
    ],
    "salvagesTo": [
      {
        "id": 62,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/e/e7/Ion_Sputter.png/348px-Ion_Sputter.png.webp",
    "description": "The Ion Sputter is an epic item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 1.5,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Exodus"
  },
  {
    "id": 90,
    "name": "Laboratory Reagents",
    "category": "Recyclable",
    "sellPrice": 2000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 35,
        "amount": 16
      },
      {
        "id": 42,
        "amount": 3
      }
    ],
    "salvagesTo": [
      {
        "id": 42,
        "amount": 3
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/e/e5/Laboratory_Reagents.png/348px-Laboratory_Reagents.png.webp",
    "description": "Laboratory Reagents are a rare item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 3,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Medical"
  },
  {
    "id": 91,
    "name": "Lance's Mixtape (5th Edition)",
    "category": "Trinket",
    "sellPrice": 10000,
    "rarity": "Epic",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/1/15/Lance%27s_Mixtape_%285th_Edition%29.png/348px-Lance%27s_Mixtape_%285th_Edition%29.png.webp",
    "description": "Lance's Mixtape (5th Edition) has some great tunes, other Raiders are envious of those who find them.",
    "maxStackSize": 3,
    "weight": 0.2,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Residential,Commercial"
  },
  {
    "id": 92,
    "name": "Leaper Pulse Unit",
    "category": "Recyclable",
    "sellPrice": 5000,
    "rarity": "Epic",
    "recyclesTo": [
      {
        "id": 10,
        "amount": 3
      },
      {
        "id": 3,
        "amount": 2
      }
    ],
    "salvagesTo": [
      {
        "id": 100,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/a/a0/Leaper_Pulse_Unit.png/348px-Leaper_Pulse_Unit.png.webp",
    "description": "The Leaper Pulse Unit is an epic item found on Leapers that can be thrown to create a small violent singularity or recycled for crafting materials.",
    "maxStackSize": 3,
    "weight": 1,
    "canBeFoundIn": "ARC",
    "meta": {
      "damage": 100,
      "radius": 10
    }
  },
  {
    "id": 93,
    "name": "Lemon",
    "category": "Nature",
    "sellPrice": 640,
    "rarity": "Uncommon",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/3/35/Lemon.png/348px-Lemon.png.webp",
    "description": "A Lemon can be consumed for a small burst of energy.",
    "maxStackSize": 10,
    "weight": 0.2,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Nature",
    "meta": {
      "stamina": 20,
      "use time": 1
    }
  },
  {
    "id": 94,
    "name": "Light Gun Parts",
    "category": "Topside Material",
    "sellPrice": 700,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 163,
        "amount": 2
      }
    ],
    "salvagesTo": [
      {
        "id": 163,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/c/c9/Light_Gun_Parts.png/348px-Light_Gun_Parts.png.webp",
    "description": "Light Gun Parts are used to upgrade, craft, and repair weapons that use light ammo.",
    "maxStackSize": 5,
    "weight": 0.3,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Recycling"
      },
      {
        "type": "Sold",
        "traderId": 1
      }
    ],
    "canBeFoundIn": "Security,Raider",
    "crafting": [
      {
        "amount": 1,
        "workstation": "Refiner",
        "workstationLevel": 2,
        "items": [
          {
            "id": 163,
            "amount": 4
          }
        ]
      }
    ]
  },
  {
    "id": 95,
    "name": "Light Bulb",
    "category": "Trinket",
    "sellPrice": 2000,
    "rarity": "Uncommon",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/2/2c/Light_Bulb.png/348px-Light_Bulb.png.webp",
    "description": "People sure love to see whilst underground, good thing we get illumination from these Light Bulbs.",
    "maxStackSize": 3,
    "weight": 0.2,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Electrical"
  },
  {
    "id": 96,
    "name": "Magnet",
    "category": "Topside Material",
    "sellPrice": 300,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 103,
        "amount": 3
      }
    ],
    "salvagesTo": [
      {
        "id": 103,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/8/8c/Magnet.png/348px-Magnet.png.webp",
    "description": "The Magnet is an uncommon item that can be recycled into crafting materials.",
    "maxStackSize": 15,
    "weight": 0.25,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Sold",
        "traderId": 1
      }
    ],
    "canBeFoundIn": "Exodus"
  },
  {
    "id": 97,
    "name": "Magnetic Accelerator",
    "category": "Refined Material",
    "sellPrice": 5500,
    "rarity": "Epic",
    "recyclesTo": [
      {
        "id": 14,
        "amount": 1
      },
      {
        "id": 3,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 3,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/5/5e/Magnetic_Accelerator.png/348px-Magnetic_Accelerator.png.webp",
    "description": "The Magnetic Accelerator is an epic item used to craft advanced weapons and can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 1,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Recycling"
      }
    ],
    "canBeFoundIn": "Exodus",
    "crafting": [
      {
        "amount": 1,
        "workstation": "Refiner",
        "workstationLevel": 3,
        "items": [
          {
            "id": 3,
            "amount": 2
          },
          {
            "id": 14,
            "amount": 2
          }
        ]
      }
    ]
  },
  {
    "id": 98,
    "name": "Magnetron",
    "category": "Recyclable",
    "sellPrice": 6000,
    "rarity": "Epic",
    "recyclesTo": [
      {
        "id": 97,
        "amount": 1
      },
      {
        "id": 171,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 3,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/a/a2/Magnetron.png/348px-Magnetron.png.webp",
    "description": "Magnetron is an epic item that can be recycled into crafting materials",
    "maxStackSize": 3,
    "weight": 1.5,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Exodus"
  },
  {
    "id": 99,
    "name": "Matriarch Reactor",
    "category": "Recyclable",
    "sellPrice": 13000,
    "rarity": "Legendary",
    "recyclesTo": [
      {
        "id": 125,
        "amount": 1
      },
      {
        "id": 97,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 125,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/2/24/Matriarch_Reactor.png/348px-Matriarch_Reactor.png.webp",
    "description": "The Matriarch Reactor is a legendary item only acquired by defeating the Matriarch that can be recycled into crafting materials or used to craft Aphelion.",
    "maxStackSize": 1,
    "weight": 10,
    "canBeFoundIn": "ARC"
  },
  {
    "id": 100,
    "name": "Mechanical Components",
    "category": "Refined Material",
    "sellPrice": 640,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 145,
        "amount": 2
      },
      {
        "id": 103,
        "amount": 3
      }
    ],
    "salvagesTo": [
      {
        "id": 103,
        "amount": 3
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/9/94/Mechanical_Components.png/348px-Mechanical_Components.png.webp",
    "description": "Mechanical Components are an uncommon item used to craft, repair, and upgrade weapons that can also be recycled into crafting materials.",
    "maxStackSize": 10,
    "weight": 0.8,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Recycling"
      }
    ],
    "canBeFoundIn": "Mechanical",
    "crafting": [
      {
        "amount": 1,
        "workstation": "Refiner",
        "workstationLevel": 1,
        "items": [
          {
            "id": 103,
            "amount": 7
          },
          {
            "id": 145,
            "amount": 3
          }
        ]
      }
    ]
  },
  {
    "id": 101,
    "name": "Medium Gun Parts",
    "category": "Topside Material",
    "sellPrice": 700,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 163,
        "amount": 2
      }
    ],
    "salvagesTo": [
      {
        "id": 163,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/9/9a/Medium_Gun_Parts.png/348px-Medium_Gun_Parts.png.webp",
    "description": "Medium Gun Parts are used to upgrade, craft, and repair weapons that use medium ammo.",
    "maxStackSize": 5,
    "weight": 0.4,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Recycling"
      },
      {
        "type": "Sold",
        "traderId": 1
      }
    ],
    "canBeFoundIn": "Raider,Security",
    "crafting": [
      {
        "amount": 1,
        "workstation": "Refiner",
        "workstationLevel": 2,
        "items": [
          {
            "id": 163,
            "amount": 4
          }
        ]
      }
    ]
  },
  {
    "id": 102,
    "name": "Metal Brackets",
    "category": "Recyclable",
    "sellPrice": 640,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 103,
        "amount": 8
      }
    ],
    "salvagesTo": [
      {
        "id": 103,
        "amount": 4
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/6/62/Metal_Brackets.png/348px-Metal_Brackets.png.webp",
    "description": "Metal Brackets an uncommon item that can be recycled into crafting materials.",
    "maxStackSize": 5,
    "weight": 0.8,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Mechanical,Electrical"
  },
  {
    "id": 103,
    "name": "Metal Parts",
    "category": "Basic Material",
    "sellPrice": 75,
    "rarity": "Common",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/8/89/Metal_Parts.png/348px-Metal_Parts.png.webp",
    "description": "Metal Parts a common item used to craft all sorts of refined materials, weapons, and gadgets your Raider needs to survive while Topside.",
    "maxStackSize": 50,
    "weight": 0.1,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Recycling"
      },
      {
        "type": "Sold",
        "traderId": 1
      }
    ],
    "canBeFoundIn": "Mechanical,Industrial,Electrical,Technological"
  },
  {
    "id": 104,
    "name": "Microscope",
    "category": "Recyclable",
    "sellPrice": 3000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 96,
        "amount": 3
      },
      {
        "id": 3,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 100,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/2/2c/Microscope.png/348px-Microscope.png.webp",
    "description": "The Microscope is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 1.5,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Exodus"
  },
  {
    "id": 105,
    "name": "Mini Centrifuge",
    "category": "Recyclable",
    "sellPrice": 3000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 33,
        "amount": 2
      },
      {
        "id": 3,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 100,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/9/9f/Mini_Centrifuge.png/348px-Mini_Centrifuge.png.webp",
    "description": "The Mini Centrifuge is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 3,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Exodus"
  },
  {
    "id": 106,
    "name": "Mod Components",
    "category": "Advanced Material",
    "sellPrice": 1750,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 171,
        "amount": 1
      },
      {
        "id": 100,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 100,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/0/0f/Mod_Components.png/348px-Mod_Components.png.webp",
    "description": "Mod Components are a rare item that is used to craft weapon mods or can be recycled into crafting materials.",
    "maxStackSize": 5,
    "weight": 1,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Recycling"
      },
      {
        "type": "Crafting"
      }
    ],
    "canBeFoundIn": "Security",
    "crafting": [
      {
        "amount": 1,
        "workstation": "Refiner",
        "workstationLevel": 2,
        "items": [
          {
            "id": 171,
            "amount": 2
          },
          {
            "id": 100,
            "amount": 2
          }
        ]
      }
    ]
  },
  {
    "id": 107,
    "name": "Moss",
    "category": "Topside Material",
    "sellPrice": 500,
    "rarity": "Rare",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/6/64/Moss.png/348px-Moss.png.webp",
    "description": "Moss is a rare item that can be recycled into crafting materials or consumed for some health in a pinch.",
    "maxStackSize": 10,
    "weight": 0.3,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Sold",
        "traderId": 1
      }
    ],
    "canBeFoundIn": "Nature",
    "meta": {
      "healing": 1,
      "use time": 1,
      "duration": 10
    }
  },
  {
    "id": 108,
    "name": "Motor",
    "category": "Recyclable",
    "sellPrice": 2000,
    "rarity": "Rare",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/0/0f/Motor.png/348px-Motor.png.webp",
    "description": "The Motor is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 3,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Mechanical"
  },
  {
    "id": 109,
    "name": "Mushroom",
    "category": "Nature",
    "sellPrice": 1000,
    "rarity": "Uncommon",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/8/8c/Mushroom.png/348px-Mushroom.png.webp",
    "description": "A Mushroom can be consumed by your Raider to gain health in a pinch. In the nature they can be found attached to trees, growing on pipes, standing on their own, or in Wicker Baskets.",
    "maxStackSize": 10,
    "weight": 0.2,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Nature",
    "meta": {
      "healing": 15,
      "use time": 1
    }
  },
  {
    "id": 110,
    "name": "Music Box",
    "category": "Trinket",
    "sellPrice": 5000,
    "rarity": "Rare",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/7/74/Music_Box.png/348px-Music_Box.png.webp",
    "description": "Sometimes the Music Box still works, even after all these years.",
    "maxStackSize": 3,
    "weight": 0.4,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Old World,Commercial,Residential"
  },
  {
    "id": 111,
    "name": "Music Album",
    "category": "Trinket",
    "sellPrice": 3000,
    "rarity": "Rare",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/9/90/Music_Album.png/348px-Music_Album.png.webp",
    "description": "The Music Album is a must have when relaxing after a stressful day Topside.",
    "maxStackSize": 3,
    "weight": 0.3,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Residential,Commercial"
  },
  {
    "id": 112,
    "name": "Number Plate",
    "category": "Recyclable",
    "sellPrice": 270,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 103,
        "amount": 3
      }
    ],
    "salvagesTo": [
      {
        "id": 103,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/5/51/Number_Plate.png/348px-Number_Plate.png.webp",
    "description": "The Number Plate is an uncommon item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 0.8,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Mechanical"
  },
  {
    "id": 113,
    "name": "Oil",
    "category": "Topside Material",
    "sellPrice": 300,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 35,
        "amount": 3
      }
    ],
    "salvagesTo": [
      {
        "id": 35,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/0/06/Oil.png/348px-Oil.png.webp",
    "description": "Oil is an uncommon item used for explosives that can be recycled into crafting materials.",
    "maxStackSize": 15,
    "weight": 0.25,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Recycling"
      },
      {
        "type": "Sold",
        "traderId": 1
      }
    ],
    "canBeFoundIn": "Mechanical"
  },
  {
    "id": 114,
    "name": "Olives",
    "category": "Nature",
    "sellPrice": 640,
    "rarity": "Uncommon",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/f/f3/Olives.png/348px-Olives.png.webp",
    "description": "Olives can be consumed for a small burst of energy.",
    "maxStackSize": 10,
    "weight": 0.2,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Nature",
    "meta": {
      "stamina": 20,
      "use time": 1
    }
  },
  {
    "id": 115,
    "name": "Painted Box",
    "category": "Trinket",
    "sellPrice": 2000,
    "rarity": "Common",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/5/53/Painted_Box.png/348px-Painted_Box.png.webp",
    "description": "No idea why anyone wants a Painted Box of all things, but they're paying me for it so I don't care.",
    "maxStackSize": 3,
    "weight": 0.3,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Old World"
  },
  {
    "id": 116,
    "name": "Plastic Parts",
    "category": "Basic Material",
    "sellPrice": 60,
    "rarity": "Common",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/c/c9/Plastic_Parts.png/348px-Plastic_Parts.png.webp",
    "description": "Plastic Parts are a common item used to craft a wide range of items you'll use while Topside.",
    "maxStackSize": 50,
    "weight": 0.1,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Recycling"
      },
      {
        "type": "Sold",
        "traderId": 1
      }
    ],
    "canBeFoundIn": "Technological,Commercial,Residential"
  },
  {
    "id": 117,
    "name": "Playing Cards",
    "category": "Trinket",
    "sellPrice": 5000,
    "rarity": "Rare",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/e/e2/Playing_Cards.png/348px-Playing_Cards.png.webp",
    "description": "These Playing Cards a great to for Go-Fish!",
    "maxStackSize": 3,
    "weight": 0.2,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Commercial,Residential"
  },
  {
    "id": 118,
    "name": "Pottery",
    "category": "Trinket",
    "sellPrice": 2000,
    "rarity": "Uncommon",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/c/c0/Pottery.png/348px-Pottery.png.webp",
    "description": "Careful with the Pottery, it's very fragile.",
    "maxStackSize": 3,
    "weight": 0.3,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Old World,Residential"
  },
  {
    "id": 119,
    "name": "Polluted Air Filter",
    "category": "Recyclable",
    "sellPrice": 1000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 66,
        "amount": 6
      },
      {
        "id": 113,
        "amount": 2
      }
    ],
    "salvagesTo": [
      {
        "id": 113,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/6/6e/Polluted_Air_Filter.png/348px-Polluted_Air_Filter.png.webp",
    "description": "The Polluted Air Filter is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 0.8,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Industrial"
  },
  {
    "id": 120,
    "name": "Pop Trigger",
    "category": "Recyclable",
    "sellPrice": 640,
    "rarity": "Common",
    "recyclesTo": [
      {
        "id": 42,
        "amount": 1
      },
      {
        "id": 10,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 42,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/c/c6/Pop_Trigger.png/348px-Pop_Trigger.png.webp",
    "description": "The Pop Trigger is a common item acquired from Pops that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 0.5,
    "canBeFoundIn": "ARC"
  },
  {
    "id": 121,
    "name": "Portable TV",
    "category": "Recyclable",
    "sellPrice": 2000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 21,
        "amount": 2
      },
      {
        "id": 192,
        "amount": 6
      }
    ],
    "salvagesTo": [
      {
        "id": 192,
        "amount": 4
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/5/5f/Portable_TV.png/348px-Portable_TV.png.webp",
    "description": "The Portable TV is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 1,
    "weight": 3,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Residential"
  },
  {
    "id": 122,
    "name": "Poster Of Natural Wonders",
    "category": "Trinket",
    "sellPrice": 2000,
    "rarity": "Uncommon",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/f/f2/Poster_of_Natural_Wonders.png/348px-Poster_of_Natural_Wonders.png.webp",
    "description": "Staring at a Poster Of Natural Wonders makes you wish the ARC never came.",
    "maxStackSize": 3,
    "weight": 0.3,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Commercial,Residential"
  },
  {
    "id": 123,
    "name": "Power Bank",
    "category": "Recyclable",
    "sellPrice": 1000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 21,
        "amount": 2
      },
      {
        "id": 192,
        "amount": 2
      }
    ],
    "salvagesTo": [
      {
        "id": 21,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/7/77/Power_Bank.png/348px-Power_Bank.png.webp",
    "description": "The Power Bank is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 2,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Electrical,Commercial,Residential"
  },
  {
    "id": 124,
    "name": "Power Cable",
    "category": "Recyclable",
    "sellPrice": 1000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 192,
        "amount": 4
      }
    ],
    "salvagesTo": [
      {
        "id": 192,
        "amount": 3
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/f/f8/Power_Cable.png/348px-Power_Cable.png.webp",
    "description": "The Power Cable is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 2,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Electrical,Commercial,Residential"
  },
  {
    "id": 125,
    "name": "Power Rod",
    "category": "Advanced Material",
    "sellPrice": 5000,
    "rarity": "Epic",
    "recyclesTo": [
      {
        "id": 11,
        "amount": 1
      },
      {
        "id": 2,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 2,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/3/31/Power_Rod.png/348px-Power_Rod.png.webp",
    "description": "The Power Rod is an epic item used in crafting that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 1,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Recycling"
      }
    ],
    "canBeFoundIn": "Exodus",
    "crafting": [
      {
        "amount": 1,
        "workstation": "Refiner",
        "workstationLevel": 3,
        "items": [
          {
            "id": 2,
            "amount": 2
          },
          {
            "id": 11,
            "amount": 2
          }
        ]
      }
    ]
  },
  {
    "id": 126,
    "name": "Prickly Pear",
    "category": "Nature",
    "sellPrice": 640,
    "rarity": "Common",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/8/80/Prickly_Pear.png/348px-Prickly_Pear.png.webp",
    "description": "The Prickly Pear can be consumed for a small burst of energy.",
    "maxStackSize": 10,
    "weight": 0.2,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Nature",
    "meta": {
      "stamina": 20,
      "use time": 1
    }
  },
  {
    "id": 127,
    "name": "Processor",
    "category": "Topside Material",
    "sellPrice": 500,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 116,
        "amount": 1
      },
      {
        "id": 192,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 116,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/4/4e/Processor.png/348px-Processor.png.webp",
    "description": "The Processor is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 5,
    "weight": 0.2,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Recycling"
      },
      {
        "type": "Sold",
        "traderId": 1
      }
    ],
    "canBeFoundIn": "Technological"
  },
  {
    "id": 128,
    "name": "Projector",
    "category": "Recyclable",
    "sellPrice": 1000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 127,
        "amount": 1
      },
      {
        "id": 192,
        "amount": 2
      }
    ],
    "salvagesTo": [
      {
        "id": 127,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/0/04/Projector.png/348px-Projector.png.webp",
    "description": "The Projector is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 2,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Residential"
  },
  {
    "id": 129,
    "name": "Queen Reactor",
    "category": "Recyclable",
    "sellPrice": 13000,
    "rarity": "Legendary",
    "recyclesTo": [
      {
        "id": 125,
        "amount": 1
      },
      {
        "id": 97,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 125,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/6/6b/Queen_Reactor.png/348px-Queen_Reactor.png.webp",
    "description": "The Queen Reactor is a legendary item acquired by defeating The Queen that can be recycled into crafting materials. Note that it is possible to obtain without killing The Queen as the reactors can spawn in destroyed leg armor segments.",
    "maxStackSize": 1,
    "weight": 10,
    "canBeFoundIn": "ARC"
  },
  {
    "id": 130,
    "name": "Radio",
    "category": "Recyclable",
    "sellPrice": 1000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 165,
        "amount": 1
      },
      {
        "id": 158,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 165,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/3/31/Radio.png/348px-Radio.png.webp",
    "description": "The Radio is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 2,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Commercial,Residential"
  },
  {
    "id": 131,
    "name": "Radio Relay",
    "category": "Recyclable",
    "sellPrice": 3000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 165,
        "amount": 2
      },
      {
        "id": 158,
        "amount": 2
      }
    ],
    "salvagesTo": [
      {
        "id": 158,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/b/b6/Radio_Relay.png/348px-Radio_Relay.png.webp",
    "description": "Radio Relay is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 1.5,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Exodus"
  },
  {
    "id": 132,
    "name": "Resin",
    "category": "Nature",
    "sellPrice": 1000,
    "rarity": "Common",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/2/2c/Resin.png/348px-Resin.png.webp",
    "description": "Resin is a common Healing item that can be consumed to gradually restore a small amount of health over time.",
    "maxStackSize": 10,
    "weight": 0.4,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Nature",
    "meta": {
      "healing": 1,
      "use time": 1,
      "duration": 10
    }
  },
  {
    "id": 133,
    "name": "Recorder",
    "category": "Quick Use",
    "sellPrice": 1000,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 116,
        "amount": 10
      }
    ],
    "salvagesTo": [
      {
        "name": "?",
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/6/6d/Recorder.png/348px-Recorder.png.webp",
    "description": "The Recorder is peak.",
    "maxStackSize": 1,
    "weight": 0.2,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Sold",
        "traderId": 0
      }
    ],
    "canBeFoundIn": "Residential"
  },
  {
    "id": 134,
    "name": "Red Coral Jewelry",
    "category": "Trinket",
    "sellPrice": 5000,
    "rarity": "Rare",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/1/1a/Red_Coral_Jewelry.png/348px-Red_Coral_Jewelry.png.webp",
    "description": "Red Coral Jewelry is very valuable and shiny, it definitely makes the other Raiders jealous on the dance floor.",
    "maxStackSize": 3,
    "weight": 0.3,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Old World,Commercial,Residential"
  },
  {
    "id": 135,
    "name": "Remote Control",
    "category": "Recyclable",
    "sellPrice": 1000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 158,
        "amount": 1
      },
      {
        "id": 116,
        "amount": 7
      }
    ],
    "salvagesTo": [
      {
        "id": 158,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/f/f4/Remote_Control.png/348px-Remote_Control.png.webp",
    "description": "The Remote Control is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 0.8,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Residential"
  },
  {
    "id": 136,
    "name": "Ripped Safety Vest",
    "category": "Recyclable",
    "sellPrice": 1000,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 59,
        "amount": 1
      },
      {
        "id": 96,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 66,
        "amount": 8
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/a/a8/Ripped_Safety_Vest.png/348px-Ripped_Safety_Vest.png.webp",
    "description": "The Ripped Safety Vest is an uncommon item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 0.8,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Industrial"
  },
  {
    "id": 137,
    "name": "Rocketeer Driver",
    "category": "Recyclable",
    "sellPrice": 5000,
    "rarity": "Epic",
    "recyclesTo": [
      {
        "id": 10,
        "amount": 3
      },
      {
        "id": 2,
        "amount": 2
      }
    ],
    "salvagesTo": [
      {
        "id": 11,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/e/ef/Rocketeer_Driver.png/348px-Rocketeer_Driver.png.webp",
    "description": "The Rocketeer Driver is an epic item found by destroying Rocketeers or searching Rocketeer Husks that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 1,
    "canBeFoundIn": "ARC"
  },
  {
    "id": 138,
    "name": "Rocket Thruster",
    "category": "Recyclable",
    "sellPrice": 2000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 103,
        "amount": 6
      },
      {
        "id": 173,
        "amount": 2
      }
    ],
    "salvagesTo": [
      {
        "id": 173,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/8/8a/Rocket_Thruster.png/348px-Rocket_Thruster.png.webp",
    "description": "The Rocket Thruster is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 3,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Exodus"
  },
  {
    "id": 139,
    "name": "Roots",
    "category": "Nature",
    "sellPrice": 640,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 19,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 19,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/5/57/Roots.png/348px-Roots.png.webp",
    "description": "Roots are an uncommon item.",
    "maxStackSize": 10,
    "weight": 0.2,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Nature"
  },
  {
    "id": 140,
    "name": "Rope",
    "category": "Topside Material",
    "sellPrice": 500,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 66,
        "amount": 5
      }
    ],
    "salvagesTo": [
      {
        "id": 66,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/b/b4/Rope.png/348px-Rope.png.webp",
    "description": "Rope is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 5,
    "weight": 0.3,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Recycling"
      },
      {
        "type": "Sold",
        "traderId": 1
      }
    ],
    "canBeFoundIn": "Commercial,Residential"
  },
  {
    "id": 141,
    "name": "Rosary",
    "category": "Trinket",
    "sellPrice": 2000,
    "rarity": "Rare",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/7/77/Rosary.png/348px-Rosary.png.webp",
    "description": "A Rosary is very valuable to those who still practice the old religions.",
    "maxStackSize": 3,
    "weight": 0.3,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Old World,Residential"
  },
  {
    "id": 142,
    "name": "Rotary Encoder",
    "category": "Recyclable",
    "sellPrice": 3000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 60,
        "amount": 2
      },
      {
        "id": 127,
        "amount": 2
      }
    ],
    "salvagesTo": [
      {
        "id": 127,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/e/e4/Rotary_Encoder.png",
    "description": "Rotary Encoder is a rare item that can be recycled into crafting materials",
    "maxStackSize": 3,
    "weight": 1.5,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Exodus"
  },
  {
    "id": 143,
    "name": "Rubber Duck",
    "category": "Trinket",
    "sellPrice": 1000,
    "rarity": "Common",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/d/df/Rubber_Duck.png/348px-Rubber_Duck.png.webp",
    "description": "MY PRECIOUS RUBBER DUCK, DON'T TOUCH MY PRECIOUS",
    "maxStackSize": 15,
    "weight": 0.3,
    "sources": [
      {
        "type": "Scavenging"
      }
    ]
  },
  {
    "id": 144,
    "name": "Rubber Pad",
    "category": "Recyclable",
    "sellPrice": 1000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 145,
        "amount": 18
      }
    ],
    "salvagesTo": [
      {
        "id": 145,
        "amount": 9
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/1/1a/Rubber_Pad.png/348px-Rubber_Pad.png.webp",
    "description": "The Rubber Pad is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 2,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Electrical"
  },
  {
    "id": 145,
    "name": "Rubber Parts",
    "category": "Basic Material",
    "sellPrice": 50,
    "rarity": "Common",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/9/93/Rubber_Parts.png/348px-Rubber_Parts.png.webp",
    "description": "Rubber Parts are a common item used to craft all sorts of doo-dads your Raider will use while Topside.",
    "maxStackSize": 50,
    "weight": 0.1,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Recycling"
      },
      {
        "type": "Sold",
        "traderId": 1
      }
    ],
    "canBeFoundIn": "Mechanical,Industrial,Electrical"
  },
  {
    "id": 146,
    "name": "Ruined Accordion",
    "category": "Recyclable",
    "sellPrice": 2000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 145,
        "amount": 18
      },
      {
        "id": 171,
        "amount": 3
      }
    ],
    "salvagesTo": [
      {
        "id": 145,
        "amount": 13
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/a/a6/Ruined_Accordion.png/348px-Ruined_Accordion.png.webp",
    "description": "The Ruined Accordion is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 3,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Residential"
  },
  {
    "id": 147,
    "name": "Ruined Baton",
    "category": "Recyclable",
    "sellPrice": 640,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 145,
        "amount": 3
      },
      {
        "id": 103,
        "amount": 6
      }
    ],
    "salvagesTo": [
      {
        "name": "?",
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/e/ee/Ruined_Baton.png/348px-Ruined_Baton.png.webp",
    "description": "Ruined Baton is an uncommon item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 0.8,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Security"
  },
  {
    "id": 148,
    "name": "Ruined Handcuffs",
    "category": "Recyclable",
    "sellPrice": 640,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 103,
        "amount": 8
      }
    ],
    "salvagesTo": [
      {
        "id": 103,
        "amount": 4
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/7/7c/Ruined_Handcuffs.png/348px-Ruined_Handcuffs.png.webp",
    "description": "The Ruined Handcuffs are an uncommon item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 0.8,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Security"
  },
  {
    "id": 149,
    "name": "Ruined Parachute",
    "category": "Recyclable",
    "sellPrice": 640,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 66,
        "amount": 10
      }
    ],
    "salvagesTo": [
      {
        "id": 66,
        "amount": 5
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/5/5c/Ruined_Parachute.png/348px-Ruined_Parachute.png.webp",
    "description": "The Ruined Parachute is an uncommon item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 0.8,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Exodus"
  },
  {
    "id": 150,
    "name": "Ruined Riot Shield",
    "category": "Recyclable",
    "sellPrice": 1000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 145,
        "amount": 6
      },
      {
        "id": 116,
        "amount": 10
      }
    ],
    "salvagesTo": [
      {
        "id": 116,
        "amount": 10
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/c/cb/Ruined_Riot_Shield.png/348px-Ruined_Riot_Shield.png.webp",
    "description": "The Ruined Riot Shield is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 2,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Security"
  },
  {
    "id": 151,
    "name": "Ruined Tactical Vest",
    "category": "Recyclable",
    "sellPrice": 640,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 66,
        "amount": 5
      },
      {
        "id": 96,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 66,
        "amount": 5
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/c/c2/Ruined_Tactical_Vest.png/348px-Ruined_Tactical_Vest.png.webp",
    "description": "The Ruined Tactical Vest is an uncommon item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 0.8,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Security"
  },
  {
    "id": 152,
    "name": "Rusted Bolts",
    "category": "Recyclable",
    "sellPrice": 640,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 103,
        "amount": 8
      }
    ],
    "salvagesTo": [
      {
        "id": 103,
        "amount": 4
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/b/bf/Rusted_Bolts.png/348px-Rusted_Bolts.png.webp",
    "description": "Rusted Bolts are an uncommon item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 0.8,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Mechanical,Industrial"
  },
  {
    "id": 153,
    "name": "Rusted Gear",
    "category": "Recyclable",
    "sellPrice": 2000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 100,
        "amount": 2
      },
      {
        "id": 103,
        "amount": 4
      }
    ],
    "salvagesTo": [
      {
        "id": 103,
        "amount": 12
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/c/cf/Rusted_Gear.png",
    "description": "The Rusted Gear is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 3,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Industrial"
  },
  {
    "id": 154,
    "name": "Rusted Shut Medical Kit",
    "category": "Recyclable",
    "sellPrice": 2000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 8,
        "amount": 1
      },
      {
        "id": 174,
        "amount": 2
      }
    ],
    "salvagesTo": [
      {
        "id": 174,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/1/1a/Rusted_Shut_Medical_Kit.png/348px-Rusted_Shut_Medical_Kit.png.webp",
    "description": "The Rusted Shut Medical Kit is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 3,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Medical"
  },
  {
    "id": 155,
    "name": "Rusted Tools",
    "category": "Recyclable",
    "sellPrice": 1000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 171,
        "amount": 1
      },
      {
        "id": 103,
        "amount": 8
      }
    ],
    "salvagesTo": [
      {
        "id": 103,
        "amount": 7
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/3/30/Rusted_Tools.png/348px-Rusted_Tools.png.webp",
    "description": "Rusted Tools is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 2,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Mechanical,Industrial"
  },
  {
    "id": 156,
    "name": "Rusty ARC Steel",
    "category": "Recyclable",
    "sellPrice": 640,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 103,
        "amount": 8
      }
    ],
    "salvagesTo": [
      {
        "id": 103,
        "amount": 3
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/3/33/Rusty_ARC_Steel.png",
    "description": "Rusty ARC Steel is an uncommon item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 1,
    "canBeFoundIn": "ARC"
  },
  {
    "id": 157,
    "name": "Sample Cleaner",
    "category": "Recyclable",
    "sellPrice": 3000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 60,
        "amount": 2
      },
      {
        "id": 19,
        "amount": 14
      }
    ],
    "salvagesTo": [
      {
        "id": 19,
        "amount": 12
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/d/d8/Sample_Cleaner.png/348px-Sample_Cleaner.png.webp",
    "description": "The Sample Cleaner is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 1.5,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Exodus"
  },
  {
    "id": 158,
    "name": "Sensors",
    "category": "Topside Material",
    "sellPrice": 500,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 103,
        "amount": 1
      },
      {
        "id": 192,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 192,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/9/9c/Sensors.png/348px-Sensors.png.webp",
    "description": "Sensors are a rare item that can be recycled into crafting materials.",
    "maxStackSize": 5,
    "weight": 0.3,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Recycling"
      },
      {
        "type": "Sold",
        "traderId": 1
      }
    ],
    "canBeFoundIn": "Technological,Security"
  },
  {
    "id": 159,
    "name": "Sentinel Firing Core",
    "category": "Recyclable",
    "sellPrice": 3000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 100,
        "amount": 3
      },
      {
        "id": 10,
        "amount": 2
      }
    ],
    "salvagesTo": [
      {
        "id": 100,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/9/91/Sentinel_Firing_Core.png/348px-Sentinel_Firing_Core.png.webp",
    "description": "The Sentinel Firing Core is a rare item that can be found by destroying Sentinels and can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 1,
    "canBeFoundIn": "ARC"
  },
  {
    "id": 160,
    "name": "Shredder Gyro",
    "category": "Recyclable",
    "sellPrice": 3000,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 10,
        "amount": 3
      },
      {
        "id": 100,
        "amount": 3
      }
    ],
    "salvagesTo": [
      {
        "id": 100,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/9/96/Shredder_Gyro.png/348px-Shredder_Gyro.png.webp",
    "description": "The Shredder Gyro is an uncommon item that can be found by destroying Shredders and can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 1,
    "canBeFoundIn": "ARC"
  },
  {
    "id": 161,
    "name": "Signal Amplifier",
    "category": "Recyclable",
    "sellPrice": 3000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 60,
        "amount": 2
      },
      {
        "id": 188,
        "amount": 2
      }
    ],
    "salvagesTo": [
      {
        "id": 188,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/d/de/Signal_Amplifier.png/348px-Signal_Amplifier.png.webp",
    "description": "The Signal Amplifier is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 1.5,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Exodus"
  },
  {
    "id": 162,
    "name": "Silver Teaspoon Set",
    "category": "Trinket",
    "sellPrice": 3000,
    "rarity": "Rare",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/9/90/Silver_Teaspoon_Set.png/348px-Silver_Teaspoon_Set.png.webp",
    "description": "A Silver Teaspoon Set sells for a pretty penny to those with refined tastes.",
    "maxStackSize": 3,
    "weight": 0.3,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Old World,Commercial,Residential"
  },
  {
    "id": 163,
    "name": "Simple Gun Parts",
    "category": "Topside Material",
    "sellPrice": 330,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 103,
        "amount": 2
      }
    ],
    "salvagesTo": [
      {
        "id": 103,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/7/77/Simple-gun-parts.png/348px-Simple-gun-parts.png.webp",
    "description": "Simple Gun Parts are an uncommon item used to upgrade, craft, and repair weapons. They are needed in most weapon recipes and can be refined into Light, Medium and Heavy Gun Parts with the appropriate blueprints.",
    "maxStackSize": 10,
    "weight": 0.3,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Recycling"
      },
      {
        "type": "Sold",
        "traderId": 1
      }
    ],
    "canBeFoundIn": "Raider,Security"
  },
  {
    "id": 164,
    "name": "Snitch Scanner",
    "category": "Recyclable",
    "sellPrice": 2000,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 60,
        "amount": 2
      },
      {
        "id": 10,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 60,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/e/e5/Snitch_Scanner.png/348px-Snitch_Scanner.png.webp",
    "description": "The Snitch Scanner is an uncommon item found by destroying Snitches that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 0.75,
    "canBeFoundIn": "ARC"
  },
  {
    "id": 165,
    "name": "Speaker Component",
    "category": "Topside Material",
    "sellPrice": 500,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 145,
        "amount": 3
      },
      {
        "id": 116,
        "amount": 2
      }
    ],
    "salvagesTo": [
      {
        "id": 116,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/e/ee/Speaker_Component.png/348px-Speaker_Component.png.webp",
    "description": "A Speaker Component is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 5,
    "weight": 0.3,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Recycling"
      },
      {
        "type": "Sold",
        "traderId": 1
      }
    ],
    "canBeFoundIn": "Commercial"
  },
  {
    "id": 166,
    "name": "Spectrometer",
    "category": "Recyclable",
    "sellPrice": 3000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 158,
        "amount": 1
      },
      {
        "id": 2,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 60,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/0/0e/Spectrometer.png/348px-Spectrometer.png.webp",
    "description": "Spectrometer is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 1.5,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Exodus"
  },
  {
    "id": 167,
    "name": "Spectrum Analyzer",
    "category": "Recyclable",
    "sellPrice": 3500,
    "rarity": "Epic",
    "recyclesTo": [
      {
        "id": 158,
        "amount": 1
      },
      {
        "id": 62,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 127,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/0/0a/Spectrum_Analyzer.png/348px-Spectrum_Analyzer.png.webp",
    "description": "The Spectrum Analyzer is an epic item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 1.5,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Exodus"
  },
  {
    "id": 168,
    "name": "Spotter Relay",
    "category": "Recyclable",
    "sellPrice": 2000,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 60,
        "amount": 2
      },
      {
        "id": 10,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "name": "?",
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/5/58/Spotter_Relay.png/348px-Spotter_Relay.png.webp",
    "description": "The Spotter Relay is an uncommon item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 1,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "ARC"
  },
  {
    "id": 169,
    "name": "Spring Cushion",
    "category": "Recyclable",
    "sellPrice": 2000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 171,
        "amount": 2
      },
      {
        "id": 59,
        "amount": 2
      }
    ],
    "salvagesTo": [
      {
        "id": 171,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/2/26/Spring_Cushion.png/348px-Spring_Cushion.png.webp",
    "description": "A Spring Cushion is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 2,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Commercial,Residential"
  },
  {
    "id": 170,
    "name": "Statuette",
    "category": "Trinket",
    "sellPrice": 3000,
    "rarity": "Rare",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/8/8a/Statuette.png/348px-Statuette.png.webp",
    "description": "Look at the adorable tiny Statuette, can you imagine trying to haul a whole statue back instead.",
    "maxStackSize": 3,
    "weight": 0.3,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Old World,Residential"
  },
  {
    "id": 171,
    "name": "Steel Spring",
    "category": "Topside Material",
    "sellPrice": 300,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 103,
        "amount": 3
      }
    ],
    "salvagesTo": [
      {
        "id": 103,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/d/db/Steel_Spring.png/348px-Steel_Spring.png.webp",
    "description": "The Steel Spring is an uncommon item used to craft weapon mods that can be recycled into crafting materials.",
    "maxStackSize": 15,
    "weight": 0.25,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Sold",
        "traderId": 1
      }
    ],
    "canBeFoundIn": "Industrial"
  },
  {
    "id": 172,
    "name": "Surveyor Vault",
    "category": "Recyclable",
    "sellPrice": 2000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 10,
        "amount": 2
      },
      {
        "id": 100,
        "amount": 2
      }
    ],
    "salvagesTo": [
      {
        "id": 100,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/a/a9/Surveyor_Vault.png/348px-Surveyor_Vault.png.webp",
    "description": "The Surveyor Vault is a rare item found by destroying Surveyors that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 1,
    "canBeFoundIn": "ARC"
  },
  {
    "id": 173,
    "name": "Synthesized Fuel",
    "category": "Topside Material",
    "sellPrice": 700,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 113,
        "amount": 1
      },
      {
        "id": 116,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 113,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/8/8e/Synthesized_Fuel.png/348px-Synthesized_Fuel.png.webp",
    "description": "Synthesized Fuel is a rare item that can be recycled into crafting materials or thrown then shot to create a small explosion.",
    "maxStackSize": 5,
    "weight": 0.5,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Sold",
        "traderId": 1
      }
    ],
    "canBeFoundIn": "Exodus",
    "meta": {
      "damage": 80,
      "radius": 7.5
    }
  },
  {
    "id": 174,
    "name": "Syringe",
    "category": "Topside Material",
    "sellPrice": 500,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 35,
        "amount": 3
      },
      {
        "id": 116,
        "amount": 2
      }
    ],
    "salvagesTo": [
      {
        "id": 116,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/1/17/Syringe.png/348px-Syringe.png.webp",
    "description": "The Syringe is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 5,
    "weight": 0.3,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Recycling"
      },
      {
        "type": "Sold",
        "traderId": 1
      }
    ],
    "canBeFoundIn": "Medical"
  },
  {
    "id": 175,
    "name": "Tattered ARC Lining",
    "category": "Recyclable",
    "sellPrice": 640,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 66,
        "amount": 12
      }
    ],
    "salvagesTo": [
      {
        "id": 66,
        "amount": 5
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/3/35/Tattered_ARC_Lining.png",
    "description": "Tattered ARC Lining is an uncommon item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 1,
    "canBeFoundIn": "ARC"
  },
  {
    "id": 176,
    "name": "Tattered Clothes",
    "category": "Recyclable",
    "sellPrice": 640,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 66,
        "amount": 11
      }
    ],
    "salvagesTo": [
      {
        "id": 66,
        "amount": 5
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/c/c4/Tattered_Clothes.png/348px-Tattered_Clothes.png.webp",
    "description": "Tattered Clothes are an uncommon item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 0.8,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Residential"
  },
  {
    "id": 177,
    "name": "Telemetry Transceiver",
    "category": "Recyclable",
    "sellPrice": 3000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 127,
        "amount": 1
      },
      {
        "id": 2,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 60,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/a/a8/Telemetry_Transceiver.png/348px-Telemetry_Transceiver.png.webp",
    "description": "Telemetry Transceiver is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 1.5,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Exodus"
  },
  {
    "id": 178,
    "name": "Thermostat",
    "category": "Recyclable",
    "sellPrice": 1000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 145,
        "amount": 7
      },
      {
        "id": 158,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 158,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/9/9a/Thermostat.png",
    "description": "A Thermostat is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 2,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Residential"
  },
  {
    "id": 179,
    "name": "Tick Pod",
    "category": "Recyclable",
    "sellPrice": 640,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 35,
        "amount": 2
      },
      {
        "id": 10,
        "amount": 2
      }
    ],
    "salvagesTo": [
      {
        "id": 10,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/9/95/Tick_Pod.png/348px-Tick_Pod.png.webp",
    "description": "A Tick Pod is an uncommon item found on Ticks that can be recycled into crafting materials.",
    "maxStackSize": 5,
    "weight": 0.25,
    "canBeFoundIn": "ARC"
  },
  {
    "id": 180,
    "name": "Toaster",
    "category": "Recyclable",
    "sellPrice": 1000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 192,
        "amount": 3
      },
      {
        "id": 116,
        "amount": 5
      }
    ],
    "salvagesTo": [
      {
        "id": 192,
        "amount": 3
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/5/50/Toaster.png/348px-Toaster.png.webp",
    "description": "The Toaster is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 2,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Residential"
  },
  {
    "id": 181,
    "name": "Torn Book",
    "category": "Trinket",
    "sellPrice": 1000,
    "rarity": "Common",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/c/cc/Torn_Book.png/348px-Torn_Book.png.webp",
    "description": "Whoever did this is a monster, how do they expect me to read a Torn Book?",
    "maxStackSize": 5,
    "weight": 0.3,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Residential,Old World"
  },
  {
    "id": 182,
    "name": "Torn Blanket",
    "category": "Recyclable",
    "sellPrice": 640,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 66,
        "amount": 12
      }
    ],
    "salvagesTo": [
      {
        "id": 66,
        "amount": 5
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/a/af/Torn_Blanket.png/348px-Torn_Blanket.png.webp",
    "description": "The Torn Blanket is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 2,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Residential,Medical"
  },
  {
    "id": 183,
    "name": "Turbo Pump",
    "category": "Recyclable",
    "sellPrice": 2000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 113,
        "amount": 3
      },
      {
        "id": 100,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 171,
        "amount": 3
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/f/f1/Turbo_Pump.png/348px-Turbo_Pump.png.webp",
    "description": "The Turbo Pump is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 3,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Exodus"
  },
  {
    "id": 184,
    "name": "Unusable Weapon",
    "category": "Recyclable",
    "sellPrice": 2000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 163,
        "amount": 5
      },
      {
        "id": 103,
        "amount": 4
      }
    ],
    "salvagesTo": [
      {
        "id": 163,
        "amount": 3
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/3/37/Unusable_Weapon.png/348px-Unusable_Weapon.png.webp",
    "description": "Unusable Weapon is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 3,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Security"
  },
  {
    "id": 185,
    "name": "Vase",
    "category": "Trinket",
    "sellPrice": 3000,
    "rarity": "Rare",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/6/6e/Vase.png/348px-Vase.png.webp",
    "description": "Careful, the Vase is super fragile.",
    "maxStackSize": 3,
    "weight": 0.3,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Old World,Commercial,Residential"
  },
  {
    "id": 186,
    "name": "Very Comfortable Pillow",
    "category": "Trinket",
    "sellPrice": 2000,
    "rarity": "Uncommon",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/a/a4/Very_Comfortable_Pillow.png/348px-Very_Comfortable_Pillow.png.webp",
    "description": "I could sleep on a Very Comfortable Pillow all day and night.",
    "maxStackSize": 3,
    "weight": 0.3,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Commercial,Residential"
  },
  {
    "id": 187,
    "name": "Volcanic Rock",
    "category": "Misc",
    "sellPrice": 270,
    "rarity": "Common",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/2/26/Volcanic_Rock.png/348px-Volcanic_Rock.png.webp",
    "description": "Careful where you throw this Volcanic Rock.",
    "maxStackSize": 5,
    "weight": 0.5,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Nature",
    "meta": {
      "damage": 10
    }
  },
  {
    "id": 188,
    "name": "Voltage Converter",
    "category": "Topside Material",
    "sellPrice": 500,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 145,
        "amount": 1
      },
      {
        "id": 192,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 145,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/9/9a/Voltage-converter.png/348px-Voltage-converter.png.webp",
    "description": "The Voltage Converter is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 5,
    "weight": 0.3,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Recycling"
      },
      {
        "type": "Sold",
        "traderId": 1
      }
    ],
    "canBeFoundIn": "Technological"
  },
  {
    "id": 189,
    "name": "Wasp Driver",
    "category": "Recyclable",
    "sellPrice": 1000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 60,
        "amount": 1
      },
      {
        "id": 10,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 60,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/3/30/Wasp_Driver.png/348px-Wasp_Driver.png.webp",
    "description": "The Wasp Driver is a rare item found by destroying Wasps that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 0.6,
    "canBeFoundIn": "ARC",
    "meta": {
      "damage": 80,
      "radius": 5
    }
  },
  {
    "id": 190,
    "name": "Water Filter",
    "category": "Recyclable",
    "sellPrice": 1000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 145,
        "amount": 2
      },
      {
        "id": 33,
        "amount": 3
      }
    ],
    "salvagesTo": [
      {
        "id": 33,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/4/48/Water_Filter.png/348px-Water_Filter.png.webp",
    "description": "The Water Filter is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 2,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Industrial"
  },
  {
    "id": 191,
    "name": "Water Pump",
    "category": "Recyclable",
    "sellPrice": 1000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 113,
        "amount": 2
      },
      {
        "id": 103,
        "amount": 4
      }
    ],
    "salvagesTo": [
      {
        "id": 113,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/2/28/Water_Pump.png/348px-Water_Pump.png.webp",
    "description": "The Water Pump is a rare item that can be recycled into crafting materials.",
    "maxStackSize": 3,
    "weight": 2,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Mechanical,Industrial"
  },
  {
    "id": 192,
    "name": "Wires",
    "category": "Topside Material",
    "sellPrice": 200,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 145,
        "amount": 3
      }
    ],
    "salvagesTo": [
      {
        "id": 145,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/3/39/Wires.png/348px-Wires.png.webp",
    "description": "Wires are an uncommon item used to craft weapon mods that can be recycled into crafting materials.",
    "maxStackSize": 15,
    "weight": 0.25,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Recycling"
      },
      {
        "type": "Sold",
        "traderId": 1
      }
    ],
    "canBeFoundIn": "Electrical,Technological"
  },
  {
    "id": 193,
    "name": "Rattler",
    "category": "Misc",
    "sellPrice": 1750,
    "rarity": "Common",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/b/be/Rattler-Level1.png/348px-Rattler-Level1.png.webp",
    "description": "The Rattler is an assault rifle which uses medium ammo.",
    "weight": 6,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gunsmith",
        "workstationLevel": 1,
        "items": [
          {
            "id": 103,
            "amount": 16
          },
          {
            "id": 145,
            "amount": 12
          }
        ]
      }
    ],
    "meta": {
      "ammo": "Medium Ammo",
      "magazine size": 10,
      "firing mode": "Fully-Automatic",
      "arc armor penetration": "Moderate",
      "damage": 9,
      "fire rate": 33.3,
      "range": 56.2,
      "stability": 72.2,
      "agility": 54.8,
      "stealth": 14
    }
  },
  {
    "id": 194,
    "name": "Medium Ammo",
    "category": "Ammunition",
    "sellPrice": 6,
    "rarity": "Common",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/0/0c/MediumAmmo_Box.png/348px-MediumAmmo_Box.png.webp",
    "description": "Medium Ammo is an ammo type used with some assault rifles and battle rifles.",
    "maxStackSize": 80,
    "weight": 0.025,
    "crafting": [
      {
        "amount": 20,
        "workstation": "Workbench",
        "workstationLevel": 1,
        "items": [
          {
            "id": 103,
            "amount": 3
          },
          {
            "id": 35,
            "amount": 2
          }
        ]
      }
    ]
  },
  {
    "id": 195,
    "name": "Tactical Mk. 1",
    "category": "Augment",
    "sellPrice": 640,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 145,
        "amount": 3
      },
      {
        "id": 116,
        "amount": 3
      }
    ],
    "salvagesTo": [
      {
        "id": 116,
        "amount": 3
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/1/18/Tactical_Mk._1.png/348px-Tactical_Mk._1.png.webp",
    "description": "Tactical Mk. 1 is an uncommon augment that provides 5 quick-use slots and allows the use of Light Shield and Medium Shield, but offers less backpack slots and a low weight limit.",
    "weight": 2,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Sold",
        "traderId": 0
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gear Bench",
        "workstationLevel": 1,
        "items": [
          {
            "id": 145,
            "amount": 6
          },
          {
            "id": 116,
            "amount": 6
          }
        ]
      }
    ],
    "meta": {
      "backpack slots": 15,
      "safe pocket slots": 1,
      "quick use slots": 5,
      "weapon slots": 2,
      "weight limit": 40,
      "shield compatibility": "Light, Medium"
    }
  },
  {
    "id": 196,
    "name": "Adrenaline Shot",
    "category": "Quick Use",
    "sellPrice": 300,
    "rarity": "Common",
    "recyclesTo": [
      {
        "id": 35,
        "amount": 1
      },
      {
        "id": 116,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 35,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/1/1b/Adrenaline_Shot.png/348px-Adrenaline_Shot.png.webp",
    "maxStackSize": 5,
    "weight": 0.2,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Sold",
        "traderId": 0
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Workshop",
        "workstationLevel": 1,
        "items": [
          {
            "name": "Blueprint",
            "amount": 1
          }
        ]
      },
      {
        "amount": 1,
        "workstation": "Medical Lab",
        "workstationLevel": 1,
        "items": [
          {
            "id": 35,
            "amount": 3
          },
          {
            "id": 116,
            "amount": 3
          }
        ]
      },
      {
        "amount": 1,
        "workstation": "Inventory",
        "workstationLevel": 1,
        "items": [
          {
            "id": 35,
            "amount": 3
          },
          {
            "id": 116,
            "amount": 3
          }
        ]
      }
    ],
    "meta": {
      "stamina": 5,
      "use time": 1,
      "duration": 10
    }
  },
  {
    "id": 197,
    "name": "Sterilized Bandage",
    "category": "Quick Use",
    "sellPrice": 2000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 66,
        "amount": 1
      },
      {
        "id": 8,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 59,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/9/99/Sterilized_Bandage.png/348px-Sterilized_Bandage.png.webp",
    "maxStackSize": 3,
    "weight": 0.2,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Sold",
        "traderId": 0
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Medical Lab",
        "workstationLevel": 2,
        "items": [
          {
            "id": 59,
            "amount": 2
          },
          {
            "id": 8,
            "amount": 1
          }
        ]
      }
    ],
    "meta": {
      "healing": 5,
      "use time": 1.5,
      "duration": 10
    }
  },
  {
    "id": 198,
    "name": "Light Shield",
    "category": "Shield",
    "sellPrice": 640,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 116,
        "amount": 4
      }
    ],
    "salvagesTo": [
      {
        "id": 10,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/4/40/Light_Shield.png/348px-Light_Shield.png.webp",
    "description": "The Light Shield is an uncommon shield which offers limited protection without impacting mobility.",
    "weight": 5,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Sold",
        "traderId": 0
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Workbench I",
        "workstationLevel": 1,
        "items": [
          {
            "id": 10,
            "amount": 2
          },
          {
            "id": 116,
            "amount": 4
          }
        ]
      },
      {
        "amount": 1,
        "workstation": "Gear Bench I",
        "workstationLevel": 1,
        "items": [
          {
            "id": 10,
            "amount": 2
          },
          {
            "id": 116,
            "amount": 4
          }
        ]
      }
    ],
    "meta": {
      "shield charge": 40,
      "damage mitigation": 40
    }
  },
  {
    "id": 199,
    "name": "Compensator I",
    "category": "Modification",
    "sellPrice": 640,
    "rarity": "Common",
    "recyclesTo": [
      {
        "id": 103,
        "amount": 5
      }
    ],
    "salvagesTo": [
      {
        "id": 103,
        "amount": 3
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/5/5f/Compensator_I.png/348px-Compensator_I.png.webp",
    "description": "Compensator I is a Common Muzzle Weapon Modification that slightly reduces per-shot dispersion.",
    "weight": 0.25,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Sold",
        "traderId": 0
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gunsmith",
        "workstationLevel": 1,
        "items": [
          {
            "id": 103,
            "amount": 6
          },
          {
            "id": 192,
            "amount": 1
          }
        ]
      }
    ],
    "meta": {
      "blueprint locked": "No"
    }
  },
  {
    "id": 200,
    "name": "Stable Stock I",
    "category": "Modification",
    "sellPrice": 640,
    "rarity": "Common",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/8/8d/Stable_Stock_I.png/348px-Stable_Stock_I.png.webp",
    "description": "Stable Stock I is a Common Stock Weapon Modification that slightly improves dispersion and recoil recovery time.",
    "weight": 0.25,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Sold",
        "traderId": 0
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gunsmith",
        "workstationLevel": 1,
        "items": [
          {
            "id": 145,
            "amount": 6
          },
          {
            "id": 58,
            "amount": 1
          }
        ]
      }
    ],
    "meta": {
      "blueprint locked": "No"
    }
  },
  {
    "id": 201,
    "name": "Dam Testing Annex Key",
    "category": "Key",
    "sellPrice": 100,
    "rarity": "Rare",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/4/49/Dam_Battlegrounds_Key.png/348px-Dam_Battlegrounds_Key.png.webp",
    "description": "Opens 2 locked doors inside the Testing Annex on Dam Battlegrounds. Keep in mind you can only unlock one of the two doors unless you bring two keys. Both doors are on the ground level with one being in the South side of the building and the other on the East side.",
    "maxStackSize": 1,
    "weight": 0.25,
    "sources": [
      {
        "type": "Scavenging"
      }
    ]
  },
  {
    "id": 202,
    "name": "Zipline",
    "category": "Quick Use",
    "sellPrice": 1000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 103,
        "amount": 1
      },
      {
        "id": 140,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "name": "?",
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/f/f9/Zipline.png/348px-Zipline.png.webp",
    "description": "Zipline is a gadget that allows raiders to travel quickly between two points.",
    "maxStackSize": 3,
    "weight": 0.4,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Utility Station",
        "workstationLevel": 2,
        "items": [
          {
            "id": 140,
            "amount": 1
          },
          {
            "id": 100,
            "amount": 1
          }
        ]
      }
    ],
    "meta": {
      "range": 60
    }
  },
  {
    "id": 203,
    "name": "Smoke Grenade",
    "category": "Quick Use",
    "sellPrice": 1000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 35,
        "amount": 2
      },
      {
        "id": 33,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 35,
        "amount": 3
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/d/d5/Smoke_Grenade.png/348px-Smoke_Grenade.png.webp",
    "maxStackSize": 5,
    "weight": 0.2,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Sold",
        "traderId": 0
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Utility Station",
        "workstationLevel": 1,
        "items": [
          {
            "id": 35,
            "amount": 7
          },
          {
            "id": 33,
            "amount": 1
          }
        ]
      },
      {
        "amount": 1,
        "workstation": "Workbench",
        "workstationLevel": 1,
        "items": [
          {
            "id": 35,
            "amount": 7
          },
          {
            "id": 33,
            "amount": 1
          }
        ]
      }
    ],
    "meta": {
      "duration": 20,
      "radius": 7.5
    }
  },
  {
    "id": 204,
    "name": "Vita Shot",
    "category": "Quick Use",
    "sellPrice": 2200,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 35,
        "amount": 4
      },
      {
        "id": 174,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "name": "?",
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/7/7d/Vita_Shot.png/348px-Vita_Shot.png.webp",
    "maxStackSize": 3,
    "weight": 0.4,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Medical Lab",
        "workstationLevel": 3,
        "items": [
          {
            "id": 8,
            "amount": 1
          },
          {
            "id": 174,
            "amount": 1
          }
        ]
      }
    ],
    "meta": {
      "healing": 50,
      "use time": 4
    }
  },
  {
    "id": 206,
    "name": "Noisemaker",
    "category": "Quick Use",
    "sellPrice": 640,
    "rarity": "Common",
    "recyclesTo": [
      {
        "id": 165,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 165,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/5/5c/Noisemaker.png/348px-Noisemaker.png.webp",
    "maxStackSize": 3,
    "weight": 0.3,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Sold",
        "traderId": 0
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Inventory",
        "workstationLevel": 1,
        "items": [
          {
            "id": 165,
            "amount": 1
          },
          {
            "id": 116,
            "amount": 2
          }
        ]
      }
    ],
    "meta": {
      "duration": 4,
      "radius": 8
    }
  },
  {
    "id": 207,
    "name": "Blue Light Stick",
    "category": "Quick Use",
    "sellPrice": 150,
    "rarity": "Common",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/c/cc/Blue_Light_Stick.png/348px-Blue_Light_Stick.png.webp",
    "description": "Color Variations:",
    "maxStackSize": 5,
    "weight": 0.15,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Sold",
        "traderId": 0
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Workshop",
        "workstationLevel": 1,
        "items": [
          {
            "name": "Blueprint",
            "amount": 1
          }
        ]
      },
      {
        "amount": 1,
        "workstation": "Utility Station",
        "workstationLevel": 2,
        "items": [
          {
            "id": 35,
            "amount": 3
          }
        ]
      }
    ],
    "meta": {
      "duration": 40,
      "radius": 7
    }
  },
  {
    "id": 208,
    "name": "Renegade",
    "category": "Misc",
    "sellPrice": 7000,
    "rarity": "Rare",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/b/b5/Renegade-Level1.png/348px-Renegade-Level1.png.webp",
    "description": "The Renegade is a lever-action battle rifle which uses medium ammo.",
    "weight": 10,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gunsmith&nbsp;",
        "workstationLevel": 3,
        "items": [
          {
            "id": 3,
            "amount": 2
          },
          {
            "id": 101,
            "amount": 3
          },
          {
            "id": 113,
            "amount": 5
          }
        ]
      }
    ],
    "meta": {
      "ammo": "Medium Ammo",
      "magazine size": 8,
      "firing mode": "Lever-Action",
      "arc armor penetration": "Moderate",
      "damage": 35,
      "fire rate": 21,
      "range": 68.8,
      "stability": 85.7,
      "agility": 55.8,
      "stealth": 16
    }
  },
  {
    "id": 209,
    "name": "Stable Stock III",
    "category": "Modification",
    "sellPrice": 5000,
    "rarity": "Rare",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/e/eb/Stable_Stock_III.png/348px-Stable_Stock_III.png.webp",
    "description": "Stable Stock III is a Rare Stock Weapon Modification that significantly improves dispersion and recoil recovery time",
    "weight": 0.75,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gunsmith",
        "workstationLevel": 3,
        "items": [
          {
            "id": 106,
            "amount": 2
          },
          {
            "id": 58,
            "amount": 5
          }
        ]
      }
    ],
    "meta": {
      "blueprint locked": "Yes"
    }
  },
  {
    "id": 210,
    "name": "Arpeggio",
    "category": "Misc",
    "sellPrice": 5500,
    "rarity": "Uncommon",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/6/6c/Arpeggio-Level1.png/348px-Arpeggio-Level1.png.webp",
    "description": "The Arpeggio is a burst assault rifle which uses medium ammo. It is the only weapon in the game to use the \"Burst\" firing mode, shooting three bullets per trigger pull.",
    "weight": 7,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gunsmith&nbsp;",
        "workstationLevel": 2,
        "items": [
          {
            "id": 100,
            "amount": 6
          },
          {
            "id": 163,
            "amount": 6
          }
        ]
      }
    ],
    "meta": {
      "ammo": "Medium Ammo",
      "magazine size": 24,
      "firing mode": 3,
      "arc armor penetration": "Moderate",
      "damage": 9.5,
      "fire rate": 18.3,
      "range": 55.9,
      "stability": 84,
      "agility": 57.3,
      "stealth": 14
    }
  },
  {
    "id": 211,
    "name": "Compensator II",
    "category": "Modification",
    "sellPrice": 2000,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 192,
        "amount": 1
      },
      {
        "id": 100,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 100,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/0/0a/Compensator_II.png",
    "description": "Compensator II is an Uncommon Muzzle Weapon Modification that moderately reduces per-shot dispersion.",
    "weight": 0.5,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gunsmith",
        "workstationLevel": 2,
        "items": [
          {
            "id": 100,
            "amount": 2
          },
          {
            "id": 192,
            "amount": 4
          }
        ]
      }
    ],
    "meta": {
      "blueprint locked": "Yes"
    }
  },
  {
    "id": 212,
    "name": "Anvil",
    "category": "Misc",
    "sellPrice": 5000,
    "rarity": "Uncommon",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/0/00/Anvil-Level1.png/348px-Anvil-Level1.png.webp",
    "description": "The Anvil is a single-action pistol which uses heavy ammo.",
    "weight": 5,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Sold",
        "traderId": 0
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gunsmith",
        "workstationLevel": 1,
        "items": [
          {
            "id": 100,
            "amount": 5
          },
          {
            "id": 163,
            "amount": 6
          }
        ]
      }
    ],
    "meta": {
      "ammo": "Heavy Ammo",
      "magazine size": 6,
      "firing mode": "Single-Action",
      "arc armor penetration": "Strong",
      "damage": 40,
      "fire rate": 16.3,
      "range": 50.2,
      "stability": 75.2,
      "agility": 69.1,
      "stealth": 10
    }
  },
  {
    "id": 213,
    "name": "Heavy Ammo",
    "category": "Ammunition",
    "sellPrice": 12,
    "rarity": "Common",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/4/47/HeavyAmmo_Box.png/348px-HeavyAmmo_Box.png.webp",
    "description": "Heavy Ammo is an ammo type used by some assault rifles, battle rifles and hand cannons.",
    "maxStackSize": 40,
    "weight": 0.05,
    "crafting": [
      {
        "amount": 10,
        "workstation": "Workbench",
        "workstationLevel": 1,
        "items": [
          {
            "id": 103,
            "amount": 3
          },
          {
            "id": 35,
            "amount": 2
          }
        ]
      }
    ]
  },
  {
    "id": 214,
    "name": "Door Blocker",
    "category": "Quick Use",
    "sellPrice": 270,
    "rarity": "Common",
    "recyclesTo": [
      {
        "id": 103,
        "amount": 2
      }
    ],
    "salvagesTo": [
      {
        "id": 103,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/6/68/Door_Blocker.png/348px-Door_Blocker.png.webp",
    "description": "Door Blocker is a deployable utility that can be attached to button operated double doors preventing them from being opened. The blocker takes 1 second to deploy, and it can not be recovered nor dismantled without breaching the door which takes 10 seconds without any skill upgrades.",
    "maxStackSize": 3,
    "weight": 0.2,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Sold",
        "traderId": 0
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Utility Station",
        "workstationLevel": 1,
        "items": [
          {
            "id": 103,
            "amount": 3
          },
          {
            "id": 145,
            "amount": 3
          }
        ]
      }
    ]
  },
  {
    "id": 215,
    "name": "Combat Mk. 1",
    "category": "Augment",
    "sellPrice": 640,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 145,
        "amount": 3
      },
      {
        "id": 116,
        "amount": 3
      }
    ],
    "salvagesTo": [
      {
        "id": 116,
        "amount": 3
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/1/14/Combat_Mk._1.png/348px-Combat_Mk._1.png.webp",
    "description": "Combat Mk. 1 is an uncommon augment that allows the use of Light Shield and Medium Shield but offers less backpack slots.",
    "weight": 2,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Sold",
        "traderId": 0
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gear Bench",
        "workstationLevel": 1,
        "items": [
          {
            "id": 145,
            "amount": 6
          },
          {
            "id": 116,
            "amount": 6
          }
        ]
      }
    ],
    "meta": {
      "backpack slots": 16,
      "safe pocket slots": 1,
      "quick use slots": 4,
      "weapon slots": 2,
      "weight limit": 45,
      "shield compatibility": "Light, Medium"
    }
  },
  {
    "id": 216,
    "name": "Medium Shield",
    "category": "Shield",
    "sellPrice": 2000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 11,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "name": "?",
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/4/41/Medium_Shield.png/348px-Medium_Shield.png.webp",
    "description": "The Medium Shield is a rare shield which offers fair protection with a small movement penalty.",
    "weight": 7,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Sold",
        "traderId": 0
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gear Bench",
        "workstationLevel": 2,
        "items": [
          {
            "id": 21,
            "amount": 4
          },
          {
            "id": 11,
            "amount": 1
          }
        ]
      }
    ],
    "meta": {
      "shield charge": 70,
      "damage mitigation": 42.5,
      "movement penalty": 5
    }
  },
  {
    "id": 217,
    "name": "Tagging Grenade",
    "category": "Quick Use",
    "sellPrice": 1000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 158,
        "amount": 1
      },
      {
        "id": 116,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 158,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/e/e5/Tagging_Grenade.png",
    "maxStackSize": 3,
    "weight": 0.4,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Utility Station",
        "workstationLevel": 3,
        "items": [
          {
            "id": 60,
            "amount": 1
          },
          {
            "id": 158,
            "amount": 1
          }
        ]
      }
    ],
    "meta": {
      "duration": 30,
      "radius": 6
    }
  },
  {
    "id": 218,
    "name": "Vita Spray",
    "category": "Quick Use",
    "sellPrice": 3000,
    "rarity": "Epic",
    "recyclesTo": [
      {
        "id": 8,
        "amount": 1
      },
      {
        "id": 33,
        "amount": 2
      }
    ],
    "salvagesTo": [
      {
        "id": 8,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/1/1d/Vita_Spray.png/348px-Vita_Spray.png.webp",
    "maxStackSize": 1,
    "weight": 1,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Medical Lab",
        "workstationLevel": 3,
        "items": [
          {
            "id": 8,
            "amount": 3
          },
          {
            "id": 33,
            "amount": 1
          }
        ]
      }
    ],
    "meta": {
      "healing": 10,
      "heal capacity": 150
    }
  },
  {
    "id": 219,
    "name": "Yellow Light Stick",
    "category": "Quick Use",
    "sellPrice": 150,
    "rarity": "Common",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/c/cc/Blue_Light_Stick.png/348px-Blue_Light_Stick.png.webp",
    "description": "Color Variations:",
    "maxStackSize": 5,
    "weight": 0.15,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Sold",
        "traderId": 0
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Workshop",
        "workstationLevel": 1,
        "items": [
          {
            "name": "Blueprint",
            "amount": 1
          }
        ]
      },
      {
        "amount": 1,
        "workstation": "Utility Station",
        "workstationLevel": 2,
        "items": [
          {
            "id": 35,
            "amount": 3
          }
        ]
      }
    ],
    "meta": {
      "duration": 40,
      "radius": 7
    }
  },
  {
    "id": 220,
    "name": "Raider Hatch Key",
    "category": "Key",
    "sellPrice": 1000,
    "rarity": "Rare",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/6/68/Raider_Hatch_Key.png/348px-Raider_Hatch_Key.png.webp",
    "description": "A Raider Hatch Key is a rare item used to open Raider Hatches to get out of sticky situations Topside.",
    "maxStackSize": 1,
    "weight": 0.01,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Sold",
        "traderId": 0
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Utility Station",
        "workstationLevel": 2,
        "items": [
          {
            "id": 2,
            "amount": 1
          },
          {
            "id": 158,
            "amount": 3
          }
        ]
      }
    ]
  },
  {
    "id": 221,
    "name": "Binoculars",
    "category": "Quick Use",
    "sellPrice": 640,
    "rarity": "Common",
    "recyclesTo": [
      {
        "id": 145,
        "amount": 2
      },
      {
        "id": 116,
        "amount": 4
      }
    ],
    "salvagesTo": [
      {
        "id": 116,
        "amount": 4
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/7/74/Binoculars.png/348px-Binoculars.png.webp",
    "description": "Binoculars are a gadget that raiders can use to scout out areas from a distance.",
    "maxStackSize": 1,
    "weight": 0.5,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Sold",
        "traderId": 0
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Utility Station",
        "workstationLevel": 1,
        "items": [
          {
            "id": 116,
            "amount": 8
          },
          {
            "id": 145,
            "amount": 4
          }
        ]
      }
    ]
  },
  {
    "id": 222,
    "name": "Vulcano",
    "category": "Misc",
    "sellPrice": 10000,
    "rarity": "Epic",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/d/da/Vulcano-Level1.png/348px-Vulcano-Level1.png.webp",
    "description": "The Vulcano is a semi-automatic shotgun that uses shotgun ammo.",
    "weight": 8,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gunsmith",
        "workstationLevel": 3,
        "items": [
          {
            "id": 97,
            "amount": 1
          },
          {
            "id": 80,
            "amount": 3
          },
          {
            "id": 62,
            "amount": 1
          }
        ]
      }
    ],
    "meta": {
      "ammo": "Shotgun Ammo",
      "magazine size": 6,
      "firing mode": "Semi-Automatic",
      "arc armor penetration": "Weak",
      "damage": 49.5,
      "fire rate": 26.3,
      "range": 26,
      "stability": 68.6,
      "agility": 70.3,
      "stealth": 15
    }
  },
  {
    "id": 223,
    "name": "Shotgun Ammo",
    "category": "Ammunition",
    "sellPrice": 20,
    "rarity": "Common",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/c/c1/ShotgunAmmo_Box.png/348px-ShotgunAmmo_Box.png.webp",
    "description": "Shotgun Ammo is an ammo type used by shotguns.",
    "maxStackSize": 20,
    "weight": 0.085,
    "crafting": [
      {
        "amount": 5,
        "workstation": "Workbench",
        "workstationLevel": 1,
        "items": [
          {
            "id": 103,
            "amount": 3
          },
          {
            "id": 35,
            "amount": 2
          }
        ]
      }
    ]
  },
  {
    "id": 224,
    "name": "Snap Hook",
    "category": "Quick Use",
    "sellPrice": 14000,
    "rarity": "Legendary",
    "recyclesTo": [
      {
        "id": 125,
        "amount": 1
      },
      {
        "id": 140,
        "amount": 3
      }
    ],
    "salvagesTo": [
      {
        "id": 2,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/5/56/Snap_Hook.png",
    "description": "Snap Hook is a gadget that allows raiders to grapple to higher ground for faster traversal.",
    "maxStackSize": 1,
    "weight": 5,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Utility Station",
        "workstationLevel": 3,
        "items": [
          {
            "id": 125,
            "amount": 2
          },
          {
            "id": 140,
            "amount": 3
          },
          {
            "id": 62,
            "amount": 1
          }
        ]
      }
    ],
    "meta": {
      "range": 20
    }
  },
  {
    "id": 225,
    "name": "Shotgun Choke II",
    "category": "Modification",
    "sellPrice": 2000,
    "rarity": "Uncommon",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/6/63/Shotgun_Choke_II.png",
    "description": "Shotgun Choke II is an Uncommon Shotgun Muzzle Weapon Modification that moderately reduces base dispersion.",
    "weight": 0.5,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gunsmith",
        "workstationLevel": 2,
        "items": [
          {
            "name": "?",
            "amount": 1
          }
        ]
      }
    ],
    "meta": {
      "blueprint locked": "Yes"
    }
  },
  {
    "id": 226,
    "name": "Angled Grip II",
    "category": "Modification",
    "sellPrice": 2000,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 58,
        "amount": 1
      },
      {
        "id": 100,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 100,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/2/2b/Angled_Grip_II.png",
    "description": "Angled Grip II is an Uncommon Underbarrel Weapon Modification that moderately reduces horizontal recoil.",
    "weight": 0.5,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gunsmith",
        "workstationLevel": 2,
        "items": [
          {
            "id": 100,
            "amount": 2
          },
          {
            "name": "+",
            "amount": 1
          },
          {
            "id": 58,
            "amount": 3
          }
        ]
      }
    ],
    "meta": {
      "blueprint locked": "Yes"
    }
  },
  {
    "id": 227,
    "name": "Silencer II",
    "category": "Modification",
    "sellPrice": 5000,
    "rarity": "Rare",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/c/c0/Silencer_II.png/348px-Silencer_II.png.webp",
    "description": "Silencer II is a Rare Muzzle Weapon Modification that moderately reduces the amount of noise produced when firing.",
    "weight": 0.5,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gunsmith",
        "workstationLevel": 3,
        "items": [
          {
            "id": 106,
            "amount": 2
          },
          {
            "id": 192,
            "amount": 8
          }
        ]
      }
    ],
    "meta": {
      "blueprint locked": "Yes"
    }
  },
  {
    "id": 228,
    "name": "Extended Light Mag I",
    "category": "Modification",
    "sellPrice": 640,
    "rarity": "Common",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/2/23/Extended_Light_Mag_I.png/348px-Extended_Light_Mag_I.png.webp",
    "description": "Extended Light Mag I is a Common Light Magazine Weapon Modification that slightly extends the Light Ammo capacity of compatible weapons.",
    "weight": 0.5,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Sold",
        "traderId": 0
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gunsmith",
        "workstationLevel": 1,
        "items": [
          {
            "id": 116,
            "amount": 6
          },
          {
            "id": 171,
            "amount": 1
          }
        ]
      }
    ],
    "meta": {
      "blueprint locked": "No"
    }
  },
  {
    "id": 229,
    "name": "Photoelectric Cloak",
    "category": "Quick Use",
    "sellPrice": 5000,
    "rarity": "Epic",
    "recyclesTo": [
      {
        "id": 165,
        "amount": 1
      },
      {
        "id": 2,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 2,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/0/06/Photoelectric_Cloak.png/348px-Photoelectric_Cloak.png.webp",
    "description": "Photoelectric Cloak is a gadget that allows raiders to temporarily conceal themselves from ARC.",
    "maxStackSize": 1,
    "weight": 1,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Utility Station",
        "workstationLevel": 3,
        "items": [
          {
            "id": 2,
            "amount": 2
          },
          {
            "id": 165,
            "amount": 4
          }
        ]
      }
    ]
  },
  {
    "id": 230,
    "name": "Jolt Mine",
    "category": "Quick Use",
    "sellPrice": 850,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 21,
        "amount": 1
      },
      {
        "id": 116,
        "amount": 2
      }
    ],
    "salvagesTo": [
      {
        "id": 21,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/5/5a/Jolt_Mine.png/348px-Jolt_Mine.png.webp",
    "description": "Jolt Mine is a deployable trap that can be placed on most surfaces in line of sight causing a shock stun effect on activation. The mine takes 1 second to deploy and becomes armed 2 seconds after deployment. It can be disarmed and recovered if it has not yet been activated, this takes 2 seconds.",
    "maxStackSize": 3,
    "weight": 0.2,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Sold",
        "traderId": 0
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Explosives Station",
        "workstationLevel": 2,
        "items": [
          {
            "id": 60,
            "amount": 1
          },
          {
            "id": 21,
            "amount": 1
          }
        ]
      }
    ],
    "meta": {
      "arc stun": 10,
      "raider stun": 4,
      "radius": 5
    }
  },
  {
    "id": 231,
    "name": "Wolfpack",
    "category": "Quick Use",
    "sellPrice": 5000,
    "rarity": "Epic",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/2/24/Wolfpack.png/348px-Wolfpack.png.webp",
    "maxStackSize": 1,
    "weight": 1,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Explosives Station",
        "workstationLevel": 3,
        "items": [
          {
            "id": 65,
            "amount": 3
          },
          {
            "id": 14,
            "amount": 2
          }
        ]
      }
    ],
    "meta": {
      "damage": 166,
      "radius": 100
    }
  },
  {
    "id": 232,
    "name": "Heavy Shield",
    "category": "Shield",
    "sellPrice": 5500,
    "rarity": "Epic",
    "recyclesTo": [
      {
        "id": 11,
        "amount": 2
      },
      {
        "id": 188,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "name": "?",
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/f/f9/Heavy_Shield.png/348px-Heavy_Shield.png.webp",
    "description": "The Heavy Shield is an epic shield which offers strong protection with a significant movement penalty.",
    "weight": 9,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Sold",
        "traderId": 0
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gear Bench",
        "workstationLevel": 2,
        "items": [
          {
            "id": 125,
            "amount": 1
          },
          {
            "id": 188,
            "amount": 2
          }
        ]
      }
    ],
    "meta": {
      "shield charge": 80,
      "damage mitigation": 52.5,
      "movement penalty": 15
    }
  },
  {
    "id": 233,
    "name": "Shrapnel Grenade",
    "category": "Quick Use",
    "sellPrice": 800,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 42,
        "amount": 1
      },
      {
        "id": 103,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "name": "?",
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/5/5f/Shrapnel_Grenade.png/348px-Shrapnel_Grenade.png.webp",
    "maxStackSize": 5,
    "weight": 0.15,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Explosive Station",
        "workstationLevel": 2,
        "items": [
          {
            "id": 42,
            "amount": 1
          },
          {
            "id": 171,
            "amount": 2
          }
        ]
      }
    ],
    "meta": {
      "damage": 60,
      "radius": 6
    }
  },
  {
    "id": 234,
    "name": "Barricade Kit",
    "category": "Quick Use",
    "sellPrice": 640,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 103,
        "amount": 4
      }
    ],
    "salvagesTo": [
      {
        "id": 103,
        "amount": 3
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/c/cb/Barricade_Kit.png/348px-Barricade_Kit.png.webp",
    "description": "Barricade Kit is a deployable utility that provides cover and blocks 500 damage until breaking.",
    "maxStackSize": 3,
    "weight": 0.4,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Sold",
        "traderId": 0
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Utility Station",
        "workstationLevel": 1,
        "items": [
          {
            "id": 100,
            "amount": 1
          }
        ]
      }
    ],
    "meta": {
      "duration": 500
    }
  },
  {
    "id": 236,
    "name": "Stitcher",
    "category": "Misc",
    "sellPrice": 800,
    "rarity": "Common",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/3/3a/Stitcher-Level1.png/348px-Stitcher-Level1.png.webp",
    "description": "The Stitcher is a fully automatic submachine gun that uses light ammo.",
    "maxStackSize": 1,
    "weight": 5,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Sold",
        "traderId": 0
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gunsmith",
        "workstationLevel": 1,
        "items": [
          {
            "id": 103,
            "amount": 8
          },
          {
            "id": 145,
            "amount": 4
          }
        ]
      },
      {
        "amount": 1,
        "workstation": "Workbench",
        "workstationLevel": 1,
        "items": [
          {
            "id": 103,
            "amount": 8
          },
          {
            "id": 145,
            "amount": 4
          }
        ]
      }
    ],
    "meta": {
      "ammo": "Light Ammo",
      "magazine size": 20,
      "firing mode": "Fully-Automatic",
      "arc armor penetration": "Very Weak",
      "damage": 7,
      "fire rate": 45.3,
      "range": 42.1,
      "stability": 45.3,
      "agility": 73.8,
      "stealth": 19
    }
  },
  {
    "id": 238,
    "name": "Dam Staff Room Key",
    "category": "Key",
    "sellPrice": 100,
    "rarity": "Uncommon",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/4/49/Dam_Battlegrounds_Key.png/348px-Dam_Battlegrounds_Key.png.webp",
    "description": "Opens a locked door in the Research & Administration building on Dam Battlegrounds on the First Floor.",
    "maxStackSize": 1,
    "weight": 0.25,
    "sources": [
      {
        "type": "Scavenging"
      }
    ]
  },
  {
    "id": 239,
    "name": "Il Toro",
    "category": "Misc",
    "sellPrice": 5000,
    "rarity": "Uncommon",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/5/50/Il_Toro-Level1.png/348px-Il_Toro-Level1.png.webp",
    "description": "The Il Toro is a pump-action shotgun which uses shotgun ammo.",
    "weight": 8,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Sold",
        "traderId": 0
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gunsmith",
        "workstationLevel": 1,
        "items": [
          {
            "id": 100,
            "amount": 5
          },
          {
            "id": 163,
            "amount": 6
          }
        ]
      }
    ],
    "meta": {
      "ammo": "Shotgun Ammo",
      "magazine size": 5,
      "firing mode": "Pump-Action",
      "arc armor penetration": "Weak",
      "damage": 67.5,
      "fire rate": 14.3,
      "range": 20,
      "stability": 80.6,
      "agility": 61.1,
      "stealth": 18
    }
  },
  {
    "id": 240,
    "name": "Blaze Grenade",
    "category": "Quick Use",
    "sellPrice": 1600,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 113,
        "amount": 2
      },
      {
        "id": 103,
        "amount": 4
      }
    ],
    "salvagesTo": [
      {
        "id": 113,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/2/24/Blaze_Grenade.png/348px-Blaze_Grenade.png.webp",
    "maxStackSize": 5,
    "weight": 0.2,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Workshop",
        "workstationLevel": 1,
        "items": [
          {
            "name": "Blueprint",
            "amount": 1
          }
        ]
      },
      {
        "amount": 1,
        "workstation": "Explosives Station",
        "workstationLevel": 3,
        "items": [
          {
            "id": 65,
            "amount": 1
          },
          {
            "id": 113,
            "amount": 2
          }
        ]
      }
    ],
    "meta": {
      "damage": 5,
      "duration": 10,
      "radius": 10
    }
  },
  {
    "id": 241,
    "name": "Muzzle Brake II",
    "category": "Modification",
    "sellPrice": 2000,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 192,
        "amount": 1
      },
      {
        "id": 100,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 100,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/2/23/Muzzle_Brake_II.png",
    "description": "Muzzle Brake II is an Uncommon Muzzle Weapon Modification that moderately reduces both vertical and horizontal recoil.",
    "weight": 0.5,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gunsmith",
        "workstationLevel": 2,
        "items": [
          {
            "id": 100,
            "amount": 2
          },
          {
            "id": 192,
            "amount": 4
          }
        ]
      }
    ],
    "meta": {
      "blueprint locked": "Yes"
    }
  },
  {
    "id": 242,
    "name": "Vertical Grip II",
    "category": "Modification",
    "sellPrice": 2000,
    "rarity": "Uncommon",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/3/3c/Vertical_Grip_II.png",
    "description": "Vertical Grip II is an Uncommon Underbarrel Weapon Modification that moderately reduces vertical recoil.",
    "weight": 0.5,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gunsmith",
        "workstationLevel": 2,
        "items": [
          {
            "id": 100,
            "amount": 2
          },
          {
            "id": 58,
            "amount": 3
          }
        ]
      }
    ],
    "meta": {
      "blueprint locked": "Yes"
    }
  },
  {
    "id": 243,
    "name": "Stable Stock II",
    "category": "Modification",
    "sellPrice": 2000,
    "rarity": "Uncommon",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/b/b4/Stable_Stock_II.png/348px-Stable_Stock_II.png.webp",
    "description": "Stable Stock II is an Uncommon Stock Weapon Modification that slightly improves dispersion and recoil recovery time.",
    "weight": 0.5,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gunsmith",
        "workstationLevel": 2,
        "items": [
          {
            "id": 100,
            "amount": 2
          },
          {
            "id": 58,
            "amount": 3
          }
        ]
      }
    ],
    "meta": {
      "blueprint locked": "Yes"
    }
  },
  {
    "id": 244,
    "name": "Snap Blast Grenade",
    "category": "Quick Use",
    "sellPrice": 800,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 35,
        "amount": 1
      },
      {
        "id": 96,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 35,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/7/77/Snap_Blast_Grenade.png/348px-Snap_Blast_Grenade.png.webp",
    "maxStackSize": 3,
    "weight": 0.2,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Sold",
        "traderId": 0
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Explosives Station",
        "workstationLevel": 2,
        "items": [
          {
            "id": 42,
            "amount": 2
          },
          {
            "id": 96,
            "amount": 1
          }
        ]
      }
    ],
    "meta": {
      "damage": 70,
      "radius": 7.5
    }
  },
  {
    "id": 245,
    "name": "Heavy Fuze Grenade",
    "category": "Quick Use",
    "sellPrice": 1600,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 113,
        "amount": 1
      },
      {
        "id": 145,
        "amount": 2
      }
    ],
    "salvagesTo": [
      {
        "id": 42,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/e/ea/Heavy_Fuze_Grenade.png/348px-Heavy_Fuze_Grenade.png.webp",
    "maxStackSize": 3,
    "weight": 0.2,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Explosives Station",
        "workstationLevel": 3,
        "items": [
          {
            "id": 65,
            "amount": 1
          },
          {
            "id": 33,
            "amount": 2
          }
        ]
      }
    ],
    "meta": {
      "damage": 80,
      "radius": 7.5
    }
  },
  {
    "id": 246,
    "name": "Looting Mk. 2",
    "category": "Augment",
    "sellPrice": 2000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 60,
        "amount": 1
      },
      {
        "id": 96,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 60,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/7/7c/Looting_Mk._2.png/348px-Looting_Mk._2.png.webp",
    "weight": 2,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Sold",
        "traderId": 0
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gear Bench",
        "workstationLevel": 2,
        "items": [
          {
            "id": 60,
            "amount": 2
          },
          {
            "id": 96,
            "amount": 3
          }
        ]
      }
    ],
    "meta": {
      "backpack slots": 22,
      "safe pocket slots": 2,
      "quick use slots": 4,
      "weapon slots": 2,
      "trinket slots": 3,
      "weight limit": 60,
      "shield compatibility": "Light"
    }
  },
  {
    "id": 247,
    "name": "Green Light Stick",
    "category": "Quick Use",
    "sellPrice": 150,
    "rarity": "Common",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/c/cc/Blue_Light_Stick.png/348px-Blue_Light_Stick.png.webp",
    "description": "Color Variations:",
    "maxStackSize": 5,
    "weight": 0.15,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Sold",
        "traderId": 0
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Workshop",
        "workstationLevel": 1,
        "items": [
          {
            "name": "Blueprint",
            "amount": 1
          }
        ]
      },
      {
        "amount": 1,
        "workstation": "Utility Station",
        "workstationLevel": 2,
        "items": [
          {
            "id": 35,
            "amount": 3
          }
        ]
      }
    ],
    "meta": {
      "duration": 40,
      "radius": 7
    }
  },
  {
    "id": 248,
    "name": "Gas Mine",
    "category": "Quick Use",
    "sellPrice": 270,
    "rarity": "Common",
    "recyclesTo": [
      {
        "id": 35,
        "amount": 1
      },
      {
        "id": 145,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 35,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/c/ce/Gas_Mine.png/348px-Gas_Mine.png.webp",
    "description": "Gas Mine is a deployable trap that can be placed on most surfaces in line of sight producing a stamina draining gas cloud on activation. The mine takes 1 second to deploy and becomes armed 3 seconds after deployment. It can be disarmed and recovered if it has not yet been activated, taking 2 seconds.",
    "maxStackSize": 3,
    "weight": 0.25,
    "sources": [
      {
        "type": "Sold",
        "traderId": 0
      }
    ],
    "meta": {
      "duration": 20,
      "radius": 7.5,
      "stamina drain": 25
    }
  },
  {
    "id": 249,
    "name": "Extended Light Mag II",
    "category": "Modification",
    "sellPrice": 2000,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 171,
        "amount": 1
      },
      {
        "id": 100,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 100,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/c/cf/Extended_Light_Mag_II.png/348px-Extended_Light_Mag_II.png.webp",
    "description": "Extended Light Mag II is an Uncommon Light Magazine Weapon Modification that moderately extends the Light Ammo capacity of the compatible weapons.",
    "weight": 0.5,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gunsmith&nbsp;",
        "workstationLevel": 2,
        "items": [
          {
            "id": 100,
            "amount": 2
          },
          {
            "id": 171,
            "amount": 3
          }
        ]
      }
    ],
    "meta": {
      "blueprint locked": "Yes"
    }
  },
  {
    "id": 250,
    "name": "Light Ammo",
    "category": "Ammunition",
    "sellPrice": 4,
    "rarity": "Common",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/4/4a/LightAmmo_Box.png/348px-LightAmmo_Box.png.webp",
    "description": "Light Ammo is an ammo type commonly used with SMGs and light pistols.",
    "maxStackSize": 100,
    "weight": 0.01,
    "crafting": [
      {
        "amount": 25,
        "workstation": "Workbench",
        "workstationLevel": 1,
        "items": [
          {
            "id": 103,
            "amount": 3
          },
          {
            "id": 35,
            "amount": 2
          }
        ]
      }
    ]
  },
  {
    "id": 251,
    "name": "Li'l Smoke Grenade",
    "category": "Quick Use",
    "sellPrice": 300,
    "rarity": "Common",
    "recyclesTo": [
      {
        "id": 35,
        "amount": 1
      },
      {
        "id": 116,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "name": "?",
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/1/19/Lil_Smoke_Grenade.png/348px-Lil_Smoke_Grenade.png.webp",
    "description": "A Grenade that pops into a thick but small smoke cloud on impact, blocking visibility from ARC and other Raiders.",
    "maxStackSize": 5,
    "weight": 0.15,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Utility Station",
        "workstationLevel": 1,
        "items": [
          {
            "id": 35,
            "amount": 5
          },
          {
            "id": 116,
            "amount": 1
          }
        ]
      },
      {
        "amount": 1,
        "workstation": "Inventory",
        "workstationLevel": 1,
        "items": [
          {
            "id": 35,
            "amount": 5
          },
          {
            "id": 116,
            "amount": 1
          }
        ]
      }
    ],
    "meta": {
      "duration": 6,
      "radius": 2.5
    }
  },
  {
    "id": 252,
    "name": "Angled Grip I",
    "category": "Modification",
    "sellPrice": 640,
    "rarity": "Common",
    "recyclesTo": [
      {
        "id": 116,
        "amount": 6
      }
    ],
    "salvagesTo": [
      {
        "id": 116,
        "amount": 3
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/b/b5/Angled_Grip_I.png/348px-Angled_Grip_I.png.webp",
    "weight": 0.25,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Sold",
        "traderId": 0
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gunsmith",
        "workstationLevel": 1,
        "items": [
          {
            "id": 116,
            "amount": 6
          },
          {
            "id": 58,
            "amount": 1
          }
        ]
      }
    ],
    "meta": {
      "blueprint locked": "No"
    }
  },
  {
    "id": 253,
    "name": "Angled Grip III",
    "category": "Modification",
    "sellPrice": 5000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 58,
        "amount": 2
      },
      {
        "id": 106,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 100,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/0/0f/Angled_Grip_III.png",
    "weight": 0.75,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gunsmith",
        "workstationLevel": 3,
        "items": [
          {
            "id": 106,
            "amount": 2
          },
          {
            "name": "+",
            "amount": 1
          },
          {
            "id": 58,
            "amount": 5
          }
        ]
      }
    ],
    "meta": {
      "blueprint locked": "Yes"
    }
  },
  {
    "id": 254,
    "name": "Anvil Splitter",
    "category": "Modification",
    "sellPrice": 7000,
    "rarity": "Legendary",
    "recyclesTo": [
      {
        "id": 127,
        "amount": 1
      },
      {
        "id": 106,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 100,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/e/ef/Anvil_Splitter.png/348px-Anvil_Splitter.png.webp",
    "weight": 0.5,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "?",
        "workstationLevel": 1,
        "items": [
          {
            "name": "?",
            "amount": 1
          }
        ]
      }
    ],
    "meta": {
      "blueprint locked": "Yes"
    }
  },
  {
    "id": 255,
    "name": "Bandage",
    "category": "Quick Use",
    "sellPrice": 250,
    "rarity": "Common",
    "recyclesTo": [
      {
        "id": 66,
        "amount": 2
      }
    ],
    "salvagesTo": [
      {
        "id": 66,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/0/0c/Bandage.png/348px-Bandage.png.webp",
    "maxStackSize": 5,
    "weight": 0.1,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Sold",
        "traderId": 0
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Medical Lab",
        "workstationLevel": 1,
        "items": [
          {
            "id": 66,
            "amount": 5
          }
        ]
      },
      {
        "amount": 1,
        "workstation": "Workbench",
        "workstationLevel": 1,
        "items": [
          {
            "id": 66,
            "amount": 5
          }
        ]
      },
      {
        "amount": 1,
        "workstation": "Inventory",
        "workstationLevel": 1,
        "items": [
          {
            "id": 66,
            "amount": 5
          }
        ]
      }
    ],
    "meta": {
      "healing": 2,
      "use time": 1.5,
      "duration": 10
    }
  },
  {
    "id": 257,
    "name": "Blaze Grenade Trap",
    "category": "Quick Use",
    "sellPrice": 1000,
    "rarity": "Rare",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/a/af/Blaze_Grenade_Trap.png/348px-Blaze_Grenade_Trap.png.webp",
    "maxStackSize": 3,
    "weight": 0.3,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Workbench",
        "workstationLevel": 1,
        "items": [
          {
            "id": 240,
            "amount": 1
          },
          {
            "id": 192,
            "amount": 1
          }
        ]
      },
      {
        "amount": 1,
        "workstation": "Inventory",
        "workstationLevel": 1,
        "items": [
          {
            "id": 240,
            "amount": 1
          },
          {
            "id": 192,
            "amount": 1
          }
        ]
      }
    ],
    "meta": {
      "damage": 5,
      "duration": 10
    }
  },
  {
    "id": 258,
    "name": "Blue Gate Cellar Key",
    "category": "Key",
    "sellPrice": 100,
    "rarity": "Uncommon",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/5/5f/Blue_Gate_Village_Key.png/348px-Blue_Gate_Village_Key.png.webp",
    "maxStackSize": 1,
    "weight": 0.25,
    "sources": [
      {
        "type": "Scavenging"
      }
    ]
  },
  {
    "id": 259,
    "name": "Blue Gate Communication Tower Key",
    "category": "Key",
    "sellPrice": 100,
    "rarity": "Rare",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/5/5f/Blue_Gate_Village_Key.png/348px-Blue_Gate_Village_Key.png.webp",
    "maxStackSize": 1,
    "weight": 0.25,
    "sources": [
      {
        "type": "Scavenging"
      }
    ]
  },
  {
    "id": 260,
    "name": "Blue Gate Confiscation Room Key",
    "category": "Key",
    "sellPrice": 100,
    "rarity": "Epic",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/5/51/Blue_Gate_Confiscation_Room_Key.png/348px-Blue_Gate_Confiscation_Room_Key.png.webp",
    "maxStackSize": 1,
    "weight": 0.25,
    "sources": [
      {
        "type": "Scavenging"
      }
    ]
  },
  {
    "id": 261,
    "name": "Blue Gate Village Key",
    "category": "Key",
    "sellPrice": 100,
    "rarity": "Uncommon",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/5/5f/Blue_Gate_Village_Key.png/348px-Blue_Gate_Village_Key.png.webp",
    "maxStackSize": 1,
    "weight": 0.25,
    "sources": [
      {
        "type": "Scavenging"
      }
    ]
  },
  {
    "id": 262,
    "name": "Broken Handcuffs",
    "category": "Recyclable",
    "sellPrice": 640,
    "rarity": "Uncommon",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/7/7c/Ruined_Handcuffs.png/348px-Ruined_Handcuffs.png.webp",
    "maxStackSize": 3,
    "weight": 0.8,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Security"
  },
  {
    "id": 264,
    "name": "Buried City Hospital Key",
    "category": "Key",
    "sellPrice": 100,
    "rarity": "Rare",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/1/11/Buried_City_Key.png/348px-Buried_City_Key.png.webp",
    "maxStackSize": 1,
    "weight": 0.25,
    "sources": [
      {
        "type": "Scavenging"
      }
    ]
  },
  {
    "id": 265,
    "name": "Buried City JKV Employee Access Card",
    "category": "Key",
    "sellPrice": 100,
    "rarity": "Uncommon",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/1/11/Buried_City_Key.png/348px-Buried_City_Key.png.webp",
    "maxStackSize": 1,
    "weight": 0.25,
    "sources": [
      {
        "type": "Scavenging"
      }
    ]
  },
  {
    "id": 266,
    "name": "Buried City Residential Master Key",
    "category": "Key",
    "sellPrice": 100,
    "rarity": "Uncommon",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/1/11/Buried_City_Key.png/348px-Buried_City_Key.png.webp",
    "maxStackSize": 1,
    "weight": 0.25,
    "sources": [
      {
        "type": "Scavenging"
      }
    ]
  },
  {
    "id": 267,
    "name": "Buried City Town Hall Key",
    "category": "Key",
    "sellPrice": 100,
    "rarity": "Epic",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/1/11/Buried_City_Key.png/348px-Buried_City_Key.png.webp",
    "maxStackSize": 1,
    "weight": 0.25,
    "sources": [
      {
        "type": "Scavenging"
      }
    ]
  },
  {
    "id": 269,
    "name": "Combat Mk. 2",
    "category": "Augment",
    "sellPrice": 2000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 60,
        "amount": 1
      },
      {
        "id": 96,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 60,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/5/54/Combat_Mk._2.png/348px-Combat_Mk._2.png.webp",
    "weight": 3,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Sold",
        "traderId": 0
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gear Bench",
        "workstationLevel": 2,
        "items": [
          {
            "id": 60,
            "amount": 2
          },
          {
            "id": 96,
            "amount": 3
          }
        ]
      }
    ],
    "meta": {
      "backpack slots": 18,
      "safe pocket slots": 1,
      "quick use slots": 4,
      "weapon slots": 2,
      "grenade use slots": 1,
      "weight limit": 55,
      "shield compatibility": "Light, Medium, Heavy"
    }
  },
  {
    "id": 270,
    "name": "Combat Mk. 3 (Aggressive)",
    "category": "Augment",
    "sellPrice": 5000,
    "rarity": "Epic",
    "recyclesTo": [
      {
        "id": 127,
        "amount": 1
      },
      {
        "id": 2,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "name": "?",
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/a/a4/Combat_Mk._3_%28Aggressive%29.png/348px-Combat_Mk._3_%28Aggressive%29.png.webp",
    "weight": 5,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gear&nbsp;Bench&nbsp;",
        "workstationLevel": 3,
        "items": [
          {
            "id": 2,
            "amount": 2
          },
          {
            "id": 127,
            "amount": 3
          }
        ]
      }
    ],
    "meta": {
      "backpack slots": 18,
      "safe pocket slots": 1,
      "quick use slots": 4,
      "weapon slots": 2,
      "grenade use slots": 2,
      "weight limit": 65,
      "shield compatibility": "Light, Medium, Heavy"
    }
  },
  {
    "id": 271,
    "name": "Combat Mk. 3 (Flanking)",
    "category": "Augment",
    "sellPrice": 3000,
    "rarity": "Epic",
    "recyclesTo": [
      {
        "id": 127,
        "amount": 1
      },
      {
        "id": 2,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "name": "?",
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/7/73/Combat_Mk._3_%28Flanking%29.png/348px-Combat_Mk._3_%28Flanking%29.png.webp",
    "weight": 3,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gear Bench",
        "workstationLevel": 3,
        "items": [
          {
            "id": 2,
            "amount": 2
          },
          {
            "id": 127,
            "amount": 3
          }
        ]
      }
    ],
    "meta": {
      "backpack slots": 20,
      "safe pocket slots": 2,
      "quick use slots": 5,
      "weapon slots": 2,
      "deployable utility slots": 3,
      "weight limit": 60,
      "shield compatibility": "Light Shield"
    }
  },
  {
    "id": 272,
    "name": "Compensator III",
    "category": "Modification",
    "sellPrice": 5000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 192,
        "amount": 2
      },
      {
        "id": 106,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "name": "?",
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/a/af/Compensator_III.png",
    "weight": 0.75,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gunsmith",
        "workstationLevel": 3,
        "items": [
          {
            "id": 106,
            "amount": 2
          },
          {
            "id": 192,
            "amount": 8
          }
        ]
      }
    ],
    "meta": {
      "blueprint locked": "Yes"
    }
  },
  {
    "id": 273,
    "name": "Dam Control Center Tower Key",
    "category": "Key",
    "sellPrice": 100,
    "rarity": "Epic",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/4/49/Dam_Battlegrounds_Key.png/348px-Dam_Battlegrounds_Key.png.webp",
    "maxStackSize": 1,
    "weight": 0.25,
    "sources": [
      {
        "type": "Scavenging"
      }
    ]
  },
  {
    "id": 274,
    "name": "Dam Surveillance Key",
    "category": "Key",
    "sellPrice": 100,
    "rarity": "Uncommon",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/4/49/Dam_Battlegrounds_Key.png/348px-Dam_Battlegrounds_Key.png.webp",
    "maxStackSize": 1,
    "weight": 0.25
  },
  {
    "id": 275,
    "name": "Dam Utility Key",
    "category": "Key",
    "sellPrice": 100,
    "rarity": "Uncommon",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/4/49/Dam_Battlegrounds_Key.png/348px-Dam_Battlegrounds_Key.png.webp",
    "maxStackSize": 1,
    "weight": 0.25,
    "sources": [
      {
        "type": "Scavenging"
      }
    ]
  },
  {
    "id": 276,
    "name": "Deadline",
    "category": "Quick Use",
    "sellPrice": 5000,
    "rarity": "Epic",
    "recyclesTo": [
      {
        "id": 65,
        "amount": 1
      },
      {
        "id": 11,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 65,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/c/c7/Deadline.png/348px-Deadline.png.webp",
    "maxStackSize": 1,
    "weight": 1,
    "crafting": [
      {
        "amount": 1,
        "workstation": "Explosives Station",
        "workstationLevel": 3,
        "items": [
          {
            "id": 65,
            "amount": 3
          },
          {
            "id": 11,
            "amount": 2
          }
        ]
      }
    ],
    "meta": {
      "damage": 1000,
      "radius": 10,
      "timer duration": 6
    }
  },
  {
    "id": 277,
    "name": "Defibrillator",
    "category": "Quick Use",
    "sellPrice": 1000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 107,
        "amount": 1
      },
      {
        "id": 116,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 35,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/5/5f/Defibrillator.png/348px-Defibrillator.png.webp",
    "maxStackSize": 3,
    "weight": 0.75,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Sold",
        "traderId": 0
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Medical Lab",
        "workstationLevel": 2,
        "items": [
          {
            "id": 116,
            "amount": 9
          },
          {
            "id": 107,
            "amount": 1
          }
        ]
      }
    ],
    "meta": {
      "healing": 50,
      "use time": 1.5
    }
  },
  {
    "id": 278,
    "name": "Energy Clip",
    "category": "Ammunition",
    "sellPrice": 5,
    "rarity": "Rare",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/0/08/Energy_Clip.png/348px-Energy_Clip.png.webp",
    "maxStackSize": 5,
    "weight": 0.3,
    "crafting": [
      {
        "amount": 5,
        "workstation": "Workbench",
        "workstationLevel": 1,
        "items": [
          {
            "id": 1,
            "amount": 1
          },
          {
            "id": 21,
            "amount": 2
          }
        ]
      }
    ]
  },
  {
    "id": 279,
    "name": "Explosive Mine",
    "category": "Quick Use",
    "sellPrice": 1500,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 113,
        "amount": 2
      },
      {
        "id": 158,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "name": "?",
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/2/22/Explosive_Mine.png/348px-Explosive_Mine.png.webp",
    "maxStackSize": 3,
    "weight": 0.4,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Explosives&nbsp;Station&nbsp;",
        "workstationLevel": 3,
        "items": [
          {
            "id": 65,
            "amount": 1
          },
          {
            "id": 158,
            "amount": 1
          }
        ]
      }
    ],
    "meta": {
      "damage": 40,
      "radius": 7.5
    }
  },
  {
    "id": 280,
    "name": "Extended Barrel",
    "category": "Modification",
    "sellPrice": 5000,
    "rarity": "Epic",
    "recyclesTo": [
      {
        "id": 192,
        "amount": 1
      },
      {
        "id": 106,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 100,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/2/2f/Extended_Barrel.png/348px-Extended_Barrel.png.webp",
    "weight": 0.5,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gunsmith",
        "workstationLevel": 3,
        "items": [
          {
            "id": 106,
            "amount": 2
          },
          {
            "id": 192,
            "amount": 8
          }
        ]
      }
    ],
    "meta": {
      "blueprint locked": "Yes"
    }
  },
  {
    "id": 281,
    "name": "Extended Light Mag III",
    "category": "Modification",
    "sellPrice": 5000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 171,
        "amount": 2
      },
      {
        "id": 106,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 100,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/4/40/Extended_Light_Mag_III.png",
    "weight": 0.75,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gunsmith&nbsp;",
        "workstationLevel": 3,
        "items": [
          {
            "id": 106,
            "amount": 2
          },
          {
            "id": 171,
            "amount": 5
          }
        ]
      }
    ],
    "meta": {
      "blueprint locked": "Yes"
    }
  },
  {
    "id": 282,
    "name": "Extended Medium Mag I",
    "category": "Modification",
    "sellPrice": 640,
    "rarity": "Common",
    "recyclesTo": [
      {
        "id": 116,
        "amount": 6
      }
    ],
    "salvagesTo": [
      {
        "id": 116,
        "amount": 3
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/4/44/Extended_Medium_Mag_I.png/348px-Extended_Medium_Mag_I.png.webp",
    "weight": 0.25,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Sold",
        "traderId": 0
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gunsmith&nbsp;",
        "workstationLevel": 1,
        "items": [
          {
            "id": 116,
            "amount": 6
          },
          {
            "id": 171,
            "amount": 1
          }
        ]
      }
    ],
    "meta": {
      "blueprint locked": "No"
    }
  },
  {
    "id": 283,
    "name": "Extended Medium Mag II",
    "category": "Modification",
    "sellPrice": 2000,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 171,
        "amount": 1
      },
      {
        "id": 100,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 100,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/5/50/Extended_Medium_Mag_II.png/348px-Extended_Medium_Mag_II.png.webp",
    "weight": 0.5,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gunsmith&nbsp;",
        "workstationLevel": 2,
        "items": [
          {
            "id": 100,
            "amount": 2
          },
          {
            "id": 171,
            "amount": 3
          }
        ]
      }
    ],
    "meta": {
      "blueprint locked": "Yes"
    }
  },
  {
    "id": 284,
    "name": "Extended Medium Mag III",
    "category": "Modification",
    "sellPrice": 5000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 171,
        "amount": 2
      },
      {
        "id": 106,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 100,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/a/a1/Extended_Medium_Mag_III.png/348px-Extended_Medium_Mag_III.png.webp",
    "weight": 0.75,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gunsmith&nbsp;",
        "workstationLevel": 3,
        "items": [
          {
            "id": 106,
            "amount": 2
          },
          {
            "id": 171,
            "amount": 5
          }
        ]
      }
    ],
    "meta": {
      "blueprint locked": "Yes"
    }
  },
  {
    "id": 285,
    "name": "Extended Shotgun Mag I",
    "category": "Modification",
    "sellPrice": 640,
    "rarity": "Common",
    "recyclesTo": [
      {
        "id": 116,
        "amount": 6
      }
    ],
    "salvagesTo": [
      {
        "id": 116,
        "amount": 3
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/9/9b/Extended_Shotgun_Mag_I.png/348px-Extended_Shotgun_Mag_I.png.webp",
    "weight": 0.25,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Sold",
        "traderId": 0
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gunsmith",
        "workstationLevel": 1,
        "items": [
          {
            "id": 116,
            "amount": 6
          },
          {
            "id": 171,
            "amount": 1
          }
        ]
      }
    ],
    "meta": {
      "blueprint locked": "No"
    }
  },
  {
    "id": 286,
    "name": "Extended Shotgun Mag II",
    "category": "Modification",
    "sellPrice": 2000,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 171,
        "amount": 1
      },
      {
        "id": 100,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 100,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/4/4f/Extended_Shotgun_Mag_II.png/348px-Extended_Shotgun_Mag_II.png.webp",
    "weight": 0.5,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gunsmith&nbsp;",
        "workstationLevel": 2,
        "items": [
          {
            "id": 100,
            "amount": 2
          },
          {
            "id": 171,
            "amount": 3
          }
        ]
      }
    ],
    "meta": {
      "blueprint locked": "Yes"
    }
  },
  {
    "id": 287,
    "name": "Extended Shotgun Mag III",
    "category": "Modification",
    "sellPrice": 5000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 171,
        "amount": 2
      },
      {
        "id": 106,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 100,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/7/77/Extended_Shotgun_Mag_III.png/348px-Extended_Shotgun_Mag_III.png.webp",
    "weight": 0.75,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gunsmith&nbsp;",
        "workstationLevel": 3,
        "items": [
          {
            "id": 106,
            "amount": 2
          },
          {
            "id": 171,
            "amount": 5
          }
        ]
      }
    ],
    "meta": {
      "blueprint locked": "Yes"
    }
  },
  {
    "id": 288,
    "name": "Flame Spray",
    "category": "Quick Use",
    "sellPrice": 2000,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 33,
        "amount": 1
      },
      {
        "id": 71,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 71,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/7/73/Flame_Spray.png/348px-Flame_Spray.png.webp",
    "maxStackSize": 1,
    "weight": 1,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Inventory",
        "workstationLevel": 1,
        "items": [
          {
            "id": 6,
            "amount": 1
          },
          {
            "id": 71,
            "amount": 1
          }
        ]
      }
    ],
    "meta": {
      "damage": 10
    }
  },
  {
    "id": 289,
    "name": "Free Loadout Augment",
    "category": "Augment",
    "sellPrice": 100,
    "rarity": "Common",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/c/cf/Free_Loadout_Augment.png/348px-Free_Loadout_Augment.png.webp",
    "weight": 1,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "meta": {
      "backpack slots": 14,
      "safe pocket slots": 0,
      "quick use slots": 4,
      "weapon slots": 2,
      "weight limit": 35,
      "shield compatibility": "Light"
    }
  },
  {
    "id": 290,
    "name": "Fruit Mix",
    "category": "Quick Use",
    "sellPrice": 1800,
    "rarity": "Uncommon",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/5/5a/Fruit_Mix.png/348px-Fruit_Mix.png.webp",
    "maxStackSize": 5,
    "weight": 0.3,
    "sources": [
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Workshop",
        "workstationLevel": 1,
        "items": [
          {
            "name": "Blueprint",
            "amount": 1
          }
        ]
      },
      {
        "amount": 1,
        "workstation": "Inventory",
        "workstationLevel": 1,
        "items": [
          {
            "id": 93,
            "amount": 1
          },
          {
            "id": 9,
            "amount": 1
          },
          {
            "id": 126,
            "amount": 1
          }
        ]
      }
    ],
    "meta": {
      "healing": 25,
      "stamina": 50,
      "use time": 2
    }
  },
  {
    "id": 291,
    "name": "Gas Grenade",
    "category": "Quick Use",
    "sellPrice": 270,
    "rarity": "Common",
    "recyclesTo": [
      {
        "id": 35,
        "amount": 1
      },
      {
        "id": 145,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 35,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/f/fe/Gas_Grenade.png/348px-Gas_Grenade.png.webp",
    "maxStackSize": 3,
    "weight": 0.2,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Workshop",
        "workstationLevel": 1,
        "items": [
          {
            "name": "Blueprint",
            "amount": 1
          }
        ]
      },
      {
        "amount": 1,
        "workstation": "Explosives Station",
        "workstationLevel": 1,
        "items": [
          {
            "id": 35,
            "amount": 4
          },
          {
            "id": 145,
            "amount": 2
          }
        ]
      }
    ],
    "meta": {
      "stamina": -25,
      "duration": 20,
      "radius": 7.5
    }
  },
  {
    "id": 292,
    "name": "Gas Grenade Trap",
    "category": "Quick Use",
    "sellPrice": 300,
    "rarity": "Common",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/3/33/Gas_Grenade_Trap.png/348px-Gas_Grenade_Trap.png.webp",
    "maxStackSize": 3,
    "weight": 0.25,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Workbench",
        "workstationLevel": 1,
        "items": [
          {
            "id": 291,
            "amount": 1
          },
          {
            "id": 192,
            "amount": 1
          }
        ]
      },
      {
        "amount": 1,
        "workstation": "Inventory",
        "workstationLevel": 1,
        "items": [
          {
            "id": 291,
            "amount": 1
          },
          {
            "id": 192,
            "amount": 1
          }
        ]
      }
    ],
    "meta": {
      "stamina": -25,
      "duration": 20,
      "radius": 7.5
    }
  },
  {
    "id": 293,
    "name": "Herbal Bandage",
    "category": "Quick Use",
    "sellPrice": 640,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 19,
        "amount": 2
      },
      {
        "id": 66,
        "amount": 5
      }
    ],
    "salvagesTo": [
      {
        "id": 66,
        "amount": 8
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/c/c5/Herbal_Bandage.png/348px-Herbal_Bandage.png.webp",
    "maxStackSize": 5,
    "weight": 0.15,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Sold",
        "traderId": 0
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Medical Lab",
        "workstationLevel": 2,
        "items": [
          {
            "id": 59,
            "amount": 1
          },
          {
            "id": 78,
            "amount": 1
          }
        ]
      }
    ],
    "meta": {
      "healing": 3.5,
      "use time": 1.5,
      "duration": 10
    }
  },
  {
    "id": 294,
    "name": "Horizontal Grip",
    "category": "Modification",
    "sellPrice": 7000,
    "rarity": "Epic",
    "recyclesTo": [
      {
        "id": 58,
        "amount": 2
      },
      {
        "id": 106,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 100,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/8/89/Horizontal_Grip.png/348px-Horizontal_Grip.png.webp",
    "weight": 0.5,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gunsmith",
        "workstationLevel": 3,
        "items": [
          {
            "id": 106,
            "amount": 2
          },
          {
            "id": 58,
            "amount": 5
          }
        ]
      }
    ],
    "meta": {
      "blueprint locked": "Yes"
    }
  },
  {
    "id": 296,
    "name": "Kinetic Converter",
    "category": "Modification",
    "sellPrice": 7000,
    "rarity": "Legendary",
    "recyclesTo": [
      {
        "id": 58,
        "amount": 2
      },
      {
        "id": 106,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 100,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/7/71/Kinetic_Converter.png/348px-Kinetic_Converter.png.webp",
    "weight": 0.75,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "?",
        "workstationLevel": 1,
        "items": [
          {
            "name": "?",
            "amount": 1
          }
        ]
      }
    ],
    "meta": {
      "blueprint locked": "Yes"
    }
  },
  {
    "id": 297,
    "name": "Laser Trap: Lure",
    "category": "Quick Use",
    "sellPrice": 1000,
    "rarity": "Uncommon",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/9/92/Lure_Grenade_Trap.png/348px-Lure_Grenade_Trap.png.webp",
    "maxStackSize": 3,
    "weight": 0.25,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Workbench",
        "workstationLevel": 1,
        "items": [
          {
            "id": 306,
            "amount": 1
          },
          {
            "id": 192,
            "amount": 1
          }
        ]
      },
      {
        "amount": 1,
        "workstation": "Inventory",
        "workstationLevel": 1,
        "items": [
          {
            "id": 306,
            "amount": 1
          },
          {
            "id": 192,
            "amount": 1
          }
        ]
      }
    ],
    "meta": {
      "duration": 15,
      "radius": 50
    }
  },
  {
    "id": 298,
    "name": "Laser Trap: Smoke",
    "category": "Quick Use",
    "sellPrice": 640,
    "rarity": "Rare",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/a/ac/Smoke_Grenade_Trap.png/348px-Smoke_Grenade_Trap.png.webp",
    "maxStackSize": 3,
    "weight": 0.3,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Workbench",
        "workstationLevel": 1,
        "items": [
          {
            "id": 203,
            "amount": 1
          },
          {
            "id": 192,
            "amount": 1
          }
        ]
      },
      {
        "amount": 1,
        "workstation": "Inventory",
        "workstationLevel": 1,
        "items": [
          {
            "id": 203,
            "amount": 1
          },
          {
            "id": 192,
            "amount": 1
          }
        ]
      }
    ],
    "meta": {
      "duration": 20,
      "radius": 7.5
    }
  },
  {
    "id": 299,
    "name": "Launcher Ammo",
    "category": "Ammunition",
    "sellPrice": 250,
    "rarity": "Rare",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/9/99/Launcher_Ammo.png/348px-Launcher_Ammo.png.webp",
    "maxStackSize": 24,
    "weight": 0.1,
    "sources": [
      {
        "type": "Crafting"
      },
      {
        "type": "Sold",
        "traderId": 0
      }
    ],
    "crafting": [
      {
        "amount": 6,
        "workstation": "Workbench",
        "workstationLevel": 1,
        "items": [
          {
            "id": 14,
            "amount": 1
          },
          {
            "id": 42,
            "amount": 2
          }
        ]
      }
    ]
  },
  {
    "id": 301,
    "name": "Light Impact Grenade",
    "category": "Quick Use",
    "sellPrice": 270,
    "rarity": "Common",
    "recyclesTo": [
      {
        "id": 35,
        "amount": 1
      },
      {
        "id": 116,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 35,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/4/4c/Light_Impact_Grenade.png/348px-Light_Impact_Grenade.png.webp",
    "maxStackSize": 5,
    "weight": 0.1,
    "sources": [
      {
        "type": "Crafting"
      },
      {
        "type": "Scavenging"
      },
      {
        "type": "Sold",
        "traderId": 0
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Workshop",
        "workstationLevel": 1,
        "items": [
          {
            "name": "Blueprint",
            "amount": 1
          }
        ]
      },
      {
        "amount": 1,
        "workstation": "Explosives Station",
        "workstationLevel": 1,
        "items": [
          {
            "id": 116,
            "amount": 1
          },
          {
            "id": 35,
            "amount": 3
          }
        ]
      },
      {
        "amount": 1,
        "workstation": "Workbench",
        "workstationLevel": 1,
        "items": [
          {
            "id": 116,
            "amount": 1
          },
          {
            "id": 35,
            "amount": 3
          }
        ]
      },
      {
        "amount": 1,
        "workstation": "Inventory",
        "workstationLevel": 1,
        "items": [
          {
            "id": 116,
            "amount": 1
          },
          {
            "id": 35,
            "amount": 3
          }
        ]
      }
    ],
    "meta": {
      "damage": 30,
      "radius": 2.5
    }
  },
  {
    "id": 302,
    "name": "Lightweight Stock",
    "category": "Modification",
    "sellPrice": 5000,
    "rarity": "Epic",
    "recyclesTo": [
      {
        "id": 58,
        "amount": 1
      },
      {
        "id": 106,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "name": "?",
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/c/cb/Lightweight_Stock.png/348px-Lightweight_Stock.png.webp",
    "weight": 0.25,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gunsmith",
        "workstationLevel": 3,
        "items": [
          {
            "id": 106,
            "amount": 2
          },
          {
            "id": 58,
            "amount": 5
          }
        ]
      }
    ],
    "meta": {
      "blueprint locked": "Yes"
    }
  },
  {
    "id": 303,
    "name": "Looting Mk. 1",
    "category": "Augment",
    "sellPrice": 640,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 145,
        "amount": 3
      },
      {
        "id": 116,
        "amount": 3
      }
    ],
    "salvagesTo": [
      {
        "id": 116,
        "amount": 3
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/2/27/Looting_Mk._1.png/348px-Looting_Mk._1.png.webp",
    "weight": 1,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Sold",
        "traderId": 0
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Workbench",
        "workstationLevel": 1,
        "items": [
          {
            "id": 145,
            "amount": 6
          },
          {
            "id": 116,
            "amount": 6
          }
        ]
      },
      {
        "amount": 1,
        "workstation": "Gear Bench",
        "workstationLevel": 1,
        "items": [
          {
            "id": 145,
            "amount": 6
          },
          {
            "id": 116,
            "amount": 6
          }
        ]
      }
    ],
    "meta": {
      "backpack slots": 18,
      "safe pocket slots": 1,
      "quick use slots": 4,
      "weapon slots": 2,
      "weight limit": 50,
      "shield compatibility": "Light"
    }
  },
  {
    "id": 304,
    "name": "Looting Mk. 3 (Cautious)",
    "category": "Augment",
    "sellPrice": 5000,
    "rarity": "Epic",
    "recyclesTo": [
      {
        "id": 127,
        "amount": 1
      },
      {
        "id": 2,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "name": "?",
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/6/68/Looting_Mk._3_%28Cautious%29.png/348px-Looting_Mk._3_%28Cautious%29.png.webp",
    "weight": 3,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gear Bench",
        "workstationLevel": 3,
        "items": [
          {
            "id": 2,
            "amount": 2
          },
          {
            "id": 127,
            "amount": 3
          }
        ]
      }
    ],
    "meta": {
      "backpack slots": 24,
      "safe pocket slots": 2,
      "quick use slots": 5,
      "weapon slots": 2,
      "weight limit": 70,
      "shield compatibility": "Light"
    }
  },
  {
    "id": 305,
    "name": "Looting Mk. 3 (Survivor)",
    "category": "Augment",
    "sellPrice": 5000,
    "rarity": "Epic",
    "recyclesTo": [
      {
        "id": 127,
        "amount": 1
      },
      {
        "id": 2,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "name": "?",
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/7/74/Looting_Mk._3_%28Survivor%29.png/348px-Looting_Mk._3_%28Survivor%29.png.webp",
    "weight": 4,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gear Bench",
        "workstationLevel": 3,
        "items": [
          {
            "id": 2,
            "amount": 2
          },
          {
            "id": 127,
            "amount": 3
          }
        ]
      }
    ],
    "meta": {
      "backpack slots": 20,
      "safe pocket slots": 3,
      "quick use slots": 5,
      "weapon slots": 2,
      "deployable utility slots": 1,
      "weight limit": 80,
      "shield compatibility": "Light, Medium"
    }
  },
  {
    "id": 306,
    "name": "Lure Grenade",
    "category": "Quick Use",
    "sellPrice": 1000,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 165,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 165,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/7/77/Lure_Grenade.png/348px-Lure_Grenade.png.webp",
    "maxStackSize": 3,
    "weight": 0.4,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Workshop",
        "workstationLevel": 1,
        "items": [
          {
            "name": "Blueprint",
            "amount": 1
          }
        ]
      },
      {
        "amount": 1,
        "workstation": "Utility Station",
        "workstationLevel": 2,
        "items": [
          {
            "id": 165,
            "amount": 1
          },
          {
            "id": 60,
            "amount": 1
          }
        ]
      }
    ],
    "meta": {
      "duration": 15,
      "radius": 50
    }
  },
  {
    "id": 307,
    "name": "Muzzle Brake I",
    "category": "Modification",
    "sellPrice": 640,
    "rarity": "Common",
    "recyclesTo": [
      {
        "id": 103,
        "amount": 5
      }
    ],
    "salvagesTo": [
      {
        "id": 103,
        "amount": 3
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/4/4f/Muzzle_Brake_I.png/348px-Muzzle_Brake_I.png.webp",
    "weight": 0.25,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Sold",
        "traderId": 0
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gunsmith",
        "workstationLevel": 1,
        "items": [
          {
            "id": 103,
            "amount": 6
          },
          {
            "id": 192,
            "amount": 1
          }
        ]
      }
    ],
    "meta": {
      "blueprint locked": "No"
    }
  },
  {
    "id": 308,
    "name": "Muzzle Brake III",
    "category": "Modification",
    "sellPrice": 5000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 192,
        "amount": 2
      },
      {
        "id": 106,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "name": "?",
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/a/a2/Muzzle_Brake_III.png",
    "weight": 0.5,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gunsmith",
        "workstationLevel": 3,
        "items": [
          {
            "id": 106,
            "amount": 2
          },
          {
            "id": 192,
            "amount": 8
          }
        ]
      }
    ],
    "meta": {
      "blueprint locked": "Yes"
    }
  },
  {
    "id": 309,
    "name": "Padded Stock",
    "category": "Modification",
    "sellPrice": 5000,
    "rarity": "Epic",
    "recyclesTo": [
      {
        "id": 58,
        "amount": 1
      },
      {
        "id": 106,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "name": "?",
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/4/4b/Padded_Stock.png/348px-Padded_Stock.png.webp",
    "weight": 0.5,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gunsmith",
        "workstationLevel": 3,
        "items": [
          {
            "id": 106,
            "amount": 2
          },
          {
            "id": 58,
            "amount": 5
          }
        ]
      }
    ],
    "meta": {
      "blueprint locked": "Yes"
    }
  },
  {
    "id": 310,
    "name": "Patrol Car Key",
    "category": "Key",
    "sellPrice": 100,
    "rarity": "Uncommon",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/b/b0/Patrol_Car_Key.png",
    "maxStackSize": 1,
    "weight": 0.25
  },
  {
    "id": 311,
    "name": "Poster Of Natural Wonders",
    "category": "Trinket",
    "sellPrice": 2000,
    "rarity": "Uncommon",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/f/f2/Poster_of_Natural_Wonders.png/348px-Poster_of_Natural_Wonders.png.webp",
    "maxStackSize": 3,
    "weight": 0.3,
    "sources": [
      {
        "type": "Scavenging"
      }
    ],
    "canBeFoundIn": "Commercial,Residential"
  },
  {
    "id": 312,
    "name": "Pulse Mine",
    "category": "Quick Use",
    "sellPrice": 470,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 35,
        "amount": 6
      }
    ],
    "salvagesTo": [
      {
        "id": 35,
        "amount": 3
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/a/af/Pulse_Mine.png/348px-Pulse_Mine.png.webp",
    "maxStackSize": 3,
    "weight": 0.25,
    "sources": [
      {
        "type": "Sold",
        "traderId": 0
      }
    ],
    "meta": {
      "radius": 7.5
    }
  },
  {
    "id": 313,
    "name": "Red Light Stick",
    "category": "Quick Use",
    "sellPrice": 150,
    "rarity": "Common",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/c/cc/Blue_Light_Stick.png/348px-Blue_Light_Stick.png.webp",
    "maxStackSize": 5,
    "weight": 0.15,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Sold",
        "traderId": 0
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Workshop",
        "workstationLevel": 1,
        "items": [
          {
            "name": "Blueprint",
            "amount": 1
          }
        ]
      },
      {
        "amount": 1,
        "workstation": "Utility Station",
        "workstationLevel": 2,
        "items": [
          {
            "id": 35,
            "amount": 3
          }
        ]
      }
    ],
    "meta": {
      "duration": 40,
      "radius": 7
    }
  },
  {
    "id": 314,
    "name": "Remote Raider Flare",
    "category": "Quick Use",
    "sellPrice": 270,
    "rarity": "Common",
    "recyclesTo": [
      {
        "id": 35,
        "amount": 1
      },
      {
        "id": 145,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "name": "?",
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/f/ff/Remote_Raider_Flare.png/348px-Remote_Raider_Flare.png.webp",
    "maxStackSize": 3,
    "weight": 0.2,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Utility Station",
        "workstationLevel": 1,
        "items": [
          {
            "id": 35,
            "amount": 2
          },
          {
            "id": 145,
            "amount": 4
          }
        ]
      }
    ]
  },
  {
    "id": 315,
    "name": "Ruined Augment",
    "category": "Recyclable",
    "sellPrice": 270,
    "rarity": "Common",
    "recyclesTo": [
      {
        "id": 145,
        "amount": 2
      },
      {
        "id": 116,
        "amount": 2
      }
    ],
    "salvagesTo": [
      {
        "name": "?",
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/a/aa/Ruined_Augment.png/348px-Ruined_Augment.png.webp",
    "maxStackSize": 1,
    "weight": 3
  },
  {
    "id": 316,
    "name": "Seeker Grenade",
    "category": "Quick Use",
    "sellPrice": 640,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 42,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 35,
        "amount": 3
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/3/35/Seeker_Grenade.png/348px-Seeker_Grenade.png.webp",
    "maxStackSize": 5,
    "weight": 0.2,
    "sources": [
      {
        "type": "Sold",
        "traderId": 0
      }
    ],
    "meta": {
      "damage": 50,
      "homing range": 20
    }
  },
  {
    "id": 317,
    "name": "Shield Recharger",
    "category": "Quick Use",
    "sellPrice": 520,
    "rarity": "Uncommon",
    "recyclesTo": [
      {
        "id": 145,
        "amount": 4
      }
    ],
    "salvagesTo": [
      {
        "id": 145,
        "amount": 3
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/4/44/Shield_Recharger.png/348px-Shield_Recharger.png.webp",
    "maxStackSize": 5,
    "weight": 0.15,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Sold",
        "traderId": 0
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Workbench I",
        "workstationLevel": 1,
        "items": [
          {
            "id": 145,
            "amount": 5
          },
          {
            "id": 16,
            "amount": 1
          }
        ]
      },
      {
        "amount": 1,
        "workstation": "Inventory",
        "workstationLevel": 1,
        "items": [
          {
            "id": 145,
            "amount": 5
          },
          {
            "id": 16,
            "amount": 1
          }
        ]
      }
    ],
    "meta": {
      "shield": 50,
      "use time": 2,
      "duration": 10,
      "recharge": 4
    }
  },
  {
    "id": 318,
    "name": "Shotgun Ammo",
    "category": "Ammunition",
    "sellPrice": 20,
    "rarity": "Common",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/c/c1/ShotgunAmmo_Box.png/348px-ShotgunAmmo_Box.png.webp",
    "maxStackSize": 20,
    "weight": 0.085,
    "crafting": [
      {
        "amount": 5,
        "workstation": "Workbench",
        "workstationLevel": 1,
        "items": [
          {
            "id": 103,
            "amount": 3
          },
          {
            "id": 35,
            "amount": 2
          }
        ]
      }
    ]
  },
  {
    "id": 319,
    "name": "Shotgun Choke I",
    "category": "Modification",
    "sellPrice": 640,
    "rarity": "Common",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/0/07/Shotgun_Choke_I.png/348px-Shotgun_Choke_I.png.webp",
    "weight": 0.25,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Sold",
        "traderId": 0
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gunsmith",
        "workstationLevel": 1,
        "items": [
          {
            "id": 103,
            "amount": 6
          },
          {
            "id": 192,
            "amount": 1
          }
        ]
      }
    ],
    "meta": {
      "blueprint locked": "No"
    }
  },
  {
    "id": 320,
    "name": "Shotgun Choke III",
    "category": "Modification",
    "sellPrice": 5000,
    "rarity": "Rare",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/3/36/Shotgun_Choke_III.png",
    "weight": 0.5,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gunsmith",
        "workstationLevel": 3,
        "items": [
          {
            "id": 106,
            "amount": 2
          },
          {
            "id": 192,
            "amount": 8
          }
        ]
      }
    ],
    "meta": {
      "blueprint locked": "Yes"
    }
  },
  {
    "id": 322,
    "name": "Shotgun Silencer",
    "category": "Modification",
    "sellPrice": 5000,
    "rarity": "Epic",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/4/4d/Shotgun_Silencer.png/348px-Shotgun_Silencer.png.webp",
    "weight": 0.5,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gunsmith",
        "workstationLevel": 3,
        "items": [
          {
            "id": 106,
            "amount": 2
          },
          {
            "id": 192,
            "amount": 8
          }
        ]
      }
    ],
    "meta": {
      "blueprint locked": "Yes"
    }
  },
  {
    "id": 323,
    "name": "Showstopper",
    "category": "Quick Use",
    "sellPrice": 2200,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 21,
        "amount": 2
      },
      {
        "id": 60,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 21,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/1/18/Showstopper.png/348px-Showstopper.png.webp",
    "maxStackSize": 5,
    "weight": 0.4,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Explosives Station",
        "workstationLevel": 3,
        "items": [
          {
            "id": 2,
            "amount": 1
          },
          {
            "id": 188,
            "amount": 1
          }
        ]
      }
    ],
    "meta": {
      "arc stun": 10,
      "raider stun": 2,
      "radius": 6
    }
  },
  {
    "id": 324,
    "name": "Silencer I",
    "category": "Modification",
    "sellPrice": 2000,
    "rarity": "Uncommon",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/f/f7/Silencer_I.png/348px-Silencer_I.png.webp",
    "weight": 0.25,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gunsmith",
        "workstationLevel": 2,
        "items": [
          {
            "name": "x2 Mechanical Components",
            "amount": 1
          },
          {
            "name": "x4 Wires",
            "amount": 1
          }
        ]
      }
    ],
    "meta": {
      "blueprint locked": "Yes"
    }
  },
  {
    "id": 325,
    "name": "Silencer III",
    "category": "Modification",
    "sellPrice": 7000,
    "rarity": "Epic",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/3/3e/Silencer_III.png/348px-Silencer_III.png.webp",
    "weight": 0.75,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "?",
        "workstationLevel": 1,
        "items": [
          {
            "name": "?",
            "amount": 1
          }
        ]
      }
    ],
    "meta": {
      "blueprint locked": "Yes"
    }
  },
  {
    "id": 326,
    "name": "Spaceport Container Storage Key",
    "category": "Key",
    "sellPrice": 100,
    "rarity": "Rare",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/9/98/Spaceport_Key.png/348px-Spaceport_Key.png.webp",
    "maxStackSize": 1,
    "weight": 0.25,
    "sources": [
      {
        "type": "Scavenging"
      }
    ]
  },
  {
    "id": 327,
    "name": "Spaceport Control Tower Key",
    "category": "Key",
    "sellPrice": 100,
    "rarity": "Rare",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/9/98/Spaceport_Key.png/348px-Spaceport_Key.png.webp",
    "maxStackSize": 1,
    "weight": 0.25,
    "sources": [
      {
        "type": "Scavenging"
      }
    ]
  },
  {
    "id": 329,
    "name": "Spaceport Trench Tower Key",
    "category": "Key",
    "sellPrice": 100,
    "rarity": "Uncommon",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/9/98/Spaceport_Key.png/348px-Spaceport_Key.png.webp",
    "maxStackSize": 1,
    "weight": 0.25,
    "sources": [
      {
        "type": "Scavenging"
      }
    ]
  },
  {
    "id": 330,
    "name": "Spaceport Warehouse Key",
    "category": "Key",
    "sellPrice": 100,
    "rarity": "Uncommon",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/9/98/Spaceport_Key.png/348px-Spaceport_Key.png.webp",
    "maxStackSize": 1,
    "weight": 0.25,
    "sources": [
      {
        "type": "Scavenging"
      }
    ]
  },
  {
    "id": 331,
    "name": "Stella Montis Archives Key",
    "category": "Key",
    "sellPrice": 100,
    "rarity": "Epic",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/1/19/Stella_Montis_Key.png/348px-Stella_Montis_Key.png.webp",
    "maxStackSize": 1,
    "weight": 0.25,
    "sources": [
      {
        "type": "Scavenging"
      }
    ]
  },
  {
    "id": 332,
    "name": "Stella Montis Assembly Admin Key",
    "category": "Key",
    "sellPrice": 250,
    "rarity": "Uncommon",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/1/19/Stella_Montis_Key.png/348px-Stella_Montis_Key.png.webp",
    "maxStackSize": 1,
    "weight": 0.25,
    "sources": [
      {
        "type": "Scavenging"
      }
    ]
  },
  {
    "id": 333,
    "name": "Stella Montis Medical Storage Key",
    "category": "Key",
    "sellPrice": 100,
    "rarity": "Uncommon",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/1/19/Stella_Montis_Key.png/348px-Stella_Montis_Key.png.webp",
    "maxStackSize": 1,
    "weight": 0.25,
    "sources": [
      {
        "type": "Scavenging"
      }
    ]
  },
  {
    "id": 334,
    "name": "Stella Montis Security Checkpoint Key",
    "category": "Key",
    "sellPrice": 100,
    "rarity": "Rare",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/1/19/Stella_Montis_Key.png/348px-Stella_Montis_Key.png.webp",
    "maxStackSize": 1,
    "weight": 0.25,
    "sources": [
      {
        "type": "Scavenging"
      }
    ]
  },
  {
    "id": 335,
    "name": "Surge Shield Recharger",
    "category": "Quick Use",
    "sellPrice": 1200,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 60,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 116,
        "amount": 5
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/c/c9/Surge_Shield_Recharger.png/348px-Surge_Shield_Recharger.png.webp",
    "maxStackSize": 5,
    "weight": 0.2,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Sold",
        "traderId": 0
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Medical Lab",
        "workstationLevel": 2,
        "items": [
          {
            "id": 60,
            "amount": 1
          },
          {
            "id": 1,
            "amount": 1
          }
        ]
      }
    ],
    "meta": {
      "use time": 5,
      "recharge": 50
    }
  },
  {
    "id": 336,
    "name": "Tactical Mk. 2",
    "category": "Augment",
    "sellPrice": 2000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 60,
        "amount": 1
      },
      {
        "id": 96,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 60,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/6/6c/Tactical_Mk._2.png/348px-Tactical_Mk._2.png.webp",
    "weight": 2,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Sold",
        "traderId": 0
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gear Bench",
        "workstationLevel": 2,
        "items": [
          {
            "id": 60,
            "amount": 2
          },
          {
            "id": 96,
            "amount": 3
          }
        ]
      }
    ],
    "meta": {
      "backpack slots": 17,
      "safe pocket slots": 1,
      "quick use slots": 5,
      "weapon slots": 2,
      "deployable utility slots": 1,
      "weight limit": 45,
      "shield compatibility": "Light, Medium"
    }
  },
  {
    "id": 337,
    "name": "Tactical Mk. 3 (Defensive)",
    "category": "Augment",
    "sellPrice": 5000,
    "rarity": "Epic",
    "recyclesTo": [
      {
        "id": 127,
        "amount": 1
      },
      {
        "id": 2,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "name": "?",
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/a/a9/Tactical_Mk._3_%28Defensive%29.png/348px-Tactical_Mk._3_%28Defensive%29.png.webp",
    "weight": 5,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gear Bench",
        "workstationLevel": 3,
        "items": [
          {
            "id": 2,
            "amount": 2
          },
          {
            "id": 127,
            "amount": 3
          }
        ]
      }
    ],
    "meta": {
      "backpack slots": 20,
      "safe pocket slots": 1,
      "quick use slots": 5,
      "weapon slots": 2,
      "weight limit": 60,
      "shield compatibility": "Light,Medium,Heavy"
    }
  },
  {
    "id": 338,
    "name": "Tactical Mk. 3 (Healing)",
    "category": "Augment",
    "sellPrice": 5000,
    "rarity": "Epic",
    "recyclesTo": [
      {
        "id": 127,
        "amount": 1
      },
      {
        "id": 2,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 60,
        "amount": 2
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/1/12/Tactical_Mk._3_%28Healing%29.png/348px-Tactical_Mk._3_%28Healing%29.png.webp",
    "weight": 4,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gear Bench",
        "workstationLevel": 3,
        "items": [
          {
            "id": 2,
            "amount": 2
          },
          {
            "id": 127,
            "amount": 3
          }
        ]
      }
    ],
    "meta": {
      "backpack slots": 16,
      "safe pocket slots": 3,
      "quick use slots": 4,
      "weapon slots": 2,
      "healing item slots": 3,
      "weight limit": 55,
      "shield compatibility": "Light, Medium"
    }
  },
  {
    "id": 339,
    "name": "Torch Ginger",
    "category": "Topside Material",
    "sellPrice": 300,
    "rarity": "Uncommon",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/0/0d/Great_Mullein.png/348px-Great_Mullein.png.webp",
    "maxStackSize": 15,
    "weight": 0.25,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Recycling"
      },
      {
        "type": "Sold",
        "traderId": 1
      }
    ],
    "canBeFoundIn": "Nature"
  },
  {
    "id": 340,
    "name": "Trailblazer",
    "category": "Quick Use",
    "sellPrice": 1600,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 42,
        "amount": 2
      }
    ],
    "salvagesTo": [
      {
        "id": 42,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/8/89/Trailblazer.png/348px-Trailblazer.png.webp",
    "maxStackSize": 3,
    "weight": 1,
    "sources": [
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Explosives Station",
        "workstationLevel": 3,
        "items": [
          {
            "name": "?x Synthesized Fuel",
            "amount": 1
          },
          {
            "name": "?x Explosive Compound",
            "amount": 1
          }
        ]
      }
    ],
    "meta": {
      "damage": 20,
      "radius": 2
    }
  },
  {
    "id": 341,
    "name": "Trigger 'Nade",
    "category": "Quick Use",
    "sellPrice": 1000,
    "rarity": "Rare",
    "recyclesTo": [
      {
        "id": 35,
        "amount": 1
      },
      {
        "id": 127,
        "amount": 1
      }
    ],
    "salvagesTo": [
      {
        "id": 127,
        "amount": 1
      }
    ],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/0/09/Trigger_Nade.png/348px-Trigger_Nade.png.webp",
    "maxStackSize": 3,
    "weight": 0.4,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Explosives Station",
        "workstationLevel": 2,
        "items": [
          {
            "id": 42,
            "amount": 2
          },
          {
            "id": 127,
            "amount": 1
          }
        ]
      }
    ],
    "meta": {
      "damage": 90,
      "radius": 7.5
    }
  },
  {
    "id": 342,
    "name": "Vertical Grip I",
    "category": "Modification",
    "sellPrice": 640,
    "rarity": "Common",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/4/4d/Vertical_Grip_I.png/348px-Vertical_Grip_I.png.webp",
    "weight": 0.25,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      },
      {
        "type": "Sold",
        "traderId": 0
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gunsmith",
        "workstationLevel": 1,
        "items": [
          {
            "id": 116,
            "amount": 6
          },
          {
            "id": 58,
            "amount": 1
          }
        ]
      }
    ],
    "meta": {
      "blueprint locked": "No"
    }
  },
  {
    "id": 343,
    "name": "Vertical Grip III",
    "category": "Modification",
    "sellPrice": 5000,
    "rarity": "Rare",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/2/20/Vertical_Grip_III.png/348px-Vertical_Grip_III.png.webp",
    "weight": 0.75,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Gunsmith",
        "workstationLevel": 3,
        "items": [
          {
            "id": 106,
            "amount": 2
          },
          {
            "id": 58,
            "amount": 5
          }
        ]
      }
    ],
    "meta": {
      "blueprint locked": "Yes"
    }
  },
  {
    "id": 344,
    "name": "Wolfpack",
    "category": "Quick Use",
    "sellPrice": 5000,
    "rarity": "Epic",
    "recyclesTo": [],
    "salvagesTo": [],
    "imageUrl": "https://arcraiders.wiki/w/images/thumb/2/24/Wolfpack.png/348px-Wolfpack.png.webp",
    "maxStackSize": 1,
    "weight": 1,
    "sources": [
      {
        "type": "Scavenging"
      },
      {
        "type": "Crafting"
      }
    ],
    "crafting": [
      {
        "amount": 1,
        "workstation": "Explosives Station",
        "workstationLevel": 3,
        "items": [
          {
            "id": 65,
            "amount": 3
          },
          {
            "id": 14,
            "amount": 2
          }
        ]
      }
    ],
    "meta": {
      "damage": 166,
      "radius": 100
    }
  }
]
