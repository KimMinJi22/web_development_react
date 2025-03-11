import { useState } from 'react';
import { Container } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// 쇼핑 항목을 표시하는 목록 관련 Component들을 import
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

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

                <List>
                    {
                        items.map((item, index) => 
                            <ListItem key={index} divider> {/* divider 구분 선 */}
                                <ListItemText 
                                    primary={item.product}
                                    secondary={item.amount} />
                            </ListItem>
                        )
                    }
                </List>

            </Container>
        </>
    )
}

export default App