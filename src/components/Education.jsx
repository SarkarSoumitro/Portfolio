import React from "react";
import styles from "./Education.module.css";

export default function Education({ education, awards, publications }) {
  const combined = [...awards, ...(publications || [])].sort((a, b) => {
    const yearA = parseInt(a.year.split(" ")[0]);
    const yearB = parseInt(b.year.split(" ")[0]);
    return yearB - yearA;
  });

  return (
    <section className={styles.section}>
      <div className={styles.cols}>
        <div className={styles.col}>
          <div className={styles.label}>Education</div>
          {education.map((e) => (
            <div key={e.degree} className={styles.row}>
              <div className={styles.year}>{e.years}</div>
              <div>
                <div className={styles.degree}>{e.degree}</div>
                <div className={styles.school}>{e.school}</div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.col}>
          <div className={styles.label}>Awards & Publications</div>
          {combined.map((item) => (
            <div key={item.title} className={styles.row}>
              <div className={styles.year}>{item.year}</div>
              <div>
                <div className={styles.degree}>{item.title}</div>
                <div className={styles.school}>{item.desc}</div>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    View Publication →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
