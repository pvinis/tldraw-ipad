import { View } from "react-native"
import { WebView } from "react-native-webview"
import { cssInterop } from "nativewind"

cssInterop(WebView, { className: "style" })

export default function Index() {
  return (
    <View className="pt-safe flex-1 bg-black">
      <WebView
        // className="my-2 flex-1 bg-red-300"
        className="my-2 bg-red-300 py-2"
        // scrollEnabled={false}
        // nestedScrollEnabled={false}
        // overScrollMode="never"
        source={{ uri: "https://tldraw.com" }}
      />
    </View>
  )
}
