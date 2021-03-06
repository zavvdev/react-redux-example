import cx from "clsx";
import PropTypes from "prop-types";
import { childrenPropType } from "ui/propTypes/children";
import { useTypographyStyles } from "ui/components/Typography/Typography.styles";

function Typography({ children, tag, className }) {
  const classes = useTypographyStyles();

  const Root = tag || "p";
  const rootClasses = cx(classes.root, className);

  return (
    <Root className={rootClasses}>
      {children}
    </Root>
  );
}

Typography.propTypes = {
  children: childrenPropType.isRequired,
  tag: PropTypes.string,
  className: PropTypes.string,
};

Typography.defaultProps = {
  tag: undefined,
  className: undefined,
};

export { Typography };
