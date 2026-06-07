import { motion } from 'framer-motion';
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <motion.nav
      className={styles.nav}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className={styles.logo}>$PUMPWORK</div>
      <div className={styles.links}>
        {['#thesis','#why','#tokenomics','#links'].map((href, i) => (
          <motion.a
            key={href}
            href={href}
            className={styles.link}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i + 0.4 }}
          >
            {href.replace('#', '')}
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
}
