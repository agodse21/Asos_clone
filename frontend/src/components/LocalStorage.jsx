export const storeData_LC = (key,data) => {
    localStorage.setItem(key,JSON.stringify(data))
}

export const getData_LC = (key) => {
    JSON.parse(localStorage.getItem(key))
}