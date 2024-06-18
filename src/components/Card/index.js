import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

function CardContainer({href, children}) {
  return (
    <Link
      href={href}
      className={clsx('card padding--md margin-bottom--md', styles.cardContainer)}>
      {children}
    </Link>
  );
}

function CardA({iconPath, title, center, href, description}) {
  return (
    <CardContainer  href={href}>
      <div style={{ textAlign: center ? 'center' : '' }}>
        <Heading
          as="h2"
          className={styles.cardTitle}
          title={title}>
          {iconPath && (
            <img className={styles.cardIcon} src={iconPath} alt={title}/>
          )} {title}
        </Heading>
      </div>
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
export default function Card({iconPath, title, center, href, description}) {
  return <CardA iconPath={iconPath} title={title} center={center} href={href} description={description} />;
}
