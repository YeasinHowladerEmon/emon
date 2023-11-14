

import { Suspense, lazy } from 'react'
import './App.css'
const MainLayout = lazy(() => import('./layout/MainLayout'))
import AnimatedCursor from "react-animated-cursor"
import Preloader from './components/Home/Preloader'
import useDisableConsole from './hook/useDisableConsole'
function App() {
  useDisableConsole()

  return (
    <Suspense fallback={<Preloader />}>
      <AnimatedCursor
        color="#fff"
        innerSize={8}
        outerSize={40}
        innerScale={1}
        outerAlpha={1}
        outerStyle={{
          border: '2px solid #81e9a1b3',
        }}
        outerScale={3}
        innerStyle={{
          backgroundColor: '#fff'
        }}
        showSystemCursor={true}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',

        ]}
      />
      <MainLayout />
    </Suspense>
  )
}

export default App
