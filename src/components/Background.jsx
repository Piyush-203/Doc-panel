import React from 'react'

const Background = () => {
  return (<>
     <div  className="absolute w-full h-screen z-[2]">
        <div className="absolute top-[5%] w-full py-10 flex justify-center text-zinc-400/40 text-xl">Documents</div>
      <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] leading-none tracking-tighter font-semibold text-zinc-400'>Docs.</h1>
      {/* tracking tighter will reduce the space btw the  letters */}
      </div>
    </>
  )
}

export default Background