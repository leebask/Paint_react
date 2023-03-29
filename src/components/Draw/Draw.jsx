import { Select } from 'antd';
import { Option } from 'antd/es/mentions';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Helmet } from 'react-helmet';
import { Stage, Layer, Line, Text } from 'react-konva';

function Draw() {
  const [tool, setTool] = React.useState('pen');
  const [lines, setLines] = React.useState([]);
  const isDrawing = React.useRef(false);

  const handleMouseDown = (e) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { tool, points: [pos.x, pos.y] }]);
  };

  const handleMouseMove = (e) => {
    // no drawing - skipping
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];
    // add point
    lastLine.points = lastLine.points.concat([point.x, point.y]);

    // replace last
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  return (
    <div style={{ marginTop: '10px' }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Vẽ tay</title>
      </Helmet>
      <Select
        value={tool}
        onChange={(e) => {
          setTool(e);
        }}>
        <Select.Option value="pen">Bút</Select.Option>
        <Select.Option value="eraser">Tẩy</Select.Option>
      </Select>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        onTouchMove={handleMouseMove}
        >
        <Layer>
          <Text text="Vẽ bên dưới" x={5} y={30} />
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke="#df4b26"
              strokeWidth={5}
              tension={0.5}
              lineCap="round"
              lineJoin="round"
              globalCompositeOperation={line.tool === 'eraser' ? 'destination-out' : 'source-over'}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
}
export default Draw;
