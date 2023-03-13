import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { Context } from '../../../Context/Context';

const FreelanceHeader = styled.div`
  color: grey;
  border-bottom: 1px solid grey;
  letter-spacing: 0.02px;
  margin-bottom: 5px;
  width: 100%;
`;

const FreelanceAdressTitle = styled.h2`
  color: #444;
  font-weight: 600;
  font-size: 10px;
  margin-bottom: 5px;
  width: 100%;
`;

const FreelanceReferenceList = styled.li`
  color: #000000;
  text-align: left;
`;

const FreelanceAdress = styled.div`
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

const FreelanceAdressUl = styled.ul`
  line-height: normal;
`;

export const Freelance = () => {
  const [context, setContext] = useContext(Context);

  return (
    <FreelanceAdress>
      <FreelanceHeader>
        <FreelanceAdressTitle>AU&nbsp;NOM&nbsp;ET&nbsp;POUR&nbsp;LE&nbsp;COMPTE&nbsp;DE</FreelanceAdressTitle>
      </FreelanceHeader>
      <FreelanceAdressUl>
        {/* Adresse freelance */}
        <FreelanceReferenceList>
          <strong>{context?.freelanceNameSociety}</strong>
        </FreelanceReferenceList>
        <FreelanceReferenceList>{context?.freelanceName}</FreelanceReferenceList>
        <FreelanceReferenceList>{context?.freelanceStreet}</FreelanceReferenceList>
        <FreelanceReferenceList>{context?.freelanceCity}</FreelanceReferenceList>
        <FreelanceReferenceList>SIRET : {context?.freelanceSiret}</FreelanceReferenceList>
      </FreelanceAdressUl>
    </FreelanceAdress>
  );
};
