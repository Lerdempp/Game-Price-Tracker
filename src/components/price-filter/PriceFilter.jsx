import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const PriceFilter = ({ onFilter }) => {
    return (
        <ButtonGroup>
            <Button variant="outline-primary" onClick={() => onFilter(0, 10)}>
                $0 - $10
            </Button>
            <Button variant="outline-primary" onClick={() => onFilter(10, 20)}>
                $10 - $20
            </Button>
            <Button variant="outline-primary" onClick={() => onFilter(20, 50)}>
                $20 - $50
            </Button>
            <Button variant="outline-primary" onClick={() => onFilter(50, Infinity)}>
                $50+
            </Button>
            <Button variant="outline-primary" onClick={() => onFilter(0, Infinity)}>
                All prices
            </Button>
        </ButtonGroup>
    )
}

export default PriceFilter