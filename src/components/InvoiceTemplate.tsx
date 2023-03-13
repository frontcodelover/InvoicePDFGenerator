import styled from '@emotion/styled';
import { FooterInvoice } from './Invoice/Footer';
import { PaymentInfos } from './Invoice/PaymentInfos';
import { HeaderInfos } from './Invoice/Header/HeaderInfos';
import { HeaderLogo } from './Invoice/Header/HeaderLogo';
import { Freelance } from './Invoice/Adress/Freelance';
import { Society } from './Invoice/Adress/Society';
import { Prestations } from './Invoice/Prestations';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  max-width: 390px;
  padding: 20px;
  box-shadow: 0px 0px 1px 1px #ccc;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: stretch;
  align-content: stretch;
  /* margin: 10px 0 10px 0; */
  font-size: 7px;
  font-weight: 400;
`;

const ContentTemplate = () => {
  return (
    <Container>
      {/* REFERENCE & LOGO */}
      <Content>
        <HeaderInfos />
        <HeaderLogo />
      </Content>

      {/* ADRESS */}
      <Content>
        <Freelance />
        <Society />
      </Content>

      {/* PRESTATION */}
      <Content>
        <Prestations />
      </Content>
      {/* PAYMENT */}
      <Content>
        <PaymentInfos />
      </Content>
      {/* FOOTER */}
      <Content>
        <FooterInvoice />
      </Content>
    </Container>
  );
};

export default ContentTemplate;
