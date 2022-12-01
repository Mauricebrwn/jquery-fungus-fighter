$(document).ready(onReady);
let fungusHP = 100
let ap = 100
let arcaneScepter = {
    apcost: 12,
    hpDamage: 14,
}
let entangle = {
    apcost:23,
    hpDamage:9
}
let dragonBlade = {
    apcost:38,
    hpDamage:47
}
let starFire = {
    apcost: 33,
    hpDamage: 25
}


// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

function onReady() {
    $('.attack-btn.arcane-sceptre').on('click', sceptreDamage);
    $('.attack-btn.entangle').on('click', entangleDamage);
    $('.attack-btn.dragon-blade').on('click', dragonBladeDamage);
    $('.attack-btn.star-fire').on('click', starFireDamage);

    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
}

function sceptreDamage () {
    ap = ap-arcaneScepter.apcost
    console.log(ap)
    $('.ap-text').text(ap+' AP')
    fungusHP = fungusHP-arcaneScepter.hpDamage
    $('.hp-text').text(fungusHP+ ' HP')
}
function entangleDamage () {
    ap = ap-entangle.apcost
    console.log(ap)
    $('.ap-text').text(ap+' AP')
    fungusHP = fungusHP-entangle.hpDamage
    $('.hp-text').text(fungusHP+ ' HP')
    
}
function dragonBladeDamage () {
    ap = ap-dragonBlade.apcost
    console.log(ap)
    $('.ap-text').text(ap+' AP')
    fungusHP = fungusHP-dragonBlade.hpDamage
    $('.hp-text').text(fungusHP+ ' HP')    
}
function starFireDamage () {
    ap = ap-starFire.apcost
    console.log(ap)
    $('.ap-text').text(ap+' AP')
    fungusHP = fungusHP-starFire.hpDamage
    $('.hp-text').text(fungusHP+ ' HP')
    
}
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
    
