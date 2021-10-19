
function sleep(ms) {
  
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const docker_username = process.env.DOCKER_USERNAME;
  
  while(true) {
    console.log(`DOCKER_USERNAME = ${docker_username}`);
    await sleep(5000);
  }
}

main();
