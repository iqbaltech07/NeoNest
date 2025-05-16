import React, { forwardRef, ReactNode } from "react";

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  id?: string;
}

const SectionContainer = forwardRef<HTMLElement, SectionContainerProps>(
  ({ children, className = "", id, ...props }, ref) => {
    return (
      <div className="relative">
        <section
          ref={ref}
          className={`container w-screen mx-auto overflow-x-hidden ${className}`}
          id={id}
          {...props}
        >
          {children}
        </section>
      </div>
    );
  }
);

SectionContainer.displayName = "SectionContainer";

export default SectionContainer;
