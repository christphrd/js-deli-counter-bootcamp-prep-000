function takeANumber(line, name) {
  line.push(name)
  var pos = line.length
  return "Welcome, " +name+ ". You are number "+pos+" in line."
}

function nowServing(line){
  if (line === []) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + line[0] + "."
    line.shift()
  }
}

function currentLine(line){
  if (line == []){
    return "The line is currently empty."
  } else {
    return "not right" // place holder for now. Is this a loop?
  }
}
