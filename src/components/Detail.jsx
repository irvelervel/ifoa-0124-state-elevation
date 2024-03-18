import { Alert } from 'react-bootstrap'

const Detail = (props) => (
  <Alert variant="success">
    {props.selected || 'Nessun valore selezionato'}
  </Alert>
)

export default Detail
