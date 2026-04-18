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

export const ProfileImageWrapper = styled.div.attrs(props => ({})) <isLightStyled>`
  position: relative;
  width: 220px;
  height: 220px;
  margin: 1rem auto;
  border-radius: 50%;
  padding: 5px;
  background: conic-gradient(from 0deg, #4ECDC4, #AA96DA, #e63946, #e76f51, #f4a261, #4ECDC4);
  animation: profileSpin 12s linear infinite;

  &::after {
    content: '';
    position: absolute;
    inset: -14px;
    border-radius: 50%;
    background: conic-gradient(from 0deg, #4ECDC4, #AA96DA, #e63946, #e76f51, #f4a261, #4ECDC4);
    filter: blur(24px);
    opacity: ${props => props.isLight ? 0.3 : 0.45};
    z-index: -1;
  }

  @keyframes profileSpin {
    to { transform: rotate(360deg); }
  }

  @media (max-width: 640px) {
    width: 180px;
    height: 180px;
    margin: 0 auto;
  }
`;

export const ProfileImageInner = styled.div.attrs(props => ({})) <isLightStyled>`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  background: ${props => props.isLight ? 'white' : '#0a1236'};
  padding: 10px;
  animation: profileSpinBack 12s linear infinite;

  @keyframes profileSpinBack {
    to { transform: rotate(-360deg); }
  }
`;

export const MainImage = styled(Image).attrs((props: ThemedStyledProps<ImageProps & RefAttributes<HTMLImageElement>, any> & { isLight?: boolean }) => ({
  fluid: true,
  alt: props.isLight ? 'victor.yap' : 'victor_night',
  src: props.isLight ? logo : logo_night,
})) <isLightStyled>`
  object-fit: cover;
  width: 100%;
  height: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
`;

export const ContentText = styled.div.attrs(props => ({
  className: 'mb-5 pb-5',
})) <isLightStyled>`
  text-align: justify;
  font-size: 17px;
  color: ${props => props.isLight ? 'rgba(0, 0, 0, 0.6)' : 'white'};`;

export const ContentContainer = styled.div.attrs(props => ({
}))`
  width: 90%;
  max-width: 1100px;
  margin: 0 auto;`;

export const ImageContainer = styled(ContentContainer).attrs(props => ({
}))`
    width: 70%!important;
    margin: auto;`;

export const ChartContentContainer = styled(ContentContainer).attrs(props => ({
  className: 'mb-5',
}))`
  aspect-ratio : 1;`;

export const SkillsContainer = styled.div.attrs(props => ({
  className: 'mb-5',
}))`
  width: 92%;
  max-width: 1280px;
  margin: 0 auto 3rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

interface SkillCategoryProps extends isLightStyled {
  accent?: string;
}

export const SkillCategoryBlock = styled.div.attrs(props => ({})) <SkillCategoryProps>`
  position: relative;
  padding: 1rem 1.25rem;
  border-radius: 14px;
  background: ${props => props.isLight
    ? 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(250,250,255,0.9))'
    : 'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))'};
  border: 1px solid ${props => props.isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.08)'};
  box-shadow: ${props => props.isLight
    ? '0 4px 16px rgba(0,0,0,0.04)'
    : '0 4px 16px rgba(0,0,0,0.25)'};
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: ${props => props.accent || '#4ECDC4'};
  }
`;

export const SkillCategoryLabel = styled.div.attrs(props => ({})) <SkillCategoryProps>`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 0.6rem;
  color: ${props => props.accent || (props.isLight ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.85)')};
`;

export const SkillChipRow = styled.div.attrs(props => ({}))`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const HeroNameText = styled.div.attrs(props => ({})) <isLightStyled>`
  font-size: 44px;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  background: ${props => props.isLight
    ? 'linear-gradient(135deg, #001e3c 0%, #4ECDC4 100%)'
    : 'linear-gradient(135deg, #ffffff 0%, #4ECDC4 60%, #AA96DA 100%)'};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 640px) {
    font-size: clamp(24px, 8.5vw, 34px);
    white-space: nowrap;
  }
`;

export const HeroRoleText = styled.div.attrs(props => ({
  className: 'text-center',
})) <isLightStyled>`
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: ${props => props.isLight ? 'rgba(0,0,0,0.55)' : 'rgba(255,255,255,0.7)'};
  margin-bottom: 0.5rem;
`;

export const SectionHeading = styled.div.attrs(props => ({
  className: 'text-center p-3',
})) <isLightStyled>`
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: ${props => props.isLight ? '#001e3c' : 'white'};
  position: relative;
  display: inline-block;
  margin: 0 auto;

  &::after {
    content: '';
    display: block;
    width: 48px;
    height: 3px;
    margin: 0.5rem auto 0;
    background: linear-gradient(90deg, #4ECDC4, #AA96DA);
    border-radius: 3px;
  }
`;

export const SectionHeadingContainer = styled.div.attrs(props => ({
  className: 'text-center p-3',
}))`
  display: flex;
  justify-content: center;
`;

interface ProjectCardProps extends isLightStyled {
  accent?: string;
}

export const ProjectCard = styled.div.attrs(props => ({})) <ProjectCardProps>`
  position: relative;
  padding: 1.5rem;
  border-radius: 16px;
  background: ${props => props.isLight
    ? 'linear-gradient(135deg, #ffffff, #f8f9fc)'
    : 'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))'};
  border: 1px solid ${props => props.isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.08)'};
  box-shadow: ${props => props.isLight
    ? '0 8px 24px rgba(0,0,0,0.06)'
    : '0 8px 24px rgba(0,0,0,0.3)'};
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  overflow: hidden;
  height: 100%;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 4px;
    background: ${props => props.accent || 'linear-gradient(90deg, #4ECDC4, #AA96DA)'};
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.isLight
      ? '0 16px 32px rgba(0,0,0,0.1)'
      : '0 16px 32px rgba(0,0,0,0.45)'};
  }
`;

export const ProjectTitle = styled.div.attrs(props => ({})) <isLightStyled>`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: ${props => props.isLight ? '#001e3c' : 'white'};
`;

export const ProjectDescription = styled.div.attrs(props => ({})) <isLightStyled>`
  font-size: 14px;
  line-height: 1.6;
  color: ${props => props.isLight ? 'rgba(0,0,0,0.65)' : 'rgba(255,255,255,0.75)'};
  margin-bottom: 1rem;
`;

export const ProjectTagRow = styled.div.attrs(props => ({}))`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

export const ProjectsGrid = styled.div.attrs(props => ({}))`
  display: grid;
  gap: 1.5rem;
  width: 90%;
  margin: 0 auto 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

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

export const ScrollProgressBar = styled.div.attrs(props => ({}))<{ progress: number }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  width: ${props => props.progress}%;
  background: linear-gradient(90deg, #4ECDC4, #AA96DA, #e63946);
  z-index: 2000;
  transition: width 0.05s linear;
`;

export const NavLinksContainer = styled.div.attrs(props => ({}))`
  display: flex;
  gap: 1.25rem;
  margin-left: auto;
  align-items: center;
  @media (max-width: 640px) {
    display: none;
  }
`;

export const MobileMenuButton = styled.button.attrs(props => ({})) <isLightStyled>`
  display: none;
  margin-left: auto;
  background: transparent;
  border: none;
  padding: 0.4rem;
  cursor: pointer;
  color: ${props => props.isLight ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.85)'};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: background 0.2s;

  &:hover {
    background: ${props => props.isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.08)'};
  }

  @media (max-width: 640px) {
    display: inline-flex;
  }
`;

export const MobileDrawerContent = styled.div.attrs(props => ({})) <isLightStyled>`
  width: 260px;
  height: 100%;
  background: ${props => props.isLight ? 'white' : '#0c1538'};
  color: ${props => props.isLight ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.9)'};
  padding: 1.25rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const MobileDrawerHeader = styled.div.attrs(props => ({})) <isLightStyled>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.25rem 0.75rem;
  border-bottom: 1px solid ${props => props.isLight ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.1)'};
  margin-bottom: 0.75rem;
  font-weight: 600;
  font-size: 15px;
`;

export const MobileDrawerCloseButton = styled.button.attrs(props => ({})) <isLightStyled>`
  background: transparent;
  border: none;
  padding: 0.3rem;
  cursor: pointer;
  color: ${props => props.isLight ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.8)'};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: background 0.2s;

  &:hover {
    background: ${props => props.isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.08)'};
  }
`;

export const MobileNavLink = styled.a.attrs(props => ({})) <isLightStyled>`
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  color: ${props => props.isLight ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.9)'};
  padding: 0.75rem 0.75rem;
  border-radius: 8px;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: ${props => props.isLight ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.08)'};
  }
`;

export const MobileDrawerFooter = styled.div.attrs(props => ({})) <isLightStyled>`
  margin-top: auto;
  padding-top: 0.75rem;
  border-top: 1px solid ${props => props.isLight ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.1)'};
`;

export const NavLink = styled.a.attrs(props => ({})) <isLightStyled>`
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  color: ${props => props.isLight ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.8)'};
  position: relative;
  padding: 0.25rem 0;
  transition: color 0.2s;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 2px;
    width: 0;
    background: linear-gradient(90deg, #4ECDC4, #AA96DA);
    transition: width 0.25s ease;
  }

  &:hover {
    color: ${props => props.isLight ? '#001e3c' : 'white'};
  }
  &:hover::after {
    width: 100%;
  }
`;

export const AppBarInner = styled.div.attrs(props => ({}))`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1rem;

  @media (max-width: 640px) {
    gap: 0.25rem;
  }
`;

export const BackToTopButton = styled(IconButton).attrs(() => ({})) <isLightStyled & { visible: boolean }>`
  position: fixed!important;
  right: 1.5rem;
  bottom: 1.5rem;
  z-index: 1500;
  background: ${props => props.isLight ? 'white' : '#14304e'}!important;
  color: ${props => props.isLight ? '#001e3c' : 'white'}!important;
  box-shadow: 0 6px 20px rgba(0,0,0,0.25)!important;
  opacity: ${props => props.visible ? 1 : 0};
  transform: translateY(${props => props.visible ? '0' : '12px'});
  pointer-events: ${props => props.visible ? 'auto' : 'none'};
  transition: opacity 0.25s ease, transform 0.25s ease, background 0.2s;

  &:hover {
    background: ${props => props.isLight ? '#f2f5fa' : '#1a3d63'}!important;
  }
`;

export const StatsContainer = styled.div.attrs(props => ({}))`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 90%;
  max-width: 900px;
  margin: 0 auto 3rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

interface StatCardProps extends isLightStyled {
  accent?: string;
}

export const StatCard = styled.div.attrs(props => ({})) <StatCardProps>`
  position: relative;
  padding: 1.5rem 1rem;
  border-radius: 16px;
  text-align: center;
  background: ${props => props.isLight
    ? 'linear-gradient(135deg, #ffffff, #f4f6fb)'
    : 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))'};
  border: 1px solid ${props => props.isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.08)'};
  box-shadow: ${props => props.isLight
    ? '0 8px 20px rgba(0,0,0,0.05)'
    : '0 8px 20px rgba(0,0,0,0.3)'};
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0 0 auto 0;
    height: 3px;
    background: ${props => props.accent || 'linear-gradient(90deg,#4ECDC4,#AA96DA)'};
  }
`;

export const StatValue = styled.div.attrs(props => ({})) <StatCardProps>`
  font-size: 42px;
  font-weight: 800;
  line-height: 1.1;
  background: ${props => props.accent || 'linear-gradient(135deg,#4ECDC4,#AA96DA)'};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const StatLabel = styled.div.attrs(props => ({})) <isLightStyled>`
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.03em;
  margin-top: 0.35rem;
  color: ${props => props.isLight ? 'rgba(0,0,0,0.65)' : 'rgba(255,255,255,0.7)'};
`;

export const TimelineContainer = styled.div.attrs(props => ({}))`
  position: relative;
  width: 90%;
  max-width: 780px;
  margin: 0 auto 3rem;
  padding-left: 1.5rem;

  &::before {
    content: '';
    position: absolute;
    left: 6px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(180deg, #4ECDC4, #AA96DA, #e63946);
    border-radius: 2px;
  }
`;

export const TimelineItem = styled.div.attrs(props => ({})) <isLightStyled>`
  position: relative;
  padding: 0 0 2rem 1.5rem;

  &:last-child {
    padding-bottom: 0;
  }

  &::before {
    content: '';
    position: absolute;
    left: -1.45rem;
    top: 0.4rem;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: ${props => props.isLight ? 'white' : '#0a1236'};
    border: 3px solid #4ECDC4;
    box-shadow: 0 0 0 3px ${props => props.isLight ? 'rgba(78,205,196,0.15)' : 'rgba(78,205,196,0.2)'};
  }
`;

export const TimelineDate = styled.div.attrs(props => ({})) <isLightStyled>`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #4ECDC4;
  margin-bottom: 0.25rem;
`;

export const TimelineRole = styled.div.attrs(props => ({})) <isLightStyled>`
  font-size: 17px;
  font-weight: 700;
  color: ${props => props.isLight ? '#001e3c' : 'white'};
`;

export const TimelineCompany = styled.div.attrs(props => ({})) <isLightStyled>`
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.isLight ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.7)'};
  margin-bottom: 0.4rem;
`;

export const RevealOnScroll = styled.div.attrs(props => ({})) <{ visible: boolean }>`
  opacity: ${props => props.visible ? 1 : 0};
  transform: translateY(${props => props.visible ? '0' : '24px'});
  transition: opacity 0.7s ease, transform 0.7s ease;
`;

export const HobbiesContainer = styled.div.attrs(props => ({}))`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  width: 92%;
  max-width: 1280px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const HobbySliderContainer = styled.div.attrs(props => ({}))`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  max-height: 260px;
  overflow: hidden;
  border-radius: 20px 20px 0 0;
  background: #000;
`;

export const HobbyCardTitle = styled.div.attrs(props => ({})) <HobbyCardProps>`
  font-size: 26px;
  font-weight: 800;
  letter-spacing: -0.01em;
  display: flex;
  align-items: center;
  gap: 0.55rem;
  color: ${props => props.isLight ? '#001e3c' : 'white'};
  margin-bottom: 0.15rem;
`;

export const HobbyCardIcon = styled.span.attrs(props => ({}))`
  font-size: 30px;
  line-height: 1;
`;

export const HobbyCardSubtitle = styled.div.attrs(props => ({})) <HobbyCardProps>`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${props => props.accent || '#4ECDC4'};
  margin-bottom: 0.85rem;
`;

export const HobbySlide = styled.div.attrs(props => ({})) <{ image: string; active: boolean }>`
  position: absolute;
  inset: 0;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  opacity: ${props => props.active ? 1 : 0};
  transform: scale(${props => props.active ? 1 : 1.06});
  transition: opacity 1.1s ease, transform 6s linear;
`;

export const HobbySliderOverlay = styled.div.attrs(props => ({}))`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.75) 100%);
  pointer-events: none;
`;

export const HobbySliderTitle = styled.div.attrs(props => ({}))`
  position: absolute;
  left: 2rem;
  right: 2rem;
  bottom: 2rem;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 48px;
  font-weight: 800;
  letter-spacing: -0.02em;
  text-shadow: 0 4px 24px rgba(0,0,0,0.5);

  @media (max-width: 640px) {
    font-size: 32px;
    left: 1.25rem;
    right: 1.25rem;
    bottom: 1.25rem;
  }
`;

export const HobbySliderIcon = styled.span.attrs(props => ({}))`
  font-size: 52px;
  line-height: 1;

  @media (max-width: 640px) {
    font-size: 36px;
  }
`;

export const HobbySliderDots = styled.div.attrs(props => ({}))`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  gap: 6px;
  z-index: 2;
`;

export const HobbySliderDot = styled.button.attrs(props => ({})) <{ active: boolean }>`
  width: ${props => props.active ? '24px' : '8px'};
  height: 8px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: ${props => props.active ? 'white' : 'rgba(255,255,255,0.5)'};
  transition: all 0.3s ease;
  padding: 0;

  &:hover {
    background: white;
  }
`;

export const SectionDivider = styled.div.attrs(props => ({})) <isLightStyled>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 80%;
  max-width: 640px;
  margin: 0 auto;
  padding: 1rem 0;
  opacity: 0.5;

  &::before, &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${props => props.isLight
      ? 'linear-gradient(90deg, transparent, rgba(0,0,0,0.15), transparent)'
      : 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)'};
  }

  &::after {
    background: ${props => props.isLight
      ? 'linear-gradient(90deg, rgba(0,0,0,0.15), transparent)'
      : 'linear-gradient(90deg, rgba(255,255,255,0.2), transparent)'};
  }

  &::before {
    background: ${props => props.isLight
      ? 'linear-gradient(90deg, transparent, rgba(0,0,0,0.15))'
      : 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2))'};
  }
`;

export const SectionDividerDot = styled.div.attrs(props => ({})) <isLightStyled>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${props => props.isLight ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.4)'};
`;

export const ContactSection = styled.div.attrs(props => ({})) <isLightStyled>`
  width: 92%;
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 2rem;
  text-align: center;
  border-radius: 24px;
  background: ${props => props.isLight
    ? 'linear-gradient(135deg, #f8faff, #eef1fb)'
    : 'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))'};
  border: 1px solid ${props => props.isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.08)'};
  box-shadow: ${props => props.isLight
    ? '0 10px 30px rgba(0,0,0,0.04)'
    : '0 10px 30px rgba(0,0,0,0.25)'};
`;

export const ContactHeading = styled.div.attrs(props => ({})) <isLightStyled>`
  font-size: 40px;
  font-weight: 800;
  letter-spacing: -0.02em;
  background: ${props => props.isLight
    ? 'linear-gradient(135deg, #001e3c 0%, #4ECDC4 100%)'
    : 'linear-gradient(135deg, #ffffff 0%, #4ECDC4 60%, #AA96DA 100%)'};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.75rem;

  @media (max-width: 640px) {
    font-size: 30px;
  }
`;

export const ContactSubtext = styled.div.attrs(props => ({})) <isLightStyled>`
  font-size: 16px;
  color: ${props => props.isLight ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.72)'};
  margin-bottom: 2rem;
`;

export const ContactButtonRow = styled.div.attrs(props => ({}))`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

interface ContactButtonProps extends isLightStyled {
  variant?: 'primary' | 'secondary';
}

export const ContactButton = styled.a.attrs(props => ({})) <ContactButtonProps>`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: ${props => props.variant === 'primary' ? '1rem 1.75rem' : '0.85rem 1.5rem'};
  border-radius: 999px;
  font-size: ${props => props.variant === 'primary' ? '16px' : '14px'};
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s, background 0.2s, color 0.2s;
  background: ${props => props.variant === 'primary'
    ? 'linear-gradient(135deg, #4ECDC4, #AA96DA)'
    : 'transparent'};
  color: ${props => {
    if (props.variant === 'primary') return 'white';
    return props.isLight ? 'rgba(0,0,0,0.75)' : 'rgba(255,255,255,0.85)';
  }};
  border: ${props => props.variant === 'primary'
    ? 'none'
    : `1px solid ${props.isLight ? 'rgba(0,0,0,0.18)' : 'rgba(255,255,255,0.25)'}`};
  box-shadow: ${props => props.variant === 'primary'
    ? '0 6px 18px rgba(78,205,196,0.3)'
    : 'none'};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.variant === 'primary'
      ? '0 10px 24px rgba(78,205,196,0.4)'
      : '0 6px 14px rgba(0,0,0,0.08)'};
    color: ${props => {
      if (props.variant === 'primary') return 'white';
      return props.isLight ? '#001e3c' : 'white';
    }};
  }
`;

export const ContactCopyright = styled.div.attrs(props => ({})) <isLightStyled>`
  margin-top: 2.5rem;
  font-size: 12px;
  color: ${props => props.isLight ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)'};
`;

interface HobbyCardProps extends isLightStyled {
  accent?: string;
}

export const HobbyCard = styled.div.attrs(props => ({})) <HobbyCardProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  overflow: hidden;
  background: ${props => props.isLight
    ? 'rgba(255,255,255,0.95)'
    : 'rgba(255,255,255,0.04)'};
  backdrop-filter: blur(12px);
  border: 1px solid ${props => props.isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.1)'};
  box-shadow: ${props => props.isLight
    ? '0 8px 24px rgba(0,0,0,0.06)'
    : '0 8px 24px rgba(0,0,0,0.3)'};
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
  height: 100%;

  &:hover {
    transform: translateY(-6px);
    box-shadow: ${props => props.isLight
      ? '0 20px 40px rgba(0,0,0,0.12)'
      : '0 20px 40px rgba(0,0,0,0.5)'};
  }
`;

export const HobbyBannerLabel = styled.div.attrs(props => ({}))`
  color: white;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 0.01em;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  text-shadow: 0 2px 8px rgba(0,0,0,0.5);
`;

export const HobbyIcon = styled.span.attrs(props => ({}))`
  font-size: 28px;
  line-height: 1;
`;

export const HobbyContent = styled.div.attrs(props => ({}))`
  padding: 1.25rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const HobbyTitle = styled.div.attrs(props => ({})) <HobbyCardProps>`
  font-size: 20px;
  font-weight: 700;
  color: ${props => props.isLight ? '#001e3c' : 'white'};
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

export const HobbyActivities = styled.ul.attrs(props => ({}))`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const HobbyActivity = styled.li.attrs(props => ({})) <HobbyCardProps>`
  font-size: 14px;
  color: ${props => props.isLight ? 'rgba(0,0,0,0.72)' : 'rgba(255,255,255,0.82)'};
  display: flex;
  align-items: center;
  gap: 0.6rem;

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${props => props.accent || '#4ECDC4'};
    flex-shrink: 0;
    box-shadow: 0 0 0 3px ${props => (props.accent || '#4ECDC4') + '22'};
  }
`;

export const HobbyLabel = styled.div.attrs(props => ({})) <isLightStyled>`
  font-size: 15px;
  font-weight: 600;
  color: ${props => props.isLight ? '#001e3c' : 'white'};
`;

export const HeroLayout = styled.div.attrs(props => ({}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 92%;
  max-width: 1280px;
  margin: 2rem auto 3rem;
  padding: 2rem 1rem;

  @media (max-width: 640px) {
    gap: 1rem;
    margin: 0.5rem auto 1.5rem;
    padding: 0.75rem 1rem 1rem;
  }

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: center;
    gap: 4rem;
    padding: 3rem 2rem;
  }
`;

export const HeroImageSide = styled.div.attrs(props => ({}))`
  flex-shrink: 0;
`;

export const HeroTextSide = styled.div.attrs(props => ({}))`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  text-align: center;

  @media (min-width: 900px) {
    text-align: left;
    align-items: flex-start;
  }
`;

export const HeroBio = styled.div.attrs(props => ({})) <isLightStyled>`
  font-size: 16px;
  line-height: 1.7;
  color: ${props => props.isLight ? 'rgba(0,0,0,0.65)' : 'rgba(255,255,255,0.82)'};
  text-align: justify;
`;

export const HobbyGallery = styled.div.attrs(props => ({}))`
  position: relative;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 6px;
  height: 280px;
  overflow: hidden;
  padding: 6px;

  &[data-count="1"] {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }

  &[data-count="2"] > div:first-child {
    grid-row: 1 / 3;
  }
  &[data-count="2"] > div:nth-child(2) {
    grid-row: 1 / 3;
    grid-column: 2;
  }
`;

export const HobbyGalleryImg = styled.div.attrs(props => ({})) <{ image: string }>`
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;

  &:hover {
    transform: scale(1.04);
  }
`;

export const HobbyGalleryOverlay = styled.div.attrs(props => ({}))`
  position: absolute;
  left: 6px;
  right: 6px;
  bottom: 6px;
  padding: 1.25rem 1.5rem 1rem;
  background: linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.7) 100%);
  pointer-events: none;
  border-radius: 0 0 12px 12px;
`;

export const LangToggleButton = styled.button.attrs(props => ({})) <isLightStyled>`
  background: ${props => props.isLight ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.08)'};
  color: ${props => props.isLight ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.85)'};
  border: 1px solid ${props => props.isLight ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.15)'};
  padding: 0.3rem 0.65rem;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.isLight ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.14)'};
  }
`;

