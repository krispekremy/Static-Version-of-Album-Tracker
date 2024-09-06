import AlbumCard from "./AlbumCard.tsx";
import { Album } from "../types.tsx";
import heavenImage from "../assets/heaven.jpg";
import reiaImage from "../assets/reia.jpg";
import ostracaImage from "../assets/ostraca.jpg";

const newAlbums: Album[] = [
  {
    id: 0,
    artist: "HEAVEN THROUGH VIOLENCE",
    name: "Heaven Through Violence",
    image: heavenImage,
    link: "https://heaventhroughviolence.bandcamp.com/album/s-t",
  },
  {
    id: 1,
    artist: "Reia Cibele",
    name: "Reia Cibele",
    image: reiaImage,
    link: "https://reiacibele.bandcamp.com/album/reia-cibele",
  },
  {
    id: 2,
    artist: "Ostraca",
    name: "Disaster",
    image: ostracaImage,
    link: "https://ostraca.bandcamp.com/album/disaster",
  },
];

export default function NewAlbumList() {
  return (
    <div className="border-end bg-light p-3 d-flex flex-column ">
      {newAlbums.map((a) => (
        <AlbumCard key={a.id} album={a} />
      ))}
    </div>
  );
}
