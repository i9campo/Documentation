import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';

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
