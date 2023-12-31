import { inject, computed, watch } from "vue"

export const invoiceItemProps = {
  item: Object
}

export function invoiceItem(props) {
  const totalPrice = computed(() => props.item.qty * props.item.unit_price)
  watch(totalPrice, (totalPrice) => {
    // eslint-disable-next-line vue/no-mutating-props
    props.item.total_price = totalPrice
  })

  const DeleteInvoiceItem = inject("DeleteInvoiceItem")

  return { totalPrice, DeleteInvoiceItem }
}
