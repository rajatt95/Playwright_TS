const crypto = require('crypto')

export async function getRandomNumber(){
    return Math.floor(Math.random() * 10000 + 1)
}

export async function getRandomString(){
    //Tutor
    return crypto.randomBytes(20).toString('hex')

    //https://www.programiz.com/javascript/examples/generate-random-strings
    //return Math.random().toString(36).substring(2,11);

}

export async function getRandomEmail(){
   return Math.round(Math.random()*100000)+"@email.com"
}