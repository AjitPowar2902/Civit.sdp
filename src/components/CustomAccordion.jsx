import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomAccordion = ({ items, icon: Icon, bgcolor, className, shouldRender }) => {
  return (
    <Accordion className={className}>
      {items
        .filter(item => !shouldRender || shouldRender(item)) 
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
  shouldRender: PropTypes.func, 
};

CustomAccordion.defaultProps = {
  icon: null,
  bgcolor: 'transparent',
  className: '',
  shouldRender: null,
};

export default CustomAccordion;
