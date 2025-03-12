// export default function HopeHealingGuide() {
//   const [isWelcomeOpen, setIsWelcomeOpen] = useState(true);
//   const [isChapterOneOpen, setIsChapterOneOpen] = useState(false);

//   return (
//     <Drawer.Navigator
//       initialRouteName="Welcome"
//       screenOptions={{
//         drawerType: 'slide',
//         drawerPosition: 'left',
//         overlayColor: 'transparent',
//         drawerStyle: {
//           width: '23%',
//           backgroundColor: '#F7F9FC',
//         },
//       }}
//     >
//       <Drawer.Screen
//         name="Welcome"
//         options={{
//           headerShown: false,
//           drawerLabel: () => (
//             <TouchableOpacity
//               style={styles.navLabelContainer}
//               onPress={() => setIsWelcomeOpen(!isWelcomeOpen)}
//             >
//               {isWelcomeOpen ? <BottomCarrot /> : <RightCarrot />}
//               <Text
//                 style={
//                   isWelcomeOpen
//                     ? styles.selectedDrawerLabelText
//                     : styles.drawerLabelText
//                 }
//               >
//                 Welcome
//               </Text>
//             </TouchableOpacity>
//           ),
//         }}
//         component={Welcome}
//       />
//       {isWelcomeOpen && (
//         <>
//           <Drawer.Screen
//             name="WelcomeSectionOne"
//             options={{
//               headerShown: false,

//               drawerLabel: () => (
//                 <Text style={styles.subsectionLabelText}>
//                   A Few Words on Language
//                 </Text>
//               ),
//             }}
//             component={WelcomeSectionOne}
//           />
//           <Drawer.Screen
//             name="WelcomeSectionTwo"
//             component={WelcomeSectionTwo}
//             options={{
//               headerShown: false,
//               drawerLabel: () => (
//                 <Text style={styles.subsectionLabelText}>
//                   How to Use This Booklet
//                 </Text>
//               ),
//             }}
//           />
//         </>
//       )}
//       <Drawer.Screen
//         name="ChapterOne"
//         component={ChapterOne}
//         options={{
//           headerShown: false,
//           drawerLabel: () => (
//             <TouchableOpacity
//               style={styles.navLabelContainer}
//               onPress={() => setIsChapterOneOpen(!isChapterOneOpen)}
//             >
//               {isChapterOneOpen ? <BottomCarrot /> : <RightCarrot />}

//               <Text
//                 style={
//                   isChapterOneOpen
//                     ? styles.selectedDrawerLabelText
//                     : styles.drawerLabelText
//                 }
//               >
//                 Chapter 1
//               </Text>
//             </TouchableOpacity>
//           ),
//         }}
//       />
//       {isChapterOneOpen && (
//         <>
//           <Drawer.Screen
//             name="ChapterOneSectionOne"
//             options={{
//               headerShown: false,

//               drawerLabel: () => (
//                 <Text style={styles.subsectionLabelText}>
//                   Making Sense of What Happened
//                 </Text>
//               ),
//             }}
//             component={ChapterOneSectionOne}
//           />
//         </>
//       )}
//     </Drawer.Navigator>
//   );
// }

// HopeHealingGuide.tsx
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DynamicHealingPage from '@/components/HFHPage';
import HopeHealingNavigator from '@/navigation/HopeHealingNavigator';

const Drawer = createDrawerNavigator();

export default function HopeHealingGuide() {
  return (
    <Drawer.Navigator
      //temp fix
      drawerContent={(props: any) => <HopeHealingNavigator {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'slide',
        overlayColor: 'transparent',
        drawerStyle: {
          width: '25%',
          backgroundColor: '#F7F9FC',
        },
      }}
    >
      <Drawer.Screen
        name="DynamicHealingPage"
        component={DynamicHealingPage}
        initialParams={'7012e24a-894e-4972-9dcc-612666bff21e'}
      />
    </Drawer.Navigator>
  );
}
