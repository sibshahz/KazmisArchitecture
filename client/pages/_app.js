import { useEffect,useState } from 'react';
import '../styles/globals.css';
import Layout from '../components/layout';
import Head from 'next/head';
import '../components/hero-slider/hero-slider.scss';
import '../components/modal-slider/modal-slider.module.scss';
import { Provider } from 'react-redux';
import { store } from '../state/store';
import DataComponent from '../components/data-component/data-component.component';

export default function MyApp({ Component, pageProps }) {
  return (
    
    <Provider store={store}>
      <Layout>
        <Head>
          <meta name="viewport" content="viewport-fit=cover" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        	<meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <DataComponent />
        <Component {...pageProps} />
      </Layout>
      </Provider>
  )
}