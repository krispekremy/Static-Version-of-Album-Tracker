import Button from "./Button"; //importing button for use in the card

export default function AlbumCard({
  album,
}: {
  album: { artist: string; name: string; image: string; link: string }; //setting the property types
}) {
  function goToPage(linkToGoTo: string) {
    console.log("Navigating to your webpage...", linkToGoTo);

    //Window.open navigates to another webpage.
    //https://developer.mozilla.org/en-US/docs/Web/API/Window/open
    window.open(linkToGoTo);
  }
  //now we return some jsx that is the album card itself
  return (
    <div>
      <span>
        {album.artist} - {album.name}
      </span>
      <div>
        <img
          onClick={() => goToPage(album.link)} //on click go to the link in album.link
          src={album.image} //the image source is in album.image
          width={100} // nice small little album art
          className="pb-3" // a little bootstrap padding to make it look nicer
        />
        <Button text={"Update"} />
        <Button text={"Delete"} />
      </div>
    </div>
  );
}
