import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const CA = 'PUMPWORK_CA_ADDRESS_HERE';
const TWITTER = 'https://twitter.com/PUMPWORK_HANDLE';
const DEX = `https://dexscreener.com/solana/${CA}`;

export default function Hero() {
  const [copied, setCopied] = useState(false);

  function copyCA() {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  }

  return (
    <section className={styles.hero}>
      {/* moon */}
      <motion.div
        className={styles.moon}
        animate={{ y: [0, -14, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* badge */}
      <motion.div
        className={styles.badge}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        🟢 Live on Solana
      </motion.div>

      {/* rocket */}
      <motion.div
        className={styles.rocket}
        animate={{ y: [0, -20, -8, -24, 0], rotate: [-4, 5, -3, 6, -4] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        🚀
      </motion.div>

      {/* title */}
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.7 }}
      >
        $PUMPWORK
      </motion.h1>

      <motion.p
        className={styles.sub}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        The Hardest Working Token on Solana
      </motion.p>

      <motion.p
        className={styles.desc}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65 }}
      >
        While others are sleeping, <strong style={{ color: '#00ff88' }}>$PUMPWORK</strong> is
        out here grinding. Built different. Priced for now.
        Destined for the <strong style={{ color: '#ffd700' }}>moon</strong>.
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        className={styles.ctaRow}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <a href={DEX} target="_blank" rel="noreferrer" className="btn btn-primary">
          📈 Buy Now
        </a>
        <a href={TWITTER} target="_blank" rel="noreferrer" className="btn btn-outline">
          🐦 Twitter / X
        </a>
        <a href={DEX} target="_blank" rel="noreferrer" className="btn btn-gold">
          📊 Live Chart
        </a>
      </motion.div>

      {/* CA box */}
      <motion.div
        className={styles.caBox}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <span className={styles.caLabel}>CA</span>
        <span className={styles.caAddr}>{CA}</span>
        <motion.button
          className={styles.copyBtn}
          onClick={copyCA}
          whileTap={{ scale: 0.93 }}
          animate={copied ? { background: '#00ffcc' } : { background: '#00ff88' }}
        >
          {copied ? '✓ Copied!' : 'Copy'}
        </motion.button>
      </motion.div>

      {/* scroll hint */}
      <motion.div
        className={styles.scrollHint}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span>Scroll Down</span>
        <span>▼</span>
      </motion.div>
    </section>
  );
}
