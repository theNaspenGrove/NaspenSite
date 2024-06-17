import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Highlight from '@site/src/components/Highlight';
//import custom components
import Container from '../components/Layout/Container';
import Row from '../components/Layout/Row';
import Col from '../components/Layout/Col';
import MessageOfTheMoment from '../components/MOTM/MOTM';
import Card from '../components/Card';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<Highlight>" tag to our Highlight component
  // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
  Highlight,
  Container,
  Row,
  Col,
  MessageOfTheMoment,
  Card
};