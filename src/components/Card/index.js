import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

function CardContainer({href, children}) {
  return (
    <Link
      href={href}
      className={clsx('card padding--md', styles.cardContainer)}>
      {children}
    </Link>
  );
}

function CardA({iconPath, title, href, description}) {
  return (
    <CardContainer href={href}>
      <Heading
        as="h2"
        className={styles.cardTitle}
        title={title}>
        {iconPath && (
          <img className={styles.cardIcon} src={iconPath} alt={title}/>
        )} {title}
      </Heading>
      {description && (
        <sub
          className={styles.cardDescription}
          title={description}>
          {description}
        </sub>
      )}
    </CardContainer>
  );
}
export default function Card({iconPath, title, href, description}) {
  return <CardA iconPath={iconPath} title={title} href={href} description={description} />;
}
