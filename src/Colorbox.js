export function Colorbox({ color }) {
  const styles = {
    backgroundColor: color,
    height: "35px",
    width: "300px",
    marginTop: "20px",
  };
  return (
    <div
      style={styles} className='box'>
    </div>
  );
}
