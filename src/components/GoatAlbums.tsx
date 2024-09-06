import AlbumInput from "./AlbumInput";
import GoatAlbumsList from "./GoatAlbumsList";
// This code is set up to be the far right column that is a list for my favorite albums of all time. It calls the AlbumInput component and the GoatAlbumsList component.
export default function GoatAlbums() {
  return (
    <>
      <h4>Greatest of All Time</h4>
      <AlbumInput />
      <GoatAlbumsList />
    </>
  );
}
