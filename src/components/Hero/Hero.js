import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';

const Hero = () => {
	return (
		<HeroSection>
			<HeroVideo src="./assets/hero.mp4" autoPlay muted />
			<Container>
				<MainHeading>Data science and artificial intelligence services.</MainHeading>
				<HeroText>
					We provide the best data science and artificial intelligence services for clients worldwide
				</HeroText>
				<ButtonWrapper>
					<Link to="signup">
						<Button>subscribe to our services</Button>
					</Link>
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;
