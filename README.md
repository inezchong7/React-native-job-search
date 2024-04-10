# React-native-job-search

<h3>Setup/ Installation</h3>

*App was created using Expo. 
1. Install Android Studio https://developer.android.com/studio
2. npm install
3. Open Android Studio -> More actions -> Virtual Device Manager -> run Pixel phone emulator
4. npx expo start
5. Type 'a' to run app on the emulator 


<h3>Key Differences</h3>
- Expo Router: handles navigation (uses file-based routing system)
- Text component (instead of p, h1, h2, h3)
- View component (similar to div, but with added functionality -> creates layout structures for other components; props for appearance and behaviour; uses Flexbox layout by default)
- TouchableOpacity (buttons, links, other interactive elements that fades in opacity when pressed): cousin of React Button component with more room for customisation and flexibility
- ActivityIndicator (shows spinner or loading indicator in app): fully customisable, eg. size, color
- Flatlsit (renders long item list to be scrolled): like React map function but with optimized scroll performance, and item separation (comparison: Flatlist for larger lists with smooth scrolling; Map function for smaller lists)
- ScrollView (holds multiple components and views with scroller): like 'overflow: scroll' in html, enhances user experience
- SafeAreaView (safe zone to render content without being covered by phone's hardware features like home indicator or status bar) 
