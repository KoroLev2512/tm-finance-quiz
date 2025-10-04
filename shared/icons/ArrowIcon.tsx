import type { IconProps } from "./types";

const ArrowIcon = (
    {
        color = "white",
        height = 14,
        width = 8,
    }: IconProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M1 1L7 7L1 13"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default ArrowIcon;