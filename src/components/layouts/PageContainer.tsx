"use client"

import React, { forwardRef, ReactNode } from "react";
import NavigationBar from "./navbar/navbar";
import Footer from "./footer/footer";


interface PageContainerProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  children: ReactNode;
  withNavbar?: boolean;
  withFooter?: boolean;
}

const PageContainer = forwardRef<HTMLElement, PageContainerProps>(
  ({ className, children, withNavbar, withFooter = true, ...props }, ref) => {
    return (
      <div {...props}>
        {withNavbar && <NavigationBar />}
        <main ref={ref} className={`container mx-auto ${className}`}>
          {children}
        </main>
        {withFooter && <Footer />}
      </div>
    );
  }
);

PageContainer.displayName = "PageContainer";

export default PageContainer;
