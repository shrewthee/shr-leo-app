import Navigation from "./../components/Navigation";
import Footer from './../components/Footer'

function Layout({children}) {
    return ( 

        <>
        <Navigation></Navigation>
        <div className="mt-5 mb-5" >
        {children}
        </div>
        <Footer></Footer>
        </>
     );
}

export default Layout;