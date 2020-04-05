// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

function reverse(str) {
  // add whatever parameters you deem necessary
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}
