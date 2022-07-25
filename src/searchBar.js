const icons = [
  "images/hash.svg",
  "images/bell.svg",
  "images/pin.svg",
  "images/account.svg",
  "images/inbox.svg",
  "images/help.svg",
];

const searchIcons = icons.map((el) =>
  $("<img/>").attr("src", el).addClass("h-5 w-5 cursor-pointer")
);

searchIcons.splice(
  4,
  0,
  $("<div></div>")
    .addClass("flex items-center px-2 py-[3px] bg-[#202225] rounded-md")
    .append(
      $("<input/>")
        .attr("placeholder", "Search")
        .addClass(
          "text-[.8rem] text-[#89989D] bg-[#202225] w-[7rem] transition-all focus:border-0 focus:outline-0 focus:w-52"
        ),
      $("<img/>").attr("src", "images/search.svg").addClass("h-3.5")
    )
);

const SearchBar = $("<nav></nav>")
  .addClass(
    "flex items-center justify-between px-4 bg-[#36393F] overflow-hidden shadow-[0px_3px_12px_-2px_rgba(0,0,0,0.25)]"
  )
  .append(
    $("<div></div>")
      .addClass("h-full gap-3 flex items-center md:flex hidden")
      .append(
        $("<img/>").attr("src", "images/hash.svg").addClass("h-5"),
        $("<p></p>")
          .text("welcome")
          .addClass("tracking-tight text-white text-[.95rem]")
      ),
    $("<div></div>")
      .addClass("flex items-center gap-5")
      .append(...searchIcons)
  );

export default SearchBar;
