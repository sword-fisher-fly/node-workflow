import { createRouter, createWebHistory } from 'vue-router';

import Props from '@/pages/01_props/Parent.vue'
import Event from '@/pages/02_custom_event/Parent.vue'
import Mitt from '@/pages/03_mitt/Parent.vue'
import VModel from '@/pages/04_v-model/Parent.vue'
import Attrs from '@/pages/05_$attrs/Parent.vue'
import RefsParent from '@/pages/06_$refs_$parents/Parent.vue'
import ProvideInject from '@/pages/07_provide_inject/Parent.vue'
import Slot from '@/pages/08_slot/Parent.vue'
import SlotScope from '@/pages/08_slot_scope/Parent.vue'

const routes = [
  {
    path: '/props',
    name: 'props',
    component: Props
  },
  {
    path: '/custom-event',
    name: 'customevent',
    component: Event
  },
  {
    path: '/mitt',
    name: 'mitt',
    component: Mitt
  },
  {
    path: '/v-model',
    name: 'vmodel',
    component: VModel
  },
  {
    path: '/attrs',
    name: 'attrs',
    component: Attrs
  },
  {
    path: '/refs-parent',
    name: 'refsparent',
    component: RefsParent
  },
  {
    path: "/provide-inject",
    name: "provideinject",
    component: ProvideInject
  },
//   {
//     path: '/pinia',
//     name: 'Pinia',
//     // component: Pinia
//   },
  {
    path: '/slot',
    name: 'slot',
    component: Slot
  },
  {
    path: '/slot-scope',
    name: 'slotscope',
    component: SlotScope
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;