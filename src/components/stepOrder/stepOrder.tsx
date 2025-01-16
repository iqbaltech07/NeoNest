import React from "react";
import StepColumn, { steps } from "./columnStep";


const StepOrder = () => {
    const leftSteps = steps.filter((_, index) => index % 2 === 0);
    const rightSteps = steps.filter((_, index) => index % 2 !== 0);

    return (
        <div className="flex justify-center items-center mt-16">
            <div className="grid grid-cols-2 gap-2 sm:gap-16 sm:place-items-center pl-4">
                <div>
                    <StepColumn steps={leftSteps} startIndex={1} />
                </div>
                <div>
                    <StepColumn steps={rightSteps} startIndex={2} />
                </div>
            </div>
        </div>
    );
};

export default StepOrder;
