import { Flex, Link, Text, Container, VStack, useColorModeValue } from '@chakra-ui/react';

const footerData = [
  {
    label: 'Use EventMgt',
    href: '#',
    links: [
      { label: 'Find Event', href: '#' },
      { label: 'Create Event', href: '#' },
      
      { label: 'Community', href: '#' }
    ]
  },
  
  {
    label: 'Find Event',
    href: '#',
    links: [
      { label: 'Jakarta', href: '#' },
      { label: 'Bandung', href: '#' },
      { label: 'Bekasi', href: '#' },
      { label: 'Makasar', href: '#' },
      { label: 'Batam', href: '#' },
      { label: 'Papua', href: '#' },
      { label: 'Surabaya', href: '#' },
      { label: 'Japan', href: '#' },
      { label: 'Rusia', href: '#' },
    ]
  },
  {
    label: 'Social',
    href: '#',
    links: [
      { label: 'Email', href: '#' },
      { label: 'Twitter', href: '#' },
      { label: 'Github', href: '#' },
      { label: 'Linkedin', href: '#' },
      { label: 'RSS', href: '#' }
    ]
  }
];

const Footer = () => {
  return (
    <Container  maxW="7xl" p={{ base: 5, md: 10 }}>
      <VStack spacing={5} alignItems="initial">
        <Flex
          flexWrap="wrap"
          direction={{ base: 'column', md: 'row' }}
          alignItems="start"
          justifyContent="space-between"
        >
          {footerData.map((data, index) => (
            <Flex key={index} direction="column" mb="3">
              <Link
                fontWeight="500"
                href={data.href}
                color={useColorModeValue('gray.800', 'gray.300')}
              >
                {data.label}
              </Link>
              <Flex direction={{ base: 'row', md: 'column' }}>
                {data.links.map((link, index) => (
                  <Link
                    key={index}
                    padding={1}
                    fontSize={{ base: 'sm', sm: 'md' }}
                    href="#"
                    mr={{ base: 1, sm: 2, md: 0 }}
                    color="gray.500"
                    _hover={{ color: 'blue.600' }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Flex>
            </Flex>
          ))}
        </Flex>
        <Flex alignItems="center">
          <Text color="gray.500" fontSize="0.875rem" pl="0.5rem">
            &copy; 2019 company, Inc. All rights reserved.
          </Text>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Footer;