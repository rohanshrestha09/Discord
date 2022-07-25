import Nav from "./src/nav.js";
import Menu from "./src/menu.js";
import Main from "./src/main.js";
import SearchBar from "./src/searchBar.js";
import Friends from "./src/friends.js";

const mainClass = [
  {
    id: "nav",
    class: "flex flex-col items-center py-3 gap-2 h-full bg-[#202225] z-10",
  },
  {
    id: "menu",
    class:
      "flex flex-col relative items-start py-3.5 gap-[1.6rem] h-screen bg-[#2f3136]",
  },
  {
    id: "home",
    class:
      "z-10 flex flex-col justify-center items-center p-0 h-full bg-[#36393f]",
  },
];

$(function () {
  $("#container")
    .addClass(
      "overflow-hidden grid grid-rows-0 grid-cols-[4.6rem_15rem_auto] relative h-screen w-screen"
    )
    .append(
      ...mainClass.map((el) =>
        $(`<section></section>`).attr("id", el.id).addClass(el.class)
      )
    );

  $("#nav").append(...Nav);

  $("#menu").append(...Menu);

  $("#home").append(
    $("<div></div>")
      .addClass("grid grid-cols-1 grid-rows-[3rem_auto] w-full h-full")
      .append(
        SearchBar,
        $("<div></div>")
          .addClass(
            "grid grid-rows-1 sm:grid-cols-[auto_15rem] grid-cols-[auto_11.5rem] overflow-hidden"
          )
          .append(Main, Friends)
      )
  );
});
