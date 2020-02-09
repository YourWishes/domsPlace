import * as React from 'react';
import { PageWrapper } from '@components/page/PageWrapper';
import { Title, Subtitle } from '@objects/typography/Title';
import { SplitFrames } from '@components/sections/SplitFrames';
import { CodeBlock } from '@objects/code/CodeBlock';
import { Heading3 } from '@objects/typography/Heading';
import { Button } from '@objects/interactive/Button';
import { Link } from 'gatsby';
 
const FAKE_CODE = `import { usePageData } from '@data/page';

const thisPage = usePageData(data => {
  if(!data) return <MyCool404Page />
  return <BoringExpectedPage {...data} />
});

const MyCool404Page = () => <>
  <Title>404 - Not Found</Title>
  <Subtitle>
    The error... not the internet
    joke about the error.
  </Subtitle>
  <Split>
    <CodeBlock>
      \${require(__filename).toString()}
    </CodeBlock>
  </Split>
</>;
`

export default () => {
  return <PageWrapper title="Not Found">
    <SplitFrames
      size="medium"
      title={() => <Title large>404 - Not Found</Title>}
      subtitle={() => <Subtitle>The error... Not the joke about the error.</Subtitle>}
      left={() => <CodeBlock language="typescript">
        {FAKE_CODE}
      </CodeBlock>}
      leftOptions={{ padded: true }}

      right={() => <>
        <Heading3>Have no fear</Heading3>
        <p>
          Just because we don't have what you're looking for this time, doesn't
          mean we don't offer other cool things.
        </p>
        <Button theme="primary" to="/">Continue Browsing</Button>
      </>}
      rightOptions={{ padded: false }}
    />
  </PageWrapper>
}