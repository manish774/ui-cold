import Header from "./Shell/Header";
import Sidebar from "./Shell/Sidebar";
import Panel from "./components/Panel/Panel";
import { useTheme } from "./context/Theme/ThemeContext";
import Badge from "./components/Badge/Badge";
import CircleBadge from "./components/Badge/CircleBadge";
import TableContent from "./components/ContentComponents/TableContent";
import TreeTableContent from "./components/ContentComponents/TreeTableContent";
import Files from "./components/Files/Files";
import { useDataStateContext } from "./context/Data/DataStateContext";
import { useEffect } from "react";
const App = () => {
  const themCtx = useTheme();
  const { state, dispatch } = useDataStateContext();
  console.log(state);

  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: "addNav",
        payload: {
          id: 22,
          name: "Manihs",
          isVisible: false,
          label: "test",
          content: (
            <>
              <Panel>
                <h1>test one</h1>
              </Panel>
            </>
          ),
        },
      });
    }, 4000);
  }, []);
  console.log(state?.navigationList);
  return (
    <>
      <Header
        linkRightPanel={[
          { name: "Manish", linkTo: "/", label: "Home" },
          { name: "Manish", linkTo: "/", label: "About" },
        ]}
        brandName={<>Brand</>}
      />
      <Sidebar items={state?.navigationList || []} />
    </>
  );
};

export default App;
