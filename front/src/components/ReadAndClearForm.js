function readAndClearForm(form) {
    const elements = form
    let values = {}
    for (let i = 0, element; element = elements[i++];) {
        values[element.name] = element.value
        element.value = ''
    }    
    return values
}

module.exports = readAndClearForm