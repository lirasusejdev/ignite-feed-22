import { Header } from './components/Header'
import { Post } from './components/Post'
import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <Post author="Lis Amaral" content="lorem ipsum"></Post>
      <Post author="Gabriel Martins" content="lorem ipsum"></Post>
    </div>
  )
}
export default App
