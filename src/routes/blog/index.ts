import { Router } from "express";
import { Page, pageRoute } from "../../page";
import SnesDigitalAudioMod from "./snes-digital-audio-mod";

const ThisPage:Page = {
  sections: [

  ]
};

const router = Router();

router.get('/', pageRoute(ThisPage));
router.get('/snes-digital-audio-mod', SnesDigitalAudioMod);

export default router;