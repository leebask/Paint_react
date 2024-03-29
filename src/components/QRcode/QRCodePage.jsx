import React, { useState } from 'react';
import { MinusOutlined, PlusOutlined, CheckOutlined } from '@ant-design/icons';
import { QRCode, Button, Input, Space } from 'antd';
import khanhicon from './khanh.jpg';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';
import TextArea from 'antd/es/input/TextArea';
function QRCodePage() {
  const [size, setSize] = useState(200);
  const [typeInput, setTypeInput] = useState('');
  const [url, setUrl] = useState('https://www.facebook.com/Leebask.KP/');

  const increase = () => {
    setSize((prevSize) => {
      const newSize = prevSize + 10;
      if (newSize > 300) {
        return 300;
      }
      return newSize;
    });
  };
  const decline = () => {
    setSize((prevSize) => {
      const newSize = prevSize - 10;
      if (newSize < 48) {
        return 48;
      }
      return newSize;
    });
  };
  return (
    <Space style={{ display: 'flex', flexDirection: 'column', marginTop: '30px' }}>
      {/* <img ref={khanhicon}></img> */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>QRCode</title>
      </Helmet>
      <Button.Group
        style={{
          marginBottom: 16,
          gap: 5,
          display: 'flex',
          flexDirection: 'column'
        }}>
        <TextArea
          autoSize={{ minRows: 3, maxRows: 5 }}
          style={{ width: '300px' }}
          placeholder="Nhập thông tin cần chuyển QR"
          onChange={(e) => setTypeInput(e.target.value)}
        />
        <Button
          type="primary"
          onClick={(e) => {
            if (typeInput.length > 0) {
              setUrl(typeInput);
              toast.success('Tạo thành công!');
            } else {
              toast.warning('Vui lòng điền thông tin!');
            }
          }}
          icon={<CheckOutlined />}>
          Tạo QRCode
        </Button>
        <Button onClick={decline} disabled={size <= 48} icon={<MinusOutlined />}>
          Smaller
        </Button>
        <Button onClick={increase} disabled={size >= 300} icon={<PlusOutlined />}>
          Larger
        </Button>
      </Button.Group>
      <QRCode errorLevel="H" size={size} iconSize={size / 4} value={url} icon={khanhicon} />
    </Space>
  );
}

export default QRCodePage;
