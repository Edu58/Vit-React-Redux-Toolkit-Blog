import './App.css'
import PostsList from './features/posts/PostsList'
import TheNavbar from './components/Navbar'
import { Container } from 'react-bootstrap'

function App() {

  return (
    <div className="App">
      <TheNavbar />
      <Container>
        <PostsList />
      </Container>
    </div>
  )
}

export default App
