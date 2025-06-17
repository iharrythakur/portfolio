import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
`;

const Title = styled(motion.h2)`
  font-size: 3rem;
  background: linear-gradient(45deg, #00f2fe, #4facfe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  text-align: center;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #4facfe;
  margin: 0 0 1rem 0;
`;

const ProjectDescription = styled.p`
  color: #a0a0a0;
  margin: 0 0 1rem 0;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
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
    title: "AI Salon Receptionist System",
    description: "An intelligent reception system with 92%+ accurate voice response handling and real-time monitoring dashboard.",
    technologies: ["Python", "JavaScript", "FastAPI", "OpenAI", "Deepgram", "LiveKit"],
    impact: "Reduced human intervention by 35%"
  },
  {
    title: "CRM Integration Platform",
    description: "Unified CRM platform integrating multiple services with standardized OAuth2 flows and Redis-based caching.",
    technologies: ["FastAPI", "Redis", "OAuth2", "HubSpot API", "Airtable API"],
    impact: "40% faster API response times"
  }
];

const Projects = () => {
  return (
    <ProjectsContainer>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Featured Projects
      </Title>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <TechStack>
              {project.technologies.map(tech => (
                <TechTag key={tech}>{tech}</TechTag>
              ))}
            </TechStack>
            <ProjectDescription>Impact: {project.impact}</ProjectDescription>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects; 