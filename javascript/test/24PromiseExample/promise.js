const lyricBox = document.querySelector(".lyric-box");

function lyricPromise(lyric) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const lyricElement = document.createElement("h3");
      lyricElement.innerHTML = lyric;
      lyricBox.append(lyricElement);
      resolve();
    }, 3000);
  });
}

lyricPromise("เห็นเธอเดิน มากับแฟนใหม่")
  .then(() => {
    return lyricPromise("ในวันที่ฉัน นั่งกินไก่อยู่กลางร้าน");
  })
  .then(() => {
    return lyricPromise("ใจยังไหวหวั่นแม้ผ่านมาแสนนาน");
  })
  .then(() => {
    lyricPromise("ใจร้าวราน แม้ถือไก่ในมือนี้");
  });
