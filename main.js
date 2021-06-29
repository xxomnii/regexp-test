const str = `
  010-5127-7936
  thelsl101048@gmail.com
  https://www.omdbapi.com/?apikey=7035c60c&s=frozen
  The quick brown fox jumps over the lazy dog.
  abbcccdddd
`

console.log(
  str.match(/(?<=@).{1,}/g)
)