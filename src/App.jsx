import './App.css'
import PostsList from './features/posts/PostsList'
import TheNavbar from './components/Navbar'
import { Container } from 'react-bootstrap'
import AddPostForm from './features/posts/AddPostForm'

function App() {

  return (
    <div className="App">
      <TheNavbar />
      <Container>
        <AddPostForm />
        <PostsList />
      </Container>
    </div>
  )
}

export default App
