import { Redirect } from "expo-router";
import React from "react";

const App = () => {
  return <Redirect href="/home"></Redirect>;

  // return (
  //   <SafeAreaView>
  //     <View className="mt-6 mx-2.5">
  //       <Text className="text-3xl font-bold text-blue-500">hola mundo!</Text>

  //       <Text className="text-3xl font-work-black text-primary">
  //         font work black
  //       </Text>
  //       <Text className="text-3xl font-work-medium text-secondary-200">
  //         font work medium
  //       </Text>
  //       <Text className="text-3xl font-work-light text-tertiary">
  //         form work light
  //       </Text>
  //       <Text className="text-3xl ">normal sans serif</Text>

  //       <Link href="/products"></Link>
  //     </View>
  //   </SafeAreaView>
  // );
};

export default App;
