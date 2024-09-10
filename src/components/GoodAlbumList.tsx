import { Album } from "../types";
import AlbumCard from "./AlbumCard";
import bratImage from "../assets/brat.png";
import atavistaImage from "../assets/atavista.jpg";
import augustImage from "../assets/august.jpg";

const goodAlbumsList: Album[] = [
  {
    id: 0,
    artist: "Charli XCX",
    name: "BRAT",
    image: bratImage,
    link: "https://music.youtube.com/playlist?list=OLAK5uy_kmzoSOa_tCizE-r4sweNz91d9qBv1UCVY&si=r6f-8iH0pPuwWEcp",
    list: 1,
  },
  {
    id: 1,
    artist: "Childish Gambino",
    name: "Atavista",
    image: atavistaImage,
    link: "https://music.youtube.com/playlist?list=OLAK5uy_kNUaUBUfl1c8JdDeUYbpbfQ4H9RzpH2Iw",
    list: 1,
  },
  {
    id: 2,
    artist: "AUGUST 08",
    name: "Pretend It's Okay",
    image: augustImage,
    link: "https://music.youtube.com/playlist?list=OLAK5uy_mokTWUWCB-xRqrM-Vu8L4rLx6nP3ES-f4",
    list: 1,
  },
];

export default function GoodAlbumList() {
  return (
    <>
      <div className="border-end bg-light p-3 d-flex flex-column ">
        {goodAlbumsList.map((a) => (
          <AlbumCard key={a.id} album={a} />
        ))}
      </div>
    </>
  );
}
