import { useRouter } from "next/router";
import {
  HeaderDiv,
  HeaderWrap,
  Img,
  Menu2,
} from "@/styles/common/mapHeader.styles";

const mapHeader = () => {
  const router = useRouter();

  const homeBtn = () => {
    router.push("/");
  };

  const mapBtn = () => {
    router.push("/map1");
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
          <p>인프라 찾기</p>
        </Menu2>
        <Menu2>
          <p onClick={aboutBtn}>About us</p>
        </Menu2>
      </HeaderDiv>
    </HeaderWrap>
  );
};

export default mapHeader;
