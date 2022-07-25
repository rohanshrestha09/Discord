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

const friendsBody = (el, element) => {
  return $("<div></div>")
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
            .addClass(`${element.textColor} text-sm truncate leading-none`),
          el.desc &&
            $("<p></p>")
              .text(`${el.desc}`)
              .addClass("text-[.62rem] text-[#93969D] truncate")
        )
    );
};

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
          ...element.cont.map((el) => friendsBody(el, element))
        )
    )
  );

export default Friends;
