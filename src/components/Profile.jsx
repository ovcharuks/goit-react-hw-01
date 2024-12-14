import styles from './Profile.module.css'

export default function Profile ({name, tag, location, image, stats}){
    return (
    <div className={styles.profileContainer}>
  <div className={styles.nameContainer}>
    <img
      src={image}
      alt={name}
      className={styles.heroImage}
      width={100}
    />
    <h3>{name}</h3>
<div className={styles.heroList}>    
<p className={styles.heroInfo}>{tag}</p>
    <p className={styles.heroInfo}>{location}</p>
</div>
  </div>

  <ul className={styles.stats}>
    <li className={styles.statsItem}>
      <span className={styles.itemSpanOne}>Followers</span>
      <span className={styles.itemSpanTwo}>{stats.followers}</span>
    </li>
    <li className={styles.statsItem}>
      <span className={styles.itemSpanOne}>Views</span>
      <span className={styles.itemSpanTwo}>{stats.views}</span>
    </li>
    <li className={styles.statsItem}>
      <span className={styles.itemSpanOne}>Likes</span>
      <span className={styles.itemSpanTwo}>{stats.likes}</span>
    </li>
  </ul>
</div>)

}