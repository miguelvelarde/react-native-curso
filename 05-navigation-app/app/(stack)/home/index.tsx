import { Link, router } from "expo-router";
import React from "react";
import { View, ScrollView, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomTile from "@/components/shared/CustomTile";


export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-black">
       <ScrollView className="px-4">

        {/* Search */}
        <View className="bg-zinc-800 rounded-xl px-4 py-3 mb-4">
          <TextInput
            placeholder="Search"
            placeholderTextColor="#9ca3af"
            className="text-white"
          />
        </View>

        <View className="flex-row flex-wrap justify-between">

          <CustomTile
            title="Nueva venta"
            color="primary"
            onPress={() => {router.push('/products')}}
          />

          <CustomTile
            title="Clientes"
            subtitle="23 registrados"
            color="secondary"
          />

          <CustomTile
            title="Agregar stock"
            color="secondary-100"
          />

          <CustomTile
            title="Mi stock"
            color="secondary-200"
          />

          <CustomTile
            title="Reportes"
            color="tertiary"
          />

        </View>

      </ScrollView>
    </SafeAreaView>
  );
}





// import CustomBoton from "@/components/shared/CustomBoton";
// import { Link, router } from "expo-router";
// import React from "react";
// import { View } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// const HomeScreen = () => {
//   return (
//     <SafeAreaView>
//     <View className="px-10 mt-5">

//     <Link href="/products" asChild>
//       <CustomBoton className="mb-2" color="tertiary">Mi Perfil</CustomBoton>
//     </Link>

//     <View className="flex-row gap-2">
//       <CustomBoton className="mb-2 flex-1" color="primary" onPress={() => router.push('/products')}>
//         Nueva Venta
//       </CustomBoton>
    
//       <CustomBoton className="mb-2 flex-1" color="secondary" onPress={() => router.push('/profile')}>
//         Mis Clientes
//       </CustomBoton>  
//     </View>

//     <View className="flex-row gap-2">
//       <CustomBoton className="mb-2 flex-1" color="primary" onPress={() => router.push('/products')}>
//         Catalogo Nice
//       </CustomBoton>
    
//       <CustomBoton className="mb-2 flex-1" color="secondary" onPress={() => router.push('/profile')}>
//         Mi Stock
//       </CustomBoton>
//     </View>

//     <View className="flex-row gap-2">
//       <CustomBoton className="mb-2 flex-1" color="primary" onPress={() => router.push('/products')}>
//         Reportes
//       </CustomBoton>
    
//       <CustomBoton className="mb-2 flex-1" color="secondary" onPress={() => router.push('/profile')}>
//         Nuevo
//       </CustomBoton>
//     </View>

    
    
//     <CustomBoton className="mb-2" variant="text-only" onPress={() => router.push('/settings')}>Ajustes</CustomBoton>

//       {/* <Text className="mb-5 font-work-black">HomeScreen</Text>

//       <Link className="mb-5" href="/products">
//         Productos
//       </Link>
//       <Link className="mb-5" href="/profile">
//         Profile
//       </Link>
//       <Link className="mb-5" href="/settings">
//         Ajustes
//       </Link> */}
//     </View>
//     </SafeAreaView>
//   );
// };

// export default HomeScreen;
