/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React from 'react';
import Head from 'next/head';

export default function SEO({ headTitle }: any) {
  const hasHeadTitle = Boolean(headTitle);
  const baseTitle = 'Pinho Bravo - Encontre tranquilidade e aconchego em Campos do Jordão';
  const title = hasHeadTitle ? (`${headTitle} | ${baseTitle}`) : baseTitle;
  const description = 'Pinho Bravo, ';
  const image = 'https://cidades-theta.vercel.app/images/linha-do-bonde.jpg';
  const urlBase = 'https://cidades-theta.vercel.app/';

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={urlBase} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={urlBase} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
}
