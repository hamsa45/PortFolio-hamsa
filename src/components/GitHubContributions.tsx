import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const GitHubContributions: React.FC = () => {
  return (
    <section id="github" className="github-contributions">
      <div className="container">
        <h2 className="section-title">GitHub Contributions</h2>
        <div className="contributions-grid">
          <div className="contribution-container">
            <GitHubCalendar 
              username="hamsa45"
              colorScheme="light"
              fontSize={12}
              blockSize={12}
              blockMargin={2}
              hideColorLegend={false}
              hideMonthLabels={false}
              showWeekdayLabels={false}
            />
            <div className="github-username">
              <p>Showing contributions for <span>hamsa45</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubContributions;
