import Button from "./Button";
// this is the code I wrote to put at the top of each of the sections so that someone might be able to add an album to a list! I don't have any state code yet since this is just a static version of the app!
export default function AlbumInput() {
  return (
    <div className="border-end bg-info">
      <input className="m-2" placeholder="Artist Name"></input>
      <input className="m-2" placeholder="Album Name"></input>
      <input className="m-2" placeholder="Link"></input>
      <br />
      <Button text={"Add"} />
    </div>
  );
}
