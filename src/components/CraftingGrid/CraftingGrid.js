import React from 'react';
import styles from './CraftingGrid.module.css';

const CraftingGrid = ({ items, result }) => {
  const gridItems = items.length === 9 ? items : Array(9).fill(null);

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {gridItems.map((item, index) => (
          <div key={index} className={styles.item}>
            {item && (
            <img src={`/minecraft-items/${item}.webp`} alt={`${item}`} style={{width: '48px', imageRendering: 'pixelated'}} />)}
          </div>
        ))}
      </div>
      {result && (
          <div className={styles.gridResult}>
            <div className={`${styles.item} ${styles.invisible}`}></div>
            <div className={`${styles.item} ${styles.result}`}>
              <img src={`/minecraft-items/${result}.webp`} alt={`Extra item: ${result}`} style={{width: '48px', imageRendering: 'pixelated'}} />
            </div>
            <div className={`${styles.item} ${styles.invisible}`}></div>
          </div>
        )}
    </div>

  );
};

export default CraftingGrid;