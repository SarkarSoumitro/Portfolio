import React from 'react';
import styles from './Skills.module.css';

export default function Skills({ skills }) {
  return (
    <section className={styles.section}>
      <div className={styles.label}>Expertise</div>
      <div className={styles.grid}>
        {skills.map((s) => (
          <div key={s.name} className={styles.cell}>
            <div className={styles.name}>{s.name}</div>
            <div className={styles.sub}>{s.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
