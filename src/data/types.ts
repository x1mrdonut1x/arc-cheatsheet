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
  imageUrl?: string
  description?: string
  category: Category
  sellPrice: number
  maxStackSize?: number
  weight?: number
  rarity: Rarity
  sources?: Array<{
    type: string
    traderId?: number
  }>
  canBeFoundIn?: string // Locations where the item can be found, spearated by commas
  crafting?: Array<{
    amount: number
    workstation: string
    workstationLevel: number
    items: Array<{ id: number; amount: number }>
  }> // Recipes that use this item as an ingredient
  meta?: Record<string, string | number>
  recyclesTo: Array<{ id: number; amount: number }> // Items that this item can be recycled INTO
  salvagesTo: Array<{ id: number; amount: number }> // Items that this item can be salvaged INTO
}

export type Quest = {
  id: number
  name: string
  description: string
  location: Array<string>
  trader: number
  items_needed: Array<{ id: number; amount: number; name: string }>
  rewards: Array<{ id?: number; name: string; amount: number }>
}

export type Workshop = {
  id: number
  name: string
  levels: Array<{
    value: number
    items: Array<{ id: number; amount: number }>
  }>
}
