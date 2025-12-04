import type { Item } from './types'

export const items: Array<Item> = [
  {
    id: 1,
    name: 'Advanced ARC Powercell',
    description:
      'Advanced ARC Powercell is a rare item used to craft other items.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/3/31/Advanced_ARC_Powercell.png/348px-Advanced_ARC_Powercell.png.webp',
    sellPrice: 640,
    category: 'Topside Material',
    maxStackSize: 5,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 16,
        amount: 2,
      },
    ],
    workshop: [],
    weight: 0.5,
    canBeFoundIn: 'ARC',
  },
  {
    id: 2,
    name: 'Advanced Electrical Components',
    description:
      'Advanced Electrical Components is a rare item used to craft other items.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/9/9b/Advanced_Electrical_Components.png/348px-Advanced_Electrical_Components.png.webp',
    sellPrice: 1750,
    category: 'Refined Material',
    maxStackSize: 5,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 60,
        amount: 1,
      },
      {
        id: 192,
        amount: 1,
      },
    ],
    workshop: [
      {
        id: 0,
        amount: 5,
      },
      {
        id: 0,
        amount: 5,
      },
    ],
    weight: 1,
    canBeFoundIn: 'Electrical',
  },
  {
    id: 3,
    name: 'Advanced Mechanical Components',
    description:
      'Advanced Mechanical Components is a rare item used to craft other items.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/2/25/Advanced_Mechanical_Components.png/348px-Advanced_Mechanical_Components.png.webp',
    sellPrice: 1750,
    category: 'Refined Material',
    maxStackSize: 5,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 100,
        amount: 1,
      },
      {
        id: 171,
        amount: 1,
      },
    ],
    workshop: [
      {
        id: 0,
        amount: 5,
      },
    ],
    weight: 1,
    canBeFoundIn: 'Mechanical',
  },
  {
    id: 4,
    name: 'Agave',
    description:
      "Agave is a nice refreshing snack that'll help you heal in a pinch.",
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/4/47/Agave.png/348px-Agave.png.webp',
    sellPrice: 1000,
    category: 'Nature',
    maxStackSize: 10,
    rarity: 'Uncommon',
    recyclesTo: [],
    workshop: [],
    weight: 0.2,
    canBeFoundIn: 'Nature',
    meta: {
      healing: 1,
      'use time': 1,
      duration: 10,
    },
  },
  {
    id: 5,
    name: 'Agave Juice',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/a/a8/Agave_Juice.png/348px-Agave_Juice.png.webp',
    sellPrice: 1800,
    category: 'Misc',
    maxStackSize: 5,
    rarity: 'Common',
    recyclesTo: [],
    workshop: [],
    weight: 0.2,
    meta: {
      stamina: 5,
      damage: 5,
      'use time': 1,
      duration: 10,
    },
  },
  {
    id: 6,
    name: 'Air Freshener',
    description:
      'Air Freshener is a terrible gift to give to another Raider down in Speranza.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/0/03/Air_Freshener.png/348px-Air_Freshener.png.webp',
    sellPrice: 2000,
    category: 'Trinket',
    maxStackSize: 5,
    rarity: 'Uncommon',
    recyclesTo: [],
    workshop: [],
    weight: 0.3,
    canBeFoundIn: 'Mechanical',
  },
  {
    id: 7,
    name: 'Alarm Clock',
    description:
      'The Alarm Clock is a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/9/95/Alarm_Clock.png/348px-Alarm_Clock.png.webp',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 116,
        amount: 6,
      },
      {
        id: 127,
        amount: 1,
      },
    ],
    workshop: [],
    weight: 2,
    canBeFoundIn: 'Residential',
  },
  {
    id: 8,
    name: 'Antiseptic',
    description:
      'Antiseptic is a rare item used to craft medical items that can also be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/f/f5/Antiseptic.png/348px-Antiseptic.png.webp',
    sellPrice: 1000,
    category: 'Refined Material',
    maxStackSize: 5,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 35,
        amount: 10,
      },
    ],
    workshop: [
      {
        id: 0,
        amount: 8,
      },
    ],
    weight: 1,
    canBeFoundIn: 'Medical',
  },
  {
    id: 9,
    name: 'Apricot',
    description:
      'Apricots are a nice refreshing snack that will give your Raider a burst of energy.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/f/fc/Apricot.png/348px-Apricot.png.webp',
    sellPrice: 640,
    category: 'Nature',
    maxStackSize: 10,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 19,
        amount: 3,
      },
    ],
    workshop: [
      {
        id: 0,
        amount: 5,
      },
      {
        id: 0,
        amount: 12,
      },
    ],
    weight: 0.2,
    canBeFoundIn: 'Nature',
    meta: {
      stamina: 20,
      'use time': 1,
    },
  },
  {
    id: 10,
    name: 'ARC Alloy',
    description:
      'ARC Alloy is found on almost every destroyed ARC and is used to craft a variety of items.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/a/a6/ARC_Alloy.png/348px-ARC_Alloy.png.webp',
    sellPrice: 200,
    category: 'Topside Material',
    maxStackSize: 15,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 103,
        amount: 2,
      },
    ],
    workshop: [
      {
        id: 0,
        amount: 6,
      },
      {
        id: 0,
        amount: 6,
      },
      {
        id: 0,
        amount: 6,
      },
    ],
    weight: 0.25,
    canBeFoundIn: 'ARC',
  },
  {
    id: 11,
    name: 'ARC Circuitry',
    description:
      'ARC Circuitry is found on lots of destroyed ARC and is used to craft higher end items.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/d/dc/ARC_Circuitry.png/348px-ARC_Circuitry.png.webp',
    sellPrice: 1000,
    category: 'Topside Material',
    maxStackSize: 5,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 10,
        amount: 2,
      },
    ],
    workshop: [
      {
        id: 0,
        amount: 10,
      },
    ],
    weight: 0.3,
    canBeFoundIn: 'ARC',
  },
  {
    id: 12,
    name: 'ARC Coolant',
    description:
      'ARC Coolant is a rare item found by destroying ARC and is recycled down for basic materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/e/e9/ARC_Coolant.png/348px-ARC_Coolant.png.webp',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 35,
        amount: 16,
      },
    ],
    workshop: [],
    weight: 1,
    canBeFoundIn: 'ARC',
  },
  {
    id: 13,
    name: 'ARC Flex Rubber',
    description:
      'ARC Flex Rubber is a rare item found by destroying ARC that is recycled down for basic materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/2/29/ARC_Flex_Rubber.png/348px-ARC_Flex_Rubber.png.webp',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 145,
        amount: 16,
      },
    ],
    workshop: [],
    weight: 1,
    canBeFoundIn: 'ARC',
  },
  {
    id: 14,
    name: 'ARC Motion Core',
    description:
      'An ARC Motion Core can be found on some destroyed ARC and is used to craft higher end items.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/a/ad/ARC_Motion_Core.png/348px-ARC_Motion_Core.png.webp',
    sellPrice: 1000,
    category: 'Topside Material',
    maxStackSize: 5,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 10,
        amount: 2,
      },
    ],
    workshop: [
      {
        id: 0,
        amount: 5,
      },
    ],
    weight: 0.3,
    canBeFoundIn: 'ARC',
  },
  {
    id: 15,
    name: 'ARC Performance Steel',
    description:
      'ARC Performance Steel can be found on some ARC and is recycled down to basic materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/0/02/ARC_Performance_Steel.png/348px-ARC_Performance_Steel.png.webp',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 0,
        amount: 12,
      },
    ],
    workshop: [],
    weight: 1,
    canBeFoundIn: 'ARC',
  },
  {
    id: 16,
    name: 'ARC Powercell',
    description:
      'The ARC Powercell is dropped by every ARC and can be used to repair shields in a pinch.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/d/df/ARC_Powercell.png/348px-ARC_Powercell.png.webp',
    sellPrice: 270,
    category: 'Misc',
    maxStackSize: 5,
    rarity: 'Common',
    recyclesTo: [],
    workshop: [
      {
        id: 0,
        amount: 5,
      },
    ],
    weight: 0.5,
    canBeFoundIn: 'ARC',
    meta: {
      shield: 20,
      'use time': 3,
      duration: 10,
      recharge: 2,
    },
  },
  {
    id: 17,
    name: 'ARC Synthetic Resin',
    description:
      'ARC Synthetic Resin is a rare item found on destroyed ARC that can be recycled down for basic materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/7/72/ARC_Synthetic_Resin.png/348px-ARC_Synthetic_Resin.png.webp',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 116,
        amount: 14,
      },
    ],
    workshop: [],
    weight: 1,
    canBeFoundIn: 'ARC',
  },
  {
    id: 18,
    name: 'ARC Thermo Lining',
    description:
      'ARC Thermo Lining is a rare item that can be found on destroyed ARC and is recycled down for basic materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/0/0f/ARC_Thermo_Lining.png/348px-ARC_Thermo_Lining.png.webp',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 66,
        amount: 16,
      },
    ],
    workshop: [],
    weight: 1,
    canBeFoundIn: 'ARC',
  },
  {
    id: 19,
    name: 'Assorted Seeds',
    description: 'Assorted Seeds are the currency used to trade with Celeste.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/5/51/Assorted_Seeds.png/348px-Assorted_Seeds.png.webp',
    sellPrice: 100,
    category: 'Nature',
    maxStackSize: 100,
    rarity: 'Common',
    recyclesTo: [],
    workshop: [],
    weight: 0.05,
    canBeFoundIn: 'Nature',
  },
  {
    id: 20,
    name: 'Bastion Cell',
    description:
      'The Bastion Cell is an epic item only found by destroying a Bastion.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/0/06/Bastion_Cell.png/348px-Bastion_Cell.png.webp',
    sellPrice: 5000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Epic',
    recyclesTo: [
      {
        id: 10,
        amount: 2,
      },
      {
        id: 3,
        amount: 2,
      },
    ],
    workshop: [
      {
        id: 0,
        amount: 6,
      },
    ],
    weight: 1,
    canBeFoundIn: 'ARC',
  },
  {
    id: 21,
    name: 'Battery',
    description:
      'The Battery is an uncommon item used to repair shields or can be recycled down for basic materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/6/6d/Battery.png/348px-Battery.png.webp',
    sellPrice: 250,
    category: 'Topside Material',
    maxStackSize: 15,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 103,
        amount: 2,
      },
    ],
    workshop: [],
    weight: 0.25,
    canBeFoundIn: 'TechnologicalElectrical',
  },
  {
    id: 22,
    name: 'Bicycle Pump',
    description:
      'The Bicycle Pump is a rare item that can be recycled down for scraps.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/f/fa/Bicycle_Pump.png/348px-Bicycle_Pump.png.webp',
    sellPrice: 2000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 33,
        amount: 4,
      },
      {
        id: 103,
        amount: 10,
      },
    ],
    workshop: [],
    weight: 3,
    canBeFoundIn: 'Residential',
  },
  {
    id: 23,
    name: 'Bloated Tuna Can',
    description:
      'The Bloated Tuna Can is a "refreshing" snack that will give your Raider a burst of energy.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/0/01/Bloated_Tuna_Can.png/348px-Bloated_Tuna_Can.png.webp',
    sellPrice: 1000,
    category: 'Trinket',
    maxStackSize: 15,
    rarity: 'Common',
    recyclesTo: [],
    workshop: [],
    weight: 0.2,
    canBeFoundIn: 'Commercial,Residential',
    meta: {
      stamina: 25,
      'use time': 1,
    },
  },
  {
    id: 24,
    name: 'Bombardier Cell',
    description:
      'The Bombardier Cell is an epic item only found by destroying a Bombardier.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/4/46/Bombardier_Cell.png/348px-Bombardier_Cell.png.webp',
    sellPrice: 5000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Epic',
    recyclesTo: [
      {
        id: 3,
        amount: 2,
      },
      {
        id: 0,
        amount: 2,
      },
    ],
    workshop: [
      {
        id: 0,
        amount: 6,
      },
    ],
    weight: 1,
    canBeFoundIn: 'ARC',
  },
  {
    id: 25,
    name: 'Breathtaking Snow Globe',
    description: 'The Breathtaking Snow Globe is a valuable trinket.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/6/63/Breathtaking_Snow_Globe.png/348px-Breathtaking_Snow_Globe.png.webp',
    sellPrice: 7000,
    category: 'Trinket',
    maxStackSize: 1,
    rarity: 'Epic',
    recyclesTo: [],
    workshop: [],
    weight: 0.2,
    canBeFoundIn: 'Residential,Old World,Commercial',
  },
  {
    id: 26,
    name: 'Broken Flashlight',
    description:
      'The Broken Flashlight is a rare item that can be recycled down into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/1/17/Broken_Flashlight.png/348px-Broken_Flashlight.png.webp',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 21,
        amount: 2,
      },
      {
        id: 103,
        amount: 6,
      },
    ],
    workshop: [],
    weight: 2,
    canBeFoundIn: 'Security',
  },
  {
    id: 27,
    name: 'Broken Guidance System',
    description:
      'Broken Guidance System is a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/9/93/Broken_Guidance_System.png/348px-Broken_Guidance_System.png.webp',
    sellPrice: 2000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 127,
        amount: 4,
      },
    ],
    workshop: [],
    weight: 3,
    canBeFoundIn: 'Industrial',
  },
  {
    id: 28,
    name: 'Broken Handheld Radio',
    description:
      'The Broken Handheld Radio is a rare item that can be recycled down into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/3/3b/Broken_Handheld_Radio.png/348px-Broken_Handheld_Radio.png.webp',
    sellPrice: 2000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 158,
        amount: 3,
      },
      {
        id: 192,
        amount: 2,
      },
    ],
    workshop: [],
    weight: 3,
    canBeFoundIn: 'Security',
  },
  {
    id: 29,
    name: 'Broken Taser',
    description:
      'The Broken Taser is a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/1/18/Broken_Taser.png/348px-Broken_Taser.png.webp',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 21,
        amount: 2,
      },
      {
        id: 192,
        amount: 2,
      },
    ],
    workshop: [],
    weight: 2,
    canBeFoundIn: 'Security',
  },
  {
    id: 30,
    name: 'Burned ARC Circuitry',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/3/35/Burned_ARC_Circuitry.png/348px-Burned_ARC_Circuitry.png.webp',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 5,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 10,
        amount: 2,
      },
    ],
    workshop: [],
    weight: 0.25,
    canBeFoundIn: 'ARC',
  },
  {
    id: 31,
    name: 'Camera Lens',
    description:
      'The Camera Lens is an uncommon item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/a/a6/Camera_Lens.png/348px-Camera_Lens.png.webp',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 5,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 116,
        amount: 8,
      },
    ],
    workshop: [],
    weight: 0.8,
    canBeFoundIn: 'Security',
  },
  {
    id: 32,
    name: 'Candle Holder',
    description:
      'The Candle Holder is an uncommon item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/5/58/Candle_Holder.png/348px-Candle_Holder.png.webp',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 103,
        amount: 8,
      },
    ],
    workshop: [],
    weight: 2,
    canBeFoundIn: 'Residential',
  },
  {
    id: 33,
    name: 'Canister',
    description:
      'The Canister is an uncommon item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/5/5f/Canister.png/348px-Canister.png.webp',
    sellPrice: 300,
    category: 'Topside Material',
    maxStackSize: 15,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 0,
        amount: 3,
      },
    ],
    workshop: [],
    weight: 0.25,
    canBeFoundIn: 'Commercial',
  },
  {
    id: 34,
    name: 'Cat Bed',
    description: 'The Cat Bed is an adorable little trinket.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/8/82/Cat_Bed.png/348px-Cat_Bed.png.webp',
    sellPrice: 1000,
    category: 'Trinket',
    maxStackSize: 3,
    rarity: 'Uncommon',
    recyclesTo: [],
    workshop: [
      {
        id: 0,
        amount: 1,
      },
    ],
    weight: 0.5,
    canBeFoundIn: 'Commercial,Residential',
  },
  {
    id: 35,
    name: 'Chemicals',
    description:
      "Chemicals are a common item that is an essential part of every Raider's stash. Used to craft all the ammo and explosives they'll use to destroy ARC... or other Raiders.",
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/9/92/Chemicals.png/348px-Chemicals.png.webp',
    sellPrice: 50,
    category: 'Misc',
    maxStackSize: 50,
    rarity: 'Common',
    recyclesTo: [],
    workshop: [
      {
        id: 0,
        amount: 50,
      },
    ],
    weight: 0.1,
    canBeFoundIn: 'Mechanical,Residential,Medical',
  },
  {
    id: 36,
    name: 'Coffee Pot',
    description:
      "The Coffee Pot is a trinket that you sadly can't use to brew coffee.",
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/3/33/Coffee_Pot.png/348px-Coffee_Pot.png.webp',
    sellPrice: 1000,
    category: 'Trinket',
    maxStackSize: 3,
    rarity: 'Common',
    recyclesTo: [],
    workshop: [],
    weight: 0.3,
    canBeFoundIn: 'Residential',
  },
  {
    id: 37,
    name: 'Complex Gun Parts',
    description:
      'Complex Gun Parts are used to craft more advanced weaponry and can be recycled down to crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/3/3d/Complex_Gun_Parts.png/348px-Complex_Gun_Parts.png.webp',
    sellPrice: 3000,
    category: 'Topside Material',
    maxStackSize: 3,
    rarity: 'Epic',
    recyclesTo: [
      {
        id: 163,
        amount: 3,
      },
    ],
    workshop: [],
    weight: 1,
    canBeFoundIn: 'Security',
  },
  {
    id: 38,
    name: 'Coolant',
    description: 'Coolant is a rare item that is recycled for parts.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/4/40/Coolant.png/348px-Coolant.png.webp',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 35,
        amount: 5,
      },
      {
        id: 113,
        amount: 2,
      },
    ],
    workshop: [],
    weight: 2,
    canBeFoundIn: 'Mechanical',
  },
  {
    id: 39,
    name: 'Cooling Coil',
    description:
      'The Cooling Coil is a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/7/7f/Cooling_Coil.png/348px-Cooling_Coil.png.webp',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 35,
        amount: 6,
      },
      {
        id: 171,
        amount: 2,
      },
    ],
    workshop: [],
    weight: 2,
    canBeFoundIn: 'Industrial',
  },
  {
    id: 40,
    name: 'Cooling Fan',
    description:
      'The Cooling Fan is a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/1/13/Cooling_Fan.png/348px-Cooling_Fan.png.webp',
    sellPrice: 2000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 116,
        amount: 14,
      },
      {
        id: 192,
        amount: 4,
      },
    ],
    workshop: [],
    weight: 3,
    canBeFoundIn: 'Technological',
  },
  {
    id: 41,
    name: 'Cracked Bioscanner',
    description:
      'The Cracked Bioscanner is a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/9/9a/Cracked_Bioscanner.png/348px-Cracked_Bioscanner.png.webp',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 145,
        amount: 3,
      },
      {
        id: 21,
        amount: 3,
      },
    ],
    workshop: [
      {
        id: 0,
        amount: 2,
      },
    ],
    weight: 2,
    canBeFoundIn: 'Medical',
  },
  {
    id: 42,
    name: 'Crude Explosives',
    description:
      'Crude Explosives is an uncommon item that can be recycled into crafting materials or thrown to create a small explosion.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/f/fc/Crude_Explosives.png/348px-Crude_Explosives.png.webp',
    sellPrice: 270,
    category: 'Refined Material',
    maxStackSize: 10,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 35,
        amount: 3,
      },
    ],
    workshop: [
      {
        id: 0,
        amount: 5,
      },
    ],
    weight: 2,
    canBeFoundIn: 'Industrial,Security',
    meta: {
      damage: 15,
      radius: 1.5,
    },
  },
  {
    id: 43,
    name: 'Crumpled Plastic Bottle',
    description:
      'The Crumpled Plastic Bottle is an uncommon item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/8/8e/Crumpled_Plastic_Bottle.png/348px-Crumpled_Plastic_Bottle.png.webp',
    sellPrice: 270,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 116,
        amount: 4,
      },
    ],
    workshop: [],
    weight: 0.8,
    canBeFoundIn: 'Residential',
  },
  {
    id: 44,
    name: 'Damaged ARC Motion Core',
    description:
      'The Damaged ARC Motion Core is an uncommon item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/9/9e/Damaged_ARC_Motion_Core.png/348px-Damaged_ARC_Motion_Core.png.webp',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 5,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 10,
        amount: 2,
      },
    ],
    workshop: [],
    weight: 0.25,
    canBeFoundIn: 'ARC',
  },
  {
    id: 45,
    name: 'Damaged ARC Powercell',
    description:
      'The Damaged ARC Powercell is an uncommon item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/5/58/Damaged_ARC_Powercell.png/348px-Damaged_ARC_Powercell.png.webp',
    sellPrice: 293,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Common',
    recyclesTo: [
      {
        id: 10,
        amount: 1,
      },
    ],
    workshop: [],
    weight: 0.25,
    canBeFoundIn: 'ARC',
  },
  {
    id: 46,
    name: 'Damaged Fireball Burner',
    description:
      'Damaged Fireball Burner is a common item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/d/d8/Damaged_Fireball_Burner.png/348px-Damaged_Fireball_Burner.png.webp',
    sellPrice: 270,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Common',
    recyclesTo: [
      {
        id: 10,
        amount: 1,
      },
    ],
    workshop: [],
    weight: 1,
    canBeFoundIn: 'ARC',
  },
  {
    id: 47,
    name: 'Damaged Heat Sink',
    description:
      'The Damaged Heat Sink is a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/1/1f/Damaged_Heat_Sink.png/348px-Damaged_Heat_Sink.png.webp',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 103,
        amount: 6,
      },
      {
        id: 192,
        amount: 2,
      },
    ],
    workshop: [
      {
        id: 0,
        amount: 2,
      },
    ],
    weight: 2,
    canBeFoundIn: 'Technological',
  },
  {
    id: 48,
    name: 'Damaged Hornet Driver',
    description:
      'The Damaged Hornet Driver is a common item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/9/96/Damaged_Hornet_Driver.png/348px-Damaged_Hornet_Driver.png.webp',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Common',
    recyclesTo: [
      {
        id: 10,
        amount: 2,
      },
    ],
    workshop: [],
    weight: 0.3,
    canBeFoundIn: 'ARC',
  },
  {
    id: 49,
    name: 'Damaged Rocketeer Driver',
    description:
      'The Damaged Rocketeer Driver is a common item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/3/3a/Damaged_Rocketeer_Driver.png/348px-Damaged_Rocketeer_Driver.png.webp',
    sellPrice: 2000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Common',
    recyclesTo: [
      {
        id: 10,
        amount: 3,
      },
    ],
    workshop: [],
    weight: 0.25,
    canBeFoundIn: 'ARC',
  },
  {
    id: 50,
    name: 'Damaged Tick Pod',
    description:
      'The Damaged Tick Pod is a common item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/d/d6/Damaged_Tick_Pod.png/348px-Damaged_Tick_Pod.png.webp',
    sellPrice: 270,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Common',
    recyclesTo: [
      {
        id: 10,
        amount: 1,
      },
    ],
    workshop: [],
    weight: 0.25,
    canBeFoundIn: 'ARC',
  },
  {
    id: 51,
    name: 'Damaged Wasp Driver',
    description:
      'The Damaged Wasp Driver is a common item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/e/e6/Damaged_Wasp_Driver.png/348px-Damaged_Wasp_Driver.png.webp',
    sellPrice: 270,
    category: 'Recyclable',
    rarity: 'Common',
    recyclesTo: [
      {
        id: 10,
        amount: 1,
      },
    ],
    workshop: [],
    weight: 0.25,
    canBeFoundIn: 'ARC',
  },
  {
    id: 52,
    name: 'Dart Board',
    description:
      'The Dart Board is a trinket that your Raider hasn\'t quite figured out how to "repurpose" from the bar in Speranza.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/4/4d/Dart_Board.png/348px-Dart_Board.png.webp',
    sellPrice: 2000,
    category: 'Trinket',
    maxStackSize: 3,
    rarity: 'Uncommon',
    recyclesTo: [],
    workshop: [],
    weight: 1,
    canBeFoundIn: 'Commercial,Residential',
  },
  {
    id: 53,
    name: 'Deflated Football',
    description:
      'The Deflated Football is an uncommon item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/7/7c/Deflated_Football.png/348px-Deflated_Football.png.webp',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 145,
        amount: 9,
      },
      {
        id: 66,
        amount: 9,
      },
    ],
    workshop: [],
    weight: 0.8,
    canBeFoundIn: 'Residential',
  },
  {
    id: 54,
    name: 'Degraded ARC Rubber',
    description:
      'Degraded ARC Rubber is an uncommon item found on destroyed ARC that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/3/37/Degraded_ARC_Rubber.png/348px-Degraded_ARC_Rubber.png.webp',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 145,
        amount: 11,
      },
    ],
    workshop: [],
    weight: 1,
    canBeFoundIn: 'ARC',
  },
  {
    id: 55,
    name: 'Diving Goggles',
    description:
      'Diving Goggles is a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/1/1a/Diving_Goggles.png/348px-Diving_Goggles.png.webp',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 145,
        amount: 12,
      },
    ],
    workshop: [],
    weight: 2,
    canBeFoundIn: 'Residential',
  },
  {
    id: 56,
    name: 'Dog Collar',
    description:
      'The Dog Collar is a rare item that Scrappy enjoys or can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/c/c5/Dog_Collar.png/348px-Dog_Collar.png.webp',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 66,
        amount: 8,
      },
      {
        id: 103,
        amount: 1,
      },
    ],
    workshop: [
      {
        id: 0,
        amount: 1,
      },
    ],
    weight: 0.8,
    canBeFoundIn: 'Residential',
  },
  {
    id: 57,
    name: 'Dried-Out ARC Resin',
    description:
      'Dried-Out ARC Resin is an uncommon item that can be recycled into crafting materials.',
    imageUrl: 'https://arcraiders.wiki/w/images/0/0b/Dried-Out_ARC_Resin.png',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 116,
        amount: 9,
      },
    ],
    workshop: [],
    weight: 1,
    canBeFoundIn: 'ARC',
  },
  {
    id: 58,
    name: 'Duct Tape',
    description:
      'Duct Tape is an uncommon item that is used to craft underbarrel mods and can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/4/4e/Duct_Tape.png/348px-Duct_Tape.png.webp',
    sellPrice: 300,
    category: 'Topside Material',
    maxStackSize: 15,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 66,
        amount: 3,
      },
    ],
    workshop: [],
    weight: 0.25,
    canBeFoundIn: 'Commercial,Residential',
  },
  {
    id: 59,
    name: 'Durable Cloth',
    description:
      'Durable Cloth is an uncommon item that is used to craft medical supplies or can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/2/25/Durable_Cloth.png/348px-Durable_Cloth.png.webp',
    sellPrice: 640,
    category: 'Refined Material',
    maxStackSize: 10,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 66,
        amount: 6,
      },
    ],
    workshop: [
      {
        id: 0,
        amount: 5,
      },
    ],
    weight: 0.25,
    canBeFoundIn: 'Medical,Commercial',
  },
  {
    id: 60,
    name: 'Electrical Components',
    description:
      'Electrical Components is an uncommon item that is used to craft utility items and can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/0/06/Electrical_Components.png/348px-Electrical_Components.png.webp',
    sellPrice: 640,
    category: 'Refined Material',
    maxStackSize: 10,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 0,
        amount: 3,
      },
      {
        id: 145,
        amount: 3,
      },
    ],
    workshop: [
      {
        id: 0,
        amount: 5,
      },
      {
        id: 0,
        amount: 5,
      },
    ],
    weight: 0.5,
    canBeFoundIn: 'Electrical',
  },
  {
    id: 61,
    name: 'Empty Wine Bottle',
    description: "The Empty Wine Bottle wasn't always empty.",
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/e/e1/Empty_Wine_Bottle.png/348px-Empty_Wine_Bottle.png.webp',
    sellPrice: 1000,
    category: 'Trinket',
    maxStackSize: 5,
    rarity: 'Common',
    recyclesTo: [],
    workshop: [],
    weight: 0.2,
    canBeFoundIn: 'Commercial,Residential',
  },
  {
    id: 62,
    name: 'Exodus Modules',
    description:
      'Exodus Modules are an epic item used to craft items and can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/1/1b/Exodus_Modules.png/348px-Exodus_Modules.png.webp',
    sellPrice: 2750,
    category: 'Topside Material',
    maxStackSize: 3,
    rarity: 'Epic',
    recyclesTo: [
      {
        id: 96,
        amount: 2,
      },
      {
        id: 100,
        amount: 1,
      },
    ],
    workshop: [],
    weight: 1,
    canBeFoundIn: 'Exodus',
  },
  {
    id: 63,
    name: 'Expired Pasta',
    description:
      "Expired Pasta shouldn't be consumed, but can be in a pinch for some healing.",
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/9/91/Expired_Pasta.png/348px-Expired_Pasta.png.webp',
    sellPrice: 1000,
    category: 'Trinket',
    maxStackSize: 15,
    rarity: 'Common',
    recyclesTo: [],
    workshop: [],
    weight: 0.1,
    canBeFoundIn: 'Commercial,Residential',
    meta: {
      healing: 15,
      'use time': 1,
    },
  },
  {
    id: 64,
    name: 'Expired Respirator',
    description:
      'Expired Respirator is a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/b/ba/Expired_Respirator.png/348px-Expired_Respirator.png.webp',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 145,
        amount: 8,
      },
      {
        id: 66,
        amount: 4,
      },
    ],
    workshop: [],
    weight: 2,
    canBeFoundIn: 'Medical',
  },
  {
    id: 65,
    name: 'Explosive Compound',
    description:
      'Explosive Compound is a rare item used to craft explosives and can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/1/11/Explosive_Compound.png/348px-Explosive_Compound.png.webp',
    sellPrice: 1000,
    category: 'Refined Material',
    maxStackSize: 5,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 42,
        amount: 2,
      },
    ],
    workshop: [
      {
        id: 0,
        amount: 5,
      },
    ],
    weight: 0.3,
    canBeFoundIn: 'Industrial,Security',
  },
  {
    id: 66,
    name: 'Fabric',
    description:
      'Fabric is a common item that can be used to craft various medical items. It can also be used on its own to restore a small amount of health over time.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/2/2b/Fabric.png/348px-Fabric.png.webp',
    sellPrice: 50,
    category: 'Misc',
    maxStackSize: 50,
    rarity: 'Common',
    recyclesTo: [],
    workshop: [
      {
        id: 0,
        amount: 30,
      },
      {
        id: 0,
        amount: 50,
      },
    ],
    weight: 0.1,
    canBeFoundIn: 'Commercial,Residential,Medical',
    meta: {
      healing: 0.4,
      'use time': 1,
      duration: 25,
    },
  },
  {
    id: 67,
    name: 'Faded Photograph',
    description:
      'The Faded Photograph contains an image lost to the sands of time and literal sand. I mean really, who leaves a picture with no glass covering it out in Buried City of all places.',
    imageUrl: 'https://arcraiders.wiki/w/images/0/0c/Faded_Photograph.png',
    sellPrice: 640,
    category: 'Trinket',
    maxStackSize: 15,
    rarity: 'Common',
    recyclesTo: [],
    workshop: [],
    weight: 0.3,
    canBeFoundIn: 'Residential',
  },
  {
    id: 68,
    name: 'Fertilizer',
    description: 'Fertilizer is just special dirt, change my mind.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/2/25/Fertilizer.png/348px-Fertilizer.png.webp',
    sellPrice: 1000,
    category: 'Nature',
    maxStackSize: 5,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 19,
        amount: 2,
      },
    ],
    workshop: [],
    weight: 0.4,
    canBeFoundIn: 'Nature',
  },
  {
    id: 69,
    name: 'Film Reel',
    description:
      "I remember back when you could watch things on Film Reel but now they've been erased by the sun's rays.",
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/4/44/Film_Reel.png/348px-Film_Reel.png.webp',
    sellPrice: 2000,
    category: 'Trinket',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [],
    workshop: [],
    weight: 0.2,
    canBeFoundIn: 'Residential,Old World',
  },
  {
    id: 70,
    name: 'Fine Wristwatch',
    description: 'The Fine Wristwatch is from a more civilized era.',
    imageUrl: 'https://arcraiders.wiki/w/images/9/94/Fine_Wristwatch.png',
    sellPrice: 3000,
    category: 'Trinket',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [],
    workshop: [],
    weight: 0.2,
    canBeFoundIn: 'Commercial,Residential',
  },
  {
    id: 71,
    name: 'Fireball Burner',
    description:
      'The Fireball Burner is an uncommon item dropped by Fireballs that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/8/8b/Fireball_Burner.png/348px-Fireball_Burner.png.webp',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 10,
        amount: 1,
      },
      {
        id: 42,
        amount: 1,
      },
    ],
    workshop: [
      {
        id: 0,
        amount: 8,
      },
    ],
    weight: 0.5,
    canBeFoundIn: 'ARC',
    meta: {
      damage: 5,
      duration: 10,
      radius: 2,
    },
  },
  {
    id: 72,
    name: 'Flow Controller',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/b/b6/Flow_Controller.png/348px-Flow_Controller.png.webp',
    sellPrice: 3000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 3,
        amount: 1,
      },
      {
        id: 158,
        amount: 1,
      },
    ],
    workshop: [],
    weight: 1.5,
    canBeFoundIn: 'Exodus',
  },
  {
    id: 73,
    name: 'Frequency Modulation Box',
    description:
      'Frequency Modulation Box is a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/3/36/Frequency_Modulation_Box.png/348px-Frequency_Modulation_Box.png.webp',
    sellPrice: 3000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 2,
        amount: 1,
      },
      {
        id: 165,
        amount: 1,
      },
    ],
    workshop: [],
    weight: 1.5,
    canBeFoundIn: 'Exodus',
  },
  {
    id: 74,
    name: 'Fried Motherboard',
    description:
      'The Fried Motherboard is a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/2/29/Fried_Motherboard.png/348px-Fried_Motherboard.png.webp',
    sellPrice: 2000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 116,
        amount: 5,
      },
      {
        id: 60,
        amount: 2,
      },
    ],
    workshop: [
      {
        id: 0,
        amount: 3,
      },
    ],
    weight: 3,
    canBeFoundIn: 'Technological',
  },
  {
    id: 75,
    name: 'Frying Pan',
    description:
      'The Frying Pan is a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/7/74/Frying_Pan.png/348px-Frying_Pan.png.webp',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 103,
        amount: 8,
      },
    ],
    workshop: [],
    weight: 2,
    canBeFoundIn: 'Residential',
  },
  {
    id: 76,
    name: 'Garlic Press',
    description:
      'The Garlic Press is an uncommon item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/8/88/Garlic_Press.png/348px-Garlic_Press.png.webp',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 103,
        amount: 12,
      },
    ],
    workshop: [],
    weight: 0.8,
    canBeFoundIn: 'Commercial,Residential',
  },
  {
    id: 77,
    name: 'Geiger Counter',
    description:
      'Geiger Counter is an epic item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/3/37/Geiger_Counter.png/348px-Geiger_Counter.png.webp',
    sellPrice: 3500,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Epic',
    recyclesTo: [
      {
        id: 21,
        amount: 3,
      },
      {
        id: 62,
        amount: 1,
      },
    ],
    workshop: [],
    weight: 1.5,
    canBeFoundIn: 'Exodus',
  },
  {
    id: 78,
    name: 'Great Mullein',
    description:
      'The Great Mullein is an uncommon item that is used for medical supplies and can be recycled into Assorted Seeds.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/0/0d/Great_Mullein.png/348px-Great_Mullein.png.webp',
    sellPrice: 300,
    category: 'Topside Material',
    maxStackSize: 15,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 19,
        amount: 2,
      },
    ],
    workshop: [],
    weight: 0.25,
    canBeFoundIn: 'Nature',
  },
  {
    id: 79,
    name: 'Headphones',
    description:
      'Headphones are a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/0/0f/Headphones.png/348px-Headphones.png.webp',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 145,
        amount: 7,
      },
      {
        id: 0,
        amount: 1,
      },
    ],
    workshop: [],
    weight: 2,
    canBeFoundIn: 'Commercial,Residential',
  },
  {
    id: 80,
    name: 'Heavy Gun Parts',
    description:
      'Heavy Gun Parts are used to upgrade, craft, and repair weapons that shoot heavy ammo and shotgun ammo.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/3/33/Heavy_Gun_Parts.png/348px-Heavy_Gun_Parts.png.webp',
    sellPrice: 700,
    category: 'Topside Material',
    maxStackSize: 5,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 163,
        amount: 2,
      },
    ],
    workshop: [],
    weight: 0.5,
    canBeFoundIn: 'Raider,Security',
  },
  {
    id: 81,
    name: 'Hornet Driver',
    description:
      'The Hornet Driver is a rare item is dropped by Hornets that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/b/bb/Hornet_Driver.png/348px-Hornet_Driver.png.webp',
    sellPrice: 2000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 10,
        amount: 2,
      },
      {
        id: 60,
        amount: 2,
      },
    ],
    workshop: [
      {
        id: 0,
        amount: 5,
      },
    ],
    weight: 0.75,
    canBeFoundIn: 'ARC',
    meta: {
      'arc stun': 10,
      'raider stun': 0.5,
      radius: 6,
    },
  },
  {
    id: 82,
    name: 'Household Cleaner',
    description:
      'Household Cleaner is an uncommon item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/3/36/Household_Cleaner.png/348px-Household_Cleaner.png.webp',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 5,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 35,
        amount: 11,
      },
    ],
    workshop: [],
    weight: 0.8,
    canBeFoundIn: 'Residential',
  },
  {
    id: 83,
    name: 'Humidifier',
    description:
      'The Humidifier is a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/4/4b/Humidifier.png/348px-Humidifier.png.webp',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 33,
        amount: 2,
      },
      {
        id: 192,
        amount: 2,
      },
    ],
    workshop: [],
    weight: 2,
    canBeFoundIn: 'Residential',
  },
  {
    id: 84,
    name: 'Ice Cream Scooper',
    description:
      'The Ice Cream Scooper is an uncommon item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/c/c9/Ice_Cream_Scooper.png/348px-Ice_Cream_Scooper.png.webp',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 103,
        amount: 7,
      },
    ],
    workshop: [],
    weight: 0.8,
    canBeFoundIn: 'Commercial',
  },
  {
    id: 85,
    name: 'Impure ARC Coolant',
    description:
      'Impure ARC Coolant is an uncommon item that can found on destroyed ARC and can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/a/a0/Impure_ARC_Coolant.png/348px-Impure_ARC_Coolant.png.webp',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 35,
        amount: 12,
      },
    ],
    workshop: [],
    weight: 1,
    canBeFoundIn: 'ARC',
  },
  {
    id: 86,
    name: 'Industrial Battery',
    description:
      'The Industrial Battery is a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/c/c9/Industrial_Battery.png/348px-Industrial_Battery.png.webp',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 35,
        amount: 7,
      },
      {
        id: 21,
        amount: 2,
      },
    ],
    workshop: [
      {
        id: 0,
        amount: 3,
      },
    ],
    weight: 2,
    canBeFoundIn: 'Industrial',
  },
  {
    id: 87,
    name: 'Industrial Charger',
    description:
      'The Industrial Charger is a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/6/66/Industrial_Charger.png/348px-Industrial_Charger.png.webp',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 103,
        amount: 5,
      },
      {
        id: 188,
        amount: 1,
      },
    ],
    workshop: [],
    weight: 2,
    canBeFoundIn: 'Industrial',
  },
  {
    id: 88,
    name: 'Industrial Magnet',
    description:
      'The Industrial Magnet is a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/3/38/Industrial_Magnet.png/348px-Industrial_Magnet.png.webp',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 103,
        amount: 4,
      },
      {
        id: 96,
        amount: 2,
      },
    ],
    workshop: [],
    weight: 2,
    canBeFoundIn: 'Industrial',
  },
  {
    id: 89,
    name: 'Ion Sputter',
    description:
      'The Ion Sputter is an epic item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/e/e7/Ion_Sputter.png/348px-Ion_Sputter.png.webp',
    sellPrice: 6000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Epic',
    recyclesTo: [
      {
        id: 188,
        amount: 4,
      },
      {
        id: 62,
        amount: 1,
      },
    ],
    workshop: [],
    weight: 1.5,
    canBeFoundIn: 'Exodus',
  },
  {
    id: 90,
    name: 'Laboratory Reagents',
    description:
      'Laboratory Reagents are a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/e/e5/Laboratory_Reagents.png/348px-Laboratory_Reagents.png.webp',
    sellPrice: 2000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 35,
        amount: 16,
      },
      {
        id: 42,
        amount: 3,
      },
    ],
    workshop: [
      {
        id: 0,
        amount: 3,
      },
    ],
    weight: 3,
    canBeFoundIn: 'Medical',
  },
  {
    id: 91,
    name: "Lance's Mixtape (5th Edition)",
    description:
      "Lance's Mixtape (5th Edition) has some great tunes, other Raiders are envious of those who find them.",
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/1/15/Lance%27s_Mixtape_%285th_Edition%29.png/348px-Lance%27s_Mixtape_%285th_Edition%29.png.webp',
    sellPrice: 10000,
    category: 'Trinket',
    maxStackSize: 3,
    rarity: 'Epic',
    recyclesTo: [],
    workshop: [],
    weight: 0.2,
    canBeFoundIn: 'Residential,Commercial',
  },
  {
    id: 92,
    name: 'Leaper Pulse Unit',
    description:
      'The Leaper Pulse Unit is an epic item found on Leapers that can be thrown to create a small violent singularity or recycled for crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/a/a0/Leaper_Pulse_Unit.png/348px-Leaper_Pulse_Unit.png.webp',
    sellPrice: 5000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Epic',
    recyclesTo: [
      {
        id: 0,
        amount: 3,
      },
      {
        id: 3,
        amount: 2,
      },
    ],
    workshop: [
      {
        id: 0,
        amount: 4,
      },
    ],
    weight: 1,
    canBeFoundIn: 'ARC',
    meta: {
      damage: 100,
      radius: 10,
    },
  },
  {
    id: 93,
    name: 'Lemon',
    description: 'A Lemon can be consumed for a small burst of energy.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/3/35/Lemon.png/348px-Lemon.png.webp',
    sellPrice: 640,
    category: 'Nature',
    maxStackSize: 10,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 19,
        amount: 3,
      },
    ],
    workshop: [
      {
        id: 0,
        amount: 5,
      },
    ],
    weight: 0.2,
    canBeFoundIn: 'Nature',
    meta: {
      stamina: 20,
      'use time': 1,
    },
  },
  {
    id: 94,
    name: 'Light Gun Parts',
    description:
      'Light Gun Parts are used to upgrade, craft, and repair weapons that use light ammo.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/c/c9/Light_Gun_Parts.png/348px-Light_Gun_Parts.png.webp',
    sellPrice: 700,
    category: 'Topside Material',
    maxStackSize: 5,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 163,
        amount: 2,
      },
    ],
    workshop: [],
    weight: 0.3,
    canBeFoundIn: 'Security,Raider',
  },
  {
    id: 95,
    name: 'Light Bulb',
    description:
      'People sure love to see whilst underground, good thing we get illumination from these Light Bulbs.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/2/2c/Light_Bulb.png/348px-Light_Bulb.png.webp',
    sellPrice: 2000,
    category: 'Trinket',
    maxStackSize: 3,
    rarity: 'Uncommon',
    recyclesTo: [],
    workshop: [],
    weight: 0.2,
    canBeFoundIn: 'Electrical',
  },
  {
    id: 96,
    name: 'Magnet',
    description:
      'The Magnet is an uncommon item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/8/8c/Magnet.png/348px-Magnet.png.webp',
    sellPrice: 300,
    category: 'Topside Material',
    maxStackSize: 15,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 103,
        amount: 2,
      },
    ],
    workshop: [],
    weight: 0.25,
    canBeFoundIn: 'Exodus',
  },
  {
    id: 97,
    name: 'Magnetic Accelerator',
    description:
      'The Magnetic Accelerator is an epic item used to craft advanced weapons and can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/5/5e/Magnetic_Accelerator.png/348px-Magnetic_Accelerator.png.webp',
    sellPrice: 5500,
    category: 'Refined Material',
    maxStackSize: 3,
    rarity: 'Epic',
    recyclesTo: [
      {
        id: 3,
        amount: 1,
      },
      {
        id: 14,
        amount: 1,
      },
    ],
    workshop: [],
    weight: 1,
    canBeFoundIn: 'Exodus',
  },
  {
    id: 98,
    name: 'Magnetron',
    description:
      'Magnetron is an epic item that can be recycled into crafting materials',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/a/a2/Magnetron.png/348px-Magnetron.png.webp',
    sellPrice: 6000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Epic',
    recyclesTo: [
      {
        id: 97,
        amount: 1,
      },
      {
        id: 171,
        amount: 1,
      },
    ],
    workshop: [],
    weight: 1.5,
    canBeFoundIn: 'Exodus',
  },
  {
    id: 99,
    name: 'Matriarch Reactor',
    description:
      'The Matriarch Reactor is a legendary item only acquired by defeating the Matriarch that can be recycled into crafting materials or used to craft Aphelion.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/2/24/Matriarch_Reactor.png/348px-Matriarch_Reactor.png.webp',
    sellPrice: 13000,
    category: 'Recyclable',
    maxStackSize: 1,
    rarity: 'Legendary',
    recyclesTo: [
      {
        id: 125,
        amount: 1,
      },
      {
        id: 97,
        amount: 1,
      },
    ],
    workshop: [],
    weight: 10,
    canBeFoundIn: 'ARC',
  },
  {
    id: 100,
    name: 'Mechanical Components',
    description:
      'Mechanical Components are an uncommon item used to craft, repair, and upgrade weapons that can also be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/9/94/Mechanical_Components.png/348px-Mechanical_Components.png.webp',
    sellPrice: 640,
    category: 'Refined Material',
    maxStackSize: 10,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 103,
        amount: 3,
      },
      {
        id: 145,
        amount: 2,
      },
    ],
    workshop: [
      {
        id: 0,
        amount: 5,
      },
    ],
    weight: 0.8,
    canBeFoundIn: 'Mechanical',
  },
  {
    id: 101,
    name: 'Medium Gun Parts',
    description:
      'Medium Gun Parts are used to upgrade, craft, and repair weapons that use medium ammo.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/9/9a/Medium_Gun_Parts.png/348px-Medium_Gun_Parts.png.webp',
    sellPrice: 700,
    category: 'Topside Material',
    maxStackSize: 5,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 163,
        amount: 2,
      },
    ],
    workshop: [],
    weight: 0.4,
    canBeFoundIn: 'Raider,Security',
  },
  {
    id: 102,
    name: 'Metal Brackets',
    description:
      'Metal Brackets an uncommon item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/6/62/Metal_Brackets.png/348px-Metal_Brackets.png.webp',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 5,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 103,
        amount: 8,
      },
    ],
    workshop: [],
    weight: 0.8,
    canBeFoundIn: 'MechanicalElectrical',
  },
  {
    id: 103,
    name: 'Metal Parts',
    description:
      'Metal Parts a common item used to craft all sorts of refined materials, weapons, and gadgets your Raider needs to survive while Topside.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/8/89/Metal_Parts.png/348px-Metal_Parts.png.webp',
    sellPrice: 75,
    category: 'Misc',
    maxStackSize: 50,
    rarity: 'Common',
    recyclesTo: [],
    workshop: [
      {
        id: 0,
        amount: 20,
      },
      {
        id: 0,
        amount: 60,
      },
    ],
    weight: 0.1,
    canBeFoundIn: 'Mechanical,Industrial,Electrical,Technological',
  },
  {
    id: 104,
    name: 'Microscope',
    description:
      'The Microscope is a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/2/2c/Microscope.png/348px-Microscope.png.webp',
    sellPrice: 3000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 3,
        amount: 1,
      },
      {
        id: 96,
        amount: 3,
      },
    ],
    workshop: [],
    weight: 1.5,
    canBeFoundIn: 'Exodus',
  },
  {
    id: 105,
    name: 'Mini Centrifuge',
    description:
      'The Mini Centrifuge is a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/9/9f/Mini_Centrifuge.png/348px-Mini_Centrifuge.png.webp',
    sellPrice: 3000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 3,
        amount: 1,
      },
      {
        id: 33,
        amount: 2,
      },
    ],
    workshop: [],
    weight: 3,
    canBeFoundIn: 'Exodus',
  },
  {
    id: 106,
    name: 'Mod Components',
    description:
      'Mod Components are a rare item that is used to craft weapon mods or can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/0/0f/Mod_Components.png/348px-Mod_Components.png.webp',
    sellPrice: 1750,
    category: 'Refined Material',
    maxStackSize: 5,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 100,
        amount: 1,
      },
      {
        id: 171,
        amount: 1,
      },
    ],
    workshop: [],
    weight: 1,
    canBeFoundIn: 'Security',
  },
  {
    id: 107,
    name: 'Moss',
    description:
      'Moss is a rare item that can be recycled into crafting materials or consumed for some health in a pinch.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/6/64/Moss.png/348px-Moss.png.webp',
    sellPrice: 500,
    category: 'Topside Material',
    maxStackSize: 10,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 19,
        amount: 3,
      },
    ],
    workshop: [],
    weight: 0.3,
    canBeFoundIn: 'Nature',
    meta: {
      healing: 1,
      'use time': 1,
      duration: 10,
    },
  },
  {
    id: 108,
    name: 'Motor',
    description:
      'The Motor is a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/0/0f/Motor.png/348px-Motor.png.webp',
    sellPrice: 2000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 113,
        amount: 2,
      },
      {
        id: 100,
        amount: 2,
      },
    ],
    workshop: [
      {
        id: 0,
        amount: 3,
      },
    ],
    weight: 3,
    canBeFoundIn: 'Mechanical',
  },
  {
    id: 109,
    name: 'Mushroom',
    description:
      'A Mushroom can be consumed by your Raider to gain health in a pinch. In the nature they can be found attached to trees, growing on pipes, standing on their own, or in Wicker Baskets.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/8/8c/Mushroom.png/348px-Mushroom.png.webp',
    sellPrice: 1000,
    category: 'Misc',
    maxStackSize: 10,
    rarity: 'Common',
    recyclesTo: [],
    workshop: [
      {
        id: 0,
        amount: 12,
      },
    ],
    weight: 0.2,
    canBeFoundIn: 'Nature',
    meta: {
      healing: 15,
      'use time': 1,
    },
  },
  {
    id: 110,
    name: 'Music Box',
    description:
      'Sometimes the Music Box still works, even after all these years.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/7/74/Music_Box.png/348px-Music_Box.png.webp',
    sellPrice: 5000,
    category: 'Trinket',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [],
    workshop: [],
    weight: 0.4,
    canBeFoundIn: 'Old World,Commercial,Residential',
  },
  {
    id: 111,
    name: 'Music Album',
    description:
      'The Music Album is a must have when relaxing after a stressful day Topside.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/9/90/Music_Album.png/348px-Music_Album.png.webp',
    sellPrice: 3000,
    category: 'Trinket',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [],
    workshop: [],
    weight: 0.3,
    canBeFoundIn: 'Residential,Commercial',
  },
  {
    id: 112,
    name: 'Number Plate',
    description:
      'The Number Plate is an uncommon item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/5/51/Number_Plate.png/348px-Number_Plate.png.webp',
    sellPrice: 270,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 103,
        amount: 3,
      },
    ],
    workshop: [],
    weight: 0.8,
    canBeFoundIn: 'Mechanical',
  },
  {
    id: 113,
    name: 'Oil',
    description:
      'Oil is an uncommon item used for explosives that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/0/06/Oil.png/348px-Oil.png.webp',
    sellPrice: 300,
    category: 'Topside Material',
    maxStackSize: 15,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 35,
        amount: 3,
      },
    ],
    workshop: [],
    weight: 0.25,
    canBeFoundIn: 'Mechanical',
  },
  {
    id: 114,
    name: 'Olives',
    description: 'Olives can be consumed for a small burst of energy.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/f/f3/Olives.png/348px-Olives.png.webp',
    sellPrice: 640,
    category: 'Nature',
    maxStackSize: 10,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 19,
        amount: 2,
      },
    ],
    workshop: [
      {
        id: 0,
        amount: 8,
      },
    ],
    weight: 0.2,
    canBeFoundIn: 'Nature',
    meta: {
      stamina: 20,
      'use time': 1,
    },
  },
  {
    id: 115,
    name: 'Painted Box',
    description:
      "No idea why anyone wants a Painted Box of all things, but they're paying me for it so I don't care.",
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/5/53/Painted_Box.png/348px-Painted_Box.png.webp',
    sellPrice: 2000,
    category: 'Trinket',
    maxStackSize: 3,
    rarity: 'Common',
    recyclesTo: [],
    workshop: [],
    weight: 0.3,
    canBeFoundIn: 'Old World',
  },
  {
    id: 116,
    name: 'Plastic Parts',
    description:
      "Plastic Parts are a common item used to craft a wide range of items you'll use while Topside.",
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/c/c9/Plastic_Parts.png/348px-Plastic_Parts.png.webp',
    sellPrice: 60,
    category: 'Misc',
    maxStackSize: 50,
    rarity: 'Common',
    recyclesTo: [],
    workshop: [
      {
        id: 0,
        amount: 25,
      },
      {
        id: 0,
        amount: 50,
      },
    ],
    weight: 0.1,
    canBeFoundIn: 'Technological,Commercial,Residential',
  },
  {
    id: 117,
    name: 'Playing Cards',
    description: 'These Playing Cards a great to for Go-Fish!',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/e/e2/Playing_Cards.png/348px-Playing_Cards.png.webp',
    sellPrice: 5000,
    category: 'Trinket',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [],
    workshop: [],
    weight: 0.2,
    canBeFoundIn: 'Commercial,Residential',
  },
  {
    id: 118,
    name: 'Pottery',
    description: "Careful with the Pottery, it's very fragile.",
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/c/c0/Pottery.png/348px-Pottery.png.webp',
    sellPrice: 2000,
    category: 'Trinket',
    maxStackSize: 3,
    rarity: 'Uncommon',
    recyclesTo: [],
    workshop: [],
    weight: 0.3,
    canBeFoundIn: 'Old World,Residential',
  },
  {
    id: 119,
    name: 'Polluted Air Filter',
    description:
      'The Polluted Air Filter is a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/6/6e/Polluted_Air_Filter.png/348px-Polluted_Air_Filter.png.webp',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 66,
        amount: 6,
      },
      {
        id: 113,
        amount: 2,
      },
    ],
    workshop: [],
    weight: 0.8,
    canBeFoundIn: 'Industrial',
  },
  {
    id: 120,
    name: 'Pop Trigger',
    description:
      'The Pop Trigger is a common item acquired from Pops that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/c/c6/Pop_Trigger.png/348px-Pop_Trigger.png.webp',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Common',
    recyclesTo: [
      {
        id: 42,
        amount: 1,
      },
      {
        id: 10,
        amount: 1,
      },
    ],
    workshop: [
      {
        id: 0,
        amount: 5,
      },
    ],
    weight: 0.5,
    canBeFoundIn: 'ARC',
  },
  {
    id: 121,
    name: 'Portable TV',
    description:
      'The Portable TV is a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/5/5f/Portable_TV.png/348px-Portable_TV.png.webp',
    sellPrice: 2000,
    category: 'Recyclable',
    maxStackSize: 1,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 192,
        amount: 6,
      },
      {
        id: 21,
        amount: 2,
      },
    ],
    workshop: [],
    weight: 3,
    canBeFoundIn: 'Residential',
  },
  {
    id: 122,
    name: 'Poster of Natural Wonders',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/2/2b/Poster_Of_Natural_Wonders.png/revision/latest?cb=20251101235727',
    sellPrice: 2000,
    category: 'Trinket',
    maxStackSize: 1,
    rarity: 'Uncommon',
    recyclesTo: [],
    workshop: [],
  },
  {
    id: 123,
    name: 'Power Bank',
    description:
      'The Power Bank is a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/7/77/Power_Bank.png/348px-Power_Bank.png.webp',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 21,
        amount: 2,
      },
      {
        id: 192,
        amount: 2,
      },
    ],
    workshop: [],
    weight: 2,
    canBeFoundIn: 'Electrical,Commercial,Residential',
  },
  {
    id: 124,
    name: 'Power Cable',
    description:
      'The Power Cable is a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/f/f8/Power_Cable.png/348px-Power_Cable.png.webp',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 192,
        amount: 4,
      },
    ],
    workshop: [
      {
        id: 0,
        amount: 3,
      },
    ],
    weight: 2,
    canBeFoundIn: 'Electrical,Commercial,Residential',
  },
  {
    id: 125,
    name: 'Power Rod',
    description:
      'The Power Rod is an epic item used in crafting that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/3/31/Power_Rod.png/348px-Power_Rod.png.webp',
    sellPrice: 5000,
    category: 'Advanced Material',
    maxStackSize: 3,
    rarity: 'Epic',
    recyclesTo: [
      {
        id: 2,
        amount: 1,
      },
      {
        id: 11,
        amount: 1,
      },
    ],
    workshop: [],
    weight: 1,
    canBeFoundIn: 'Exodus',
  },
  {
    id: 126,
    name: 'Prickly Pear',
    description:
      'The Prickly Pear can be consumed for a small burst of energy.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/8/80/Prickly_Pear.png/348px-Prickly_Pear.png.webp',
    sellPrice: 640,
    category: 'Misc',
    maxStackSize: 10,
    rarity: 'Uncommon',
    recyclesTo: [],
    workshop: [
      {
        id: 0,
        amount: 8,
      },
    ],
    weight: 0.2,
    canBeFoundIn: 'Nature',
    meta: {
      stamina: 20,
      'use time': 1,
    },
  },
  {
    id: 127,
    name: 'Processor',
    description:
      'The Processor is a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/4/4e/Processor.png/348px-Processor.png.webp',
    sellPrice: 500,
    category: 'Topside Material',
    maxStackSize: 5,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 192,
        amount: 1,
      },
      {
        id: 116,
        amount: 1,
      },
    ],
    workshop: [],
    weight: 0.2,
    canBeFoundIn: 'Technological',
  },
  {
    id: 128,
    name: 'Projector',
    description:
      'The Projector is a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/0/04/Projector.png/348px-Projector.png.webp',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 192,
        amount: 2,
      },
      {
        id: 127,
        amount: 1,
      },
    ],
    workshop: [],
    weight: 2,
    canBeFoundIn: 'Residential',
  },
  {
    id: 129,
    name: 'Queen Reactor',
    description:
      'The Queen Reactor is a legendary item acquired by defeating The Queen that can be recycled into crafting materials. Note that it is possible to obtain without killing The Queen as the reactors can spawn in destroyed leg armor segments.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/6/6b/Queen_Reactor.png/348px-Queen_Reactor.png.webp',
    sellPrice: 13000,
    category: 'Recyclable',
    maxStackSize: 1,
    rarity: 'Legendary',
    recyclesTo: [
      {
        id: 125,
        amount: 1,
      },
      {
        id: 97,
        amount: 1,
      },
    ],
    workshop: [],
    weight: 10,
    canBeFoundIn: 'ARC',
  },
  {
    id: 130,
    name: 'Radio',
    description:
      'The Radio is a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/3/31/Radio.png/348px-Radio.png.webp',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 165,
        amount: 1,
      },
      {
        id: 158,
        amount: 1,
      },
    ],
    workshop: [],
    weight: 2,
    canBeFoundIn: 'Commercial,Residential',
  },
  {
    id: 131,
    name: 'Radio Relay',
    description:
      'Radio Relay is a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/b/b6/Radio_Relay.png/348px-Radio_Relay.png.webp',
    sellPrice: 3000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 0,
        amount: 2,
      },
      {
        id: 158,
        amount: 2,
      },
    ],
    workshop: [],
    weight: 1.5,
    canBeFoundIn: 'Exodus',
  },
  {
    id: 132,
    name: 'Resin',
    description:
      'Resin is a common Healing item that can be consumed to gradually restore a small amount of health over time.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/2/2c/Resin.png/348px-Resin.png.webp',
    sellPrice: 1000,
    category: 'Nature',
    maxStackSize: 10,
    rarity: 'Common',
    recyclesTo: [],
    workshop: [],
    weight: 0.4,
    canBeFoundIn: 'Nature',
    meta: {
      healing: 1,
      'use time': 1,
      duration: 10,
    },
  },
  {
    id: 133,
    name: 'Recorder',
    description: 'The Recorder is peak.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/6/6d/Recorder.png/348px-Recorder.png.webp',
    sellPrice: 1000,
    category: 'Trinket',
    maxStackSize: 1,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 116,
        amount: 10,
      },
    ],
    workshop: [],
    weight: 0.2,
    canBeFoundIn: 'Residential',
  },
  {
    id: 134,
    name: 'Red Coral Jewelry',
    description:
      'Red Coral Jewelry is very valuable and shiny, it definitely makes the other Raiders jealous on the dance floor.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/1/1a/Red_Coral_Jewelry.png/348px-Red_Coral_Jewelry.png.webp',
    sellPrice: 5000,
    category: 'Trinket',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [],
    workshop: [],
    weight: 0.3,
    canBeFoundIn: 'Old World,Commercial,Residential',
  },
  {
    id: 135,
    name: 'Remote Control',
    description:
      'The Remote Control is a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/f/f4/Remote_Control.png/348px-Remote_Control.png.webp',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 116,
        amount: 7,
      },
      {
        id: 158,
        amount: 1,
      },
    ],
    workshop: [],
    weight: 0.8,
    canBeFoundIn: 'Residential',
  },
  {
    id: 136,
    name: 'Ripped Safety Vest',
    description:
      'The Ripped Safety Vest is an uncommon item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/a/a8/Ripped_Safety_Vest.png/348px-Ripped_Safety_Vest.png.webp',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 59,
        amount: 1,
      },
      {
        id: 96,
        amount: 1,
      },
    ],
    workshop: [],
    weight: 0.8,
    canBeFoundIn: 'Industrial',
  },
  {
    id: 137,
    name: 'Rocketeer Driver',
    description:
      'The Rocketeer Driver is an epic item found by destroying Rocketeers or searching Rocketeer Husks that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/e/ef/Rocketeer_Driver.png/348px-Rocketeer_Driver.png.webp',
    sellPrice: 5000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Epic',
    recyclesTo: [
      {
        id: 10,
        amount: 3,
      },
      {
        id: 2,
        amount: 2,
      },
    ],
    workshop: [
      {
        id: 0,
        amount: 3,
      },
    ],
    weight: 1,
    canBeFoundIn: 'ARC',
  },
  {
    id: 138,
    name: 'Rocket Thruster',
    description:
      'The Rocket Thruster is a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/8/8a/Rocket_Thruster.png/348px-Rocket_Thruster.png.webp',
    sellPrice: 2000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 173,
        amount: 2,
      },
      {
        id: 0,
        amount: 6,
      },
    ],
    workshop: [],
    weight: 3,
    canBeFoundIn: 'Exodus',
  },
  {
    id: 139,
    name: 'Roots',
    description: 'Roots are an uncommon item.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/5/57/Roots.png/348px-Roots.png.webp',
    sellPrice: 640,
    category: 'Nature',
    maxStackSize: 10,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 19,
        amount: 1,
      },
    ],
    workshop: [],
    weight: 0.2,
    canBeFoundIn: 'Nature',
  },
  {
    id: 140,
    name: 'Rope',
    description:
      'Rope is a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/b/b4/Rope.png/348px-Rope.png.webp',
    sellPrice: 500,
    category: 'Topside Material',
    maxStackSize: 5,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 66,
        amount: 5,
      },
    ],
    workshop: [],
    weight: 0.3,
    canBeFoundIn: 'Commercial,Residential',
  },
  {
    id: 141,
    name: 'Rosary',
    description:
      'A Rosary is very valuable to those who still practice the old religions.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/7/77/Rosary.png/348px-Rosary.png.webp',
    sellPrice: 2000,
    category: 'Trinket',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [],
    workshop: [],
    weight: 0.3,
    canBeFoundIn: 'Old World,Residential',
  },
  {
    id: 142,
    name: 'Rotary Encoder',
    description:
      'Rotary Encoder is a rare item that can be recycled into crafting materials',
    imageUrl: 'https://arcraiders.wiki/w/images/e/e4/Rotary_Encoder.png',
    sellPrice: 3000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 60,
        amount: 2,
      },
      {
        id: 127,
        amount: 2,
      },
    ],
    workshop: [],
    weight: 1.5,
    canBeFoundIn: 'Exodus',
  },
  {
    id: 143,
    name: 'Rubber Duck',
    description: "MY PRECIOUS RUBBER DUCK, DON'T TOUCH MY PRECIOUS",
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/d/df/Rubber_Duck.png/348px-Rubber_Duck.png.webp',
    sellPrice: 1000,
    category: 'Trinket',
    maxStackSize: 15,
    rarity: 'Common',
    recyclesTo: [],
    workshop: [],
    weight: 0.3,
  },
  {
    id: 144,
    name: 'Rubber Pad',
    description:
      'The Rubber Pad is a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/1/1a/Rubber_Pad.png/348px-Rubber_Pad.png.webp',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 145,
        amount: 18,
      },
    ],
    workshop: [],
    weight: 2,
    canBeFoundIn: 'Electrical',
  },
  {
    id: 145,
    name: 'Rubber Parts',
    description:
      'Rubber Parts are a common item used to craft all sorts of doo-dads your Raider will use while Topside.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/9/93/Rubber_Parts.png/348px-Rubber_Parts.png.webp',
    sellPrice: 50,
    category: 'Misc',
    maxStackSize: 50,
    rarity: 'Common',
    recyclesTo: [],
    workshop: [
      {
        id: 0,
        amount: 30,
      },
    ],
    weight: 0.1,
    canBeFoundIn: 'Mechanical,Industrial,Electrical',
  },
  {
    id: 146,
    name: 'Ruined Accordion',
    description:
      'The Ruined Accordion is a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/a/a6/Ruined_Accordion.png/348px-Ruined_Accordion.png.webp',
    sellPrice: 2000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 145,
        amount: 18,
      },
      {
        id: 171,
        amount: 3,
      },
    ],
    workshop: [],
    weight: 3,
    canBeFoundIn: 'Residential',
  },
  {
    id: 147,
    name: 'Ruined Baton',
    description:
      'Ruined Baton is an uncommon item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/e/ee/Ruined_Baton.png/348px-Ruined_Baton.png.webp',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 103,
        amount: 6,
      },
      {
        id: 145,
        amount: 3,
      },
    ],
    workshop: [],
    weight: 0.8,
    canBeFoundIn: 'Security',
  },
  {
    id: 148,
    name: 'Ruined Handcuffs',
    description:
      'The Ruined Handcuffs are an uncommon item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/7/7c/Ruined_Handcuffs.png/348px-Ruined_Handcuffs.png.webp',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 103,
        amount: 8,
      },
    ],
    workshop: [],
    weight: 0.8,
    canBeFoundIn: 'Security',
  },
  {
    id: 149,
    name: 'Ruined Parachute',
    description:
      'The Ruined Parachute is an uncommon item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/5/5c/Ruined_Parachute.png/348px-Ruined_Parachute.png.webp',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 66,
        amount: 10,
      },
    ],
    workshop: [],
    weight: 0.8,
    canBeFoundIn: 'Exodus',
  },
  {
    id: 150,
    name: 'Ruined Riot Shield',
    description:
      'The Ruined Riot Shield is a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/c/cb/Ruined_Riot_Shield.png/348px-Ruined_Riot_Shield.png.webp',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 116,
        amount: 10,
      },
      {
        id: 145,
        amount: 6,
      },
    ],
    workshop: [],
    weight: 2,
    canBeFoundIn: 'Security',
  },
  {
    id: 151,
    name: 'Ruined Tactical Vest',
    description:
      'The Ruined Tactical Vest is an uncommon item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/c/c2/Ruined_Tactical_Vest.png/348px-Ruined_Tactical_Vest.png.webp',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 66,
        amount: 5,
      },
      {
        id: 96,
        amount: 1,
      },
    ],
    workshop: [],
    weight: 0.8,
    canBeFoundIn: 'Security',
  },
  {
    id: 152,
    name: 'Rusted Bolts',
    description:
      'Rusted Bolts are an uncommon item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/b/bf/Rusted_Bolts.png/348px-Rusted_Bolts.png.webp',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 103,
        amount: 8,
      },
    ],
    workshop: [],
    weight: 0.8,
    canBeFoundIn: 'Mechanical,Industrial',
  },
  {
    id: 153,
    name: 'Rusted Gear',
    description:
      'The Rusted Gear is a rare item that can be recycled into crafting materials.',
    imageUrl: 'https://arcraiders.wiki/w/images/c/cf/Rusted_Gear.png',
    sellPrice: 2000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 103,
        amount: 4,
      },
      {
        id: 100,
        amount: 2,
      },
    ],
    workshop: [
      {
        id: 0,
        amount: 3,
      },
    ],
    weight: 3,
    canBeFoundIn: 'Industrial',
  },
  {
    id: 154,
    name: 'Rusted Shut Medical Kit',
    description:
      'The Rusted Shut Medical Kit is a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/1/1a/Rusted_Shut_Medical_Kit.png/348px-Rusted_Shut_Medical_Kit.png.webp',
    sellPrice: 2000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 174,
        amount: 2,
      },
      {
        id: 8,
        amount: 1,
      },
    ],
    workshop: [
      {
        id: 0,
        amount: 3,
      },
    ],
    weight: 3,
    canBeFoundIn: 'Medical',
  },
  {
    id: 155,
    name: 'Rusted Tools',
    description:
      'Rusted Tools is a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/3/30/Rusted_Tools.png/348px-Rusted_Tools.png.webp',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 103,
        amount: 8,
      },
      {
        id: 171,
        amount: 1,
      },
    ],
    workshop: [
      {
        id: 0,
        amount: 3,
      },
    ],
    weight: 2,
    canBeFoundIn: 'Mechanical,Industrial',
  },
  {
    id: 156,
    name: 'Rusty ARC Steel',
    description:
      'Rusty ARC Steel is an uncommon item that can be recycled into crafting materials.',
    imageUrl: 'https://arcraiders.wiki/w/images/3/33/Rusty_ARC_Steel.png',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 103,
        amount: 8,
      },
    ],
    workshop: [],
    weight: 1,
    canBeFoundIn: 'ARC',
  },
  {
    id: 157,
    name: 'Sample Cleaner',
    description:
      'The Sample Cleaner is a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/d/d8/Sample_Cleaner.png/348px-Sample_Cleaner.png.webp',
    sellPrice: 3000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 60,
        amount: 2,
      },
      {
        id: 19,
        amount: 14,
      },
    ],
    workshop: [],
    weight: 1.5,
    canBeFoundIn: 'Exodus',
  },
  {
    id: 158,
    name: 'Sensors',
    description:
      'Sensors are a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/9/9c/Sensors.png/348px-Sensors.png.webp',
    sellPrice: 500,
    category: 'Topside Material',
    maxStackSize: 5,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 192,
        amount: 1,
      },
      {
        id: 103,
        amount: 1,
      },
    ],
    workshop: [],
    weight: 0.3,
    canBeFoundIn: 'Technological,Security',
  },
  {
    id: 159,
    name: 'Sentinel Firing Core',
    description:
      'The Sentinel Firing Core is a rare item that can be found by destroying Sentinels and can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/9/91/Sentinel_Firing_Core.png/348px-Sentinel_Firing_Core.png.webp',
    sellPrice: 3000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 10,
        amount: 2,
      },
      {
        id: 100,
        amount: 3,
      },
    ],
    workshop: [
      {
        id: 0,
        amount: 4,
      },
    ],
    weight: 1,
    canBeFoundIn: 'ARC',
  },
  {
    id: 160,
    name: 'Shredder Gyro',
    description:
      'The Shredder Gyro is an uncommon item that can be found by destroying Shredders and can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/9/96/Shredder_Gyro.png/348px-Shredder_Gyro.png.webp',
    sellPrice: 3000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 100,
        amount: 3,
      },
      {
        id: 10,
        amount: 3,
      },
    ],
    workshop: [],
    weight: 1,
    canBeFoundIn: 'ARC',
  },
  {
    id: 161,
    name: 'Signal Amplifier',
    description:
      'The Signal Amplifier is a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/d/de/Signal_Amplifier.png/348px-Signal_Amplifier.png.webp',
    sellPrice: 3000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 60,
        amount: 2,
      },
      {
        id: 188,
        amount: 2,
      },
    ],
    workshop: [],
    weight: 1.5,
    canBeFoundIn: 'Exodus',
  },
  {
    id: 162,
    name: 'Silver Teaspoon Set',
    description:
      'A Silver Teaspoon Set sells for a pretty penny to those with refined tastes.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/9/90/Silver_Teaspoon_Set.png/348px-Silver_Teaspoon_Set.png.webp',
    sellPrice: 3000,
    category: 'Trinket',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [],
    workshop: [],
    weight: 0.3,
    canBeFoundIn: 'Old World,Commercial,Residential',
  },
  {
    id: 163,
    name: 'Simple Gun Parts',
    description:
      'Simple Gun Parts are an uncommon item used to upgrade, craft, and repair weapons. They are needed in most weapon recipes and can be refined into Light, Medium and Heavy Gun Parts with the appropriate blueprints.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/7/77/Simple-gun-parts.png/348px-Simple-gun-parts.png.webp',
    sellPrice: 330,
    category: 'Topside Material',
    maxStackSize: 10,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 0,
        amount: 2,
      },
    ],
    workshop: [],
    weight: 0.3,
    canBeFoundIn: 'Raider,Security',
  },
  {
    id: 164,
    name: 'Snitch Scanner',
    description:
      'The Snitch Scanner is an uncommon item found by destroying Snitches that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/e/e5/Snitch_Scanner.png/348px-Snitch_Scanner.png.webp',
    sellPrice: 2000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 10,
        amount: 4,
      },
    ],
    workshop: [
      {
        id: 0,
        amount: 6,
      },
    ],
    weight: 0.75,
    canBeFoundIn: 'ARC',
  },
  {
    id: 165,
    name: 'Speaker Component',
    description:
      'A Speaker Component is a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/e/ee/Speaker_Component.png/348px-Speaker_Component.png.webp',
    sellPrice: 500,
    category: 'Topside Material',
    maxStackSize: 5,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 116,
        amount: 2,
      },
      {
        id: 145,
        amount: 3,
      },
    ],
    workshop: [],
    weight: 0.3,
    canBeFoundIn: 'Commercial',
  },
  {
    id: 166,
    name: 'Spectrometer',
    description:
      'Spectrometer is a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/0/0e/Spectrometer.png/348px-Spectrometer.png.webp',
    sellPrice: 3000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 2,
        amount: 1,
      },
      {
        id: 158,
        amount: 1,
      },
    ],
    workshop: [],
    weight: 1.5,
    canBeFoundIn: 'Exodus',
  },
  {
    id: 167,
    name: 'Spectrum Analyzer',
    description:
      'The Spectrum Analyzer is an epic item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/0/0a/Spectrum_Analyzer.png/348px-Spectrum_Analyzer.png.webp',
    sellPrice: 3500,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Epic',
    recyclesTo: [
      {
        id: 158,
        amount: 1,
      },
      {
        id: 62,
        amount: 1,
      },
    ],
    workshop: [],
    weight: 1.5,
    canBeFoundIn: 'Exodus',
  },
  {
    id: 168,
    name: 'Spotter Relay',
    description:
      'The Spotter Relay is an uncommon item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/5/58/Spotter_Relay.png/348px-Spotter_Relay.png.webp',
    sellPrice: 2000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 60,
        amount: 2,
      },
      {
        id: 10,
        amount: 1,
      },
    ],
    workshop: [],
    weight: 1,
    canBeFoundIn: 'ARC',
  },
  {
    id: 169,
    name: 'Spring Cushion',
    description:
      'A Spring Cushion is a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/2/26/Spring_Cushion.png/348px-Spring_Cushion.png.webp',
    sellPrice: 2000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 59,
        amount: 2,
      },
      {
        id: 171,
        amount: 2,
      },
    ],
    workshop: [],
    weight: 2,
    canBeFoundIn: 'Commercial,Residential',
  },
  {
    id: 170,
    name: 'Statuette',
    description:
      'Look at the adorable tiny Statuette, can you imagine trying to haul a whole statue back instead.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/8/8a/Statuette.png/348px-Statuette.png.webp',
    sellPrice: 3000,
    category: 'Trinket',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [],
    workshop: [],
    weight: 0.3,
    canBeFoundIn: 'Old World,Residential',
  },
  {
    id: 171,
    name: 'Steel Spring',
    description:
      'The Steel Spring is an uncommon item used to craft weapon mods that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/d/db/Steel_Spring.png/348px-Steel_Spring.png.webp',
    sellPrice: 300,
    category: 'Topside Material',
    maxStackSize: 15,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 103,
        amount: 2,
      },
    ],
    workshop: [],
    weight: 0.25,
    canBeFoundIn: 'Industrial',
  },
  {
    id: 172,
    name: 'Surveyor Vault',
    description:
      'The Surveyor Vault is a rare item found by destroying Surveyors that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/a/a9/Surveyor_Vault.png/348px-Surveyor_Vault.png.webp',
    sellPrice: 2000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 100,
        amount: 2,
      },
      {
        id: 10,
        amount: 2,
      },
    ],
    workshop: [
      {
        id: 0,
        amount: 5,
      },
    ],
    weight: 1,
    canBeFoundIn: 'ARC',
  },
  {
    id: 173,
    name: 'Synthesized Fuel',
    description:
      'Synthesized Fuel is a rare item that can be recycled into crafting materials or thrown then shot to create a small explosion.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/8/8e/Synthesized_Fuel.png/348px-Synthesized_Fuel.png.webp',
    sellPrice: 700,
    category: 'Topside Material',
    maxStackSize: 5,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 113,
        amount: 1,
      },
      {
        id: 35,
        amount: 1,
      },
    ],
    workshop: [
      {
        id: 0,
        amount: 3,
      },
    ],
    weight: 0.5,
    canBeFoundIn: 'Exodus',
    meta: {
      damage: 80,
      radius: 7.5,
    },
  },
  {
    id: 174,
    name: 'Syringe',
    description:
      'The Syringe is a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/1/17/Syringe.png/348px-Syringe.png.webp',
    sellPrice: 500,
    category: 'Topside Material',
    maxStackSize: 5,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 116,
        amount: 3,
      },
      {
        id: 35,
        amount: 2,
      },
    ],
    workshop: [],
    weight: 0.3,
    canBeFoundIn: 'Medical',
  },
  {
    id: 175,
    name: 'Tattered ARC Lining',
    description:
      'Tattered ARC Lining is an uncommon item that can be recycled into crafting materials.',
    imageUrl: 'https://arcraiders.wiki/w/images/3/35/Tattered_ARC_Lining.png',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 66,
        amount: 12,
      },
    ],
    workshop: [],
    weight: 1,
    canBeFoundIn: 'ARC',
  },
  {
    id: 176,
    name: 'Tattered Clothes',
    description:
      'Tattered Clothes are an uncommon item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/c/c4/Tattered_Clothes.png/348px-Tattered_Clothes.png.webp',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 66,
        amount: 11,
      },
    ],
    workshop: [],
    weight: 0.8,
    canBeFoundIn: 'Residential',
  },
  {
    id: 177,
    name: 'Telemetry Transceiver',
    description:
      'Telemetry Transceiver is a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/a/a8/Telemetry_Transceiver.png/348px-Telemetry_Transceiver.png.webp',
    sellPrice: 3000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 2,
        amount: 1,
      },
      {
        id: 127,
        amount: 1,
      },
    ],
    workshop: [],
    weight: 1.5,
    canBeFoundIn: 'Exodus',
  },
  {
    id: 178,
    name: 'Thermostat',
    description:
      'A Thermostat is a rare item that can be recycled into crafting materials.',
    imageUrl: 'https://arcraiders.wiki/w/images/9/9a/Thermostat.png',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 145,
        amount: 7,
      },
      {
        id: 158,
        amount: 1,
      },
    ],
    workshop: [],
    weight: 2,
    canBeFoundIn: 'Residential',
  },
  {
    id: 179,
    name: 'Tick Pod',
    description:
      'A Tick Pod is an uncommon item found on Ticks that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/9/95/Tick_Pod.png/348px-Tick_Pod.png.webp',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 5,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 0,
        amount: 2,
      },
      {
        id: 35,
        amount: 2,
      },
    ],
    workshop: [
      {
        id: 0,
        amount: 8,
      },
    ],
    weight: 0.25,
    canBeFoundIn: 'ARC',
  },
  {
    id: 180,
    name: 'Toaster',
    description:
      'The Toaster is a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/5/50/Toaster.png/348px-Toaster.png.webp',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 116,
        amount: 5,
      },
      {
        id: 192,
        amount: 3,
      },
    ],
    workshop: [
      {
        id: 0,
        amount: 3,
      },
    ],
    weight: 2,
    canBeFoundIn: 'Residential',
  },
  {
    id: 181,
    name: 'Torn Book',
    description:
      'Whoever did this is a monster, how do they expect me to read a Torn Book?',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/c/cc/Torn_Book.png/348px-Torn_Book.png.webp',
    sellPrice: 1000,
    category: 'Trinket',
    maxStackSize: 5,
    rarity: 'Common',
    recyclesTo: [],
    workshop: [],
    weight: 0.3,
    canBeFoundIn: 'Residential,Old World',
  },
  {
    id: 182,
    name: 'Torn Blanket',
    description:
      'The Torn Blanket is a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/a/af/Torn_Blanket.png/348px-Torn_Blanket.png.webp',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 66,
        amount: 12,
      },
    ],
    workshop: [],
    weight: 2,
    canBeFoundIn: 'Residential,Medical',
  },
  {
    id: 183,
    name: 'Turbo Pump',
    description:
      'The Turbo Pump is a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/f/f1/Turbo_Pump.png/348px-Turbo_Pump.png.webp',
    sellPrice: 2000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 100,
        amount: 1,
      },
      {
        id: 113,
        amount: 3,
      },
    ],
    workshop: [],
    weight: 3,
    canBeFoundIn: 'Exodus',
  },
  {
    id: 184,
    name: 'Unusable Weapon',
    description:
      'Unusable Weapon is a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/3/37/Unusable_Weapon.png/348px-Unusable_Weapon.png.webp',
    sellPrice: 2000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 103,
        amount: 4,
      },
      {
        id: 163,
        amount: 5,
      },
    ],
    workshop: [],
    weight: 3,
    canBeFoundIn: 'Security',
  },
  {
    id: 185,
    name: 'Vase',
    description: 'Careful, the Vase is super fragile.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/6/6e/Vase.png/348px-Vase.png.webp',
    sellPrice: 3000,
    category: 'Trinket',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [],
    workshop: [],
    weight: 0.3,
    canBeFoundIn: 'Old World,Commercial,Residential',
  },
  {
    id: 186,
    name: 'Very Comfortable Pillow',
    description:
      'I could sleep on a Very Comfortable Pillow all day and night.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/a/a4/Very_Comfortable_Pillow.png/348px-Very_Comfortable_Pillow.png.webp',
    sellPrice: 2000,
    category: 'Trinket',
    maxStackSize: 3,
    rarity: 'Uncommon',
    recyclesTo: [],
    workshop: [
      {
        id: 0,
        amount: 3,
      },
    ],
    weight: 0.3,
    canBeFoundIn: 'Commercial,Residential',
  },
  {
    id: 187,
    name: 'Volcanic Rock',
    description: 'Careful where you throw this Volcanic Rock.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/2/26/Volcanic_Rock.png/348px-Volcanic_Rock.png.webp',
    sellPrice: 270,
    category: 'Misc',
    maxStackSize: 5,
    rarity: 'Common',
    recyclesTo: [],
    workshop: [],
    weight: 0.5,
    canBeFoundIn: 'Nature',
    meta: {
      damage: 10,
    },
  },
  {
    id: 188,
    name: 'Voltage Converter',
    description:
      'The Voltage Converter is a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/9/9a/Voltage-converter.png/348px-Voltage-converter.png.webp',
    sellPrice: 500,
    category: 'Topside Material',
    maxStackSize: 5,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 192,
        amount: 1,
      },
      {
        id: 145,
        amount: 1,
      },
    ],
    workshop: [],
    weight: 0.3,
    canBeFoundIn: 'Technological',
  },
  {
    id: 189,
    name: 'Wasp Driver',
    description:
      'The Wasp Driver is a rare item found by destroying Wasps that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/3/30/Wasp_Driver.png/348px-Wasp_Driver.png.webp',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 10,
        amount: 1,
      },
      {
        id: 60,
        amount: 1,
      },
    ],
    workshop: [
      {
        id: 0,
        amount: 8,
      },
    ],
    weight: 0.6,
    canBeFoundIn: 'ARC',
    meta: {
      damage: 80,
      radius: 5,
    },
  },
  {
    id: 190,
    name: 'Water Filter',
    description:
      'The Water Filter is a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/4/48/Water_Filter.png/348px-Water_Filter.png.webp',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 145,
        amount: 2,
      },
      {
        id: 33,
        amount: 3,
      },
    ],
    workshop: [],
    weight: 2,
    canBeFoundIn: 'Industrial',
  },
  {
    id: 191,
    name: 'Water Pump',
    description:
      'The Water Pump is a rare item that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/2/28/Water_Pump.png/348px-Water_Pump.png.webp',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 103,
        amount: 4,
      },
      {
        id: 113,
        amount: 2,
      },
    ],
    workshop: [],
    weight: 2,
    canBeFoundIn: 'Mechanical,Industrial',
  },
  {
    id: 192,
    name: 'Wires',
    description:
      'Wires are an uncommon item used to craft weapon mods that can be recycled into crafting materials.',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/3/39/Wires.png/348px-Wires.png.webp',
    sellPrice: 200,
    category: 'Topside Material',
    maxStackSize: 15,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 145,
        amount: 2,
      },
    ],
    workshop: [],
    weight: 0.25,
    canBeFoundIn: 'Electrical,Technological',
  },
  {
    id: 193,
    name: 'Rattler',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/b/be/Rattler-Level1.png/348px-Rattler-Level1.png.webp',
    description: 'The Rattler is an assault rifle which uses medium ammo.',
    sellPrice: 1750,
    category: 'Misc',
    rarity: 'Common',
    recyclesTo: [],
    workshop: [],
    weight: 6,
    meta: {
      ammo: 'Medium Ammo',
      'magazine size': 10,
      'firing mode': 'Fully-Automatic',
      'arc armor penetration': 'Moderate',
      damage: 9,
      'fire rate': 33.3,
      range: 56.2,
      stability: 72.2,
      agility: 54.8,
      stealth: 14,
    },
  },
  {
    id: 194,
    name: 'Medium Ammo',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/0/0c/MediumAmmo_Box.png/348px-MediumAmmo_Box.png.webp',
    description:
      'Medium Ammo is an ammo type used with some assault rifles and battle rifles.',
    sellPrice: 6,
    category: 'Misc',
    maxStackSize: 80,
    rarity: 'Common',
    recyclesTo: [],
    workshop: [],
    weight: 0.025,
  },
  {
    id: 195,
    name: 'Tactical Mk. 1',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/1/18/Tactical_Mk._1.png/348px-Tactical_Mk._1.png.webp',
    description:
      'Tactical Mk. 1 is an uncommon augment that provides 5 quick-use slots and allows the use of Light Shield and Medium Shield, but offers less backpack slots and a low weight limit.',
    sellPrice: 640,
    category: 'Misc',
    rarity: 'Uncommon',
    recyclesTo: [],
    workshop: [],
    weight: 2,
    meta: {
      'backpack slots': 15,
      'safe pocket slots': 1,
      'quick use slots': 5,
      'weapon slots': 2,
      'weight limit': 40,
      'shield compatibility': 'Light, Medium',
    },
  },
  {
    id: 196,
    name: 'Adrenaline Shot',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/1/1b/Adrenaline_Shot.png/348px-Adrenaline_Shot.png.webp',
    sellPrice: 300,
    category: 'Misc',
    maxStackSize: 5,
    rarity: 'Common',
    recyclesTo: [],
    workshop: [],
    weight: 0.2,
    meta: {
      stamina: 5,
      'use time': 1,
      duration: 10,
    },
  },
  {
    id: 197,
    name: 'Sterilized Bandage',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/9/99/Sterilized_Bandage.png/348px-Sterilized_Bandage.png.webp',
    sellPrice: 2000,
    category: 'Misc',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [],
    workshop: [],
    weight: 0.2,
    meta: {
      healing: 5,
      'use time': 1.5,
      duration: 10,
    },
  },
  {
    id: 198,
    name: 'Light Shield',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/4/40/Light_Shield.png/348px-Light_Shield.png.webp',
    description:
      'The Light Shield is an uncommon shield which offers limited protection without impacting mobility.',
    sellPrice: 640,
    category: 'Misc',
    rarity: 'Uncommon',
    recyclesTo: [],
    workshop: [],
    weight: 5,
    meta: {
      'shield charge': 40,
      'damage mitigation': 40,
    },
  },
  {
    id: 199,
    name: 'Compensator I',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/5/5f/Compensator_I.png/348px-Compensator_I.png.webp',
    description:
      'Compensator I is a Common Muzzle Weapon Modification that slightly reduces per-shot dispersion.',
    sellPrice: 640,
    category: 'Misc',
    rarity: 'Common',
    recyclesTo: [],
    workshop: [],
    weight: 0.25,
    meta: {
      'blueprint locked': 'No',
    },
  },
  {
    id: 200,
    name: 'Stable Stock I',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/8/8d/Stable_Stock_I.png/348px-Stable_Stock_I.png.webp',
    description:
      'Stable Stock I is a Common Stock Weapon Modification that slightly improves dispersion and recoil recovery time.',
    sellPrice: 640,
    category: 'Misc',
    rarity: 'Common',
    recyclesTo: [],
    workshop: [],
    weight: 0.25,
    meta: {
      'blueprint locked': 'No',
    },
  },
  {
    id: 201,
    name: 'Dam Testing Annex Key',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/4/49/Dam_Battlegrounds_Key.png/348px-Dam_Battlegrounds_Key.png.webp',
    description:
      'Opens 2 locked doors inside the Testing Annex on Dam Battlegrounds. Keep in mind you can only unlock one of the two doors unless you bring two keys. Both doors are on the ground level with one being in the South side of the building and the other on the East side.',
    sellPrice: 100,
    category: 'Misc',
    maxStackSize: 1,
    rarity: 'Rare',
    recyclesTo: [],
    workshop: [],
    weight: 0.25,
  },
  {
    id: 202,
    name: 'Zipline',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/f/f9/Zipline.png/348px-Zipline.png.webp',
    description:
      'Zipline is a gadget that allows raiders to travel quickly between two points.',
    sellPrice: 1000,
    category: 'Misc',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [],
    workshop: [],
    weight: 0.4,
    meta: {
      range: 60,
    },
  },
  {
    id: 203,
    name: 'Smoke Grenade',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/d/d5/Smoke_Grenade.png/348px-Smoke_Grenade.png.webp',
    sellPrice: 1000,
    category: 'Misc',
    maxStackSize: 5,
    rarity: 'Rare',
    recyclesTo: [],
    workshop: [],
    weight: 0.2,
    meta: {
      duration: 20,
      radius: 7.5,
    },
  },
  {
    id: 204,
    name: 'Vita Shot',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/7/7d/Vita_Shot.png/348px-Vita_Shot.png.webp',
    sellPrice: 2200,
    category: 'Misc',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [],
    workshop: [],
    weight: 0.4,
    meta: {
      healing: 50,
      'use time': 4,
    },
  },
  {
    id: 206,
    name: 'Noisemaker',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/5/5c/Noisemaker.png/348px-Noisemaker.png.webp',
    sellPrice: 640,
    category: 'Misc',
    maxStackSize: 3,
    rarity: 'Common',
    recyclesTo: [],
    workshop: [],
    weight: 0.3,
    meta: {
      duration: 4,
      radius: 8,
    },
  },
  {
    id: 207,
    name: 'Blue Light Stick',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/c/cc/Blue_Light_Stick.png/348px-Blue_Light_Stick.png.webp',
    description: 'Color Variations:',
    sellPrice: 150,
    category: 'Misc',
    maxStackSize: 5,
    rarity: 'Common',
    recyclesTo: [],
    workshop: [],
    weight: 0.15,
    meta: {
      duration: 40,
      radius: 7,
    },
  },
  {
    id: 208,
    name: 'Renegade',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/b/b5/Renegade-Level1.png/348px-Renegade-Level1.png.webp',
    description:
      'The Renegade is a lever-action battle rifle which uses medium ammo.',
    sellPrice: 7000,
    category: 'Misc',
    rarity: 'Rare',
    recyclesTo: [],
    workshop: [],
    weight: 10,
    meta: {
      ammo: 'Medium Ammo',
      'magazine size': 8,
      'firing mode': 'Lever-Action',
      'arc armor penetration': 'Moderate',
      damage: 35,
      'fire rate': 21,
      range: 68.8,
      stability: 85.7,
      agility: 55.8,
      stealth: 16,
    },
  },
  {
    id: 209,
    name: 'Stable Stock III',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/e/eb/Stable_Stock_III.png/348px-Stable_Stock_III.png.webp',
    description:
      'Stable Stock III is a Rare Stock Weapon Modification that significantly improves dispersion and recoil recovery time',
    sellPrice: 5000,
    category: 'Misc',
    rarity: 'Rare',
    recyclesTo: [],
    workshop: [],
    weight: 0.75,
    meta: {
      'blueprint locked': 'Yes',
    },
  },
  {
    id: 210,
    name: 'Arpeggio',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/6/6c/Arpeggio-Level1.png/348px-Arpeggio-Level1.png.webp',
    description:
      'The Arpeggio is a burst assault rifle which uses medium ammo. It is the only weapon in the game to use the "Burst" firing mode, shooting three bullets per trigger pull.',
    sellPrice: 5500,
    category: 'Misc',
    rarity: 'Uncommon',
    recyclesTo: [],
    workshop: [],
    weight: 7,
    meta: {
      ammo: 'Medium Ammo',
      'magazine size': 24,
      'firing mode': 3,
      'arc armor penetration': 'Moderate',
      damage: 9.5,
      'fire rate': 18.3,
      range: 55.9,
      stability: 84,
      agility: 57.3,
      stealth: 14,
    },
  },
  {
    id: 211,
    name: 'Compensator II',
    imageUrl: 'https://arcraiders.wiki/w/images/0/0a/Compensator_II.png',
    description:
      'Compensator II is an Uncommon Muzzle Weapon Modification that moderately reduces per-shot dispersion.',
    sellPrice: 2000,
    category: 'Misc',
    rarity: 'Uncommon',
    recyclesTo: [],
    workshop: [],
    weight: 0.5,
    meta: {
      'blueprint locked': 'Yes',
    },
  },
  {
    id: 212,
    name: 'Anvil',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/0/00/Anvil-Level1.png/348px-Anvil-Level1.png.webp',
    description: 'The Anvil is a single-action pistol which uses heavy ammo.',
    sellPrice: 5000,
    category: 'Misc',
    rarity: 'Uncommon',
    recyclesTo: [],
    workshop: [],
    weight: 5,
    meta: {
      ammo: 'Heavy Ammo',
      'magazine size': 6,
      'firing mode': 'Single-Action',
      'arc armor penetration': 'Strong',
      damage: 40,
      'fire rate': 16.3,
      range: 50.2,
      stability: 75.2,
      agility: 69.1,
      stealth: 10,
    },
  },
  {
    id: 213,
    name: 'Heavy Ammo',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/4/47/HeavyAmmo_Box.png/348px-HeavyAmmo_Box.png.webp',
    description:
      'Heavy Ammo is an ammo type used by some assault rifles, battle rifles and hand cannons.',
    sellPrice: 12,
    category: 'Misc',
    maxStackSize: 40,
    rarity: 'Common',
    recyclesTo: [],
    workshop: [],
    weight: 0.05,
  },
  {
    id: 214,
    name: 'Door Blocker',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/6/68/Door_Blocker.png/348px-Door_Blocker.png.webp',
    description:
      'Door Blocker is a deployable utility that can be attached to button operated double doors preventing them from being opened. The blocker takes 1 second to deploy, and it can not be recovered nor dismantled without breaching the door which takes 10 seconds without any skill upgrades.',
    sellPrice: 270,
    category: 'Misc',
    maxStackSize: 3,
    rarity: 'Common',
    recyclesTo: [],
    workshop: [],
    weight: 0.2,
  },
  {
    id: 215,
    name: 'Combat Mk. 1',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/1/14/Combat_Mk._1.png/348px-Combat_Mk._1.png.webp',
    description:
      'Combat Mk. 1 is an uncommon augment that allows the use of Light Shield and Medium Shield but offers less backpack slots.',
    sellPrice: 640,
    category: 'Misc',
    rarity: 'Uncommon',
    recyclesTo: [],
    workshop: [],
    weight: 2,
    meta: {
      'backpack slots': 16,
      'safe pocket slots': 1,
      'quick use slots': 4,
      'weapon slots': 2,
      'weight limit': 45,
      'shield compatibility': 'Light, Medium',
    },
  },
  {
    id: 216,
    name: 'Medium Shield',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/4/41/Medium_Shield.png/348px-Medium_Shield.png.webp',
    description:
      'The Medium Shield is a rare shield which offers fair protection with a small movement penalty.',
    sellPrice: 2000,
    category: 'Misc',
    rarity: 'Rare',
    recyclesTo: [],
    workshop: [],
    weight: 7,
    meta: {
      'shield charge': 70,
      'damage mitigation': 42.5,
      'movement penalty': 5,
    },
  },
  {
    id: 217,
    name: 'Tagging Grenade',
    imageUrl: 'https://arcraiders.wiki/w/images/e/e5/Tagging_Grenade.png',
    sellPrice: 1000,
    category: 'Misc',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [],
    workshop: [],
    weight: 0.4,
    meta: {
      duration: 30,
      radius: 6,
    },
  },
  {
    id: 218,
    name: 'Vita Spray',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/1/1d/Vita_Spray.png/348px-Vita_Spray.png.webp',
    sellPrice: 3000,
    category: 'Misc',
    maxStackSize: 1,
    rarity: 'Epic',
    recyclesTo: [],
    workshop: [],
    weight: 1,
    meta: {
      healing: 10,
      'heal capacity': 150,
    },
  },
  {
    id: 219,
    name: 'Yellow Light Stick',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/c/cc/Blue_Light_Stick.png/348px-Blue_Light_Stick.png.webp',
    description: 'Color Variations:',
    sellPrice: 150,
    category: 'Misc',
    maxStackSize: 5,
    rarity: 'Common',
    recyclesTo: [],
    workshop: [],
    weight: 0.15,
    meta: {
      duration: 40,
      radius: 7,
    },
  },
  {
    id: 220,
    name: 'Raider Hatch Key',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/6/68/Raider_Hatch_Key.png/348px-Raider_Hatch_Key.png.webp',
    description:
      'A Raider Hatch Key is a rare item used to open Raider Hatches to get out of sticky situations Topside.',
    sellPrice: 1000,
    category: 'Misc',
    maxStackSize: 1,
    rarity: 'Rare',
    recyclesTo: [],
    workshop: [],
    weight: 0.01,
  },
  {
    id: 221,
    name: 'Binoculars',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/7/74/Binoculars.png/348px-Binoculars.png.webp',
    description:
      'Binoculars are a gadget that raiders can use to scout out areas from a distance.',
    sellPrice: 640,
    category: 'Misc',
    maxStackSize: 1,
    rarity: 'Common',
    recyclesTo: [],
    workshop: [],
    weight: 0.5,
  },
  {
    id: 222,
    name: 'Vulcano',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/d/da/Vulcano-Level1.png/348px-Vulcano-Level1.png.webp',
    description:
      'The Vulcano is a semi-automatic shotgun that uses shotgun ammo.',
    sellPrice: 10000,
    category: 'Misc',
    rarity: 'Epic',
    recyclesTo: [],
    workshop: [],
    weight: 8,
    meta: {
      ammo: 'Shotgun Ammo',
      'magazine size': 6,
      'firing mode': 'Semi-Automatic',
      'arc armor penetration': 'Weak',
      damage: 49.5,
      'fire rate': 26.3,
      range: 26,
      stability: 68.6,
      agility: 70.3,
      stealth: 15,
    },
  },
  {
    id: 223,
    name: 'Shotgun Ammo',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/c/c1/ShotgunAmmo_Box.png/348px-ShotgunAmmo_Box.png.webp',
    description: 'Shotgun Ammo is an ammo type used by shotguns.',
    sellPrice: 20,
    category: 'Misc',
    maxStackSize: 20,
    rarity: 'Common',
    recyclesTo: [],
    workshop: [],
    weight: 0.085,
  },
  {
    id: 224,
    name: 'Snap Hook',
    imageUrl: 'https://arcraiders.wiki/w/images/5/56/Snap_Hook.png',
    description:
      'Snap Hook is a gadget that allows raiders to grapple to higher ground for faster traversal.',
    sellPrice: 14000,
    category: 'Misc',
    maxStackSize: 1,
    rarity: 'Legendary',
    recyclesTo: [],
    workshop: [],
    weight: 5,
    meta: {
      range: 20,
    },
  },
  {
    id: 225,
    name: 'Shotgun Choke II',
    imageUrl: 'https://arcraiders.wiki/w/images/6/63/Shotgun_Choke_II.png',
    description:
      'Shotgun Choke II is an Uncommon Shotgun Muzzle Weapon Modification that moderately reduces base dispersion.',
    sellPrice: 2000,
    category: 'Misc',
    rarity: 'Uncommon',
    recyclesTo: [],
    workshop: [],
    weight: 0.5,
    meta: {
      'blueprint locked': 'Yes',
    },
  },
  {
    id: 226,
    name: 'Angled Grip II',
    imageUrl: 'https://arcraiders.wiki/w/images/2/2b/Angled_Grip_II.png',
    description:
      'Angled Grip II is an Uncommon Underbarrel Weapon Modification that moderately reduces horizontal recoil.',
    sellPrice: 2000,
    category: 'Misc',
    rarity: 'Uncommon',
    recyclesTo: [],
    workshop: [],
    weight: 0.5,
    meta: {
      'blueprint locked': 'Yes',
    },
  },
  {
    id: 227,
    name: 'Silencer II',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/c/c0/Silencer_II.png/348px-Silencer_II.png.webp',
    description:
      'Silencer II is a Rare Muzzle Weapon Modification that moderately reduces the amount of noise produced when firing.',
    sellPrice: 5000,
    category: 'Misc',
    rarity: 'Rare',
    recyclesTo: [],
    workshop: [],
    weight: 0.5,
    meta: {
      'blueprint locked': 'Yes',
    },
  },
  {
    id: 228,
    name: 'Extended Light Mag I',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/2/23/Extended_Light_Mag_I.png/348px-Extended_Light_Mag_I.png.webp',
    description:
      'Extended Light Mag I is a Common Light Magazine Weapon Modification that slightly extends the Light Ammo capacity of compatible weapons.',
    sellPrice: 640,
    category: 'Misc',
    rarity: 'Common',
    recyclesTo: [],
    workshop: [],
    weight: 0.5,
    meta: {
      'blueprint locked': 'No',
    },
  },
  {
    id: 229,
    name: 'Photoelectric Cloak',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/0/06/Photoelectric_Cloak.png/348px-Photoelectric_Cloak.png.webp',
    description:
      'Photoelectric Cloak is a gadget that allows raiders to temporarily conceal themselves from ARC.',
    sellPrice: 5000,
    category: 'Misc',
    maxStackSize: 1,
    rarity: 'Epic',
    recyclesTo: [],
    workshop: [],
    weight: 1,
  },
  {
    id: 230,
    name: 'Jolt Mine',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/5/5a/Jolt_Mine.png/348px-Jolt_Mine.png.webp',
    description:
      'Jolt Mine is a deployable trap that can be placed on most surfaces in line of sight causing a shock stun effect on activation. The mine takes 1 second to deploy and becomes armed 2 seconds after deployment. It can be disarmed and recovered if it has not yet been activated, this takes 2 seconds.',
    sellPrice: 850,
    category: 'Misc',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [],
    workshop: [],
    weight: 0.2,
    meta: {
      'arc stun': 10,
      'raider stun': 4,
      radius: 5,
    },
  },
  {
    id: 231,
    name: 'Wolfpack',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/2/24/Wolfpack.png/348px-Wolfpack.png.webp',
    sellPrice: 5000,
    category: 'Misc',
    maxStackSize: 1,
    rarity: 'Epic',
    recyclesTo: [],
    workshop: [],
    weight: 1,
    meta: {
      damage: 166,
      radius: 100,
    },
  },
  {
    id: 232,
    name: 'Heavy Shield',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/f/f9/Heavy_Shield.png/348px-Heavy_Shield.png.webp',
    description:
      'The Heavy Shield is an epic shield which offers strong protection with a significant movement penalty.',
    sellPrice: 5500,
    category: 'Misc',
    rarity: 'Epic',
    recyclesTo: [],
    workshop: [],
    weight: 9,
    meta: {
      'shield charge': 80,
      'damage mitigation': 52.5,
      'movement penalty': 15,
    },
  },
  {
    id: 233,
    name: 'Shrapnel Grenade',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/5/5f/Shrapnel_Grenade.png/348px-Shrapnel_Grenade.png.webp',
    sellPrice: 800,
    category: 'Misc',
    maxStackSize: 5,
    rarity: 'Uncommon',
    recyclesTo: [],
    workshop: [],
    weight: 0.15,
    meta: {
      damage: 60,
      radius: 6,
    },
  },
  {
    id: 234,
    name: 'Barricade Kit',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/c/cb/Barricade_Kit.png/348px-Barricade_Kit.png.webp',
    description:
      'Barricade Kit is a deployable utility that provides cover and blocks 500 damage until breaking.',
    sellPrice: 640,
    category: 'Misc',
    maxStackSize: 3,
    rarity: 'Uncommon',
    recyclesTo: [],
    workshop: [],
    weight: 0.4,
    meta: {
      duration: 500,
    },
  },
  {
    id: 236,
    name: 'Stitcher II',
    imageUrl: '',
    description: '',
    sellPrice: 2000,
    category: 'Misc',
    maxStackSize: 1,
    rarity: 'Common',
    recyclesTo: [],
    workshop: [],
  },
  {
    id: 237,
    name: 'Hullcracker Blueprint',
    imageUrl: '',
    description: '',
    sellPrice: 5000,
    category: 'Misc',
    maxStackSize: 1,
    rarity: 'Legendary',
    recyclesTo: [],
    workshop: [],
  },
  {
    id: 238,
    name: 'Dam Staff Room Key',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/4/49/Dam_Battlegrounds_Key.png/348px-Dam_Battlegrounds_Key.png.webp',
    description:
      'Opens a locked door in the Research & Administration building on Dam Battlegrounds on the First Floor.',
    sellPrice: 100,
    category: 'Misc',
    maxStackSize: 1,
    rarity: 'Uncommon',
    recyclesTo: [],
    workshop: [],
    weight: 0.25,
  },
  {
    id: 239,
    name: 'Il Toro',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/5/50/Il_Toro-Level1.png/348px-Il_Toro-Level1.png.webp',
    description:
      'The Il Toro is a pump-action shotgun which uses shotgun ammo.',
    sellPrice: 5000,
    category: 'Misc',
    rarity: 'Uncommon',
    recyclesTo: [],
    workshop: [],
    weight: 8,
    meta: {
      ammo: 'Shotgun Ammo',
      'magazine size': 5,
      'firing mode': 'Pump-Action',
      'arc armor penetration': 'Weak',
      damage: 67.5,
      'fire rate': 14.3,
      range: 20,
      stability: 80.6,
      agility: 61.1,
      stealth: 18,
    },
  },
  {
    id: 240,
    name: 'Blaze Grenade',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/2/24/Blaze_Grenade.png/348px-Blaze_Grenade.png.webp',
    sellPrice: 1600,
    category: 'Misc',
    maxStackSize: 5,
    rarity: 'Rare',
    recyclesTo: [],
    workshop: [],
    weight: 0.2,
    meta: {
      damage: 5,
      duration: 10,
      radius: 10,
    },
  },
  {
    id: 241,
    name: 'Muzzle Brake II',
    imageUrl: 'https://arcraiders.wiki/w/images/2/23/Muzzle_Brake_II.png',
    description:
      'Muzzle Brake II is an Uncommon Muzzle Weapon Modification that moderately reduces both vertical and horizontal recoil.',
    sellPrice: 2000,
    category: 'Misc',
    rarity: 'Uncommon',
    recyclesTo: [],
    workshop: [],
    weight: 0.5,
    meta: {
      'blueprint locked': 'Yes',
    },
  },
  {
    id: 242,
    name: 'Vertical Grip II',
    imageUrl: 'https://arcraiders.wiki/w/images/3/3c/Vertical_Grip_II.png',
    description:
      'Vertical Grip II is an Uncommon Underbarrel Weapon Modification that moderately reduces vertical recoil.',
    sellPrice: 2000,
    category: 'Misc',
    rarity: 'Uncommon',
    recyclesTo: [],
    workshop: [],
    weight: 0.5,
    meta: {
      'blueprint locked': 'Yes',
    },
  },
  {
    id: 243,
    name: 'Stable Stock II',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/b/b4/Stable_Stock_II.png/348px-Stable_Stock_II.png.webp',
    description:
      'Stable Stock II is an Uncommon Stock Weapon Modification that slightly improves dispersion and recoil recovery time.',
    sellPrice: 2000,
    category: 'Misc',
    rarity: 'Uncommon',
    recyclesTo: [],
    workshop: [],
    weight: 0.5,
    meta: {
      'blueprint locked': 'Yes',
    },
  },
  {
    id: 244,
    name: 'Snap Blast Grenade',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/7/77/Snap_Blast_Grenade.png/348px-Snap_Blast_Grenade.png.webp',
    sellPrice: 800,
    category: 'Misc',
    maxStackSize: 3,
    rarity: 'Uncommon',
    recyclesTo: [],
    workshop: [],
    weight: 0.2,
    meta: {
      damage: 70,
      radius: 7.5,
    },
  },
  {
    id: 245,
    name: 'Heavy Fuze Grenade',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/e/ea/Heavy_Fuze_Grenade.png/348px-Heavy_Fuze_Grenade.png.webp',
    sellPrice: 1600,
    category: 'Misc',
    maxStackSize: 3,
    rarity: 'Rare',
    recyclesTo: [],
    workshop: [],
    weight: 0.2,
    meta: {
      damage: 80,
      radius: 7.5,
    },
  },
  {
    id: 246,
    name: 'Looting Mk. 2',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/7/7c/Looting_Mk._2.png/348px-Looting_Mk._2.png.webp',
    sellPrice: 2000,
    category: 'Misc',
    rarity: 'Rare',
    recyclesTo: [],
    workshop: [],
    weight: 2,
    meta: {
      'backpack slots': 22,
      'safe pocket slots': 2,
      'quick use slots': 4,
      'weapon slots': 2,
      'trinket slots': 3,
      'weight limit': 60,
      'shield compatibility': 'Light',
    },
  },
  {
    id: 247,
    name: 'Green Light Stick',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/c/cc/Blue_Light_Stick.png/348px-Blue_Light_Stick.png.webp',
    description: 'Color Variations:',
    sellPrice: 150,
    category: 'Misc',
    maxStackSize: 5,
    rarity: 'Common',
    recyclesTo: [],
    workshop: [],
    weight: 0.15,
    meta: {
      duration: 40,
      radius: 7,
    },
  },
  {
    id: 248,
    name: 'Gas Mine',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/c/ce/Gas_Mine.png/348px-Gas_Mine.png.webp',
    description:
      'Gas Mine is a deployable trap that can be placed on most surfaces in line of sight producing a stamina draining gas cloud on activation. The mine takes 1 second to deploy and becomes armed 3 seconds after deployment. It can be disarmed and recovered if it has not yet been activated, taking 2 seconds.',
    sellPrice: 270,
    category: 'Misc',
    maxStackSize: 3,
    rarity: 'Common',
    recyclesTo: [],
    workshop: [],
    weight: 0.25,
    meta: {
      duration: 20,
      radius: 7.5,
      'stamina drain': 25,
    },
  },
  {
    id: 249,
    name: 'Extended Light Mag II',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/c/cf/Extended_Light_Mag_II.png/348px-Extended_Light_Mag_II.png.webp',
    description:
      'Extended Light Mag II is an Uncommon Light Magazine Weapon Modification that moderately extends the Light Ammo capacity of the compatible weapons.',
    sellPrice: 2000,
    category: 'Misc',
    rarity: 'Uncommon',
    recyclesTo: [],
    workshop: [],
    weight: 0.5,
    meta: {
      'blueprint locked': 'Yes',
    },
  },
  {
    id: 250,
    name: 'Light Ammo',
    imageUrl:
      'https://arcraiders.wiki/w/images/thumb/4/4a/LightAmmo_Box.png/348px-LightAmmo_Box.png.webp',
    description:
      'Light Ammo is an ammo type commonly used with SMGs and light pistols.',
    sellPrice: 4,
    category: 'Misc',
    maxStackSize: 100,
    rarity: 'Common',
    recyclesTo: [],
    workshop: [],
    weight: 0.01,
  },
]
