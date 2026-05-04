export const SITE = {
  name: "Kizwa Valongo",
  legal: "Kizwa Valongo — Comércio e Prestação de Serviços (SU) Lda",
  nif: "5002196310",
  phone: "+244 923 210 427",
  phoneRaw: "244923210427",
  email: "geral@kizwa-valongo.com",
  address: "Avenida Sangongolo, Kuito — Bié, Angola",
  whatsappMessage: "Olá Kizwa Valongo, gostaria de solicitar um orçamento.",
};

export const whatsappUrl = (msg = SITE.whatsappMessage) =>
  `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(msg)}`;
