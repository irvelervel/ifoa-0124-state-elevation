import { Component } from 'react'
import { ListGroup } from 'react-bootstrap'

class Table extends Component {
  // state = {
  //   selected: undefined,
  // }

  checkSelected = (value) => (value === this.props.selected ? 'selected' : '')

  render() {
    return (
      <>
        <ListGroup className="text-dark">
          <ListGroup.Item
            // onClick={(e) => this.setState({ selected: 'Uno' })}
            onClick={() => {
              // dal componente figlio noi invochiamo la prop "changeAppState", che farà un "this.setState" in App, il componente padre
              this.props.changeAppState('Uno')
            }}
            className={this.checkSelected('Uno')}
          >
            Uno
          </ListGroup.Item>
          <ListGroup.Item
            onClick={() => this.props.changeAppState('Due')}
            className={this.checkSelected('Due')}
          >
            Due
          </ListGroup.Item>
          <ListGroup.Item
            onClick={() => this.props.changeAppState('Tre')}
            className={this.checkSelected('Tre')}
          >
            Tre
          </ListGroup.Item>
        </ListGroup>
        <p className="mt-3">
          Stato del componente App: {this.props.selected || 'undefined'}
        </p>
      </>
    )
  }
}

export default Table
