
function sleep(ms) {
  
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const docker_username = process.env.DOCKER_USERNAME;
  console.log(`DOCKER_USERNAME = ${docker_username}`);
  while(true) {
    console.log("Microservices rock!");
    await sleep(5000);
  }
}

main();
