import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { Context } from '../../../Context/Context';

const DocumentReference = styled.div`
  height: 80px;
  color: black;
  width: 50%;
`;

const DocumentTitle = styled.div`
  margin-bottom: 4px;
  padding-left: 20px;
  font-size: 15px;
  color: #000000;
  text-align: left;
  font-weight: 400;
`;

const DocumentReferenceUl = styled.ul`
  margin-left: 20px;
`;
const DocumentAdressUl = styled.ul`
  line-height: normal;
`;

const DocumentReferenceList = styled.li`
  color: #000000;
  text-align: left;
`;

export const HeaderInfos = () => {
  const [context, setContext] = useContext(Context);

  return (
    <DocumentReference>
      <DocumentTitle>Facture</DocumentTitle>
      <DocumentReferenceUl>
        <>
          <DocumentReferenceList>Numéro de facture : {context?.reference}</DocumentReferenceList>
          <DocumentReferenceList>Émise le {context?.date}</DocumentReferenceList>
          <DocumentReferenceList>Référence du virement : {context?.paymentRef}</DocumentReferenceList>
        </>
      </DocumentReferenceUl>
    </DocumentReference>
  );
};
