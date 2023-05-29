import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from "styled-components";
import alertImg from "../../assets/alert.avif";
import introductionImg from "../../assets/introduction.jpg";
import monitoringImg from "../../assets/monitoring.jpg";
import usingMobileImg from "../../assets/using_mobile.jpg";
import { Header } from "../../components/Header/Header";

export function Dashboard() {
    return (
        <>
            <Header />
            <IntroSection>
                <IntroContainer>
                    <IntroInformation>
                        <InformationHeading>
                            Environmental Monitoring System
                        </InformationHeading>
                        <InformationSubHeading>
                            Experience cost-effective and efficient environmental monitoring with our advanced system, empowering you to analyze real-time data for sustainable living.
                        </InformationSubHeading>
                        <Button variant="contained"
                            sx={{
                                marginTop: '20px',
                                // padding: '20px',
                                width: '100px',
                                backgroundColor: '#535CE8',
                                fontFamily: 'Poppins',
                                textTransform: 'none',
                                ':hover': {
                                    backgroundColor: '#3a45e4'
                                }
                            }}
                            size='medium'
                            type="submit"
                        >
                            Join us
                        </Button>
                    </IntroInformation>
                    <IntroImageContainer>
                        <IntroImage></IntroImage>
                    </IntroImageContainer>
                </IntroContainer>
            </IntroSection>

            <FeaturesSection>
                <FeaturesContainer>
                    <FeaturesHeading>
                        Product Features
                    </FeaturesHeading>
                    <FeaturesSubHeading>
                        The system offers cost-effective and scalable environmental monitoring, real-time data display on a mobile platform, proactive alerts for potential risks, and empowers users with actionable environmental information.
                    </FeaturesSubHeading>
                    <FeaturesCardContainer>
                        <Card sx={{ maxWidth: 345, borderRadius: '10px' }}>
                            <CardMedia
                                sx={{ height: 250 }}
                                image={monitoringImg}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" fontFamily={'Poppins'} sx={{
                                    textAlign: 'left',
                                    fontWeight: '500'
                                }}>
                                    Instant data monitoring
                                </Typography>
                                <Typography variant="body2" color="text.secondary" fontFamily={'Poppins'} sx={{
                                    textAlign: 'left',
                                    marginBottom: '10px'
                                }}>
                                    Real-time data monitoring enables immediate insights and informed decision-making.
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{ maxWidth: 345, borderRadius: '10px' }}>
                            <CardMedia
                                sx={{ height: 250 }}
                                image={alertImg}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" fontFamily={'Poppins'} sx={{
                                    textAlign: 'left',
                                    fontWeight: '500'
                                }}>
                                    Timely Risk Alerts
                                </Typography>
                                <Typography variant="body2" color="text.secondary" fontFamily={'Poppins'} sx={{
                                    textAlign: 'left',
                                    marginBottom: '10px'
                                }}>
                                    Proactive alerts ensure timely response to potential risks.
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{ maxWidth: 345, borderRadius: '10px' }}>
                            <CardMedia
                                sx={{ height: 250 }}
                                image={usingMobileImg}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" fontFamily={'Poppins'} sx={{
                                    textAlign: 'left',
                                    fontWeight: '500'
                                }}>
                                    Mobile platform
                                </Typography>
                                <Typography variant="body2" color="text.secondary" fontFamily={'Poppins'} sx={{
                                    textAlign: 'left',
                                    marginBottom: '10px'
                                }}>
                                    Convenient mobile platform for instant data access and alerts.
                                </Typography>
                            </CardContent>
                        </Card>
                    </FeaturesCardContainer>
                </FeaturesContainer>
            </FeaturesSection>

            <GetStartedSection>
                <GetStartedContainer>
                    <GetStartedHeading>
                        Get started!
                    </GetStartedHeading>
                    <GetStartedSubHeading>
                        Start experience the transformative benefits of real-time environmental monitoring, empowering you to safeguard your health and well-being with actionable insights.
                    </GetStartedSubHeading>
                    <Button variant="contained"
                        sx={{
                            marginTop: '30px',
                            // padding: '20px',
                            width: '120px',
                            backgroundColor: '#FFFFFF',
                            fontFamily: 'Poppins',
                            textTransform: 'none',
                            color: '#171a1f',
                            ':hover': {
                                backgroundColor: '#f5f5f5'
                            }
                        }}
                        size='medium'
                        type="submit"
                    >
                        Contact us
                    </Button>
                </GetStartedContainer>
            </GetStartedSection>
        </>
    )
}

const IntroSection = styled.section`
    display: flex;
    justify-content: center;
    padding: 80px
`

const IntroContainer = styled.div`
    max-width: 1153px;
    display: flex;
    justify-content: center;
`

const IntroInformation = styled.div`
    width: 55%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px;
`

const IntroImageContainer = styled.div`
    width: 45%;
`

const IntroImage = styled.img`
    content: url(${introductionImg});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 8px;
    border: 1px solid grey;
`

const InformationHeading = styled.h1`
    font-weight: bold;
    font-size: 48px;
    color: #171a1f;
`

const InformationSubHeading = styled.h6`
    margin-top: 20px;
    padding-right: 30px;
    color: #9095a1;
`

const FeaturesSection = styled.section`
    display: flex;
    justify-content: center;
`

const FeaturesContainer = styled.div`
    max-width: 1153px;
    text-align: center;
`

const FeaturesHeading = styled.h1`
    font-weight: bold;
    font-size: 48px;
    color: #171a1f;
`

const FeaturesSubHeading = styled.h6`
    margin-top: 20px;
    padding: 0 80px;
    color: #9095a1;
`

const FeaturesCardContainer = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 100px;
`

const GetStartedSection = styled.div`
    border-radius: 8px;
    margin: 0 auto;
    max-width: 1153px;
    position: relative;
    background-image: linear-gradient(90deg,#764fe3 0%,#7592ee 100%);
`

const GetStartedContainer = styled.div`
    max-width: 1153px;
    text-align: center;
    padding: 50px 0;
    background-image: url(https://d2kpe7grvhf8ri.cloudfront.net/website/optimized_images/home-page/home-2.png);
    background-position: bottom right;
    background-repeat: no-repeat;
    background-size: 50% auto;
`

const GetStartedHeading = styled.h1`
    font-weight: bold;
    font-size: 48px;
    color: #FFFFFF;
`

const GetStartedSubHeading = styled.h6`
    margin-top: 20px;
    padding: 0 200px;
    color: #FFFFFF;
`


