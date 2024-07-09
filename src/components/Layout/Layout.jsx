import "./Layout.css";
export const Layout = ({ children }) => {
  return (
    <>
      <main className="layout-container">{children}</main>
    </>
  );
};
