import cx from "clsx";
import PropTypes from "prop-types";
import { childrenPropType } from "ui/propTypes/children";
import { useButtonStyles } from "ui/components/Button/Button.styles";

export function Button({
  children,
  className,
  onClick,
  disabled,
  icon,
}) {
  const classes = useButtonStyles();

  const rootClasses = cx(classes.root, {
    [classes.disabled]: disabled,
  }, className);

  return (
    <button
      type="button"
      disabled={disabled}
      className={rootClasses}
      onClick={onClick}
    >
      {icon && <div className={classes.icon}>{icon}</div>}
      {children}
    </button>
  );
}

Button.propTypes = {
  children: childrenPropType.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.node,
};

Button.defaultProps = {
  className: undefined,
  disabled: false,
  icon: undefined,
};
