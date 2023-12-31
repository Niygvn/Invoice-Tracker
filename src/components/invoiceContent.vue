<template>
  <section class="bg-gray-900 w-3/5 mx-auto mt-10 p-2 px-5 rounded-md shadow-2xl">
    <!-- Invoice Information -->
    <contact-section :contact="state.contact" />

    <div class="mt-5">
      <app-heading title="Invoice Elements" />
      <invoice-items :items="state.items" :AddInvoiceItem="AddInvoiceItem" />
    </div>
    <!-- Summary -->
    <invoice-summary :items="state.items" />

    <hr class="bg-gradient-to-r h-[1px] border-none from-gray-700 mt-5" />
    <div id="actionbar" class="actionbar text-right my-5">
      <button v-if="state.showButton" @click="updateInvoice" class="mr-3 purple-button">
        Update
      </button>
      <button @click="onSubmit" class="purple-button">Save</button>
    </div>
  </section>
</template>
<script setup>
import invoiceItems from "./invoiceItems.vue"
import invoiceSummary from "./invoiceSummary.vue"
import contactSection from "./contactSection.vue"
import { invoiceContent, invoiceContentProps } from "../composables/invoiceContent.js"

const props = defineProps(invoiceContentProps)

const { state, AddInvoiceItem, onSubmit, updateInvoice } = invoiceContent(props)
</script>
