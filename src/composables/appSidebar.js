export const appSidebarProps = {
  invoices: {
    type: Array,
    default: () => []
  },
  editInvoice: Function,
  deleteInvoice: Function,
  clearInvoice: Function
}

export function appSidebar(props) {
  const purpleButtonClick = (invoice) => {
    props.editInvoice(invoice)
  }

  const redButtonClick = (invoice) => {
    props.deleteInvoice(invoice)
    props.clearInvoice()
  }

  return {
    purpleButtonClick,
    redButtonClick
  }
}
