import { useNavigate } from "react-router-dom";

const LinkBack = ({ children, ...buttonProps }) => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)} {...buttonProps}>
      {children}
    </button>
  );
};

export default LinkBack;
