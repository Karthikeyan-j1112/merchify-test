import './App.css';
import Main from './pages/Main'
import { useState, useEffect } from 'react'
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import data from './quizs/quiz1.json'

function App() {
  const [page, setPage] = useState<String>('main')
  const [answers, setAnswers] = useState<object>({})
  const [component, setComponent] = useState(<Main setPage={setPage} setAnswers={setAnswers} />)
  useEffect(() => {
    switchPage();
  }, [page])
  
  const [timeTaken, setTimeTaken] = useState<number>(data.time)

  const switchPage = () => {
    switch (page) {
      case 'main':
        setComponent(<Main setPage={setPage} setAnswers={setAnswers} />)
        return
      case 'quiz':
        setComponent(<Quiz setPage={setPage}  setTimeTaken={setTimeTaken}  setAnswers={setAnswers} />)
        return
      case 'result':
        setComponent(<Result answers={answers} timeTaken={timeTaken} setPage={setPage} />)
        return
    }
  }

  return (
    <div className="App">
      {component}
    </div>
  );
}

export default App;
