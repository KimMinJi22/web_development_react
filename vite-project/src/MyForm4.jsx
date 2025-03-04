import { useState } from "react";

function MyForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    // 나머지 부분을 전부 완성해서 MyForm3.jsx와 동일하게
    // 동작 할 수 있도록 작성하시오.

    // 단, handleChage를 정의하지 말고 연습삼아
    // 각 input의 onChange부분에 화살표 함수를 통해
    // 정의하도록 하겠습니다.

    const handleSubmit = (event) => {
        alert(`welcome ${firstName} ${lastName}`);
        event.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>First Name </label>
            {/* 매개변수(event)가 한개뿐이라 괄호생략 또는 e로 작성가능 */}
            <input type="text" name="firstName" onChange={e => {setFirstName(event.target.value)}} value={firstName}/><br />
            <label>Last Name </label>
            <input type="text" name="lastName" onChange={event => {setLastName(event.target.value)}} value={lastName}/><br />
            <label>Email </label>
            <input type="email" name="email" onChange={(event) => {setEmail(event.target.value)}} value={email}/><br />

            <input type="submit" value="제출" />
        </form>
    );
}

export default MyForm;