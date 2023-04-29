import styled from "@emotion/styled";

export const HeaderWrap = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: white;
    a {
        text-decoration: none;
        /* color: black; */
    }
`;
export const Logo = styled.div`
    font-size: 50px;
    margin-left: 80px;
`;
export const Img = styled.div`
    display: inline-block;
    width: 200px;
    height: 100px;
    background: url("/logo.png") no-repeat center / contain;
`;
export const Menu2 = styled.div`
    font-size: 30px;
    padding-left: 50px;
    padding-top: 20px;
    text-shadow: 2px 2px 2px gray;
`;
