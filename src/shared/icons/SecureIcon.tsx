import type { IconProps } from "./types";

const SecureIcon = (
    {
        color = "#9E9E9E",
        height = 20,
        width = 18,
    }: IconProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M15 8H3C1.89543 8 1 8.89543 1 10V17C1 18.1046 1.89543 19 3 19H15C16.1046 19 17 18.1046 17 17V10C17 8.89543 16.1046 8 15 8Z"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M5 8V5C5 2.79086 6.79086 1 9 1C11.2091 1 13 2.79086 13 5V8"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default SecureIcon;