import List from './crud/ListDisplay.vue'
import StoreList from './crud/StoreList.vue'
import AddorEdit from './crud/AddorEdit.vue'
import ListStart from './crud/ListStart.vue'
import Login from './Login.vue'

export const routes = [
  {path: '', component: Login},
  {path: '/list', component: ListStart, children: [
    {path: '', component: List},
    {path: ':store', component: StoreList, props: true}
  ] },
  {path: '/item', component: AddorEdit },
  {path: '/item/:id', component: AddorEdit, props: true }
]

