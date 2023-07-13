import { computed } from "vue";
export const getTimeQuantum = computed(() => {
  // return message
  let meesage = "";
  // get hours now
  const hours: number = new Date().getHours();
  // four time quantum need return
  if (hours <= 9) {
    meesage = "Good morning!";
  } else if (hours <= 12) {
    meesage = "Good morning!";
  } else if (hours <= 18) {
    meesage = "Good afternoon!";
  } else {
    meesage = "Good evening!";
  }
  return meesage;
});
