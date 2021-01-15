setTimeout(() => {
  const width = Number(prompt("ความกว้าง"));
  if (isNaN(width)) {
    alert("ไม่ได้กินผมหรอก");
    return;
  }
  setTimeout(() => {
    const length = Number(prompt("ความยาว"));
    if (isNaN(length)) {
      alert("ไม่ได้กินผมหรอก");
      return;
    }
    setTimeout(() => {
      const height = Number(prompt("ความสูง"));
      if (isNaN(length)) {
        alert("ไม่ได้กินผมหรอก");
        return;
      }
      setTimeout(() => {
        const brownieSize = width * length * height;
        alert("ปริมาตรบราวนี่ = " + brownieSize);
      }, 3000);
    }, 2000);
  }, 1500);
}, 1000);
