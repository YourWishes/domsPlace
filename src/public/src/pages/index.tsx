import * as React from 'react';
import { PageWrapper } from '@components/page/PageWrapper';
import { BannerImageSection } from '@components/sections/BannerImage';
import { Title, Subtitle } from '@objects/typography/Title';
import { SplitFrames } from '@components/sections/SplitFrames';
import { Heading1, Heading2 } from '@objects/typography/Heading';
import { Mosaic } from '@components/sections/Mosaic';
import { graphql } from 'gatsby';
import { FluidImage } from '@objects/media/Image';
import { StackedMosaic } from '@components/sections/StackedMosaic';
import { IconGrid } from '@components/sections/IconGrid';
import { ButtonTitle } from '@components/sections/ButtonTitle';
import { Button } from '@objects/interactive/Button';

export const pageQuery = graphql`
  query {
    bundleImage: file(relativePath: { eq: "websites/bundlfresh.jpg" }) { ...fluidImage }
    cocksoxImage: file(relativePath: { eq: "websites/cocksox.jpg" }) { ...fluidImage }
    soeImage: file(relativePath: { eq: "websites/stateofescape.jpg" }) { ...fluidImage }

    kopaImage: file(relativePath: { eq: "websites/kopalife.jpg" }) { ...fluidImage }
    earjobsImage: file(relativePath: { eq: "websites/earjobs.jpg" }) { ...fluidImage }
    solImage: file(relativePath: { eq: "websites/solinvictus.jpg" }) { ...fluidImage }
  }
`;

export interface IndexPageProps {
  data: {
    bundleImage: FluidImage;
    cocksoxImage: FluidImage;
    soeImage: FluidImage;
    kopaImage: FluidImage;
    earjobsImage: FluidImage;
    solImage: FluidImage;
  };
}
 
export default ({ data }:IndexPageProps) => {
  return <PageWrapper title={null}>
    <BannerImageSection
      title={() => <Title large>Dominic Masters</Title>}
      subtitle={() => <Subtitle>Developer, nerd, occasionally funny.</Subtitle>}
      body={() => <p>
        I'm just a nerd with a passion for coding, coffee, and video games.
        Programming since before the internet was cool.
      </p>}
    />

    <SplitFrames
      left={() => <>
        <Heading1 is="h2">Programmer</Heading1>
        <Subtitle is="h3">I know what I'm doing, sometimes.</Subtitle>
      </>}

      right={() => <>
        <p> 
          I am a programmer, born and bred. I have been programming since I
          was around 12 years old and continue to advance my skills more and
          more everyday.
        </p>
        <p>
          Programming is my work and my passion. With over { new Date().getFullYear() - 2007 } years of experience,
          and countless lines of code written, there isn't much I can't develop.
        </p>
      </>}
    />

    <Mosaic
      title={() => <Heading2>Shopify Plus</Heading2>}
      body={() => <>
        <p>
          I'm currently working full-time as a Senior Full-Stack Developer for
          Shopify Plus at <a href="//processcreative.com.au">Process Creative</a>.
          I have been working with the platform every day for
          over { new Date().getFullYear() - 2017} years, and enjoy working with 
          it immensely.
        </p>
        
        <p>
          Working with Liquid, REST and GraphQL App Development and general
          Shopify tools development, I have had the privilage of working with
          over 40 different Shopify Plus clients, and over 50 Shopify core
          clients.
        </p>
        
        <p>
          Despite Shopify's seemingly limited development environment, I have
          been able to make it do tricks thought impossible. I love finding
          unique solution's to Shopify's limitations, and will continuously
          find ways to surprise everyone, including myself.
        </p>
      </>}
      images={[
        { to: '//bundlfresh.com.au', image: data.bundleImage.childImageSharp, delay: 'short' },
        { to: '//cocksox.com', image: data.cocksoxImage.childImageSharp, delay: 'medium' },
        { to: '//www.stateofescape.com', image: data.soeImage.childImageSharp, delay: 'long' },
      ]}
    />

    
    <StackedMosaic
      size="large"
      images={[
        { to: "//www.kopalife.com/products/kube-customise", image: data.kopaImage.childImageSharp, delay: 'short' },
        { to: "//earjobs.com.au", image: data.earjobsImage.childImageSharp, delay: 'medium' },
        { to: "//www.solinvictus.com.au", image: data.solImage.childImageSharp, delay: 'long' }
      ]}
      title={() => <Heading2>Full-Stack Web Dev</Heading2>}
      body={() => <>
        <p>
          I have spent over  { new Date().getFullYear() - 2010 } years working
          with both modern and traditional web tech stacks, including NodeJS,
          TypeScript, React, ES6, Webpack, Babel, SCSS, PHP, ASP, SQL and more.
        </p>

        <p>
          My specialty is making beautiful and interactive online web experiences.
          Why must web suck? I am to prove that it doesn't always have to.
        </p>
      </>
    } />

    <IconGrid
      size="small"
      title={p => <Heading2 {...p}>Platforms I work with</Heading2>}
      icons={[
        /* First Row */
        { title: "C#", image: require('@assets/images/branding/csharp/csharp-logo.svg') },
        { title: "NodeJS", image: require('@assets/images/branding/nodejs/nodejs-logo.svg') },
        { title: "Java", image: require('@assets/images/branding/java/java-logo.svg') },
        { title: "PHP", image: require('@assets/images/branding/php/php-logo.svg') },
        { title: 'C++', image: require('@assets/images/branding/cpp/cpp-logo.svg') },

        /* Second Row */
        { title: 'TypeScript', image: require('@assets/images/branding/typescript/typescript-logo.svg') },
        { title: 'React', image: require('@assets/images/branding/react/react-logo.svg') },
        { title: 'Redux', image: require('@assets/images/branding/redux/redux-logo.svg') },
        { title: 'webpack', image: require('@assets/images/branding/webpack/webpack-logo.svg') },
        { title: 'jQuery', image: require('@assets/images/branding/jquery/jquery-logo.svg') },
        
        /* Third Row */
        { title: 'Shopify', image: require('@assets/images/branding/shopify/shopify-logo.svg') },
        { title: 'Heroku', image: require('@assets/images/branding/heroku/heroku-logo.svg' ) },
        { title: 'Google Cloud Platform', image: require('@assets/images/branding/google-cloud/google-cloud-logo.svg') },
        { title: 'Digital Ocean', image: require('@assets/images/branding/digitalocean/digitalocean-logo.svg') },
        { title: 'neto', image: require('@assets/images/branding/neto/neto-logo.svg') },

        /* Fourth Row */
        { title: 'MonoGame', image: require('@assets/images/branding/monogame/monogame-logo.svg') },
        { title: 'OpenGL', image: require('@assets/images/branding/opengl/opengl-logo.svg') },
        { title: 'Unity', image: require('@assets/images/branding/unity/unity-logo.svg') },
        { title: 'LWJGL', image: require('@assets/images/branding/lwjgl/lwjgl-logo.svg') },

        /* Fifth Row */
        { title: 'GraphQL', image: require('@assets/images/branding/graphql/graphql-logo.svg') },
        { title: 'MySQL', image: require('@assets/images/branding/mysql/mysql-logo.svg') },
        { title: 'PostgreSQL', image: require('@assets/images/branding/pgsql/pgsql-logo.svg') },

        /* Sixth Row */
        { title: 'Discord', image: require('@assets/images/branding/discord/discord-logo.svg') },
        { title: 'Twitch', image: require('@assets/images/branding/twitch/twitch-logo.svg') },
        { title: 'Twitter', image: require('@assets/images/branding/twitter/twitter-logo.svg') }
      ]}
    />

    <ButtonTitle
      title={() => <Heading2>Get in touch</Heading2>}
      body={() => <p>
        Want to get in touch, pick my brain or just have a chat?<br />
        Head over to my contact page and feel free to reach out.
      </p>}
      buttons={() => <Button to="/contact" theme="primary">Contact Me</Button> }
    />
  </PageWrapper>
}