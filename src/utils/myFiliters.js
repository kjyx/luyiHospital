// 天数
export const formatTimer = (value) =>{
        let date = new Date(value);
        let d = date.getDate();
        d = d < 10 ? "0" + d : d;
        return d;
}
// 年月
export const formatTimer1 = (value) =>{
    let date = new Date(value);
    let y = date.getFullYear();
    let MM = date.getMonth() + 1;
    MM = MM < 10 ? "0" + MM : MM;
    return y + "-" + MM;
}

// 年月日
export const formatTimer2 = (value) => {
    let date = new Date(value);
    let y = date.getFullYear();
    let MM = date.getMonth() + 1;
    MM = MM < 10 ? "0" + MM : MM;
    let d = date.getDate();
    d = d < 10 ? "0" + d : d;
    return y + "-" + MM + '-' + d;
}

