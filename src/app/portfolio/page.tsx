import { Flex, Meta, Schema } from "@once-ui-system/core";
import MasonryGrid from "@/components/gallery/MasonryGrid";
import { baseURL, portfolio, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: portfolio.title,
    description: portfolio.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(portfolio.title)}`,
    path: portfolio.path,
  });
}

export default function Gallery() {
  return (
    <Flex maxWidth="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={portfolio.title}
        description={portfolio.description}
        path={portfolio.path}
        image={`/api/og/generate?title=${encodeURIComponent(portfolio.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${portfolio.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <MasonryGrid />
    </Flex>
  );
}
