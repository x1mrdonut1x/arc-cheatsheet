import { useSearch } from '@tanstack/react-router'
import { ArrowLeft, Github } from 'lucide-react'
import { Button } from '../Button'
import { ProjectCompletion } from '../ProjectCompletion'
import { QuestCompletion } from '../QuestCompletion'
import { WorkshopCompletion } from '../WorkshopCompletion'
import styles from './Layout.module.scss'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  const search = useSearch({ strict: false })
  const hasSearchParams = Object.keys(search).length > 0

  return (
    <div className={styles.layout}>
      {hasSearchParams && (
        <Button
          variant="icon"
          className={styles.backButton}
          onClick={() => history.back()}
          aria-label="Go back"
        >
          <ArrowLeft size={20} />
        </Button>
      )}
      <div className={styles.sidebar}>
        <QuestCompletion />
        <WorkshopCompletion />
        <ProjectCompletion />
      </div>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p className={styles.dataSource}>
          Data sourced from{' '}
          <a
            href="https://arcraiders.wiki"
            target="_blank"
            rel="noopener noreferrer"
          >
            arcraiders.wiki
          </a>
        </p>
        <a
          href="https://github.com/x1mrdonut1x/arc-cheatsheet"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerLink}
          aria-label="GitHub"
        >
          <Github size={24} />
        </a>
      </footer>
    </div>
  )
}
