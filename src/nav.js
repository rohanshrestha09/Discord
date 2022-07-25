const navIcons = [
  { id: true, src: "images/discord.svg" },
  { id: false, src: "images/itsnp.png" },
  { id: false, src: "images/anim.jpg" },
  { id: false, src: "images/art.jpg" },
  { id: true, src: "images/plus.svg" },
  { id: true, src: "images/navigation.svg" },
  { id: true, src: "images/download.svg" },
];

const Nav = navIcons.map((el, index) => {
  return $("<div></div>")
    .addClass(
      `flex items-center justify-center relative isolate p-0 w-full h-12 cursor-pointer ${
        !el.id && "before:h-[9px]"
      } before:transition-all hover:before:h-5 before:h-0 before:content-[''] before:absolute before:-left-1 before:w-[8px] before:bg-[white] before:rounded-full ${
        index === 1 && "before:h-10 before:rounded-xl"
      }`
    )
    .append(
      $("<div></div>").addClass(
        `rounded-full hover:rounded-2xl w-[65%] h-full bg-cover bg-no-repeat bg-center bg-origin-content ${
          el.id && "p-3.5"
        } ${index === 1 && "rounded-2xl"}  bg-[#36393F] bg-[url(${el.src})]`
      )
    );
});

Nav.splice(
  1,
  0,
  $("<span></span>").addClass(
    "border border-[#373A3F] bg-[#373A3F] h-0 mix-blend-lighten w-[44%] rounded-full"
  )
);

Nav.splice(
  7,
  0,
  $("<span></span>").addClass(
    "border border-[#373A3F] bg-[#373A3F] h-0 mix-blend-lighten w-[44%] rounded-full"
  )
);

export default Nav;
