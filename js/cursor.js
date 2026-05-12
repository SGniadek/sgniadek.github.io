const cursor = document.createElement("div");
cursor.classList.add("custom-cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

document.addEventListener("click", (e) => {
  const sparkContainer = document.getElementById("cursor-sparks");

  for (let i = 0; i < 30; i++) {
    const spark = document.createElement("div");
    spark.classList.add("spark");

    const angle = Math.random() * Math.PI * 2;
    const distance = 50 + Math.random() * 80;

    spark.style.left = e.clientX + "px";
    spark.style.top = e.clientY + "px";
    spark.style.setProperty("--dx", Math.cos(angle) * distance + "px");
    spark.style.setProperty("--dy", Math.sin(angle) * distance + "px");

    sparkContainer.appendChild(spark);

    setTimeout(() => spark.remove(), 500);
  }
});