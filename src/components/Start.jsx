import { Tooltip } from 'antd';
import React, {
    useEffect,
    useLayoutEffect
} from 'react';
import { createRoot } from 'react-dom/client';
import {
    Stage,
    Layer,
    Star,
    Text
} from 'react-konva';
import { Helmet } from 'react-helmet';
let b = 1;

function useConsoleLog(
    stars
) {
    useEffect(() => {
        const a =
            setInterval(
                () => {
                    console.log(
                        'a'
                    );
                },
                1000
            );

        return () => {
            clearInterval(
                a
            );
        };
    }, [
        stars
    ]);
}
function generateShapes() {
    return [
        ...Array(
            10
        )
    ].map(
        (
            _,
            i
        ) => ({
            id: i.toString(),
            x:
                Math.random() *
                window.innerWidth,
            y:
                Math.random() *
                window.innerHeight,
            rotation:
                Math.random() *
                180,
            isDragging: false
        })
    );
}
const INITIAL_STATE =
    generateShapes();

function Start() {
    const [
        stars,
        setStars
    ] =
        React.useState(
            INITIAL_STATE
        );

    const handleDragStart =
        (
            e
        ) => {
            const id =
                e.target.id();
            setStars(
                stars.map(
                    (
                        star
                    ) => {
                        return {
                            ...star,
                            isDragging:
                                star.id ===
                                id
                        };
                    }
                )
            );
        };
    const handleDragEnd =
        (
            e
        ) => {
            setStars(
                stars.map(
                    (
                        star
                    ) => {
                        return {
                            ...star,
                            isDragging: false
                        };
                    }
                )
            );
        };
    const text =
        (
            <span>
                prompt
                text
            </span>
        );

    // useLayoutEffect(() => {
    //   const a = setInterval(() => {
    //     console.log('a')
    //   }, 1000);
    //   return () => {
    //     clearInterval(a)
    //   }
    // }, [stars])

    const a =
        useConsoleLog(
            stars
        );

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>
                    Ngôi
                    sao
                </title>
            </Helmet>
            <Stage
                width={
                    window.innerWidth
                }
                height={
                    window.innerHeight
                }
                style={{
                    marginTop:
                        '10px'
                }}>
                <Layer>
                    {/* <Tooltip placement="topLeft" title={text}> */}
                    <Text text="Kéo thử ngôi sao" />
                    {/* </Tooltip> */}

                    {stars.map(
                        (
                            star
                        ) => (
                            <Star
                                key={
                                    star.id
                                }
                                id={
                                    star.id
                                }
                                x={
                                    star.x
                                }
                                y={
                                    star.y
                                }
                                numPoints={
                                    5
                                }
                                innerRadius={
                                    20
                                }
                                outerRadius={
                                    40
                                }
                                fill="#89b717"
                                opacity={
                                    0.8
                                }
                                draggable
                                rotation={
                                    star.rotation
                                }
                                shadowColor="black"
                                shadowBlur={
                                    10
                                }
                                shadowOpacity={
                                    0.6
                                }
                                shadowOffsetX={
                                    star.isDragging
                                        ? 10
                                        : 5
                                }
                                shadowOffsetY={
                                    star.isDragging
                                        ? 10
                                        : 5
                                }
                                scaleX={
                                    star.isDragging
                                        ? 1.2
                                        : 1
                                }
                                scaleY={
                                    star.isDragging
                                        ? 1.2
                                        : 1
                                }
                                onDragStart={
                                    handleDragStart
                                }
                                onDragEnd={
                                    handleDragEnd
                                }
                                // onMouseEnter={(e) => console.log(e)}
                                onMouseLeave={() =>
                                    console.log(
                                        'khanh'
                                    )
                                }
                            />
                        )
                    )}
                </Layer>
            </Stage>
        </>
    );
}

export default Start;
