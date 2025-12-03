export const quests = [
  {
    id: 0,
    name: 'Picking Up The Pieces',
    description: 'Go to any loot-marked area and search three containers.',
    location: ['Any'],
    trader: 'Shani',
    items_needed: [],
    rewards: [
      {
        id: 193,
        name: 'Rattler III',
        amount: 1,
      },
      {
        id: 194,
        name: 'Medium Ammo',
        amount: 80,
      },
    ],
  },
  {
    id: 1,
    name: 'Trash Into Treasure',
    description: 'Collect components in any area for Shani.',
    location: ['Any'],
    trader: 'Shani',
    items_needed: [
      {
        id: 192,
        name: 'Wires',
        amount: 6,
      },
      {
        id: 21,
        name: 'Battery',
        amount: 1,
      },
    ],
    rewards: [
      {
        id: 195,
        name: 'Tactical Mk. 1',
        amount: 1,
      },
      {
        id: 196,
        name: 'Adrenaline Shot',
        amount: 3,
      },
    ],
  },
  {
    id: 2,
    name: 'Clearer Skies',
    description: 'Hunt down ARC enemies and collect ARC Alloy for Shani.',
    location: ['Any'],
    trader: 'Shani',
    items_needed: [],
    rewards: [
      {
        id: 3,
        name: 'Backpack Cosmetic (Black - Hiker Color)',
        amount: 1,
      },
      {
        id: 197,
        name: 'Sterilized Bandage',
        amount: 3,
      },
      {
        id: 198,
        name: 'Light Shield',
        amount: 1,
      },
    ],
  },
  {
    id: 3,
    name: 'Off The Radar',
    description:
      'In one round, visit a Field Depot and repair its rooftop antenna.',
    location: ['Any'],
    trader: 'Shani',
    items_needed: [],
    rewards: [
      {
        id: 5,
        name: 'Defibrillator',
        amount: 2,
      },
    ],
  },
  {
    id: 4,
    name: 'A Bad Feeling',
    description: 'Search any ARC Probe or ARC Courier for intel.',
    location: ['Any'],
    trader: 'Celeste',
    items_needed: [],
    rewards: [
      {
        id: 103,
        name: 'Metal Parts',
        amount: 10,
      },
      {
        id: 171,
        name: 'Steel Spring',
        amount: 5,
      },
      {
        id: 58,
        name: 'Duct Tape',
        amount: 5,
      },
    ],
  },
  {
    id: 5,
    name: 'A Balanced Harvest',
    description:
      'In one round on Dam Battlegrounds, investigate an old agricultural research project.',
    location: ['Dam Battlegrounds'],
    trader: 'Celeste',
    items_needed: [],
    rewards: [
      {
        id: 8,
        name: 'Advanced Mechanical Components',
        amount: 3,
      },
      {
        id: 101,
        name: 'Medium Gun Parts',
        amount: 3,
      },
      {
        id: 171,
        name: 'Steel Spring',
        amount: 10,
      },
    ],
  },
  {
    id: 6,
    name: 'A Better Use',
    description: 'Call in and loot a Supply Drop from a Call Station.',
    location: ['Any'],
    trader: 'Tian Wen',
    items_needed: [],
    rewards: [
      {
        id: 10,
        name: 'Extended Light Magazine I',
        amount: 1,
      },
      {
        id: 199,
        name: 'Compensator I',
        amount: 1,
      },
      {
        id: 200,
        name: 'Stable Stock I',
        amount: 1,
      },
    ],
  },
  {
    id: 7,
    name: 'A Lay Of The Land',
    description:
      'In one round at Spaceport, explore Jiangsu Warehouse and Control Tower A6 to secure LiDAR scanners.',
    location: ['Spaceport'],
    trader: 'Shani',
    items_needed: [],
    rewards: [
      {
        id: 201,
        name: 'Dam Testing Annex Key',
        amount: 1,
      },
      {
        id: 202,
        name: 'Zipline',
        amount: 3,
      },
      {
        id: 203,
        name: 'Smoke Grenade',
        amount: 2,
      },
    ],
  },
  {
    id: 8,
    name: 'A New Type Of Plant',
    description:
      'In one round at Dam Battlegrounds, find a strange new plant near a Baron Husk and deliver it to Lance.',
    location: ['Dam Battlegrounds'],
    trader: 'Lance',
    items_needed: [],
    rewards: [
      {
        id: 204,
        name: 'Vita Shot',
        amount: 1,
      },
      {
        id: 8,
        name: 'Antiseptic',
        amount: 5,
      },
    ],
  },
  {
    id: 9,
    name: 'A Reveal in Ruins',
    description:
      'In one round in Buried City, locate an ESR Analyzer in a pharmacy and return it to Lance.',
    location: ['Buried City'],
    trader: 'Lance',
    items_needed: [],
    rewards: [
      {
        id: 14,
        name: 'Tactical Mk. 3 (Healing)',
        amount: 1,
      },
      {
        id: 15,
        name: 'Surge Shield Recharger',
        amount: 1,
      },
    ],
  },
  {
    id: 10,
    name: 'A Symbol Of Unification',
    description:
      'In one round on Dam Battlegrounds, visit Formicai Outpost and raise a flag over the Red Lake.',
    location: ['Dam Battlegrounds'],
    trader: 'Celeste',
    items_needed: [],
    rewards: [
      {
        id: 205,
        name: 'Aviator (Outfit)',
        amount: 1,
      },
      {
        id: 106,
        name: 'Mod Components',
        amount: 3,
      },
      {
        id: 58,
        name: 'Duct Tape',
        amount: 5,
      },
    ],
  },
  {
    id: 11,
    name: 'A Warm Place To Rest',
    description:
      'In Buried City, follow signs of survivors from an abandoned highway camp and inspect a grave.',
    location: ['Buried City'],
    trader: 'Apollo',
    items_needed: [],
    rewards: [
      {
        id: 18,
        name: 'Radio Renegade (Outfit - Goggles)',
        amount: 1,
      },
      {
        id: 206,
        name: 'Noisemaker',
        amount: 3,
      },
      {
        id: 207,
        name: 'Blue Light Stick',
        amount: 5,
      },
      {
        id: 141,
        name: 'Rosary',
        amount: 1,
      },
    ],
  },
  {
    id: 12,
    name: 'After Rain Comes',
    description:
      'In Buried City, repair flooded solar panels near Grandioso Apartments using wires and batteries.',
    location: ['Buried City'],
    trader: 'Celeste',
    items_needed: [
      {
        id: 192,
        name: 'Wires',
        amount: 5,
      },
      {
        id: 21,
        name: 'Battery',
        amount: 2,
      },
    ],
    rewards: [
      {
        id: 207,
        name: 'Blue Light Stick',
        amount: 5,
      },
      {
        id: 8,
        name: 'Antiseptic',
        amount: 3,
      },
      {
        id: 59,
        name: 'Durable Cloth',
        amount: 5,
      },
    ],
  },
  {
    id: 13,
    name: 'Armored Transports',
    description:
      'At The Blue Gate, infiltrate a checkpoint, find a key card, and loot an armored patrol car.',
    location: ['The Blue Gate'],
    trader: 'Tian Wen',
    items_needed: [],
    rewards: [
      {
        id: 21,
        name: 'Blue Yellow (Aviator Color)',
        amount: 1,
      },
      {
        id: 203,
        name: 'Smoke Grenade',
        amount: 3,
      },
      {
        id: 22,
        name: 'Defibrillator',
        amount: 3,
      },
    ],
  },
  {
    id: 14,
    name: 'Back On Top',
    description:
      'Tag key lookout locations across all four main maps for Tian Wen.',
    location: [
      'Buried City',
      'Spaceport',
      'Dam Battlegrounds',
      'The Blue Gate',
    ],
    trader: 'Tian Wen',
    items_needed: [],
    rewards: [
      {
        id: 208,
        name: 'Renegade I',
        amount: 1,
      },
      {
        id: 209,
        name: 'Stable Stock III',
        amount: 1,
      },
      {
        id: 194,
        name: 'Medium Ammo',
        amount: 80,
      },
    ],
  },
  {
    id: 15,
    name: 'Bees!',
    description:
      'In one round at The Blue Gate, investigate beehives in the Olive Grove.',
    location: ['The Blue Gate'],
    trader: 'Celeste',
    items_needed: [],
    rewards: [
      {
        id: 25,
        name: 'Advanced Electrical Components',
        amount: 1,
      },
      {
        id: 158,
        name: 'Sensors',
        amount: 3,
      },
    ],
  },
  {
    id: 16,
    name: 'Broken Monument',
    description:
      'In one round on Dam Battlegrounds, search a sacred scrapyard area for First Wave mementos and return them.',
    location: ['Dam Battlegrounds'],
    trader: 'Tian Wen',
    items_needed: [],
    rewards: [
      {
        id: 210,
        name: 'Arpeggio I',
        amount: 1,
      },
      {
        id: 211,
        name: 'Compensator II',
        amount: 1,
      },
      {
        id: 194,
        name: 'Medium Ammo',
        amount: 80,
      },
    ],
  },
  {
    id: 17,
    name: 'Building A Library',
    description:
      'In one round in Buried City, search the library for romance, detective, and adventure books.',
    location: ['Buried City'],
    trader: 'Apollo',
    items_needed: [],
    rewards: [
      {
        id: 28,
        name: 'Buried City Town Hall Key',
        amount: 1,
      },
    ],
  },
  {
    id: 18,
    name: "Celeste's Journals",
    description:
      'In one round on Dam Battlegrounds, recover two of Celeste’s journals from outposts and deliver them.',
    location: ['Dam Battlegrounds'],
    trader: 'Celeste',
    items_needed: [],
    rewards: [
      {
        id: 97,
        name: 'Magnetic Accelerator',
        amount: 1,
      },
      {
        id: 80,
        name: 'Heavy Gun Parts',
        amount: 3,
      },
      {
        id: 62,
        name: 'Exodus Modules',
        amount: 1,
      },
    ],
  },
  {
    id: 19,
    name: 'Communication Hideout',
    description:
      'In one round in Buried City, restore power and boot an antenna terminal at the Red Tower.',
    location: ['Buried City'],
    trader: 'Shani',
    items_needed: [],
    rewards: [
      {
        id: 30,
        name: 'Aviator (Outfit - Crimson Racer)',
        amount: 1,
      },
      {
        id: 212,
        name: 'Anvil III',
        amount: 1,
      },
      {
        id: 213,
        name: 'Heavy Ammo',
        amount: 40,
      },
    ],
  },
  {
    id: 20,
    name: 'Digging Up Dirt',
    description:
      'In Buried City, find a dead drop inside the Santa Maria Houses courtyard.',
    location: ['Buried City'],
    trader: 'Celeste',
    items_needed: [],
    rewards: [
      {
        id: 32,
        name: 'Advanced Electrical Components',
        amount: 2,
      },
      {
        id: 165,
        name: 'Speaker Component',
        amount: 4,
      },
    ],
  },
  {
    id: 21,
    name: "Doctor's Orders",
    description: 'Obtain basic medical supplies and herbs for Lance.',
    location: ['Any'],
    trader: 'Lance',
    items_needed: [
      {
        id: 174,
        name: 'Syringe',
        amount: 1,
      },
      {
        id: 8,
        name: 'Antiseptic',
        amount: 2,
      },
      {
        id: 59,
        name: 'Durable Cloth',
        amount: 1,
      },
      {
        id: 78,
        name: 'Great Mullein',
        amount: 1,
      },
    ],
    rewards: [
      {
        id: 196,
        name: 'Adrenaline Shot',
        amount: 3,
      },
      {
        id: 197,
        name: 'Sterilized Bandage',
        amount: 3,
      },
      {
        id: 33,
        name: 'Surge Shield Recharger',
        amount: 1,
      },
    ],
  },
  {
    id: 22,
    name: 'Dormant Barons',
    description: 'On several maps, loot a Baron Husk for Shani.',
    location: ['Dam Battlegrounds', 'Spaceport', 'The Blue Gate'],
    trader: 'Shani',
    items_needed: [],
    rewards: [
      {
        id: 214,
        name: 'Door Blocker',
        amount: 3,
      },
      {
        id: 'lil_smoke_grenade',
        name: "Li'l Smoke Grenade",
        amount: 3,
      },
    ],
  },
  {
    id: 23,
    name: 'Down To Earth',
    description:
      'In one round, deliver a Field Crate from a Field Depot to a Supply Station and collect the payment.',
    location: ['Any'],
    trader: 'Shani',
    items_needed: [],
    rewards: [
      {
        id: 215,
        name: 'Combat Mk. 1',
        amount: 1,
      },
      {
        id: 216,
        name: 'Medium Shield',
        amount: 1,
      },
    ],
  },
  {
    id: 24,
    name: 'Echoes Of Victory Ridge',
    description:
      'In one round at Victory Ridge, retrieve old battle plans from a hideout and deliver a patch to Celeste.',
    location: ['Dam Battlegrounds'],
    trader: 'Celeste',
    items_needed: [],
    rewards: [
      {
        id: 42,
        name: 'Crude Explosives',
        amount: 6,
      },
      {
        id: 127,
        name: 'Processor',
        amount: 2,
      },
      {
        id: 110,
        name: 'Music Box',
        amount: 1,
      },
    ],
  },
  {
    id: 25,
    name: 'Espresso',
    description:
      'In one round, salvage parts from an espresso machine and bring them to Apollo.',
    location: ['Any'],
    trader: 'Apollo',
    items_needed: [],
    rewards: [
      {
        id: 36,
        name: 'Coffee Pot',
        amount: 1,
      },
      {
        id: 196,
        name: 'Adrenaline Shot',
        amount: 3,
      },
    ],
  },
  {
    id: 26,
    name: 'Eyes In The Sky',
    description:
      'Install LiDAR scanners at high vantage points across Dam Battlegrounds, Spaceport, and Buried City.',
    location: ['Dam Battlegrounds', 'Buried City', 'Spaceport'],
    trader: 'Shani',
    items_needed: [],
    rewards: [
      {
        id: 217,
        name: 'Tagging Grenade',
        amount: 3,
      },
      {
        id: 218,
        name: 'Vita Spray',
        amount: 1,
      },
      {
        id: 219,
        name: 'Yellow Light Stick',
        amount: 5,
      },
    ],
  },
  {
    id: 27,
    name: 'Eyes On The Prize',
    description:
      'On a rooftop terrace in Buried City, rewire a solar panel for Tian Wen.',
    location: ['Buried City'],
    trader: 'Tian Wen',
    items_needed: [
      {
        id: 192,
        name: 'Wires',
        amount: 3,
      },
    ],
    rewards: [
      {
        id: 40,
        name: 'Extended Shotgun Mag II',
        amount: 1,
      },
      {
        id: 41,
        name: 'Extended Medium Mag II',
        amount: 1,
      },
    ],
  },
  {
    id: 28,
    name: 'Flickering Threat',
    description:
      'On Dam Battlegrounds, restore power in a generation complex and shut down a dangerous system.',
    location: ['Dam Battlegrounds'],
    trader: 'Celeste',
    items_needed: [],
    rewards: [
      {
        id: 43,
        name: 'Radio Renegade (Outfit - Helmet)',
        amount: 1,
      },
      {
        id: 101,
        name: 'Medium Gun Parts',
        amount: 5,
      },
      {
        id: 44,
        name: 'Advanced Mechanical Components',
        amount: 3,
      },
    ],
  },
  {
    id: 29,
    name: 'Greasing Her Palms',
    description:
      'Visit three key locations across Spaceport, Dam Battlegrounds and Buried City to scope out assets for Celeste.',
    location: ['Spaceport', 'Dam Battlegrounds', 'Buried City'],
    trader: 'Celeste',
    items_needed: [],
    rewards: [
      {
        id: 46,
        name: 'Lure Grenade Blueprint',
        amount: 1,
      },
      {
        id: 165,
        name: 'Speaker Component',
        amount: 1,
      },
      {
        id: 60,
        name: 'Electrical Components',
        amount: 1,
      },
    ],
  },
  {
    id: 30,
    name: 'Hatch Repairs',
    description:
      'Repair leaking pipes near a Raider Hatch and search for a lost key.',
    location: ['Any'],
    trader: 'Shani',
    items_needed: [],
    rewards: [
      {
        id: 220,
        name: 'Raider Hatch Key',
        amount: 1,
      },
      {
        id: 221,
        name: 'Binoculars',
        amount: 1,
      },
    ],
  },
  {
    id: 31,
    name: 'Industrial Espionage',
    description:
      'In Buried City, sabotage a rival weapons cache using Tian Wen’s Burletta.',
    location: ['Buried City'],
    trader: 'Tian Wen',
    items_needed: [],
    rewards: [
      {
        id: 49,
        name: 'Burletta Blueprint',
        amount: 1,
      },
      {
        id: 100,
        name: 'Mechanical Components',
        amount: 3,
      },
      {
        id: 163,
        name: 'Simple Gun Parts',
        amount: 3,
      },
    ],
  },
  {
    id: 32,
    name: 'Into The Fray',
    description: 'Destroy a Leaper and harvest a Leaper Pulse Unit for Shani.',
    location: ['Any'],
    trader: 'Shani',
    items_needed: [],
    rewards: [
      {
        id: 51,
        name: 'Outfit (Radio Renegade)',
        amount: 1,
      },
      {
        id: 52,
        name: 'Backpack Charm (Burger Boy)',
        amount: 1,
      },
      {
        id: 222,
        name: 'Vulcano III',
        amount: 1,
      },
      {
        id: 223,
        name: 'Shotgun Ammo',
        amount: 40,
      },
    ],
  },
  {
    id: 33,
    name: 'Keeping The Memory',
    description:
      'On Dam Battlegrounds, recover a missing helmet from wreckage and return it to a memorial.',
    location: ['Dam Battlegrounds'],
    trader: 'Celeste',
    items_needed: [],
    rewards: [
      {
        id: 163,
        name: 'Simple Gun Parts',
        amount: 5,
      },
      {
        id: 58,
        name: 'Duct Tape',
        amount: 5,
      },
      {
        id: 96,
        name: 'Magnet',
        amount: 5,
      },
    ],
  },
  {
    id: 34,
    name: 'Life Of A Pharmacist',
    description:
      'In Buried City, investigate a pharmacy and document details about the pharmacist’s life.',
    location: ['Buried City'],
    trader: 'Lance',
    items_needed: [],
    rewards: [
      {
        id: 55,
        name: 'Defibrillator',
        amount: 1,
      },
      {
        id: 56,
        name: 'Surge Shield Recharger',
        amount: 1,
      },
      {
        id: 197,
        name: 'Sterilized Bandage',
        amount: 3,
      },
    ],
  },
  {
    id: 35,
    name: 'Lost In Transmission',
    description:
      'In one round at Spaceport, climb Control Tower A6 and establish a connection from the terminal.',
    location: ['Spaceport'],
    trader: 'Shani',
    items_needed: [],
    rewards: [
      {
        id: 224,
        name: 'Snap Hook',
        amount: 1,
      },
    ],
  },
  {
    id: 36,
    name: 'Marked For Death',
    description:
      'In Buried City, follow Tian Wen’s clues around the Su Durante Warehouses to find his cache.',
    location: ['Buried City'],
    trader: 'Tian Wen',
    items_needed: [],
    rewards: [
      {
        id: 225,
        name: 'Shotgun Choke II',
        amount: 1,
      },
      {
        id: 226,
        name: 'Angled Grip II',
        amount: 1,
      },
    ],
  },
  {
    id: 37,
    name: 'Market Correction',
    description:
      'In one round in Buried City, locate and sabotage a weapons cache near Marano Station.',
    location: ['Buried City'],
    trader: 'Tian Wen',
    items_needed: [],
    rewards: [
      {
        id: 227,
        name: 'Silencer II',
        amount: 1,
      },
      {
        id: 228,
        name: 'Extended Light Mag I',
        amount: 1,
      },
      {
        id: 199,
        name: 'Compensator I',
        amount: 1,
      },
    ],
  },
  {
    id: 38,
    name: 'Medical Merchandise',
    description:
      'Across several maps, search medical facilities and containers for supplies.',
    location: ['Spaceport', 'Buried City', 'Dam Battlegrounds'],
    trader: 'Lance',
    items_needed: [],
    rewards: [
      {
        id: 61,
        name: 'Banana (Charm)',
        amount: 1,
      },
      {
        id: 62,
        name: 'Defibrillator',
        amount: 3,
      },
      {
        id: 204,
        name: 'Vita Shot',
        amount: 2,
      },
    ],
  },
  {
    id: 39,
    name: 'Mixed Signals',
    description: 'Destroy an ARC Surveyor and retrieve its Surveyor Vault.',
    location: ['Any'],
    trader: 'Shani',
    items_needed: [
      {
        id: 172,
        name: 'Surveyor Vault',
        amount: 1,
      },
    ],
    rewards: [
      {
        id: 229,
        name: 'Photoelectric Cloak',
        amount: 1,
      },
      {
        id: 220,
        name: 'Raider Hatch Key',
        amount: 1,
      },
    ],
  },
  {
    id: 40,
    name: 'Our Presence Up There',
    description:
      'In one round at The Dam, power up the Pattern House and complete an antenna installation.',
    location: ['Dam Battlegrounds'],
    trader: 'Shani',
    items_needed: [],
    rewards: [
      {
        id: 65,
        name: 'Buried City Town Hall Key',
        amount: 1,
      },
      {
        id: 220,
        name: 'Raider Hatch Key',
        amount: 1,
      },
      {
        id: 230,
        name: 'Jolt Mine',
        amount: 3,
      },
    ],
  },
  {
    id: 41,
    name: 'Out Of The Shadows',
    description:
      'Destroy a Rocketeer and collect a Rocketeer Driver for Shani.',
    location: ['Any'],
    trader: 'Shani',
    items_needed: [
      {
        id: 137,
        name: 'Rocketeer Driver',
        amount: 1,
      },
    ],
    rewards: [
      {
        id: 67,
        name: 'Surge Shield Recharger',
        amount: 3,
      },
      {
        id: 231,
        name: 'Wolfpack',
        amount: 2,
      },
    ],
  },
  {
    id: 42,
    name: 'Power Out',
    description:
      'In one round at Spaceport, restore power at an electrical substation and investigate a missing engineer.',
    location: ['Spaceport'],
    trader: 'Celeste',
    items_needed: [],
    rewards: [
      {
        id: 69,
        name: 'Bag (Radio Renegade Variant)',
        amount: 1,
      },
      {
        id: 192,
        name: 'Wires',
        amount: 5,
      },
      {
        id: 65,
        name: 'Explosive Compound',
        amount: 5,
      },
      {
        id: 113,
        name: 'Oil',
        amount: 5,
      },
    ],
  },
  {
    id: 43,
    name: 'Prescriptions Of The Past',
    description:
      'In one round at Spaceport, search a medical exam room in the Departure Building for old records.',
    location: ['Spaceport'],
    trader: 'Lance',
    items_needed: [],
    rewards: [
      {
        id: 232,
        name: 'Heavy Shield',
        amount: 1,
      },
      {
        id: 71,
        name: 'Tactical Mk. 3 (Healing)',
        amount: 1,
      },
      {
        id: 196,
        name: 'Adrenaline Shot',
        amount: 3,
      },
    ],
  },
  {
    id: 44,
    name: 'Safe Passage',
    description: 'Destroy two ARC enemies using explosive grenades for Apollo.',
    location: ['Any'],
    trader: 'Apollo',
    items_needed: [],
    rewards: [
      {
        id: 'lil_smoke_grenade',
        name: "Li'l Smoke Grenade",
        amount: 5,
      },
      {
        id: 233,
        name: 'Shrapnel Grenade',
        amount: 3,
      },
      {
        id: 234,
        name: 'Barricade Kit',
        amount: 3,
      },
    ],
  },
  {
    id: 45,
    name: 'Source Of The Contamination',
    description:
      'In Dam Battlegrounds, investigate the Water Treatment Building and a spill intake near the swamp.',
    location: ['Dam Battlegrounds'],
    trader: 'Celeste',
    items_needed: [],
    rewards: [
      {
        id: 171,
        name: 'Steel Spring',
        amount: 5,
      },
      {
        id: 58,
        name: 'Duct Tape',
        amount: 5,
      },
      {
        id: 106,
        name: 'Mod Components',
        amount: 1,
      },
    ],
  },
  {
    id: 46,
    name: 'Sparks Fly',
    description:
      "Destroy a Hornet using a Trigger 'Nade or Snap Blast Grenade for Apollo.",
    location: ['Any'],
    trader: 'Apollo',
    items_needed: [],
    rewards: [
      {
        id: 42,
        name: 'Crude Explosives',
        amount: 4,
      },
      {
        id: 127,
        name: 'Processor',
        amount: 2,
      },
      {
        id: 'trigger_nade_blueprint',
        name: "Trigger 'Nade Blueprint",
        amount: 1,
      },
    ],
  },
  {
    id: 47,
    name: 'Straight Record',
    description:
      'On Dam Battlegrounds, reach Victory Ridge and shut down an old EMP trap step by step.',
    location: ['Dam Battlegrounds'],
    trader: 'Celeste',
    items_needed: [],
    rewards: [
      {
        id: 101,
        name: 'Medium Gun Parts',
        amount: 5,
      },
      {
        id: 76,
        name: 'Advanced Mechanical Components',
        amount: 3,
      },
    ],
  },
  {
    id: 48,
    name: 'Switching The Supply',
    description:
      'In one round beneath Spaceport, manipulate valves in tunnels to alter fuel supplies.',
    location: ['Spaceport'],
    trader: 'Celeste',
    items_needed: [],
    rewards: [
      {
        id: 78,
        name: 'Radio Renegade (Outfit - Blue)',
        amount: 1,
      },
      {
        id: 79,
        name: 'Spaceport Trench Tower Key',
        amount: 1,
      },
      {
        id: 173,
        name: 'Synthesized Fuel',
        amount: 3,
      },
    ],
  },
  {
    id: 49,
    name: 'The Right Tool',
    description:
      'Destroy three different ARC enemy types—Fireball, Hornet and Turret—for Tian Wen.',
    location: ['Any'],
    trader: 'Tian Wen',
    items_needed: [],
    rewards: [
      {
        id: 235,
        name: 'Cheer Emote',
        amount: 1,
      },
      {
        id: 236,
        name: 'Stitcher II',
        amount: 1,
      },
      {
        id: 228,
        name: 'Extended Light Mag I',
        amount: 1,
      },
    ],
  },
  {
    id: 50,
    name: 'The Root Of The Matter',
    description:
      'In one round in Buried City, find an experimental seed vault in a building with a great view and deliver a sample.',
    location: ['Buried City'],
    trader: 'Celeste',
    items_needed: [],
    rewards: [
      {
        id: 82,
        name: 'Succulent (Charm)',
        amount: 1,
      },
      {
        id: 83,
        name: 'Raider Coins',
        amount: 1000,
      },
    ],
  },
  {
    id: 51,
    name: "The Major's Footlocker",
    description:
      'In one round on Dam Battlegrounds, search apartments for Major Aiva’s mementos and return them to Tian Wen.',
    location: ['Dam Battlegrounds'],
    trader: 'Tian Wen',
    items_needed: [],
    rewards: [
      {
        id: 237,
        name: 'Hullcracker Blueprint',
        amount: 1,
      },
    ],
  },
  {
    id: 52,
    name: 'The Trifecta',
    description:
      'Destroy Wasp, Hornet and Snitch enemies and collect their special components for Shani.',
    location: ['Any'],
    trader: 'Shani',
    items_needed: [
      {
        id: 189,
        name: 'Wasp Driver',
        amount: 1,
      },
      {
        id: 81,
        name: 'Hornet Driver',
        amount: 1,
      },
      {
        id: 164,
        name: 'Snitch Scanner',
        amount: 1,
      },
    ],
    rewards: [
      {
        id: 85,
        name: 'Skin Orange Camo (Origin Colour)',
        amount: 1,
      },
      {
        id: 220,
        name: 'Raider Hatch Key',
        amount: 1,
      },
      {
        id: 86,
        name: 'Defibrillator',
        amount: 2,
      },
      {
        id: 87,
        name: 'Dam Control Tower Key',
        amount: 1,
      },
    ],
  },
  {
    id: 53,
    name: 'Tribute to Toledo',
    description: 'Obtain a Power Rod and bring it to Celeste.',
    location: ['Any'],
    trader: 'Celeste',
    items_needed: [
      {
        id: 125,
        name: 'Power Rod',
        amount: 1,
      },
    ],
    rewards: [
      {
        id: 238,
        name: 'Dam Staff Room Key',
        amount: 1,
      },
    ],
  },
  {
    id: 54,
    name: 'Turnabout',
    description:
      'At Spaceport’s North Trench Tower, upload blackmail files for Celeste.',
    location: ['Spaceport'],
    trader: 'Celeste',
    items_needed: [],
    rewards: [
      {
        id: 80,
        name: 'Heavy Gun Parts',
        amount: 2,
      },
      {
        id: 101,
        name: 'Medium Gun Parts',
        amount: 2,
      },
    ],
  },
  {
    id: 55,
    name: 'Unexpected Initiative',
    description:
      'In one round in Buried City, collect fertilizer and a water pump from rooftops and gardens and deliver them to Tian Wen.',
    location: ['Buried City'],
    trader: 'Tian Wen',
    items_needed: [
      {
        id: 68,
        name: 'Fertilizer',
        amount: 1,
      },
      {
        id: 191,
        name: 'Water Pump',
        amount: 1,
      },
    ],
    rewards: [
      {
        id: 239,
        name: 'Il Toro I',
        amount: 1,
      },
      {
        id: 223,
        name: 'Shotgun Ammo',
        amount: 40,
      },
      {
        id: 225,
        name: 'Shotgun Choke II',
        amount: 1,
      },
    ],
  },
  {
    id: 56,
    name: 'Untended Garden',
    description:
      'In one round on Dam Battlegrounds, access hydroponic domes, pull data from archives, and upload it at a Field Depot.',
    location: ['Dam Battlegrounds'],
    trader: 'Celeste',
    items_needed: [],
    rewards: [
      {
        id: 92,
        name: 'Advanced Mechanical Components',
        amount: 3,
      },
      {
        id: 80,
        name: 'Heavy Gun Parts',
        amount: 3,
      },
      {
        id: 33,
        name: 'Canister',
        amount: 5,
      },
    ],
  },
  {
    id: 57,
    name: 'Water Troubles',
    description:
      'On Dam Battlegrounds, explore the Flood Access Tunnel and water intake under the Red Lake Balcony.',
    location: ['Dam Battlegrounds'],
    trader: 'Celeste',
    items_needed: [],
    rewards: [
      {
        id: 100,
        name: 'Mechanical Components',
        amount: 3,
      },
      {
        id: 163,
        name: 'Simple Gun Parts',
        amount: 3,
      },
      {
        id: 171,
        name: 'Steel Spring',
        amount: 3,
      },
    ],
  },
  {
    id: 58,
    name: 'What Goes Around',
    description: 'Use a Fireball Burner to destroy an ARC enemy for Apollo.',
    location: ['Any'],
    trader: 'Apollo',
    items_needed: [],
    rewards: [
      {
        id: 95,
        name: 'Cobalt (Junior Color)',
        amount: 1,
      },
      {
        id: 240,
        name: 'Blaze Grenade',
        amount: 3,
      },
      {
        id: 206,
        name: 'Noisemaker',
        amount: 2,
      },
      {
        id: 207,
        name: 'Blue Light Stick',
        amount: 5,
      },
    ],
  },
  {
    id: 59,
    name: 'What We Left Behind',
    description:
      'Search specific Raider and outpost locations on three maps for things left behind.',
    location: ['Buried City', 'Dam Battlegrounds', 'Spaceport'],
    trader: 'Tian Wen',
    items_needed: [],
    rewards: [
      {
        id: 241,
        name: 'Muzzle Brake II',
        amount: 1,
      },
      {
        id: 242,
        name: 'Vertical Grip II',
        amount: 1,
      },
      {
        id: 243,
        name: 'Stable Stock II',
        amount: 1,
      },
    ],
  },
  {
    id: 60,
    name: 'A First Foothold',
    description:
      'At The Blue Gate, stabilize Raider structures and enable comms and satellite dishes across the area.',
    location: ['The Blue Gate'],
    trader: 'Apollo',
    items_needed: [],
    rewards: [
      {
        id: 233,
        name: 'Shrapnel Grenade',
        amount: 3,
      },
      {
        id: 244,
        name: 'Snap Blast Grenade',
        amount: 3,
      },
      {
        id: 245,
        name: 'Heavy Fuze Grenade',
        amount: 3,
      },
    ],
  },
  {
    id: 61,
    name: 'Reduced to Rubble',
    description:
      'In The Blue Gate, document destruction around a collapsed highway and investigate new ARC wreckage.',
    location: ['The Blue Gate'],
    trader: 'Shani',
    items_needed: [],
    rewards: [
      {
        id: 202,
        name: 'Zipline',
        amount: 1,
      },
      {
        id: 234,
        name: 'Barricade Kit',
        amount: 3,
      },
      {
        id: 214,
        name: 'Door Blocker',
        amount: 3,
      },
    ],
  },
  {
    id: 62,
    name: 'With A Trace',
    description:
      'At the Barren Clearing in The Blue Gate, track signs of those who destroyed ARC machines and inspect key wreckage.',
    location: ['The Blue Gate'],
    trader: 'Shani',
    items_needed: [],
    rewards: [
      {
        id: 246,
        name: 'Looting Mk. 2',
        amount: 1,
      },
      {
        id: 216,
        name: 'Medium Shield',
        amount: 1,
      },
    ],
  },
  {
    id: 63,
    name: 'In My Image',
    description:
      'Deploy into Stella Montis, search androids and gather data for Lance.',
    location: ['Stella Montis'],
    trader: 'Lance',
    items_needed: [],
    rewards: [
      {
        id: 246,
        name: 'Looting Mk. 2',
        amount: 2,
      },
      {
        id: 247,
        name: 'Green Light Stick',
        amount: 5,
      },
    ],
  },
  {
    id: 64,
    name: 'Cold Storage',
    description: 'In Stella Montis, search any J Kozma Ventures container.',
    location: ['Stella Montis'],
    trader: 'Shani',
    items_needed: [],
    rewards: [
      {
        id: 248,
        name: 'Gas Mine',
        amount: 3,
      },
      {
        id: 220,
        name: 'Raider Hatch Key',
        amount: 1,
      },
    ],
  },
  {
    id: 65,
    name: 'Snap And Salvage',
    description:
      'In Stella Montis, photograph rovers, search security papers and deliver two tech components to Tian Wen.',
    location: ['Stella Montis'],
    trader: 'Tian Wen',
    items_needed: [
      {
        id: 72,
        name: 'Flow Controller',
        amount: 1,
      },
      {
        id: 98,
        name: 'Magnetron',
        amount: 1,
      },
    ],
    rewards: [
      {
        id: 103,
        name: 'Burletta III',
        amount: 1,
      },
      {
        id: 227,
        name: 'Silencer II',
        amount: 1,
      },
      {
        id: 249,
        name: 'Extended Light Mag II',
        amount: 1,
      },
      {
        id: 250,
        name: 'Light Ammo',
        amount: 100,
      },
    ],
  },
]
