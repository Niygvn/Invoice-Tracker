<template>
  <div class="summary mt-5 flex justify-end items-end">
    <div class="text-right mr-2">
      <div class="text-gray-500">Mid Sum :</div>
      <div class="text-gray-400">Tax Sum :</div>
      <div class="text-gray-300">End Sum :</div>
    </div>
    <div class="text-right">
      <div class="text-gray-500">{{ subTotal }}</div>
      <div class="text-gray-400">{{ taxTotal }}</div>
      <div class="text-gray-300">{{ total }}</div>
    </div>
  </div>
</template>
<script setup>
import { invoiceSummary, invoiceSummaryProps } from "../composables/invoiceSummary.js"

const props = defineProps(invoiceSummaryProps)

const { subTotal, taxTotal, total } = invoiceSummary(props)
</script>
