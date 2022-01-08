function checkUpper(order){
    return !/[a-z]/.test(order) && /[A-Z]/.test(order)
} 
function hey(message) {
	let messageLetter = "";
    message.split("").forEach(c => {
        if(/[a-zA-Z]/.test(c)){
            messageLetter += c;
        }
    })
    let checkUppercace = checkUpper(messageLetter)
    if(checkUppercace && message.trim().charAt(message.length-1)==='?'){
        return "Calm down, I know what I'm doing!"
    }
    else if(checkUppercace){
        return "Whoa, chill out!"
    }
    else if(message.trim().charAt(message.length-1)==='?'){
        return "Sure."
    }
    else if(message===""){
        return "Fine. Be that way!"
    }
	return "Whatever."
}
// console.log(hey("Hii Kunu ! How are you ?"));