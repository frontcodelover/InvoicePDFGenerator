import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { Context } from '../../Context/Context';

const PaymentContent = styled.div`
  font-size: 6px;
  font-weight: 400;
  width: 50%;
  text-align: left;
`;

const PaymentInformation = styled.ul`
  display: flex;
  flex-direction: column;
`;

const PaymentInformationLi = styled.li`
  margin-bottom: 5px;
`;

export const PaymentInfos = () => {
  const [context, setContext] = useContext(Context);
  return (
    <PaymentContent>
      Pour payer par virement, veuillez utiliser les coordonnées bancaires ci-dessous en veillant à bien reporter la référence de la transaction :<>{context?.paymentRef}</>
      <PaymentInformation>
        <PaymentInformationLi>Bénéficiaire : {context?.benificiaryName}</PaymentInformationLi>
        <PaymentInformationLi>IBAN : {context?.iban}</PaymentInformationLi>
        <PaymentInformationLi>BIC : {context?.bic}</PaymentInformationLi>
      </PaymentInformation>
    </PaymentContent>
  );
};
