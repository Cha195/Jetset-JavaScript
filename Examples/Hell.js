// console.log("Start")

// const login = (email, password, callback) =>{
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       callback({username: email})
//     }, 3000)
//   })
// }

// const getImages = (username, callback) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       callback(['Image1', 'Image2', 'Image3'])
//     }, 2000)
//   })
// }

// const getImageDetails = (image, callback) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       callback('Title')
//     }, 2000)
//   })
// }

// const user = login('abc@gmail.com', 'abc', (user) => {
//   console.log(user)
//   getImages(user.username, (images) => {
//     console.log(images)
//     getImageDetails(images[0], (details) => {
//         console.log(details)
//     })
//   })
// })

// console.log("End")