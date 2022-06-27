import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1474557157379-8aa74a6ef541?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        alt="footer aside"
      />
      <div className={styles.profile}>
        <strong>Lis Regine Amaral</strong>
        <span>Developer I</span>
      </div>
      <footer>
        <a href="www.google.com.br">Editar seu perfil</a>
      </footer>
    </aside>
  )
}
