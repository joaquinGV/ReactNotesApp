import HeaderActionButton from "./HeaderActionButton";
import HeaderTitle from "./HeaderTitle";
import HeaderToggleActive from "./HeaderToggleActive";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <HeaderTitle />
      <HeaderToggleActive />
      <HeaderActionButton />
    </div>
  );
};

export default Header;
