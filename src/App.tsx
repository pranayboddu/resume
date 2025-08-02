import { Container } from "react-bootstrap"
import ResumeHeader from './components/ResumeHeader';
import ResumeBody from './components/ResumeBody';
import ResumeFooter from './components/ResumeFooter';
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Container fluid className="app">
        <ResumeHeader />
        <div style={{ height: '100%', paddingTop: '10rem' }}>
          <ResumeBody />
          <ResumeFooter />
        </div>
      </Container>
    </ThemeProvider>
  )
}

export default App
