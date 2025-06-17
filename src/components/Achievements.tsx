import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const AchievementsSection = styled.section`
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

const AchievementsGrid = styled.div`
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

const AchievementCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const AchievementTitle = styled.h3`
  font-size: 1.5rem;
  color: #4facfe;
  margin: 0;
`;

const AchievementDescription = styled.p`
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

const AchievementItem = styled.li`
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

const achievements = [
  {
    title: "Achievements",
    items: [
      "Science Quiz: 6th Rank in state-level 26th HPSCS Quiz, 2018",
      "HP Board 10th Rank: 42nd in state with 20,000 INR merit award",
      "HP Board 12th Rank: Top 20 in state with 45,000 INR government-sponsored laptop"
    ]
  },
  {
    title: "Extracurricular",
    items: [
      "Student Representative - Anti-Ragging Committee, Thapar Institute of Engineering and Technology (Jan 2024 – Jan 2025)",
      "Promoted campus safety and inclusivity by organizing awareness campaigns",
      "Collaborated with administration to assess and improve student well-being policies",
     
    ]
  }
];

const Achievements = () => {
  return (
    <AchievementsSection>
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Achievements & Extracurricular
      </SectionTitle>

      <AchievementsGrid>
        {achievements.map((achievement, index) => (
          <AchievementCard
            key={achievement.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <AchievementTitle>{achievement.title}</AchievementTitle>
            <AchievementList>
              {achievement.items.map((item, i) => (
                <AchievementItem key={i}>{item}</AchievementItem>
              ))}
            </AchievementList>
          </AchievementCard>
        ))}
      </AchievementsGrid>
    </AchievementsSection>
  );
};

export default Achievements; 