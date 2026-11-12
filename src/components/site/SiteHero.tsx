import PageHero, { type Crumb } from "@/components/blocks/PageHero";

/** Hero for the company pages (Contact, Blogs, Success Stories, Visa Gallery): semibold title at y446, no form. */
export default function SiteHero({ image, breadcrumb, title }: { image: string; breadcrumb: Crumb[]; title: string }) {
  return <PageHero image={image} breadcrumb={breadcrumb} title={title} titleWeight="semibold" titleWidth={404} tops={{ breadcrumb: 210, title: 446 }} />;
}
