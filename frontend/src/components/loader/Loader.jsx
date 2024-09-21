import "./Loader.css";
const Loader = ({ size = 64, dotSize = 6, color = "#fff", speed = "1s", spread = "60deg" }) => {
  return (
    <div
      style={{
        "--size": `${size}px`,
        "--dot-size": `${dotSize}px`,
        "--dot-count": 6,
        "--color": color,
        "--speed": speed,
        "--spread": spread,
      }}
      className="dots"
    >
      {Array.from({ length: 6 }, (_, i) => (
        <div key={i} style={{ "--i": i }} className="dot"></div>
      ))}
    </div>
  );
};

export default Loader;
