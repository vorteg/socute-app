import { FC } from "react";

import { Mynavbar } from "../ui/Mynavbar";
import Myhead from "../ui/Myhead";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  // ? esto quiere decir que es opcional
}

//const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Myhead title={title} />
      <Mynavbar />
      <main>{children}</main>
    </>
  );
};
