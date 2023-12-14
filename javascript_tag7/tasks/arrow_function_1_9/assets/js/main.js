const intro = (firstName, lastName, placeOfBirth, age, basedIn) => {
  const mission = `I'm guarding the world against the forces of evil`;
  console.log(`My name is ${firstName} ${lastName}`);
  console.log(`I was born on ${placeOfBirth}`);
  console.log(mission);
  console.log(`I'm ${age} years old`);
  console.log(`I'm based in ${basedIn}`);
  return;
};

intro("Aurora", "Stardust", "Stellarion", 20, "Celestia");
