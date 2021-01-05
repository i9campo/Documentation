import React, { Component } from 'react';

class InputCode extends Component {

  render() {
    return (
      <div>
        <h6 className="color_example"> 
          <span className="class_color">{"class "}</span>
            {"componentExample"}
          <span className="component_color">{" extends"}</span> 
          <span className="componentEx_color">{" Component"}</span>
          {" { "}
        </h6>
        <h6 className="color_example">&emsp; 
          <span className="class_color">{"constructor"}</span>
          {" ("}
          <span className="props_color">{"props"}</span>
          {"){"}
        </h6>                            
        <h6 className="color_example">&emsp; &emsp;{"super(props);"}</h6>
        <h6 className="color_example">&emsp; &emsp; &emsp;{"this.state={"}</h6>
        <h6 className="color_example">&emsp; &emsp; &emsp; &emsp;{"objeto:{"}</h6>
        <h6>&emsp; &emsp; &emsp; &emsp; &emsp; {"nome "} &emsp; &emsp; &emsp; {": ' ' , "}</h6>
        <h6>&emsp; &emsp; &emsp; &emsp; &emsp; {"sobrenome "} &emsp; {": ' ' , "}</h6>
        <h6>&emsp; &emsp; &emsp; &emsp; &emsp; {"obs"} &emsp; &emsp;  &emsp; {" : ' ' "}</h6>
        <h6>&emsp; &emsp; &emsp; &emsp; {"}"}</h6>
        <h6>&emsp; &emsp; &emsp;{"}"}</h6>
        <h6 className="color_example">&emsp; &emsp;{"this._formValidate = this._formValidate.bind(this);"}</h6>
        <h6 className="color_example">&emsp; &emsp;{"this._updateValue  = this._updateValue.bind(this);"}</h6>
        <h6 className="color_example">&emsp; {"}"}</h6>

        {/* _updateValue */}
        <h6 className="color_example">&emsp; 
          <span className="componentEx_color">{"_formValidate"}</span>{" = ( "}
          <span className="props_color">{" e "}</span>{" ) "}
          <span className="class_color">{" => "}</span>{"{ "}
        </h6>

        <h6 className="color_example">&emsp; &emsp; 
          <span className="component_color">{" if"}</span>{"( "}
          <span className="state_variavel">{" e "}</span>{" === "}
          <span className="this_color">{"true"}</span>{" ){"}<br/>
          &emsp;&emsp;&emsp;&emsp;{" // condição para registrar ou atualizar o cadastro. "}<br/>
          &emsp; &emsp;{" } "}
        </h6>

        <h6 className="color_example">&emsp; {"}"}</h6>
        <br /> 

        {/* _updateValue */}
        <h6 className="color_example">&emsp; 
          <span className="componentEx_color">{"_updateValue"}</span>{" = ( "}
          <span className="props_color">{" nameCamp, value "}</span>{" ) "}
          <span className="class_color">{" => "}</span>{"{ "}
        </h6>

        <h6 className="color_example">&emsp; &emsp; 
          <span className="this_color">{"this"}</span>{"."}
          <span className="component_color">{"setState"}</span>{"({ "}
          <span className="state_variavel">{" objeto "}</span>{" : {  ..."}
          <span className="this_color">{"this"}</span>{".state.objeto, [nameCamp]: value }})"}
        </h6>
        <h6 className="color_example">&emsp; {"}"}</h6>
        <br /> 

        <h6 className="color_example">&emsp; 
          <span className="component_color">{"render"}</span>{"( ) {"}<br/>
          <span className="componentEx_color">&emsp;&emsp;{"return"}</span>{"( "}<br/>
          &emsp;&emsp;&emsp;&emsp;{"<"}<span className="elements">{"div"}</span>{">"}<br/>
          &emsp;&emsp;&emsp;&emsp;&emsp;{"<"}<span className="elements">{"Row"}</span>{">"}<br/>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{"<"}<span className="elements">{"Col"}</span> <span className="componentEx_color">{" lg="}</span> <span className="props_color">{'"4"'}</span>{">"} <br/>
        </h6>

        <h6 className="color_example">&emsp;
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{"<"}<span className="elements">{"Label"}</span>{"> Nome : "}{"</"} <span className="elements">{"Label"}</span>{">"}<br/>
        </h6>

        <h6 className="color_example">&emsp;
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{"<"} <span className="elements">{"Input"}</span>
        <span className="componentEx_color">{" name"}</span>{"="}<span className="props_color">{'"nome"'}</span>
        <span className="componentEx_color">{" req"}</span>{"={ "}<span className="this_color">{"true"}</span>{" }"}
        <span className="componentEx_color">{" type"}</span>{"="}<span className="props_color">{'"text"'}</span>
        <span className="componentEx_color">{" value"}</span>{"={ "}<span className="elements">{"this.state.objeto.nome"}</span>{" }"}
        <span className="componentEx_color">{" updateValue"}</span>{"={ "}<span className="elements">{"this._updateValue"}</span>{" } />"}
        </h6>

        <h6 className="color_example">&emsp; 
          &emsp;&emsp;&emsp;&emsp;&emsp;{"</"}<span className="elements">{"Col"}</span>{">"}
        </h6>
        <h6 className="color_example">&emsp; 
          &emsp;&emsp;&emsp;&emsp;&emsp;{"<"}<span className="elements">{"Col"}</span> <span className="componentEx_color">{" lg="}</span> <span className="props_color">{'"4"'}</span>{">"} <br/>
        </h6>

        <h6 className="color_example">&emsp;
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{"<"}<span className="elements">{"Label"}</span>{"> Sobrenome : "}{"</"} <span className="elements">{"Label"}</span>{">"}<br/>
        </h6>

        <h6 className="color_example">&emsp;
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{"<"}<span className="elements">{"Input"}</span>
        <span className="componentEx_color">{" name"}</span>{"="}<span className="props_color">{'"sobrenome"'}</span>
        <span className="componentEx_color">{" req"}</span>{"={ "}<span className="this_color">{"true"}</span>{" }"}
        <span className="componentEx_color">{" type"}</span>{"="}<span className="props_color">{'"text"'}</span>
        <span className="componentEx_color">{" value"}</span>{"={ "}<span className="elements">{"this.state.objeto.sobrenome"}</span>{" }"}
        <span className="componentEx_color">{" updateValue"}</span>{"={ "}<span className="elements">{"this._updateValue"}</span>{" } />"}
        </h6>

        <h6 className="color_example">&emsp; 
          &emsp;&emsp;&emsp;&emsp;&emsp;{"</"}<span className="elements">{"Col"}</span>{">"}
        </h6>

        <h6 className="color_example">&emsp; 
          &emsp;&emsp;&emsp;&emsp;&emsp;{"<"}<span className="elements">{"Col"}</span> <span className="componentEx_color">{" lg="}</span> <span className="props_color">{'"4"'}</span>{">"} <br/>
        </h6>


        <h6 className="color_example">&emsp;
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{"<"}<span className="elements">{"Label"}</span>{"> Obs : "}{"</"} <span className="elements">{"Label"}</span>{">"}<br/>
        </h6>

      <h6 className="color_example">&emsp;
      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{"<"}<span className="elements">{"Input"}</span>
      <span className="componentEx_color">{" name"}</span>{"="}<span className="props_color">{'"obs"'}</span>
      <span className="componentEx_color">{" req"}</span>{"={ "}<span className="this_color">{"true"}</span>{" }"}
      <span className="componentEx_color">{" type"}</span>{"="}<span className="props_color">{'"text"'}</span>
      <span className="componentEx_color">{" value"}</span>{"={ "}<span className="elements">{"this.state.objeto.obs"}</span>{" }"}
      <span className="componentEx_color">{" updateValue"}</span>{"={ "}<span className="elements">{"this._updateValue"}</span>{" } />"}
      </h6>

      <h6 className="color_example">&emsp; 
        &emsp;&emsp;&emsp;&emsp;&emsp;{"</"}<span className="elements">{"Col"}</span>{">"}
      </h6>

      <h6 className="color_example">&emsp; 
        &emsp;&emsp;&emsp;&emsp;{"</"}<span className="elements">{"Row"}</span>{">"}
      </h6>
      <h6 className="color_example">&emsp; 
        &emsp;&emsp;&emsp;&emsp;{"<"}<span className="elements">{"hr"}</span>{"/>"}
      </h6>

      <h6 className="color_example">&emsp; 
        &emsp;&emsp;&emsp;&emsp;{"<"}<span className="elements">{"div"}</span><span className="componentEx_color">{" className"}</span>{"="}<span className="props_color">{'"float-right"'}</span>{" >"}
      </h6>
      <h6 className="color_example">&emsp; 
        &emsp;&emsp;&emsp;&emsp;&emsp;{"<"}<span className="elements">{"Row"}</span>{">"}
      </h6>
      <h6 className="color_example">&emsp; 
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{"<"}<span className="elements">{"Col"}</span>{">"}
      </h6>


      <h6 className="color_example">&emsp;
      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{"<"}<span className="elements">{"Button"}</span>
      <span className="componentEx_color">{" color"}</span>{"="}<span className="props_color">{'"primary"'}</span>
      <span className="componentEx_color">{" value"}</span>{"={ "}<span className="elements">{"Validar"}</span>{" }"}
      <span className="componentEx_color">{" form"}</span>{"={ "}<span className="elements">{"this._formValidate"}</span>{" } />"}
      </h6>

      <h6 className="color_example">&emsp; 
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{"</"}<span className="elements">{"Col"}</span>{">"}
      </h6>
      <h6 className="color_example">&emsp; 
        &emsp;&emsp;&emsp;&emsp;&emsp;{"</"}<span className="elements">{"Row"}</span>{">"}
      </h6>
      <h6 className="color_example">&emsp; 
        &emsp;&emsp;&emsp;&emsp;{"</"}<span className="elements">{"div"}</span>{" >"}
      </h6>

      <h6>&emsp;&emsp;&emsp;{");"}</h6>
      <h6>&emsp;&emsp;{"}"}</h6>


      </div>
    );
  }
}

export default InputCode;