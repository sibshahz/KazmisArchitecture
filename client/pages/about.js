import Head from 'next/head';
import { useEffect,useState } from 'react';
import cls from 'classnames';
import styles from '../styles/About.module.css';
import { TitleWrap } from '../components/title-wrap/title-wrap.component';
import aboutPic from '../public/images/aboutPic.jpg';
import { useGetAboutPageContentQuery } from '../state/api';


export default function About() {
  const { data, isLoading, isError } = useGetAboutPageContentQuery();
  const { attributes } = data?.data ?? {};
  const { page_title, sub_heading, heading, page_content } = attributes ?? {};
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Kazmis Site | {page_title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <TitleWrap title="About" />



        <div className={cls(styles.aboutIntro,'mx-auto max-w-7xl pl-10 pr-10 text-center')}>
          <h5>Architecture is about experience</h5>
          <h2>We are focused on modern architecture and interior design</h2>
        </div>

        <div className={cls('mx-auto max-w-7xl pl-10 pr-10 grid grid-cols-1 md:grid-cols-2 mb-10',styles.aboutContent)}>
          <div className={cls('xl:mr-12')}>
            <h3>Architectural and Interior Design</h3>

            <p>
            Kazmi&apos;s Architects is a Karachi based studio practice focused on modern design, 
            interiors and landscapes. From our inception in 2018, 
            we have delivered exceptional public and private environments that are stimulating 
            to occupy and fundamental to their surroundings. As a full-service firm, 
            Kazmi&apos;s is present on projects from start to finish
            </p>

            <p>
            At Kazmi&apos;s Architects, we pride ourselves on being a full-service firm, 
            involved in projects from inception to completion. Our team of talented architects,
             designers, and landscape experts work collaboratively to bring your vision to life. 
             By being present throughout the entire process, we ensure continuity, attention to detail,
              and a holistic approach to design.
            </p>

            <p>
            With a deep understanding of the local context and an unwavering commitment to excellence,
             we strive to deliver outstanding results. Whether it&apos;s crafting innovative architectural structures,
              designing inviting interiors, or transforming outdoor spaces into captivating landscapes, 
            our expertise and passion shine through in every project we undertake.
            </p>
            <p>
            Choose Kazmi&apos;s Architects for your next venture, and let us create remarkable environments 
            that are not only visually stunning but also functionally efficient, sustainable, and timeless. 
            We look forward to collaborating with you and exceeding your expectations in transforming spaces 
            into extraordinary experiences.
            </p>
          </div>

          <div className={cls('p-6 xl:ml-12 md:mt-11')}>
            <img src={aboutPic.src} alt='Kazmis Architecture' />
          </div>
        </div>

      </main>

    
    </div>
  )
}