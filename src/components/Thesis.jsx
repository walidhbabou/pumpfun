import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import styles from './Thesis.module.css';

const cards = [
  { icon: '🔥', title: 'Strongest Narrative',      text: 'In a market obsessed with work-to-earn, $PUMPWORK captures the zeitgeist: put in the work, get the pump. The name says everything. The market rewards narratives that stick — and this one sticks.' },
  { icon: '👥', title: 'Diamond-Hand Community',   text: '$PUMPWORK holders don\'t paper-hand. Built from day one with real believers. Organic growth, genuine conviction — no bots, no fake volume. Just a community stacking bags together.' },
  { icon: '📊', title: 'Perfect Entry Point',      text: 'Early-stage gems are found before the masses arrive. You\'re here early. The chart pattern, volume profile, holder growth — every signal points one direction: UP.' },
  { icon: '🔒', title: 'LP Burned, Zero Rug Risk', text: 'LP is burned. Dev wallet is transparent on-chain. Zero hidden taxes. No sneaky allocations. $PUMPWORK is as clean as it gets — pure community token mechanics.' },
  { icon: '⚡', title: 'Solana Speed Advantage',   text: 'Built on the fastest L1 in crypto. Sub-cent fees, instant finality. When the next leg hits, $PUMPWORK traders will be in and out while ETH users are still confirming.' },
  { icon: '🌙', title: 'Moon Math Is Simple',      text: 'Small cap + viral narrative + dedicated community = 100x–1000x potential. $WIF, $BONK, $POPCAT all proved it. $PUMPWORK is next. The math doesn\'t lie.' },
];

export default function Thesis() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="thesis" className={styles.section} ref={ref}>
      <span className="section-tag">Investment Thesis</span>
      <h2 className="section-title">Why $PUMPWORK Wins</h2>
      <p className="section-lead">
        Every bull cycle needs a breakout token. $PUMPWORK is built on fundamentals
        the market actually rewards: community, narrative, and relentless momentum.
      </p>

      <div className={styles.grid}>
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            className={styles.card}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.55, ease: 'easeOut' }}
            whileHover={{ y: -8, boxShadow: '0 0 40px rgba(0,255,136,0.2)', borderColor: '#00ff88' }}
          >
            <span className={styles.icon}>{c.icon}</span>
            <div className={styles.cardTitle}>{c.title}</div>
            <p className={styles.cardText}>{c.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
