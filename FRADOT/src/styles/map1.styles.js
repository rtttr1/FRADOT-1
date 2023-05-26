import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
`;
export const MapWrap = styled.div``;
export const SideWrap = styled.div`
  position: absolute;
`;
export const MenuBtn = styled.div`
  visibility: hidden;
  position: absolute;
  z-index: 100;
  margin: 10px 10px;
  cursor: pointer;
`;
export const CloseBtn = styled.div`
  position: absolute;
  right: 5px;
  top: 5px;
  cursor: pointer;
`;
export const SideBar = styled.div`
  position: relative;
  width: 300px;
  height: calc(100vh - 100px);
  background-color: #f0f8ff;
  transition: 1000ms;
  z-index: 10;
  margin: 30px;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 9px 10px 10px 7px rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Category = styled.div`
  padding: 10px;
`;
export const CateTitle = styled.h2`
  margin-bottom: 5px;
`;

export const Infra = styled.button`
  font-size: 16px;
  border-radius: 50px;
  border: 1px solid #d2d2d2;
  width: 100px;
  padding: 7px 10px;
  background-color: white;
  margin: 5px 20px 5px 0;
  box-shadow: 1px 2px 0px 1px rgb(165 165 165 / 9%),
  2px 2px 0px 0 rgb(137 137 137 / 19%);
  cursor: pointer;
`;

export const Map = styled.div`
  width: 800px;
  height: 897px;
`;

export const DivArea = styled.div`
  position: absolute;
  background: #fff;
  border: 1px solid #888;
  border-radius: 3px;
  font-size: 12px;
  top: -5px;
  left: 15px;
  padding: 2px;
`;

export const Search = styled.button`
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  border: 1px solid #d2d2d2;
  background-color: #756bff;
  width: 260px;
  padding: 10px;
  color: white;
  cursor: pointer;
  position: absolute;
  top: 680px;
  margin: 0 auto;
`;

export const WaitBox = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 100;
  display: none;

  & > * {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 80px;
    height: 80px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
  }
`;
