import React from "react";
import "./Loader.css";

const Loader = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col justify-center items-center h-screen space-y-4">
                <div className="flex space-x-2">
                    {[...Array(3)].map((_, index) => (
                        <div
                            key={index}
                            className={`w-4 h-4 rounded-full animate-bounce`}
                            style={{
                                animationDelay: `${index * 0.2}s`,
                                background: `linear-gradient(82deg, #D82DFD 17.77%, #A93BFF 30.02%, #8C3CFF 58.49%, #5633FF 70.29%)`,
                            }}
                        ></div>
                    ))}
                </div>
                <p className="text-lg font-medium text-center animate-pulse text-gray-600">
                    Please wait...
                </p>
            </div>

        </div>
    );
};

export default Loader;
