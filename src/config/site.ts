export const SITE = {
  name: 'Webuddy',
  url: 'https://www.webuddy.dev',
  email: 'hello@webuddy.dev',
  phone: {
    display: '+1 (849) 918-2057',
    href: 'tel:+18499182057',
  },
  whatsapp: '18499182057',
  // Scheduling link (Calendly, Cal.com, Google Calendar...). Booking buttons stay hidden while it is empty.
  calendarUrl: '',
  // Company LinkedIn page. The footer link stays hidden while it is empty.
  linkedin: '',
  github: 'https://github.com/webuddyrd',
  instagram: 'https://www.instagram.com/webuddyrd/',
  facebook: 'https://www.facebook.com/Webuddyrd',
};

export const whatsappUrl = (text: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
