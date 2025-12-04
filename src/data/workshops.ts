import type { Workshop } from './types'

export const workshops: Array<Workshop> = [
  {
    id: 0,
    name: 'Workbench',
    levels: [
      {
        value: 1,
        items: [{ id: 1, amount: 10 }],
      },
    ],
  },
  {
    id: 1,
    name: 'Gunsmith',
    levels: [
      {
        value: 1,
        items: [
          {
            id: 103,
            amount: 20,
          },
          {
            id: 145,
            amount: 30,
          },
        ],
      },
      {
        value: 2,
        items: [
          {
            id: 155,
            amount: 3,
          },
          {
            id: 100,
            amount: 5,
          },
          {
            id: 189,
            amount: 8,
          },
        ],
      },
      {
        value: 3,
        items: [
          {
            id: 153,
            amount: 3,
          },
          {
            id: 3,
            amount: 5,
          },
          {
            id: 159,
            amount: 4,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Gear Bench',
    levels: [
      {
        value: 1,
        items: [
          {
            id: 116,
            amount: 25,
          },
          {
            id: 66,
            amount: 30,
          },
        ],
      },
      {
        value: 2,
        items: [
          {
            id: 124,
            amount: 3,
          },
          {
            id: 60,
            amount: 5,
          },
          {
            id: 81,
            amount: 5,
          },
        ],
      },
      {
        value: 3,
        items: [
          {
            id: 86,
            amount: 3,
          },
          {
            id: 2,
            amount: 5,
          },
          {
            id: 20,
            amount: 6,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'Medical Lab',
    levels: [
      {
        value: 1,
        items: [
          {
            id: 66,
            amount: 50,
          },
          {
            id: 10,
            amount: 6,
          },
        ],
      },
      {
        value: 2,
        items: [
          {
            id: 41,
            amount: 2,
          },
          {
            id: 59,
            amount: 5,
          },
          {
            id: 179,
            amount: 8,
          },
        ],
      },
      {
        value: 3,
        items: [
          {
            id: 154,
            amount: 3,
          },
          {
            id: 8,
            amount: 8,
          },
          {
            id: 172,
            amount: 5,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: 'Explosives Station',
    levels: [
      {
        value: 1,
        items: [
          {
            id: 35,
            amount: 50,
          },
          {
            id: 10,
            amount: 6,
          },
        ],
      },
      {
        value: 2,
        items: [
          {
            id: 173,
            amount: 3,
          },
          {
            id: 42,
            amount: 5,
          },
          {
            id: 120,
            amount: 5,
          },
        ],
      },
      {
        value: 3,
        items: [
          {
            id: 90,
            amount: 3,
          },
          {
            id: 65,
            amount: 5,
          },
          {
            id: 137,
            amount: 3,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: 'Utility Station',
    levels: [
      {
        value: 1,
        items: [
          {
            id: 116,
            amount: 50,
          },
          {
            id: 10,
            amount: 6,
          },
        ],
      },
      {
        value: 2,
        items: [
          {
            id: 47,
            amount: 2,
          },
          {
            id: 60,
            amount: 5,
          },
          {
            id: 164,
            amount: 6,
          },
        ],
      },
      {
        value: 3,
        items: [
          {
            id: 74,
            amount: 3,
          },
          {
            id: 2,
            amount: 5,
          },
          {
            id: 92,
            amount: 4,
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: 'Refiner',
    levels: [
      {
        value: 1,
        items: [
          {
            id: 103,
            amount: 60,
          },
          {
            id: 16,
            amount: 5,
          },
        ],
      },
      {
        value: 2,
        items: [
          {
            id: 180,
            amount: 3,
          },
          {
            id: 14,
            amount: 5,
          },
          {
            id: 71,
            amount: 8,
          },
        ],
      },
      {
        value: 3,
        items: [
          {
            id: 108,
            amount: 3,
          },
          {
            id: 11,
            amount: 10,
          },
          {
            id: 24,
            amount: 6,
          },
        ],
      },
    ],
  },
]
