import { Box2Container, Box4Container } from "../containers/BoxdulContainers";

export function Box1({ number }) {
    return (
        <div className="box">
        <h3>number: {number}</h3>
            <Box2Container />
        </div>
    );
}

export function Box2({ number }) {
    return (
        <div className="box">
        <h3>number: {number}</h3>
            <Box3 />
        </div>
    );
}

function Box3() {
    return (
        <div className="box">
            <Box4Container />
        </div>
    );
}

export function Box4(props) {
    const { number, isData, counterIncrease, counterDecrease, isDataChange } = props;
    return (
        <div className="box">
            <h3>number: {number}</h3>
            <button onClick={counterIncrease}> + </button>
            <button onClick={counterDecrease}> - </button>

            <div>isData {`${isData}`}</div>
            <button onClick={isDataChange}>change</button>
        </div>
    );
}