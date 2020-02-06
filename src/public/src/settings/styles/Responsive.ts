export const Sizes = {
  'mobileSmall': 320,
  'mobile': 375,
  'mobileLarge': 414,

  'tabletsmall': 600,
  'tablet': 768,
  'tabletLarge': 1024,

  'laptopSmall': 1280,
  'laptop': 1366,
  'laptopLarge': 1600,

  'desktopSmall': 1920,
  'desktop': 2300,
  'desktopLarge': 2560,

  /* Special */
  'ultrawide': 3840
}

export const MediaQueries = {
  mobileUp: `@media screen and (min-width: ${Sizes.mobile}px)`,
  tabletUp: `@media screen and (min-width: ${Sizes.tablet}px)`,
  laptopUp: `@media screen and (min-width: ${Sizes.laptop}px)`,
  desktopUp: `@media screen and (min-width: ${Sizes.desktop}px)`,
}