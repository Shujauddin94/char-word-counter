function characters(e){
    let text =e.value
    // let text =event.data
    // console.log(text.length)
    document.getElementById('char').innerHTML = text.length;
    // let words = text.split(" ").length;
    // document.getElementById('word').innerHTML = words;
    
    let words = text === "" ? 0 : text.split(/\s+/).length;
    document.getElementById('word').innerHTML = words;
}
