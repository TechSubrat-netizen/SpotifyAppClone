import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawyerHome from "./DrawyerHome";

const Drawer = createDrawerNavigator();

function DrawyerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="DrawerHome" component={DrawyerHome} />
    </Drawer.Navigator>
  );
}

export default DrawyerNavigation;
