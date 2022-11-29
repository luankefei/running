import { LayoutContainer } from "./layout.style";

type LayoutProps = {
  children: JSX.Element;
};

const Layout = ({ children }: LayoutProps) => (
  <LayoutContainer>{children}</LayoutContainer>
);

export default Layout;
