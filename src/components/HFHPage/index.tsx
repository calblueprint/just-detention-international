import React from 'react';
import { View } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import HealingPage from 'src/screens/HealingResources/HFHGuide';

type RootDrawerParamList = {
  DynamicHealingPage: { id: string };
};

function DynamicHealingPage({
  route,
  navigation,
}: DrawerScreenProps<RootDrawerParamList, 'DynamicHealingPage'>) {
  console.log(route);
  const { id } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <HealingPage id={id} navigation={navigation} />
    </View>
  );
}

export default DynamicHealingPage;
