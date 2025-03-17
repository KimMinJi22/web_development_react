import './App.css';
import Main from './component/Main.jsx';
import { useState } from 'react';

function App() {

  const data = [
    {
      title: "Psycho",
      artist: "Red Velvet",
      releaseDate: "2019.12.23",
      gender: "female",
    },
    {
      title: "Fell My Rhythm",
      artist: "Red Velvet",
      releaseDate: "2022.03.21",
      gender: "female",
    },
    {
      title: "Beatbox",
      artist: "NCT DREAM",
      releaseDate: "2022.05.30",
      gender: "male",
    },
    {
      title: "Attention",
      artist: "NewJeans",
      releaseDate: "2022.08.01",
      gender: "female",
    },
    {
      title: "Rush Hour",
      artist: "Crush (feat. j-hope for BTS)",
      releaseDate: "2022.09.22",
      gender: "male",
    },
  ];

  const [ playlist, setPlaylist ] = useState(data);

  return (
    <>
      <h1>K-POP 플레이 리스트</h1>
      <Main data={data} playList={playlist} setPlaylist={setPlaylist} />
    </>
  );
}

export default App;
