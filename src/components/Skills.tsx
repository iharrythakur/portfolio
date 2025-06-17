import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Text } from '@react-three/drei';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const SkillsSection = styled.section`
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SkillCategory = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  color: #4facfe;
  margin-bottom: 1rem;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SkillItem = styled.li`
  color: #ffffff;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  
  &::before {
    content: '▹';
    color: #4facfe;
    margin-right: 0.5rem;
  }
`;

const skills = {
  languages: ['Python', 'C/C++', 'JavaScript', 'SQL'],
  frameworks: ['React.js', 'FastAPI', 'Flask', 'LiveKit'],
  tools: ['Git', 'GitHub', 'Postman', 'ElasticSearch', 'n8n'],
  AI_ML: ['LLMs', 'Prompt Engineering', 'RLHF', 'RAG', 'NLP'],
  databases: ['PostgreSQL', 'MySQL', 'Firebase Firestore', 'Redis']
};

const SkillSphere = () => {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      sphereRef.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[1, 32, 32]}>
      <meshStandardMaterial
        color="#4facfe"
        wireframe
        transparent
        opacity={0.2}
      />
    </Sphere>
  );
};

const Skills = () => {
  return (
    <SkillsSection>
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Skills
      </SectionTitle>

      <SkillsGrid>
        {Object.entries(skills).map(([category, items], index) => (
          <SkillCategory
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <CategoryTitle>
              {category.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </CategoryTitle>
            <SkillList>
              {items.map((skill) => (
                <SkillItem key={skill}>{skill}</SkillItem>
              ))}
            </SkillList>
          </SkillCategory>
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
};

export default Skills; 