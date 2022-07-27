import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;


export const FocusSpan = styled.span`
  /* background:linear-gradient(270deg, #00DBD8 0%, #B133FF 100%); */
  background: rgba(0,0,0,.4);
  color:#fff;
  padding:0 1rem;
`;