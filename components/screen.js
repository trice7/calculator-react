import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Screen = ({ value }) => (
  <Form.Control type="text" placeholder="" value={value} readOnly />
);

Screen.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Screen;
