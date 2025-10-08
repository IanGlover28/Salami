// src/app/fixtures/page.tsx
import FixturesClient from "./FixturesClient";

export const metadata = {
  title: "Upcoming Fixtures | Salami FC",
  description:
    "Stay updated on Salami FC's latest fixtures, match results, and exciting upcoming games. Follow your favorite club’s journey every step of the way.",
  openGraph: {
    title: "Upcoming Fixtures | Salami FC",
    description:
      "Stay updated on Salami FC's latest fixtures, match results, and exciting upcoming games.",
    images: ["/images/fixtures-banner.jpg"], // Change to your banner image path
  },
};

export default function FixturesPage() {
  return <FixturesClient />;
}
