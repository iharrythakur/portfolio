import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const ExperienceSection = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 4rem;
  background: linear-gradient(45deg, #00f2fe, #4facfe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ExperienceGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ExperienceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
`;

const CompanyHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
`;

const CompanyLogo = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  object-fit: contain;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem;
`;

const Role = styled.h3`
  font-size: 1.5rem;
  color: #4facfe;
  margin: 0;
`;

const Company = styled.h4`
  font-size: 1.2rem;
  color: #ffffff;
  margin: 0;
`;

const Duration = styled.p`
  color: #a0a0a0;
  font-size: 0.9rem;
  margin: 0;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const Achievement = styled.li`
  color: #ffffff;
  margin-bottom: 0.5rem;
  list-style-type: none;
  line-height: 1.5;
  
  &::before {
    content: '•';
    color: #4facfe;
    margin-right: 0.5rem;
  }
`;

const experiences = [
  {
    role: "AI Expert",
    company: "Outlier",
    duration: "Apr 2025 – Present",
    logo: "/images/companies/outlier.png",
    achievements: [
      "Contributed to Reinforcement Learning from Human Feedback (RLHF) projects, improving model output alignment and relevance by over 30% through fine-tuning strategies",
      "Crafted 2,000+ human-like coding prompts to boost model comprehension and generation across Python, JavaScript, and SQL domains",
      "Collaborated with prompt engineers to increase LLM evaluation coverage by 50%, driving improvements in reasoning and contextual accuracy"
    ],
    skills: ["RLHF", "Prompt Engineering", "LLM Evaluation", "Python", "JavaScript", "SQL"]
  },
  {
    role: "Cybersecurity Intern",
    company: "KyndleIT Consulting",
    duration: "Jan 2025 – Jun 2025",
    logo: "/images/companies/kyndleit.png",
    achievements: [
      "Configured and optimized Symantec Messaging Gateway (SMG), reducing false positives by 25% and enhancing phishing detection rates",
      "Monitored and triaged over 500 real-time security alerts, ensuring proactive response to malware & phishing",
      "Provided support to 10+ enterprise clients, improving security by adjusting SMG settings"
    ],
    skills: ["SMG", "Cybersecurity", "Email Security", "Alert Monitoring", "Threat Detection", "Client Support"]
  }
];

const Experience = () => {
  return (
    <ExperienceSection>
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Experience
      </SectionTitle>

      <ExperienceGrid>
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={exp.role}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <CompanyHeader>
              <CompanyLogo 
                src={exp.logo} 
                alt={`${exp.company} logo`}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://ui-avatars.com/api/?name=${exp.company}&background=4facfe&color=fff`;
                }}
              />
              <div>
                <Role>{exp.role}</Role>
                <Company>{exp.company}</Company>
              </div>
            </CompanyHeader>
            <Duration>{exp.duration}</Duration>
            <ul>
              {exp.achievements.map((achievement, i) => (
                <Achievement key={i}>{achievement}</Achievement>
              ))}
            </ul>
            <div style={{ marginTop: '1rem' }}>
              <strong style={{ color: '#4facfe' }}>Skills: </strong>
              <span style={{ color: '#ffffff' }}>{exp.skills.join(', ')}</span>
            </div>
          </ExperienceCard>
        ))}
      </ExperienceGrid>
    </ExperienceSection>
  );
};

export default Experience; 