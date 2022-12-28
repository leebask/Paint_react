import { Button, Layout, Space } from 'antd'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'
import React, { lazy, Suspense, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setOption } from '../../app/todoSlice'
import Add from '../Add/Add'
const Start = lazy(() => import('../Start'))
const Draw = lazy(() => import('../Draw/Draw'));

function LayoutAll() {
  const [size, setSize] = useState('small');

  const option = useSelector(state => state.todos.option)
  const dispatch = useDispatch()

  const setOptionRedux = (value) => {
    dispatch(setOption(value))
  }
  return (
    <Layout>
      <div style={{ width: '100%', height: '100px', backgroundColor: 'yellow' }}>
        <Header style={{ backgroundColor: 'yellow' }}>
          <Space size={size}>
            <Button
              onClick={() => setOptionRedux(1)}
              style={(option === 1) ? { borderColor: 'red', backgroundColor: '#FFCC99' } : {}}
            >Ngôi sao
            </Button>
            <Button
              onClick={() => setOptionRedux(2)}
              style={(option == 2) ? { borderColor: 'red', backgroundColor: '#FFCC99' } : {}}
            >
              Vẽ tay
            </Button>
            <Button
              onClick={() => setOptionRedux(3)}
              style={(option === 3) ? { borderColor: 'red', backgroundColor: '#FFCC99' } : {}}
            >
              Cộng
            </Button>
          </Space>
        </Header>
      </div>
      <Layout style={{}} >
        {/* <Sider>Sider</Sider>  */}


        <Content>
          {option == 1
            ?
            <Suspense fallback={<div>Loading...</div>}>
              <Start />
            </Suspense>
            :
            option === 2
              ?
              <Suspense fallback={<div>Loading...</div>}>
                <Draw />
              </Suspense>
              :
              <Add />

          }

        </Content>
      </Layout>

      <Footer>Footer</Footer>
    </Layout>
  )
}

export default LayoutAll
