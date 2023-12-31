import "./assets/main.css"

import { createApp } from "vue"
import App from "./App.vue"
import appHeading from "./components/ui/appHeading.vue"

const app = createApp(App)
app.component("app-heading", appHeading)
app.mount("#app")
