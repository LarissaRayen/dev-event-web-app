export interface EventItem {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

export const events: EventItem[] = [
  {
    title: "React Conf 2026",
    image: "/images/event1.png",
    slug: "react-conf-2026",
    location: "Las Vegas, NV",
    date: "2026-05-15",
    time: "9:00 AM - 5:00 PM",
  },
  {
    title: "JSConf EU 2026",
    image: "/images/event2.png",
    slug: "jsconf-eu-2026",
    location: "Berlin, Germany",
    date: "2026-05-25",
    time: "10:00 AM - 6:00 PM",
  },
  {
    title: "Google I/O 2026",
    image: "/images/event3.png",
    slug: "google-io-2026",
    location: "Mountain View, CA",
    date: "2026-06-10",
    time: "8:00 AM - 4:00 PM",
  },
  {
    title: "Hack the North 2026",
    image: "/images/event4.png",
    slug: "hack-the-north-2026",
    location: "Waterloo, Canada",
    date: "2026-09-18",
    time: "All Day",
  },
  {
    title: "PyCon US 2026",
    image: "/images/event5.png",
    slug: "pycon-us-2026",
    location: "Pittsburgh, PA",
    date: "2026-05-20",
    time: "9:00 AM - 5:00 PM",
  },
  {
    title: "DevFest 2026",
    image: "/images/event6.png",
    slug: "devfest-2026",
    location: "San Francisco, CA",
    date: "2026-10-05",
    time: "10:00 AM - 6:00 PM",
  },
  {
    title: "TechCrunch Disrupt 2026",
    image: "/images/event-full.png",
    slug: "techcrunch-disrupt-2026",
    location: "San Francisco, CA",
    date: "2026-10-28",
    time: "9:00 AM - 5:00 PM",
  },
];
