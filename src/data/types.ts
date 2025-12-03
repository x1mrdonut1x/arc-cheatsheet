type Category =
  | 'Misc'
  | 'Advanced Material'
  | 'Nature'
  | 'Recyclable'
  | 'Refined Material'
  | 'Trinket'
  | 'Topside Material'
  | 'Key'
  | 'Quick Use'

type Rarity = 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary'

export type Item = {
  id: number
  name: string
  imageUrl: string
  description: string
  sellPrice: number
  category: Category
  maxStackSize: number
  rarity: Rarity
  recyclesTo: Array<{ id: number; amount: number }>
  workshop: Array<{ id: number; amount: number }>
}
