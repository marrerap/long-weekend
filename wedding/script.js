const form = document.getElementById("form")
form.addEventListener("submit", (e) => {
    e.preventDefault();    
    const name = document.getElementsByClassName('Name')    
    const banner = document.createElement('header')
    banner.setAttribute("id", "banner")
    banner.textContent = `"Here Arrives the Honorable ${name[0].value} from family ${name[1].value}"`
    document.getElementById("container2").appendChild(banner)
})
form.addEventListener("reset", (e) => {
    e.preventDefault
    document.getElementById('banner').remove();
    
})