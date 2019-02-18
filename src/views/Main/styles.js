import styled from "styled-components";
import device from "../../styles/devices";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  overflow-x: hidden;
`;

export const Container = styled.div`
  height: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 60px;
  margin-bottom: 30px;
  > div {
    width: 100%;
  }
  .divider {
    border-top: 5px solid #e7e7e7;
  }

  ${device.mobileL`
  margin-right: 0px;
  
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`;
