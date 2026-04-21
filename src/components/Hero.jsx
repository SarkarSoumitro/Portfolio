import React from 'react';
import styles from './Hero.module.css';

export default function Hero({ data }) {
  return (
    <section className={styles.hero}>
      <div className={styles.eyebrow}>
        <span>{data.role}</span>
      </div>

      <h1 className={styles.name}>
        {data.name.first} <em>{data.name.last}</em>
      </h1>

      <p className={styles.tagline}>{data.tagline}</p>

      <div className={styles.links}>
        <a href={data.contact.github} target="_blank" rel="noreferrer" className={styles.link}>
          ↗ GitHub
        </a>
        <a href={data.contact.linkedin} target="_blank" rel="noreferrer" className={styles.link}>
          ↗ LinkedIn
        </a>
        <a href={`mailto:${data.contact.email}`} className={styles.link}>
          ✉ {data.contact.email}
        </a>
      </div>
    </section>
  );
}
