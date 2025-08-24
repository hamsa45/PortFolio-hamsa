import React from 'react';

const GitHubContributions: React.FC = () => {
  const contributionYears = [
    {
      year: 2025,
      image: "./images/github-contributions-2025.png",
      description: "GitHub contributions for 2025",
      count: 727
    },
    {
      year: 2024,
      image: "./images/github-contributions-2024.png",
      description: "GitHub contributions for 2024",
      count: 357
    },
    {
      year: 2022,
      image: "./images/github-contributions-2023.png", 
      description: "GitHub contributions for 2022",
      count: 772
    }
  ];

  const totalContributions = contributionYears.reduce((sum, year) => sum + year.count, 0);

  return (
    <section id="github" className="github-contributions">
      <div className="container">
        <h2 className="section-title">GitHub Contributions</h2>
        <div className="contributions-grid">
          <div className="contribution-container">
            <div className="contribution-placeholder">
              <p>Contributions for <strong>hamsa45</strong></p>
              
              {/* GitHub Profile Link */}
              <div className="github-profile-link">
                <a 
                  href="https://github.com/hamsa45" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="github-profile-btn"
                >
                  <i className="fab fa-github"></i>
                  View GitHub Profile
                </a>
              </div>

              {/* Summary Statistics */}
              <div className="contribution-summary">
                <div className="total-contributions">
                  <h3>Total Contributions</h3>
                  <div className="total-number">{totalContributions.toLocaleString()}</div>
                  <p>Across {contributionYears.length} years</p>
                </div>
                <div className="yearly-breakdown">
                  {contributionYears.map((yearData) => (
                    <div key={yearData.year} className="year-stat">
                      <span className="year">{yearData.year}</span>
                      <span className="count">{yearData.count.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Year-wise Images */}
              <div className="contribution-years">
                {contributionYears.map((yearData) => (
                  <div key={yearData.year} className="contribution-year">
                    <div className="year-header">
                      <h3 className="year-title">{yearData.year}</h3>
                      <span className="year-count">{yearData.count.toLocaleString()} contributions</span>
                    </div>
                    <div className="contribution-image">
                      <img 
                        src={yearData.image} 
                        alt={yearData.description}
                        onError={(e) => {
                          // Fallback to a placeholder if image doesn't load
                          const target = e.target as HTMLImageElement;
                          target.src = `https://via.placeholder.com/800x200/2563eb/ffffff?text=GitHub+Contributions+${yearData.year}+(${yearData.count})`;
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubContributions;
