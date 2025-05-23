 const texts = [
    {
      title: '<span>Smart Home</span><br>Automation Solutions',
      desc: 'Transform your living space with our cutting-edge smart home automation services. From advanced CCTV and biometric access control to KNX automation and motorised curtains, we deliver seamless solutions powered by trusted brands like Hik-Vision, Yale, and Somfy.'
    },
    {
      title: '<span>Intelligent</span><br>Security Systems',
      desc: 'Keep your home secure with real-time surveillance, remote access, and biometric entry — all integrated seamlessly with your smart ecosystem.'
    },
    {
      title: '<span>Effortless</span><br>Energy Control',
      desc: 'Maximize comfort and savings with automated lighting, HVAC control, and curtain systems for an energy-efficient home.'
    }
  ];

  let current = 0;
  const titleEl = document.getElementById('banner-title');
  const descEl = document.getElementById('banner-desc');

  function updateBanner() {
    // Fade out
    titleEl.classList.add('fade-out');
    descEl.classList.add('fade-out');

    // Wait for fade-out to complete
    setTimeout(() => {
      // Update text
      titleEl.innerHTML = texts[current].title;
      descEl.innerHTML = texts[current].desc;

      // Fade in
      titleEl.classList.remove('fade-out');
      descEl.classList.remove('fade-out');

      // Move to next
      current = (current + 1) % texts.length;
    }, 1000); // match CSS transition duration
  }

  // Initial display
  updateBanner();

  // Rotate every 8 seconds
  setInterval(updateBanner, 8000);
  
document.addEventListener('DOMContentLoaded', function () {
  const videos = [
    'assets/videos/gvrclip.mp4',
    'assets/videos/people_tablet_1280x672.mp4',
    'assets/videos/smart_house_tablet_1280x720.mp4'
  ];

  let currentVideo = 0;
  const videoTag = document.getElementById('bg-video');
  const videoSource = document.getElementById('video-source');

  function playNextVideo() {
    currentVideo = (currentVideo + 1) % videos.length;
    videoSource.setAttribute('src', videos[currentVideo]);
    videoTag.load();
    videoTag.play();
  }

  // Start with the first video
  videoSource.setAttribute('src', videos[currentVideo]);
  videoTag.load();
  videoTag.play();

  // Change video every 20 seconds
  setInterval(playNextVideo, 20000);
});