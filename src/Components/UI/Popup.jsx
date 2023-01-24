import "./Popup.css";

function Popup({ active, setActive, children }) {
  function close() {
    setActive(false);
    document.body.style.overflow = "visible";
  }

  return (
    <div>
      <div
        className={active ? "popup_off active" : "popup_off"}
        onClick={close}
      >
        <div className="popup_container" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Popup;
