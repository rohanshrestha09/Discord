const data =
  "Hello @RohanShrestha Welcome to <b>ITSNP</b> <b>ORG</b> discord Server 🔥, . glad to see you here, you should take a moment to get roles from #tech-roles roles let you see and chat you in more relevant channels , and to get an idea about what channels we do have, visit #server-overview and do not forget to introduce yourself in #introduce-yourself ; we'd love to know you ❤ , We also have #faq channel for Frequently asked questions, just have a look once may it solve some of your general doubts. , If you have any quick questions not related to any specific programming or tech thing put your questions here #general-problems , And the most important check rules of this server here #rules ✅ , Enjoy your stay here ❤, and kindly rename your nickname to your original name. 🔥 , Thank You, . TEAM ITSNP , 11/11/2021";

const text = data.split(" ");

const Notification = $("<div></div>")
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
  );

const RedBar = $("<div></div>")
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
  );

const WelcomeMessage = $("<div></div>")
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
          .addClass("bg-[#414675] text-[#D4E0FC] px-[2px] rounded-sm")
      )
  );

const messageBody = (el) => {
  return $("<p></p>")
    .html(`${el}`)
    .addClass(
      `tracking-tight leading-none h-[.89rem] ${
        (el.startsWith("#") || el.startsWith("@")) &&
        "bg-[#3C406F] px-[2px] rounded-sm"
      } ${el.startsWith(",") && "w-full text-transparent"} ${
        el.startsWith(".") && "h-[0] w-full text-transparent"
      }`
    );
};

const MessageBody = $("<div></div>")
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
      .addClass("w-full flex gap-[4px] flex-wrap text-[#D7D5D9] text-[.8rem]")
      .append(...text.map((el) => messageBody(el)))
  );

const Main = $("<div></div>")
  .addClass(
    "h-full w-full relative truncate flex flex-col gap-2 justify-start items-center pb-6"
  )
  .append(
    $("<div></div>")
      .addClass("h-[2.5rem] w-[97.1%] flex flex-col gap-1")
      .append(Notification, RedBar),
    $("<div></div>")
      .addClass(
        "w-full h-full flex items-start gap-4 px-4 py-1 hover:bg-[#2E3338]"
      )
      .append(
        $("<img/>").attr({ src: "images/turtle.svg", width: "40px" }),
        $("<div></div>")
          .addClass("h-full w-[55%]")
          .append(WelcomeMessage, MessageBody)
      ),
    $("<p></p>")
      .text("You do not have permission to send message in this channel.")
      .addClass(
        "w-[97.1%] px-4 py-[11px] rounded-lg text-[.9rem] cursor-not-allowed truncate bg-[#3B3E45] text-[#51545B] tracking-tight"
      )
  );

export default Main;
