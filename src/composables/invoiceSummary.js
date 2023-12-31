import { computed } from "vue"

export const invoiceSummaryProps = {
  items: Array
}

export function invoiceSummary(props) {
  const subTotal = computed(() => props.items.reduce((t, i) => t + i.total_price, 0))
  const taxTotal = computed(() => subTotal.value * 0.18)
  const total = computed(() => subTotal.value + taxTotal.value)
  console.log(props.items)

  return { subTotal, taxTotal, total }
}
