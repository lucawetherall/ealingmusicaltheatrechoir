Ealing Musical Theatre Choir — Image Asset Guide
=================================================

Place your images in this folder (assets/images/) and update the relevant
HTML comments marked <!-- UPDATE --> in each page.

RECOMMENDED IMAGES
------------------

1. hero.jpg
   Used in:    index.html (hero section, right column)
   Ideal size: 1920 × 1080 px (16:9 landscape)
   Content:    A vibrant photo of the choir performing or rehearsing.
               Wide shot works best. High energy, smiling faces.
   To activate: In css/style.css, update the .hero-image-placeholder rule:
               background-image: url('../assets/images/hero.jpg');
               background-size: cover;
               background-position: center;

2. choir-group.jpg
   Used in:    index.html (about teaser), about.html (choir story)
   Ideal size: 800 × 600 px (4:3 landscape)
   Content:    Group photo of the choir — ideally on stage or in rehearsal.
   To activate: Replace the .image-placeholder div with:
               <img src="assets/images/choir-group.jpg" alt="Ealing Musical Theatre Choir" />

3. izzy-mohan.jpg
   Used in:    about.html (bio card)
   Ideal size: 600 × 800 px (3:4 portrait)
   Content:    Professional headshot or performance photo of Izzy Mohan.
   To activate: Replace the .bio-photo div with:
               <img src="assets/images/izzy-mohan.jpg" alt="Izzy Mohan, Musical Director" style="width:100%;height:100%;object-fit:cover;" />

4. choir-rehearsal.jpg
   Used in:    about.html (choir story section)
   Ideal size: 800 × 600 px (4:3 landscape)
   Content:    Candid rehearsal shot — choir members engaged with the music.

5. favicon.ico  (or favicon.png)
   Used in:    All pages (<head>)
   Size:       32 × 32 px (or SVG)
   To activate: Uncomment the <link rel="icon" ...> tag in each HTML file's <head>.

OPTIONAL / FUTURE
-----------------
- concert-1.jpg, concert-2.jpg, concert-3.jpg
  For the event cards on index.html and calendar.html.
  Ideal size: 800 × 450 px (16:9 landscape)

IMAGE TIPS
----------
- Keep file sizes under 300KB per image for fast page loads.
  Use tools like squoosh.app or tinypng.com to compress.
- Use .jpg for photos, .png for logos/icons with transparency.
- Always include descriptive alt text in the <img> tags for accessibility.
- For the hero, prefer a photo with space on the left side so text overlays cleanly.
