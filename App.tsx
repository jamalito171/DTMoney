
import { StatusBar, View } from 'react-native';
import { Home } from './src/Home';



export default function App() {

  
  return (
    <View>
      
      <StatusBar barStyle='dark-content' backgroundColor="transparent" translucent/>
    </View>
    <View> <Home /> </View>
    

    
    
  );
}