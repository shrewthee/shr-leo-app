
import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Layout from './Layout';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Crudapi() {


    const [data, setData] = useState([]);

    const [name, setName] = useState("");
    const [qty, setQty] = useState();
    const [price, setPrice] = useState();
    const [productid, setProductid] = useState();
    const [rowid, setRowid] = useState();

    const [editmode, setEditmode] = useState(false)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
        getData();
    }, [])

    const getData = () => {


        fetch('https://v1.nocodeapi.com/shruthi/google_sheets/jBtprkhfRJbHTbUf?tabId=Data') // api for the get request
            .then(response => response.json())
            .then(results => {
                setData((results.data))
            }
            );

    }



    const handleNameChange = (e) => {

        setName(e.target.value)
    }

    const handleQtyChange = (e) => {
        setQty(e.target.value)
    }
    const handlePriceChange = (e) => {
        setPrice(e.target.value)
    }

    
    
    const replaceItem = () => {

        fetch("https://v1.nocodeapi.com/shruthi/google_sheets/jBtprkhfRJbHTbUf?tabId=Data", {
            // Setting POST request
            method: "put",

            // Add a body which contains JSON data
            body: JSON.stringify({
                row_id: rowid,
                ProductId: productid,
                ProductName: name,
                ProductQty: qty,
                ProductPrice: price

            }),
           
            // Setting headers
            headers: { "Content-type": "application/json" }
        })
            // Converting response to JSON
            .then(response => response.json())
            .then(myData => {
                console.log("Data updated Successfully");
                // setRefresh(true)
             

            })
            .catch(err => {
                console.error("We get an error:", err);
            });
    }


    const deleteItem = (id) => {
        
        fetch(`https://v1.nocodeapi.com/shruthi/google_sheets/jBtprkhfRJbHTbUf?tabId=Data&row_id=${id}`, {

            method: "DELETE",

        })

            .then(response => response.json())
            .then(myData => {
                console.log("delete data successfullky");
                alert('deleted successfully')
                // setRefresh(true)

            })
            .catch(err => {
                console.error("We get an error:", err);
            });


    }

    const editItem = (id) => {

        setEditmode(true)
        const foundId = data.find(item => item.row_id === id);
        setName(foundId.ProductName)
        setQty(foundId.ProductQty)
        setPrice(foundId.ProductPrice)
        setProductid(foundId.ProductId)
        setRowid(id)
        setShow(true)

    }

    const getContents = () => {
        const output = []
        data.forEach(item => {

            output.push(
                <tr>
                    <td>{item.row_id}</td>
                    <td>{item.ProductId}</td>
                    <td>{item.ProductName}</td>
                    <td>{item.ProductQty}</td>
                    <td>{item.ProductPrice}</td>
                    <td> <Button variant="primary" onClick={() => deleteItem(item.row_id)}>Delete</Button></td>
                    <td> <Button variant="secondary" onClick={() => editItem(item.row_id)}>Edit</Button></td>
                </tr>

            )
        })

        return (
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>Row Id</th>
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




    const postItem = () => {


        fetch("https://v1.nocodeapi.com/shruthi/google_sheets/jBtprkhfRJbHTbUf/addRows?tabId=data", {
            // Setting POST request
            method: "POST",

            // Add a body which contains JSON data
            body: JSON.stringify([{
                ProductId: Math.floor(Math.random() * 100) + 1,
                ProductName: name,
                ProductQty: qty,
                ProductPrice: price

            }]),
            // Setting headers
            headers: { "Content-type": "application/json" }
        })
            // Converting response to JSON
            .then(response => response.json())
            .then(myData => {
                console.log("Data Sent Successfully");
                // setRefresh(true)


            })
            .catch(err => {
                console.error("We get an error:", err);
            });
    }


    const handleSubmit = (e) => {

        e.preventDefault();

        if (editmode) {

            replaceItem();
            setEditmode(false)

        }
        else {


            postItem();


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

export default Crudapi;