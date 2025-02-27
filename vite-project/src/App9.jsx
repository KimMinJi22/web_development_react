import useTitle from "./script/useTitle";
import { useState } from 'react';
import './App.css';

function Counter() {
    // 긁어왔으면 부족한 부분이 있는데 count / setCount
    const [ count, setCount ] = useState(0);
    useTitle(`당신은 ${count}번 클릭했습니다!🎈`);

    return (
        <>
            <h1>카운트 : {count}</h1>
            <br />
            <button onClick={() => setCount((count) => count + 1)}>+1 증가</button>
        </>
    );
}

export default Counter;