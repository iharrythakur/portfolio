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
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
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
  margin-bottom: 1.5rem;
  text-align: center;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled(motion.li)`
  color: #ffffff;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: '▹';
    color: #4facfe;
  }
`;

const skills = [
  {
    category: "Programming",
    items: [
      "HTML",
      "CSS",
      "C/C++",
      "Python",
      "JavaScript",
      "TypeScript",
      "SQL"
    ]
  },
  {
    category: "Tools/Frameworks",
    items: [
      "Git",
      "GitHub",
      "React.js",
      "LiveKit",
      "Flask",
      "FastAPI",
      "Postman",
      "ElasticSearch",
      "n8n",
      "VAPI"
    ]
  },
  {
    category: "AI/ML",
    items: [
      "Large Language Models (LLMs)",
      "Prompt Engineering",
      "Natural Language Processing (NLP)",
      "RLHF",
      "RAG",
      "LLM Fine-tuning"
    ]
  },
  {
    category: "Databases",
    items: [
      "PostgreSQL",
      "MySQL",
      "Firebase Firestore",
      "Redis"
    ]
  }
];

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
        {skills.map((category, index) => (
          <SkillCategory
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <CategoryTitle>{category.category}</CategoryTitle>
            <SkillList>
              {category.items.map((skill, i) => (
                <SkillItem
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  {skill}
                </SkillItem>
              ))}
            </SkillList>
          </SkillCategory>
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
};

export default Skills; 