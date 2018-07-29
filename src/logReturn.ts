export default (fn) => {
  return (...args) => {
    const _return = fn(...args)
    console.log('return:', typeof _return, _return)
    return _return
  }
}