import TopPackageCard from "./TopPackageCard";
import "./TopPackagesSection.css";

const topPackages = [
  {
    title: "Debate Competition",
    description:
      "lorem",
    image: "Debate Competition Astrophysics Club CITK.jpg",
  },
  {
    title: "Chandrayaan 3 Landing",
    description:
      "Lorem.",
    image: "Chandrayaan-3-Landing.png",
  },
  {
    title: "Essay Competition 2023",
    description: "Lorem",
    image: "Essay Competition 2023.png",
  },
  {
    title: "Sun-Earth Interaction",
    description: "Lorem",
    image: "Sun-Earth Interaction.png",
  },
  {
    title: "Advances in Astrophysics and Cosmology",
    description: "Lorem",
    image: "Advances in Astrophysics and Cosmology.png",
  },
  {
    title: "Space-O-Talk",
    description: "Lorem",
    image: "Space-O-Talk.png",
  },
  {
    title: "Space-Science-Day",
    description: "Lorem",
    image: "Space-Science-Day.jpg",
  },
];

export default function TopPackagesSection() {
  return (
    <section className="top-packages-section" id="top-packages-section">
      <h2>Past Events</h2>
      <div className="packages-container">
        {topPackages.map((pkg, index) => (
          <TopPackageCard key={index} {...pkg} />
        ))}
      </div>
    </section>
  );
}

