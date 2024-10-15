import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "screens/HomeScreen/HomeScreen";
import Home from "./icons/home.svg";
import Promocode from "./icons/promocode.svg";
import QR from "./icons/qr.svg";
import History from "./icons/history.svg";
import { PromocodeScreen } from "screens/PromocodeScreen/PromocodeScreen";
import { RequestMercoinsScreen } from "screens/RequestMercoinsScreen/RequestMercoinsScreen";
import { HistoryScreen } from "screens/HistoryScreen/HistoryScreen";
import { TabParamList } from "./TabNavigator.types";
import { TAB_NAVIGATOR_OPTIONS } from "./consts";

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={TAB_NAVIGATOR_OPTIONS}>
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
  );
}
