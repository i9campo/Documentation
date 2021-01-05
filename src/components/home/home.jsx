import React, { Component, useState } from 'react';
import { Col, Card, CardHeader,  CardBody, CardFooter, Row, Label,  ButtonGroup,  Button, UncontrolledCollapse} from 'reactstrap'; 
import { toast } from 'react-toastify'; 

import CodeInstall from '../ExampleInstall/exampleInstal'
import CodeImports from '../ExampleInstall/exampleImports'




class componentName extends Component {
  render() {
    return (
      <div>
      {/* <Col xl="12" className="header_item">
        <div className="jumbotron header_item" >
          <center>
            <h1 className="color_example">ValidateReg</h1>
          </center>
        </div>
      </Col> */}
        <Row >
            <Col xl="12">
              <Card>
                <CardBody>
                    <h3>Instalação via NPM</h3>
                </CardBody>
                <CardFooter>
                    <CodeInstall /> 
                </CardFooter>
              </Card>
            </Col>
        </Row>

        <br/>

        <Row >
        <Col xl="12">
          <Card>
            <CardBody>
                <h3>Import's</h3>
            </CardBody>
            <CardFooter>
                <CodeImports /> 
            </CardFooter>
          </Card>
        </Col>
    </Row>



      </div>
    );
  }
}

export default componentName;