<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="table-body-item group">
    <input v-model="item.name" autocomplete="off" type="text" class="input w-[200px] mr-2" />
    <input v-model="item.qty" autocomplete="off" type="text" class="input w-[50px] mr-2" />
    <input v-model="item.unit_price" autocomplete="off" type="text" class="input w-[100px] mr-2" />
    <span class="p-1 text-center text-gray-400">${{ totalPrice }}</span>
    <div class="text-right flex-grow">
      <button @click="DeleteInvoiceItem(item)" class="delete-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="fill-current"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
<script setup>
import { invoiceItemProps, invoiceItem } from "../composables/invoiceItem.js"

const props = defineProps(invoiceItemProps)

const { totalPrice, DeleteInvoiceItem } = invoiceItem(props)
</script>
