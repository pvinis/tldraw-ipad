import { View } from "react-native"
import { WebView } from "react-native-webview"

export default function Index() {
  return (
    <View className="pt-safe flex-1 bg-black">
      <WebView
        className="flex-1"
        scrollEnabled={false}
        source={{ uri: "https://tldraw.com" }}
      />
    </View>
  )
}
