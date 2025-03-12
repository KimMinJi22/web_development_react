// import 이미지 변수명 from "경로";
// 컴포넌트 분할을 하면서 경로가 바뀌었습니다.
import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";

const reactDescriptionsKor = [ '근본적인', '결정적인', '핵심적인' ];
const reacrDescriptionsEng = [ 'Fundamental', 'Crucial', 'Core' ];

// max reacrDescriptionsEng.length
// 함수를 직접 넣으니 random 수가 달라짐...같게 하는 방법
function getRandomInt(max) {
  return Math.floor(Math.random() * (max)); // 얘는 return 값은 0 ~ 2의 int 가 반환됨
  // 어떻게? Math.random() * (max + 1) 얘의 범위가 0.xxx ~ 2.xxx 이기 때문
}

// 같은 라인에 컴포넌트가 다수 있다가 분리되기 시작...
function Header2() {
    const indexNum = getRandomInt(reacrDescriptionsEng.length);

    return(
        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1>React 필수 요소 복습</h1>
            <p>
                {reacrDescriptionsEng[getRandomInt(indexNum)]} React concepts you will need for almost any app you are
                going to build!
            </p>

            <br />
            대부분의 앱을 위해 당신이 필요로 할 {reactDescriptionsKor[getRandomInt(indexNum)]} React 개념 학습 😀
        </header>
    );
}

export default Header2;