// CustomDrawerContent.tsx
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import BottomCarrot from 'src/assets/images/bottom-carrot.svg';
import RightCarrot from 'src/assets/images/right-carrot.svg';
import { drawerItems } from '../supabase/HFHStaticData';
import styles from './styles';

export default function HopeHealingNavigator(
  props: DrawerContentComponentProps,
) {
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({});

  const toggleSection = (title: string) => {
    setExpandedSections(prev => ({ ...prev, [title]: !prev[title] }));
  };

  const handleNavigate = (id: string) => {
    props.navigation.navigate('DynamicHealingPage', { id });
  };

  return (
    <DrawerContentScrollView {...props} style={{ backgroundColor: '#F7F9FC' }}>
      {drawerItems.map(item => {
        const isExpanded = expandedSections[item.title];

        return (
          <View key={item.title}>
            <TouchableOpacity
              style={
                isExpanded
                  ? [styles.navLabelContainer, { backgroundColor: '#E6EAEF' }]
                  : styles.navLabelContainer
              }
              onPress={() => {
                // If you want to load the parent's mainPageId on tap
                handleNavigate(item.mainPageId);
                // Also toggle the expand/collapse
                toggleSection(item.title);
              }}
            >
              {isExpanded ? <BottomCarrot /> : <RightCarrot />}
              <Text
                style={
                  isExpanded
                    ? styles.selectedDrawerLabelText
                    : styles.drawerLabelText
                }
              >
                {item.title}
              </Text>
            </TouchableOpacity>

            {isExpanded &&
              item.subItems?.map(sub => (
                <TouchableOpacity
                  key={sub.pageId}
                  style={styles.subsectionLabelText}
                  onPress={() => handleNavigate(sub.pageId)}
                >
                  <Text style={styles.subsectionLabelText}>{sub.title}</Text>
                </TouchableOpacity>
              ))}
          </View>
        );
      })}
    </DrawerContentScrollView>
  );
}
