import * as React from 'react';
import { PageWrapper } from '@components/page/PageWrapper';
import { Title } from '@objects/typography/Title';
import { SplitFrames } from '@components/sections/SplitFrames';
import { Heading2 } from '@objects/typography/Heading';
import { ContactForm } from '@components/forms/ContactForm';

export default () => (
  <PageWrapper title="Contact">
    <SplitFrames size="large"
      title={() => <Title large>Contact Me</Title>}

      leftOptions={{ padded: true }}
      left={() => <div>
        <Heading2>Send a message down the wire</Heading2>
        <p>
          Feel free to reach out, I usually respond within a few days.
        </p>

        <p>
          If you prefer to call, then leave your phone number and what times
          you're available and I'll get in touch!
        </p>

        <p>
          Looking for something a bit more instant? Get in touch with me via
          social media.
        </p>

        {/*<SocialIconGroup socials={Socials} />*/}
      </div>}

      rightOptions={{padded: true}}
      right={() => <ContactForm />}
    />
  </PageWrapper>
);