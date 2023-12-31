import { ref, reactive, onMounted } from "vue"

export default function () {
  const invoiceList = ref([])

  const fetchInvoices = async () => {
    try {
      const response = await fetch("http://localhost:3000/invoices")
      invoiceList.value = await response.json()
      console.log("Fetched invoices:", invoiceList.value)
    } catch (error) {
      console.error("Error fetching invoices:", error)
      throw error
    }
  }

  const isLoading = ref(true)
  const error = ref(null)

  onMounted(async () => {
    try {
      await fetchInvoices()
    } catch (err) {
      console.error("Error fetching invoices:", err)
      error.value =
        "An error occurred while fetching data. (Make sure you run 'json-server --watch db.json' in the terminal!)"
    } finally {
      isLoading.value = false
    }
  })

  const clearForm = ref(false)
  const state = reactive({ activeInvoice: null })

  const saveInvoice = (invoice) => {
    console.log("invoice :>> ", invoice)
    invoiceList.value.push(invoice)
  }
  const editInvoice = (invoice) => {
    console.log(invoice)
    state.activeInvoice = invoice
    /*setTimeout(() => {
      state.activeInvoice = null
    }, 2000)*/
    console.log("state.activeInvoice :>> ", state.activeInvoice)
  }

  const deleteInvoice = (invoice) => {
    console.log("invoice to be deleted :>>", invoice)
    invoiceList.value = invoiceList.value.filter((i) => i.id !== invoice.id)
  }

  const clearInvoice = () => {
    clearForm.value = !clearForm.value
    //console.log(clearForm.value)
  }

  return {
    invoiceList,
    clearForm,
    state,
    saveInvoice,
    editInvoice,
    deleteInvoice,
    clearInvoice,
    fetchInvoices,
    isLoading,
    error,
    onMounted
  }
}
