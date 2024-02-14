import Navigation from "./Navigation";

const Root = ({ children }) => {
  return (
    <div
      css={{
        height: "calc(100% - env(safe-area-inset-bottom))",
        position: "relative",
        paddingTop: "env(safe-area-inset-top)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      {children}
      <Navigation />
    </div>
  );
};

export default Root;
