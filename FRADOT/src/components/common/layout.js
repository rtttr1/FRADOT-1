import Footer from "./footer";
import Header from "./header";

const LayOut = (props) => {
    return (
        <>
            <Header></Header>
            <main>{props.children}</main>
            <Footer></Footer>
        </>
    );
};

export default LayOut;
