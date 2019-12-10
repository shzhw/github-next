import React from 'react';
import Link from 'next/link';
import {Button} from 'antd';

const Layout = ({children}) => {
  return (
    <>
      <header>
        <Link href="/text?id=1"><Button>go 1</Button></Link>
        <Link href="/text?id=2"><Button>go 2</Button></Link>
      </header>
      {children}
    </>
  )
}

export default Layout