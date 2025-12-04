import { useSearch } from '@tanstack/react-router'
import { Merge } from 'lucide-react'
import { useMemo } from 'react'
import type { Item } from '../../../data/types'
import { Card } from '../../Card/Card'
import { ItemGrid } from '../ItemGrid/ItemGrid'
import styles from './Crafting.module.scss'

interface CraftingProps {
  item: Item
  allItems: Array<Item>
  onItemSelect?: (id: number) => void
}

// Helper to create a unique key for a recipe based on its ingredients
function getRecipeKey(
  items: Array<{ id: number; amount: number }>,
  amount: number,
): string {
  const sortedItems = [...items]
    .sort((a, b) => a.id - b.id)
    .map((i) => `${i.id}:${i.amount}`)
    .join(',')
  return `${amount}|${sortedItems}`
}

// Format workstation with level
function formatWorkstation(name: string, level: number): string {
  return level > 0 ? `${name} ${level}` : name
}

export function Crafting({ item, allItems, onItemSelect }: CraftingProps) {
  const { id } = useSearch({ from: '/' })

  const recipes = useMemo(() => {
    if (!item.crafting || item.crafting.length === 0) return []

    // Group recipes by their ingredients and output amount
    const recipeMap = new Map<
      string,
      {
        amount: number
        workstations: Array<{ name: string; level: number }>
        items: Array<{ id: number; amount: number }>
      }
    >()

    for (const recipe of item.crafting) {
      const key = getRecipeKey(recipe.items, recipe.amount)
      const existing = recipeMap.get(key)

      if (existing) {
        // Add workstation to existing recipe
        existing.workstations.push({
          name: recipe.workstation,
          level: recipe.workstationLevel,
        })
      } else {
        // Create new recipe entry
        recipeMap.set(key, {
          amount: recipe.amount,
          workstations: [
            { name: recipe.workstation, level: recipe.workstationLevel },
          ],
          items: recipe.items,
        })
      }
    }

    // Convert to array with resolved ingredients
    return Array.from(recipeMap.values()).map((recipe) => {
      const ingredients = recipe.items
        .map((ingredient) => {
          const foundItem = allItems.find((i) => i.id === ingredient.id)
          return foundItem
            ? { item: foundItem, amount: ingredient.amount }
            : null
        })
        .filter((x) => x !== null)

      // Format workstation string
      const workstationText = recipe.workstations
        .map((ws) => formatWorkstation(ws.name, ws.level))
        .join(' or ')

      return {
        amount: recipe.amount,
        workstationText,
        ingredients,
      }
    })
  }, [item.crafting, allItems])

  if (recipes.length === 0) {
    return null
  }

  return (
    <Card variant="primary" title="Crafted from" icon={<Merge size={18} />}>
      <div className={styles.recipes}>
        {recipes.map((recipe, index) => (
          <div key={index} className={styles.recipe}>
            <div className={styles.workstation}>
              <span className={styles.workstationName}>
                {recipe.workstationText}
              </span>
            </div>
            <ItemGrid
              items={recipe.ingredients}
              variant="primary"
              onItemSelect={onItemSelect}
              highlightedItemId={id}
              ariaLabel={`Crafting ingredients for ${recipe.workstationText}`}
            />
            {recipe.amount > 1 && (
              <div className={styles.output}>Produces: {recipe.amount}x</div>
            )}
          </div>
        ))}
      </div>
    </Card>
  )
}
