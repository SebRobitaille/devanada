- brand colors
    - https://coolors.co/palette/e63946-f1faee-a8dadc-457b9d-1d3557

- brand logo
    - Red color src: https://cdn.shopify.com/s/files/1/0024/9551/2691/files/Hero_Background_Image.png?v=1659340300
    - Light blue: https://cdn.shopify.com/s/files/1/0024/9551/2691/files/Hero_Background_Image_1.png?v=1659340402
    - Dark blue: https://cdn.shopify.com/s/files/1/0024/9551/2691/files/Hero_Background_Image_2.png?v=1659340429

- main font famly
    - https://fonts.google.com/specimen/Roboto+Condensed

- secondary font family
    - https://fonts.google.com/specimen/Montserrat

**31 Jul - SR:**
I like the fonts, the logo and the colors. We can start with these and adjust as it comes together if needed. If you liked the style of my portfolio page we can start with something like that? It's plain JS with some SCSS but I'm sure we can make it with regular CSS. We can also upgrade to a React website as our knowledge develops.

> Changes made:
- Added links to fonts, added fonts to CSS sheet.
- Moved Script tag to head section of HTML, add defer in the tag to make it pseudo at the end (but it's still "hoisted").
- Layed out some boilerplate HTML for the pseudo-single page application look.
 -> Added 5 sections (can be changed to fit however many "pages" we want)
 -> will add buttons to swtich between sections tomrrow


 **01 Aug - KH:**
 > HTML:
- Added an image to visualize the header section. What do you think of changing the color of the background and clothing? We also could get an image from something like Unsplash. 
- Added a control-0 to the controls div, so that we can have the page controls and the theme change within a single div. This way, we can just use a flex-direction of columns and justify-content space-between to ensure they don’t overlap.

> CSS:
- Changed the colors in the :root for the custom properties, and made sure to change the variables used within the codebase.We’ll be able to change the color by listening for an event listener on the button and changing the .style.color changing the CSS variable to either the light var of the dark one (if statement could be used for this). The default color will be dark. 
- Added the /* Header Display */ section and below, editing the left-header and right-header divs to get the desired layout. Set up the grid with a height of 100VH, with 2 1fr columns that are alighed in the center. Added in the h-shapre in the background using the same clip path as the example website. 
- Added in the template for the controls, but I did see in the previous notes that you had icons that you are going to add in, so didn’t make sense going out and looking for my own. The plan is to add the theme/color change button and the controls in the same div on the right-hand side, so that the user is able to change the color on any page. Using the custom properties will make it fairly easy. 

> ReadMe:
- Added 3 images of our brand logo, using the highlight color (red), the light blue, and the dark blue. 
