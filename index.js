const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


// titlecased tutorial elements
const titleCased = () => {
  return tutorials.map(function(ele){
    const words = ele.split(" ");
    const words2 = []
    for (let item of words){
      words2.push(item[0].toUpperCase() + item.slice(1));
    }
    return words2.join(" ");
  })
}
