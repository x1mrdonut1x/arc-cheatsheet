import styles from './Baseline.module.scss'

interface BreakdownItem {
  id: string | number
  label: string
  sublabel?: string
  amount: number
}

interface BreakdownSectionProps {
  title: string
  items: Array<BreakdownItem>
}

export function BreakdownSection({ title, items }: BreakdownSectionProps) {
  if (items.length === 0) return null

  return (
    <div className={styles.section}>
      <h4 className={styles.sectionTitle}>{title}</h4>
      <ul className={styles.breakdown}>
        {items.map((item) => (
          <li key={item.id}>
            <span className={styles.label}>{item.label}</span>
            {item.sublabel && (
              <span className={styles.secondary}> {item.sublabel}</span>
            )}
            <span className={styles.value}>x{item.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
