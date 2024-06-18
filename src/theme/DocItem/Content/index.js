import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/theme-common/internal';
import Heading from '@theme/Heading';
import MDXContent from '@theme/MDXContent';

import Card from '../../../components/Card';
import Container from '../../../components/Layout/Container';
import Row from '../../../components/Layout/Row';
import Col from '../../../components/Layout/Col';

/**
 Title can be declared inside md content or declared through
 front matter and added manually. To make both cases consistent,
 the added title is added under the same div.markdown block
 See https://github.com/facebook/docusaurus/pull/4882#issuecomment-853021120

 We render a "synthetic title" if:
 - user doesn't ask to hide it with front matter
 - the markdown content does not already contain a top-level h1 heading
*/
function useSyntheticTitle() {
  const {metadata, frontMatter, contentTitle} = useDoc();
  const shouldRender =
    !frontMatter.hide_title && typeof contentTitle === 'undefined';
  if (!shouldRender) {
    return null;
  }
  return metadata.title;
}
export default function DocItemContent({children}) {
  const syntheticTitle = useSyntheticTitle();
  const {frontMatter} = useDoc();
  return (
    <div className={clsx(ThemeClassNames.docs.docMarkdown, 'markdown')}>

      <MDXContent>
        <Container>
        <Row>
        <Col>

        {syntheticTitle && (
          <>
            {frontMatter.project_links ? (
              <>
                <header>
                  <Heading as="h1">{frontMatter.title} </Heading>
                </header>
                <Row>
                  <Col width="3">
                    {frontMatter.github_link && (
                        <Card
                        iconPath="/icons/github-white.svg"
                        title="GitHub Repo"
                        href={frontMatter.github_link}
                        description=""
                      />
                    )}
                  </Col>
                  <Col width="3">
                    {frontMatter.modrinth_link && (
                        <Card
                        iconPath="/icons/modrinth.svg"
                        title="Modrinth Page"
                        href={frontMatter.modrinth_link}
                        description=""
                      />
                    )}
                  </Col>
                </Row>
                <hr />
              </>
            ) : (
              <header>
                <Heading as="h1">{syntheticTitle} </Heading>
              </header>
            )}
          </>
        )}

        {children}
        </Col>
        </Row>
        </Container>
      </MDXContent>
    </div>
  );
}
