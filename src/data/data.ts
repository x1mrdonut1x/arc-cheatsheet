import { Item } from './types'

export const items: Item[] = [
  {
    id: 1,
    name: 'Advanced ARC Powercell',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/3/31/Advanced_ARC_Powercell.png/revision/latest?cb=20251017211003',
    sellPrice: 640,
    category: 'Topside Material',
    maxStackSize: 1,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 16,
        amount: 2,
      },
    ],
    quests: [],
    workshop: [],
  },
  {
    id: 2,
    name: 'Advanced Electrical Components',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/9/9b/Advanced_Electrical_Components.png/revision/latest?cb=20251031161616',
    sellPrice: 1750,
    category: 'Refined Material',
    maxStackSize: 1,
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
    quests: [],
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
  },
  {
    id: 3,
    name: 'Advanced Mechanical Components',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/2/25/Advanced_Mechanical_Components.png/revision/latest?cb=20251018110145',
    sellPrice: 1750,
    category: 'Refined Material',
    maxStackSize: 1,
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
    quests: [],
    workshop: [
      {
        id: 0,
        amount: 5,
      },
    ],
  },
  {
    id: 4,
    name: 'Agave',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/4/47/Agave.png/revision/latest?cb=20251101173334',
    sellPrice: 1000,
    category: 'Nature',
    maxStackSize: 1,
    rarity: 'Uncommon',
    recyclesTo: [],
    quests: [],
    workshop: [],
  },
  {
    id: 5,
    name: 'Agave Juice',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/a/a8/Agave_Juice.png/revision/latest?cb=20251103185208',
    sellPrice: 1800,
    category: 'Misc',
    maxStackSize: 1,
    rarity: 'Common',
    recyclesTo: [],
    quests: [],
    workshop: [],
  },
  {
    id: 6,
    name: 'Air Freshener',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/0/03/Air_Freshener.png/revision/latest?cb=20251102000555',
    sellPrice: 2000,
    category: 'Trinket',
    maxStackSize: 1,
    rarity: 'Uncommon',
    recyclesTo: [],
    quests: [],
    workshop: [],
  },
  {
    id: 7,
    name: 'Alarm Clock',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/9/95/Alarm_Clock.png/revision/latest?cb=20251018124756',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 8,
    name: 'Antiseptic',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/f/f5/Antiseptic.png/revision/latest?cb=20251019025103',
    sellPrice: 1000,
    category: 'Refined Material',
    maxStackSize: 1,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 35,
        amount: 10,
      },
    ],
    quests: [
      {
        id: 0,
        amount: 2,
      },
    ],
    workshop: [
      {
        id: 0,
        amount: 8,
      },
    ],
  },
  {
    id: 9,
    name: 'Apricot',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/f/fc/Apricot.png/revision/latest?cb=20251031214626',
    sellPrice: 640,
    category: 'Nature',
    maxStackSize: 1,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 19,
        amount: 3,
      },
    ],
    quests: [],
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
  },
  {
    id: 10,
    name: 'ARC Alloy',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/a/a6/ARC_Alloy.png/revision/latest?cb=20251017194039',
    sellPrice: 200,
    category: 'Topside Material',
    maxStackSize: 1,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 103,
        amount: 2,
      },
    ],
    quests: [
      {
        id: 0,
        amount: 3,
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
  },
  {
    id: 11,
    name: 'ARC Circuitry',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/d/dc/ARC_Circuitry.png/revision/latest?cb=20251019023050',
    sellPrice: 1000,
    category: 'Topside Material',
    maxStackSize: 1,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 10,
        amount: 2,
      },
    ],
    quests: [],
    workshop: [
      {
        id: 0,
        amount: 10,
      },
    ],
  },
  {
    id: 12,
    name: 'ARC Coolant',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/e/e9/ARC_Coolant.png/revision/latest?cb=20251017200845',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 1,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 35,
        amount: 16,
      },
    ],
    quests: [],
    workshop: [],
  },
  {
    id: 13,
    name: 'ARC Flex Rubber',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/2/29/ARC_Flex_Rubber.png/revision/latest?cb=20251019224937',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 1,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 145,
        amount: 16,
      },
    ],
    quests: [],
    workshop: [],
  },
  {
    id: 14,
    name: 'ARC Motion Core',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/a/ad/ARC_Motion_Core.png/revision/latest?cb=20251017193506',
    sellPrice: 1000,
    category: 'Topside Material',
    maxStackSize: 1,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 10,
        amount: 2,
      },
    ],
    quests: [],
    workshop: [
      {
        id: 0,
        amount: 5,
      },
    ],
  },
  {
    id: 15,
    name: 'ARC Performance Steel',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/0/02/ARC_Performance_Steel.png/revision/latest?cb=20251018182411',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 1,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 0,
        amount: 12,
      },
    ],
    quests: [],
    workshop: [],
  },
  {
    id: 16,
    name: 'ARC Powercell',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/d/df/ARC_Powercell.png/revision/latest?cb=20251030175812',
    sellPrice: 270,
    category: 'Misc',
    maxStackSize: 1,
    rarity: 'Common',
    recyclesTo: [],
    quests: [],
    workshop: [
      {
        id: 0,
        amount: 5,
      },
    ],
  },
  {
    id: 17,
    name: 'ARC Synthetic Resin',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/7/72/ARC_Synthetic_Resin.png/revision/latest?cb=20251017201105',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 1,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 116,
        amount: 14,
      },
    ],
    quests: [],
    workshop: [],
  },
  {
    id: 18,
    name: 'ARC Thermo Lining',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/0/0f/ARC_Thermo_Lining.png/revision/latest?cb=20251018201805',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 1,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 66,
        amount: 16,
      },
    ],
    quests: [],
    workshop: [],
  },
  {
    id: 19,
    name: 'Assorted Seeds',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/5/51/Assorted_Seeds.png/revision/latest?cb=20251030175558',
    sellPrice: 100,
    category: 'Nature',
    maxStackSize: 1,
    rarity: 'Common',
    recyclesTo: [],
    quests: [],
    workshop: [],
  },
  {
    id: 20,
    name: 'Bastion Cell',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/0/06/Bastion_Cell.png/revision/latest?cb=20251101235108',
    sellPrice: 5000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [
      {
        id: 0,
        amount: 6,
      },
    ],
  },
  {
    id: 21,
    name: 'Battery',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/6/6d/Battery.png/revision/latest?cb=20251017220232',
    sellPrice: 250,
    category: 'Topside Material',
    maxStackSize: 1,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 103,
        amount: 2,
      },
    ],
    quests: [
      {
        id: 0,
        amount: 1,
      },
      {
        id: 0,
        amount: 2,
      },
    ],
    workshop: [],
  },
  {
    id: 22,
    name: 'Bicycle Pump',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/f/fa/Bicycle_Pump.png/revision/latest?cb=20251018124904',
    sellPrice: 2000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 23,
    name: 'Bloated Tuna Can',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/0/01/Bloated_Tuna_Can.png/revision/latest?cb=20251030175248',
    sellPrice: 1000,
    category: 'Trinket',
    maxStackSize: 1,
    rarity: 'Common',
    recyclesTo: [],
    quests: [],
    workshop: [],
  },
  {
    id: 24,
    name: 'Bombardier Cell',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/4/46/Bombardier_Cell.png/revision/latest?cb=20251103110839',
    sellPrice: 5000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [
      {
        id: 0,
        amount: 6,
      },
    ],
  },
  {
    id: 25,
    name: 'Breathtaking Snow Globe',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/6/63/Breathtaking_Snow_Globe.png/revision/latest?cb=20251101173138',
    sellPrice: 7000,
    category: 'Trinket',
    maxStackSize: 1,
    rarity: 'Epic',
    recyclesTo: [],
    quests: [],
    workshop: [],
  },
  {
    id: 26,
    name: 'Broken Flashlight',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/1/17/Broken_Flashlight.png/revision/latest?cb=20251019030210',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 27,
    name: 'Broken Guidance System',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/9/93/Broken_Guidance_System.png/revision/latest?cb=20251018124649',
    sellPrice: 2000,
    category: 'Recyclable',
    maxStackSize: 1,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 127,
        amount: 4,
      },
    ],
    quests: [],
    workshop: [],
  },
  {
    id: 28,
    name: 'Broken Handheld Radio',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/3/3b/Broken_Handheld_Radio.png/revision/latest?cb=20251018214209',
    sellPrice: 2000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 29,
    name: 'Broken Taser',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/1/18/Broken_Taser.png/revision/latest?cb=20251030230120',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 30,
    name: 'Burned ARC Circuitry',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/a/a5/Burned_ARC_Circuity.png/revision/latest?cb=20251017224237',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 1,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 10,
        amount: 2,
      },
    ],
    quests: [],
    workshop: [],
  },
  {
    id: 31,
    name: 'Camera Lens',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/a/a6/Camera_Lens.png/revision/latest?cb=20251017220149',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 1,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 116,
        amount: 8,
      },
    ],
    quests: [],
    workshop: [],
  },
  {
    id: 32,
    name: 'Candle Holder',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/5/58/Candle_Holder.png/revision/latest?cb=20251019023130',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 1,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 103,
        amount: 8,
      },
    ],
    quests: [],
    workshop: [],
  },
  {
    id: 33,
    name: 'Canister',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/5/5f/Canister.png/revision/latest?cb=20251017234228',
    sellPrice: 300,
    category: 'Topside Material',
    maxStackSize: 1,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 0,
        amount: 3,
      },
    ],
    quests: [],
    workshop: [],
  },
  {
    id: 34,
    name: 'Cat Bed',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/8/82/Cat_Bed.png/revision/latest?cb=20251030230250',
    sellPrice: 1000,
    category: 'Trinket',
    maxStackSize: 1,
    rarity: 'Uncommon',
    recyclesTo: [],
    quests: [],
    workshop: [
      {
        id: 0,
        amount: 1,
      },
    ],
  },
  {
    id: 35,
    name: 'Chemicals',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/9/92/Chemicals.png/revision/latest?cb=20251103114525',
    sellPrice: 50,
    category: 'Misc',
    maxStackSize: 1,
    rarity: 'Common',
    recyclesTo: [],
    quests: [],
    workshop: [
      {
        id: 0,
        amount: 50,
      },
    ],
  },
  {
    id: 36,
    name: 'Coffee Pot',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/3/33/Coffee_Pot.png/revision/latest?cb=20251105050123',
    sellPrice: 1000,
    category: 'Trinket',
    maxStackSize: 1,
    rarity: 'Common',
    recyclesTo: [],
    quests: [],
    workshop: [],
  },
  {
    id: 37,
    name: 'Complex Gun Parts',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/3/3d/Complex_Gun_Parts.png/revision/latest?cb=20251017200159',
    sellPrice: 2000,
    category: 'Topside Material',
    maxStackSize: 1,
    rarity: 'Epic',
    recyclesTo: [
      {
        id: 163,
        amount: 3,
      },
    ],
    quests: [],
    workshop: [],
  },
  {
    id: 38,
    name: 'Coolant',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/4/40/Coolant.png/revision/latest?cb=20251019022815',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 39,
    name: 'Cooling Coil',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/7/7f/Cooling_Coil.png/revision/latest?cb=20251018214413',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 40,
    name: 'Cooling Fan',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/1/13/Cooling_Fan.png/revision/latest?cb=20251018124546',
    sellPrice: 2000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 41,
    name: 'Cracked Bioscanner',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/9/9a/Cracked_Bioscanner.png/revision/latest?cb=20251017201323',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [
      {
        id: 0,
        amount: 2,
      },
    ],
  },
  {
    id: 42,
    name: 'Crude Explosives',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/f/fc/Crude_Explosives.png/revision/latest?cb=20251017220117',
    sellPrice: 270,
    category: 'Refined Material',
    maxStackSize: 1,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 35,
        amount: 3,
      },
    ],
    quests: [],
    workshop: [
      {
        id: 0,
        amount: 5,
      },
    ],
  },
  {
    id: 43,
    name: 'Crumpled Plastic Bottle',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/8/8e/Crumpled_Plastic_Bottle.png/revision/latest?cb=20251102060239',
    sellPrice: 270,
    category: 'Recyclable',
    maxStackSize: 1,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 116,
        amount: 4,
      },
    ],
    quests: [],
    workshop: [],
  },
  {
    id: 44,
    name: 'Damaged ARC Motion Core',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/9/9e/Damaged_ARC_Motion_Core.png/revision/latest?cb=20251018190625',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 1,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 10,
        amount: 2,
      },
    ],
    quests: [],
    workshop: [],
  },
  {
    id: 45,
    name: 'Damaged ARC Powercell',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/5/58/Damaged_ARC_Powercell.png/revision/latest?cb=20251120190805',
    sellPrice: 293,
    category: 'Recyclable',
    maxStackSize: 1,
    rarity: 'Common',
    recyclesTo: [
      {
        id: 10,
        amount: 1,
      },
    ],
    quests: [],
    workshop: [],
  },
  {
    id: 46,
    name: 'Damaged Fireball Burner',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/d/d8/Damaged_Fireball_Burner.png/revision/latest?cb=20251018181312',
    sellPrice: 270,
    category: 'Recyclable',
    maxStackSize: 1,
    rarity: 'Common',
    recyclesTo: [
      {
        id: 10,
        amount: 1,
      },
    ],
    quests: [],
    workshop: [],
  },
  {
    id: 47,
    name: 'Damaged Heat Sink',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/1/1f/Damaged_Heat_Sink.png/revision/latest?cb=20251018124446',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [
      {
        id: 0,
        amount: 2,
      },
    ],
  },
  {
    id: 48,
    name: 'Damaged Hornet Driver',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/9/96/Damaged_Hornet_Driver.png/revision/latest?cb=20251101164625',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 1,
    rarity: 'Common',
    recyclesTo: [
      {
        id: 10,
        amount: 2,
      },
    ],
    quests: [],
    workshop: [],
  },
  {
    id: 49,
    name: 'Damaged Rocketeer Driver',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/3/3a/Damaged_Rocketeer_Driver.png/revision/latest?cb=20251019023918',
    sellPrice: 2000,
    category: 'Recyclable',
    maxStackSize: 1,
    rarity: 'Common',
    recyclesTo: [
      {
        id: 10,
        amount: 3,
      },
    ],
    quests: [],
    workshop: [],
  },
  {
    id: 50,
    name: 'Damaged Tick Pod',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/d/d6/Damaged_Tick_Pod.png/revision/latest?cb=20251118141540',
    sellPrice: 270,
    category: 'Recyclable',
    maxStackSize: 1,
    rarity: 'Common',
    recyclesTo: [
      {
        id: 10,
        amount: 1,
      },
    ],
    quests: [],
    workshop: [],
  },
  {
    id: 51,
    name: 'Damaged Wasp Driver',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/e/e6/Damaged_Wasp_Driver.png/revision/latest?cb=20251120185310',
    sellPrice: 270,
    category: 'Recyclable',
    maxStackSize: 1,
    rarity: 'Common',
    recyclesTo: [
      {
        id: 10,
        amount: 1,
      },
    ],
    quests: [],
    workshop: [],
  },
  {
    id: 52,
    name: 'Dart Board',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/4/4d/Dart_Board.png/revision/latest?cb=20251101235455',
    sellPrice: 2000,
    category: 'Trinket',
    maxStackSize: 1,
    rarity: 'Uncommon',
    recyclesTo: [],
    quests: [],
    workshop: [],
  },
  {
    id: 53,
    name: 'Deflated Football',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/7/7c/Deflated_Football.png/revision/latest?cb=20251017215928',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 54,
    name: 'Degraded ARC Rubber',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/3/37/Degraded_ARC_Rubber.png/revision/latest?cb=20251019024151',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 1,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 145,
        amount: 11,
      },
    ],
    quests: [],
    workshop: [],
  },
  {
    id: 55,
    name: 'Diving Goggles',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/1/1a/Diving_Goggles.png/revision/latest?cb=20251017201540',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 1,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 145,
        amount: 12,
      },
    ],
    quests: [],
    workshop: [],
  },
  {
    id: 56,
    name: 'Dog Collar',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/c/c5/Dog_Collar.png/revision/latest?cb=20251017201659',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [
      {
        id: 0,
        amount: 1,
      },
    ],
  },
  {
    id: 57,
    name: 'Dried-Out ARC Resin',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/d/d0/Dried_Out_ARC_Resin.png/revision/latest?cb=20251019160040',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 1,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 116,
        amount: 9,
      },
    ],
    quests: [],
    workshop: [],
  },
  {
    id: 58,
    name: 'Duct Tape',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/4/4e/Duct_Tape.png/revision/latest?cb=20251017215833',
    sellPrice: 300,
    category: 'Topside Material',
    maxStackSize: 1,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 66,
        amount: 3,
      },
    ],
    quests: [],
    workshop: [],
  },
  {
    id: 59,
    name: 'Durable Cloth',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/2/25/Durable_Cloth.png/revision/latest?cb=20251017224200',
    sellPrice: 640,
    category: 'Refined Material',
    maxStackSize: 1,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 66,
        amount: 6,
      },
    ],
    quests: [
      {
        id: 0,
        amount: 1,
      },
    ],
    workshop: [
      {
        id: 0,
        amount: 5,
      },
    ],
  },
  {
    id: 60,
    name: 'Electrical Components',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/0/06/Electrical_Components.png/revision/latest?cb=20251018001702',
    sellPrice: 640,
    category: 'Refined Material',
    maxStackSize: 1,
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
    quests: [],
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
  },
  {
    id: 61,
    name: 'Empty Wine Bottle',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/e/e1/Empty_Wine_Bottle.png/revision/latest?cb=20251018124240',
    sellPrice: 1000,
    category: 'Trinket',
    maxStackSize: 1,
    rarity: 'Common',
    recyclesTo: [],
    quests: [],
    workshop: [],
  },
  {
    id: 62,
    name: 'Exodus Modules',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/1/1b/Exodus_Modules.png/revision/latest?cb=20251019111209',
    sellPrice: 2750,
    category: 'Topside Material',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 63,
    name: 'Expired Pasta',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/9/91/Expired_Pasta.png/revision/latest?cb=20251030230437',
    sellPrice: 1000,
    category: 'Trinket',
    maxStackSize: 1,
    rarity: 'Common',
    recyclesTo: [],
    quests: [],
    workshop: [],
  },
  {
    id: 64,
    name: 'Expired Respirator',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/b/ba/Expired_Respirator.png/revision/latest?cb=20251019035546',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 65,
    name: 'Explosive Compound',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/1/11/Explosive_Compound.png/revision/latest?cb=20251017202136',
    sellPrice: 1000,
    category: 'Refined Material',
    maxStackSize: 1,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 42,
        amount: 2,
      },
    ],
    quests: [],
    workshop: [
      {
        id: 0,
        amount: 5,
      },
    ],
  },
  {
    id: 66,
    name: 'Fabric',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/2/2b/Fabric.png/revision/latest?cb=20251103114359',
    sellPrice: 50,
    category: 'Misc',
    maxStackSize: 1,
    rarity: 'Common',
    recyclesTo: [],
    quests: [],
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
  },
  {
    id: 67,
    name: 'Faded Photograph',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/0/0c/Faded_Photograph.png/revision/latest?cb=20251019030429',
    sellPrice: 640,
    category: 'Trinket',
    maxStackSize: 1,
    rarity: 'Common',
    recyclesTo: [],
    quests: [],
    workshop: [],
  },
  {
    id: 68,
    name: 'Fertilizer',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/2/25/Fertilizer.png/revision/latest?cb=20251103114050',
    sellPrice: 1000,
    category: 'Nature',
    maxStackSize: 1,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 19,
        amount: 2,
      },
    ],
    quests: [
      {
        id: 0,
        amount: 1,
      },
    ],
    workshop: [],
  },
  {
    id: 69,
    name: 'Film reel',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/4/44/Film_Reel.png/revision/latest?cb=20251031030223',
    sellPrice: 2000,
    category: 'Trinket',
    maxStackSize: 1,
    rarity: 'Rare',
    recyclesTo: [],
    quests: [],
    workshop: [],
  },
  {
    id: 70,
    name: 'Fine Wristwatch',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/9/94/Fine_Wristwatch.png/revision/latest?cb=20251101173825',
    sellPrice: 3000,
    category: 'Trinket',
    maxStackSize: 1,
    rarity: 'Rare',
    recyclesTo: [],
    quests: [],
    workshop: [],
  },
  {
    id: 71,
    name: 'Fireball Burner',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/8/8b/Fireball_Burner.png/revision/latest?cb=20251017215746',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [
      {
        id: 0,
        amount: 8,
      },
    ],
  },
  {
    id: 72,
    name: 'Flow Controller',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/b/b6/Flow_Controller.png/revision/latest?cb=20251114120421',
    sellPrice: 3000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [
      {
        id: 0,
        amount: 1,
      },
    ],
    workshop: [],
  },
  {
    id: 73,
    name: 'Frequency Modulation Box',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/3/36/Frequency_Modulation_Box.png/revision/latest?cb=20251114120712',
    sellPrice: 3000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 74,
    name: 'Fried Motherboard',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/2/29/Fried_Motherboard.png/revision/latest?cb=20251018183445',
    sellPrice: 2000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [
      {
        id: 0,
        amount: 3,
      },
    ],
  },
  {
    id: 75,
    name: 'Frying Pan',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/8/81/FryingPanPNG.png/revision/latest?cb=20251101184322',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 1,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 103,
        amount: 8,
      },
    ],
    quests: [],
    workshop: [],
  },
  {
    id: 76,
    name: 'Garlic Press',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/8/88/Garlic_Press.png/revision/latest?cb=20251018182748',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 1,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 103,
        amount: 12,
      },
    ],
    quests: [],
    workshop: [],
  },
  {
    id: 77,
    name: 'Geiger Counter',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/3/37/Geiger_Counter.png/revision/latest?cb=20251114144007',
    sellPrice: 3500,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 78,
    name: 'Great Mullein',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/0/0d/Great_Mullein.png/revision/latest?cb=20251018105757',
    sellPrice: 300,
    category: 'Topside Material',
    maxStackSize: 1,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 19,
        amount: 2,
      },
    ],
    quests: [
      {
        id: 0,
        amount: 1,
      },
    ],
    workshop: [],
  },
  {
    id: 79,
    name: 'Headphones',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/0/0f/Headphones.png/revision/latest?cb=20251030175043',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 80,
    name: 'Heavy Gun Parts',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/3/33/Heavy_Gun_Parts.png/revision/latest?cb=20251106015823',
    sellPrice: 700,
    category: 'Topside Material',
    maxStackSize: 1,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 163,
        amount: 2,
      },
    ],
    quests: [],
    workshop: [],
  },
  {
    id: 81,
    name: 'Hornet Driver',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/b/bb/Hornet_Driver.png/revision/latest?cb=20251017202417',
    sellPrice: 2000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [
      {
        id: 0,
        amount: 2,
      },
    ],
    workshop: [
      {
        id: 0,
        amount: 5,
      },
    ],
  },
  {
    id: 82,
    name: 'Household Cleaner',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/e/e8/HouseholdCleanerPNG.png/revision/latest?cb=20251105051024',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 1,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 35,
        amount: 11,
      },
    ],
    quests: [],
    workshop: [],
  },
  {
    id: 83,
    name: 'Humidifier',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/4/4b/Humidifier.png/revision/latest?cb=20251019121059',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 84,
    name: 'Ice Cream Scooper',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/c/c9/Ice_Cream_Scooper.png/revision/latest?cb=20251017215720',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 1,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 103,
        amount: 7,
      },
    ],
    quests: [],
    workshop: [],
  },
  {
    id: 85,
    name: 'Impure ARC Coolant',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/a/a0/Impure_ARC_Coolant.png/revision/latest?cb=20251031014137',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 1,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 35,
        amount: 12,
      },
    ],
    quests: [],
    workshop: [],
  },
  {
    id: 86,
    name: 'Industrial Battery',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/c/c9/Industrial_Battery.png/revision/latest?cb=20251017202635',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [
      {
        id: 0,
        amount: 3,
      },
    ],
  },
  {
    id: 87,
    name: 'Industrial Charger',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/6/66/Industrial_Charger.png/revision/latest?cb=20251018190809',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 88,
    name: 'Industrial Magnet',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/3/38/Industrial_Magnet.png/revision/latest?cb=20251018001236',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 89,
    name: 'Ion Sputter',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/e/e7/Ion_Sputter.png/revision/latest?cb=20251114115859',
    sellPrice: 6000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 90,
    name: 'Laboratory Reagents',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/e/e5/Laboratory_Reagents.png/revision/latest?cb=20251017202857',
    sellPrice: 2000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [
      {
        id: 0,
        amount: 3,
      },
    ],
  },
  {
    id: 91,
    name: "Lance's Mixtape (5th Edition)",
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/e/ef/Lances_Mixtape.png/revision/latest?cb=20251018124400',
    sellPrice: 10000,
    category: 'Trinket',
    maxStackSize: 1,
    rarity: 'Epic',
    recyclesTo: [],
    quests: [],
    workshop: [],
  },
  {
    id: 92,
    name: 'Leaper Pulse Unit',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/a/a0/Leaper_Pulse_Unit.png/revision/latest?cb=20251017200509',
    sellPrice: 5000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [
      {
        id: 0,
        amount: 1,
      },
    ],
    workshop: [
      {
        id: 0,
        amount: 4,
      },
    ],
  },
  {
    id: 93,
    name: 'Lemon',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/3/35/Lemon.png/revision/latest?cb=20251031172634',
    sellPrice: 640,
    category: 'Nature',
    maxStackSize: 1,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 19,
        amount: 3,
      },
    ],
    quests: [],
    workshop: [
      {
        id: 0,
        amount: 5,
      },
    ],
  },
  {
    id: 94,
    name: 'Light Gun Parts',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/c/c9/Light_Gun_Parts.png/revision/latest?cb=20251106020115',
    sellPrice: 700,
    category: 'Topside Material',
    maxStackSize: 1,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 163,
        amount: 2,
      },
    ],
    quests: [],
    workshop: [],
  },
  {
    id: 95,
    name: 'Light Bulb',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/2/2c/Light_Bulb.png/revision/latest?cb=20251102000400',
    sellPrice: 2000,
    category: 'Trinket',
    maxStackSize: 1,
    rarity: 'Uncommon',
    recyclesTo: [],
    quests: [],
    workshop: [],
  },
  {
    id: 96,
    name: 'Magnet',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/8/8c/Magnet.png/revision/latest?cb=20251017224039',
    sellPrice: 300,
    category: 'Topside Material',
    maxStackSize: 1,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 103,
        amount: 2,
      },
    ],
    quests: [],
    workshop: [],
  },
  {
    id: 97,
    name: 'Magnetic Accelerator',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/5/5e/Magnetic_Accelerator.png/revision/latest?cb=20251019210950',
    sellPrice: 5500,
    category: 'Refined Material',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 98,
    name: 'Magnetron',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/a/a2/Magnetron.png/revision/latest?cb=20251114160447',
    sellPrice: 6000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [
      {
        id: 0,
        amount: 1,
      },
    ],
    workshop: [],
  },
  {
    id: 99,
    name: 'Matriarch Reactor',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/2/24/Matriarch_Reactor.png/revision/latest?cb=20251114003948',
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
    quests: [],
    workshop: [],
  },
  {
    id: 100,
    name: 'Mechanical Components',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/9/94/Mechanical_Components.png/revision/latest?cb=20251017225852',
    sellPrice: 640,
    category: 'Refined Material',
    maxStackSize: 1,
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
    quests: [],
    workshop: [
      {
        id: 0,
        amount: 5,
      },
    ],
  },
  {
    id: 101,
    name: 'Medium Gun Parts',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/9/9a/Medium_Gun_Parts.png/revision/latest?cb=20251018202459',
    sellPrice: 700,
    category: 'Topside Material',
    maxStackSize: 1,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 163,
        amount: 2,
      },
    ],
    quests: [],
    workshop: [],
  },
  {
    id: 102,
    name: 'Metal Brackets',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/6/62/Metal_Brackets.png/revision/latest?cb=20251018190513',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 1,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 103,
        amount: 8,
      },
    ],
    quests: [],
    workshop: [],
  },
  {
    id: 103,
    name: 'Metal Parts',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/8/89/Metal_Parts.png/revision/latest?cb=20251017210517',
    sellPrice: 75,
    category: 'Misc',
    maxStackSize: 1,
    rarity: 'Common',
    recyclesTo: [],
    quests: [],
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
  },
  {
    id: 104,
    name: 'Microscope',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/2/2c/Microscope.png/revision/latest?cb=20251114120938',
    sellPrice: 3000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 105,
    name: 'Mini Centrifuge',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/9/9f/Mini_Centrifuge.png/revision/latest?cb=20251114111845',
    sellPrice: 3000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 106,
    name: 'Mod Components',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/0/0f/Mod_Components.png/revision/latest?cb=20251017224442',
    sellPrice: 1750,
    category: 'Refined Material',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 107,
    name: 'Moss',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/6/64/Moss.png/revision/latest?cb=20251017233839',
    sellPrice: 500,
    category: 'Topside Material',
    maxStackSize: 1,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 19,
        amount: 3,
      },
    ],
    quests: [],
    workshop: [],
  },
  {
    id: 108,
    name: 'Motor',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/0/0f/Motor.png/revision/latest?cb=20251103111529',
    sellPrice: 2000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [
      {
        id: 0,
        amount: 3,
      },
    ],
  },
  {
    id: 109,
    name: 'Mushroom',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/8/8c/Mushroom.png/revision/latest?cb=20251018214820',
    sellPrice: 1000,
    category: 'Misc',
    maxStackSize: 1,
    rarity: 'Common',
    recyclesTo: [],
    quests: [],
    workshop: [
      {
        id: 0,
        amount: 12,
      },
    ],
  },
  {
    id: 110,
    name: 'Music Box',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/7/74/Music_Box.png/revision/latest?cb=20251031214507',
    sellPrice: 5000,
    category: 'Trinket',
    maxStackSize: 1,
    rarity: 'Rare',
    recyclesTo: [],
    quests: [],
    workshop: [],
  },
  {
    id: 111,
    name: 'Music Album',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/9/90/Music_Album.png/revision/latest?cb=20251030230551',
    sellPrice: 3000,
    category: 'Trinket',
    maxStackSize: 1,
    rarity: 'Rare',
    recyclesTo: [],
    quests: [],
    workshop: [],
  },
  {
    id: 112,
    name: 'Number Plate',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/5/51/Number_Plate.png/revision/latest?cb=20251017223932',
    sellPrice: 270,
    category: 'Recyclable',
    maxStackSize: 1,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 103,
        amount: 3,
      },
    ],
    quests: [],
    workshop: [],
  },
  {
    id: 113,
    name: 'Oil',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/0/06/Oil.png/revision/latest?cb=20251017215553',
    sellPrice: 300,
    category: 'Topside Material',
    maxStackSize: 1,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 35,
        amount: 3,
      },
    ],
    quests: [],
    workshop: [],
  },
  {
    id: 114,
    name: 'Olives',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/f/f3/Olives.png/revision/latest?cb=20251031172750',
    sellPrice: 640,
    category: 'Nature',
    maxStackSize: 1,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 19,
        amount: 2,
      },
    ],
    quests: [],
    workshop: [
      {
        id: 0,
        amount: 8,
      },
    ],
  },
  {
    id: 115,
    name: 'Painted Box',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/5/53/Painted_Box.png/revision/latest?cb=20251018124205',
    sellPrice: 2000,
    category: 'Trinket',
    maxStackSize: 1,
    rarity: 'Common',
    recyclesTo: [],
    quests: [],
    workshop: [],
  },
  {
    id: 116,
    name: 'Plastic Parts',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/c/c9/Plastic_Parts.png/revision/latest?cb=20251017210329',
    sellPrice: 60,
    category: 'Misc',
    maxStackSize: 1,
    rarity: 'Common',
    recyclesTo: [],
    quests: [],
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
  },
  {
    id: 117,
    name: 'Playing Cards',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/e/e2/Playing_Cards.png/revision/latest?cb=20251102161321',
    sellPrice: 5000,
    category: 'Trinket',
    maxStackSize: 1,
    rarity: 'Rare',
    recyclesTo: [],
    quests: [],
    workshop: [],
  },
  {
    id: 118,
    name: 'Pottery',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/c/c0/Pottery.png/revision/latest?cb=20251030174902',
    sellPrice: 2000,
    category: 'Trinket',
    maxStackSize: 1,
    rarity: 'Uncommon',
    recyclesTo: [],
    quests: [],
    workshop: [],
  },
  {
    id: 119,
    name: 'Polluted Air Filter',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/6/6e/Polluted_Air_Filter.png/revision/latest?cb=20251018190712',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 120,
    name: 'Pop Trigger',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/c/c6/Pop_Trigger.png/revision/latest?cb=20251017214952',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [
      {
        id: 0,
        amount: 5,
      },
    ],
  },
  {
    id: 121,
    name: 'Portable TV',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/5/5f/Portable_TV.png/revision/latest?cb=20251017203154',
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
    quests: [],
    workshop: [],
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
    quests: [],
    workshop: [],
  },
  {
    id: 123,
    name: 'Power Bank',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/7/77/Power_Bank.png/revision/latest?cb=20251017203344',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 124,
    name: 'Power Cable',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/f/f8/Power_Cable.png/revision/latest?cb=20251019025658',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 1,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 192,
        amount: 4,
      },
    ],
    quests: [],
    workshop: [
      {
        id: 0,
        amount: 3,
      },
    ],
  },
  {
    id: 125,
    name: 'Power Rod',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/b/b7/PowerRod.png/revision/latest?cb=20251103112207',
    sellPrice: 5500,
    category: 'Advanced Material',
    maxStackSize: 1,
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
    quests: [
      {
        id: 0,
        amount: 1,
      },
    ],
    workshop: [],
  },
  {
    id: 126,
    name: 'Prickly Pear',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/8/80/Prickly_Pear.png/revision/latest?cb=20251101085304',
    sellPrice: 640,
    category: 'Misc',
    maxStackSize: 1,
    rarity: 'Uncommon',
    recyclesTo: [],
    quests: [],
    workshop: [
      {
        id: 0,
        amount: 8,
      },
    ],
  },
  {
    id: 127,
    name: 'Processor',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/4/4e/Processor.png/revision/latest?cb=20251018202024',
    sellPrice: 500,
    category: 'Topside Material',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 128,
    name: 'Projector',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/0/04/Projector.png/revision/latest?cb=20251101185504',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 129,
    name: 'Queen Reactor',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/6/6b/Queen_Reactor.png/revision/latest?cb=20251107045522',
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
    quests: [],
    workshop: [],
  },
  {
    id: 130,
    name: 'Radio',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/3/31/Radio.png/revision/latest?cb=20251017203552',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 131,
    name: 'Radio Relay',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/b/b6/Radio_Relay.png/revision/latest?cb=20251114112628',
    sellPrice: 3000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 132,
    name: 'Resin',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/2/2c/Resin.png/revision/latest?cb=20251103111701',
    sellPrice: 1000,
    category: 'Nature',
    maxStackSize: 1,
    rarity: 'Common',
    recyclesTo: [],
    quests: [],
    workshop: [],
  },
  {
    id: 133,
    name: 'Recorder',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/6/6d/Recorder.png/revision/latest?cb=20251105052420',
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
    quests: [],
    workshop: [],
  },
  {
    id: 134,
    name: 'Red Coral Jewlery',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/1/1a/Red_Coral_Jewelry.png/revision/latest?cb=20251102162334',
    sellPrice: 5000,
    category: 'Trinket',
    maxStackSize: 1,
    rarity: 'Rare',
    recyclesTo: [],
    quests: [],
    workshop: [],
  },
  {
    id: 135,
    name: 'Remote Control',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/f/f4/Remote_Control.png/revision/latest?cb=20251018183824',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 136,
    name: 'Ripped Safety Vest',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/a/a8/Ripped_Safety_Vest.png/revision/latest?cb=20251017215442',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 137,
    name: 'Rocketeer Driver',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/5/53/Rocketeet_Driver.png/revision/latest?cb=20251102155406',
    sellPrice: 5000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [
      {
        id: 0,
        amount: 1,
      },
    ],
    workshop: [
      {
        id: 0,
        amount: 3,
      },
    ],
  },
  {
    id: 138,
    name: 'Rocket Thruster',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/8/8a/Rocket_Thruster.png/revision/latest?cb=20251122141321',
    sellPrice: 2000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 139,
    name: 'Roots',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/5/57/Roots.png/revision/latest?cb=20251030230741',
    sellPrice: 640,
    category: 'Nature',
    maxStackSize: 1,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 19,
        amount: 1,
      },
    ],
    quests: [],
    workshop: [],
  },
  {
    id: 140,
    name: 'Rope',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/b/b4/Rope.png/revision/latest?cb=20251018183918',
    sellPrice: 500,
    category: 'Topside Material',
    maxStackSize: 1,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 66,
        amount: 5,
      },
    ],
    quests: [],
    workshop: [],
  },
  {
    id: 141,
    name: 'Rosary',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/7/77/Rosary.png/revision/latest?cb=20251102000010',
    sellPrice: 2000,
    category: 'Trinket',
    maxStackSize: 1,
    rarity: 'Rare',
    recyclesTo: [],
    quests: [],
    workshop: [],
  },
  {
    id: 142,
    name: 'Rotary Encoder',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/e/e4/Rotary_Encoder.png/revision/latest?cb=20251114112855',
    sellPrice: 3000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 143,
    name: 'Rubber Duck',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/d/df/Rubber_Duck.png/revision/latest?cb=20251018124112',
    sellPrice: 1000,
    category: 'Trinket',
    maxStackSize: 1,
    rarity: 'Common',
    recyclesTo: [],
    quests: [],
    workshop: [],
  },
  {
    id: 144,
    name: 'Rubber Pad',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/1/1a/Rubber_Pad.png/revision/latest?cb=20251017203903',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 1,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 145,
        amount: 18,
      },
    ],
    quests: [],
    workshop: [],
  },
  {
    id: 145,
    name: 'Rubber Parts',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/9/93/Rubber_Parts.png/revision/latest?cb=20251107101823',
    sellPrice: 50,
    category: 'Misc',
    maxStackSize: 1,
    rarity: 'Common',
    recyclesTo: [],
    quests: [],
    workshop: [
      {
        id: 0,
        amount: 30,
      },
    ],
  },
  {
    id: 146,
    name: 'Ruined Accordion',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/9/9b/Ruined_Accordon.png/revision/latest?cb=20251101000302',
    sellPrice: 2000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 147,
    name: 'Ruined Baton',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/e/ee/Ruined_Baton.png/revision/latest?cb=20251018182900',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 148,
    name: 'Ruined Handcuffs',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/7/7c/Ruined_Handcuffs.png/revision/latest?cb=20251018181859',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 1,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 103,
        amount: 8,
      },
    ],
    quests: [],
    workshop: [],
  },
  {
    id: 149,
    name: 'Ruined Parachute',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/5/5c/Ruined_Parachute.png/revision/latest?cb=20251018181747',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 1,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 66,
        amount: 10,
      },
    ],
    quests: [],
    workshop: [],
  },
  {
    id: 150,
    name: 'Ruined Riot Shield',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/c/cb/Ruined_Riot_Shield.png/revision/latest?cb=20251018183034',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 151,
    name: 'Ruined Tactical Vest',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/c/c2/Ruined_Tactical_Vest.png/revision/latest?cb=20251018133957',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 152,
    name: 'Rusted Bolts',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/b/bf/Rusted_Bolts.png/revision/latest?cb=20251017223831',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 1,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 103,
        amount: 8,
      },
    ],
    quests: [],
    workshop: [],
  },
  {
    id: 153,
    name: 'Rusted Gear',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/c/cf/Rusted_Gear.png/revision/latest?cb=20251017224333',
    sellPrice: 2000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [
      {
        id: 0,
        amount: 3,
      },
    ],
  },
  {
    id: 154,
    name: 'Rusted Shut Medical Kit',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/1/1a/Rusted_Shut_Medical_Kit.png/revision/latest?cb=20251102083926',
    sellPrice: 2000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [
      {
        id: 0,
        amount: 3,
      },
    ],
  },
  {
    id: 155,
    name: 'Rusted Tools',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/3/30/Rusted_Tools.png/revision/latest?cb=20251017204135',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [
      {
        id: 0,
        amount: 3,
      },
    ],
  },
  {
    id: 156,
    name: 'Rusty ARC Steel',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/3/33/Rusty_ARC_Steel.png/revision/latest?cb=20251019024635',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 1,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 103,
        amount: 8,
      },
    ],
    quests: [],
    workshop: [],
  },
  {
    id: 157,
    name: 'Sample Cleaner',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/d/d8/Sample_Cleaner.png/revision/latest?cb=20251114144328',
    sellPrice: 3000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 158,
    name: 'Sensors',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/9/9c/Sensors.png/revision/latest?cb=20251018131556',
    sellPrice: 500,
    category: 'Topside Material',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 159,
    name: 'Sentinel Firing Core',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/9/91/Sentinel_Firing_Core.png/revision/latest?cb=20251103113548',
    sellPrice: 3000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [
      {
        id: 0,
        amount: 4,
      },
    ],
  },
  {
    id: 160,
    name: 'Shredder Gyro',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/b/b1/Shredder_Gryo.png/revision/latest?cb=20251114144935',
    sellPrice: 3000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 161,
    name: 'Signal Amplifier',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/d/de/Signal_Amplifier.png/revision/latest?cb=20251114182313',
    sellPrice: 3000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 162,
    name: 'Silver Teaspoon Set',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/9/90/Silver_Teaspoon_Set.png/revision/latest?cb=20251102000807',
    sellPrice: 3000,
    category: 'Trinket',
    maxStackSize: 1,
    rarity: 'Rare',
    recyclesTo: [],
    quests: [],
    workshop: [],
  },
  {
    id: 163,
    name: 'Simple Gun Parts',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/d/da/Simple_Gun_Parts.png/revision/latest?cb=20251018111316',
    sellPrice: 330,
    category: 'Topside Material',
    maxStackSize: 1,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 0,
        amount: 2,
      },
    ],
    quests: [],
    workshop: [],
  },
  {
    id: 164,
    name: 'Snitch Scanner',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/0/07/SnitchScannerPNG.png/revision/latest?cb=20251107084933',
    sellPrice: 2000,
    category: 'Recyclable',
    maxStackSize: 1,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 10,
        amount: 4,
      },
    ],
    quests: [
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
  },
  {
    id: 165,
    name: 'Speaker Component',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/e/ee/Speaker_Component.png/revision/latest?cb=20251017204352',
    sellPrice: 500,
    category: 'Topside Material',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 166,
    name: 'Spectrometer',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/0/0e/Spectrometer.png/revision/latest?cb=20251114144554',
    sellPrice: 3000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 167,
    name: 'Spectrum Analyzer',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/e/ee/Spectrum_Analyizer.png/revision/latest?cb=20251114120116',
    sellPrice: 3500,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 168,
    name: 'Spotter Relay',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/5/58/Spotter_Relay.png/revision/latest?cb=20251018181630',
    sellPrice: 2000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 169,
    name: 'Spring Cushion',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/2/29/SpringCushionPNG.png/revision/latest?cb=20251101183755',
    sellPrice: 2000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 170,
    name: 'Statuette',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/8/8a/Statuette.png/revision/latest?cb=20251101173502',
    sellPrice: 3000,
    category: 'Trinket',
    maxStackSize: 1,
    rarity: 'Rare',
    recyclesTo: [],
    quests: [],
    workshop: [],
  },
  {
    id: 171,
    name: 'Steel Spring',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/d/db/Steel_Spring.png/revision/latest?cb=20251017215346',
    sellPrice: 300,
    category: 'Topside Material',
    maxStackSize: 1,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 103,
        amount: 2,
      },
    ],
    quests: [],
    workshop: [],
  },
  {
    id: 172,
    name: 'Surveyor Vault',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/a/a9/Surveyor_Vault.png/revision/latest?cb=20251019210905',
    sellPrice: 2000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [
      {
        id: 0,
        amount: 1,
      },
    ],
    workshop: [
      {
        id: 0,
        amount: 5,
      },
    ],
  },
  {
    id: 173,
    name: 'Synthesized Fuel',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/8/8e/Synthesized_Fuel.png/revision/latest?cb=20251022001344',
    sellPrice: 700,
    category: 'Topside Material',
    maxStackSize: 1,
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
    quests: [],
    workshop: [
      {
        id: 0,
        amount: 3,
      },
    ],
  },
  {
    id: 174,
    name: 'Syringe',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/1/17/Syringe.png/revision/latest?cb=20251017204737',
    sellPrice: 500,
    category: 'Topside Material',
    maxStackSize: 1,
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
    quests: [
      {
        id: 0,
        amount: 1,
      },
    ],
    workshop: [],
  },
  {
    id: 175,
    name: 'Tattered ARC Lining',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/3/35/Tattered_ARC_Lining.png/revision/latest?cb=20251022001931',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 1,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 66,
        amount: 12,
      },
    ],
    quests: [],
    workshop: [],
  },
  {
    id: 176,
    name: 'Tattered Clothes',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/c/c4/Tattered_Clothes.png/revision/latest?cb=20251018181427',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 1,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 66,
        amount: 11,
      },
    ],
    quests: [],
    workshop: [],
  },
  {
    id: 177,
    name: 'Telemetry Transceiver',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/a/a8/Telemetry_Transceiver.png/revision/latest?cb=20251114144831',
    sellPrice: 3000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 178,
    name: 'Thermostat',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/9/9a/Thermostat.png/revision/latest?cb=20251019025847',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 179,
    name: 'Tick Pod',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/9/95/Tick_Pod.png/revision/latest?cb=20251017215236',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [
      {
        id: 0,
        amount: 8,
      },
    ],
  },
  {
    id: 180,
    name: 'Toaster',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/5/50/Toaster.png/revision/latest?cb=20251019025608',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [
      {
        id: 0,
        amount: 3,
      },
    ],
  },
  {
    id: 181,
    name: 'Torn Book',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/c/cc/Torn_Book.png/revision/latest?cb=20251030175412',
    sellPrice: 1000,
    category: 'Trinket',
    maxStackSize: 1,
    rarity: 'Common',
    recyclesTo: [],
    quests: [],
    workshop: [],
  },
  {
    id: 182,
    name: 'Torn Blanket',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/a/af/Torn_Blanket.png/revision/latest?cb=20251018201522',
    sellPrice: 640,
    category: 'Recyclable',
    maxStackSize: 1,
    rarity: 'Rare',
    recyclesTo: [
      {
        id: 66,
        amount: 12,
      },
    ],
    quests: [],
    workshop: [],
  },
  {
    id: 183,
    name: 'Turbo Pump',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/f/f1/Turbo_Pump.png/revision/latest?cb=20251103111348',
    sellPrice: 2000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 184,
    name: 'Unusable Weapon',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/3/37/Unusable_Weapon.png/revision/latest?cb=20251101045758',
    sellPrice: 2000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 185,
    name: 'Vase',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/6/6e/Vase.png/revision/latest?cb=20251102162532',
    sellPrice: 3000,
    category: 'Trinket',
    maxStackSize: 1,
    rarity: 'Rare',
    recyclesTo: [],
    quests: [],
    workshop: [],
  },
  {
    id: 186,
    name: 'Very Comfortable Pillow',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/a/a4/Very_Comfortable_Pillow.png/revision/latest?cb=20251102000155',
    sellPrice: 2000,
    category: 'Trinket',
    maxStackSize: 1,
    rarity: 'Uncommon',
    recyclesTo: [],
    quests: [],
    workshop: [
      {
        id: 0,
        amount: 3,
      },
    ],
  },
  {
    id: 187,
    name: 'Volcanic Rock',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/2/26/Volcanic_Rock.png/revision/latest?cb=20251019023713',
    sellPrice: 270,
    category: 'Misc',
    maxStackSize: 1,
    rarity: 'Common',
    recyclesTo: [],
    quests: [],
    workshop: [],
  },
  {
    id: 188,
    name: 'Voltage Converter',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/c/c7/Voltage_Converter.png/revision/latest?cb=20251017205004',
    sellPrice: 500,
    category: 'Topside Material',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 189,
    name: 'Wasp Driver',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/3/30/Wasp_Driver.png/revision/latest?cb=20251017205624',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [
      {
        id: 0,
        amount: 2,
      },
    ],
    workshop: [
      {
        id: 0,
        amount: 8,
      },
    ],
  },
  {
    id: 190,
    name: 'Water Filter',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/4/48/Water_Filter.png/revision/latest?cb=20251017205208',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [],
    workshop: [],
  },
  {
    id: 191,
    name: 'Water Pump',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/2/28/Water_Pump.png/revision/latest?cb=20251017205359',
    sellPrice: 1000,
    category: 'Recyclable',
    maxStackSize: 1,
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
    quests: [
      {
        id: 0,
        amount: 1,
      },
    ],
    workshop: [],
  },
  {
    id: 192,
    name: 'Wires',
    description: '',
    imageUrl:
      'https://static.wikia.nocookie.net/arc-raiders/images/3/39/Wires.png/revision/latest?cb=20251017215155',
    sellPrice: 200,
    category: 'Topside Material',
    maxStackSize: 1,
    rarity: 'Uncommon',
    recyclesTo: [
      {
        id: 145,
        amount: 2,
      },
    ],
    quests: [
      {
        id: 0,
        amount: 6,
      },
      {
        id: 0,
        amount: 3,
      },
      {
        id: 0,
        amount: 5,
      },
    ],
    workshop: [],
  },
]
