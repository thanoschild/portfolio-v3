import { Profile } from "@/types";
import { SiLeetcode, SiGeeksforgeeks, SiGooglecloud } from "react-icons/si";


export const profiles = [
  {
    title: "Leetcode",
    description: "Solved 1000+ problems on LeetCode with 500+ reputation. Ranked in the top 17% globally with a rank of 7,058.",
    icon: <SiLeetcode/>,
    link: "https://leetcode.com/u/thanoschild/",
  },
  {
    title: "Geeksforgeeks",
    description: "Solved 700+ questions on GeeksforGeeks with a coding score of 2390 and secured 20th rank in the college leaderboard.",
    icon: <SiGeeksforgeeks/>,
    link: "https://www.geeksforgeeks.org/user/thanoschild/",
  },
  {
    title: "Google Cloud Certified",
    description: "Certified Professional Data Engineer by Google Cloud.",
    icon: <SiGooglecloud/>,
    link: "https://www.credly.com/badges/c475b79c-8c44-44fe-893b-753a96c652e0/public_url",
  },
  {
    title: "Google Cloud Certified",
    description: "Certified Associate Cloud Engineer by Google Cloud.",
    icon: <SiGooglecloud/>,
    link: "https://www.credly.com/badges/4465450e-d036-4559-a82e-1a1a4ad76afa/public_url",
  }
];