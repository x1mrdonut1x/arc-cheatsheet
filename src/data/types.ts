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
  canBeFoundIn?: string // Locations where the item can be found, spearated by commas
  crafts?: Array<{
    id: number
    amountNeeded: number
    amountCrafted: number
    workstation: string
    workstationLevel: number
  }> // Recipes that use this item as an ingredient
  meta?: Record<string, string | number>
  recyclesTo: Array<{ id: number; amount: number }> // Items that this item can be recycled INTO
  salvagesTo: Array<{ id: number; amount: number }> // Items that this item can be salvaged INTO
  workshop: Array<{ id: number; amount: number }>
}
