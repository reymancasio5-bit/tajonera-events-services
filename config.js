/**
 * ============================================================
 *  TAJONERA EVENTS SERVICES — CONFIGURATION FILE
 *  ============================================================
 *  HOW TO CUSTOMIZE:
 *  Edit ONLY this file to update your website.
 *  Do NOT edit index.html, styles.css, or script.js
 *  unless you are a developer.
 *
 *  INSTRUCTIONS ARE WRITTEN ABOVE EACH SECTION BELOW.
 * ============================================================
 */

const CONFIG = {

  // ============================================================
  // BUSINESS IDENTITY
  // Change your business name, tagline, and logo here.
  // ============================================================
  businessName: "Tajonera Events Services",
  tagline: "Where Every Moment Becomes a Memory",
  logoURL: "",
  // If logoURL is empty, the elegant "T E S" monogram will be shown.
  // To use your own logo: logoURL: "https://your-image-link.com/logo.png"

  // ============================================================
  // THEME COLORS
  // Change the website's color palette here.
  // Use any valid CSS color: hex (#fff), rgb(), or named colors.
  // ============================================================
  colors: {
    primary:    "#c9a96e",   // Gold accent
    secondary:  "#f5ede0",   // Champagne / warm white
    accent:     "#e8c9a0",   // Soft blush gold
    dark:       "#1a1410",   // Deep warm black
    darkMid:    "#2d2218",   // Card backgrounds
    text:       "#f0e6d3",   // Main text color
    textMuted:  "#b8a898",   // Muted / secondary text
    glow:       "rgba(201,169,110,0.18)", // Glow effect color
  },

  // ============================================================
  // HERO BACKGROUND
  // You can use an IMAGE or a VIDEO as the hero background.
  //
  // HOW TO CHANGE BACKGROUND:
  //   - For image: set backgroundURL to any image URL
  //   - For video: set backgroundURL to a .mp4 video URL
  //   - The website will auto-detect image vs video
  //   - Leave empty ("") for a gradient background
  //
  // Example:
  //   backgroundURL: "https://example.com/my-event-photo.jpg"
  //   backgroundURL: "https://example.com/event-video.mp4"
  // ============================================================
  backgroundURL: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80",

  // ============================================================
  // ABOUT SECTION
  // Update your about text here.
  // ============================================================
  about: {
    heading: "Crafting Unforgettable Celebrations",
    text: `At Tajonera Events Services, we transform your vision into an extraordinary reality. 
           With years of experience and an eye for detail, we specialize in creating elegant, 
           personalized events that reflect your unique story. From intimate gatherings to grand 
           celebrations, we handle every detail with passion, precision, and care.`,
    highlights: [
      { icon: "✦", label: "Years of Experience", value: "10+" },
      { icon: "✦", label: "Events Completed",    value: "500+" },
      { icon: "✦", label: "Happy Couples",        value: "300+" },
      { icon: "✦", label: "Awards Received",      value: "12"   },
    ]
  },

  // ============================================================
  // SERVICES
  // HOW TO ADD SERVICES:
  //   Copy one { } block below and paste it at the end of the array.
  //   Fill in title, description, icon, and optionally image/video.
  //
  // HOW TO ADD SERVICE IMAGE:
  //   image: "https://your-image-url.com/photo.jpg"
  //
  // HOW TO ADD SERVICE VIDEO (YouTube or MP4):
  //   video: "https://www.youtube.com/embed/YOUR_VIDEO_ID"
  //   video: "https://your-server.com/video.mp4"
  //
  // HOW TO REMOVE A SERVICE:
  //   Delete the entire { ... } block for that service.
  // ============================================================
  services: [
    {
      title: "Elegant Decoration",
      icon: "✿",
      description: "From floral arrangements to thematic décor, we create breathtaking environments that set the perfect tone for your event. Every detail is curated with artistry and elegance.",
      image: "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=800&q=80",
      video: ""
    },
    {
      title: "Wedding Coordination",
      icon: "♡",
      description: "Your wedding day deserves seamless perfection. Our experienced coordinators manage every aspect — from venue setup to timeline execution — so you can cherish every moment.",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
      video: ""
    },
    {
      title: "Lights & Sound System",
      icon: "✶",
      description: "Premium audio-visual setups that elevate your event atmosphere. Crystal-clear sound, dynamic lighting, and professional technical support for an unforgettable experience.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
      video: ""
    },
  ],

  // ============================================================
  // GALLERY
  // HOW TO ADD GALLERY ITEMS:
  //   Add items to this array. Each item needs:
  //     type: "image" or "video"
  //     url:  the direct image URL or YouTube embed URL
  //
  // YouTube embed format:
  //   url: "https://www.youtube.com/embed/YOUR_VIDEO_ID"
  // ============================================================
  gallery: [
    { type: "image", url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80" },
    { type: "image", url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80" },
    { type: "image", url: "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=800&q=80" },
    { type: "image", url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80" },
    { type: "image", url: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80" },
    { type: "image", url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80" },
  ],

  // ============================================================
  // CONTACT DETAILS
  // Update your contact information here.
  // ============================================================
  contact: {
    phone:   "+63 912 345 6789",
    email:   "hello@tajoneraevents.com",
    address: "San Miguel, Surigao del Sur Philippines",
    hours:   "Mon – Sat: 9:00 AM – 6:00 PM",
  },

  // ============================================================
  // SOCIAL MEDIA LINKS
  // Paste your full profile URLs here.
  // Leave empty ("") to hide a specific social link.
  // ============================================================
  social: {
  facebook:  { url: "https://facebook.com/",  icon: "fab fa-facebook-f" },
  instagram: { url: "https://instagram.com/", icon: "fab fa-instagram" },
  tiktok:    { url: "https://www.tiktok.com/en/", icon: "fab fa-tiktok" },
  youtube:   { url: "https://www.youtube.com/", icon: "fab fa-youtube" },
},

  // ============================================================
  // GOOGLE FORM EMBED
  // HOW TO EMBED GOOGLE FORM:
  //   1. Open your Google Form
  //   2. Click Send → Embed (<>)
  //   3. Copy the full <iframe ...> tag
  //   4. Paste just the src="" URL value into googleFormEmbed below
  //
  // Example:
  //   googleFormEmbed: "https://docs.google.com/forms/d/e/YOUR_ID/viewform?embedded=true"
  //
  // Leave empty ("") to hide this section.
  // ============================================================
  googleFormEmbed: "",

  // ============================================================
  // GOOGLE SHEETS EMBED
  // HOW TO EMBED GOOGLE SHEETS:
  //   1. Open your Google Sheet
  //   2. Click File → Share → Publish to web
  //   3. Choose "Entire Document" and "Web page"
  //   4. Click Publish and copy the URL
  //   5. Paste that URL below
  //
  // Example:
  //   googleSheetEmbed: "https://docs.google.com/spreadsheets/d/YOUR_ID/pubhtml"
  //
  // Leave empty ("") to hide this section.
  // ============================================================
  googleSheetEmbed: "",

};
