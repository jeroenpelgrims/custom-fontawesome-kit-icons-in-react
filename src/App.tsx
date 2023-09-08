import { faStar } from "@fortawesome/pro-regular-svg-icons";
import FontAwesomeKitIcon, {
  CustomIconDefinition,
} from "./components/FontAwesomeKitIcon";

function App() {
  const faMyIcon1 = {
    prefix: "fa-kit",
    iconName: "my-icon-1",
  } as CustomIconDefinition;

  return (
    <div style={{ display: "flex", flexDirection: "column", fontSize: "2rem" }}>
      <div>
        Pro icon: <FontAwesomeKitIcon icon={faStar} />
      </div>
      <div>
        Custom icon: <FontAwesomeKitIcon icon={faMyIcon1} />
        <div style={{ fontSize: "1rem" }}>
          Custom icon attribution:{" "}
          <a href="https://www.svgrepo.com/svg/530571/conversation">SVG Repo</a>
        </div>
      </div>
    </div>
  );
}

export default App;
