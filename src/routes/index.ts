import { Router } from 'express';
import { Page, pageRoute } from '../page';
import BlogRoute from './blog';

const HomePage:Page = {
  sections:[
    {
      type: 'hero',
      properties: {
        title: 'Dominic Masters\nSoftware Developer and Tinkerer.',
        subtitle: `I develop all manner of things, and tinker with tech new and old.`,
        buttonLeft: {
          text: `View the blog`,
          url: `/blog`
        },
        buttonRight: {
          text: `About me`,
          url: `/about`
        }
      }
    }
  ]
};


const router = Router();

router.get('/', pageRoute(HomePage));
router.get('/blog', BlogRoute);

export default router;