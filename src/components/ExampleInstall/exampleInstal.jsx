import React, { Component } from 'react';
import { Col, Card,CardHeader,  CardBody, CardFooter, Row } from 'reactstrap'; 
import "../home.scss"; 


class componentName extends Component {

    render() {
        return (
            <div>
                <Card>
                    <CardBody className="block_code">
                        <h5><span class="color_code">npm install </span> <span class="color_example"> validatereg</span></h5>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default componentName;