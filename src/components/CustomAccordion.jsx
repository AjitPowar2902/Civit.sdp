import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomAccordion = ({ items, icon: Icon, bgcolor, className, shouldRender }) => {
  return (
    <Accordion className={className}>
      {items
        .filter(item => !shouldRender || shouldRender(item)) // Conditional rendering
        .map((item, index) => (
          <Accordion.Item eventKey={index.toString()} key={index} className="mb-3" style={{ backgroundColor: bgcolor }}>
            <Accordion.Header>
              {Icon && <Icon className="me-2" />}
              {item.title}
            </Accordion.Header>
            <Accordion.Body className="p-0">
              <item.content />
            </Accordion.Body>
          </Accordion.Item>
        ))
      }
    </Accordion>
  );
};

CustomAccordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.elementType.isRequired,
    })
  ).isRequired,
  icon: PropTypes.elementType,
  bgcolor: PropTypes.string,
  className: PropTypes.string,
  shouldRender: PropTypes.func, // Optional function to conditionally render items
};

CustomAccordion.defaultProps = {
  icon: null,
  bgcolor: 'transparent',
  className: '',
  shouldRender: null, // Default to no filtering
};

export default CustomAccordion;
