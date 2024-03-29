import "./ThemeSelector.css";
import { useTheme } from "./hooks/useTheme";
import modeicon from "../assets/modeicon.svg";
function ThemeSelector() {
  const themeColors = ["#58249c", "#249c6b", "#b70233"];
  const { changeColor, changeMode, mode } = useTheme();
  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img
          onClick={toggleMode}
          src={modeicon}
          alt="brightness tag"
          style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)" }}
        />
      </div>
      <div className="theme-buttons">
        {themeColors.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  );
}

export default ThemeSelector;
