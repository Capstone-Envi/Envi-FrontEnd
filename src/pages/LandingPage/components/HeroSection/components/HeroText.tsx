import { motion } from 'framer-motion';
import { animationStart, reveal } from 'src/utils/animation';
import { useNavigate } from 'react-router-dom';
import defaultValue from 'src/utils/default';

const HeroText = () => {
  const navigate = useNavigate();

  return (
    <div className={`h-auto md:w-1/2 flex-col bg-transparent`}>
      <div className={`flex flex-col gap-5 mb-5`}>
        <motion.h1
          variants={reveal}
          initial="hiddenVariant"
          animate="revealedVariant"
          transition={{ delay: animationStart + 1, duration: 0.5 }}
          className="font-extrabold font-exo sm:text-start text-center text-[50px] sm:text-[65px]"
        >
          <span className="animate-text bg-gradient-to-r from-primary-500 via-primary-300 to-primary bg-clip-text text-transparent">
            Orchids Greenhouse
          </span>{' '}
          <span className="animate-text text-[40px] sm:text-[50px] bg-gradient-to-r from-slate-500 to-slate-800 bg-clip-text text-transparent">
            Environmental Monitoring
          </span>
        </motion.h1>
        <motion.h2
          variants={reveal}
          initial="hiddenVariant"
          animate="revealedVariant"
          transition={{ delay: animationStart + 1.2, duration: 0.5 }}
          className="leading-relaxed  font-medium text-t6 text-gray-500 sm:text-start text-center"
        >
          {defaultValue.heroSectionDescription}
        </motion.h2>
        <motion.button
          variants={reveal}
          initial="hiddenVariant"
          animate="revealedVariant"
          transition={{ delay: animationStart + 1.4, duration: 0.5 }}
          onClick={() => navigate('/login')}
          className="py-2 sm:w-fit px-10 border-primary border bg-white rounded-full text-primary text-xl font-medium mb-[40px] mt-[20px]"
        >
          Join us
        </motion.button>
      </div>
    </div>
  );
};

export default HeroText;
