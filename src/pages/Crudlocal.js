
import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Layout from './Layout';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Crudlocal() {

    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const [qty, setQty] = useState();
    const [price, setPrice] = useState();
    const [productid, setProductid] = useState();
    const [editmode,setEditmode] = useState(false)
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        setData(products)
    }

    
    const products = [
        {
            'ProductId': 1,
            'ProductName': 'ipad',
            'ProductQty': 200,
            'ProductPrice': 900
        },
        {
            'ProductId': 2,
            'ProductName': 'ipad',
            'ProductQty': 200,
            'ProductPrice': 900
        },
        {
            'ProductId': 3,
            'ProductName': 'mac',
            'ProductQty': 200,
            'ProductPrice': 900
        },
        {
            'ProductId': 4,
            'ProductName': 'pc',
            'ProductQty': 200,
            'ProductPrice': 900
        },
        {
            'ProductId': 5,
            'ProductName': 'iphone',
            'ProductQty': 200,
            'ProductPrice': 900
        },
    ]



    const handleNameChange = (e) => {

        setName(e.target.value)
    }

    const handleQtyChange = (e) => {
        setQty(e.target.value)
    }
    const handlePriceChange = (e) => {
        setPrice(e.target.value)
    }

    const deleteItem = (id) => {
        setData(data.filter(a => a.ProductId !== id))
   }

   const editItem = (id) => {

    setEditmode(true)
    const foundId = data.find(item => item.ProductId === id);
    setName(foundId.ProductName)
    setQty(foundId.ProductQty)
    setPrice(foundId.ProductPrice)
    setProductid(foundId.ProductId)
    setShow(true)

   }
    const getContents = () => {
        const output = []
        data.forEach(item => {

            output.push(
                <tr>
                    <td>{item.ProductId}</td>
                    <td>{item.ProductName}</td>
                    <td>{item.ProductQty}</td>
                    <td>{item.ProductPrice}</td>
                    <td> <Button variant="primary" onClick={() => deleteItem(item.ProductId)}>Delete</Button></td>
                    <td> <Button variant="secondary" onClick={() => editItem(item.ProductId)}>Edit</Button></td>
                </tr>

            )
        })

        return (
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>Product Id</th>
                        <th>Product Name</th>
                        <th>Product Qty</th>
                        <th>Product Price</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {output}
                </tbody>
            </Table>
        )


    }


    const resetForm = () => {

        setName("")
        setQty("")
        setPrice("")


    }
    const handleSubmit = (e) => {

        e.preventDefault();

        if (editmode)
        {

            const replaceObj =  {
                'ProductId':productid,
                'ProductName': name,
                'ProductQty': qty,
                'ProductPrice': price
            }

            const newArray = data.map((obj) => obj.ProductId === replaceObj.ProductId ? replaceObj : obj);
            setData(newArray)
            setEditmode(false)

        }
        else
        {
        setData([
            ...data, {
                'ProductId': Math.floor(Math.random() * 100) + 1,
                'ProductName': name,
                'ProductQty': qty,
                'ProductPrice': price
            }
        ])
    }
        resetForm()
        handleClose();


    }
    return (
        <Layout>
            <Container >
                <Row className='m-2'>
                    <Col md={3}>
                    <Button variant="primary" onClick={handleShow} >Add New Product</Button>
                    </Col>
                </Row>
                <Row>


                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                            <Form onSubmit={handleSubmit} >
                                <Form.Group className="mb-3" controlId="ProductForm.ProductName">
                                    <Form.Control type="text" placeholder="Product Name"
                                        value={name}
                                        onChange={handleNameChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="ProductForm.ProductQry">
                                    <Form.Control type="text" placeholder="Product Qty"
                                        value={qty}
                                        onChange={handleQtyChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="ProductForm.ProductPrice">
                                    <Form.Control type="text" placeholder="Product Price"
                                        value={price}
                                        onChange={(e) => handlePriceChange(e)}

                                    />
                                </Form.Group>
                                {/* <Button variant="primary" type="submit">
                            Submit
                        </Button> */}
                            </Form>

                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleSubmit}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    {getContents()}

                </Row>


            </Container>
        </Layout>


    );
}

export default Crudlocal;