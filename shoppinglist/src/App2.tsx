import { useState } from 'react';
import { Container } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './App.css'
import AddItem from './assets/components/AddItems';

export type Item = {
    product: string;
    amount: string;
}

function App() {
    const [items, setItems] = useState<Item[]>([]);

    const addItem = (item: Item) => {
        setItems([item, ...items]);
    }

    return (
        <>
            <Container>
                <AppBar position='static'>
                    <Toolbar>
                        <Typography variant="h6">
                            장바구니
                        </Typography>
                    </Toolbar>
                </AppBar>
                <AddItem addItem={addItem}/> {/* 속성이랑 속성값 추가 */}
            </Container>
        </>
    )
}

export default App