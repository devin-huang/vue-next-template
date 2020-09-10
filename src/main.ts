import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

function printLabel(labelledObj: { label: string }) {
  console.log(labelledObj.label)
}
const myObj = {
  size: 10,
  label: 'devin huang',
}
printLabel(myObj)
createApp(App).mount('#app')
