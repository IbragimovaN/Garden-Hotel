import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const IconWrapper = ({
  onClick,
  icon,
  className,
  onMouseMove,
  onMouseOut,
  style,
}) => {
  return (
    <div
      onClick={onClick}
      className={className}
      onMouseMove={onMouseMove}
      onMouseOut={onMouseOut}
      style={style}
    >
      <FontAwesomeIcon icon={icon} />
    </div>
  );
};
