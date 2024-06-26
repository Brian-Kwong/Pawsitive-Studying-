import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "../../../Styles/comp_styles.jsx";
import { useNavigation } from "expo-router";
import { useEffect } from "react";

const tabBarIconColor = "blue";
const inactiveTabIconColor = "black";

export default function TabLayout() {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ showHeader: false });
    }, [navigation]);

    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                style={styles.TabsButton}
                options={{
                    title: "Home",
                    tabBarActiveTintColor: tabBarIconColor,
                    tabBarInactiveTintColor: inactiveTabIconColor,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="home" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="music"
                style={styles.TabsButton}
                options={{
                    title: "Music",
                    tabBarActiveTintColor: tabBarIconColor,
                    tabBarInactiveTintColor: inactiveTabIconColor,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="music" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="characters"
                style={styles.TabsButton}
                options={{
                    title: "Characters",
                    tabBarActiveTintColor: tabBarIconColor,
                    tabBarInactiveTintColor: inactiveTabIconColor,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5
                            name="user-friends"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="users"
                style={styles.TabsButton}
                options={{
                    title: "Users",
                    tabBarActiveTintColor: tabBarIconColor,
                    tabBarInactiveTintColor: inactiveTabIconColor,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="settings" size={size} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
