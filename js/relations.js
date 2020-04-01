const wButton = document.getElementById('willem');
const aButton = document.getElementById('alice');
const jButton = document.getElementById('jenn');
const nButton = document.getElementById('nora');
const pButton = document.getElementById('parents');
const ahButton = document.getElementById('ahmads');

const wProfile = document.getElementById('wProfile');
const aProfile = document.getElementById('aProfile');
const jProfile = document.getElementById('jProfile');
const nProfile = document.getElementById('nProfile');
const pProfile = document.getElementById('pProfile');
const ahProfile = document.getElementById('ahProfile');

wButton.addEventListener('click', () =>{
    wProfile.style.display = 'flex';
    aProfile.style.display = 'none';
    jProfile.style.display = 'none';
    nProfile.style.display = 'none';
    pProfile.style.display = 'none';
    ahProfile.style.display = 'none';
});
aButton.addEventListener('click', () =>{
    wProfile.style.display = 'none';
    aProfile.style.display = 'flex';
    jProfile.style.display = 'none';
    nProfile.style.display = 'none';
    pProfile.style.display = 'none';
    ahProfile.style.display = 'none';
});
jButton.addEventListener('click', () =>{
    wProfile.style.display = 'none';
    aProfile.style.display = 'none';
    jProfile.style.display = 'flex';
    nProfile.style.display = 'none';
    pProfile.style.display = 'none';
    ahProfile.style.display = 'none';
});
nButton.addEventListener('click', () =>{
    wProfile.style.display = 'none';
    aProfile.style.display = 'none';
    jProfile.style.display = 'none';
    nProfile.style.display = 'flex';
    pProfile.style.display = 'none';
    ahProfile.style.display = 'none';
});
pButton.addEventListener('click', () =>{
    wProfile.style.display = 'none';
    aProfile.style.display = 'none';
    jProfile.style.display = 'none';
    nProfile.style.display = 'none';
    pProfile.style.display = 'flex';
    ahProfile.style.display = 'none';
});
ahButton.addEventListener('click', () =>{
    wProfile.style.display = 'none';
    aProfile.style.display = 'none';
    jProfile.style.display = 'none';
    nProfile.style.display = 'none';
    pProfile.style.display = 'none';
    ahProfile.style.display = 'flex';
});