import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [ loading, setLoading ] = useState(true);
  const [ coins, setCoins ] = useState([]);

  // setLoading(false);를 적용하게 되는 시점이 언제인가? -> loading이 끝났을때 = api 2000개를 다 가져왔을때
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
    .then(response => response.json()) 
    // .then(json => console.log(json));
    .then(json => { 
      setCoins(json);
      setLoading(false);
    })
  }, []);
  console.log(coins);

  return (
    <div>
      <h1>Coin Price Tracker</h1>
      { loading ? <strong>Loading...⏰</strong> : null } {/* 값이 들어있으면 무족건 ture */}
    </div>
  )
}

export default App
