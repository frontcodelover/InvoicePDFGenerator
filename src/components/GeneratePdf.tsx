import { jsPDF } from 'jspdf';
import React, { useRef } from 'react';
import styled from '@emotion/styled';

import ContentTemplate from './InvoiceTemplate';

const Container = styled('div')`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  z-index: 0;
  // margin: 'auto',
  position: fixed;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 1023px) {
    position: relative;
  }
`;

const Button = styled('button')`
  margin: 50px;
  padding: 10px;
  border-radius: 10px;
  background-color: #3b82f6;
  color: white;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
  cursor: pointer;
  max-width: 300px;
  max-width: 300px;
  transition: color 0.5s ease-in-out, background-color 0.2s ease-in-out, border-color 0.5s ease-in-out, box-shadow 0.3s ease-in-out;
  :hover {
    background-color: #f56565;
  }
`;

const GeneratePdf: React.FC = () => {
  const certificateTemplateRef = useRef<any>(null);

  const handleGeneratePdf = () => {
    const doc = new jsPDF({
      format: 'a4',
      unit: 'px',
    });

    // Adding the fonts
    doc.setFont('Helvetica', 'Roboto', 'Arial');

    doc.html(certificateTemplateRef.current, {
      async callback(doc) {
        // save the document as a PDF with name of Memes
        doc.save('Invoice');
      },
    });
  };

  return (
    <Container>
      <div ref={certificateTemplateRef} className='p-5'>
        <ContentTemplate />
      </div>
      <Button onClick={handleGeneratePdf}>Générer la facture PDF</Button>
    </Container>
  );
};

export default GeneratePdf;
