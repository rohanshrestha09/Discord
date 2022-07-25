const icons = [
  "images/hash.svg",
  "images/bell.svg",
  "images/pin.svg",
  "images/account.svg",
  "images/inbox.svg",
  "images/help.svg",
];

const friend = [
  {
    name: "TEAM",
    textColor: "text-[#53F0FF]",
    cont: [
      {
        name: "Rohan Shrestha",
        desc: "dattebayo",
        src: "images/discordblue.svg",
        status: "images/online.svg",
      },
      {
        name: "DIPESH",
        desc: "Don",
        src: "images/smoke.svg",
        status: "images/online.svg",
      },
      { name: "Nikesh", src: "images/art2.svg", status: "images/sleep.svg" },
    ],
  },
  {
    name: "SUPPORT",
    textColor: "text-[#3498DB]",
    cont: [
      {
        name: "Rahul Khanal",
        desc: "hero",
        src: "images/hero.svg",
        status: "images/online.svg",
      },
      {
        name: "HALO",
        desc: "Pro Grammer",
        src: "images/smoke.svg",
        status: "images/offline.svg",
      },
    ],
  },
  {
    name: "FELLOW MEMBERS",
    textColor: "text-[#BDFCC0]",
    cont: [
      { name: "8848", src: "images/8848.svg", status: "images/sleep.svg" },
      { name: "Chakra", src: "images/cat.svg", status: "images/online.svg" },
      {
        name: "Deez Nuts",
        src: "images/nuts.svg",
        status: "images/sleep.svg",
      },
      {
        name: "AK47",
        desc: "chiti chiti bang bang",
        src: "images/tiger.svg",
        status: "images/online.svg",
      },
      { name: "Gunner", src: "images/8848.svg", status: "images/offline.svg" },
      {
        name: "ACExGreed",
        desc: "Playing Mobile Legends Bang Bang",
        src: "images/anim.jpg",
        status: "images/offline.svg",
      },
      { name: "AGONY", src: "images/art.jpg", status: "images/online.svg" },
    ],
  },
];

const data =
  "Hello @RohanShrestha Welcome to <b>ITSNP</b> <b>ORG</b> discord Server 🔥, . glad to see you here, you should take a moment to get roles from #tech-roles roles let you see and chat you in more relevant channels , and to get an idea about what channels we do have, visit #server-overview and do not forget to introduce yourself in #introduce-yourself ; we'd love to know you ❤ , We also have #faq channel for Frequently asked questions, just have a look once may it solve some of your general doubts. , If you have any quick questions not related to any specific programming or tech thing put your questions here #general-problems , And the most important check rules of this server here #rules ✅ , Enjoy your stay here ❤, and kindly rename your nickname to your original name. 🔥 , Thank You, . TEAM ITSNP , 11/11/2021";

const text = data.split(" ");

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

const Friends = $("<div></div>")
  .addClass("flex flex-col bg-[#2F3136] px-2.5 py-6 gap-6 w-full")
  .append(
    ...friend.map((element) =>
      $("<div></div>")
        .addClass("flex flex-col gap-1 w-full")
        .append(
          $("<p></p>")
            .text(`${element.name + " - " + element.cont.length}`)
            .addClass(
              "px-1.5 font-semibold text-xs text-[#89989D] tracking-wide"
            ),
          ...element.cont.map((el) =>
            $("<div></div>")
              .addClass(
                "flex items-center w-full px-2 py-1 gap-2 cursor-pointer transition-all hover:bg-[#42464D] rounded-md"
              )
              .append(
                $("<div></div>").addClass(
                  `relative rounded-full w-[2.1rem] h-[2.1rem] bg-cover bg-no-repeat bg-center bg-origin-content bg-[url(${el.src})] before:absolute before:bg-[url(${el.status})] before:w-4 before:h-4 before:bg-contain before:rounded-lg before:-right-[2.5px] before:-bottom-[2.5px]`
                ),
                $("<div></div>")
                  .addClass("flex flex-col w-3/4")
                  .append(
                    $("<p></p>")
                      .text(`${el.name}`)
                      .addClass(
                        `${element.textColor} text-sm truncate leading-none`
                      ),
                    el.desc &&
                      $("<p></p>")
                        .text(`${el.desc}`)
                        .addClass("text-[.62rem] text-[#93969D] truncate")
                  )
              )
          )
        )
    )
  );

const Main = $("<div></div>")
  .addClass(
    "h-full w-full relative truncate flex flex-col gap-2 justify-start items-center pb-6"
  )
  .append(
    $("<div></div>")
      .addClass("h-[2.5rem] w-[97.1%] flex flex-col gap-1")
      .append(
        $("<div></div>")
          .addClass(
            "flex justify-between items-center bg-[#5663E9] w-full rounded-b-lg py-[2px] px-3 text-slate-50 text-[.8rem] cursor-pointer"
          )
          .append(
            $("<p></p>")
              .text("12 new messages since 6:53 PM on July 23, 2022")
              .addClass("tracking-tight"),
            $("<div></div>")
              .addClass("flex gap-2")
              .append(
                $("<p></p>").text("Mark As Read").addClass("font-semibold"),
                $("<img/>").attr({
                  src: "images/message-check.svg",
                  width: "15px",
                })
              )
          ),
        $("<div></div>")
          .addClass("w-full flex items-center gap-2 text-xs text-[#ED4245]")
          .append(
            $("<span></span>").addClass("w-full h-[.5px] bg-[#ED4255]"),
            $("<p></p>").text("October 16, 2021"),
            $("<span></span>").addClass("w-full h-[.5px] bg-[#ED4255]"),
            $("<p></p>")
              .text("NEW")
              .addClass(
                "z-10 relative flex items-center text-[.6rem] text-white font-semibold bg-[#ED4255] leading-none py-[1px] px-[4px] rounded-sm before:absolute before:h-[.52rem] before:w-[.52rem] before:bg-[#ED4255] before:rounded-sm before:rotate-45 before:right-[25px] before:-z-10"
              )
          )
      ),
    $("<div></div>")
      .addClass(
        "w-full h-full flex items-start gap-4 px-4 py-1 hover:bg-[#2E3338]"
      )
      .append(
        $("<img/>").attr({ src: "images/turtle.svg", width: "40px" }),
        $("<div></div>")
          .addClass("h-full w-[55%]")
          .append(
            $("<div></div>")
              .addClass("flex flex-col gap-[2px]")
              .append(
                $("<div></div>")
                  .addClass("flex items-center gap-1.5")
                  .append(
                    $("<p></p>")
                      .text("ITSNP ORG")
                      .addClass("text-md text-[#D5C4A1] leading-none"),
                    $("<p></p>")
                      .html("&#10004; BOT")
                      .addClass(
                        "text-[.65rem] text-white bg-[#5865F2] leading-none py-[2px] px-[3px] rounded-sm"
                      ),
                    $("<p></p>")
                      .text("07/12/2022")
                      .addClass("text-xs text-[#A3A6AA] leading-none")
                  ),
                $("<div></div>")
                  .addClass("flex text-slate-300 text-sm gap-1")
                  .append(
                    $("<p></p>").text("welcome"),
                    $("<p></p>")
                      .text("@Rohan")
                      .addClass(
                        "bg-[#414675] text-[#D4E0FC] px-[2px] rounded-sm"
                      )
                  )
              ),
            $("<div></div>")
              .addClass(
                "relative w-full h-[93%] bg-[#2F3136] flex flex-col p-4 gap-2 rounded-md before:w-1 before:rounded-l-md before:h-full before:top-0 before:left-0 before:absolute before:bg-[#FC0004]"
              )
              .append(
                $("<div></div>")
                  .addClass("flex items-center gap-2")
                  .append(
                    $("<img/>")
                      .attr({ src: "images/itsnp.png", width: "25px" })
                      .addClass("rounded-full"),
                    $("<p></p>")
                      .text("ITSNP ORG")
                      .addClass("text-sm text-white font-semibold")
                  ),
                $("<p></p>")
                  .text("Welcome to ITSNP ORG Discord Community 🔥")
                  .addClass("text-white text-[.9rem] tracking-tight"),
                $("<div></div>")
                  .addClass(
                    "w-full flex gap-[4px] flex-wrap text-[#D7D5D9] text-[.8rem]"
                  )
                  .append(
                    ...text.map((el) =>
                      $("<p></p>")
                        .html(`${el}`)
                        .addClass(
                          `tracking-tight leading-none h-[.89rem] ${
                            (el.startsWith("#") || el.startsWith("@")) &&
                            "bg-[#3C406F] px-[2px] rounded-sm"
                          } ${
                            el.startsWith(",") && "w-full text-transparent"
                          } ${
                            el.startsWith(".") &&
                            "h-[0] w-full text-transparent"
                          }`
                        )
                    )
                  )
              )
          )
      ),
    $("<p></p>")
      .text("You do not have permission to send message in this channel.")
      .addClass(
        "w-[97.1%] px-4 py-[11px] rounded-lg text-[.9rem] cursor-not-allowed truncate bg-[#3B3E45] text-[#51545B] tracking-tight"
      )
  );

const Home = $("<div></div>")
  .addClass("grid grid-cols-1 grid-rows-[3rem_auto] w-full h-full")
  .append(
    SearchBar,
    $("<div></div>")
      .addClass(
        "grid grid-rows-1 sm:grid-cols-[auto_15rem] grid-cols-[auto_11.5rem] overflow-hidden"
      )
      .append(Main, Friends)
  );

export default Home;
