import { Album } from "../types";
import AlbumInput from "./AlbumInput";
import vSnaresImage from "../assets/vsnares.jpg";
import { useState } from "react";
import AlbumList from "./AlbumList";
// This code is set up to be the far right column that is a list for my favorite albums of all time. It calls the AlbumInput component and the GoatAlbumsList component.

const GOAT_TEST_ALBUMS: Album[] = [
  //I've typed the variable goatAlbumsList as being an array containing the Album type.
  {
    id: 0,
    artist: "Venetian Snares",
    name: "Rossz Csillag Alatt Született",
    image: vSnaresImage,
    link: "https://venetiansnares.bandcamp.com/album/rossz-csillag-alatt-sz-letett",
    list: 2,
  },
];

export default function GoatAlbums() {
  const [goatAlbumList, setGoatAlbumList] = useState(GOAT_TEST_ALBUMS);

  const addNewAlbum = () => {
    const newAlbum = {
      id: goatAlbumList.length
        ? goatAlbumList[goatAlbumList.length - 1].id + 1
        : 0,
      artist: "Venetian Snares",
      name: "Rossz Csillag Alatt Született",
      image: vSnaresImage,
      link: "https://venetiansnares.bandcamp.com/album/rossz-csillag-alatt-sz-letett",
      list: 2,
    };

    setGoatAlbumList([...goatAlbumList, newAlbum]);
  };

  const deleteAlbum = (idToDelete: number) => {
    setGoatAlbumList(goatAlbumList.filter((album) => album.id !== idToDelete));
  };

  return (
    <>
      <h4>Greatest of All Time</h4>
      <AlbumInput addNewAlbum={addNewAlbum} />
      <AlbumList albumList={goatAlbumList} deleteAlbum={deleteAlbum} />
    </>
  );
}
