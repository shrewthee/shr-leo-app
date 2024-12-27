import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Images() {

    const [data, setData] = useState([]);

    const getData = () => {
        fetch('https://picsum.photos/v2/list') // api for the get request
        .then(response => response.json())
        .then(data => 
            
            {
                console.log(data)
                setData(data)

            }
    
    );
    }

    useEffect(() => {
        getData();
    }, [])

    const getContents = () => {

        const outputArray=[]

        data.forEach((item,index) => {
            outputArray.push (
                <Col md={3} key={index} className='mb-4' >
                 
                <img  style={{height:"250px"}} src={item.download_url} className='img-fluid'/>
                <p>{item.author}</p>
                </Col>
            )

           
        })

        return <Row>{outputArray}</Row>
    }

    return ( <>

    {getContents()}
    </>  );
}

export default Images;