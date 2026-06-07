import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import styles from './WhyBuy.module.css';

const reasons = [
  { n: '01', title: 'The Name Is the Alpha',          text: '$PUMPWORK literally says what it does. Pump. Work. It pumps because the community works for it. Tokens with self-fulfilling names consistently outperform in bull markets.' },
  { n: '02', title: 'Viral Twitter Momentum',         text: 'The $PUMPWORK community on Twitter is growing faster than almost any token at this cap. Social momentum is the single best predictor of short-term price action.' },
  { n: '03', title: 'Zero Taxes, Zero Nonsense',      text: 'No buy tax. No sell tax. No hidden fees. Every dollar you put in works FOR you. Pure free-market token mechanics — the way it should be.' },
  { n: '04', title: '1000x Is Still on the Table',   text: 'At current market cap, a 1000x would put $PUMPWORK at ~$1B. That\'s the size of hundreds of existing tokens. $WIF, $BONK, $POPCAT all got there. Early believers won big.' },
  { n: '05', title: 'Dexscreener Trending = Rocket', text: 'Once $PUMPWORK hits Dexscreener trending, the next wave floods in automatically. With current volume trajectory, that moment is closer than you think.' },
  { n: '06', title: 'You Found It First',             text: 'The biggest gains go to those who show up early and hold conviction. You\'re reading this before the masses arrive. That\'s the edge. Use it or lose it.' },
];

export default function WhyBuy() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section id="why" className={styles.section} ref={ref}>
      <span className="section-tag">Why Buy</span>
      <h2 className="section-title">6 Reasons to Ape Now</h2>
      <p className="section-lead">
        Not financial advice. But if it were, here's why $PUMPWORK is the play of the cycle.
      </p>

      <ul className={styles.list}>
        {reasons.map((r, i) => (
          <motion.li
            key={r.n}
            className={styles.item}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.12, duration: 0.5, ease: 'easeOut' }}
            whileHover={{ x: 6, borderColor: 'rgba(0,255,136,0.4)' }}
          >
            <div className={styles.num}>{r.n}</div>
            <div className={styles.content}>
              <h3 className={styles.title}>{r.title}</h3>
              <p className={styles.text}>{r.text}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
