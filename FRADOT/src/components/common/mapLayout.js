import Header from "./mapHeader";

const LayOut = (props) => {
  return (
    <>
      <Header></Header>
      <main>{props.children}</main>
    </>
  );
};

export default LayOut;
