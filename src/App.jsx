import React from 'react';
import Background from './components/Background';
import Foreground from './components/Foreground';


const App = () => {
  return (
    <>
    <div className='relative bg-slate-900 w-full h-screen'> 
        <Background />
        <Foreground />
    </div>
    </>
  )
}

export default App