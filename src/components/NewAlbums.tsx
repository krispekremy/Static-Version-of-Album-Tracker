import type { Album } from "../types";
import AlbumInput from "./AlbumInput";
import AlbumList from "./AlbumList";
import heavenImage from "../assets/heaven.jpg";
import { useState } from "react";

//this is my test data to start the state with so it doesn't start empty
const NEW_ALBUM_TEST_DATA: Album[] = [
  {
    id: 0,
    artist: "HEAVEN THROUGH VIOLENCE",
    name: "Heaven Through Violence",
    image: heavenImage,
    link: "https://heaventhroughviolence.bandcamp.com/album/s-t",
    list: 0,
  },
];
//now we're exporting the main function of newalbums.
export default function NewAlbums() {
  const [newAlbumList, setNewAlbumList] = useState(NEW_ALBUM_TEST_DATA); // setting the state!

  const addNewAlbum = () => {
    //this function lets us add a new album to the newalbum list!  it uses the same data every time for now!
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

    setNewAlbumList([...newAlbumList, newAlbum]); //now we're calling our set state function to be set to a copy of the current state plus the new album!
  };

  const deleteAlbum = (idToDelete: number) => {
    setNewAlbumList(newAlbumList.filter((album) => album.id !== idToDelete));
  }; // this function lets us delete an album!

  return (
    <>
      <h4>Albums I Wanna Listen To</h4>
      <AlbumInput addNewAlbum={addNewAlbum} />{" "}
      {/*Here I'm passing the addNewAlbum function down to the album input component inside the newalbums component through a prop called addNewAlbum! */}
      <AlbumList albumList={newAlbumList} deleteAlbum={deleteAlbum} />{" "}
      {/* Here I'm passing the newAlbumList which is our state through the to the albumlist component through the albumlist prop that I've made, as well as the deletealbum function through the deletalbum prop! That delete album prop will then get passed down through to the album card component where it will get attached to a button in the albumcard! */}
    </>
  );
}
