import rookWhite from "../assets/images/Rook.png";   // White Rook
import rookBlack from "../assets/images/Rook2.png";  // Black Rook
import BoardComponent from "./BoardComponents";
import "./BoardComponents.css";

const RookComponent = () => {
  const [whiteRookPosition, setWhiteRookPosition] = useState({ row: 7, col: 0 }); // a1
  const [blackRookPosition, setBlackRookPosition] = useState({ row: 0, col: 0 }); // a8
  const [selectedRook, setSelectedRook] = useState(null);
  const [currentTurn, setCurrentTurn] = useState("white");

  const handleClick = (row, col) => {
    const isWhiteRook =
      whiteRookPosition?.row === row && whiteRookPosition?.col === col;
    const isBlackRook =
      blackRookPosition?.row === row && blackRookPosition?.col === col;

if (!selectedRook) {
  if (isWhiteRook && currentTurn === "white") {
    setSelectedRook("white");
  } else if (isBlackRook && currentTurn === "black") {
    setSelectedRook("black");
  } else {
    alert(`It's ${currentTurn}'s turn!`);
  }
  return;
}

const currentPos =
  selectedRook === "white" ? whiteRookPosition : blackRookPosition;
const otherRookPos =
  selectedRook === "white" ? blackRookPosition : whiteRookPosition;

const isSamePosition = currentPos.row === row && currentPos.col === col;
const isLegalMove =
  !isSamePosition &&
  (currentPos.row === row || currentPos.col === col); // only straight lines

const isOccupiedByOwn =
  (selectedRook === "white" &&
    whiteRookPosition?.row === row &&
    whiteRookPosition?.col === col) ||
  (selectedRook === "black" &&
    blackRookPosition?.row === row &&
    blackRookPosition?.col === col);

if (!isLegalMove || isOccupiedByOwn) {
  alert("Illegal move! Rooks move in straight lines only.");
} else {
  if (selectedRook === "white") {
    setWhiteRookPosition({ row, col });
    if (otherRookPos?.row === row && otherRookPos?.col === col) {
      setBlackRookPosition(null); // capture
    }
  } else {
    setBlackRookPosition({ row, col });
    if (otherRookPos?.row === row && otherRookPos?.col === col) {
      setWhiteRookPosition(null); // capture
    }
  }

  setCurrentTurn((prev) => (prev === "white" ? "black" : "white"));
}

setSelectedRook(null);
  };

  const renderTile = (row, col) => {
    const isWhite =
      whiteRookPosition?.row === row && whiteRookPosition?.col === col;
    const isBlack =
      blackRookPosition?.row === row && blackRookPosition?.col === col;
    const isSelected =
      (selectedRook === "white" && isWhite) ||
      (selectedRook === "black" && isBlack);

return (
  <div className="tile-content">
    {isWhite && (
      <img
        src={rookWhite}
        alt="White Rook"
        className={`chess-icon ${isSelected ? "selected" : ""}`}
      />
    )}
    {isBlack && (
      <img
        src={rookBlack}
        alt="Black Rook"
        className={`chess-icon ${isSelected ? "selected" : ""}`}
      />
    )}
    <div
      className={isSelected ? "tile-overlay selected" : "tile-overlay"}
      onClick={() => handleClick(row, col)}
    />
  </div>
);
  };
};

export default RookComponent;