import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';

import GlobalDefinitions from './GlobalDefinitions.json';

const iconStyle = {
position: 'relative',
bottom: '-0.1em',
left: '0.3em',
};

const pageDefinitionsByPath = new Map();

function normalizeDefinitions(raw) {
if (!raw || typeof raw !== 'object') {
return {};
}

const normalized = {};

if (Array.isArray(raw)) {
raw.forEach((item) => {
if (!item || typeof item !== 'object') {
return;
}

const term = String(item.term || item.name || item.key || '').trim();
if (!term) {
return;
}

normalized[term.toLowerCase()] = {
definition: item.definition ?? item.desc ?? item.description,
url: item.url,
};
});
} else {
Object.entries(raw).forEach(([key, value]) => {
const term = String(key).trim();
if (!term) {
return;
}

if (typeof value === 'string') {
normalized[term.toLowerCase()] = {definition: value};
return;
}

if (value && typeof value === 'object') {
normalized[term.toLowerCase()] = {
definition: value.definition ?? value.desc ?? value.description,
url: value.url,
};
}
});
}

return normalized;
}

function getFrontMatterDefinitions(rawDefinitions) {
return normalizeDefinitions(rawDefinitions);
}

export function Definitions({definitions}) {
const location = useLocation();

useEffect(() => {
const normalized = normalizeDefinitions(definitions);

if (Object.keys(normalized).length > 0) {
pageDefinitionsByPath.set(location.pathname, normalized);
}

return () => {
pageDefinitionsByPath.delete(location.pathname);
};
}, [definitions, location.pathname]);

return null;
}

function childrenToText(children) {
if (children == null) {
return '';
}

if (typeof children === 'string' || typeof children === 'number') {
return String(children);
}

if (Array.isArray(children)) {
return children.map(childrenToText).join('');
}

if (React.isValidElement(children)) {
return childrenToText(children.props.children);
}

if (typeof children === 'object') {
return children.toString();
}

return '';
}

function findEntry(sources, term) {
if (!term) {
return null;
}

const lookup = String(term).toLowerCase();
for (const source of sources) {
if (source[lookup]) {
return source[lookup];
}
}

return null;
}

function RenderDefine({children, term, definition, url, sources}) {
const lookupTerm = (term || childrenToText(children)).trim();
const entry = findEntry(sources, lookupTerm);

if (!definition && entry?.definition) {
definition = entry.definition;
}

if (!url && entry?.url) {
url = entry.url;
}

if (!definition) {
definition = lookupTerm ? `No definition for term "${lookupTerm}" found!` : '';
}

// If term is provided but no children, render definition as inline text
const hasChildren = children && childrenToText(children).trim().length > 0;
if (term && !hasChildren) {
return <span>{definition}</span>;
}

// Original hover functionality
return (
<span
style={{
borderBottom: '.15em dotted',
borderBottomColor: url ? 'var(--ifm-link-color)' : '',
paddingRight: '.5em',
cursor: url ? 'pointer' : 'default',
}}
title={definition}
onClick={() => {
if (url) {
window.location.href = url;
}
}}
>
{children}
<svg
style={{...iconStyle, color: 'var(--ifm-color-emphasis-900)'}}
width="1.1rem"
height="1.1rem"
viewBox="0 -0.5 21 21"
version="1.1"
xmlns="http://www.w3.org/2000/svg"
>
<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
<g id="Dribbble-Light-Preview" transform="translate(-259.000000, -520.000000)" fill="currentColor">
<g id="icons" transform="translate(56.000000, 160.000000)">
<path
d="M213.2669,374.512 C213.2669,375.064 212.7965,375.512 212.2169,375.512 C211.6373,375.512 211.1669,375.064 211.1669,374.512 C211.1669,373.96 211.6373,373.512 212.2169,373.512 C212.7965,373.512 213.2669,373.96 213.2669,374.512 M209.0669,365 C209.0669,364.448 209.5373,364 210.1169,364 L216.1124,364 C216.98915,364 217.7,364.677 217.7,365.512 L217.7,368 C217.7,369.1 216.755,370 215.6,370 L214.03445,370 C213.7394,370 213.5,370.228 213.5,370.509 L213.5,371.512 C213.5,372.064 213.03065,372.512 212.45,372.512 C211.8704,372.512 211.4,372.064 211.4,371.512 L211.4,369.778 C211.4,368.796 212.2358,368 213.2669,368 L214.3169,368 C214.8965,368 215.3669,367.552 215.3669,367 C215.3669,366.448 214.8965,366 214.3169,366 L210.1169,366 C209.5373,366 209.0669,365.552 209.0669,365 M220.85,378 L206.15,378 C205.5704,378 205.1,377.552 205.1,377 L205.1,363 C205.1,362.448 205.5704,362 206.15,362 L220.85,362 C221.43065,362 221.9,362.448 221.9,363 L221.9,377 C221.9,377.552 221.43065,378 220.85,378 M203,362 L203,378 C203,379.105 203.9408,380 205.1,380 L221.9,380 C223.06025,380 224,379.105 224,378 L224,362 C224,360.896 223.06025,360 221.9,360 L205.1,360 C203.9408,360 203,360.896 203,362"
id="question-[#1445]"
/>
</g>
</g>
</g>
</svg>
</span>
);
}

function DefineFromDoc(props) {
const doc = useDoc();
const pageDefinitions = pageDefinitionsByPath.get(useLocation().pathname) || {};
const frontMatterDefinitions = getFrontMatterDefinitions(doc?.frontMatter?.definitions);
const globalDefinitions = normalizeDefinitions(GlobalDefinitions.Definitions);

return (
<RenderDefine
{...props}
sources={[pageDefinitions, frontMatterDefinitions, globalDefinitions]}
/>
);
}

function DefineFromBlog(props) {
const blog = useBlogPost();
const pageDefinitions = pageDefinitionsByPath.get(useLocation().pathname) || {};
const blogDefinitions = normalizeDefinitions(blog?.metadata?.frontMatter?.definitions || blog?.metadata?.definitions);
const globalDefinitions = normalizeDefinitions(GlobalDefinitions.Definitions);

return (
<RenderDefine
{...props}
sources={[pageDefinitions, blogDefinitions, globalDefinitions]}
/>
);
}

function Define(props) {
const location = useLocation();
const blogPath = location.pathname.startsWith('/Blog') || location.pathname.startsWith('/Community-Server/Blog');
const docPath = location.pathname.startsWith('/Wiki') || location.pathname.startsWith('/Community-Server/Wiki');

if (blogPath) {
return <DefineFromBlog {...props} />;
}

if (docPath) {
return <DefineFromDoc {...props} />;
}

const pageDefinitions = pageDefinitionsByPath.get(location.pathname) || {};
const globalDefinitions = normalizeDefinitions(GlobalDefinitions.Definitions);

return <RenderDefine {...props} sources={[pageDefinitions, globalDefinitions]} />;
}

export default Define;
