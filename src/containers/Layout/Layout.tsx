import Nav from "@components/Nav";
import { LayoutContainer } from "./layout.style";

type LayoutProps = {
  children: JSX.Element;
};

const Layout = ({ children }: LayoutProps) => (
  <LayoutContainer>
    <Nav />
    {children}
  </LayoutContainer>
);

export default Layout;
