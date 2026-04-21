import React from "react";
import styles from "./Projects.module.css";

export default function Projects({ projects }) {
  return (
    <section className={styles.section}>
      <div className={styles.label}>Selected Projects</div>
      <div className={styles.list}>
        {projects.map((p) => (
          <div key={p.num} className={styles.project}>
            <div className={styles.meta}>
              <span className={styles.num}>{p.num}</span>
              <div className={styles.tags}>
                {p.tags.map((t) => (
                  <span key={t} className={styles.tag}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.content}>
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.subtitle}>{p.subtitle}</p>
              <p className={styles.desc}>{p.description}</p>
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className={styles.ghLink}
              >
                View on GitHub →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
