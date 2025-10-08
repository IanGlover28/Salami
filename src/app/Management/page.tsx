// src/app/Management/page.tsx (Server Component)
import ManagementClient from "./ManagementClient";

export const metadata = {
  title: "Leadership Team | Salami FC",
  description:
    "Meet the visionary leadership team behind Salami FC — driving success, innovation, and community impact both on and off the pitch.",
};

export default function ManagementPage() {
  return <ManagementClient />;
}