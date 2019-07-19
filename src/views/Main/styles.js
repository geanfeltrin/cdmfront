import styled from 'styled-components';
import device from '../../styles/devices';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow-x: none;
`;

export const Container = styled.div`
  flex-direction: column;
  margin-top: 60px;
  margin-bottom: 30px;
  overflow-y: none;
  overflow-x: none;
 
 


  /* ${device.phone`
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
  
  .min-height {
    min-height: 420px;
    overflow-x: none !important;
 
  ${media.lessThan('500px')`
    margin-left: 0px !important;
    margin-right: 0px !important;    
  `}
 
  ${media.between('500px', '780px')`
  justify-content: center;
  margin-left: 0px !important;
    margin-right: 0px !important;
  `}
  .row{
    ${media.lessThan('500px')`
    margin-left: 0px !important;
    margin-right: 0px !important;
  `}  
  }
    .col-sm-10{
    ${media.lessThan('500px')`
    padding-left: 0px !important;
    padding-right: 0px !important;
    
  `}
  }
  } */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`;
