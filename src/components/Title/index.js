import React from 'react'
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap'
import { useLocation, Link } from 'react-router-dom'
import './Title.scss'
export const Title = ({ isLight }) => {
    const location = useLocation()
    const breadCrumbView = () => {
        const { pathname } = location
        const pathnames = pathname.split('/').filter((item) => item)
        const capatilize = (s) => s.charAt(0).toUpperCase() + s.slice(1)
        return (
            <>
                <Col className="title__col">
                    <Container className="title__container">
                        <Row
                            className={
                                isLight
                                    ? 'title__row bg-light text-dark'
                                    : ' title__row bg-dark text-light'
                            }
                        >
                            <Breadcrumb className="title__col">
                                {pathnames.map((name, index) => {
                                    const routeTo = `/${pathnames
                                        .slice(0, index + 1)
                                        .join('/')}`
                                    const isLast =
                                        index === pathnames.length - 1
                                    return isLast ? (
                                        <Breadcrumb.Item key={name} active>
                                            {capatilize(name)}
                                        </Breadcrumb.Item>
                                    ) : (
                                        <Breadcrumb.Item
                                            key={name}
                                            linkAs={Link}
                                            linkProps={{ to: `${routeTo}` }}
                                            className={
                                                isLight
                                                    ? 'text-dark'
                                                    : 'text-light'
                                            }
                                        >
                                            {capatilize(name)}
                                        </Breadcrumb.Item>
                                    )
                                })}
                            </Breadcrumb>
                        </Row>
                    </Container>
                </Col>
            </>
        )
    }
    return <>{breadCrumbView()}</>
}
