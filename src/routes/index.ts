import { Router } from 'express';
import { Page, pageRoute } from '../page';


const HomePage:Page = {
  sections:[
    {
      type: 'hero',
      properties: {
        title: 'Welcome to Dom\'s Place',
      }
    }
  ]
};


const router = Router();

router.get('/', pageRoute(HomePage));

export default router;