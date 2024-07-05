import Card from "../../components/Card";
import CardsContainer from "../../components/Card/index";

const freelanceProfiles = [
  {
    name: "Jane Doe",
    jobTitle: "Devops",
    picture: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Paul Auchon",
    jobTitle: "Developpeur frontend",
    picture: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Elma Tejh",
    jobTitle: "Développeuse Fullstack",
    picture: "https://randomuser.me/api/portraits/women/32.jpg",
  },
];

function Freelances() {
  return (
    <div>
      <h1>Freelances 👩‍💻👨‍💻👩‍💻</h1>
      <CardsContainer>
        {freelanceProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.jobTitle}
            title={profile.name}
          />
        ))}
      </CardsContainer>
    </div>
  );
}

export default Freelances;
