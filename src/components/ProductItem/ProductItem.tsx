import React from "react"
import { Card, Button } from "react-bootstrap"
import styles from './ProductItem.module.css'

const ProductItem = () => {
    return <>
        <Card style={{ width: '14rem' }}>
            <Card.Img variant="top" src="holder.js/50px" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Button className={styles.btn} variant="primary">Buy</Button>
                <Button className={styles.btn} variant="primary">About</Button>
            </Card.Body>
        </Card>
    </>
}

export default ProductItem