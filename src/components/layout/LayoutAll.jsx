import { Button, Layout, Space } from 'antd'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'
import React, { lazy, Suspense, useState } from 'react'
const Start = lazy(() => import('../Start'))
const Draw = lazy(() => import('../Draw/Draw'));

function LayoutAll() {
  const [chooseButton, setChooseButton] = useState(0)
  const [size, setSize] = useState('small');
  Object.create(null) instanceof Object
  return (
    <Layout>
      <div style={{ width: '100%', height: '100px', backgroundColor: 'yellow' }}>
        <Header style={{ backgroundColor: 'yellow' }}>
          <Space size={size}>
            <Button
              onClick={() => setChooseButton(1)}
              style={(chooseButton === 1) ? { borderColor: 'red', backgroundColor: '#FFCC99' } : {}}
            >Ngôi sao
            </Button>
            <Button
              onClick={() => setChooseButton(2)}
              style={(chooseButton == 2) ? { borderColor: 'red', backgroundColor: '#FFCC99' } : {}}
            >
              Vẽ tay
            </Button>
          </Space>
        </Header>
      </div>
      <Layout style={{}} >
        {/* <Sider>Sider</Sider>  */}


        <Content>
          {chooseButton == 1
            ?
            <Suspense fallback={<div>Loading...</div>}>
              <Start />
            </Suspense>
            :
            <Suspense fallback={<div>Loading...</div>}>
              <Draw />
            </Suspense>
          }

        </Content>
      </Layout>

      <Footer>Footer</Footer>
    </Layout>
  )
}

export default LayoutAll
