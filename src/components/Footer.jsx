import { ReactNode } from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Heading,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';


// const ListHeader = ({ children }) => {
//     return (
//       <Text fontWeight={'1000'} fontSize={'2xl'} mb={2}>
//         {children}
//       </Text>
//     );
//   };
//   const ListHeader2 = ({ children }) => {
//     return (
//       <Text fontWeight={'700'} fontSize={'2xl'} mb={2}>
//         {children}
//       </Text>
//     );
//   };

  const SocialButton = ({
    children,
    label,
    href,
  }  ) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };

export default function Footer() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Stack} maxW={'8xl'} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={4}>

            <Stack align={'flex-start'}>
              <Heading>Shop Non-Stop On Meesho</Heading>
              <Text>Trusted by more than 1 Crore Indians
                Cash on Delivery | Free Delivery</Text>
            </Stack>



            <Stack align={'flex-start'} paddingTop={10} paddingLeft={[32,30,10,10]}>
              <Link href={'#'}>Careers</Link>
              <Link href={'#'}>Become a Supplier</Link>
              <Link href={'#'}>Our Influencer Program</Link>
              <Link href={'#'}>Hall of Fame</Link>
            </Stack>
  
            <Stack align={'flex-start'} paddingTop={10} paddingLeft={[32,30,10,10]}>
              <Link href={'#'}>Legal and Policies</Link>
              <Link href={'#'}>Meesho Tech Blog</Link>
              <Link href={'#'}>Notices and Returns</Link>
            </Stack>
  
            <Stack align={'flex-start'} alignItems={"left"}>
                <Heading>Contact US</Heading>
               <Text>Fashnear Technologies Private Limited,
CIN: U74900KA2015PTC082263
06-105-B, 06-102, (138 Wu) Vaishnavi Signature, No. 78/9, Outer Ring Road, Bellandur, Varthur Hobli, Bengaluru-560103, Karnataka, India
E-mail address: query@meesho.com
© 2015-2022 Meesho.com</Text>
            </Stack>
  
            {/* <Stack align={'flex-start'}>
              <ListHeader>Install App</ListHeader>
              <AppStoreBadge />
              <PlayStoreBadge />
            </Stack> */}
          </SimpleGrid>
        </Container>
  
        <Box
          borderTopWidth={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}>
          <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ md: 'space-between' }}
            align={{ md: 'center' }}>
            <Text>© 2022 Meesho. All rights reserved</Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
    );
  }