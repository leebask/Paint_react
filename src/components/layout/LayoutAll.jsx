import { Button, Layout, Space } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import React, { lazy, Suspense, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOption } from '../../app/todoSlice';
import Add from '../Add/Add';
import QRCode from '../QRcode/QRCodePage';
import 'react-toastify/dist/ReactToastify.css';
const Start = lazy(() => import('../Start'));
const Draw = lazy(() => import('../Draw/Draw'));

import { FacebookOutlined } from '@ant-design/icons';
import { ToastContainer } from 'react-toastify';

function LayoutAll() {
    const [size, setSize] = useState('small');

    const option = useSelector((state) => state.todos.option);
    const dispatch = useDispatch();

    const setOptionRedux = (value) => {
        dispatch(setOption(value));
    };
    return (
        <>
            <Layout>
                <Header style={{ backgroundColor: 'yellow', display: 'flex', flexWrap: 'wrap', height: 'fit-content' }}>
                    <Space size={size} style={{ height: 'fit-content',flexWrap: 'wrap'}}>
                        <Button
                            onClick={() => setOptionRedux(1)}
                            style={option === 1 ? { borderColor: 'red', backgroundColor: '#FFCC99' } : {}}>
                            Ngôi sao
                        </Button>
                        <Button
                            onClick={() => setOptionRedux(2)}
                            style={option == 2 ? { borderColor: 'red', backgroundColor: '#FFCC99' } : {}}>
                            Vẽ tay
                        </Button>
                        <Button
                            onClick={() => setOptionRedux(3)}
                            style={option === 3 ? { borderColor: 'red', backgroundColor: '#FFCC99' } : {}}>
                            Sự thật về mèo
                        </Button>
                        <Button
                            onClick={() => setOptionRedux(4)}
                            style={option === 4 ? { borderColor: 'red', backgroundColor: '#FFCC99' } : {}}>
                            QR Code
                        </Button>
                    </Space>
                </Header>
                <Layout style={{}}>
                    {/* <Sider>Sider</Sider>  */}

                    <Content>
                        {option == 1 ? (
                            <Suspense fallback={<div>Loading...</div>}>
                                <Start />
                            </Suspense>
                        ) : option === 2 ? (
                            <Suspense fallback={<div>Loading...</div>}>
                                <Draw />
                            </Suspense>
                        ) : option === 3 ? (
                            <Add />
                        ) : (
                            <QRCode />
                        )}
                    </Content>
                </Layout>

                <Footer style={{ display: 'flex', justifyContent: 'center' }}>
                    <a href="https://www.facebook.com/Leebask.KP/">
                        <FacebookOutlined style={{ fontSize: '28px' }} />
                    </a>
                </Footer>
            </Layout>
            <ToastContainer />
        </>
    );
}

export default LayoutAll;
