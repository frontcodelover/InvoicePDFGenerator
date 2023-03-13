import GeneratePdf from '../components/GeneratePdf';
import { FormComponent } from '../components/Form/FormComponent';
import styled from '@emotion/styled';

function Home() {
  const RightContainer = styled.div`
    @media screen and (min-width: 1200px) {
      z-index: 0;
      display: inline-block;
      width: 50%;
      padding: 20px;
      right: 0;
    }
  `;

  return (
    <>
      <div className='sm:m-10 lg:flex lg:flex-row relative'>
        <FormComponent />
        <RightContainer>
          <GeneratePdf />
        </RightContainer>
      </div>
    </>
  );
}

export default Home;
