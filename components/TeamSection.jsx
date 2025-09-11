import Team from "./Team";
import { client } from "../sanity/lib/client";

export default async function TeamSection() {
  const teamData = await client.fetch(`*[_type == "teamMember"]{
    name,
    role,
    alt,
    background,
    avatar
  }`);

  return <Team teamData={teamData} />;
}
