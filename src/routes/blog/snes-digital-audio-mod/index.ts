import { Router } from "express";
import { Page, pageRoute } from "../../../page";

/*
# Super Famicom / SNES Digital Audio Mod

Recently I have been revisiting some of my favorite retro game consoles, mostly
due to reorganising my loungeroom. Probably one I wish I spent more time playing
was the Super Nintendo, and I wanted to address some of the problems with my Japanese Super Famicom (SFC).

Primarily the problems stemmed from less than ideal quality, this is due to the
SNES's well known [terrible image softening](https://www.chrismcovell.com/gotRGB/snesblur.html)
and that my SFC was pretty yellowed.

Second issue was my audio. I have some somewhat decent SCART cables I use but
the static caused by interference from the analogue audio was definitely not
ideal. I wanted to bypass the SNES's analogue audio, and hear the digital audio
from the console. To achieve this I needed to perform a digital audio mod.

Finally, I wanted to challenge my soldering skills a bit more, and so I decided
to tackle these issues all at the same time.

## The plan

To address the image quality issue, I wanted to get a [1chip SFC](https://consolemods.org/wiki/SNES:SNES_Model_Differences#Comparisons).
These 1chip  systems are named after their motherboard, which were the names
used on later revision motherboards that had noticeably improved image quality.
These later revisions integrate the video circuitry into a single chip, reducing
signal noise and resulting in a noticeably sharper image while retaining RGB output

Second, I had been aware of Digital Audio Mods for the SNES for a while, but 
they all typically involved cutting the case of the system to accommodate a full
TOSLINK connector, which I wanted to avoid doing where possible, and keep the
original case intact.

Finally, I had been made aware that [The Retro Channel](https://www.chrismcovell.com/gotRGB/snesblur.html)
had a no-cut SNES digital audio mod, that replaced the RF module of the SNES, and
did not require cutting.

## New Super Famicom

There are really only three ways to get a 1chip SNES;
1) Run the motherboard lottery, where you purchase a SNES, then have to open it and check if it is a 
1chip variant or not.
2) Purchase a SNES/SFC Jr. and mod it for RGB support.
3) Purchase a 1chip SNES/SFC from a reseller.

I decided to go with option 3, really wanted to keep the original SFC and didn't
want to spend a fortune trying to find a 1chip myself. I ended up purchasing a
1chip SFC from an eBay reseller for around $100 USD, not too bad considering they
can go for significantly more.

Originally I had planned to also do a full recap of the system, to extend its
life. This is definitely a moment where I realised that buying a 1chip from a 
reseller was maybe not the best idea.

Upon opening the system I found it had been recapped already, but the quality of
the work left a lot to be desired. The recap solder points were very messy with
way too much solder remaining on the board. The legs of the caps were also left
rather long and get close to interfering with the RF Shield. I have not yet
recapped the system but I definitely plan to do so in the near future.

Other than the iffy recap job however, the system worked fine and the image
quality compared to my previous SFC was significantly improved.

## Digital Audio Mod

The SNES typically outputs line level audio through the AV port in stereo. This
is fine but the Digital Signal Processor (DSP) chip in the SNES is capable of
producing much higher quality audio, and several games use the full [32 KHz sample rate](https://www.alpha-ii.com/Info/snes-spdif.html)
that the system is capable of, but the audio the analogue output provides is
[significantly more limited](https://www.youtube.com/watch?v=6J7Sea0KniU&t=98s).

By the time I decide to purchase my 1chip, the no cut mods had sold out
unfortunately, which delayed me initially. After a few weeks however The Retro
Channel had created a new version, the [No-Cut Digital Audio Mod v2](https://lectronz.com/products/super-nintendo-digital-audio-no-cut-mod-v2)

The v1 version of the mod took over the RF connector and turned it into a
digital coaxial output, meaning that from the outside the console looked
completely stock. The new v2 version removed the entire RF module and replaced
it with a small PCB that doubled as a 3.5mm coaxial and mini-TOSLINK output,
meaning that the console looked slightly different but still required no cutting
of the case, which is nice.

I do wish I could have purchased one of the original v1 mods, but the v2 was
available and functionally is the same, so I purchased it.

## Installation

Installation was pretty straight forward, mostly following [The Retro Channel's video](https://www.youtube.com/watch?v=OXpKuyHBA48)
I was able to tackle it in an afternoon. The kit comes with all the parts you
need and it took me around an hour to install, taking my time and testing after
each solder to ensure no shorts or bad connections. 

The only difficult part was soldering the three wires to the DSP chip, as they
are very close and keeping the legs apart was a bit tricky, but with patience I
got the soldering done without any issues.

## Results

From the outside it is clear the Super Famicom has been modded, but the mod is
otherwise clean and there's no damage to the case, so it looks good. I attached
a mini-TOSLINK to full size TOSLINK adapter, which hides the smaller 3.5mm size
of the connector and keeps it looking cleaner.

As for the audio, it's fantastic. This is by far the best sounding SNES audio I
have ever heard. I was worried my Sony STR-DN1040 would not like the SNES digital audio signal,
since pauses in the audio count as the digital audio stopping, but it handles it
fine and I've heard no stutters or pauses.

Finally I would be remiss if I did not mention the downsides. Really there is 
only two. The obvious is the cost; the 1chip itself is expensive for a SNES and
the mod was also not cheap, then the time it took for me to install the mod was
not insignificant.

The second drawback is that the mod only provides digital audio on the audio
generated by the SNES's internal DSP chip. This is rare but the SNES could allow
games to perform their own audio processing, bypassing the SNES DSP chip entirely and
therefore not outputting through the mod. The only notable instances of this are
the Super Gameboy, which used a custom chip to emulate the Gameboy's audio on 
the Super Gameboy Cartridge itself, bypassing the SNES DSP, and any games that
make use of the custom MSU-1 chip.

## Surround Sound

I want to do a full post on this in the future, but the SNES supported Dolby Pro Logic
surround sound in some games. I have yet to find a comprehensive list but definitely
Star Ocean supports it, and uses it very effectively. Over the digital audio the
surround is very clear and has a wide soundstage, it's extremely impressive for a
16-bit console.

## Conclusion
This was an expensive and time consuming mod, but it is about as close to the
perfect SNES as one can get. The only other mods I am aware of that could improve it are;
a better RGB bypass mod, similar to what the N64 RGB mods use, or a pure digital
video mod, similar to the [RetroGEM](https://www.pixelfx.co/product-page/n64-hdmi)
mods, but I am not aware of any for the SNES currently.
*/

const BlogPage:Page = {
  sections: [
  ]
};

const router = Router();
router.get('/', pageRoute(BlogPage));
export default router;