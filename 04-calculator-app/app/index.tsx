import { View } from "react-native";

import CalculatorButton from "@/components/CalculatorButton";
import CustomText from "@/components/CustomText";
import { Colors } from "@/constants/Colors";
import { globalStyle } from "@/styles/global-style";

const CalculatorApp = () => {
  return (
    <View style={globalStyle.calculatorContainer}>
      {/* results */}
      <View style={globalStyle.operationsView}>
        <CustomText variant="h1">50 x 50</CustomText>
        <CustomText variant="h2">2500</CustomText>
      </View>

      {/* buttons */}
      <View style={globalStyle.row}>
        <CalculatorButton
          label="C"
          blackText
          color={Colors.ligthGrey}
          onPressButton={() => console.log("C")}
        ></CalculatorButton>
        <CalculatorButton
          label="+/-"
          blackText
          color={Colors.ligthGrey}
          onPressButton={() => console.log("+/-")}
        ></CalculatorButton>
        <CalculatorButton
          label="Del"
          blackText
          color={Colors.ligthGrey}
          onPressButton={() => console.log("Del")}
        ></CalculatorButton>
        <CalculatorButton
          label="/"
          color={Colors.orange}
          onPressButton={() => console.log("/")}
        ></CalculatorButton>
      </View>

      <View style={globalStyle.row}>
        <CalculatorButton
          label="7"
          blackText
          color={Colors.ligthGrey}
          onPressButton={() => console.log("7")}
        ></CalculatorButton>
        <CalculatorButton
          label="8"
          blackText
          color={Colors.ligthGrey}
          onPressButton={() => console.log("8")}
        ></CalculatorButton>
        <CalculatorButton
          label="9"
          blackText
          color={Colors.ligthGrey}
          onPressButton={() => console.log("9")}
        ></CalculatorButton>
        <CalculatorButton
          label="*"
          color={Colors.orange}
          onPressButton={() => console.log("*")}
        ></CalculatorButton>
      </View>

      <View style={globalStyle.row}>
        <CalculatorButton
          label="4"
          blackText
          color={Colors.ligthGrey}
          onPressButton={() => console.log("4")}
        ></CalculatorButton>
        <CalculatorButton
          label="5"
          blackText
          color={Colors.ligthGrey}
          onPressButton={() => console.log("5")}
        ></CalculatorButton>
        <CalculatorButton
          label="6"
          blackText
          color={Colors.ligthGrey}
          onPressButton={() => console.log("6")}
        ></CalculatorButton>
        <CalculatorButton
          label="-"
          color={Colors.orange}
          onPressButton={() => console.log("-")}
        ></CalculatorButton>
      </View>

      <View style={globalStyle.row}>
        <CalculatorButton
          label="1"
          blackText
          color={Colors.ligthGrey}
          onPressButton={() => console.log("1")}
        ></CalculatorButton>
        <CalculatorButton
          label="2"
          blackText
          color={Colors.ligthGrey}
          onPressButton={() => console.log("2")}
        ></CalculatorButton>
        <CalculatorButton
          label="3"
          blackText
          color={Colors.ligthGrey}
          onPressButton={() => console.log("3")}
        ></CalculatorButton>
        <CalculatorButton
          label="+"
          color={Colors.orange}
          onPressButton={() => console.log("+")}
        ></CalculatorButton>
      </View>

      <View style={globalStyle.row}>
        <CalculatorButton
          label="0"
          blackText
          doubleSize
          color={Colors.ligthGrey}
          onPressButton={() => console.log("0")}
        ></CalculatorButton>
        <CalculatorButton
          label="."
          blackText
          color={Colors.ligthGrey}
          onPressButton={() => console.log(".")}
        ></CalculatorButton>

        <CalculatorButton
          label="="
          color={Colors.orange}
          onPressButton={() => console.log("=")}
        ></CalculatorButton>
      </View>
    </View>
  );
};

export default CalculatorApp;
