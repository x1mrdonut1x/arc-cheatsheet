type Category =
  | 'Misc'
  | 'Advanced Material'
  | 'Nature'
  | 'Recyclable'
  | 'Refined Material'
  | 'Trinket'
  | 'Topside Material'
  | 'Key'

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
  recyclesTo: { id: number; amount: number }[]
  quests: { id: number; amount: number }[]
  workshop: { id: number; amount: number }[]
}
