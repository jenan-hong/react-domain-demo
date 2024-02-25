import React from 'react';

/**
 * This Button component is domain-agnostic because it does not contain any business logic specific to a particular domain.
 * It's a reusable UI element that accepts children (the button's label) and an onClick event handler as props.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The label of the button.
 * @param {Function} props.onClick - The event handler for the button's click event.
 * @returns {JSX.Element} - The rendered button component.
 */
const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} style={{ padding: '10px 15px', margin: '5px', borderRadius: '5px', cursor: 'pointer' }}>
      {children}
    </button>
  );
};

export default Button;