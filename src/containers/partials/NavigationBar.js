import React from 'react'
import {
  Collapse,
  Container,
  Button,
  Form,
  Col,
  Input,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class NavigationBar extends React.Component {
  /**
   * @constructor
   * @param props
   */
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }

  /**
   * Manage the responsive menu when the device need it
   * @returns {void}
   */
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  /**
   * Display left panel from menu
   * @returns {JSX}
   */
  renderLeftMenu() {
    return (
      <Nav navbar>

        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>Découvrir</DropdownToggle>
          <DropdownMenu>
            <DropdownItem href='/discover/movies'>Films</DropdownItem>
            <DropdownItem href='/discover/series'>Séries
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>

        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>Films</DropdownToggle>
          <DropdownMenu>
            <DropdownItem href='/'>Populaires</DropdownItem>
            <DropdownItem href='/'>Mieux notés</DropdownItem>
            <DropdownItem href='/'>Prochainement</DropdownItem>
            <DropdownItem href='/'>En salles</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>

        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>Séries</DropdownToggle>
          <DropdownMenu>
            <DropdownItem href='/'>Populaires</DropdownItem>
            <DropdownItem href='/'>Mieux notées</DropdownItem>
            <DropdownItem href='/'>En cours</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>

      </Nav>
    )
  }

  /**
   * Display search bar for menu
   * @returns {JSX}
   */
  renderSearchBar() {
    return (
      <Form className='form-inline my-2 col-lg-7'>

        <Col className='input-group'>
          <Input type='text' name='search' placeholder='Rechercher un film, une série, un acteur, ...' />
          <span className='input-group-btn' style={{marginRight: '-2px'}}>
            <Button color='info'>
              <FontAwesomeIcon icon='search' />
            </Button>
          </span>
        </Col>

      </Form>
    )
  }

  /**
   * Display right panel for menu
   * @returns {JSX}
   */
  renderRightMenu() {
    return (
      <Nav className='ml-auto' navbar>

        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>FR</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>FR</DropdownItem>
            <DropdownItem>EN</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>

        <NavItem>
          <NavLink href='/login'>Connexion</NavLink>
        </NavItem>

      </Nav>
    )
  }

  /**
   * Main render
   * @returns {JSX}
   */
  render() {
    return (
      <Navbar color='dark' dark expand='lg' fixed='top'>
        <Container>
          <NavbarBrand href='/'>
            <img src='http://placehold.it/81x72' width='81' height='72' alt='logo' />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>

            {this.renderLeftMenu()}
            {this.renderSearchBar()}
            {this.renderRightMenu()}

          </Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default NavigationBar
