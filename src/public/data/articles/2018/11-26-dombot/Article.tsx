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

import { Image } from '@yourwishes/app-simple-react/dist/public';
import { ArticleProps } from './../../../../pages/article/';

import './styles.scss';

export const DomBotRedevelopmentArticle = (props:ArticleProps) => {
  let { article } = props;

  return <>
    <meta itemProp="lastUpdated" content={new Date('2019-05-26 09:32:00').toString()} />

    <Image className="c-dbr__image" src={article.image} />

    <div className="c-dbr__description" itemProp="description">
      <p>
        It's no secret that I play video games, I particularly enjoy online
        multiplayer games such as Team Fortress 2. These games often require
        a good means of communication with fellow teammates, so that gameplay
        can be coordinated and teams can win more often.
      </p>

      <p>
        Generally, gamers will tend to use <a href="//discord.com">Discord</a> due
        to it's high install base, as well as great quality and free service.
      </p>

      <p>
        I use tend to use Discord as well, and have had some fun digging around
        with the Discord API, to build some software for me and my friends'
        chatrooms.
      </p>

      <p>
        One of my older projects is DomBot, a free to install and use Discord
        Music Bot, that I recently had the privilage of updating as a proof
        of concept.
      </p>

      <p>
        While the concept of a Music Bot for Discord is not new, I had built it
        to build up and demonstrate the capabilities of my new TypeScript
        based application framework, that I plan to use in a lot of my new
        and upcoming projects.
      </p>

      <p>
        If you're interested in having DomBot on your server, head over to
        the <a href="//dombot.domsplace.com">dedicated page I have setup</a> and
        you can install the bot onto your Discord server for free.
      </p>

      <p>
        For now I look forward to bringing more applications on my new app
        framework, and you'll likely see my personal site merged with the
        framework in the next coming months.
        <br /><br />
        Thanks,<br />Dominic
      </p>
    </div>
  </>;
}

export default DomBotRedevelopmentArticle;
