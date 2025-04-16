import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import BottomCarrot from 'src/assets/images/bottom-carrot.svg';
import RightCarrot from 'src/assets/images/right-carrot.svg';
import getDataOnce from '@/supabase/getDataOnce';
import { DrawerItem } from '../types/types';
import styles from './styles';

export default function HopeHealingNavigator(
  props: DrawerContentComponentProps,
) {
  const [drawerItems, setDrawerItems] = useState<DrawerItem[] | null>(null);

  useEffect(() => {
    (async () => {
      const data = await getDataOnce();
      setDrawerItems(data);
    })();
  }, []);

  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({});
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  const toggleSection = (title: string) => {
    setExpandedSections(prev => ({ ...prev, [title]: !prev[title] }));
  };

  const handleNavigate = (id: string) => {
    setSelectedItemId(id);
    props.navigation.navigate('DynamicHealingPage', { id });
  };

  if (!drawerItems) {
    return null;
  }

  return (
    <DrawerContentScrollView {...props} style={{ backgroundColor: '#F7F9FC' }}>
      {drawerItems.map(item => {
        const isExpanded = expandedSections[item.title];

        const isParentSelected = item.mainPageId === selectedItemId;

        return (
          <View key={item.title}>
            <TouchableOpacity
              style={
                isParentSelected
                  ? [styles.navLabelContainer, { backgroundColor: '#E6EAEF' }]
                  : styles.navLabelContainer
              }
              onPress={() => {
                handleNavigate(item.mainPageId);
                toggleSection(item.title);
              }}
            >
              {isExpanded ? <BottomCarrot /> : <RightCarrot />}
              <Text
                style={
                  isParentSelected
                    ? styles.selectedDrawerLabelText
                    : styles.drawerLabelText
                }
              >
                {item.title}
              </Text>
            </TouchableOpacity>

            {isExpanded &&
              item.subItems?.map(sub => {
                const isSubSelected = sub.pageId === selectedItemId;

                return (
                  <TouchableOpacity
                    key={sub.pageId}
                    style={
                      isSubSelected
                        ? [
                            styles.subitemContainer,
                            { backgroundColor: '#E6EAEF' },
                          ]
                        : styles.subitemContainer
                    }
                    onPress={() => handleNavigate(sub.pageId)}
                  >
                    <Text
                      style={
                        isSubSelected
                          ? styles.selectedLabelText
                          : styles.labelText
                      }
                    >
                      {sub.title}
                    </Text>
                  </TouchableOpacity>
                );
              })}
          </View>
        );
      })}
    </DrawerContentScrollView>
  );
}
