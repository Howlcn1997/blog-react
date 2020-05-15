import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './assets/index.scss';

const calculateSize = size => {
  if (/^[1-9]+[0-9]*]*$/.test(size.toString())) {
    size += 'px';
  }
  return size;
};

const calculateType = (prefixType, prefix, colorful) => {
  return (prefix === '' ? (colorful ? 'icon-color-' : 'icon-') : prefix) + prefixType;
};

const Iconfont = ({ type, colorful, className, size, style, prefix, ...other }) => {
  const fontClass = calculateType(type, prefix, colorful),
    computedClassName = classnames(
      className,
      {
        'nui-iconfont': !colorful,
        'nui-iconfont--color': colorful
      },
      fontClass
    ),
    computedStyle = Object.assign({}, style, size ? { fontSize: calculateSize(size) } : {});
  console.log(fontClass);
  console.log(other);
  return colorful ? (
    <svg {...other} className={computedClassName} style={computedStyle}>
      <use xlinkHref={`#${fontClass}`} />
    </svg>
  ) : (
    <i {...other} className={computedClassName} style={computedStyle} />
  );
};

Iconfont.defaultProps = {
  colorful: false,
  prefix: ''
};

Iconfont.propTypes = {
  colorful: PropTypes.bool,
  prefix: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string.isRequired,
  style: PropTypes.object,
  className: PropTypes.string
};

export default Iconfont;
