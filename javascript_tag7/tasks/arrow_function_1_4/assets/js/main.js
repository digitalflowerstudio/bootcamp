const hero = (heroName, heroPower, heroEnemy) => {
  const name = `My favorite hero is ${heroName}.`;
  const power = `Their super power is ${heroPower}.`;
  const enemy = `Their arch-enemy is ${heroEnemy}.`;
  console.log(name, power, enemy);
};

hero("Batman", "looking cool", "Joker");
