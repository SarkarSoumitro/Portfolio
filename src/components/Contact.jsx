import React from 'react';
import styles from './Contact.module.css';

export default function Contact({ contact }) {
  return (
    <section className={styles.section}>
      <div className={styles.block}>
        <h2 className={styles.heading}>
          Let's build<br />something great.
        </h2>
        <div className={styles.links}>
          <a href={`mailto:${contact.email}`} className={styles.link}>
            <span className={styles.dot} />
            {contact.email}
          </a>
          <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className={styles.link}>
            <span className={styles.dot} />
            {contact.phone}
          </a>
          <a href={contact.github} target="_blank" rel="noreferrer" className={styles.link}>
            <span className={styles.dot} />
            {contact.githubLabel}
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" className={styles.link}>
            <span className={styles.dot} />
            {contact.linkedinLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
