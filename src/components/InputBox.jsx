const InputBox = ({ icon, type, val, setVal }) => {
  return (
    <div className="input-container">
      <div className="input-icon">{icon}</div>
      <div className="input-box-container">
        <input
          type={type === "Password" ? "password" : "text"}
          placeholder={type}
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
      </div>
    </div>
  );
};

export default InputBox;
