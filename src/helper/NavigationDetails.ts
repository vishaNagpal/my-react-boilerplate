interface ILink {
  link: string;
  label: string;
}

export const NavigationObj: Record<string, ILink> = {
  HOME: {
    link: "/",
    label: "Home",
  },
  PROFILE: {
    link: "/profile",
    label: "Profile",
  },
  ADMIN_PANEL: {
    link: "/admin",
    label: "Admin",
  },
  ACTION_1: {
    link: "/action1",
    label: "Action Item 1",
  },
};
