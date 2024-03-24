import React from 'react'
import ReactDOM from 'react-dom/client'
import ResumeContextProvider from './components/resume/resume-context.tsx'
import Resume from './components/resume/resume'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ResumeContextProvider>
        <Resume/>
    </ResumeContextProvider>
  </React.StrictMode>,
)
