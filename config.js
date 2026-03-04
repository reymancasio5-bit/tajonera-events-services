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
  businessName: "Tajonera Events and Services – A Signature by RDT",
  tagline: "Where Every Moment Becomes a Memory",
  logoURL: "Logo 1.png",
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
    text: `A Signature by RDT is your trusted local partner for weddings, corporate events, and special celebrations in Surigao del Sur.
            We combine creative styling with professional technical production to deliver seamless, elegant, and unforgettable events.`,
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
      title: "Wedding Styling & Coordination",
      icon: "♡",
      description: "Full event styling and on-the-day coordination for a smooth, stress-free celebration.",
      image: "https://images.unsplash.com/photo-1764380746258-5954cc8d5fc0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      video: ""
    },
    {
      title: "Ceremony & Reception Styling",
      icon: "꧁",
      description: "From aisle design to reception elegance — every detail styled to perfection.",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
      video: ""
    },
    {
      title: "Stage & Backdrop Design",
      icon: "✶",
      description: "Custom-built stages, premium backdrops, romantic accents, and LED-enhanced designs.",
      image: "https://images.unsplash.com/photo-1576514129883-2f1d47a65da6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      video: ""
    },
    {
      title: "Floral Arrangements",
      icon: "✿",
      description: "Fresh or artificial floral designs for: Aisles, Centerpieces, Arches, Entourage Boquets, Ceiling Installations.",
      image: "https://images.unsplash.com/photo-1606101083393-bded314215cd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      video: ""
    },
    {
      title: "Ceiling Draping & Chandeliers",
      icon: "❂",
      description: "Luxurious fabric draping paired with elegant chandeliers to elevate the venue ambiance.",
      image: "https://images.unsplash.com/photo-1648661560242-8df9df938fe7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      video: ""
    },
    {
      title: "Lights & Sounds System",
      icon: "✦",
      description: "Professional equipment with experienced technical support. Clear and powerful audio for weddings, debuts, birthdays, and corporate programs.",
      image: "https://images.unsplash.com/photo-1630965764341-6db7343cfa57?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      video: ""
    },
    {
      title: "Stage & Ambient Lighting",
      icon: "✺",
      description: "Warm romantic lighting, Moving head lights, Uplighting, Spotlight effects, Mood lighting design",
      image: "https://images.unsplash.com/photo-1639682687092-0264e96cbb71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      video: ""
    },
    {
      title: "Led Wall / Led TV Rental",
      icon: "▦",
      description: "Modern display solutions for impactful visuals. Perfect for: Wedding SDE, AVP Presentations, Same-day edits, Corporated Branding",
      image: "https://images.unsplash.com/photo-1643642969389-6db6b7a0fa56?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      video: "" 
    },
    {
      title: "Corporate & Wedding Visual Setup",
      icon: "✤",
      description: "Professional screen and visual arrangement for conferences, product launches, and formal events.",
      image: "https://images.unsplash.com/photo-1643066873547-bb968527969d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      video: ""
    }
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
    phone:   "+639125984915",
    email:   "jamesdtajonera@gmail.com",
    address: "Tandag City, Surigao del Sur Philippines",
    hours:   "Mon – Sat: 9:00 AM – 6:00 PM",
  },

  // ============================================================
  // SOCIAL MEDIA LINKS
  // Paste your full profile URLs here.
  // Leave empty ("") to hide a specific social link.
  // ============================================================
  social: {
  facebook:  { url: "https://web.facebook.com/profile.php?id=100067916282313",  icon: "fab fa-facebook-f" },
  instagram: { url: "", icon: "fab fa-instagram" },
  tiktok:    { url: "", icon: "fab fa-tiktok" },
  youtube:   { url: "", icon: "fab fa-youtube" },
},

  // ============================================================
  // GOOGLE FORM LINK
  // Paste your full Google Form URL here (NOT the embed src).
  // When visitors click "Contact Us to Book", they will be
  // redirected to this Google Form in a new tab.
  //
  // HOW TO GET THE LINK:
  //   1. Open your Google Form
  //   2. Click Send → Link icon (🔗)
  //   3. Copy the URL and paste it below
  //
  // Example:
  //   googleFormLink: "https://docs.google.com/forms/d/e/YOUR_ID/viewform"
  //
  // Leave empty ("") to use mailto fallback instead.
  // ============================================================
  // ============================================================
  // COMMITMENT SECTION
  // Edit the intro text and commitment items here.
  // Each item needs: icon (Font Awesome class), title, and text.
  // ============================================================
  commitment: {
    intro: "As a proudly local events provider, we are committed to excellence and reliability. We ensure:",
    items: [
      {
        icon: "fas fa-bolt",
        title: "Fast Response & Coordination",
        text: "We act quickly on inquiries, bookings, and last-minute adjustments so your event stays on track."
      },
      {
        icon: "fas fa-clock",
        title: "Reliable On-Time Setup",
        text: "Punctuality is our promise. Every setup is completed on schedule, well before your guests arrive."
      },
      {
        icon: "fas fa-user-tie",
        title: "Hands-On Management Supervision",
        text: "Our management team personally oversees every event to ensure nothing is left to chance."
      },
      {
        icon: "fas fa-handshake",
        title: "Strong Local Partnerships",
        text: "We work closely with trusted local vendors and venues across Surigao del Sur for seamless execution."
      },
      {
        icon: "fas fa-heart",
        title: "Personalized Client Service",
        text: "Every client is treated as a priority. We listen, adapt, and deliver exactly what you envision."
      },
      {
        icon: "fas fa-star",
        title: "High-Quality Styling & Equipment",
        text: "We use premium materials and well-maintained equipment to deliver stunning, professional results every time."
      },
    ]
  },

  googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLScIRI94gtb-ikSPtLcwhbFSSVLyABGD1rQPGtw9WQN9mYSTBA/viewform",

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
