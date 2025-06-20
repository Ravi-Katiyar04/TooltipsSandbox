
import React, { useState, useId } from 'react';

const Tooltip = ({
  children,
  shape,
  trigger,
  position,
  bgColor,
  textColor,
  fontSize,
  width,
  icon,
  image,
}) => {
  const [visible, setVisible] = useState(false);
  const tooltipId = useId(); // unique ID for aria-describedby

  const triggerHandlers = {
    hover: {
      onMouseEnter: () => setVisible(true),
      onMouseLeave: () => setVisible(false),
    },
    click: {
      onClick: () => setVisible((prev) => !prev),
    },
    focus: {
      onFocus: () => setVisible(true),
      onBlur: () => setVisible(false),
    },
  };

  const positionClass = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  }[position];

  const shapeClass = {
    rounded: 'w-12 h-12 flex items-center justify-center rounded-full',
    rectangle: 'rounded-md px-4 py-2',
    bubble: 'rounded-lg px-4 py-2',
  }[shape];

  const arrowFix =
    shape === 'bubble' &&
    ({
      top: 'after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-gray-800 after:z-10',
      bottom: 'after:absolute after:bottom-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-b-gray-800 after:z-10',
      left: 'after:absolute after:left-full after:top-1/2 after:-translate-y-1/2 after:border-8 after:border-transparent after:border-l-gray-800 after:z-10',
      right: 'after:absolute after:right-full after:top-1/2 after:-translate-y-1/2 after:border-8 after:border-transparent after:border-r-gray-800 after:z-10',
    }[position]);

  const arrowPositionFix = {
    top: 'after:top-1px',
    bottom: 'after:bottom-1px',
    left: 'after:left-1px',
    right: 'after:right-1px',
  }[position];

  return (
    <div className="relative inline-block">
      <div
        {...triggerHandlers[trigger]}
        tabIndex={trigger === 'focus' ? 0 : undefined} // for keyboard nav
        aria-describedby={tooltipId} // accessibility link
        className="inline-block focus:outline-none"
      >
        {children}
      </div>

      <div
        id={tooltipId}
        role="tooltip"
        className={`absolute z-20 ${positionClass} ${width} ${fontSize} ${shapeClass} shadow-lg transition-all duration-300 transform ${
          visible ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-90 opacity-0 pointer-events-none'
        } ${shape === 'bubble' ? arrowFix : ''} ${shape === 'bubble' ? arrowPositionFix : ''}`}
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        {icon && <span className="mr-2">💡</span>}
        {image && (
          <img
            src="https://via.placeholder.com/20"
            alt="tooltip visual"
            className="inline mr-2"
          />
        )}
        Tooltip Text!
      </div>
    </div>
  );
};

export default Tooltip;


