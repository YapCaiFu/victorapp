import { OverallContainer } from "components/Common";
import {
  ImageContainer,
  StyledToolbar,
  ContentText,
  ContentContainer,
  SkillsContainer,
  SkillCategoryBlock,
  SkillCategoryLabel,
  SkillChipRow,
  HeroNameText,
  HeroRoleText,
  SectionHeading,
  SectionHeadingContainer,
  ProjectsGrid,
  ProjectCard,
  ProjectTitle,
  ProjectDescription,
  ProjectTagRow,
  MainImage,
  StyledAppBar,
  ScrollProgressBar,
  NavLinksContainer,
  NavLink,
  AppBarInner,
  BackToTopButton,
  StatsContainer,
  StatCard,
  StatValue,
  StatLabel,
  TimelineContainer,
  TimelineItem,
  TimelineDate,
  TimelineRole,
  TimelineCompany,
  RevealOnScroll,
  HobbiesContainer,
  HobbyCard,
  HobbyActivities,
  HobbyActivity,
  HobbyContent,
  HobbySliderContainer,
  HobbySlide,
  HobbySliderDots,
  HobbySliderDot,
  HobbyCardTitle,
  HobbyCardIcon,
  SectionDivider,
  SectionDividerDot,
  ContactSection,
  ContactHeading,
  ContactButtonRow,
  ContactButton,
  ContactCopyright,
  ProfileImageWrapper,
  ProfileImageInner,
  LangToggleButton,
  HeroLayout,
  HeroImageSide,
  HeroTextSide,
  HeroBio,
} from './Main.Styles';
import { memo, useEffect, useRef, useState } from 'react';
import { Chip, Typography } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MainSwitch from "components/MainSwitch/MainSwitch";
import { uiIsLightSelector } from "redux/ui/selector";
import { useAppSelector } from "redux/store";
import { setIsLight } from "redux/ui/reducer";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import hikeImg from 'assets/images/hike.jpg';
import hikeImg2 from 'assets/images/hike2.jpeg';
import diveImg from 'assets/images/dive.jpg';
import advImg from 'assets/images/adv.jpg';
import advImg2 from 'assets/images/adv2.jpeg';

const skillGroups: { key: string; accent: string; skills: string[] }[] = [
  { key: 'mobile', accent: '#e63946', skills: ['React Native', 'Kotlin', 'Native Modules'] },
  { key: 'web', accent: '#457b9d', skills: ['React', 'TypeScript', 'Next.js'] },
  { key: 'maps', accent: '#2a9d8f', skills: ['Mapbox', 'JOSM', 'Map Engines', 'Raster Tiles'] },
  { key: 'platform', accent: '#e76f51', skills: ['Firebase', 'New Relic'] },
  { key: 'ai', accent: '#9d4edd', skills: ['Claude', 'ChatGPT', 'GitHub Copilot'] },
];

const experience: { roleKey: string; companyKey: string; periodKey: string }[] = [
  { roleKey: 'experience.mandai', companyKey: 'experience.mandaiCompany', periodKey: 'experience.mandaiPeriod' },
  { roleKey: 'experience.sgdatahub', companyKey: 'experience.sgdatahubCompany', periodKey: 'experience.sgdatahubPeriod' },
  { roleKey: 'experience.leeden', companyKey: 'experience.leedenCompany', periodKey: 'experience.leedenPeriod' },
  { roleKey: 'experience.ifast', companyKey: 'experience.ifastCompany', periodKey: 'experience.ifastPeriod' },
];

const projects: { titleKey: string; descKey: string; tags: string[]; accent: string }[] = [
  {
    titleKey: 'projects.mandaiTitle',
    descKey: 'projects.mandaiDesc',
    tags: ['React Native', 'Kotlin', 'Mapbox', 'Firebase'],
    accent: 'linear-gradient(90deg, #e63946, #e76f51)',
  },
  // Clite Terminal is kept private for now.
  // {
  //   titleKey: 'projects.cliteTitle',
  //   descKey: 'projects.cliteDesc',
  //   tags: ['Android', 'Adyen SDK'],
  //   accent: 'linear-gradient(90deg, #457b9d, #2a9d8f)',
  // },
  {
    titleKey: 'projects.nusmartTitle',
    descKey: 'projects.nusmartDesc',
    tags: ['React Native', 'Firebase'],
    accent: 'linear-gradient(90deg, #f4a261, #e9c46a)',
  },
  {
    titleKey: 'projects.warehouseTitle',
    descKey: 'projects.warehouseDesc',
    tags: ['React Native', 'Redux', 'Realm', 'C#'],
    accent: 'linear-gradient(90deg, #2a9d8f, #457b9d)',
  },
];

const hobbies: {
  key: string;
  icon: string;
  images: string[];
  accent: string;
  accentColor: string;
  activityKeys: string[];
}[] = [
  {
    key: 'hiking',
    icon: '🥾',
    images: [hikeImg, hikeImg2],
    accent: 'linear-gradient(90deg, #2a9d8f, #4ECDC4)',
    accentColor: '#2a9d8f',
    activityKeys: [
      'hobbies.activities.nepalAbc',
      'hobbies.activities.yubeng',
      'hobbies.activities.rinjani',
      'hobbies.activities.kinabalu',
    ],
  },
  {
    key: 'diving',
    icon: '🤿',
    images: [diveImg],
    accent: 'linear-gradient(90deg, #457b9d, #9d4edd)',
    accentColor: '#457b9d',
    activityKeys: [
      'hobbies.activities.ow',
      'hobbies.activities.aow',
    ],
  },
  {
    key: 'adventurous',
    icon: '🏔️',
    images: [advImg, advImg2],
    accent: 'linear-gradient(90deg, #e63946, #e76f51)',
    accentColor: '#e63946',
    activityKeys: [
      'hobbies.activities.ultralight',
      'hobbies.activities.paragliding',
      'hobbies.activities.socotra',
    ],
  },
];

const NAV_LINKS = [
  { id: 'about', labelKey: 'nav.about' },
  { id: 'skills', labelKey: 'nav.skills' },
  { id: 'experience', labelKey: 'nav.experience' },
  { id: 'projects', labelKey: 'nav.projects' },
  { id: 'hobbies', labelKey: 'nav.hobbies' },
  { id: 'contact', labelKey: 'nav.contact' },
];

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return progress;
}

function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function CountUp({ end, duration = 1500, suffix = '', trigger }: { end: number; duration?: number; suffix?: string; trigger: boolean }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    const startTime = performance.now();
    let rafId = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.floor(end * eased));
      if (t < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [end, duration, trigger]);
  return <>{value}{suffix}</>;
}

type RevealDirection = 'up' | 'left' | 'right' | 'scale';

function HobbyImageSlider({ images, intervalMs = 6000 }: { images: string[]; intervalMs?: number }) {
  const [activeIdx, setActiveIdx] = useState(0);
  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setActiveIdx((i) => (i + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [images.length, intervalMs]);

  return (
    <HobbySliderContainer>
      {images.map((img, i) => (
        <HobbySlide key={i} image={img} active={i === activeIdx} />
      ))}
      {images.length > 1 && (
        <HobbySliderDots>
          {images.map((_, i) => (
            <HobbySliderDot
              key={i}
              active={i === activeIdx}
              onClick={() => setActiveIdx(i)}
              aria-label={`slide ${i + 1}`}
            />
          ))}
        </HobbySliderDots>
      )}
    </HobbySliderContainer>
  );
}

function Reveal({
  children,
  direction = 'up',
  delay = 0,
}: {
  children: React.ReactNode;
  direction?: RevealDirection;
  delay?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const initialTransform = (() => {
    switch (direction) {
      case 'left': return 'translateX(-32px)';
      case 'right': return 'translateX(32px)';
      case 'scale': return 'scale(0.92)';
      default: return 'translateY(28px)';
    }
  })();
  const style: React.CSSProperties = {
    opacity: inView ? 1 : 0,
    transform: inView ? 'none' : initialTransform,
    transition: `opacity 0.7s ease ${delay}ms, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: 'opacity, transform',
  };
  return (
    <RevealOnScroll ref={ref} visible={inView} style={style}>
      {children}
    </RevealOnScroll>
  );
}

function Login() {
  const { t, i18n } = useTranslation();
  const uiIsLight = useAppSelector(uiIsLightSelector);
  const dispatch = useDispatch();
  const currentYear = new Date().getFullYear();
  const progress = useScrollProgress();
  const [showTop, setShowTop] = useState(false);
  const { ref: statsRef, inView: statsInView } = useInView<HTMLDivElement>(0.3);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const toggleLang = () => i18n.changeLanguage(i18n.language === 'zh' ? 'en' : 'zh');

  return (
    <OverallContainer>
      <ScrollProgressBar progress={progress} />

      <StyledAppBar sx={{ bgcolor: uiIsLight ? 'white' : "#0c1538", color: !uiIsLight ? 'white' : "rgba(0, 0, 0, 0.6)", backdropFilter: 'blur(10px)' }}>
        <AppBarInner>
          <Typography variant="h5" component="div" sx={{ display: 'flex', alignItems: 'center' }}>
            <MainSwitch
              sx={{ m: 1 }}
              defaultChecked
              onChange={() => dispatch(setIsLight(!uiIsLight))}
              isLight={uiIsLight}
              checked={!uiIsLight}
            />
            {t('hero.name')}
          </Typography>
          <NavLinksContainer>
            {NAV_LINKS.map((link) => (
              <NavLink key={link.id} href={`#${link.id}`} isLight={uiIsLight}>
                {t(link.labelKey)}
              </NavLink>
            ))}
            <LangToggleButton isLight={uiIsLight} onClick={toggleLang} aria-label="toggle language">
              {i18n.language === 'zh' ? 'EN' : '中文'}
            </LangToggleButton>
          </NavLinksContainer>
        </AppBarInner>
      </StyledAppBar>
      <StyledToolbar />

      <section id="about">
        <HeroLayout>
          <HeroImageSide>
            <Reveal direction="left">
              <ProfileImageWrapper isLight={uiIsLight}>
                <ProfileImageInner isLight={uiIsLight}>
                  <MainImage isLight={uiIsLight} />
                </ProfileImageInner>
              </ProfileImageWrapper>
            </Reveal>
          </HeroImageSide>
          <HeroTextSide>
            <Reveal direction="right">
              <HeroNameText isLight={uiIsLight}>{t('hero.name')}</HeroNameText>
            </Reveal>
            <Reveal direction="right" delay={80}>
              <HeroRoleText isLight={uiIsLight}>{t('hero.role')}</HeroRoleText>
            </Reveal>
            <Reveal direction="right" delay={160}>
              <HeroBio isLight={uiIsLight}>{t('hero.bio')}</HeroBio>
            </Reveal>
          </HeroTextSide>
        </HeroLayout>
      </section>

      <SectionDivider isLight={uiIsLight}>
        <SectionDividerDot isLight={uiIsLight} />
      </SectionDivider>

      <StatsContainer ref={statsRef}>
        <StatCard isLight={uiIsLight} accent="linear-gradient(90deg, #e63946, #e76f51)">
          <StatValue isLight={uiIsLight} accent="linear-gradient(135deg,#e63946,#e76f51)">
            <CountUp end={7} suffix="+" trigger={statsInView} />
          </StatValue>
          <StatLabel isLight={uiIsLight}>{t('stats.yearsMobile')}</StatLabel>
        </StatCard>
        <StatCard isLight={uiIsLight} accent="linear-gradient(90deg, #2a9d8f, #4ECDC4)">
          <StatValue isLight={uiIsLight} accent="linear-gradient(135deg,#2a9d8f,#4ECDC4)">
            🌿
          </StatValue>
          <StatLabel isLight={uiIsLight}>{t('stats.natureLover')}</StatLabel>
        </StatCard>
        <StatCard isLight={uiIsLight} accent="linear-gradient(90deg, #457b9d, #9d4edd)">
          <StatValue isLight={uiIsLight} accent="linear-gradient(135deg,#457b9d,#9d4edd)">
            🧭
          </StatValue>
          <StatLabel isLight={uiIsLight}>{t('stats.explorer')}</StatLabel>
        </StatCard>
      </StatsContainer>

      <SectionDivider isLight={uiIsLight}>
        <SectionDividerDot isLight={uiIsLight} />
      </SectionDivider>

      <section id="skills">
        <SectionHeadingContainer>
          <SectionHeading isLight={uiIsLight}>{t('sections.skills')}</SectionHeading>
        </SectionHeadingContainer>
        <SkillsContainer>
          {skillGroups.map((group, idx) => (
            <Reveal key={group.key} direction="up" delay={idx * 80}>
              <SkillCategoryBlock isLight={uiIsLight} accent={group.accent}>
                <SkillCategoryLabel isLight={uiIsLight} accent={group.accent}>
                  {t(`skillCategories.${group.key}`)}
                </SkillCategoryLabel>
                <SkillChipRow>
                  {group.skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      size="small"
                      sx={{
                        bgcolor: 'transparent',
                        color: uiIsLight ? group.accent : `${group.accent}dd`,
                        border: `1px solid ${group.accent}55`,
                        fontWeight: 600,
                        fontSize: '12px',
                        transition: 'all 0.2s',
                        '&:hover': {
                          bgcolor: uiIsLight ? `${group.accent}12` : `${group.accent}22`,
                          borderColor: group.accent,
                        },
                      }}
                    />
                  ))}
                </SkillChipRow>
              </SkillCategoryBlock>
            </Reveal>
          ))}
        </SkillsContainer>
      </section>

      <SectionDivider isLight={uiIsLight}>
        <SectionDividerDot isLight={uiIsLight} />
      </SectionDivider>

      <section id="experience">
        <SectionHeadingContainer>
          <SectionHeading isLight={uiIsLight}>{t('sections.experience')}</SectionHeading>
        </SectionHeadingContainer>
        <TimelineContainer>
          {experience.map((item, idx) => (
            <Reveal key={item.roleKey} direction="left" delay={idx * 100}>
              <TimelineItem isLight={uiIsLight}>
                <TimelineDate isLight={uiIsLight}>{t(item.periodKey)}</TimelineDate>
                <TimelineRole isLight={uiIsLight}>{t(item.roleKey)}</TimelineRole>
                <TimelineCompany isLight={uiIsLight}>{t(item.companyKey)}</TimelineCompany>
              </TimelineItem>
            </Reveal>
          ))}
        </TimelineContainer>
      </section>

      <SectionDivider isLight={uiIsLight}>
        <SectionDividerDot isLight={uiIsLight} />
      </SectionDivider>

      <section id="projects">
        <SectionHeadingContainer>
          <SectionHeading isLight={uiIsLight}>{t('sections.projects')}</SectionHeading>
        </SectionHeadingContainer>
        <ProjectsGrid>
          {projects.map((project, idx) => (
            <Reveal key={project.titleKey} direction="scale" delay={idx * 90}>
              <ProjectCard isLight={uiIsLight} accent={project.accent}>
                <ProjectTitle isLight={uiIsLight}>{t(project.titleKey)}</ProjectTitle>
                <ProjectDescription isLight={uiIsLight}>{t(project.descKey)}</ProjectDescription>
                <ProjectTagRow>
                  {project.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      sx={{
                        bgcolor: uiIsLight ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.08)',
                        color: uiIsLight ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.85)',
                        fontSize: '11px',
                      }}
                    />
                  ))}
                </ProjectTagRow>
              </ProjectCard>
            </Reveal>
          ))}
        </ProjectsGrid>
      </section>

      <SectionDivider isLight={uiIsLight}>
        <SectionDividerDot isLight={uiIsLight} />
      </SectionDivider>

      <section id="hobbies">
        <SectionHeadingContainer>
          <SectionHeading isLight={uiIsLight}>{t('sections.hobbies')}</SectionHeading>
        </SectionHeadingContainer>
        <HobbiesContainer>
          {hobbies.map((hobby, idx) => (
            <Reveal key={hobby.key} direction="up" delay={idx * 120}>
              <HobbyCard isLight={uiIsLight} accent={hobby.accent}>
                <HobbyImageSlider images={hobby.images} />
                <HobbyContent>
                  <HobbyCardTitle isLight={uiIsLight} accent={hobby.accentColor}>
                    <HobbyCardIcon>{hobby.icon}</HobbyCardIcon>
                    {t(`hobbies.${hobby.key}`)}
                  </HobbyCardTitle>
                  <HobbyActivities>
                    {hobby.activityKeys.map((activityKey) => (
                      <HobbyActivity key={activityKey} isLight={uiIsLight} accent={hobby.accentColor}>
                        {t(activityKey)}
                      </HobbyActivity>
                    ))}
                  </HobbyActivities>
                </HobbyContent>
              </HobbyCard>
            </Reveal>
          ))}
        </HobbiesContainer>
      </section>

      <SectionDivider isLight={uiIsLight}>
        <SectionDividerDot isLight={uiIsLight} />
      </SectionDivider>

      <section id="contact">
        <Reveal direction="scale">
          <ContactSection isLight={uiIsLight}>
            <ContactHeading isLight={uiIsLight}>{t('contact.heading')}</ContactHeading>
            <ContactButtonRow>
              <ContactButton
                isLight={uiIsLight}
                variant="primary"
                href="mailto:smallmoney.yap@hotmail.com"
              >
                <EmailIcon />
                {t('contact.email')}
              </ContactButton>
              <ContactButton
                isLight={uiIsLight}
                variant="secondary"
                href="https://www.linkedin.com/in/victor-yap-9b63b8174"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
                {t('contact.linkedin')}
              </ContactButton>
            </ContactButtonRow>
            <ContactCopyright isLight={uiIsLight}>
              © {currentYear} {t('footer.copyright')}
            </ContactCopyright>
          </ContactSection>
        </Reveal>
      </section>

      <BackToTopButton
        onClick={scrollToTop}
        aria-label="back to top"
        isLight={uiIsLight}
        visible={showTop}
      >
        <KeyboardArrowUpIcon />
      </BackToTopButton>
    </OverallContainer>
  );
}

export default memo(Login);
