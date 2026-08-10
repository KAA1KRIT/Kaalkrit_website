import { achievements } from '@/content/achievements';

export function AchievementList() {
  return (
    <section className="public-section public-section--tight" aria-labelledby="achievements-heading">
      <div className="public-container">
        <div className="feature-split achievement-block">
          <div>
            <p className="eyebrow">Achievement / 09</p>
            <h2 id="achievements-heading">Evidence, without inflated numbers.</h2>
          </div>
          <ol className="achievement-list">
            {achievements.map((achievement) => (
              <li key={achievement.id}>
                <span className="index-number">01</span>
                <div><h3>{achievement.title}</h3><p>{achievement.detail}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
