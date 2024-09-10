import type { Album } from "../types";
import AlbumInput from "./AlbumInput";
import AlbumList from "./AlbumList";
import heavenImage from "../assets/heaven.jpg";
import { useState } from "react";

const newAlbums: Album[] = [
  {
    id: 0,
    artist: "HEAVEN THROUGH VIOLENCE",
    name: "Heaven Through Violence",
    image: heavenImage,
    link: "https://heaventhroughviolence.bandcamp.com/album/s-t",
    list: 0,
  },
];

export default function NewAlbums() {
  const [newAlbumList, setNewAlbumList] = useState(newAlbums);

  const addNewAlbum = () => {
    const newAlbum = {
      id: newAlbumList.length
        ? newAlbumList[newAlbumList.length - 1].id + 1
        : 0,
      artist: "HEAVEN THROUGH VIOLENCE",
      name: "Heaven Through Violence",
      image: heavenImage,
      link: "https://heaventhroughviolence.bandcamp.com/album/s-t",
      list: 0,
    };

    setNewAlbumList([...newAlbumList, newAlbum]);
  };

  const deleteAlbum = (idToDelete: number) => {
    setNewAlbumList(newAlbumList.filter((album) => album.id !== idToDelete));
  };

  return (
    <>
      <h4>Albums I Wanna Listen To</h4>
      <AlbumInput addNewAlbum={addNewAlbum} />
      <AlbumList albumList={newAlbumList} deleteAlbum={deleteAlbum} />
    </>
  );
}
