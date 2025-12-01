import React from 'react'
import GlassSurface from './GlassSurface'

export default function Nav() {
  return (
    <div className="fixed w-full top-0 left-0 z-50 p-4 flex items-center justify-center">
      {/* <GlassSurface 
        width={'1440px'}      
        borderRadius={24}
        className="flex items-center justify-between "
        mixBlendMode='screen'
        borderWidth={0}
        displace={5}
      > */}
        <div className='max-w-[1440px] w-full mx-auto flex items-center justify-between px-2 pt-2'>
          <span>@ivorcruz</span>
          <ul className='gap-10 flex text-sm text-muted-foreground px-4'>
            <li className='cursor-target hover:text-primary'>
              <a href="#home">home</a>
            </li>
            <li className='cursor-target hover:text-primary'>
              <a href="#projects">projects</a>
            </li>
            <li className='cursor-target hover:text-primary'>
              <a href="#about">about</a>
            </li>
            <li className='cursor-target hover:text-primary'>
              <a href="#contact">contact</a>
            </li>
          </ul>
        </div>
      {/* </GlassSurface> */}
    </div>
  )
}