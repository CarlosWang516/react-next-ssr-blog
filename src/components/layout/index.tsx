import type { NextPage } from 'next'
import type { ReactNode } from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'

type ILayoutProps = {
  children: ReactNode,
}

const Layout: NextPage<ILayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
