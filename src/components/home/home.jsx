import React, { Component } from 'react';
import { Col, Card, CardHeader, CardBody, CardFooter, Row, ButtonGroup,  Button, UncontrolledCollapse} from 'reactstrap'; 


class componentName extends Component {
  render() {
    return (
      <div>
        <Row >
            <Col xl="12">
              <Card>
                <CardHeader><h3>SIGMA WEBAPI CONFIG CONNECTION</h3></CardHeader>
                <CardBody>
                  <p>Link para conexão com <b>API LOCAL</b> ("<a href='https://sigma.sigma.local'>https://sigma.sigma.local</a>").</p>
                  <ul>
                    <li>Comando utilizado no visual code na <b>"ABA": NPM SCRIPTS</b>(<b>"start-local"</b>).</li>
                    <li>Comando de linha via <b>CMD</b> (<b>"npm run start-local"</b>).</li>
                  </ul>
                  <p>Link para conexão com <b>API Remotamente</b> ("<a href='https://sigma.siccerrado.com.br'>https://sigma.siccerrado.com.br</a>").</p>
                  <ul>
                    <li>Comando utilizado no visual code na <b>"ABA": NPM SCRIPTS</b>(<b>"start-ext"</b>).</li>
                    <li>Comando de linha via <b>CMD</b>(<b>"npm run start-ext"</b>).</li>
                  </ul>

                  <p>Link para conexão com API Executada pelo <b>Visual studio</b> ("<a href='https://localhost:40080'>https://localhost:40080</a>").</p>
                  <ul>
                    <li>Comando utilizado no visual code na <b>"ABA": NPM SCRIPTS</b>(<b>"start-api"</b>).</li>
                    <li>Comando de linha via <b>CMD</b>(<b>"npm run start-ext"</b>).</li>
                  </ul>
                </CardBody>
                <CardFooter>
                  <p><b>Detalhe: Esses link's são referente a conexão com a API.</b></p>
                  <p><b>API LOCAL</b> não será necessário a execução do projeto feito no visual studio <b>("SIGMA.WEBAPI2")</b>,</p>
                  <p>você pode executar o projeto feito em react no visual code diretamente com o <b>"start-local"</b>.</p>
                  <p><b>API REMOTA</b> será necessário o acesso ao link para ter autorização da página devido ao certificado SSL,</p>
                  <p>após o acesso do link, você pode executar o projeto do react remotamente com o <b>"start-ext"</b>.</p>
                  <p>Conexão com a API você deverá executar os dois projetos, a webapi e o react com o <b>"start-api"</b>.</p>
                  <p><b>Obs:</b> você pode acessar o CMD('Prompt comando') dentro do visual code através destas teclas de atalho. <b>("CTRL+SHIFT+ASPAS")</b></p>
                </CardFooter>
              </Card>
            </Col>
        </Row>
        <Row>
          <Col xl="12">
          <Card>
            <CardHeader><h3>PUBLICANDO O PROJETO.</h3></CardHeader>
            <CardBody>
              <p>Publicando o projeto REACT no IIS. </p>
              <ul>
                <li>Comando utilizado no visual code na <b>"ABA": NPM SCRIPTS</b>(<b>"build-ext"</b>)</li>
                <li>Comando de linha via <b>CMD</b>(<b>"npm run build-ext"</b>).</li>
              </ul>
              <p>Publicando o WEBAPI2 no IIS</p>
              <ul>
                <li>Basta abrir o projeto dentro do visual studio e clicar no projeto dentro da pasta <br/>
                    "1-Services", "Sigma.WebApi2" com o botão direito do mouse depois selecionar a opção publicar ou publish.<br/>
                    Toda configuração já está feita, então só publicar. 
                </li>
              </ul>
            </CardBody>
            <CardFooter>
              <p><b>Detalhe:</b> Caso o projeto não salve na pasta correta, a pasta onde fica salvo o projeto webapi2 fica dentro do servidor <b>"f - IIS/Sigma"</b>.</p>
              <br/>
              <p><b>Obs:</b> A publicação do projeto react é manual, após a conclusão do <b>"build-ext"</b>. Automaticamente será criado uma pasta chamada build,</p>
              <p>então você abre a pasta é copie todos os arquivos para dentro da pasta no servidor que fica localizado no <b>"f - IIS/SigmaDev"</b></p>

            </CardFooter>
          </Card>
          </Col>
        </Row>

      </div>
    );
  }
}

export default componentName;