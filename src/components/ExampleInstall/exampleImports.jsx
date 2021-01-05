import React, { Component } from 'react';
import { Col, Card,CardHeader,  CardBody, CardFooter, Row } from 'reactstrap'; 
import "../colorCode/colorFont.scss"; 


class componentName extends Component {

    render() {
        return (
            <div>
                <Card>
                    <CardBody className="block_code">
                       <p  className="code-example">Utilizado em cadastros do tipo texto.</p>
                       <h5 className="code-example"><span className="elements">import</span>{" { InpuT } "}<span className="elements">from</span><span className="render_color">{" 'validatereg'"}</span></h5>
                       <hr className="code-example"/>
                       <p  className="code-example">Utilizado em cadastros do tipo CPF e CNPJ.</p>
                       <h5 className="code-example"><span className="elements">import</span>{" { InputRegistro } "}<span className="elements">from</span><span className="render_color">{" 'validatereg'"}</span></h5>
                       <hr className="code-example"/>
                       <p  className="code-example">Utilizado em cadastros do tipo Fax e Cel.</p>
                       <h5 className="code-example"><span className="elements">import</span>{" { InputContato } "}<span className="elements">from</span><span className="render_color">{" 'validatereg'"}</span></h5>
                       <hr className="code-example" /> 
                       <p  className="code-example">Botão de Validação</p>
                       <h5 className="code-example"><span className="elements">import</span>{" { Btn } "}<span className="elements">from</span> <span className="render_color">{" 'validatereg'"}</span></h5>
                       <hr className="code-example" /> 
                       <p  className="code-example">Utilização com combinação</p>
                       <h5 className="code-example"><span className="elements">import</span>{" { InpuT, InputRegistro, InputContato, Btn } "}<span className="elements">from</span> <span className="render_color">{" 'validatereg'"}</span></h5>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default componentName;