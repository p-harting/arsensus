import React from 'react'
import { FloatingNav } from './ui/floating-navbar'

const Navbar = () => {
  return (
    <div className='max-w-7xl w-full'>
      <FloatingNav
        navItems={[
          { name: 'Home', link: '/' },
          { name: 'Konzept', link: '/' },
          { name: 'FAQ', link: '/' },
          { name: 'Kontakt', link: '/' },
          { name: 'Blog', link: '/blog' }
        ]} />
    </div>
  )
}

export default Navbar