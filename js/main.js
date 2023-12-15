// 获取剪贴板内容
const getClipboardText = async () => {
  const clipboardObj = navigator.clipboard
  const text = await clipboardObj.readText()
  return text
}

// 设置剪贴板内容
const setClipboardText = async (text) => {
  const clipboardObj = navigator.clipboard
  await clipboardObj.writeText(text)
}

// 去前后空格、换行
const bindEventButtonTrim = () => {
  const button = e("#id-button-trim")
  button.addEventListener(EventListenerType.click, async (e) => {
    // 获取剪贴板内容
    const text = await getClipboardText()
    // 去前后空格、换行
    const newText = text.trim()
    // 设置剪贴板内容
    await setClipboardText(newText)
  })
}

const __main = () => {
  bindEventButtonTrim()
}

__main()
