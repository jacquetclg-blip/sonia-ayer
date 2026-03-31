export interface City {
  slug: string;
  name: string;
  department: string;
  distance: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
}

export const cities: City[] = [
  {
    slug: "selestat",
    name: "Sélestat",
    department: "Bas-Rhin",
    distance: "25 km",
    description:
      "Sélestat possède un quartier médiéval classé où les contraintes architecturales rendent chaque rénovation intérieure particulière. Les immeubles du centre historique combinent murs en pierre, plafonds à la française et des volumes atypiques qui demandent une vraie réflexion d'aménagement. En tant qu'architecte d'intérieur intervenant à Sélestat, Sonia Ayer connaît les réglementations locales sur le bâti ancien et travaille régulièrement avec les artisans de la ville. L'objectif reste toujours le même : apporter du confort contemporain sans trahir le caractère du lieu.",
    metaTitle: "Architecte d'intérieur à Sélestat",
    metaDescription:
      "Sonia Ayer, architecte d'intérieur à Sélestat (Bas-Rhin). Rénovation et aménagement intérieur dans le quartier médiéval et les environs. Basée à Colmar, à 25 km.",
  },
  {
    slug: "ribeauville",
    name: "Ribeauvillé",
    department: "Haut-Rhin",
    distance: "15 km",
    description:
      "Les maisons à colombages de Ribeauvillé ont un charme fou, mais elles posent aussi des défis concrets quand on veut y vivre au quotidien. Les pièces sont souvent basses de plafond, les murs pas droits, les ouvertures étroites. Sonia Ayer, architecte d'intérieur intervenant à Ribeauvillé, sait comment tirer parti de ces contraintes au lieu de lutter contre elles. Elle a l'habitude de concevoir des intérieurs qui respectent l'ossature bois d'origine tout en intégrant une cuisine fonctionnelle ou une salle de bain moderne.",
    metaTitle: "Architecte d'intérieur à Ribeauvillé",
    metaDescription:
      "Sonia Ayer, architecte d'intérieur à Ribeauvillé (Haut-Rhin). Spécialiste des intérieurs en maisons à colombages. Basée à Colmar, à 15 km.",
  },
  {
    slug: "guebwiller",
    name: "Guebwiller",
    department: "Haut-Rhin",
    distance: "25 km",
    description:
      "Guebwiller compte un patrimoine bâti varié : des maisons bourgeoises du XIXe siècle, d'anciennes bâtisses industrielles reconverties, et des constructions plus récentes en périphérie. Chaque type demande une approche différente. L'architecte d'intérieur à Guebwiller doit autant savoir restructurer un appartement dans un immeuble classé que repenser l'agencement d'un pavillon des années 70. Sonia Ayer intervient régulièrement dans le secteur et adapte ses propositions aux spécificités de chaque bien.",
    metaTitle: "Architecte d'intérieur à Guebwiller",
    metaDescription:
      "Sonia Ayer, architecte d'intérieur à Guebwiller (Haut-Rhin). Rénovation de maisons bourgeoises et bâtisses historiques. Basée à Colmar, à 25 km.",
  },
  {
    slug: "munster",
    name: "Munster",
    department: "Haut-Rhin",
    distance: "20 km",
    description:
      "La vallée de Munster offre un cadre naturel exceptionnel, et les maisons y sont souvent tournées vers le paysage. Grandes baies vitrées, terrasses, volumes ouverts : l'architecture intérieure à Munster cherche à prolonger cette connexion avec l'extérieur. Sonia Ayer, architecte d'intérieur qui intervient à Munster et dans la vallée, conçoit des espaces où la lumière naturelle et les vues sur les Vosges font partie intégrante du projet. Les rénovations dans ce secteur impliquent aussi une bonne gestion de l'isolation, les hivers en altitude n'étant pas ceux de la plaine.",
    metaTitle: "Architecte d'intérieur à Munster",
    metaDescription:
      "Sonia Ayer, architecte d'intérieur à Munster (Haut-Rhin). Aménagement de maisons de vallée et rénovation dans les Vosges. Basée à Colmar, à 20 km.",
  },
  {
    slug: "kaysersberg",
    name: "Kaysersberg",
    department: "Haut-Rhin",
    distance: "12 km",
    description:
      "Kaysersberg fait partie de ces villages alsaciens où chaque façade raconte quelque chose. Derrière les murs en grès rose et les poutres apparentes, les intérieurs méritent la même attention. Beaucoup de propriétaires cherchent à moderniser leur logement sans dénaturer le caractère du village. Sonia Ayer, architecte d'intérieur à proximité de Kaysersberg, accompagne ces projets avec une approche simple : garder ce qui fait l'âme du lieu et améliorer le reste. La proximité avec Colmar (12 km) permet un suivi de chantier régulier et réactif.",
    metaTitle: "Architecte d'intérieur à Kaysersberg",
    metaDescription:
      "Sonia Ayer, architecte d'intérieur près de Kaysersberg (Haut-Rhin). Rénovation intérieure dans le respect du patrimoine alsacien. Basée à Colmar, à 12 km.",
  },
  {
    slug: "rouffach",
    name: "Rouffach",
    department: "Haut-Rhin",
    distance: "15 km",
    description:
      "Rouffach est au cœur du vignoble alsacien, et les maisons de viticulteurs reconverties en habitations constituent une bonne part des projets d'aménagement dans le secteur. Ces bâtiments ont des volumes généreux (anciens chais, greniers hauts) mais une distribution intérieure qui n'a plus rien à voir avec les usages d'aujourd'hui. L'architecte d'intérieur à Rouffach intervient pour repenser ces espaces en conservant les matériaux nobles : pierre, bois, terre cuite. Sonia Ayer connaît bien ce type de reconversion et travaille avec les artisans locaux du pays de Rouffach.",
    metaTitle: "Architecte d'intérieur à Rouffach",
    metaDescription:
      "Sonia Ayer, architecte d'intérieur à Rouffach (Haut-Rhin). Reconversion de maisons viticoles et rénovation en pays de vignoble. Basée à Colmar, à 15 km.",
  },
  {
    slug: "strasbourg",
    name: "Strasbourg",
    department: "Bas-Rhin",
    distance: "70 km",
    description:
      "À Strasbourg, les projets d'architecture intérieure concernent surtout des appartements : haussmanniens en centre ville, lofts industriels dans le quartier du Port du Rhin, ou logements neufs à la Robertsau et au Wacken. Chaque quartier a ses spécificités, ses volumes, ses contraintes de copropriété. Sonia Ayer, architecte d'intérieur intervenant à Strasbourg depuis Colmar, prend en charge les projets de A à Z, du plan d'aménagement à la réception des travaux. La distance de 70 km n'est pas un obstacle : les visites sont planifiées en amont et le suivi se fait aussi en visio entre les déplacements.",
    metaTitle: "Architecte d'intérieur à Strasbourg",
    metaDescription:
      "Sonia Ayer, architecte d'intérieur à Strasbourg (Bas-Rhin). Aménagement d'appartements, lofts et espaces de vie. Basée à Colmar, intervention sur tout Strasbourg.",
  },
  {
    slug: "mulhouse",
    name: "Mulhouse",
    department: "Haut-Rhin",
    distance: "45 km",
    description:
      "Mulhouse a un patrimoine industriel que d'autres villes alsaciennes n'ont pas. D'anciennes manufactures textiles, des immeubles ouvriers, des cités jardins : le parc immobilier mulhousien est atypique et demande une vraie lecture architecturale avant d'entamer les travaux. En tant qu'architecte d'intérieur intervenant à Mulhouse, Sonia Ayer a travaillé sur la reconversion d'espaces industriels en lieux de vie. Ces projets demandent de jongler entre de grands volumes, des structures métalliques apparentes et des besoins de confort thermique. C'est ce type de défi qui rend le métier intéressant.",
    metaTitle: "Architecte d'intérieur à Mulhouse",
    metaDescription:
      "Sonia Ayer, architecte d'intérieur à Mulhouse (Haut-Rhin). Rénovation d'espaces industriels et aménagement intérieur. Basée à Colmar, à 45 km.",
  },
  {
    slug: "alsace",
    name: "Alsace",
    department: "Grand Est",
    distance: "",
    description:
      "L'architecture alsacienne a un vocabulaire qui lui est propre : colombages, grès des Vosges, tuiles plates, toits pentus. L'aménagement intérieur en Alsace doit composer avec ces éléments sans les ignorer. Ce serait dommage de plaquer un intérieur générique dans une maison qui a 300 ans de caractère. Sonia Ayer, architecte d'intérieur en Alsace, basée à Colmar, intervient sur l'ensemble de la région. Ses projets vont de la rénovation complète de fermes alsaciennes à l'aménagement d'appartements neufs, en passant par le home staging pour la vente. Chaque projet commence par une compréhension du bâti existant.",
    metaTitle: "Architecte d'intérieur en Alsace",
    metaDescription:
      "Sonia Ayer, architecte d'intérieur en Alsace, basée à Colmar. Rénovation, décoration et aménagement intérieur sur toute la région alsacienne. Vue sur M6.",
  },
  {
    slug: "grand-est",
    name: "Grand Est",
    department: "France",
    distance: "",
    description:
      "La région Grand Est couvre un territoire vaste, de l'Alsace à la Champagne en passant par la Lorraine. Chaque territoire a ses matériaux locaux, ses typologies de logement, ses habitudes de construction. Sonia Ayer, architecte d'intérieur dans le Grand Est, se déplace au delà de l'Alsace pour des projets qui le justifient. Son intervention couvre la conception d'intérieur, la maîtrise d'œuvre, le suivi de chantier et le home staging. Les projets hors Alsace font l'objet d'un planning de visites adapté pour garantir un suivi de qualité malgré la distance.",
    metaTitle: "Architecte d'intérieur Grand Est",
    metaDescription:
      "Sonia Ayer, architecte d'intérieur dans le Grand Est. Basée à Colmar en Alsace, elle intervient en Alsace, Lorraine et au delà pour vos projets d'aménagement.",
  },
];
