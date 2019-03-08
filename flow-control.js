function basicTeenager(age) {
  if (age >=13 && age <=19)
    console.log "You are a teenager!";
}


function teenager(age) {
  if(age >=13 && age <=19)
    console.log "You are a teenager!"
    else {
      console.log "You are not a teenager"
    }
}

function ageChecker(age) {
  if(age >=13 && age <=19)
    console.log "You are a teenager!";
    else if (age <=12) {
        console.log "You are a kid"
    }
    else {
      console.log "You are a grownup"
    }

}

function ternaryTeenager(age) {
  console.log (age >=13 && age <=19) ? "You are a teenager" : "You are not a teenager"
}

