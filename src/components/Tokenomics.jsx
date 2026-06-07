import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import styles from './Tokenomics.module.css';

const cards = [
  { val: '1B',   lbl: 'Total Supply' },
  { val: '0%',   lbl: 'Buy Tax'      },
  { val: '0%',   lbl: 'Sell Tax'     },
  { val: '🔥',   lbl: 'LP Burned'    },
];

const bars = [
  { name: '🌊 Liquidity Pool', pct: 80, color: 'linear-gradient(90deg,#00ff88,#00ccaa)' },
  { name: '🔥 Burned',         pct: 15, color: 'linear-gradient(90deg,#ff4400,#ff8800)' },
  { name: '📣 Marketing',      pct: 5,  color: 'linear-gradient(90deg,#ffd700,#ff9900)' },
];

function ProgressBar({ name, pct, color, animate }) {
  return (
    <div className={styles.progRow}>
      <span className={styles.progName}>{name}</span>
      <div className={styles.progBg}>
        <motion.div
          className={styles.progFill}
          style={{ background: color }}
          initial={{ width: 0 }}
          animate={animate ? { width: `${pct}%` } : {}}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
      </div>
      <span className={styles.progPct}>{pct}%</span>
    </div>
  );
}

export default function Tokenomics() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="tokenomics" className={styles.section} ref={ref}>
      <span className="section-tag">Tokenomics</span>
      <h2 className="section-title">Fair Launch. Clean Structure.</h2>
      <p className="section-lead">
        Simple tokenomics designed for maximum upside and zero rug risk.
        No team allocation. No presale. Just a community-driven fair launch.
      </p>

      <div className={styles.grid}>
        {cards.map((c, i) => (
          <motion.div
            key={c.lbl}
            className={styles.card}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: i * 0.1, duration: 0.45 }}
            whileHover={{ y: -6, boxShadow: '0 0 30px rgba(255,215,0,0.18)' }}
          >
            <div className={styles.cardVal}>{c.val}</div>
            <div className={styles.cardLbl}>{c.lbl}</div>
          </motion.div>
        ))}
      </div>

      <div className={styles.bars}>
        {bars.map(b => (
          <ProgressBar key={b.name} {...b} animate={inView} />
        ))}
      </div>
    </section>
  );
}
