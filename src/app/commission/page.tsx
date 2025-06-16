"use client";

import { Flex, Heading, Text, Card, Icon, IconButton, Row } from "@once-ui-system/core";
import { social } from "@/resources";

const SOCIALS_TO_SHOW = ["Instagram", "Twitter", "Bluesky"];

export default function CommissionPage() {
  return (
    <Flex fillHeight fillWidth horizontal="center" vertical="center">
      <Card padding="32" radius="l" shadow="xl" style={{ maxWidth: 400, minWidth: 0, textAlign: "center", margin: "0 auto", cursor: "default" }}>
        <Flex vertical="center" horizontal="center" gap="16" direction="column">
          <Icon name="document" size="xl" onBackground="accent-strong" />
          <Heading as="h1" variant="heading-strong-l" align="center" onBackground="accent-strong">
            Commissions are currently CLOSED
          </Heading>
          <Text align="center" onBackground="neutral-weak">
            Please check back later or follow on social media for updates.
          </Text>
          <Row gap="12" horizontal="center" marginTop="16">
            {social.filter(s => SOCIALS_TO_SHOW.includes(s.name)).map(s => (
              <IconButton
                key={s.name}
                icon={s.icon}
                href={s.link}
                variant="secondary"
                size="m"
                tooltip={s.name}
                tooltipPosition="top"
                target="_blank"
                rel="noopener noreferrer"
              />
            ))}
          </Row>
        </Flex>
      </Card>
    </Flex>
  );
} 