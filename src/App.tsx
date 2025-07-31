import { Container } from "react-bootstrap"
import ResumeHeader from './components/ResumeHeader';
import ResumeBody from './components/ResumeBody';
import ResumeFooter from './components/ResumeFooter';

function App() {
  return (
    <Container fluid className="app resume-document">
      <ResumeHeader />
      <ResumeBody />
      <ResumeFooter />
    </Container>
  )
}

export default App
