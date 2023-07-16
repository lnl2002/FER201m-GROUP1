import { useState } from "react";
import { Container } from "react-bootstrap";
import DefaultLayout from "../layouts/DefaultLayout";

const Page404 = () => {
    return ( 
        <DefaultLayout>
            <Container className="page-404">
                <div className="error-image d-flex justify-content-center">
                    <img src="../../assets/images/404.png"></img>
                </div>
                <div className="text-center">
                    <h3>Page not found</h3>
                </div>
            </Container>
        </DefaultLayout>
     );
}
 
export default Page404;