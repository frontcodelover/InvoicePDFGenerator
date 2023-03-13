import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { Context } from '../../Context/Context';

const PrestationHeader = styled.div`
 color: grey;
 border-bottom: 1px solid grey;
 letter-spacing: 0.02px;
 margin-bottom: 5px;
 width: 100%;
`;

const DocumentPrestationTitle = styled.h2`
 text-align: left;
 color: #444;
 font-weight: 600;
 letter-spacing: 0.02px;
 font-size: 10px;
 margin-bottom: 5px;
 width: 100%;
`;

const DocumentPrestationItem = styled.h3`
 margin-top: 0;
 height: 20px;
`;

const DocumentPrestation = styled.div`
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

const PrestationTable = styled.table`
 width: 100%;
 border-collapse: collapse;
 border-spacing: 0;
 margin-bottom: 20px;
 font-size: 6px;
 color: #000;
`;

const PrestationTableThead = styled.thead`
 height: 20px;
`;

const PrestationTableTh = styled.th`
 height: 20px;
 font-weight: 700;
 font-size: 7px;
 text-align: left;
 &:first-of-type {
  width: 60%;
 }
`;

const PrestationTableTr = styled.tr`
 height: 20px;
`;

const PrestationTableTrTwo = styled.tr`
 border-bottom-width: 0.1em;
`;

const PrestationTableTd = styled.td`
 height: 20px;
 text-align: left;
 margin: 0 0 0 10px;
 &:nth-of-type(2) {
  text-align: center;
 }
 &:nth-of-type(3) {
  text-align: right;
 }
 &:nth-of-type(4) {
  text-align: right;
 }
`;

const TotalPrice = styled.div`
 display: flex;
 flex-direction: row;
 flex-wrap: nowrap;
 justify-content: flex-end;
 align-content: stretch;
 margin: 10px 0 10px 0;
 font-size: 7px;
 font-weight: 400;
`;

const TablePrice = styled.table`
 width: 100px;
 border-collapse: collapse;
 border-spacing: 0;
 font-size: 6px;
 color: #000;
`;

const TablePriceTr = styled.tr`
 height: 15px;
 &:last-child {
  font-size: 10px;
  font-weight: 700;
 }
`;

const TablePriceTdOne = styled.td`
 height: 15px;
 font-weight: 700;
 font-size: 8px;
 text-align: left;
`;

const TablePriceTdTwo = styled.td`
 height: 15px;
 text-align: right;
`;

const PrestationTBody = styled.tbody`
 height: 20px;
`;

export const Prestations = () => {
 const [context, setContext] = useContext(Context);

 const prestationsPriceTotal = context.prestations?.reduce(
  (acc: number, prestation: any) => {
   return acc + prestation.totalHT;
  },
  0
 );

 const prestationsPriceTVA = context.prestations?.reduce(
  (acc: number, prestation: any) => {
   return acc + prestation.totalTVA;
  },
  0
 );

 const prestationsPriceTTC = context.prestations?.reduce(
  (acc: number, prestation: any) => {
   return acc + prestation.totalTTC;
  },
  0
 );

 return (
  <DocumentPrestation>
   <PrestationHeader>
    <DocumentPrestationTitle>PRESTATION</DocumentPrestationTitle>
   </PrestationHeader>
   <PrestationTable>
    <PrestationTableThead>
     <PrestationTableTr>
      <PrestationTableTh>Détail</PrestationTableTh>
      <PrestationTableTh>Quantité</PrestationTableTh>
      <PrestationTableTh style={{ textAlign: 'right' }}>
       Prix unitaire (HT)
      </PrestationTableTh>
      <PrestationTableTh style={{ textAlign: 'right' }}>
       TOTAL &nbsp; (HT)
      </PrestationTableTh>
     </PrestationTableTr>
    </PrestationTableThead>
    <PrestationTBody>
     {context.prestations?.map((prestation: any) => (
      <PrestationTableTrTwo key={prestation}>
       <PrestationTableTd>{prestation?.description}</PrestationTableTd>
       <PrestationTableTd style={{ textAlign: 'center' }}>
        {prestation?.quantity}
       </PrestationTableTd>
       <PrestationTableTd>{+prestation?.price}</PrestationTableTd>
       <PrestationTableTd>
        {+prestation?.totalHT.toFixed(2)} €
       </PrestationTableTd>
      </PrestationTableTrTwo>
     ))}
    </PrestationTBody>
   </PrestationTable>

   <TotalPrice>
    <TablePrice>
     <PrestationTBody>
      <TablePriceTr>
       <TablePriceTdOne>Total (HT)</TablePriceTdOne>
       <TablePriceTdTwo>
        {prestationsPriceTTC ? prestationsPriceTotal?.toFixed(2) : 0} €
       </TablePriceTdTwo>
      </TablePriceTr>
      <TablePriceTr>
       <TablePriceTdOne>TVA</TablePriceTdOne>
       <TablePriceTdTwo>
        {prestationsPriceTVA ? prestationsPriceTVA?.toFixed(2) : 0}€
       </TablePriceTdTwo>
      </TablePriceTr>
      <TablePriceTr>
       <TablePriceTdOne>Total (TTC&nbsp;)</TablePriceTdOne>
       <TablePriceTdTwo>
        {prestationsPriceTTC ? prestationsPriceTTC?.toFixed(2) : 0} €
       </TablePriceTdTwo>
      </TablePriceTr>
     </PrestationTBody>
    </TablePrice>
   </TotalPrice>
  </DocumentPrestation>
 );
};
