import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
`;
export const MenuBtn = styled.div`
    position: absolute;
    z-index: 100;
    margin: 10px 10px;
`;
export const CloseBtn = styled.div`
    position: absolute;
    right: 5px;
    top: 5px;
`;
export const SideBar = styled.div`
    position: relative;
    width: 270px;
    height: 897px;
    background-color: #f0f8ff;
`;

export const Category = styled.div`
    padding: 10px;
`;
export const CateTitle = styled.h2`
    margin-bottom: 5px;
`;

export const Infra = styled.button`
    border-radius: 15px;
    border: 1px solid black;
    width: 62px;
    height: 30px;
    background-color: white;
    margin-right: 15px;

    &:hover {
        background-color: #756bff;
        color: white;
    }
`;

export const Map = styled.div`
    width: 800px;
    height: 897px;
`;
