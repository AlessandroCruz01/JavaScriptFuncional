async function HelloAfterThreeSeconds() {
  console.log("After");
  await setTimeout(() => console.log("HelloWord"), 3000);
  console.log("Before");
}

HelloAfterThreeSeconds();
