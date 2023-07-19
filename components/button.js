import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

export default function CalcButton({ value, keyType }) {
  return (
    <>
      <Button type="button" className={keyType}>{value}</Button>
    </>
  );
}

CalcButton.propTypes = {
  value: PropTypes.number,
  keyType: PropTypes.string.isRequired,
};

CalcButton.defaultProps = {
  value: 'Err',
};
