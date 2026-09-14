import { DocumentTemplateTheme } from '../models/document.model';

export const themeColors = [
  '#393938',
  '#5271ff',
  '#e56e18',
  '#2f9e85',
  '#b71e1e',
] as const;

export const themeTypes = ['simple', 'modern'] as const;

export type ThemeColor = (typeof themeColors)[number];
export type ThemeType = (typeof themeTypes)[number];

const themeEntries: [ThemeColor, Record<ThemeType, DocumentTemplateTheme>][] =
  themeColors.map((color: ThemeColor) => [
    color,
    {
      simple: {
        primaryColor: color,
        table: {
          headerBackgroundColor: color,
          headerTextColor: '#ffffff',
          totalBackgroundColor: color,
          totalTextColor: '#ffffff',
        },
        background: {
          type: 'color',
          value: '#fffbf0',
        },
        type: "simple",
        template: `<svg class="w-full" viewBox="0 0 20.161249 24.579792" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"> <defs id="defs1" /> <g id="layer1"> <rect style="fill:none;stroke:#333333;stroke-width:0.0264583;stroke-dasharray:none;stroke-opacity:1" id="rect2" width="5.3279104" height="1.1213744" x="1.3313093" y="1.6344762" ry="0.56068718" /> <rect style="fill:none;stroke:#333333;stroke-width:0.0264583;stroke-dasharray:none;stroke-opacity:1" id="rect3" width="2.2037325" height="1.1189623" x="15.116312" y="1.6356822" ry="0.55948114" /> <path style="fill:none;stroke:#333333;stroke-width:0.0264583;stroke-dasharray:none;stroke-opacity:1" id="path3" d="m 18.839881,2.183108 a 0.57075346,0.57075548 0 0 1 -0.557943,0.58267 0.57075346,0.57075548 0 0 1 -0.583282,-0.5573033 0.57075346,0.57075548 0 0 1 0.55666,-0.5838965 0.57075346,0.57075548 0 0 1 0.584506,0.5560184" /> <rect style="fill:none;stroke:#333333;stroke-width:0.0264583;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1" id="rect4" width="17.55212" height="6.5341287" x="1.3045644" y="6.9122396" ry="0.48027188" /> <rect style="fill:none;stroke:#333333;stroke-width:0.0264583;stroke-dasharray:none;stroke-opacity:1" id="rect5" width="5.9475956" height="2.2777605" x="1.2475123" y="15.11586" ry="0.24359384" /> <rect style="fill:none;stroke:#333333;stroke-width:0.0264583;stroke-dasharray:none;stroke-opacity:1" id="rect6" width="5.9177556" height="3.5926814" x="12.938929" y="15.130781" ry="0.38421732" /> <rect style="fill:none;stroke:#333333;stroke-width:0.0264583;stroke-dasharray:none;stroke-opacity:1" id="rect7" width="17.441633" height="2.1972501" x="1.2877675" y="20.054888" ry="0.23498371" /> <rect style="fill:none;stroke:#333333;stroke-width:0.0264583;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1" id="rect8" width="5.201746" height="1.1476928" x="1.2362199" y="4.7272286" ry="0.4386135" /> <rect style="fill:none;stroke:#333333;stroke-width:0.0264583;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1" id="rect9" width="5.201746" height="1.1476928" x="13.654939" y="4.7272286" ry="0.4386135" /> <rect style="fill:currentColor;stroke:currentColor;stroke-width:0.0114289;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1" id="rect1" width="17.56715" height="1.2181426" x="1.2970496" y="6.9047246" ry="0.50719023" /> </g> </svg>`,
      },
      modern: {
        primaryColor: color,
        table: {
          headerBackgroundColor: color,
          headerTextColor: '#ffffff',
          totalBackgroundColor: color,
          totalTextColor: '#ffffff',
        },
        background: {
          type: 'image',
          value: '/backgrounds/modern/00.png',
        },
        type: "modern",
        template: `<svg class="w-full" viewBox="0 0 20.161249 24.579792" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"> <defs id="defs1" /> <g id="layer1"> <rect style="fill:none;stroke:#333333;stroke-width:0.02645833;stroke-dasharray:none" id="rect3" width="2.2037325" height="1.1189623" x="3.2009945" y="1.6356822" ry="0.55948114" /> <path style="fill:none;stroke:#333333;stroke-width:0.02645833;stroke-dasharray:none" id="path3" d="M 2.3776017,2.183108 A 0.57075346,0.57075548 0 0 1 1.8196589,2.765778 0.57075346,0.57075548 0 0 1 1.2363774,2.2084747 0.57075346,0.57075548 0 0 1 1.7930366,1.6245782 0.57075346,0.57075548 0 0 1 2.3775431,2.1805966" /> <rect style="fill:none;stroke:#333333;stroke-width:0.02645833;stroke-linejoin:round;stroke-dasharray:none" id="rect4" width="17.55212" height="6.5341287" x="1.3045644" y="7.9705729" ry="0.48027188" /> <rect style="fill:none;stroke:#333333;stroke-width:0.02645833;stroke-dasharray:none" id="rect5" width="5.9475956" height="2.2777605" x="1.2475123" y="15.11586" ry="0.24359384" /> <rect style="fill:none;stroke:#333333;stroke-width:0.02645833;stroke-dasharray:none" id="rect6" width="5.9177556" height="3.5926814" x="12.938929" y="15.130781" ry="0.38421732" /> <rect style="fill:none;stroke:#333333;stroke-width:0.02645833;stroke-dasharray:none" id="rect7" width="9.3935223" height="2.2316985" x="1.2705433" y="20.037664" ry="0.23866779" /> <rect style="fill:none;stroke:#333333;stroke-width:0.02645833;stroke-linejoin:round;stroke-dasharray:none" id="rect8" width="5.201746" height="1.1476928" x="1.2362199" y="5.785562" ry="0.4386135" /> <rect style="fill:none;stroke:#333333;stroke-width:0.02645833;stroke-linejoin:round;stroke-dasharray:none" id="rect9" width="5.201746" height="1.1476928" x="13.654939" y="5.785562" ry="0.4386135" /> <rect style="fill:none;stroke:#333333;stroke-width:0.02645833;stroke-linejoin:round;stroke-dasharray:none" id="rect2" width="2.0975633" height="0.56340146" x="1.1921754" y="4.2972307" ry="0.21531501" /> <rect style="fill:currentColor;stroke:currentColor;stroke-width:0.0747872;stroke-dasharray:none" id="rect10" width="5.9752603" height="1.1371213" x="12.910176" y="17.564154" ry="0.41574004" /> <rect style="fill:none;stroke:#333333;stroke-width:0.02645833;stroke-dasharray:none" id="rect11" width="5.6192675" height="2.2610013" x="13.237417" y="20.023012" ry="0.24180156" /> </g> </svg>`,
      },
    },
  ]);

export const themes: Record<
  ThemeColor,
  Record<ThemeType, DocumentTemplateTheme>
> = Object.fromEntries(themeEntries) as Record<
  ThemeColor,
  Record<ThemeType, DocumentTemplateTheme>
>;
