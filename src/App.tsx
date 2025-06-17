import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

const AppContainer = styled.div`
  background: #0a0a0a;
  color: #ffffff;
  min-height: 100vh;
`;

const Navigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  z-index: 1000;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const NavItem = styled.li`
  cursor: pointer;
  color: #a0a0a0;
  transition: color 0.3s ease;

  &:hover {
    color: #4facfe;
  }
`;

const MainContent = styled.main`
  padding-top: 60px; // Height of the navigation
`;

const Section = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const sections = [
    { id: 'hero', label: 'Home', component: Hero },
    { id: 'projects', label: 'Projects', component: Projects },
    { id: 'experience', label: 'Experience', component: Experience },
    { id: 'skills', label: 'Skills', component: Skills },
    { id: 'education', label: 'Education', component: Education },
    { id: 'contact', label: 'Contact', component: Contact }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  if (!isLoaded) {
    return (
      <Section style={{ alignItems: 'center' }}>
        <h1 style={{ color: '#4facfe', fontSize: '2rem' }}>Loading...</h1>
      </Section>
    );
  }

  return (
    <AppContainer>
      <Navigation>
        <NavList>
          {sections.map(({ id, label }) => (
            <NavItem
              key={id}
              onClick={() => scrollToSection(id)}
              style={{ color: activeSection === id ? '#4facfe' : '#a0a0a0' }}
            >
              {label}
            </NavItem>
          ))}
        </NavList>
      </Navigation>

      <MainContent>
        {sections.map(({ id, component: Component }) => (
          <Section key={id} id={id}>
            <Component />
          </Section>
        ))}
      </MainContent>
    </AppContainer>
  );
}

export default App; 