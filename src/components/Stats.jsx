import { useInView } from 'react-intersection-observer';
import _CountUp from 'react-countup';
const CountUp = _CountUp.default ?? _CountUp;
import { motion } from 'framer-motion';
import styles from './Stats.module.css';

const items = [
  { label: 'Market Cap',      prefix: '$', end: 420000, suffix: '',    decimals: 0 },
  { label: 'Holders',         prefix: '',  end: 1337,   suffix: '+',   decimals: 0 },
  { label: '24h Volume',      prefix: '$', end: 87000,  suffix: '',    decimals: 0 },
  { label: 'LP Burned',       prefix: '',  end: 100,    suffix: '%',   decimals: 0 },
  { label: '1000x Potential', prefix: '',  end: 1000,   suffix: 'x',   decimals: 0 },
];

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className={styles.bar}>
      {items.map((it, i) => (
        <motion.div
          key={it.label}
          className={styles.item}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: i * 0.1, duration: 0.5 }}
        >
          <div className={styles.val}>
            {inView && (
              <CountUp
                start={0}
                end={it.end}
                duration={1.8}
                prefix={it.prefix}
                suffix={it.suffix}
                decimals={it.decimals}
                separator=","
              />
            )}
          </div>
          <div className={styles.lbl}>{it.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
