// https://leetcode.com/problems/defanging-an-ip-address/

// MINE
/*
function defangIPaddr(address: string): string {
  return address.replace(/[.]/g, '[.]')
};
*/

// ANSWER
// function defangIPaddr(address: string): string {
//     return address.replaceAll(".", "[.]");
// }
// function defangIPaddr(address: string): string {
//     return address.split('.').join('[.]')
// }
function defangIPaddr(address: string): string {
  let sb = ''
  for (let c of address) {
    sb += c === '.' ? '[.]' : c
  }
  return sb
}
