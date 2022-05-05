/* eslint-disable react/display-name */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/destructuring-assignment */
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

import '../i18n/config';
import '../styles/custom.scss';

import Main from '@/layout/Main';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
				<meta name="theme-color" content="#000000" />

				<meta property="og:title" content="QA POC" />
				<meta property="og:type" content="website" />

				<meta name="description" content="QA POC" />

				<title>QA POC</title>
			</Head>
			<Main>
				<Component {...pageProps} />
			</Main>
		</>
	);
}

export default MyApp;
