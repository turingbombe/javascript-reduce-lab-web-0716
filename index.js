const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const monologueLines = [
  'Who are you talking to right now?',
  'Who is it you think you see?',
  'Do you know how much I make a year?',
  'I mean, even if I told you, you wouldn\'t believe it.',
  'Do you know what would happen if I suddenly decided to stop going into work?',
  'A business big enough that it could be listed on the NASDAQ goes belly up.',
  'Disappears!',
  'It ceases to exist without me.',
  'No, you clearly don\'t know who you\'re talking to, so let me clue you in.',
  'I am not in danger, Skyler.',
  'I am the danger.',
  'A guy opens his door and gets shot and you think that of me?',
  'No.',
  'I am the one who knocks!'
];

let totalBatteries =batteryBatches.reduce((total, battery)=> total += battery,0)


// wordCountMap = monologueLines.reduce((final, line) => {
//   (final[line.length] =  final[line.length]+=1)
//     }
//   ,{})
let wordCountMap = {}
wordCountMap = monologueLines.reduce((final, line) => {
  var string_words = line.split(" ")
  let numOfWords = string_words.length
  if (final[numOfWords] == undefined){
    return Object.assign(final, final[numOfWords]= 1)
  }else{
    return Object.assign({},final,
      final[numOfWords] +=1
    )
  }
}, {})

  // 1. numOfWords = how many words in line?
  // 2. does final have key of numOfWords?
  // 3. if yes -> increment value of numOfWords key
  //4 . if no -> set new key/value pair: numOfWords: 1

