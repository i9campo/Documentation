import React, { Component } from 'react';
import { Col, Card,   CardBody, CardFooter, Row, Label,  ButtonGroup,  Button, UncontrolledCollapse} from 'reactstrap'; 
import { Btn, InputContato } from 'validatereg'; 

import "../home.scss";
import CodeExample from './exampleInputContato' 

class componentName extends Component {
    constructor(props){
        super(props); 
        this.state={
          cadastro:{
            fax: "", 
            celular: "",
            celularReq: "", 
            faxReq: ""
          },
        }
        this.input_req = this.input_req.bind(this); 
        this.validate_input = this.validate_input.bind(this); 
        this.formValidate = this.formValidate.bind(this); 
  
    } 
  
    input_req = (name, value) => {
        this.setState({cadastro: {...this.state.cadastro, [name]: value}})
    }
  
    //Requisitos do validateReg
    //Utilizado para validar os campos obrigatórios.. 
    validate_input = () => {
        this.setState({formValidate: true})
    }
  
    //Requisito do validateReg 
    //Utilizado para função do <form> do HTML. Tendo as opções de Registrar e atualizar. 
    formValidate = () => {
        // if (this.state.objID) {
        //     Update(this.state.propriedade, this.props);
        // } else {
        //     Register(this.state.propriedade, this.props);
        // }
    }

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                            <h3 className="color_example">Example ("InputContato")</h3>     
                            <h4>Validação dos campos de telefone obrigatórios e não obrigatórios.</h4>
                                <CardBody>
                                    <Card>
                                        <CardBody>

                                            <Label>Fax</Label>
                                                <InputContato name="fax" tpContato={"fax"} req={ false } value={this.state.cadastro.fax} updateValue={this.input_req}/>
                                    
                                            <Label>Celular</Label>
                                                <InputContato name="celular" tpContato={"cel"} req={ false } value={this.state.cadastro.celular} updateValue={this.input_req}/>

                                            <Label>Celular * </Label>
                                                <InputContato name="celularReq" tpContato={"cel"} req={ true } value={this.state.cadastro.celularReq} updateValue={this.input_req}/>
                                    
                                            <Label>Fax *</Label>
                                                <InputContato name="faxReq" tpContato={"fax"} req={ true } value={this.state.cadastro.faxReq} updateValue={this.input_req}/>
                                    
                                            <ButtonGroup className="float-right form-actions">
                                                <Btn validate={this.validate_input} form={() => {this.formValidate()}} value="Salvar"/>
                                            </ButtonGroup>

                                        </CardBody>
                                    </Card>
                                </CardBody>
                            </CardBody>
                            <CardFooter>
                            <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}> Visualizar o Código </Button>
                                <UncontrolledCollapse toggler="#toggler">
                                    <CodeExample /> 
                                </UncontrolledCollapse>
                            </CardFooter>
                        </Card>                    
                    </Col>
                </Row>
            </div>
        );
    }
}

export default componentName;