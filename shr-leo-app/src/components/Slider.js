

import Carousel from 'react-bootstrap/Carousel';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import './../styles/Slider.css'

function Slider() {
    return ( 

        <Container >
        <Carousel >
            <Carousel.Item>
                <Row>
                    <Col md={4}>
                        <img src="https://newbrunswick.rutgers.edu/sites/default/files/styles/16x9_one_third_768_2x/public/lg_hot_chocolate_0.jpg?itok=tiLZQM7D" className='img-fluid' />

                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

                    </Col>
                    <Col md={4}>
                        <img src="https://newbrunswick.rutgers.edu/sites/default/files/styles/16x9_one_third_768_2x/public/cranberry-chaos-hero.jpg?h=24757f99&itok=Q_gkW2y0" className='img-fluid' />

                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

                    </Col>
                    <Col md={4}>
                        <img src="https://newbrunswick.rutgers.edu/sites/default/files/styles/16x9_one_third_768_2x/public/wearenotmachines-2024_hero.jpg?h=45009142&itok=mFi3GKK5" className='img-fluid' />

                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

                    </Col>
                </Row>

            </Carousel.Item>
            <Carousel.Item>

                <Row>
                    <Col md={4}>
                        <img src="https://newbrunswick.rutgers.edu/sites/default/files/styles/16x9_one_third_768_2x/public/ja25_yanhongjinfoodwaste004_hero.jpg?h=48287e5b&itok=xYToqsdF" className='img-fluid' />

                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

                    </Col>
                    <Col md={4}>
                        <img src="https://newbrunswick.rutgers.edu/sites/default/files/styles/16x9_one_third_768_2x/public/wellness_2.jpg?itok=KcX0Lij1" className='img-fluid' />

                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

                    </Col>
                    <Col md={4}>
                        <img src="https://newbrunswick.rutgers.edu/sites/default/files/styles/16x9_one_third_768_2x/public/lg_nr24vintimillasmejiab4871n.jpg?h=8b7966f8&itok=Y1iqmden" className='img-fluid' />

                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

                    </Col>
                </Row>

            </Carousel.Item>
            <Carousel.Item>
                <Row>
                    <Col md={4}>
                        <img src="https://newbrunswick.rutgers.edu/sites/default/files/styles/16x9_one_third_768_2x/public/promotorasstill2024_hero_5.jpg?itok=Rk880gKt" className='img-fluid' />

                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

                    </Col>
                    <Col md={4}>
                        <img src="https://newbrunswick.rutgers.edu/sites/default/files/styles/16x9_one_third_768_2x/public/painting_to_scale_lapin_hero.jpg?h=45009142&itok=KpFM0cGE" className='img-fluid' />

                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

                    </Col>
                    <Col md={4}>
                        <img src="https://newbrunswick.rutgers.edu/sites/default/files/styles/16x9_one_third_768_2x/public/ja25ashleycaldwellboardofed009_hero.jpg?h=45009142&itok=pTuHHbt8" className='img-fluid' />

                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

                    </Col>
                </Row>
            </Carousel.Item>
        </Carousel>
    </Container>

     );
}

export default Slider;