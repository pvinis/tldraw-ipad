import { View } from "react-native";
import { WebView } from "react-native-webview";

export default function Index() {
  return (
    <View className="flex-1 bg-red-500 py-safe">
      <WebView className="flex-1" source={{ uri: "https://google.com" }} />
    </View>
  );
}
