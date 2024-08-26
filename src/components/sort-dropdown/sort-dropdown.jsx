import React from 'react';
import { Dropdown } from 'react-bootstrap';

const SortDropdown = ({ onSort }) => {
  const handleSelect = (eventKey) => {
    onSort(eventKey);
  };

  return (
    <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Sort by Price
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="lowToHigh">Price: Low to High</Dropdown.Item>
        <Dropdown.Item eventKey="highToLow">Price: High to Low</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SortDropdown;
