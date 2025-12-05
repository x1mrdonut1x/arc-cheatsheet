import { items as allItems } from '../../data/items'
import type { Item } from '../../data/types'
import { useItemAnalysis } from '../../hooks/useItemAnalysis'
import { AnimatedList } from '../AnimatedList'
import { Card } from '../Card/Card'
import { ItemTile } from '../ItemTile/ItemTile'
import { Baseline } from './Baseline/Baseline'
import { Crafting } from './Crafting/Crafting'
import { ItemDetails } from './ItemDetails/ItemDetails'
import { Project } from './Project/Project'
import { QuestList } from './QuestList/QuestList'
import { RecycledFrom } from './RecycledFrom/RecycledFrom'
import { RecyclesTo } from './RecyclesTo/RecyclesTo'
import styles from './SearchResults.module.scss'
import { UsedToCraft } from './UsedToCraft/UsedToCraft'
import { WorkshopUpgrades } from './WorkshopUpgrades/WorkshopUpgrades'

interface SearchResultsProps {
  items: Array<Item>
  searchQuery: string
  onItemSelect?: (id: number) => void
}

export function SearchResults({
  items,
  searchQuery,
  onItemSelect,
}: SearchResultsProps) {
  const singleItem = items.length === 1 ? items[0] : undefined
  const analysis = useItemAnalysis(singleItem)

  if (items.length === 0) {
    return (
      <div className={styles.container} role="status" aria-live="polite">
        <p className={styles.noResults}>
          No items found for &quot;{searchQuery}&quot;
        </p>
      </div>
    )
  }

  const itemCount = items.length
  const isSingleItem = itemCount === 1

  return (
    <section
      className={styles.container}
      aria-label={`Search results: ${itemCount} item${itemCount !== 1 ? 's' : ''} found`}
      role="region"
    >
      <h2 className={styles.srOnly}>
        {itemCount} result{itemCount !== 1 ? 's' : ''} for &quot;{searchQuery}
        &quot;
      </h2>
      <AnimatedList as="ul" className={styles.resultsList}>
        {items.map((item) => (
          <li key={item.id}>
            {isSingleItem ? (
              <Card variant="primary" className={styles.itemCard} noPadding>
                <article
                  className={styles.singleItem}
                  aria-labelledby={`item-name-${item.id}`}
                  data-rarity={item.rarity.toLowerCase()}
                >
                  <div className={styles.imageBackground}>
                    <div className={styles.imageWrapper}>
                      <img
                        src={item.imageUrl}
                        alt=""
                        className={styles.image}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                  <ItemDetails item={item} />
                </article>
              </Card>
            ) : (
              <ItemTile item={item} onClick={onItemSelect} />
            )}
          </li>
        ))}
      </AnimatedList>

      {isSingleItem && items[0] && analysis && (
        <div className={styles.relationshipsContainer}>
          <Baseline
            recommendation={analysis.baseline.recommendation}
            totalNeeded={analysis.baseline.totalNeeded}
            questsNeeded={analysis.baseline.questsNeeded}
            upgradesNeeded={analysis.baseline.upgradesNeeded}
            projectStagesNeeded={analysis.baseline.projectStagesNeeded}
            allQuestsCompleted={analysis.baseline.allQuestsCompleted}
            allUpgradesCompleted={analysis.baseline.allUpgradesCompleted}
            allProjectsCompleted={analysis.baseline.allProjectsCompleted}
            hasQuests={analysis.relatedQuests.length > 0}
            hasUpgrades={analysis.upgrades.length > 0}
            hasProjects={analysis.projectStages.length > 0}
          />
          <Crafting
            item={items[0]}
            allItems={allItems}
            onItemSelect={onItemSelect}
          />
          <UsedToCraft
            item={items[0]}
            allItems={allItems}
            onItemSelect={onItemSelect}
          />
          <RecyclesTo
            item={items[0]}
            recycledItems={analysis.recycledItems}
            onItemSelect={onItemSelect}
          />
          <QuestList
            item={items[0]}
            relatedQuests={analysis.relatedQuests}
            onItemSelect={onItemSelect}
          />
          <WorkshopUpgrades
            item={items[0]}
            upgrades={analysis.upgrades}
            onItemSelect={onItemSelect}
          />
          <Project
            item={items[0]}
            stages={analysis.projectStages}
            onItemSelect={onItemSelect}
          />
          <RecycledFrom
            recycledFromItems={analysis.recycledFromItems}
            onItemSelect={onItemSelect}
          />
        </div>
      )}
    </section>
  )
}
