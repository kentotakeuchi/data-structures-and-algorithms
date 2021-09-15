// https://leetcode.com/problems/unique-email-addresses/

// MINE: set
/*
function numUniqueEmails(emails: string[]): number {
    const set = new Set()
    
    for(let email of emails) {
        let [local, domain] = email.split('@') // alice.z, leetcode.com
        local = local.replace(/\./g, '')
        local = local.split('+')[0]
        set.add(`${local}@${domain}}`)
    }
    
    return set.size
};
*/

// ANSWER
function numUniqueEmails(emails: string[]): number {
  const set = new Set()

  for (let email of emails) {
    const address = normalizeEmail(email)
    set.add(address)
  }

  return set.size
}

function normalizeEmail(email: string) {
  let [local, domain] = email.split('@')
  local = local.replace(/(\.)|(\+.*)/g, '')
  return local + '@' + domain
}
