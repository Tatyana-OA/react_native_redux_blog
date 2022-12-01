import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./assets/src/screens/IndexScreen";
import { Provider } from "./assets/src/context/BlogContext";
import ShowScreen from "./assets/src/screens/ShowScreen";
import CreateScreen from "./assets/src/screens/CreateScreen";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blog Posts",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
