import { Flex, Meta, Schema, Heading, Text, Card, Grid, Media } from "@once-ui-system/core";
import { AccordionGroup, TiltFx } from "@once-ui-system/core";
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

const SECTIONS = [
  {
    title: "Charms",
    subsections: [
      { title: "CR", content: "Coming soon" },
      { title: "Teen Titans", content: "Coming soon" },
    ],
  },
  {
    title: "Prints",
    subsections: [
    ],
  },
  {
    title: "On Site Commissions",
    subsections: [
    ],
  },
  {
    title: "Personal Art",
    subsections: [
    ],
  },
];

export default function Gallery() {
  return (
    <Flex maxWidth="l" direction="column" gap="48">
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
      {SECTIONS.map((section) => (
        <Flex key={section.title} direction="column" gap="24">
          <Heading as="h2" variant="heading-strong-xl" align="center">{section.title}</Heading>
          {section.subsections && section.subsections.length > 0 ? (
            <Flex gap="24" wrap>
              {section.subsections.map((sub) => (
                <Card key={sub.title} radius="l" padding="24" style={{ minWidth: 240, flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'default' }}>
                  <Heading as="h3" variant="heading-strong-m" align="center" onBackground="neutral-weak">{sub.title}</Heading>
                  <Grid fillWidth columns="3" mobileColumns="2" gap="12" style={{ marginTop: 16 }}>
                    {[1,2,3,4,5,6].map((i) => (
                      <TiltFx key={i} aspectRatio={4/3} radius="m">
                        <Media
                          src={`https://unsplash.it/400/300?image=${i*10}`}
                          alt={`Placeholder artwork ${i}`}
                          aspectRatio="4/3"
                          radius="m"
                          border="neutral-alpha-medium"
                          sizes="200px"
                        />
                      </TiltFx>
                    ))}
                  </Grid>
                </Card>
              ))}
            </Flex>
          ) : (
            <Flex gap="24" wrap>
              <Card radius="l" padding="24" style={{ minWidth: 240, flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'default' }}>
                <Grid fillWidth columns="3" mobileColumns="2" gap="12" style={{ marginTop: 16 }}>
                  {[1,2,3,4,5,6].map((i) => (
                    <TiltFx key={i} aspectRatio={4/3} radius="m">
                      <Media
                        src={`https://unsplash.it/400/300?image=${i*20}`}
                        alt={`Placeholder artwork ${i}`}
                        aspectRatio="4/3"
                        radius="m"
                        border="neutral-alpha-medium"
                        sizes="200px"
                      />
                    </TiltFx>
                  ))}
                </Grid>
              </Card>
            </Flex>
          )}
        </Flex>
      ))}
    </Flex>
  );
}
