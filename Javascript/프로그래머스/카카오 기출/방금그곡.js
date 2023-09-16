function solution(m, musicinfos) {
  var answer = {};
  const melodies = /C#|D#|F#|G#|A#|C|D|E|F|G|A|B/g;

  const getPlayMin = (start, end) => {
    const [startHour, startMin] = start.split(":").map(Number);
    const [endHour, endMin] = end.split(":").map(Number);

    return (endHour - startHour) * 60 + endMin - startMin;
  };

  musicinfos.map((infos) => {
    const [start, end, title, sheet] = infos.split(",");
    const musicMin = sheet.match(melodies).length;
    const playMin = getPlayMin(start, end);

    let play = "";
    if (playMin !== musicMin) {
      play =
        musicMin < playMin
          ? sheet.repeat(playMin / musicMin) +
            sheet
              .match(melodies)
              .slice(0, playMin % musicMin)
              .join("")
          : sheet
              .match(melodies)
              .slice(0, playMin % musicMin)
              .join("");
    } else {
      play = sheet.match(melodies).join("");
    }

    const reg = new RegExp(m, "g");
    while (reg.exec(play)) {
      // You can use regexp as an iterator
      if (play[reg.lastIndex] !== "#") answer[title] = playMin;
    }
  });

  const candidates = Object.keys(answer);
  if (candidates.length === 1) {
    return candidates[0];
  } else if (candidates.length > 1) {
    const maxLen = Math.max(...Object.values(answer));
    return candidates.find((key) => answer[key] === maxLen);
  }

  return "(None)";
}
