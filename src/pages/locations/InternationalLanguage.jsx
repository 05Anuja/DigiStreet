import React from "react";
import LocationPageTemplate from "../../components/LocationPageTemplate";

export default function InternationalLanguage({ lang = "es" }) {
  const configs = {
    es: {
      cityName: "España y Latinoamérica",
      badge: "Mercados Hispanohablantes",
      title: "Agencia de Marketing Digital y SEO Internacional | Silgate",
      subtitle:
        "Estrategias de Crecimiento Global, Posicionamiento SEO en Español, Publicidad de Alto Rendimiento y Desarrollo Web",
      description:
        "Silgate Media ayuda a empresas en España, México y Latinoamérica a expandir su presencia digital en mercados internacionales con soluciones completas de marketing digital.",
      breadcrumbs: [
        { label: "Internacional", link: "/services" },
        { label: "Mercado Hispano (ES)" },
      ],
      officeAddress:
        "Paseo de la Castellana, Madrid, España & Ciudad de México",
      stats: [
        { value: "500M+", label: "Audiencia Hispanohablante" },
        { value: "4.9★", label: "Satisfacción del Cliente" },
        { value: "14+", label: "Años de Excelencia Digital" },
        { value: "Top 20", label: "Galardón Silicon India" },
      ],
      localInsightsTitle:
        "Dominando la Visibilidad Digital en el Mercado de Habla Hispana",
      localInsightsText:
        "Conectar con consumidores y empresas en mercados hispanohablantes exige localización cultural precisa, optimización técnica para Google España y Google LATAM, y narrativas de marca atractivas.",
      services: [
        {
          title: "SEO Internacional en Español",
          desc: "Optimización técnica, etiquetas hreflang y contenido localizado para posicionarse en los primeros lugares de búsqueda en España y América Latina.",
        },
        {
          title: "Campañas de Rendimiento (Google y Meta Ads)",
          desc: "Adquisición de clientes rentable con segmentación hiperlocal en mercados clave de habla hispana.",
        },
        {
          title: "Diseño Web Corporativo y Desarrollo eCommerce",
          desc: "Sitios web rápidos y receptivos construidos con las tecnologías más modernas para máxima conversión.",
        },
        {
          title: "Marketing de Contenidos y Redes Sociales",
          desc: "Historias auténticas y producción de video que resuenan con la cultura local de cada país.",
        },
      ],
      faqs: [
        {
          q: "¿Ofrecen servicios completamente en español?",
          a: "Sí, contamos con especialistas bilingües y redactores nativos de español para gestionar sus campañas y comunicaciones.",
        },
        {
          q: "¿Cómo podemos iniciar una consulta estratégica?",
          a: "Puede contactarnos a través del formulario en línea o solicitar una sesión de descubrimiento sin costo.",
        },
      ],
    },
    de: {
      cityName: "Deutschland & DACH Region",
      badge: "DACH Region Hub",
      title:
        "Internationale Digital- und SEO-Agentur für den deutschen Markt | Silgate",
      subtitle:
        "Datengetriebenes Performance-Marketing, Technisches SEO, Content-Marketing & Webentwicklung für Deutschland, Österreich und die Schweiz",
      description:
        "Silgate Media unterstützt Unternehmen in der DACH-Region mit erstklassigen digitalen Strategien, technischem SEO und hoher Conversion-Optimierung.",
      breadcrumbs: [
        { label: "International", link: "/services" },
        { label: "DACH Markt (DE)" },
      ],
      officeAddress: "Kurfürstendamm, Berlin & Frankfurt am Main, Deutschland",
      stats: [
        { value: "100M+", label: "DACH Markt Reichweite" },
        { value: "4.9★", label: "Kundenbewertung" },
        { value: "14+", label: "Jahre Digitale Exzellenz" },
        { value: "Top 20", label: "Silicon India Award" },
      ],
      localInsightsTitle: "Erfolgreich im anspruchsvollen DACH-Wirtschaftsraum",
      localInsightsText:
        "Deutsche und europäische Unternehmen legen höchsten Wert auf Datenschutz, technische Präzision und nachhaltigen ROI. Silgate liefert DSGVO-konforme, transparente Performance-Lösungen.",
      services: [
        {
          title: "Technisches SEO & Suchmaschinenoptimierung",
          desc: "Top-Rankings auf Google.de durch saubere Schema-Architektur, PageSpeed-Optimierung und hochwertige Backlinks.",
        },
        {
          title: "B2B Lead-Generierung & LinkedIn Marketing",
          desc: "Systematische Neukundengewinnung für deutsche Industrie-, Technologie- und Dienstleistungsunternehmen.",
        },
        {
          title: "Performance Marketing (Google & Social Ads)",
          desc: "Effizientes Medienbudget-Management mit transparenter Attribution und messbaren Conversions.",
        },
        {
          title: "DSGVO-Konforme Webentwicklung",
          desc: "Moderne, hochperformante Webseiten nach höchsten europäischen Sicherheits- und Datenschutzstandards.",
        },
      ],
      faqs: [
        {
          q: "Sind Ihre Kampagnen vollständig DSGVO-konform?",
          a: "Ja, alle Kampagnen, Tracking-Mechanismen und Formulare erfüllen die strengen Vorgaben der europäischen DSGVO.",
        },
        {
          q: "Wie läuft die Zusammenarbeit ab?",
          a: "Wir arbeiten in agilen Sprints mit wöchentlichen Reportings und festen deutsch- bzw. englischsprachigen Ansprechpartnern.",
        },
      ],
    },
    ja: {
      cityName: "日本 (Japan)",
      badge: "Japan & APAC Expansion Hub",
      title: "日本市場向けデジタルマーケティング & SEOエージェンシー | Silgate",
      subtitle:
        "グローバル基準の技術的SEO、成果報酬型広告、ブランドコミュニケーションおよびウェブ開発",
      description:
        "Silgate Mediaは、日本市場での認知拡大および海外展開を目指す企業に向けて、包括的なデジタルマーケティングソリューションを提供しています。",
      breadcrumbs: [
        { label: "International", link: "/services" },
        { label: "Japan Market (JA)" },
      ],
      officeAddress: "Marunouchi, Chiyoda-ku, Tokyo 100-0005, Japan",
      stats: [
        { value: "125M+", label: "Japan Population Reach" },
        { value: "4.9★", label: "Client Satisfaction" },
        { value: "14+", label: "Years Digital Excellence" },
        { value: "Top 20", label: "Silicon India Award" },
      ],
      localInsightsTitle: "日本市場における信頼性とデジタル成長の構築",
      localInsightsText:
        "日本のビジネス文化では、高い信頼性と精緻な品質が最優先されます。Silgateは、グローバルな技術力と日本市場の商習慣への深い配慮を融合させた成長戦略を提供します。",
      services: [
        {
          title: "日本語対応の技術的SEO",
          desc: "Yahoo! JAPANおよびGoogle検索に対応したローカライズドSEO戦略と構造化データの実装。",
        },
        {
          title: "B2BおよびEC向け高効率広告運用",
          desc: "厳密なデータ分析に基づくGoogle広告、Meta広告、LINE広告の戦略的運用。",
        },
        {
          title: "モダンなWeb制作および開発",
          desc: "高速表示とモバイル最適化を実現するReact/Next.jsベースの高品質ウェブサイト構築。",
        },
        {
          title: "海外展開およびインバウンド支援",
          desc: "日本企業のグローバル進出および訪日外国人向けインバウンドマーケティング支援。",
        },
      ],
      faqs: [
        {
          q: "どのようなコミュニケーション体制ですか？",
          a: "専任のプロジェクトマネージャーが定期的なミーティングと詳細なレポートを通じて進捗を報告いたします。",
        },
        {
          q: "相談から開始までの期間はどのくらいですか？",
          a: "要件定義と戦略策定を行い、最短10〜14営業日で施策を開始可能です。",
        },
      ],
    },
  };

  const currentConfig = configs[lang] || configs.es;

  return <LocationPageTemplate {...currentConfig} />;
}
