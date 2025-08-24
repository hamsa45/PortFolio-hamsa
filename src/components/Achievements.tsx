import React from 'react';

interface Achievement {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
}

const Achievements: React.FC = () => {
  const achievements: Achievement[] = [
    {
      id: 1,
      title: "Performer of the Year",
      description: "Awarded 'Performer of the Year' by TECHXR for outstanding performance and contributions. Received a recognition of ₹XX,000 for exceptional work and dedication.",
      image: "./images/performer-award.jpg", // Replace with your actual award image
      date: "January 8, 2024",
      category: "Award"
    }
  ];

  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        <div className="achievements-grid">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="achievement-card">
              <div className="achievement-image">
                <img 
                  src={achievement.image} 
                  alt={achievement.title}
                  onError={(e) => {
                    // Fallback to a placeholder if image doesn't load
                    const target = e.target as HTMLImageElement;
                    target.src = `https://via.placeholder.com/300x200/2563eb/ffffff?text=${achievement.title.replace(/\s+/g, '+')}`;
                  }}
                />
              </div>
              <div className="achievement-content">
                <div className="achievement-header">
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <span className="achievement-category">{achievement.category}</span>
                </div>
                <p className="achievement-description">{achievement.description}</p>
                <span className="achievement-date">{achievement.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
