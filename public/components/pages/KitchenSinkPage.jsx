import React from 'react';

import Page from './../Page';
import Poly from './../sections/Poly';
import BodySection from './../sections/BodySection';

class KitchenSinkPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page>
        <Poly />
        <BodySection>

          <h1>This is the primary heading and there should only be one of these per page</h1>
          <p>A small paragraph to <em>emphasis</em> and show <strong>important</strong> bits.</p>
          <ul>
            <li>This is a list item</li>
            <li>So is this - there could be more</li>
            <li>Make sure to style list items to:
              <ul>
                <li>Not forgetting child list items</li>
                <li>Not forgetting child list items</li>
                <li>Not forgetting child list items</li>
                <li>Not forgetting child list items</li>
              </ul></li>
            <li>A couple more</li>
            <li>top level list items</li>
          </ul>
          <p>Don't forget <strong>Ordered lists</strong>:</p>
          <ol>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
            <li>Aliquam tincidunt mauris eu risus.
              <ol>
                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                <li>Aliquam tincidunt mauris eu risus.</li>
              </ol>
            </li>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
            <li>Aliquam tincidunt mauris eu risus.</li>
          </ol>

          <h2>A sub heading which is not as important as the first, but is quite imporant overall</h2>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
          </p>

          <table class="t1" summary="Top 10 downloaded movies in 2011 using BitTorrent, in descending order, listing number of downloads and worldwide cinema grosses">
            <caption>
              Most Downloaded Movies on BitTorrent, 2011
            </caption>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Movie</th>
                <th>Downloads</th>
                <th>Grosses</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th colspan="4">torrentfreak.com</th>
                </tr>
            </tfoot>
            <tbody>
              <tr>
                <th>1</th>
                <td>Fast Five</td>
                <td>9,260,000</td>
                <td>$626,137,675</td>
              </tr>
              <tr>
                <th>2</th>
                <td>The Hangover II</td>
                <td>8,840,000</td>
                <td>$581,464,305</td>
              </tr>
              <tr>
                <th>3</th>
                <td>Thor</td>
                <td>8,330,000</td>
                <td>$449,326,618</td>
              </tr>
              <tr>
                <th>4</th>
                <td>Source Code</td>
                <td>7,910,000</td>
                <td>$123,278,618</td>
              </tr>
              <tr>
                <th>5</th>
                <td>I Am Number Four</td>
                <td>7,670,000</td>
                <td>$144,500,437</td>
              </tr>
              <tr>
                <th>6</th>
                <td>Sucker Punch</td>
                <td>7,200,000</td>
                <td>$89,792,502</td>
              </tr>
              <tr>
                <th>7</th>
                <td>127 Hours</td>
                <td>6,910,000</td>
                <td>$60,738,797</td>
              </tr>
              <tr>
                <th>8</th>
                <td>Rango</td>
                <td>6,480,000</td>
                <td>$245,155,348</td>
              </tr>
              <tr>
                <th>9</th>
                <td>The King’s Speech</td>
                <td>6,250,000</td>
                <td>$414,211,549</td>
              </tr>
              <tr>
                <th>10</th>
                <td>Harry Potter and the Deathly Hallows Part 2</td>
                <td>6,030,000</td>
                <td>$1,328,111,219</td>
              </tr>
            </tbody>
          </table>
          
          <h3>A sub heading which is not as important as the second, but should be used with consideration</h3>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
          </p>

          <blockquote>
            <p><em>This is a properly formatted blockquote, btw.</em> Measuring programming progress by lines of code is like measuring aircraft building progress by weight.</p>
            <footer>
              — <cite><a href="http://www.thegatesnotes.com">Bill Gates</a></cite>
            </footer>
          </blockquote>

          <h4>A sub heading which is not as important as the second, but should be used with consideration</h4>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
          </p>
          <blockquote>
            <p>
              “Ooh - a blockquote! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.”
            </p>
          </blockquote>

        </BodySection>
      </Page>
    )
  }
}

export default KitchenSinkPage;
