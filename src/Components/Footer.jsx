import { Box, Button, Heading, HStack, Input, Stack, VStack, Text } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from 'react-icons/ai'

const Footer = () => {
  return (
   <Box
   bgColor={'blackAlpha.900'}
   minH={'40'}
   p='16'
   color={'white'}
   >
      <Stack direction={['column', 'row']}>
    <VStack  alignItems={'stretch'} w={'full'} px={'4'}>
        <Heading size={'md'} textTransform='uppercase' textAlign={['center', 'left']}>Email Us</Heading>
        <HStack borderBottom={'2px solid white'} py='2'>
            <Input placeholder='Enter email here....' border={'none'} borderRadius={'none'} focusBorderColor={'none'}/>
            <Button p={'0'}
            color='purple'
            variant={'ghost'}
            borderRadius={'0 20px 20px 0'}
            >
                <AiOutlineSend size={'20'} />
            </Button>
        </HStack>
    </VStack>
    <VStack w={'full'} borderLeft={['none', '1px solid white']} borderRight={['none', '1px solid white']}>
        <Heading size={'md'} textTransform='uppercase' textAlign={'center'}>Video Hub</Heading>
        <Text> All rights received</Text>
    </VStack>
    <VStack w={'full'} borderLeft={['none', '1px solid white']} borderRight={['none', '1px solid white']}>
        <Heading size={'md'} textTransform='uppercase'>Social media</Heading>
        <Button variant={'link'} colorScheme={'white'}>
            <a href="https://github.com/faisalCode10" target={'blank'} >Github</a>
        </Button>
        <Button variant={'link'} colorScheme={'white'}>
            <a href="https://instagram.com/fai._.sal10" target={'blank'} >Instagram</a>
        </Button>
        <Button variant={'link'} colorScheme={'white'}>
            <a href="https://linkedin.com/FaisalKhan" target={'blank'} >Linkedin</a>
        </Button>
    </VStack>
        
    </Stack>

   </Box>
  )
}

export default Footer
