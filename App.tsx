// import React from 'react';
// import {
//   ImageProps,
//   ImageStyle,
//   StyleSheet,
// } from 'react-native';
// import {
//   ApplicationProvider,
//   Button,
//   Icon,
//   IconRegistry,
//   Layout,
//   Text,
// } from '@ui-kitten/components';
// import { EvaIconsPack } from '@ui-kitten/eva-icons';
// import {
//   mapping,
//   light as theme,
// } from '@eva-design/eva';
// import Video from 'react-native-video';
// /**
//  * Use any valid `name` property from eva icons (e.g `github`, or `heart-outline`)
//  * https://akveo.github.io/eva-icons
//  */
// const HeartIcon = (style: ImageStyle): React.ReactElement<ImageProps> => (
//   <Icon {...style} name='heart'/>
// );
// const uri: string = ""

// const App = (): React.ReactFragment => (
//   <>
//     <IconRegistry icons={EvaIconsPack}/>
//     <ApplicationProvider mapping={mapping} theme={theme}>
//       <Layout style={styles.container}>
//         <Video source={{uri: uri}}/>
//         <Text style={styles.text} category='h1'>
//           Welcome to UI Kitten 😻
//         </Text>
//         <Text style={styles.text} category='s1'>
//           Start with editing App.js to configure your App
//         </Text>
//         <Text style={styles.text} appearance='hint'>
//           For example, try changing theme to Dark by simply changing an import
//         </Text>
//         <Button style={styles.likeButton} icon={HeartIcon}>
//           LIKE
//         </Button>
//       </Layout>
//     </ApplicationProvider>
//   </>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     textAlign: 'center',
//   },
//   likeButton: {
//     marginVertical: 16,
//   },
// });
import App from './src/index';

export default App;