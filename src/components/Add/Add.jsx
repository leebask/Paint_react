import { Button, List } from 'antd';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import axiosClient from '../../api/axiosClient';

function Add() {
    const [add, setAdd] = useState({
        a: 0,
        b: 0
    });
    const [respone, setRespone] = useState();

    useEffect(() => {
        axiosClient
            .get('https://catfact.ninja/fact')
            .then((res) => {
                console.log(res.data);
                setRespone(res.data);
            })

            .catch((err) => console.log(err));
    }, [add]);

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Sự thật về mèo</title>
            </Helmet>
            <Button style={{marginTop:'10px',marginBottom:'10px'}} onClick={() => setAdd({ ...add, a: add.a + 1 })}>Next</Button>
            <div> Tổng đã xem: {add.a}</div>
            {/* <Button onClick={() => setAdd({ ...add, b: add.b + 1 })}>Add2</Button>
      <div>{add.b}</div> */}

            <List
                itemLayout="horizontal"
                dataSource={[{ title: respone?.fact }]}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta title={<div>{item.title}</div>} description="Cat Facts" />
                    </List.Item>
                )}
            />
        </div>
    );
}

export default Add;
