import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import * as contentful from 'contentful'
import React, { useState, useEffect } from 'react';
import './../styles/DogInfo.css'

const client = contentful.createClient({
    space: 'pyc53vnzloup',
    environment: 'master', // defaults to 'master' if not set
    accessToken: '7vjrEcg4rZ4Zl6f_ZfzTpl0znUW-0EiTe1Z7l3_qvxA'
})


function DogInfo() {

    const [data, setData] = useState([]);

    const getData = () => {
        client.getEntries({
            content_type: 'accordian'
        })

            .then((response) => {
                setData(response.items);
            })
    }

    useEffect(() => {
        getData();
    }, [])

    const getInformation = () => {

        const outputArray = []
        data.forEach((item) => {
            outputArray.push(
                // <div className="doginfo-alignment">
                <Tab eventKey= {item.fields.breed} title={item.fields.breed}>
                    <p>{item.fields.description} </p>
                </Tab>
                // </div>
            )
        })
         return  <div  className="doginfo-alignment"><Tabs>{outputArray}</Tabs> </div>

    }
    return (
<>
        {getInformation()}
</>
    );
}
export default DogInfo;