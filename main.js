// gsap.from(".container", { duration: 1, opacity: 0 });

/*
gsap.from(".title", { duration: 2, scale: 0, opacity: 0, delay: 1 });

gsap.from(".image-area img", {
  duration: 0.5,
  delay: 3,
  opacity: 0,
  stagger: 0.2,
});

gsap.from(".time", {
  duration: 1,
  delay: 5,
  opacity: 0,
  xPercent: 100,
  ease: "linear",
});
*/

/*
gsap.set(".container", { scale: 1.1 });

let tl = gsap.timeline({ defaults: { duration: 1, opacity: 0 } });

tl.from(".container", { scale: 0.5 });

tl.from(".title", { scale: 0, ease: "back" }, 2);

tl.from(".image-area img", {
  stagger: 0.2,
  yPercent: 100,
});

tl.from(".time", { xPercent: 100 }, "<");

function titlebounce() {
  tl.from(".time", { ease: "bounce" });
}

const btn = document.querySelector(".btn");
btn.addEventListener("click", titlebounce);
*/

const link = document.querySelectorAll("nav > .hover-this");
const cursor = document.querySelector(".cursor");

(function () {
  function animatIt(e) {
    const span = this.querySelector("span");
    // const { offsetX: x, offsetY: y } = e,
    //   { offsetWidth: width, offsetHeight: height } = this,
    //   move = 25,
    //   xMove = (x / width) * (move * 2) - move,
    //   yMove = (y / height) * (move * 2) - move;
    // console.log(xMove, yMove);

    const x = e.offsetX;
    const y = e.offsetY;
    const width = this.offsetWidth;
    const height = this.offsetHeight;
    let move = 25;
    const xMove = (x / width) * (move * 2) - move;
    const yMove = (y / height) * (move * 2) - move;

    // console.log(xMove, yMove);

    span.style.transform = `translate(${xMove}px, ${yMove}px)`;
    // span.style.color = "red";
    // span.style.transform = "translate(50px, 50px)";

    if (e.type === "mouseleave") {
      span.style.transform = "";
    }

    // const { offsetX: x, offsetY: y } = e,
    //   { offsetWidth: width, offsetHeight: height } = this,
    //   move = 25,
    //   xMove = (x / width) * (move * 2) - move,
    //   yMove = (y / height) * (move * 2) - move;

    // this.style.transform = `translate(${xMove}px, ${yMove}px)`;

    // if (e.type === "mouseleave") this.style.transform = "";
  }

  const editCursor = (e) => {
    const { clientX: x, clientY: y } = e;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
  };

  link.forEach((b) => b.addEventListener("mousemove", animatIt));
  link.forEach((b) => b.addEventListener("mouseleave", animatIt));
  window.addEventListener("mousemove", editCursor);
})();
