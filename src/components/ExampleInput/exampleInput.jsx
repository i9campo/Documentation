import React, { Component } from 'react';
import { Col, Card,CardHeader,  CardBody, CardFooter, Row,  Collapse} from 'reactstrap'; 
import "../home.scss"; 
import "../colorCode/colorFont.scss"



class ExampleInput extends Component {
    render() {
        return (
            <div>
                <Card>
                    <CardBody className="block_code">
                        <h5 className="color_example"> 
                            <span className="class_color">{"class "}</span>
                            {"componentExample"}
                            <span className="component_color">{" extends"}</span> 
                            <span className="componentEx_color">{" Component"}</span>
                            {" { "}
                        </h5>
                        
                        <h5 className="color_example">&emsp; 
                            <span className="class_color">{"constructor"}</span>
                            {" ("}
                            <span className="props_color">{"props"}</span>
                            {"){"}
                        </h5>                            

                        <h5 className="color_example">&emsp; &emsp;{"super(props);"}</h5>
                        <h5 className="color_example">&emsp; &emsp; &emsp;{"this.state={"}</h5>
                        <h5 className="color_example">&emsp; &emsp; &emsp; &emsp;{"cadastro:{"}</h5>
                        <h5 className="color_example">&emsp; &emsp; &emsp; &emsp; &emsp; {"nome: '', "}</h5>
                        <h5 className="color_example">&emsp; &emsp; &emsp; &emsp; &emsp; {"sobrenome: '', "}</h5>
                        <h5 className="color_example">&emsp; &emsp; &emsp; &emsp; {"}"}</h5>
                        <h5 className="color_example">&emsp; &emsp; &emsp;{"}"}</h5>
                        <h5 className="color_example">&emsp; &emsp;{"this.input_req = this.input_req.bind(this)"}</h5>
                        <h5 className="color_example">&emsp; &emsp;{"this.validate_input = this.validate_input.bind(this)"}</h5>
                        <h5 className="color_example">&emsp; &emsp;{"this.formValidate = this.formValidate.bind(this)"}</h5>
                        <h5 className="color_example">&emsp; {"}"}</h5>
                        <br /> 

                        {/* Divisão 1 */}
                        <h5 className="color_example">&emsp; 
                            <span className="componentEx_color">{"input_req"}</span>{" = ( "}
                            <span className="props_color">{" name, value"}</span>{" ) "}
                            <span className="class_color">{" => "}</span>{"{ "}
                        </h5>

                        <h5 className="color_example">&emsp; &emsp; 
                            <span className="this_color">{"this"}</span>{"."}
                            <span className="component_color">{"setState"}</span>{"({"}
                            <span className="state_variavel">{"cadastro"}</span>{": {..."}
                            <span className="this_color">{"this"}</span>{".state.cadastro, [name]: value}})"}
                        </h5>

                        <h5 className="color_example">&emsp; {"}"}</h5>
                        <br /> 

                        {/* Divisão 2 */}
                        <h5 className="color_example">&emsp; 
                            <span className="componentEx_color">{"validate_input"}</span>{" = ( ) "}
                            <span className="class_color">{" => "}</span>{"{ "}
                        </h5>

                        <h5 className="color_example">&emsp; &emsp; 
                            <span className="this_color">{"this"}</span>{"."}
                            <span className="component_color">{"setState"}</span>{"({"}
                            <span className="state_variavel">{" formValidate"}</span>{": "}
                            <span className="this_color">{"true"}</span>{" })"}
                        </h5>
                        <h5 className="color_example">&emsp; {"}"}</h5>
                        <br /> 

                        {/* Divisão 3 */}
                        <h5 className="color_example">&emsp; 
                            <span className="componentEx_color">{"formValidate"}</span>{" = ( ) "}
                            <span className="class_color">{" => "}</span>{"{ "}
                        </h5>
                        <h5 className="comentario">&emsp; &emsp; {"// Código para validação..."}</h5>
                        <h5 className="color_example">&emsp; &emsp; 
                            <span className="componentEx_color">{"console"}</span>{".log("}
                            <span className="class_color">{"this"}</span>{".state."}
                            <span className="state_variavel">{"cadastro"}</span>{")"}
                        </h5>
                        <h5 className="color_example">&emsp; {"}"}</h5>
                        <br/>
         

                        {/* Render */}
                        <h5 className="color_example">&emsp; <span className="componentEx_color">{"render"}</span>{" ( ) {"} </h5>
                        {/* Return */}
                        <h5 className="color_example">&emsp; &emsp; <span className="component_color">{"return "}</span> {"( "}</h5>
                        {/* primeira div */}
                        <h5 className="color_example">&emsp; &emsp; &emsp; {"<"}<span className="elements">{"div"}</span>{">"}</h5>
                        {/* primeiro card */}
                        <h5 className="color_example">&emsp; &emsp; &emsp; &emsp; {"<"}<span className="elements">{"Card"}</span>{">"}</h5>
                        {/* primeiro cardbody */}
                        <h5 className="color_example">&emsp; &emsp; &emsp; &emsp; &emsp;{"<"}<span className="elements">{"CardBody"}</span>{">"}</h5>
                        <br/>
                        {/* Col */}
                        <h5 className="color_example">&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; {"<"}<span className="elements">{"Col "}</span>{" lg='12' >"}</h5>
                        
                        {/* Label */}
                        <h5 className="color_example">&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; {"<"}<span className="elements">{"Label"}</span>{"> Nome </"}<span className="elements">{"Label"}</span>{">"}</h5>
                        {/* InpuT  True */}
                        <h5 className="color_example">&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                            {"<"}<span className="elements">{"InpuT "}</span>{"name='nome' "}
                            {"req={"}<span className="class_color">{"true"}</span>{"}"}
                            {" value={ "}<span className="this_color">{"this"}</span>{".state."}
                            <span className="state_variavel">{"cadastro"}</span>{".nome }"}
                            {" updateValue={ "}<span className="this_color">{"this"}</span>{"."}
                            <span className="componentEx_color">{"input_req"}</span> {"} />"}
                        </h5>
                        <br/>
                        {/* Label */}
                        <h5 className="color_example">&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; {"<"}<span className="elements">{"Label"}</span>{"> Sobrenome </"}<span className="elements">{"Label"}</span>{">"}</h5>
                        {/* InpuT False */}
                        <h5 className="color_example">&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; 
                            {"<"}<span className="elements">{"InpuT "}</span>{"name='sobrenome' "}
                            {"req={"}<span className="class_color">{"false"}</span>{"}"}
                            {"value={ "}<span className="this_color">{"this"}</span>{".state."}
                            <span className="state_variavel">{"cadastro"}</span>{".sobrenome }"}
                            {" updateValue={"}<span className="this_color">{"this"}</span>{"."}
                            <span className="componentEx_color">{"input_req"}</span> {"} />"}
                        </h5>

                        {/* /Col */}
                        <h5 className="color_example">&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; {"</"}<span className="elements">{"Col "}</span>{">"}</h5>
                        <br/>

                        <h5 className="color_example">&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; {"<"}<span className="elements">{"ButtonGroup "}</span><span className="compoentEx_color">{"className"}</span>{"='float-right form-action' >"}</h5>
                        <h5 className="color_example">&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; {" <Btn validate={ this.validate_input } form={ ()=> { this.formValidate()}} value='Salvar' /> "}</h5>
                        <h5 className="color_example">&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; {"</"}<span className="elements">{"ButtonGroup"}</span>{">"}</h5>
                        <br/>


                        <h5 className="color_example">&emsp; &emsp; &emsp; &emsp; &emsp;{"</"}<span className="elements">{"CardBody"}</span>{">"}</h5>
                        <h5 className="color_example">&emsp; &emsp; &emsp; &emsp; {"</"}<span className="elements">{"Card"}</span>{">"}</h5>
                        <h5 className="color_example">&emsp; &emsp; &emsp; {"</"}<span className="elements">{"div"}</span>{">"}</h5>
                        <h5 className="color_example">&emsp; &emsp; {")"}</h5>
                        <h5 className="color_example">&emsp;{"}"}</h5>
                        <h5 className="color_example">{"}"}</h5>

                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default ExampleInput;