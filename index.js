const log = console.log.bind(console)


// 在 id 为 container 的元素中插入 5 个40px 宽，40px 高的 div，分成 2 行，1 行 5 个，每个 div 之间间隔 10px
// div 的 display 属性为 inline-block, 且每个 div 边框为 1px 线框，颜色为 #f00
const insertDivs = (container, rowIndex) => {
    for (let i = 0; i < 5; i++) {
        const div = document.createElement('span')
        div.classList.add('cell')
        div.innerHTML= '<span class="span-jing"></span><span class="span-shuxing"></span>'
        container.appendChild(div)
    }
}

// 给每个 cell 绑定点击事件，点击后，弹出一个 dialog， dialog 中包含 4 个选项，分别是"地"、"水"、"火"、"风"，点击后，dialog 消失，同时 cell 内的文字变成对应的选项文字
const bindEventCell = () => {
    const cells = document.querySelectorAll('.cell')
    for (let i = 0; i < cells.length; i++) {
        const cell = cells[i]
        cell.addEventListener('click', (event) => {
            const target = event.target
            const dialog = document.createElement('div')
            dialog.classList.add('dialog')
            dialog.style.width = '100%'
            dialog.style.height = '400px'
            dialog.style.border = '1px solid #f00'
            dialog.style.position = 'absolute'
            dialog.style.top = '0'
            dialog.style.left = '0'
            // dialog.style.transform = 'translate(-50%, -50%)'
            dialog.style.backgroundColor = '#fff'
            dialog.style.zIndex = '100'
            dialog.style.display = 'flex'
            dialog.style.flexDirection = 'column'
            dialog.style.justifyContent = 'space-around'
            dialog.style.alignItems = 'center'
            dialog.innerHTML = `
                <div class="item item-di">地</div>
                <div class="item item-shui">水</div>
                <div class="item item-huo">火</div>
                <div class="item item-feng">风</div>
                <div class="item item-jing">镜</div>
                <div class="item item-kong">空</div>
            `
            target.appendChild(dialog)
            dialog.addEventListener('click', (event) => {
                const target = event.target
                if (target.classList.contains('item')) {
                    const item = target
                    const text = item.innerText
                    const cell = item.parentElement.parentElement.parentElement

                    // cell 的class 改为选项对应的样式
                    if (text === "镜") {
                        const el = cell.children[0]
                        const classList = el.classList
                        classList.toggle('item-jing-show')
                    //
                    } else {
                        const el = cell.children[1]
                        el.innerText = text
                        //
                        const classList = el.classList
                        classList.remove('item-di', 'item-shui', 'item-huo', 'item-feng')
                        if (text === '地') {
                            classList.add('item-di')
                        } else if (text === '水') {
                            classList.add('item-shui')
                        } else if (text === '火') {
                            classList.add('item-huo')
                        } else if (text === '风') {
                            classList.add('item-feng')
                        } else if (text === '空') {
                            el.innerText = ""
                        }
                    }


                    const dialog = item.parentElement
                    dialog.remove()
                }
            })
        })
    }
}

// 点击id="button-refresh"的按钮，清空row1、row2 内的所有内容，重新初始化
const bindEventRefresh = () => {
    const button = document.querySelector('#button-refresh')
    button.addEventListener('click', (event) => {
        const row1 = document.querySelector("#row1")
        const row2 = document.querySelector("#row2")
        row1.innerHTML = ''
        row2.innerHTML = ''
        insertDivs(row1, '1')
        insertDivs(row2, '2')
        bindEventCell()
    })
}

const __main = () => {
    const row1 = document.querySelector("#row1")
    const row2 = document.querySelector("#row2")
    insertDivs(row1, '1')
    insertDivs(row2, '2')
    bindEventCell()
    bindEventRefresh()
}


__main()
