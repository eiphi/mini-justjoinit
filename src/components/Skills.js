import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  max-width: 80%;
  margin-top: 5px;
`;

const SkillPill = styled.div`
  border-radius: 10px;
  padding: 5px;
  border: 1px solid gray;
  min-width: 15%;
  text-align: center;
  margin-right: 3px;
`;

const SkillDots = styled.div`
  display: flex;
  justify-content: center;
  height: 14px;
  margin-top: -16px;
  color: #ff3434;
  font-size: 18px;
`;

const SkillName = styled.div`
  font-size: 11px;
  color: grey;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Skills = ({ children }) => {
  const renderDots = level => {
    const items = [];
    for (let i = 0; i < level; i++) {
      items.push(<div>&#8226;</div>);
    }
    return <SkillDots>{items}</SkillDots>;
  };

  const renderSkills = () =>
    children.skills.map(skill => {
      return (
        <SkillPill>
          {renderDots(skill.level)}
          <SkillName>{skill.name}</SkillName>
        </SkillPill>
      );
    });

  return <Container>{renderSkills()}</Container>;
};

export default Skills;
