/** Published on https://pelicanmigration.com/review-and-testimonials/. */
export const testimonialVideos = [
  { id: "wLAOihHHS94", title: "Clarisse’s journey to Canada" },
  { id: "fGyqV3fEC3w", title: "Sigrid and Ryan’s work permit" },
  { id: "y05zoJ_padg", title: "Charity and King’s experience" },
  { id: "h8zQ0-EQEjE", title: "Irene and Aaron’s journey" },
  { id: "QU6m636318A", title: "Jacqueline and family" },
  { id: "OBMzGCHJDs4", title: "Ankit’s Canadian journey" },
].map((video) => ({ ...video, videoId: video.id, thumb: "/images/testimonial-thumb.png" }));
