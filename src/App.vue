<!-- eslint-disable vue/valid-v-else -->
<template>
  <div class="w-screen h-full bg-gray-800 flex flex-row text-white items-start justify-center">
    <div v-if="isLoading" class="loading-indicator">Loading...</div>
    <div v-else-if="error" class="error-message">{{ error }}</div>
    <app-sidebar
      v-if="!isLoading && !error"
      :invoices="invoiceList"
      :editInvoice="editInvoice"
      :deleteInvoice="deleteInvoice"
      :clearInvoice="clearInvoice"
    />
    <invoice-content
      v-if="!isLoading && !error"
      :saveInvoice="saveInvoice"
      :activeInvoice="state.activeInvoice"
      :clearForm="clearForm"
    />
  </div>
</template>
<script setup>
import appSidebar from "./components/appSidebar.vue"
import invoiceContent from "./components/invoiceContent.vue"
import compApp from "./composables/App.js"

const {
  invoiceList,
  clearForm,
  state,
  saveInvoice,
  editInvoice,
  deleteInvoice,
  clearInvoice,
  isLoading,
  error
} = compApp()
</script>
<style scoped>
.loading-indicator {
  color: white;
  font-size: 1.5rem;
  padding: 2rem;
}

.error-message {
  color: red;
  font-size: 1.5rem;
  padding: 2rem;
}
</style>
