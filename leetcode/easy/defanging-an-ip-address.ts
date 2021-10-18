// https://leetcode.com/problems/defanging-an-ip-address/

// MINE
function defangIPaddr(address: string): string {
  return address.replace(/[.]/g, '[.]')
}

// ANSWER
