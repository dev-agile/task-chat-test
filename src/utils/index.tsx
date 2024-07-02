export const userList = [
  {
    name: "Elmer Laverty",
    tag: ["Question", "Help wanted"],
    img: "/frame-10@2x.png",
  },
  {
    name: "Florencio Dorrance",
    tag: ["Some content"],
    img: "/frame-10-1@2x.png",
  },
  {
    name: "Lavern Laboy",
    tag: ["Bug", "Hacktoberfest"],
    img: "/frame-10-2@2x.png",
  },
  {
    name: "Titus Kitamura  ",
    tag: ["Question", "Some content"],
    img: "/frame-10-3@2x.png",
  },
  { name: "Geoffrey Mott", tag: ["Request"], img: "/frame-10-4@2x.png" },
];

export const teamMember = [
  {
    teamMemberContainer: "/frame-10-12@2x.png",
    fullNameHere: "Florencio Dorrance",
    m: "12m",
    job: "Market Development Manager",
  },
  {
    teamMemberContainer: "/frame-10-13@2x.png",
    fullNameHere: "Benny Spanbauer",
    m: "24m",
    job: "Area Sales Manager",
  },
  {
    teamMemberContainer: "/frame-10-2@2x.png",
    fullNameHere: "Jamel Eusebio",
    m: "1h",
    job: "Administrator",
  },
  {
    teamMemberContainer: "/frame-10-15@2x.png",
    fullNameHere: "Lavern Laboy",
    m: "5h",
    job: "Account Executive",
  },
  {
    teamMemberContainer: "/frame-10-16@2x.png",
    fullNameHere: "Alfonzo Schuessler",
    m: "2d",
    job: "Proposal Writer",
  },
  {
    teamMemberContainer: "/frame-10-17@2x.png",
    fullNameHere: "Daryl Nehls",
    m: "1m",
    job: "Nursing Assistant",
  },
];


export const fileData = [
  {
    iconsaxLinearclipboardtex: "/iconsaxlinearclipboardtext.svg",
    title: "i9.pdf",
    type: "PDF",
    size: "9mb",
  },
  {
    iconsaxLinearclipboardtex: "/iconsaxlineargallery.svg",
    title: "Screenshot-3817.png",
    type: "PNG",
    size: "4mb",
  },
  {
    iconsaxLinearclipboardtex: "/iconsaxlineardocumenttext.svg",
    title: "sharefile.docx",
    type: "DOC",
    size: "555kb",
  },
];


export const iconData = [
  {
    loading: "lazy",
    alt: "",
    src: "/iconsax.svg",
  },
  {
    loading: "lazy",
    alt: "",
    src: "/iconsax-1.svg",
  },
  {
    loading: "lazy",
    alt: "",
    src: "/iconsax-2.svg",
  },
  {
    loading: "lazy",
    alt: "",
    src: "/iconsax-3.svg",
  },
  {
    alt: "",
    src: "/iconsax-4.svg",
  },
];

export function timeAgo(timestamp: number): string {
  if(!timestamp) return ""
  const now = Date.now();
  const secondsPast = (now - timestamp) / 1000;

  if (secondsPast < 60) {
      return `${Math.floor(secondsPast)}s ago`;
  }
  if (secondsPast < 3600) {
      return `${Math.floor(secondsPast / 60)}m ago`;
  }
  if (secondsPast < 86400) {
      return `${Math.floor(secondsPast / 3600)} hrs ago`;
  }
  if (secondsPast < 2592000) {
      return `${Math.floor(secondsPast / 86400)} days ago`;
  }
  if (secondsPast < 31536000) {
      return `${Math.floor(secondsPast / 2592000)} months ago`;
  }
  return `${Math.floor(secondsPast / 31536000)} years ago`;
}