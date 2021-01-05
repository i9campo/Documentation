import React, { Component } from 'react';
import { Card, CardBody, Input, Button , Col, Row} from 'reactstrap'; 
import { InputVal, Btn,  InputContato, InputRegistro } from 'validatereg'; 

export default class componentName extends Component {
    constructor(props){
        super(props); 
        this.state={
            cliente:{
                nome: '', 
                fone: '', 
                fax: '',
                cidade: '', 
                registro1: '',
                registro2: ''
            }
        }
        this.input_req = this.input_req.bind(this); 
    } 

    input_req = (name, value) => {
        this.setState({cliente: {...this.state.cliente, [name]: value}})
    }

    validate_input = () => {
        this.setState({formValidate: "form-control inputError"})
    }

    formValidate = () => {
        console.log(this.state.cliente)
    }

    render() {
        return (
            <div>
                <Card>
                    <CardBody>
                        <Col lg="5">
                            <Card>
                                <CardBody>
                                    <Col lg="12">
                                        <Row>
                                            <InputVal name="nome"  req={ true } value={this.state.cliente.nome} updateValue={this.input_req}/>
                                            <InputContato name="fone" tpContato={"fone"} req={ true } value={this.state.cliente.fone} updateValue={this.input_req}/>
                                        </Row>
                                    </Col>
                                    <Col lg="12">
                                        <Row>
                                            <InputContato name="fax" tpContato={"fax"} req={ true } value={this.state.cliente.fax} updateValue={this.input_req}/>
                                            <InputVal name="cidade"  req={ true } value={this.state.cliente.cidade} updateValue={this.input_req}/>
                                        </Row>
                                    </Col>
                                    <Col lg="12">
                                        <Row>
                                            <InputRegistro name="registro1" registro={"CPF"} req={ true } value={this.state.cliente.registro1} updateValue={this.input_req}/>
                                            <InputRegistro name="registro2" registro={"CNPJ"} req={ true } value={this.state.cliente.registro2} updateValue={this.input_req}/>
                                        </Row>
                                    </Col>

                                </CardBody>

                            </Card>

                           
                            <Btn validate={this.validate_input} form={this.formValidate} value="Teste"/>
                        </Col>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

