import styled, { ThemedStyledProps } from 'styled-components';
import Image, { ImageProps } from 'react-bootstrap/Image';
import AppBar from '@mui/material/AppBar';
import { IconButton, List, ListItem } from '@mui/material';
import logo from 'assets/images/victor.jpg';
import logo_night from 'assets/images/victor_night.jpg';
import { RefAttributes } from 'react';

interface isLightStyled {
  isLight?: boolean;
}

export const StyledAppBar = styled(AppBar).attrs(props => ({
  className: 'p-3'
}))`
  min-height: 4rem;
`;

export const StyledToolbar = styled.div.attrs(props => ({
  className: 'p-3'
}))`
  min-height: 5rem;
`;

export const MainImage = styled(Image).attrs((props: ThemedStyledProps<ImageProps & RefAttributes<HTMLImageElement>, any> & { isLight?: boolean }) => ({
  className: 'p-3',
  fluid: true,
  alt: props.isLight ? 'victor.yap' : 'victor_night',
  src: props.isLight ? logo : logo_night,
})) <isLightStyled>`
  object-fit: cover;
  aspect-ratio: 1; 
  border-radius: 50%`;

export const ContentText = styled.div.attrs(props => ({
  className: 'mb-5 pb-5',
})) <isLightStyled>`
  text-align: justify;
  font-size: 17px;
  color: ${props => props.isLight ? 'rgba(0, 0, 0, 0.6)' : 'white'};`;

export const ContentContainer = styled.div.attrs(props => ({
}))`
  @media (min-width: 768px) {  width: 50%!important;  }
  @media (max-width: 768px) {  width: 90%!important; }
  margin: auto;`;

export const ImageContainer = styled(ContentContainer).attrs(props => ({
}))`
    width: 70%!important;
    margin: auto;`;

export const ChartContentContainer = styled(ContentContainer).attrs(props => ({
  className: 'mb-5',
}))`
  aspect-ratio : 1;`;

export const ContentRowContainer = styled(List).attrs(props => ({
  className: 'd-flex justify-content-center flex-wrap',
}))``;


export const SecondaryContent = styled.div.attrs(props => ({
}))`
  min-height: 35rem;
  background-color: rgba(255, 255, 255, 0.5);`;

export const ContentCenterText = styled.div.attrs(props => ({
  className: 'text-center p-3',
})) <isLightStyled>`
font-size: 30px;
color: ${props => props.isLight ? 'rgba(0, 0, 0, 0.6)' : 'white'};
`;

export const ContentLeftText = styled.p.attrs(props => ({
  className: 'text-left p-3',
}))`
font-size: 13px;

`;

export const FooterContainer = styled.div.attrs(props => ({
  className: 'p-3 justify-content-center align-items-center d-flex',
})) <isLightStyled>`
margin: 0;
font-size: 12px;
color: ${props => props.isLight ? 'rgba(0, 0, 0, 0.6)' : 'white'};
text-align: center;
;
`;

export const FooterIconButton = styled(IconButton).attrs(() => ({
}))`
padding-left: 5px!important;
`;

export const StyledListItem = styled(ListItem).attrs(() => ({
}))`
  padding-left: 10px!important;
  padding-right: 10px!important;
  @media (min-width: 768px) {  width: 50%!important; }
  @media (max-width: 768px) {  width: 100%!important; }
`;



