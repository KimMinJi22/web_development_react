function MyList() {
    const data = [ 1,2,3,4,5 ];
    return (
        <>
            <ul>
                {
                    data.map((number, index) => 
                        <li key={index}>ListItem {number}</li>
                    )
                }
            </ul>
        </>
    );
}

export default MyList;