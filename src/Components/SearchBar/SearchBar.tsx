import styles from './SearchBar.module.css'

type SearchBarProps = {
  value: string
  onChange: (value: string) => void
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className={styles.container}>
      <p className={styles.label}>Find the items</p>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={styles.input}
      />
    </div>
  )
}
