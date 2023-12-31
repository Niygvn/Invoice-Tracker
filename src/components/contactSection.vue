<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div>
    <app-heading title="Invoice Information" />
    <label for="client_name" class="flex flex-col text-gray-400 mb-2">
      <small class="mb-1">Customer Name</small>
      <input
        v-model="contact.contact_name"
        autocomplete="off"
        id="client_name"
        class="input"
        type="text"
      />
    </label>
    <label for="client_email" class="flex flex-col text-gray-400 mb-2">
      <small class="mb-1">E-mail</small>
      <input
        v-model="contact.email"
        autocomplete="off"
        id="client_email"
        class="input"
        type="email"
      />
    </label>

    <div class="grid grid-cols-3 gap-5">
      <label for="city" class="flex flex-col text-gray-400 mb-2">
        <small class="mb-1">City</small>
        <input v-model="contact.city" autocomplete="off" id="city" class="input" type="text" />
      </label>
      <label for="zip_code" class="flex flex-col text-gray-400 mb-2">
        <small class="mb-1">Zip Code</small>
        <input
          v-model="contact.zipcode"
          autocomplete="off"
          id="zip_code"
          class="input"
          type="text"
        />
      </label>
      <label for="country" class="flex flex-col text-gray-400 mb-2">
        <small class="mb-1">Country</small>
        <input
          v-model="contact.country"
          autocomplete="off"
          id="country"
          class="input"
          type="text"
        />
      </label>
    </div>
  </div>
</template>
<script setup>
defineProps({ contact: Object })
</script>
