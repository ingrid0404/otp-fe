const OTPInput = ({ id, previousId, nextId, value, onValueChange }) => {
  const handleKeyUp = (e) => {
    if (e.keyCode === 8 || e.keyCode === 37) {
      const prev = document.getElementById(previousId);
      if (prev) {
        prev.select();
      }
    } else if (
      (e.keyCode >= 48 && e.keyCode <= 57) ||
      (e.keyCode >= 65 && e.keyCode <= 90) ||
      (e.keyCode >= 96 && e.keyCode <= 105) ||
      e.keyCode === 39
    ) {
      const next = document.getElementById(nextId);
      if (next) {
        next.select();
      }
    }
  };
  return (
    <input
      id={id}
      name={id}
      type="text"
      value={value}
      maxLength="1"
      onChange={(e) => onValueChange(id, e.target.value)}
      onKeyUp={handleKeyUp}
    />
  );
};
export default OTPInput;
