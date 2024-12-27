import DogInfo from "../components/DogInfo";
import Layout from "./Layout";
import Container from 'react-bootstrap/Container';


function Information() {
    return ( 
        <Layout>
        <Container>
        <DogInfo></DogInfo>
        </Container>
        </Layout>

     );
}

export default Information;