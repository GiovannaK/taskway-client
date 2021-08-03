import Head from 'next/head';
import Image from 'next/image';
import Button from '@material-ui/core/Button';
import { HomeTopBar } from '../components/HomeTopBar';
import { HeroSection } from '../components/HeroSection';
import { Features } from '../components/Features';
import { FooterSection } from '../components/FooterSection';

export default function Home() {
  return (
    <>
      <HomeTopBar />
      <HeroSection />
      <Features />
      <FooterSection />
    </>
  );
}
