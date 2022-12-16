import { Button, Layout, Space } from 'antd'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'
import React, { useState } from 'react'
import { Draw } from '../Draw/Draw'
import { Start } from '../Start'

function LayoutAll() {
  const [chooseButton, setChooseButton] = useState(0)
  const [size, setSize] = useState('small');
  return (
    <Layout>
      <div style={{ width: '100%', height: '100px', backgroundColor: 'yellow' }}>


        <Header style={{ backgroundColor: 'yellow' }}>
          <Space size={size}>
            <Button
              onClick={() => setChooseButton(1)}
              style={(chooseButton == 1) ? { borderColor: 'red', backgroundColor: '#FFCC99' } : {}}
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
            ? <Start />
            : <Draw />
          }

        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  )
}

export default LayoutAll
