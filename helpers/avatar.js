import crypto from 'crypto';

function generateRobohashAvatar () {
    const baseUrl = "https://robohash.org";
    const randomString = generateRandomString(12);
    const set = Math.ceil(Math.random() * 4)

    return `${baseUrl}/${randomString}?set=set${set}`
}

function generateRandomString(size = 21) {
    return crypto.randomBytes(size)
        .toString('base64')
        .slice(0, size)
}

export default generateRobohashAvatar
   
