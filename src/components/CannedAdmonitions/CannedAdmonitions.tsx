import React from 'react';
import Admonition from '@theme/Admonition';
import type {Props as AdmonitionProps} from '@theme/Admonition';

const cannedAdmonitions = {
  NotMedicalAdvice: {
    type: 'danger' as AdmonitionProps['type'],
    title: 'Not Medical Advice!',
    content: (
      <>
        <p>
          I am not a medical professional. This information is intended as reference
          material, not direct guidance. <br/>
          Always consult a qualified healthcare provider for medical advice, diagnosis,
          and treatment.
        </p>
      </>
    ),
  },
  Backup: {
    type: 'warning' as AdmonitionProps['type'],
    title: 'Backup',
    content: (
      <>
        <p>Keep a backup of your data and configuration before making major changes.</p>
      </>
    ),
  },
};

type CannedAdmonitionKey = keyof typeof cannedAdmonitions;

type CannedAdmonitionProps = {
  canned: CannedAdmonitionKey;
  type?: AdmonitionProps['type'];
};

const CannedAdmonition: React.FC<CannedAdmonitionProps> = ({ canned, type }) => {
  const entry = cannedAdmonitions[canned];

  if (!entry) {
    return null;
  }

  return (
    <Admonition type={type || entry.type} title={entry.title}>
      {entry.content}
    </Admonition>
  );
};

export default CannedAdmonition;
