import { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';

function AnimatedCounter({ finalNumber }) {
  const [count, setCount] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ count: finalNumber });
  }, [finalNumber, controls]);

  const formattedCount = (Math.round(count * 10) / 10).toFixed(1); // Redondea a 1 decimal y convierte a cadena

  return (
    <Box>
      <motion.span
        style={{ fontSize: '24px', fontWeight: 'bold' }}
        animate={controls}
        initial={{ count: 0 }}
      >
        {formattedCount} {/* Mostrará 4.9 sin imprecisión */}
      </motion.span>
    </Box>
  );
}

export default AnimatedCounter;
