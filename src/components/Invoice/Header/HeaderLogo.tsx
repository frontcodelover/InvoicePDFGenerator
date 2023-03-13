import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { Context } from '../../../Context/Context';

const DocumentLogo = styled.div`
  height: auto;
  max-width: 60px;
  margin-top: 5px;
`;

export const HeaderLogo = () => {
  const [context, setContext] = React.useContext(Context);
  return <DocumentLogo>{context.logoFreelance && <img src={context.logoFreelance} alt='logo' />}</DocumentLogo>;
};
