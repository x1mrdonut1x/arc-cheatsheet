import classNames from 'classnames'
import { traders } from '../../../data/traders'
import styles from './TraderSelector.module.scss'

import apolloImg from '../../../assets/traders/apollo.webp'
import celesteImg from '../../../assets/traders/celeste.webp'
import lanceImg from '../../../assets/traders/lance.webp'
import shaniImg from '../../../assets/traders/shani.webp'
import tianwenImg from '../../../assets/traders/tianwen.webp'

const traderImages: Record<number, string> = {
  0: apolloImg,
  1: celesteImg,
  2: lanceImg,
  3: shaniImg,
  4: tianwenImg,
}

interface TraderSelectorProps {
  selectedTraderId: number
  onSelectTrader: (traderId: number) => void
}

export function TraderSelector({
  selectedTraderId,
  onSelectTrader,
}: TraderSelectorProps) {
  return (
    <div className={styles.container}>
      {traders.map((trader) => (
        <button
          key={trader.id}
          className={classNames(styles.traderCircle, {
            [styles.selected]: selectedTraderId === trader.id,
          })}
          onClick={() => onSelectTrader(trader.id)}
          title={trader.name}
          aria-label={`Select ${trader.name}`}
          aria-pressed={selectedTraderId === trader.id}
        >
          <img
            src={traderImages[trader.id]}
            alt={trader.name}
            className={styles.traderImage}
          />
        </button>
      ))}
    </div>
  )
}
