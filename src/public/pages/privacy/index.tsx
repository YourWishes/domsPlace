// Copyright (c) 2019 Dominic Masters
//
// MIT License
//
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

import * as React from 'react';
import { TextContentSection } from './../../sections/content/text/';
import { Title, Heading2, Heading3, Heading4 } from './../../objects/typography/heading/';
import { Breadcrumb } from './../../objects/widgets/breadcrumb/';
import { PageWrapper } from './../../components/page/wrapper/';

export class PrivacyPage extends React.Component<any> {
  constructor(props:any) {
    super(props);
  }

  render() {
    return <PageWrapper title="Privacy Policy">
      <TextContentSection>
        <Breadcrumb crumbs={[ {title:'Privacy Policy', to:'/legal/privacy'} ]} />

        <Title>Privacy Policy</Title>

        <p>Effective date: June 27, 2018</p>
        <p>
          domsPlace ("us", "we", or "our") operates
          the <a href="//domsplace.com">https://domsplace.com</a> website (the
          "Service").
        </p>

        <p>
          This page informs you of our policies regarding the collection, use, and
          disclosure of personal data when you use our Service and the choices you
          have associated with that data.
        </p>

        <p>
          We use your data to provide and improve the Service. By using the
          Service, you agree to the collection and use of information in
          accordance with this policy. Unless otherwise defined in this Privacy
          Policy, terms used in this Privacy Policy have the same meanings as in
          our Terms and Conditions, accessible from <a href="//domsplace.com">
            https://domsplace.com
          </a>
        </p>


        <Heading2>Information Collection And Use</Heading2>
        <p>
          We collect several different types of information for various purposes
          to provide and improve our Service to you.
        </p>

        <Heading3>Types of Data Collected</Heading3>
        <Heading4>Personal Data</Heading4>
        <p>
          While using our Service, we may ask you to provide us with certain
          personally identifiable information that can be used to contact or
          identify you ("Personal Data"). Personally identifiable information may
          include, but is not limited to:
        </p>
        <ul>
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Phone number</li>
          <li>Cookies and Usage Data</li>
        </ul>

        <Heading4>Usage Data</Heading4>
        <p>
          We may also collect information how the Service is accessed and used =
          ("Usage Data"). This Usage Data may include information such as your
          computer's Internet Protocol address (e.g. IP address), browser type,
          browser version, the pages of our Service that you visit, the time and
          date of your visit, the time spent on those pages, unique device
          identifiers and other diagnostic data.
        </p>

        <Heading4>Tracking & Cookies Data</Heading4>
        <p>
          We use cookies and similar tracking technologies to track the activity
          on our Service and hold certain information.
        </p>
        <p>
          Cookies are files with small amount of data which may include an
          anonymous unique identifier. Cookies are sent to your browser from a
          website and stored on your device. Tracking technologies also used are
          beacons, tags, and scripts to collect and track information and to
          improve and analyze our Service.
        </p>
        <p>
          You can instruct your browser to refuse all cookies or to indicate when
          a cookie is being sent. However, if you do not accept cookies, you may
          not be able to use some portions of our Service.
        </p>
        <p>Examples of Cookies we use:</p>
        <ul>
          <li><strong>Session Cookies.</strong> We use Session Cookies to operate our Service.</li>
          <li><strong>Preference Cookies.</strong> We use Preference Cookies to remember your preferences and various settings.</li>
          <li><strong>Security Cookies.</strong> We use Security Cookies for security purposes.</li>
        </ul>

        <Heading2>Use of Data</Heading2>
        <p>domsPlace uses the collected data for various purposes:</p>
        <ul>
          <li>To provide and maintain the Service</li>
          <li>To notify you about changes to our Service</li>
          <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
          <li>To provide customer care and support</li>
          <li>To provide analysis or valuable information so that we can improve the Service</li>
          <li>To monitor the usage of the Service</li>
          <li>To detect, prevent and address technical issues</li>
        </ul>

        <Heading2>Transfer Of Data</Heading2>
        <p>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.</p>
        <p>If you are located outside Australia and choose to provide information to us, please note that we transfer the data, including Personal Data, to Australia and process it there.</p>
        <p>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>
        <p>domsPlace will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.</p>

        <Heading2>Disclosure Of Data</Heading2>

        <Heading3>Legal Requirements</Heading3>
        <p>domsPlace may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
        <ul>
          <li>To comply with a legal obligation</li>
          <li>To protect and defend the rights or property of domsPlace</li>
          <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
          <li>To protect the personal safety of users of the Service or the public</li>
          <li>To protect against legal liability</li>
        </ul>

        <Heading2>Security Of Data</Heading2>
        <p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>

        <Heading2>Service Providers</Heading2>
        <p>We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.</p>
        <p>These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>

        <Heading3>Analytics</Heading3>
        <p>We may use third-party Service Providers to monitor and analyze the use of our Service.</p>
        <ul>
          <li>
            <p><strong>Google Analytics</strong></p>
            <p>Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network.</p>
            <p>You can opt-out of having made your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js, analytics.js, and dc.js) from sharing information with Google Analytics about visits activity.</p>
            <p>For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page: <a href="https://policies.google.com/privacy?hl=en" target="_blank">https://policies.google.com/privacy?hl=en</a>
            </p>
          </li>
        </ul>


        <Heading2>Links To Other Sites</Heading2>
        <p>Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
        <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>


        <Heading2>Children's Privacy</Heading2>
        <p>Our Service does not address anyone under the age of 18 ("Children").</p>
        <p>We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</p>


        <Heading2>Changes To This Privacy Policy</Heading2>
        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
        <p>We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.</p>
        <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>


        <Heading2>Contact Us</Heading2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          by visiting this page on our
          website: <a href="/contact">https://domsplace.com/contact</a>
        </p>
      </TextContentSection>
    </PageWrapper>;
  }
};

export default PrivacyPage;
