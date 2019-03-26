import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  .txt-center {
    text-align: center;
    ${media.between("320px", "425px")`
     font-size: 1.5rem;
     text-align: center;
  `}
  }
  .txt-welcome {
    text-align: center;
    ${media.between("320px", "425px")`
     font-size: 1.5rem;
     text-align: center;
  `}
  }
`;
