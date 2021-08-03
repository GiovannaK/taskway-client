import Head from 'next/head';
import Image from 'next/image';
import Button from '@material-ui/core/Button';
import { HomeTopBar } from '../components/HomeTopBar';
import { HeroSection } from '../components/HeroSection';

export default function Home() {
  return (
    <>
      <HomeTopBar />
      <HeroSection />
    </>
  );
}
