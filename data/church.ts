import type { ChurchConfig, Service } from "@/types/church";

/**
 * Single source of truth for church-wide facts. Ported directly from the
 * previous static implementation's assets/js/config.js — every value here
 * is a verified fact the church provided, not a placeholder.
 */
export const church: ChurchConfig = {
  churchName: "The Surefire Christian Church of God",
  slogan: "Living Wonders",
  motto: "Empowering Lives, Building Kingdom",
  values: ["Faith", "Integrity", "Empowerment", "Impact"],
  established: "16 April 2011",
  founder: "Pastor Dapo Shoetan",
  address: "Wonderland Bus Stop, Ilogbo-Town, Ado/Odo LGA, Sango-Ota, Ogun State, Nigeria",
  whatsapp: {
    seniorPastor: "2348032273433",
    church: "2349115905137",
  },
  phone: {
    church: "+234 911 590 5137",
    seniorPastor: "0803 227 3433",
  },
  facebook: "https://www.facebook.com/search/top?q=the%20surefire%20christian%20church%20of%20god",
  facebookLabel: "The Surefire Christian Church of God",
  giving: {
    bank: "Wema Bank Plc",
    accountName: "The Surefire Christian Church of God",
    accountNumber: "0242264187",
  },
};

export const services: readonly Service[] = [
  { key: "presence", num: "01", name: "In His Presence", day: "Sunday", time: "8:00 AM – 10:30 AM" },
  { key: "notyetover", num: "02", name: "It Is Not Yet Over", day: "Tuesday", time: "8:00 AM – 10:00 AM" },
  { key: "vigil", num: "03", name: "Night Vigil", day: "Last Friday of Every Month", time: "11:00 PM – 4:00 AM" },
];
