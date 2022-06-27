import { Header } from './components/Header'
import { Post } from './components/Post'
import styles from './App.module.css'
import './global.css'
import { Sidebar } from './components/Sidebar'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Lis Amaral" content="lorem ipsum"></Post>
          <Post author="Gabriel Martins" content="lorem ipsum"></Post>
        </main>
      </div>
    </div>
  )
}
export default App
