import React, { FC, ComponentProps } from "react";

interface Props extends ComponentProps<"svg"> {
  color?: string;
  width?: number;
  height?: number;
}

export const LogoIcon: FC<Props> = ({ color, width, height, ...props }) => (
  <svg
    {...props}
    width={width}
    height={height}
    viewBox="0 0 23 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect y="13.5002" width="6" height="20.5" rx="3" fill={color} />
    <rect x="16.9994" y="9.49976" width="6" height="24.5" rx="3" fill={color} />
    <rect x="8.4989" width="6" height="38" rx="3" fill={color} />
  </svg>
);

LogoIcon.defaultProps = {
  color: "#EE6C4D",
  width: 23,
  height: 38,
};
