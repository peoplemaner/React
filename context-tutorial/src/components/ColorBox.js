/*import { ColorConsumer } from '../contexts/color';

const ColorBox = () => {
    return (
        <ColorConsumer>
            {value => (
                <>
                    <div
                        style={{
                            width: '64px',
                            height: '64px',
                            background: value.state.color
                        }}
                    />
                    <div
                        style={{
                            width: '64px',
                            height: '64px',
                            background: value.state.subColor
                        }}
                    />
                </>
            )}
        </ColorConsumer>
    );
}*/

import { useContext } from 'react';
import ColorContext from '../contexts/color';

const ColorBox = () => {
    const { state } = useContext(ColorContext);

    return (
        <>
            <div
                style={{
                    width: '64px',
                    height: '64px',
                    background: state.color
                }}
            />
            <div
                style={{
                    width: '64px',
                    height: '64px',
                    background: state.subColor
                }}
            />
        </>
    );
};

export default ColorBox;
