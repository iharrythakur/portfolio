import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const ProjectsSection = styled.section`
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

const ProjectsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #4facfe;
  margin: 0;
`;

const ProjectDescription = styled.p`
  color: #ffffff;
  margin: 0;
  line-height: 1.6;
`;

const AchievementList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Achievement = styled.li`
  color: #ffffff;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  line-height: 1.5;
  
  &::before {
    content: '▹';
    color: #4facfe;
    margin-top: 0.25rem;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
`;

const TechTag = styled.span`
  background: rgba(79, 172, 254, 0.1);
  color: #4facfe;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
`;

const projects = [
  {
    title: "AI Salon Receptionist",
    description: "An intelligent voice receptionist system that handles customer interactions and reduces human intervention through AI-powered automation.",
    achievements: [
      "Handled 50+ simulated and real user sessions with consistent response accuracy above 92%",
      "Designed and implemented a voice receptionist using OpenAI, Deepgram, and Cartesia for real-time customer interactions",
      "Integrated LiveKit and WebSocket for low-latency communication with the human supervisor handoff and built a React dashboard for live monitoring, escalations, and updates",
      "Reduced human intervention by 35% using escalation logic and a self-learning knowledge base"
    ],
    techStack: ["React", "OpenAI", "Deepgram", "LiveKit", "WebSocket", "Cartesia"]
  },
  {
    title: "CRM Integration",
    description: "A unified API system that seamlessly integrates multiple CRM platforms, providing standardized access to customer data and improving operational efficiency.",
    achievements: [
      "Architected and developed a scalable backend system using FastAPI, integrating 3+ CRM platforms (HubSpot, Airtable, Notion) via secure and standardized OAuth2 flows",
      "Built and managed 20+ modular RESTful API endpoints, enabling unified access to contacts, deals, tables, and database content across CRM systems",
      "Implemented Redis-based caching for token storage, credential management, and session handling—improving API response time by 40%"
    ],
    techStack: ["FastAPI", "Redis", "OAuth2", "REST API", "HubSpot", "Airtable", "Notion"]
  }
];

const Projects = () => {
  return (
    <ProjectsSection>
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </SectionTitle>

      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <AchievementList>
              {project.achievements.map((achievement, i) => (
                <Achievement key={i}>{achievement}</Achievement>
              ))}
            </AchievementList>
            <TechStack>
              {project.techStack.map((tech) => (
                <TechTag key={tech}>{tech}</TechTag>
              ))}
            </TechStack>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects; 