const btn = document.getElementById('btn');
btn.onclick = function () {
    const name = prompt('Enter your full name');
    document.getElementById('name').innerText = name;
}