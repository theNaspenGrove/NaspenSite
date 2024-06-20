import React from 'react';
import LinkItem from '@theme/Footer/LinkItem';

import { useState, useEffect } from 'react';

const LatestGitHubCommit = () => {
const [commit, setCommit] = useState({ committerName: '', committerDate: '', message: '', url: '', commit: '', sha: ''});
const [error, setError] = useState('');

useEffect(() => {
  fetch('https://api.github.com/repos/theNaspenGrove/NaspenSite/commits?per_page=1')
  .then(res => {
    if (!res.ok) {
      throw new Error('');
    }
    return res.json();
  })
  .then(data => {
    const { commit: {committer: { name: committerName }}, commit: {committer: {date: committerDate }}, html_url, commit: { message }, sha } = data[0];
    setCommit({ committerName, committerDate, url: html_url, message, sha});
  })
  .catch(error => {
    console.error('Error fetching commit data:', error);
    setError('GitHub is Borked, srry.');
  });
}, []);

const getTimeSinceCommit = () => {
  const committerDateAsDate = new Date(commit.committerDate);
  const currentDate = new Date();
  const differenceInMilliseconds = currentDate - committerDateAsDate;
  const differenceInMinutes = Math.floor(differenceInMilliseconds / (1000 * 60));
  const differenceInHours = Math.floor(differenceInMinutes / 60);
  const differenceInDays = Math.floor(differenceInHours / 24);

  if (differenceInMinutes < 60) {
  return `${differenceInMinutes} minute${differenceInMinutes !== 1 ? 's' : ''} ago`;
  } else if (differenceInHours < 24) {
    return `${differenceInHours} hour${differenceInHours !== 1 ? 's' : ''} ago`;
  } else {
    return `${differenceInDays} day${differenceInDays !== 1 ? 's' : ''} ago`;
  }
};

  return (
    <>
      {error ? (
        <span>{error}</span>
      ) : (
        <>
          <span>{commit.committerName}: <code>{commit.message}</code> {getTimeSinceCommit()}</span><br/>
          <span><code><a href={commit.url}>{commit.sha.slice(0, 7)}</a></code></span><br/>
        </>
      )}
    </>
  );
}

function ColumnLinkItem({item}) {
  return item.html ? (
    <li
      className="footer__item"
      // Developer provided the HTML, so assume it's safe.
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: item.html}}
    />
  ) : (
    <li key={item.href ?? item.to} className="footer__item">
      <LinkItem item={item} />
    </li>
  );
}
function Column({column}) {
  return (
    <div className="col footer__col">
      <div className="footer__title">{column.title}</div>
      <ul className="footer__items clean-list">
        {column.items.map((item, i) => (
          <ColumnLinkItem key={i} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default function FooterLinksMultiColumn({columns}) {
  return (
    <div className="row footer__links">
      {columns.map((column, i) => (
        <Column key={i} column={column} />
      ))}
      <div className="col footer__col">
      <div className="footer__title">Latest Commit</div>
        <LatestGitHubCommit />
      </div>
    </div>
  );
}
