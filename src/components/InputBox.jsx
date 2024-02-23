const InputBox = ({ icon, type }) => {
  return (
    <div className="input-container">
      <div className="input-icon">{icon}</div>
      <div className="input-box-container">
        <input type="text" placeholder={type} />
      </div>
    </div>
  );
};

export default InputBox;
