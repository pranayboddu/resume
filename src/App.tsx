import { Container } from "react-bootstrap"
import ResumeHeader from './components/ResumeHeader';
import ResumeBody from './components/ResumeBody';
import ResumeFooter from './components/ResumeFooter';
import './App.css'

function App() {
  return (
    <Container fluid className="app h-100 rounded  px-0 px-md-2 mx-md-4 my-md-4 shadow-lg">
      <ResumeHeader />
      <ResumeBody />
      <ResumeFooter />
    </Container>
  )
}

export default App
