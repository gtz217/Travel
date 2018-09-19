let defaultCity = '上海'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  } else {
    defaultCity = '上海'
  }
} catch (e) {}

export default {
  city: defaultCity
}
