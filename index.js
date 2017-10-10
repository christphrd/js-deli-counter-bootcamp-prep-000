function takeANumber(line, name) {
  line.push(name)
  var pos = line.length
  return "Welcome, " +name+ ". You are number "+pos+" in line."
}

function nowServing(line){
  if (line.length == 0) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + line.shift() + "."
  }
}

function currentLine(line){
  if (line.length == 0){
    return "The line is currently empty."
  } else {
    var message = "The line is currently: "
    do {
      var i = 1
      message + i +". "+line[i]
      i++
    } while (i == line.length)
  }
}
