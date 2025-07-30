import React from 'react'

interface LoaderProps {
    width?: number;
    height?: number;
    className?: string;
}

const Loader: React.FC<LoaderProps> = ({ width = 24, height = 24, className = '' }) => {
    return (
        <div className="flex">
            <img
                src="/assets/loader.svg"
                alt="loader"
                width={width}
                height={height}
                className={`animate-spin ${className}`}
            />
        </div>
    )
}

export default Loader