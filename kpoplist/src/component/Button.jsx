// props로 data, setPlaylist를 전달받을 예정
import React from "react";

function Button({ data, setPlaylist, filterType, children}) {

    const handelClick = () => {
        // 버튼의 내용에 따라 플레이리스트를 필터링
        let result = [...data];
    
        if(filterType === 'redvelvet') {
            result = data.filter((song) => song.artist === 'Red Velvet');
        }
    
        if(filterType === 'male') {
            result = data.filter((song) => song.gender === 'male');
        }
    
        if(filterType === 'female') {
            result = data.filter((song) => song.gender === 'female');
        }
    
        const handelClick = () => {
            setPlaylist(result);
        }
    
        console.log(data);
    };

    return <button onClick={handelClick}>{children}</button>
}

export default Button;