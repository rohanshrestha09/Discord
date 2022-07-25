const menuInformation = [
  {
    name: "INFORMATION BOARD",
    cont: [
      { name: "welcome", src: "images/hash.svg", dot: false },
      { name: "info", src: "images/hash.svg", dot: false },
      { name: "introduce-yourself", src: "images/hash.svg", dot: false },
      { name: "rules", src: "images/check.svg", dot: true },
      { name: "announcements", src: "images/horn.svg", dot: true },
      { name: "server-overview", src: "images/hash.svg", dot: false },
    ],
  },
  {
    name: "MISCELLANEOUS",
    cont: [
      { name: "content-notification", src: "images/horn.svg", dot: true },
      { name: "tech-roles", src: "images/hash.svg", dot: true },
      { name: "boosters", src: "images/hash.svg", dot: true },
      { name: "giveaway", src: "images/check.svg", dot: false },
      { name: "starboard", src: "images/horn.svg", dot: true },
      { name: "counting", src: "images/hash.svg", dot: true },
      { name: "discussion", src: "images/hash.svg", dot: false },
    ],
  },
];

const Title = $("<div></div>")
  .addClass("flex flex-col align-start px-4 gap-1.5 w-full")
  .append(
    $("<p></p>")
      .text("IT Students of Nepal")
      .addClass(
        "flex items-center relative p-0 w-full cursor-pointer text-white font-bold text-[0.85rem] tracking-wide before:absolute before:right-1 before:content-['>'] before:font-normal before:text-xl before:rotate-90"
      ),
    $("<div></div>")
      .addClass(
        "flex justify-center items-center w-[3.52rem] px-0 py-0.5 gap-1 bg-[#4F545C] rounded-xl cursor-pointer"
      )
      .append(
        $("<img/>").attr("src", "/images/earth.svg").addClass("h-2.5 w-2.5"),
        $("<p></p>").text("Public").addClass("text-[.66rem] text-white")
      )
  );

const Key = $("<div></div>")
  .addClass("flex items-center gap-2 px-4 w-full")
  .append(
    $("<img/>").attr("src", "images/lock.svg").addClass("h-[17.5px] w-4"),
    $("<p></p>")
      .text("Users: 4912")
      .addClass("font-[450] text-[.9rem] text-[#96989D]")
  );

const menuBody = (el, ind, index) => {
  return $("<div></div>")
    .addClass(`w-full px-2`)
    .append(
      $("<div></div>")
        .addClass(
          `flex relative gap-2 items-center w-full px-2 py-[5px] rounded-md text-[#96989D] transition-all cursor-pointer hover:text-white hover:bg-[#42464D] ${
            !index && !ind && "bg-[#42464D] !text-white"
          } ${
            el.dot &&
            "!text-white after:h-[9px] after:content-[''] after:absolute after:-left-3 after:w-[8px] after:bg-[white] after:rounded-full"
          } before:transition-all before:opacity-0 hover:before:opacity-100 before:bg-[url('images/user.svg')] before:bg-center before:bg-no-repeat before:bg-contain before:bg-origin-padding before:p-2 before:absolute before:right-3`
        )
        .append(
          $("<img/>").attr("src", el.src).addClass("h-[1.17rem] w-[1rem]"),
          $("<p></p>").text(el.name).addClass(`text-[.9rem] tracking-tight`),
          !index &&
            !ind &&
            $("<img/>")
              .attr("src", "images/user.svg")
              .addClass("h-[1.17rem] w-[1rem] absolute right-3")
        )
    );
};

const Menu = menuInformation.map((element, index) =>
  $("<div></div>")
    .addClass("flex flex-col gap-1 w-full")
    .append(
      $("<div></div>")
        .addClass(
          "flex items-center w-full gap-1 px-1 py-0 font-semibold text-[0.78rem] text-[#96989D] tracking-wide transition-all cursor-pointer hover:text-white"
        )
        .append(
          $("<span></span>").text(">").addClass("rotate-90 text-xs"),
          $("<span></span>").addClass("mt-[1.5px] h-[2.5px] w-6 bg-[#96989D]"),
          $("<p></p>").text(`${element.name}`),
          $("<span></span>").addClass("mt-[1.5px] h-[2.5px] w-6 bg-[#96989D]")
        ),
      ...element.cont.map((el, ind) => menuBody(el, ind, index))
    )
);

const Users = $("<div></div>")
  .addClass(
    "fixed flex items-center gap-2.5 bg-[#292B2F] h-14 w-full bottom-0 px-2"
  )
  .append(
    $("<div></div>").addClass(
      `relative cursor-pointer rounded-full w-[2.1rem] h-[2.1rem] bg-cover bg-no-repeat bg-center bg-origin-content bg-[url('images/profile.jpg')] before:absolute before:bg-[url('images/online.svg')] before:w-4 before:h-4 before:bg-contain before:rounded-lg before:-right-[2.5px] before:-bottom-[2.5px]`
    ),
    $("<div></div>")
      .addClass("truncate w-20 cursor-pointer")
      .append(
        $("<p></p>")
          .text("shrestha_7001")
          .addClass("font-semibold truncate text-white text-xs"),
        $("<p></p>").text("#7358").addClass("text-[#96989D] text-[.7rem]")
      ),
    ["microphone-off.svg", "headphones.svg", "settings.svg"].map((el) =>
      $("<img/>")
        .attr({ src: `images/${el}`, width: "21px" })
        .addClass("cursor-pointer")
    )
  );

export default [Title, Key, Menu, Users];
