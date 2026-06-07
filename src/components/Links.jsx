import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import styles from './Links.module.css';

const CA = 'PUMPWORK_CA_ADDRESS_HERE';

const links = [
  { icon: '📊', title: 'Dexscreener', sub: 'Live chart & trades',    href: `https://dexscreener.com/solana/${CA}` },
  { icon: '🐦', title: 'Twitter / X', sub: 'Community & alpha',       href: 'https://twitter.com/PUMPWORK_HANDLE'      },
  { icon: '⚡', title: 'Pump.fun',    sub: 'Easiest entry point',      href: 'https://pump.fun'                         },
  { icon: '🌀', title: 'Raydium',     sub: 'DEX with best liquidity',  href: 'https://raydium.io'                       },
];

export default function Links() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="links" className={styles.section} ref={ref}>
      <span className="section-tag">Get In</span>
      <h2 className="section-title" style={{ textAlign: 'center' }}>Join The Movement</h2>
      <p className="section-lead" style={{ margin: '0 auto 52px', textAlign: 'center' }}>
        Every second you wait is a candle you're not riding.
        Here's everything you need to become a $PUMPWORK holder.
      </p>

      <div className={styles.row}>
        {links.map((l, i) => (
          <motion.a
            key={l.title}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            whileHover={{ y: -10, borderColor: '#00ff88', boxShadow: '0 0 50px rgba(0,255,136,0.22)' }}
          >
            <span className={styles.icon}>{l.icon}</span>
            <div className={styles.title}>{l.title}</div>
            <div className={styles.sub}>{l.sub}</div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
