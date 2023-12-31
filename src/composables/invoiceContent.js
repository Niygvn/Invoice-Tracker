import { ref, reactive, watch, provide } from "vue"

export const invoiceContentProps = {
  saveInvoice: Function,
  activeInvoice: [Object, null],
  clearForm: Boolean
}

export function invoiceContent(props) {
  const state = reactive({
    showButton: ref(false),
    invoiceId: ref(null),
    id: null,
    created_at: null,
    contact: {
      contact_name: null,
      email: null,
      city: null,
      country: null,
      zipcode: null
    },
    items: []
  })

  const AddInvoiceItem = () => {
    state.items.push({
      id: new Date().getTime(),
      name: null,
      qty: null,
      unit_price: 0.0,
      total_price: 0.0
    })
  }

  const onSubmit = () => {
    props.saveInvoice({ ...state, created_at: new Date(), id: new Date().getTime() })
    state.contact = {
      contact_name: null,
      email: null,
      city: null,
      country: null,
      zipcode: null
    }
    state.items = []
    state.showButton = false
  }

  const updateInvoice = () => {
    console.log("updateInvoice evoked!")
    props.activeInvoice.contact = state.contact
    props.activeInvoice.items = state.items
  }

  watch(
    () => props.activeInvoice,
    (activeInvoice) => {
      if (activeInvoice) {
        state.contact = { ...activeInvoice.contact }
        state.items = [...activeInvoice.items]
        state.invoiceId = activeInvoice.id
        state.showButton = true
      }
      console.log("activeInvoice :>> ", activeInvoice)
    }
  )

  const DeleteInvoiceItem = (invoiceItem) => {
    //state.items.splice(state.items.indexOf(invoiceItem), 1)
    state.items = state.items.filter((i) => i.id !== invoiceItem.id) // Better to use splice with bulkier data
  }

  provide("DeleteInvoiceItem", DeleteInvoiceItem)

  console.log("props.activeInvoice :>> ", props.activeInvoice)

  watch(
    () => props.clearForm,
    (clearForm) => {
      if (clearForm) {
        //debugger
        state.showButton = false
        console.log("clearForm :>> ", clearForm)
        state.contact = {
          contact_name: null,
          email: null,
          city: null,
          country: null,
          zipcode: null
        }
        state.items = []
      } else {
        state.showButton = false
        state.contact = {
          contact_name: null,
          email: null,
          city: null,
          country: null,
          zipcode: null
        }
        state.items = []
      }
    }
  )
  return { state, AddInvoiceItem, onSubmit, updateInvoice }
}
