// function Welcome(name) {
//   // const name = "Likhith";
//   console.log(nME);
//   return <div>Welcome component {props.name}</div>;
// }
function Msg({ name, pic }) {
  return (
    <div>
      <img className="profile-pic" src={pic} alt={name} />
      <h1>Hi, {name}</h1>
    </div>
  );
}
