import { useTranslation } from "react-i18next";
import { OverallContainer } from "components/Common";
import { StyledListItem, ImageContainer, StyledToolbar, FooterIconButton, ContentText, ContentLeftText, ContentRowContainer, ContentCenterText, ContentContainer, SecondaryContent, ChartContentContainer, FooterContainer, MainImage, StyledAppBar } from './Main.Styles';
import { useState, useCallback, useMemo, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ListItem, ListItemText, Typography } from "@mui/material";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import MainSwitch from "components/MainSwitch/MainSwitch";
import { uiIsLightSelector } from "redux/ui/selector";
import { useAppSelector } from "redux/store";
import { setIsLight } from "redux/ui/reducer";
import { useDispatch } from "react-redux";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

function Login() {
  const { t } = useTranslation();
  const uiIsLight = useAppSelector(uiIsLightSelector);
  const dispatch = useDispatch();

  const rerouteToLink = (url: string) => {
    window.open(url, "_blank")
  }

  return (
    <OverallContainer>
      <StyledAppBar sx={{ bgcolor: uiIsLight ? 'white' : "#001e3c", color: !uiIsLight ? 'white' : "rgba(0, 0, 0, 0.6)" }} >
        <Typography
          variant="h5"
          component="div"
        ><MainSwitch sx={{ m: 1 }} defaultChecked onChange={val => dispatch(setIsLight(!uiIsLight))} isLight={uiIsLight} checked={!uiIsLight} />
          Victor Yap
        </Typography>
      </StyledAppBar>
      <StyledToolbar />
      <ContentContainer>
        <ImageContainer>
          <MainImage isLight={uiIsLight} />
        </ImageContainer>
      </ContentContainer>
      <ContentContainer>
        <ContentCenterText isLight={uiIsLight}>Victor Yap Cai Fu</ContentCenterText>
      </ContentContainer>
      <ContentContainer>
        <ContentText isLight={uiIsLight}>Hybrid mobile developer who is interested in exploring new things and finds any possibilities to solve
          problems. Strive for continued excellence, take advanced challenges. Competent in managing
          resources including task provided, planning for travel schedules. Passionate about the mobile app
          development and website development.</ContentText>
      </ContentContainer>
      <ContentContainer>
        <ContentCenterText isLight={uiIsLight}>Skills</ContentCenterText>
      </ContentContainer>
      <ChartContentContainer>
        <PolarArea
          data={
            {
              labels: ['React Native', 'ReactJS', 'Typescript', 'Next.js', 'Kotlin', 'C#', 'MSSQL', 'Firebase'],
              datasets: [
                {
                  label: '',
                  data: [9, 8, 7, 4, 6, 6, 7, 7],
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(220, 53, 69, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    // 'rgba(255, 204, 0, 0.5)',
                    'rgba(32, 201, 151, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(153, 102, 255, 0.5)'
                  ],
                  borderWidth: 1,
                },
              ],
            }}
        />
      </ChartContentContainer>
      <ContentContainer>
        <ContentCenterText isLight={uiIsLight}>Projects</ContentCenterText>
      </ContentContainer>
      <ContentRowContainer sx={{ width: '90%', margin: 'auto' }}>
        <StyledListItem alignItems="flex-start">
          <ListItemText
            sx={{ color: !uiIsLight ? 'white' : "#001e3c" }}
            primary="NUSmart Dining"
            secondary={
              <SecondaryContent>
                {['• Streamlines the process of NUS users to take orders from NUS canteen and avoid the queue during peak hours',
                  '• Enables the sales department to effectively monitor daily sales and operation status',
                  '• Available for download on both Google Play Store and App Store (NUSmart Dining)',
                ].map((val, index) => <ContentLeftText key={`${index}1`}>{val}</ContentLeftText>)}
              </SecondaryContent>
            }
          />
        </StyledListItem>
        <StyledListItem alignItems="flex-start">
          <ListItemText
            sx={{ color: !uiIsLight ? 'white' : "#001e3c" }}
            primary="Warehouse Management System for Leeden National Oxygen Ltd"
            secondary={<SecondaryContent>
              {['• Track the COVID-19 records of all on-site workers and office staffs',
                '• Provide Clock in & clock out function for security department',
                '• Facilitates effective inventory management in the warehouse department by using barcode scanner.',
                '• Streamlines transactions of gas container for the manufacturing department.',
                '• Internally support business daily operations of departments from Goods Receipt to Delivery Order.',
                '• Seamlessly support the integration with the current company system developed in C#, as well as external systems like SAP.',
                '• Developed using cutting-edge technologies such as React Native, Redux, Redux-thunk, and Realm.',
                '• Available for download on both Google Play Store and App Store (Leeden)',
              ].map((val, index) => <ContentLeftText key={`${index}2`}>{val}</ContentLeftText>)}
            </SecondaryContent>
            }
          />
        </StyledListItem>
      </ContentRowContainer>
      <FooterContainer isLight={uiIsLight}>Victor Yap 2023 <FooterIconButton onClick={() => rerouteToLink('https://www.linkedin.com/in/victor-yap-9b63b8174')} aria-label="linkedin">
        <LinkedInIcon sx={{ color: !uiIsLight ? 'white' : "#001e3c" }} />
      </FooterIconButton> <FooterIconButton onClick={() => rerouteToLink('mailto:smallmoney.yap@hotmail.com')} aria-label="email">
          <EmailIcon sx={{ color: !uiIsLight ? 'white' : "#001e3c" }} />
        </FooterIconButton>
      </FooterContainer>
    </OverallContainer>
  );
}

export default memo(Login);