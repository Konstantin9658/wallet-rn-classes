import React from "react";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { HomeScreen } from "screens/HomeScreen/HomeScreen";
import Home from "./icons/home.svg";
import Promocode from "./icons/promocode.svg";
import QR from "./icons/qr.svg";
import History from "./icons/history.svg";
import Header from "components/Header/Header";
import { TabBar } from "components/TabBar/TabBar";
import { PromocodeScreen } from "screens/PromocodeScreen/PromocodeScreen";
import { RequestMercoinsScreen } from "screens/RequestMercoinsScreen/RequestMercoinsScreen";
import { HistoryScreen } from "screens/HistoryScreen/HistoryScreen";
import { TabParamList } from "./TabNavigator.types";

const Tab = createBottomTabNavigator<TabParamList>();

const TAB_NAVIGATOR_OPTIONS: BottomTabNavigationOptions = {
  headerShown: false,
};

export default function TabNavigator() {
  return (
    <>
      <Header />
      <Tab.Navigator tabBar={TabBar} screenOptions={TAB_NAVIGATOR_OPTIONS}>
        <Tab.Screen
          name="Send mercoins"
          component={HomeScreen}
          options={{
            tabBarIcon: Home,
          }}
        />
        <Tab.Screen
          name="Promo codes"
          component={PromocodeScreen}
          options={{
            tabBarIcon: Promocode,
          }}
        />
        <Tab.Screen
          name="Request mercoins"
          component={RequestMercoinsScreen}
          options={{
            tabBarIcon: QR,
          }}
        />
        <Tab.Screen
          name="Transfer history"
          component={HistoryScreen}
          options={{
            tabBarIcon: History,
          }}
        />
      </Tab.Navigator>
    </>
  );
}
