import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

export default function ExpandDetailsButton(): JSX.Element | null {
  const [hasDetails, setHasDetails] = useState(false);
  const [allExpanded, setAllExpanded] = useState(false);

  useEffect(() => {
    // Check if page has any details elements
    const detailsElements = document.querySelectorAll('details');
    setHasDetails(detailsElements.length > 0);

    // Listen for changes to check if details are expanded
    const handleToggle = () => {
      const allOpen = Array.from(detailsElements).every(
        (details) => (details as HTMLDetailsElement).open
      );
      setAllExpanded(allOpen);
    };

    detailsElements.forEach((details) => {
      details.addEventListener('toggle', handleToggle);
    });

    return () => {
      detailsElements.forEach((details) => {
        details.removeEventListener('toggle', handleToggle);
      });
    };
  }, []);

  const handleExpandAll = () => {
    const detailsElements = document.querySelectorAll('details');
    detailsElements.forEach((details) => {
      const detailsEl = details as HTMLDetailsElement;
      if (!detailsEl.open) {
        // Click the summary to trigger the custom click handler
        const summary = detailsEl.querySelector('summary') as HTMLElement;
        if (summary) {
          summary.click();
        }
      }
    });
    setAllExpanded(true);
  };

  const handleCollapseAll = () => {
    const detailsElements = document.querySelectorAll('details');
    detailsElements.forEach((details) => {
      const detailsEl = details as HTMLDetailsElement;
      if (detailsEl.open) {
        // Click the summary to trigger the custom click handler
        const summary = detailsEl.querySelector('summary') as HTMLElement;
        if (summary) {
          summary.click();
        }
      }
    });
    setAllExpanded(false);
  };

  if (!hasDetails) {
    return null;
  }

  return (
    <div className={styles.expandDetailsButton}>
      {allExpanded ? (
        <button onClick={handleCollapseAll} title="Collapse all details">
          Collapse All
        </button>
      ) : (
        <button onClick={handleExpandAll} title="Expand all details">
          Expand All
        </button>
      )}
    </div>
  );
}
