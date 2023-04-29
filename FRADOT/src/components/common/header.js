import { HeaderWrap, Img, Logo, Menu2 } from "@/styles/common/header.styles";

const Header = () => {
    return (
        <HeaderWrap>
            <Logo>
                <a href="/">
                    {/* <image src={h} width={238} height={59} alt="프라닷" /> */}
                    {/* FRADOT */}
                    <Img></Img>
                </a>
            </Logo>

            <Menu2>
                <a href="#">동네찾기</a>
            </Menu2>
            <Menu2>
                <a href="#">인프라 찾기</a>
            </Menu2>
            <Menu2>
                <a href="#">About us</a>
            </Menu2>
        </HeaderWrap>
    );
};

export default Header;
