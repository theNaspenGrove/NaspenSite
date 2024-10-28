import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import Heading from '@theme/Heading';
import MDXContent from '@theme/MDXContent';

import Card from '../../../components/Card';
import Container from '../../../components/Layout/Container';
import Row from '../../../components/Layout/Row';
import Col from '../../../components/Layout/Col';
import TagsListInline from '@theme/TagsListInline';

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

  const {metadata} = useDoc();
  const {tags} = metadata;
  const canDisplayTagsRow = tags.length > 0;

  const myOrange = 'ce7738';

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
                  {frontMatter.github_link && frontMatter.github_repo && (
                    <>
                    <div className={'margin-horiz--xs'}>
                      <a href={frontMatter.github_link}>
                        <img alt="GitHub" src={`https://img.shields.io/github/created-at/theNaspenGrove/${frontMatter.github_repo}?style=flat-square&label=GitHub&logo=github&color=${myOrange}`}/>
                      </a>
                    </div>
                    <div className={'margin-horiz--xs'}>
                    <img alt="GitHub last commit" src={`https://img.shields.io/github/last-commit/theNaspenGrove/${frontMatter.github_repo}?style=flat-square&label=Last%20Commit&logo=github&color=${myOrange}`}/>
                    </div>
                  </>
                  )}
                  {frontMatter.modrinth_link && frontMatter.modrinth_project_id && (
                    <>
                    <div className={'margin-horiz--xs'}>
                      <a href={frontMatter.modrinth_link} >
                        <img alt="Modrinth Downloads" src={`https://img.shields.io/modrinth/v/${frontMatter.modrinth_project_id}?logo=modrinth&label=Modrinth&style=flat-square&color=${myOrange}`}/>
                      </a>
                    </div>
                    <div className={'margin-horiz--xs'}>
                      <img alt="Supported Game Versions" src={`https://img.shields.io/modrinth/game-versions/${frontMatter.modrinth_project_id}?style=flat-square&label=Supported%20Verions&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8%2BDQo8IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPg0KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxMiAxMiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICANCiAgICA8dGl0bGU%2BZW1vamlfbWluZWNyYWZ0X3NpbXBsZSBbIzQ2NF08L3RpdGxlPg0KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPg0KICAgIDxkZWZzPg0KDQo8L2RlZnM%2BDQogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI%2BDQogICAgICAgIDxnIGlkPSJEcmliYmJsZS1MaWdodC1QcmV2aWV3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjI0LjAwMDAwMCwgLTYxMjcuMDAwMDAwKSIgZmlsbD0iI0ZGRkZGRiI%2BDQogICAgICAgICAgICA8ZyBpZD0iaWNvbnMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU2LjAwMDAwMCwgMTYwLjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNzIsNTk3MyBMMTcwLDU5NzMgTDE3MCw1OTc5IEwxNzIsNTk3OSBMMTcyLDU5NzcgTDE3Niw1OTc3IEwxNzYsNTk3OSBMMTc4LDU5NzkgTDE3OCw1OTczIEwxNzYsNTk3MyBMMTc2LDU5NzEgTDE3Miw1OTcxIEwxNzIsNTk3MyBaIE0xNzYsNTk3MSBMMTgwLDU5NzEgTDE4MCw1OTY3IEwxNzYsNTk2NyBMMTc2LDU5NzEgWiBNMTY4LDU5NzEgTDE3Miw1OTcxIEwxNzIsNTk2NyBMMTY4LDU5NjcgTDE2OCw1OTcxIFoiIGlkPSJlbW9qaV9taW5lY3JhZnRfc2ltcGxlLVsjNDY0XSI%2BDQoNCjwvcGF0aD4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg%3D%3D&color=${myOrange}`}/>
                    </div>
                    </>
                  )}
                </Row>
                {canDisplayTagsRow && (
                  <TagsListInline tags={tags} />
                )}
                <hr />
              </>
            ) : (
              <>
                <header>
                  <Heading as="h1">{syntheticTitle} </Heading>
                </header>
                {canDisplayTagsRow && (
                  <TagsListInline tags={tags} />
                )}
                <hr/>
              </>

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
