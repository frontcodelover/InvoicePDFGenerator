import React from 'react';
import styled from '@emotion/styled';

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 20px 0;
`;

const TitleH2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  margin: 20px 0 10px;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
`;

const Mention = () => {
  return (
    <>
      <Title>Mentions légales</Title>
      <Paragraph>
        Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie numérique, dite L.C.E.N., il est porté à la connaissance des
        utilisateurs et visiteurs, ci-après "l'Utilisateur", du site http//www , ci-après le "Site", les présentes mentions légales. La connexion et la navigation sur le Site par l’Utilisateur
        implique acceptation intégrale et sans réserve des présentes mentions légales. Ces dernières sont accessibles sur le Site à la rubrique « Mentions légales ».
      </Paragraph>

      <TitleH2>ARTICLE 1 - L'EDITEUR</TitleH2>
      <Paragraph>L’édition et la direction de la publication du Site est assurée par XXXXXXXXXX, domiciliée XXXXXX, dont l'adresse e-mail job@nicolasderaemy.fr. ci-après l'"Editeur".</Paragraph>
      <TitleH2>ARTICLE 2 - L'HEBERGEUR</TitleH2>
      <Paragraph>L'hébergeur du Site est la société Vercel Inc., dont le siège social est situé au 340 S Lemon Ave # 4133 Walnut, CA 91789.</Paragraph>
      <TitleH2>ARTICLE 3 - ACCES AU SITE</TitleH2>
      <Paragraph>
        Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption programmée ou non et pouvant découlant d’une nécessité de maintenance. En cas de modification,
        interruption ou suspension du Site, l'Editeur ne saurait être tenu responsable.
      </Paragraph>
      <TitleH2>ARTICLE 4 - COLLECTE DES DONNEES</TitleH2>
      <Paragraph>Le Site ne collecte aucune données privées, aucune base de données n'est liée à celui-ci. Pour toute demainde merci d'envoyer un mail à l'adresse XXXX</Paragraph>
      <Paragraph>
        Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du Site, sans autorisation de l’Editeur est prohibée et pourra entraînée des actions et
        poursuites judiciaires telles que notamment prévues par le Code de la propriété intellectuelle et le Code civil.
      </Paragraph>
    </>
  );
};
export default Mention;
