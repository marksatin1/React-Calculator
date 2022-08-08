import './ButtonBox.css';

const ButtonBox = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default ButtonBox;
