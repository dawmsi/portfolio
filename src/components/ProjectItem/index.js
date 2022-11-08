import React from 'react'
import { Button, Card } from 'react-bootstrap'
export const Projectitem = () => {
    return (
        <>
            <Card style={{ width: '18rem', border: 0 }}>
                <Card.Img
                    variant="top"
                    src="https://www.site-shot.com/cached_image/E9JMmF-vEe2xzAJCrBEAAw"
                />
                <Card.Body>
                    <Card.Title>Tatto Ink</Card.Title>
                    <Card.Text>Site for tattoo parlor </Card.Text>
                    <Button variant="dark">
                        <a
                            className="link-light"
                            href="https://dawmsi.github.io/tatoo-project/"
                        >
                            Check
                        </a>
                    </Button>
                </Card.Body>
            </Card>
        </>
    )
}
