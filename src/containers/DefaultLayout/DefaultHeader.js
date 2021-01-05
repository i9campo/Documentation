import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../imagens/Logo/Geraldinho.png'; 
import sygnet from '../../imagens/Logo/logo.png'
import croqui from '../../imagens/Eventos/croqui.png'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  constructor(props){
    super(props);
    this.state={
      modal: false,
      modalCroqui: false,
    }
    this.toggle = this.toggle.bind(this); 
    this.toggleCroqui = this.toggleCroqui.bind(this); 
  }

  toggle = () => {
    this.setState({modal: !this.state.modal})
  }

  toggleCroqui = () => {
    this.setState({modalCroqui: !this.state.modalCroqui})
  }

  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;
    return (

      <React.Fragment >
        <div className="animated fadeIn">
          <Modal size="lg" isOpen={this.state.modal}  className={'modal-sm modal-primary ' + this.props.className}>
            <ModalHeader className="center"><center><h3>Contatos</h3></center></ModalHeader>
            <ModalBody>
              <a className="btn btn-outline-success btn_contato" href="https://api.whatsapp.com/send?phone=5561996730204">
                <i style={{ float: "left" }} className="fa fa-whatsapp fa-2x"></i>
                Geraldinho Gonçalves
              </a>
              <br/>
              <br/>
              <center><h2>Venha fazer parte desse sucesso você também!!!</h2></center> 
              <br/>
            </ModalBody>
            <ModalFooter>
              <a className="btn btn-outline-primary btn_voltar" onClick={this.toggle}>Voltar</a>
            </ModalFooter>
          </Modal>

          <Modal size="md" isOpen={this.state.modalCroqui}  className={'modal-sm modal-primary ' + this.props.className}>
            <ModalBody>
              <img src={croqui} width="100%" height="100%" />
            </ModalBody>
            <ModalFooter>
              <a className="btn btn-outline-primary btn_voltar" onClick={this.toggleCroqui}>Voltar</a>
            </ModalFooter>
          </Modal>
        </div>

        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        {/* <AppNavbarBrand full={{ src: logo, width: 89, height: 45, alt: 'Geraldinho Eventos' }} minimized={{ src: sygnet, width: 30, height: 30, alt: 'Fagama Art' }} /> */}
        <AppNavbarBrand />
        <AppSidebarToggler className="d-md-down-none" display="lg"/>
          <Nav className="d-md-down-none" navbar>
            {/* <NavItem className="px-3">
              <NavLink to="/dashboard" className="nav-link" >Principal</NavLink>
            </NavItem>
            <NavItem className="px-3">
              <a className="btn btn-link" onClick={this.toggle}>Contato</a>
            </NavItem>
            <NavItem className="px-3">
              <a className="btn btn-link" onClick={this.toggleCroqui} >Croqui</a>
            </NavItem> */}
          </Nav>
          <Nav className="ml-auto" navbar>
          </Nav>

          <Nav navbar>
            {/* <NavItem className="px-3">
              <NavLink to="/dashboard" className="nav-link" >Principal</NavLink>
            </NavItem>
            <NavItem className="px-3">
                <a className="btn btn-link" onClick={this.toggleCroqui} >Croqui</a>
            </NavItem>
            <NavItem className="px-3">
              <a className="btn btn-link" onClick={this.toggle}>Contato</a>
            </NavItem> */}
          </Nav>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
