import { useState } from "react";
import AlbumInput from "./AlbumInput";
import bratImage from "../assets/brat.png";
import type { Album } from "../types";
import AlbumList from "./AlbumList";

const GOOD_ALBUM_TEST: Album[] = [
  {
    id: 0,
    artist: "Charli XCX",
    name: "BRAT",
    image: bratImage,
    link: "https://music.youtube.com/playlist?list=OLAK5uy_kmzoSOa_tCizE-r4sweNz91d9qBv1UCVY&si=r6f-8iH0pPuwWEcp",
    list: 1,
  },
];

export default function GoodAlbums() {
  const [goodAlbumList, setGoodAlbumList] = useState(GOOD_ALBUM_TEST);

  const addGoodAlbum = () => {
    const newAlbum = {
      id: goodAlbumList.length
        ? goodAlbumList[goodAlbumList.length - 1].id + 1
        : 0,
      artist: "Charli XCX",
      name: "BRAT",
      image: bratImage,
      link: "https://music.youtube.com/playlist?list=OLAK5uy_kmzoSOa_tCizE-r4sweNz91d9qBv1UCVY&si=r6f-8iH0pPuwWEcp",
      list: 1,
    };

    setGoodAlbumList([...goodAlbumList, newAlbum]);
  };

  const deleteAlbum = (idToDelete: number) => {
    setGoodAlbumList(goodAlbumList.filter((album) => album.id !== idToDelete));
  };

  return (
    <>
      <h4>Albums I Loved This Year</h4>
      <AlbumInput addNewAlbum={addGoodAlbum} />
      <AlbumList albumList={goodAlbumList} deleteAlbum={deleteAlbum} />
    </>
  );
}
