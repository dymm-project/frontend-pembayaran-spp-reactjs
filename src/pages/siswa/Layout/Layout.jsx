import React from 'react'
import Sidebar from "../../../components/siswa/template/Sidebar"

const Layout = ({children}) => {
  return (
    <React.Fragment>
        <div>
          <div className='flex'>
                <Sidebar/>
                {children}
            </div>
        </div>
    </React.Fragment>
  )
}

export default Layout