import { useRouter } from "next/router";
import { HeaderDiv, HeaderWrap, Img, Menu2 } from "@/styles/common/header.styles";

const Header = () => {
    const router = useRouter();

    const homeBtn = () => {
        router.push("/");
    };

    const mapBtn = () => {
        router.push("/map1");
    };

    const map2Btn = () => {
        router.push("/map2");
    };

    const aboutBtn = () => {
        router.push("/AboutUs");
    };

    return (
        <HeaderWrap>
            <HeaderDiv>
                <Img onClick={homeBtn}></Img>

                <Menu2>
                    <p onClick={mapBtn}>동네찾기</p>
                </Menu2>

                <Menu2>
                    <p onClick={map2Btn}>인프라 찾기</p>
                </Menu2>

                <Menu2>
                    <p onClick={aboutBtn}>About us</p>
                </Menu2>
            </HeaderDiv>
        </HeaderWrap>
    );
};

export default Header;
