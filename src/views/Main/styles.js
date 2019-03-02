import styled from "styled-components";
import device from "../../styles/devices";
import media from "styled-media-query";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow-x: hidden !important;
`;

export const Container = styled.div`
  flex-direction: column;
  margin-top: 60px;
  margin-bottom: 30px;
  overflow-y: none !important;
  overflow-x: none !important;

  ${device.mobileS`
  align-content: center;
  justify-content: center;
  margin-left: 1em;
  margin-top: 1em;
  `}
  ${device.phone`
  align-content: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 1em;
  `}
  > div {
    width: 100%;
  }
  .divider {
    border-top: 5px solid #e7e7e7;
  }

  ${device.mobileL`
  margin-right: 0px;
  
  `}
  .min-height {
    min-height: 420px;
    overflow-x: none !important;

  ${media.lessThan("374px")`
    margin-left: -1em !important;
  `}
  ${media.between("374px", "424px")`
  margin-left: 0em !important;
  `}

  ${media.between("424px", "450px")`
  margin-left: 1.5em !important;
  `}
  ${media.between("424px", "450px")`
  margin-left: 1.5em !important;
  `}
  ${media.greaterThan("2000px")`
  min-height: 1530px;
  `}
  
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`;
