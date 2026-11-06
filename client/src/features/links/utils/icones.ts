import {
  LuGlobe,
  LuLinkedin,
  LuCodeXml,
  LuInstagram,
  LuYoutube,  
  LuGithub,
  LuLink,
  LuMail
} from "react-icons/lu"

import { FaWhatsapp } from "react-icons/fa";

import { HiOutlineMail } from "react-icons/hi";


export const iconOptions = [
  { id: "github", label: "Github", Icon: LuGithub },
  { id: "link", label: "Link", Icon: LuLink },
  { id: "email", label: "Email", Icon: LuMail },
  { id: "code", label: "Code", Icon: LuCodeXml },
  { id: "linkedin", label: "Linkedin", Icon: LuLinkedin },
  { id: "instagram", label: "Instagram", Icon: LuInstagram },
  { id: "youtube", label: "Youtube", Icon: LuYoutube },
  { id: "whatsapp", label: "WhastApp", Icon: FaWhatsapp },
  { id: "e-mail", label: "E-mail", Icon: HiOutlineMail},
  { id: "site", label: "Site", Icon: LuGlobe },
]