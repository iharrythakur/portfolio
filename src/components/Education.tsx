import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const EducationSection = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  position: relative;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 4rem;
  background: linear-gradient(45deg, #00f2fe, #4facfe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const EducationCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
`;

const Institution = styled.h3`
  font-size: 2rem;
  color: #4facfe;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Degree = styled.h4`
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Duration = styled.p`
  color: #a0a0a0;
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

const GlowEffect = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150%;
  height: 150%;
  background: radial-gradient(circle, rgba(79, 172, 254, 0.1) 0%, rgba(79, 172, 254, 0) 70%);
  pointer-events: none;
  z-index: 1;
`;

const Education = () => {
  return (
    <EducationSection>
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Education
      </SectionTitle>

      <EducationCard
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
      >
        <GlowEffect />
        <Institution>Thapar Institute of Engineering and Technology</Institution>
        <Degree>B.E in Computer Engineering</Degree>
        <Duration>2021 – 2025</Duration>
      </EducationCard>
    </EducationSection>
  );
};

export default Education; 