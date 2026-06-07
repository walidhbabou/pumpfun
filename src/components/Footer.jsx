import { motion } from 'framer-motion';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <motion.div
        className={styles.logo}
        animate={{ textShadow: ['0 0 15px #00ff88', '0 0 40px #00ff88', '0 0 15px #00ff88'] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        $PUMPWORK
      </motion.div>
      <p className={styles.tagline}>The Hardest Working Token on Solana 🚀🌙</p>
      <p className={styles.disclaimer}>
        Not financial advice. Crypto is high risk. DYOR. NFA.
      </p>
    </footer>
  );
}
