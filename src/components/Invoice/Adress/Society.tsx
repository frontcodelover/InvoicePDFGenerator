import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { Context } from '../../../Context/Context';

const SocietyHeader = styled.div`
  color: grey;
  border-bottom: 1px solid grey;
  letter-spacing: 0.02px;
  margin-bottom: 5px;
  width: 100%;
`;

const SocietyAdressTitle = styled.h2`
  color: #444;
  font-weight: 600;
  font-size: 10px;
  margin-bottom: 5px;
  width: 100%;
`;

const SocietyReferenceList = styled.li`
  color: #000000;
  text-align: left;
`;

const SocietyAdress = styled.div`
  height: auto;
  display: block;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
  flex-direction: column;
  color: black;
  text-align: left;
  padding: 10px 0px 10px 20px;
`;

const SocietyAdressUl = styled.ul`
  line-height: normal;
`;

export const Society = () => {
  const [context, setContext] = useContext(Context);
  return (
    <SocietyAdress>
      <SocietyHeader>
        <SocietyAdressTitle>ADRESSÉ&nbsp;À</SocietyAdressTitle>
      </SocietyHeader>
      <SocietyAdressUl>
        {/* Adresse client */}
        <SocietyReferenceList>
          <strong>{context?.societyName}</strong>
        </SocietyReferenceList>
        <SocietyReferenceList>{context?.societyStreet}</SocietyReferenceList>
        <SocietyReferenceList>{context?.societyCity}</SocietyReferenceList>
        <SocietyReferenceList>Contact : {context?.societyContact} </SocietyReferenceList>
        <SocietyReferenceList>Numéro d'immatriculation : {context?.societyImmatriculation}</SocietyReferenceList>
        <SocietyReferenceList>TVA intracom : {context?.societyTVAinterco}</SocietyReferenceList>
      </SocietyAdressUl>
    </SocietyAdress>
  );
};
