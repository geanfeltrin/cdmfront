import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  padding-left: 70px;
  padding-right: 70px;
  background: #fff;
  img {
    width: 100px;
  }

  ${media.lessThan("500px")`
  padding-left: 0px;
  padding-right: 0px;
  `}
  
`;
