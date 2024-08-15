import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const IconWrapper = ({ onClick, icon, className }) => {
  return (
    <div onClick={onClick} className={className}>
      <FontAwesomeIcon icon={icon} />
    </div>
  );
};
