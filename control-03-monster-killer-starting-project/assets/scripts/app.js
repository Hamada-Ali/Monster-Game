// dealMonsterDamage deal damage to the monster
// dealPlayerDamage deal damager to the player
// adjustHealthBars The Health Bar Value
// attackBtn the attack button 


const MON_ATT_VAL = 60;
const PLY_ATT_VAL = 10;
const INC_HELT_VAL = 30; 
const STR_ATT_VAL = 50;

let maxMonsterLife = 100;
let maxPlayerLife = 100;
let monsterLife = maxMonsterLife;
let playerLife = maxPlayerLife;

adjustHealthBars(maxMonsterLife);


function attMod(mode) {
    //console.log(playerLife, monsterLife);
    const intialHealth = playerLife;
    if (mode === 'normal') {
        const plyDamge = dealMonsterDamage(PLY_ATT_VAL);
        let monDamge = dealPlayerDamage(MON_ATT_VAL);
        monsterLife -= plyDamge;
        playerLife -= monDamge;
        if (playerLife < 0) {
            playerLife = intialHealth;
            setPlayerHealth(intialHealth);
        }
        console.log(playerLife, monsterLife);
    } else if (mode === 'strong') {
        let strongPlyDamge = dealMonsterDamage(STR_ATT_VAL);
        let strongMonDamge = dealPlayerDamage(STR_ATT_VAL);
        monsterLife -= strongPlyDamge;
        playerLife -= strongMonDamge;
    }
}

function calcDam() {
    attMod('normal');
 /*    if (playerLife <= 0 && document.getElementById('bonus-life')) {
        revive();
    } */
        //  alertWinner(monsterLife, playerLife, document.getElementById(bonusLifeEl));
    }


    /*  function alertWinner(monsterHealth, playerHealth, lifeSatus) {
        if (monsterHealth <= 0 && playerHealth > 0) {
            alert("you won");
        } else if (playerHealth <= 0 && monsterHealth > 0) {
            alert("you lost");
        } else if (playerHealth <= 0 && monsterHealth <= 0) {
            console.log(playerHealth, monsterHealth)
            alert("draw");
        } */
/*         if (!lifeSatus && playerHealth <=0) {
            console.log("gg");
            if (monsterHealth <= 0 && playerHealth > 0) {
                alert("you won");
            } else if (playerHealth <= 0 && monsterHealth > 0) {
                alert("you lost");
            } else if (playerHealth <= 0 && monsterHealth <= 0) {
                console.log(playerHealth, monsterHealth)
                alert("draw");
            }
        } 
}  
*/
function strongAttFun() {
    attMod('strong');
/*     if (playerLife <= 0 && document.getElementById('bonus-life')) {
        revive();
    } */
}

/* function plusPlyHealth() {
    
    let increasePlyHealth = increasePlayerHealth(INC_HELT_VAL);
    playerLife =+ increasePlayerHealth;
} */

/*  function revive() {
     const healthval = maxPlayerLife - playerLife;
        let recover = playerLife;
        recover =+ healthval; 
        removeBonusLife();
        //resetGame(recover)
        //setPlayerHealth(recover);
    
}  */

attackBtn.addEventListener('click', calcDam);
//healBtn.addEventListener('click', plusPlyHealth)
strongAttackBtn.addEventListener('click', strongAttFun)
